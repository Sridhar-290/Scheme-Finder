import { Navbar } from "./navbar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="relative mt-12 border-t-0 bg-gradient-to-br from-orange-50 via-white to-green-50 dark:from-orange-950/20 dark:via-background dark:to-green-950/20 py-12 md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-[length:200%_100%] animate-gradient" />
        <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-orange-500/8 blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-green-500/8 blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-blue-500/8 blur-3xl animate-pulse delay-300" />
        <div className="absolute top-3/4 right-1/5 -translate-y-1/2 h-28 w-28 rounded-full bg-purple-500/8 blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full bg-yellow-500/8 blur-3xl animate-pulse delay-500" />
        <div className="container relative flex flex-col items-center justify-between gap-6 md:h-24 md:flex-row px-4">
          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="h-12 w-[3px] rounded-full bg-gradient-to-b from-orange-500 via-blue-500 to-green-500 animate-pulse" />
            <div>
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left transition-all duration-300 hover:translate-x-1">
                Built by{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent font-extrabold text-lg animate-in fade-in zoom-in duration-500 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:via-blue-500 group-hover:to-orange-500 transition-all duration-500">
                    SCM
                  </span>
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>{" "}
                for the citizens of India. Information provided is for guidance only.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="group flex items-center gap-1.5 cursor-default transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse group-hover:animate-bounce" />
              <span className="text-orange-600 dark:text-orange-400 transition-colors duration-300 group-hover:text-orange-500">सेवा</span>
            </div>
            <span className="text-muted-foreground/30">|</span>
            <div className="group flex items-center gap-1.5 cursor-default transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-150 group-hover:animate-bounce" />
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-500">समर्पण</span>
            </div>
            <span className="text-muted-foreground/30">|</span>
            <div className="group flex items-center gap-1.5 cursor-default transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse delay-300 group-hover:animate-bounce" />
              <span className="text-green-600 dark:text-green-400 transition-colors duration-300 group-hover:text-green-500">विकास</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/30 font-medium">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-muted-foreground/20" />
            जय हिंद
            <span className="h-px w-8 bg-gradient-to-r from-muted-foreground/20 to-transparent" />
          </div>
        </div>
      </footer>
    </div>
  );
}
