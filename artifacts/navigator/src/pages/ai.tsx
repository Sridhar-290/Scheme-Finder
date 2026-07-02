import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Link } from "wouter";
import { 
  useGetConversations, 
  useCreateConversation, 
  useGetConversation, 
  useSendMessage,
  getGetConversationsQueryKey,
  getGetConversationQueryKey
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send, MessageSquarePlus, MessageSquare, Loader2, Sparkles } from "lucide-react";

export default function AI() {
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: conversations, isLoading: loadingConvos } = useGetConversations({
    query: { enabled: isAuthenticated, queryKey: getGetConversationsQueryKey() }
  });

  const { data: activeChat, isLoading: loadingChat } = useGetConversation(activeId!, {
    query: { enabled: !!activeId, queryKey: getGetConversationQueryKey(activeId!) }
  });

  const createMutation = useCreateConversation({
    mutation: {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: getGetConversationsQueryKey() });
        setActiveId(data.id);
      }
    }
  });

  const sendMutation = useSendMessage({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetConversationQueryKey(activeId!) });
        setInput("");
      }
    }
  });

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  // Create first convo if none exists
  useEffect(() => {
    if (isAuthenticated && conversations?.length === 0 && !createMutation.isPending) {
      createMutation.mutate({ data: { title: "New Conversation" } });
    } else if (isAuthenticated && conversations?.length && !activeId) {
      setActiveId(conversations[0].id);
    }
  }, [isAuthenticated, conversations, activeId]);

  if (!isAuthenticated) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center">
        <div className="bg-primary/10 p-6 rounded-full mb-6">
          <Bot className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">AI Benefits Assistant</h1>
        <p className="text-muted-foreground max-w-md mb-8 text-lg">
          Log in to chat with our AI assistant. Get personalized answers about schemes, eligibility, and the application process.
        </p>
        <Link href="/login">
          <Button size="lg" className="px-8">Log in to Chat</Button>
        </Link>
      </div>
    );
  }

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !activeId || sendMutation.isPending) return;
    sendMutation.mutate({ id: activeId, data: { content: input } });
  };

  const handleSuggestion = (text: string) => {
    if (!activeId || sendMutation.isPending) return;
    sendMutation.mutate({ id: activeId, data: { content: text } });
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/30 flex flex-col hidden md:flex shrink-0">
        <div className="p-4 border-b">
          <Button 
            className="w-full justify-start gap-2" 
            variant="outline"
            onClick={() => createMutation.mutate({ data: { title: "New Conversation" } })}
            disabled={createMutation.isPending}
          >
            <MessageSquarePlus className="h-4 w-4" />
            New Chat
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {loadingConvos ? (
              <div className="p-4 text-center text-sm text-muted-foreground">Loading...</div>
            ) : conversations?.map(conv => (
              <button
                key={conv.id}
                onClick={() => setActiveId(conv.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-2 truncate ${
                  activeId === conv.id 
                    ? "bg-secondary/20 text-secondary-foreground font-medium" 
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span className="truncate">{conv.title}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-6" ref={scrollRef}>
          {loadingChat ? (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary/50" />
            </div>
          ) : !activeChat?.messages.length ? (
            <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-8">
              <div className="bg-primary/5 p-4 rounded-full">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">How can I help you today?</h2>
                <p className="text-muted-foreground">Ask me anything about government schemes, eligibility rules, or the application process.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mt-8">
                {[
                  "What schemes am I eligible for?",
                  "Explain PM-KISAN scheme",
                  "What documents do I need for an education loan?",
                  "Compare Sukanya Samriddhi and PPF"
                ].map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestion(suggestion)}
                    className="p-3 text-sm text-left border rounded-lg bg-card hover:bg-muted/50 hover:border-primary/30 transition-colors shadow-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6 pb-4">
              {activeChat.messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  
                  <div className={`px-4 py-3 rounded-2xl max-w-[85%] ${
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-tr-sm" 
                      : "bg-muted text-foreground rounded-tl-sm border"
                  }`}>
                    {/* Note: In a real app we'd use react-markdown here */}
                    <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{msg.content}</p>
                  </div>

                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <User className="h-5 w-5 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {sendMutation.isPending && (
                <div className="flex gap-4 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-muted rounded-tl-sm border flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-background border-t">
          <form onSubmit={handleSend} className="max-w-3xl mx-auto relative flex items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about schemes, eligibility, documents..."
              className="pr-12 py-6 text-base rounded-xl shadow-sm bg-muted/30 focus-visible:bg-background transition-colors"
              disabled={sendMutation.isPending || !activeId}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="absolute right-2 rounded-lg h-9 w-9"
              disabled={!input.trim() || sendMutation.isPending || !activeId}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-muted-foreground">AI can make mistakes. Verify important information on official government portals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
