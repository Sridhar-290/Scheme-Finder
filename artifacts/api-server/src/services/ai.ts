import OpenAI from "openai";
import { SCHEMES } from "../data/schemes.js";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const SYSTEM_PROMPT = `You are a helpful AI Benefits Advisor for Indian citizens. You help users discover and understand government welfare schemes and benefits they may be eligible for.

You have deep knowledge of Indian government schemes across categories like Agriculture, Education, Health, Housing, Women & Child Development, Employment, Social Welfare, Financial Inclusion, and Rural Development.

You can:
1. Recommend schemes based on a user's profile (age, state, income, occupation, gender, category/caste)
2. Explain eligibility criteria in simple, clear language
3. Compare two or more schemes and explain differences
4. Suggest the best scheme for a specific situation
5. Explain the application process step by step
6. Describe benefits in practical terms

Always:
- Use simple, friendly language that any Indian citizen can understand
- Be specific about rupee amounts, timelines, and eligibility criteria
- Mention official websites and helpline numbers when relevant
- Acknowledge limitations and suggest contacting official departments for the most current information
- If asked about a specific scheme not in your knowledge, be honest but still helpful

Current date: ${new Date().toLocaleDateString('en-IN')}`;

const MOCK_RESPONSES: Record<string, string> = {
  default: `I'm your Benefits Advisor! I can help you with:

- **Finding schemes** you're eligible for based on your profile
- **Explaining eligibility** in simple language
- **Comparing schemes** to find the best option for you
- **Step-by-step guidance** on how to apply

Try asking me something like:
- "What schemes are available for farmers?"
- "Explain PM-KISAN eligibility"
- "What health schemes are available for BPL families?"`,

  farmer: `For farmers in India, here are the most important schemes:

**1. PM-KISAN** — ₹6,000/year direct income support
- Just register at pmkisan.gov.in with Aadhaar + land records

**2. Pradhan Mantri Fasal Bima Yojana** — Crop insurance at 1.5-5% premium
- Covers loss due to floods, drought, pests

**3. Kisan Credit Card** — Loan up to ₹3 lakh at 7% interest (effectively 4% with subsidy)
- Apply at any nationalized bank

**4. PM-KUSUM** — Solar pump at 90% subsidy
- Apply through state energy department

Would you like details on any of these?`,

  health: `For health-related benefits, key schemes include:

**Ayushman Bharat (PMJAY)** — ₹5 lakh/year health insurance
- For BPL families, check eligibility at pmjay.gov.in

**Janaushadhi Kendras** — Generic medicines at 50-90% discount
- Find nearest kendra at janaushadhi.gov.in

**PMMVY** — ₹5,000 for first pregnancy
- Apply at nearest Anganwadi centre

**National Dialysis Programme** — Free dialysis for BPL patients
- Available at district hospitals

What is your specific health need?`,

  education: `For students and education-related schemes:

**National Scholarship Portal (NSP)** — scholarships.gov.in
- Multiple scholarships for SC/ST/OBC/minority/EWS students
- Apply August–November each year

**PM YASASVI** — For OBC/EBC students
- Pre-matric: ₹4,000–₹13,500/year
- Post-matric: ₹5,000–₹15,000/year

**NMMS** — ₹12,000/year for meritorious Class 8 students
- Qualifying exam held November–December

**Vidya Lakshmi** — Education loans from multiple banks
- Apply at vidyalakshmi.co.in

Which level of education and community do you belong to?`,
};

function getMockResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("farm") || lower.includes("kisan") || lower.includes("crop") || lower.includes("agriculture")) {
    return MOCK_RESPONSES.farmer!;
  }
  if (lower.includes("health") || lower.includes("hospital") || lower.includes("medical") || lower.includes("insurance")) {
    return MOCK_RESPONSES.health!;
  }
  if (lower.includes("education") || lower.includes("school") || lower.includes("scholarship") || lower.includes("student")) {
    return MOCK_RESPONSES.education!;
  }
  return MOCK_RESPONSES.default!;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function generateAIResponse(
  messages: ChatMessage[],
  userProfile?: { age?: number; state?: string; income?: number; occupation?: string; gender?: string; category?: string }
): Promise<string> {
  if (!openai) {
    const lastUserMessage = messages[messages.length - 1]?.content ?? "";
    return getMockResponse(lastUserMessage);
  }

  const systemContext = userProfile
    ? `${SYSTEM_PROMPT}\n\nUser Profile: Age: ${userProfile.age ?? "unknown"}, State: ${userProfile.state ?? "unknown"}, Annual Income: ₹${userProfile.income?.toLocaleString('en-IN') ?? "unknown"}, Occupation: ${userProfile.occupation ?? "unknown"}, Gender: ${userProfile.gender ?? "unknown"}, Category: ${userProfile.category ?? "unknown"}`
    : SYSTEM_PROMPT;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemContext },
      ...messages.slice(-20).map(m => ({ role: m.role, content: m.content })),
    ],
    max_tokens: 1024,
  });

  return response.choices[0]?.message?.content ?? "I'm sorry, I couldn't generate a response. Please try again.";
}

export function checkEligibility(criteria: {
  age: number;
  state: string;
  income: number;
  gender: string;
  occupation: string;
  category: string;
}) {
  const eligible: { scheme: typeof SCHEMES[0]; reason: string; matchScore: number; requiredDocuments: string[]; missingCriteria?: string }[] = [];
  const partiallyEligible: typeof eligible = [];

  for (const scheme of SCHEMES) {
    const missing: string[] = [];
    let score = 60;

    if (scheme.minAge !== null && criteria.age < scheme.minAge) {
      missing.push(`Minimum age is ${scheme.minAge} years`);
    } else if (scheme.minAge !== null) {
      score += 10;
    }

    if (scheme.maxAge !== null && criteria.age > scheme.maxAge) {
      missing.push(`Maximum age is ${scheme.maxAge} years`);
    }

    if (scheme.maxIncome !== null && criteria.income > scheme.maxIncome) {
      missing.push(`Income limit is ₹${scheme.maxIncome.toLocaleString('en-IN')}/year`);
    } else if (scheme.maxIncome !== null) {
      score += 10;
    }

    if (scheme.gender && scheme.gender !== "all" && scheme.gender !== criteria.gender) {
      missing.push(`Scheme is for ${scheme.gender} only`);
    } else if (scheme.gender) {
      score += 10;
    }

    if (scheme.occupation && scheme.occupation !== criteria.occupation && criteria.occupation !== "") {
      const matches = scheme.occupation.toLowerCase().includes(criteria.occupation.toLowerCase()) ||
        criteria.occupation.toLowerCase().includes(scheme.occupation.toLowerCase());
      if (!matches) {
        missing.push(`Intended for ${scheme.occupation}s`);
      } else {
        score += 15;
      }
    }

    // Category bonus
    if (criteria.category === "SC" || criteria.category === "ST") score += 5;

    if (missing.length === 0) {
      eligible.push({
        scheme,
        reason: `You meet all the eligibility criteria for this scheme.`,
        matchScore: Math.min(score, 100),
        requiredDocuments: scheme.documents,
      });
    } else if (missing.length <= 1) {
      partiallyEligible.push({
        scheme,
        reason: `You meet most criteria but: ${missing.join(", ")}.`,
        matchScore: Math.max(30, score - 20),
        requiredDocuments: scheme.documents,
        missingCriteria: missing[0],
      });
    }
  }

  eligible.sort((a, b) => b.matchScore - a.matchScore);
  partiallyEligible.sort((a, b) => b.matchScore - a.matchScore);

  const topEligible = eligible.slice(0, 15);
  const topPartial = partiallyEligible.slice(0, 10);

  const totalBenefit = topEligible.length > 3
    ? "₹1,00,000+ in combined annual benefits"
    : topEligible.length > 0
    ? "₹50,000+ in combined benefits"
    : "Check individual scheme benefits";

  return {
    eligible: topEligible,
    partiallyEligible: topPartial,
    totalEstimatedBenefit: totalBenefit,
  };
}

export function checkSingleSchemeEligibility(
  schemeId: string,
  criteria: {
    age: number;
    state: string;
    income: number;
    gender: string;
    occupation: string;
    category: string;
  },
) {
  const scheme = SCHEMES.find(s => s.id === schemeId);
  if (!scheme) return null;

  const missing: string[] = [];
  let score = 60;

  if (scheme.minAge !== null && criteria.age < scheme.minAge) {
    missing.push(`Minimum age is ${scheme.minAge} years`);
  } else if (scheme.minAge !== null) {
    score += 10;
  }

  if (scheme.maxAge !== null && criteria.age > scheme.maxAge) {
    missing.push(`Maximum age is ${scheme.maxAge} years`);
  }

  if (scheme.maxIncome !== null && criteria.income > scheme.maxIncome) {
    missing.push(`Income limit is ₹${scheme.maxIncome.toLocaleString('en-IN')}/year`);
  } else if (scheme.maxIncome !== null) {
    score += 10;
  }

  if (scheme.gender && scheme.gender !== "all" && scheme.gender !== criteria.gender) {
    missing.push(`Scheme is for ${scheme.gender} only`);
  } else if (scheme.gender) {
    score += 10;
  }

  if (scheme.occupation && scheme.occupation !== criteria.occupation && criteria.occupation !== "") {
    const matches = scheme.occupation.toLowerCase().includes(criteria.occupation.toLowerCase()) ||
      criteria.occupation.toLowerCase().includes(scheme.occupation.toLowerCase());
    if (!matches) {
      missing.push(`Intended for ${scheme.occupation}s`);
    } else {
      score += 15;
    }
  }

  if (criteria.category === "SC" || criteria.category === "ST") score += 5;

  const matchScore = Math.min(score, 100);

  return {
    eligible: missing.length === 0,
    partiallyEligible: missing.length === 1,
    matchScore,
    reason: missing.length === 0
      ? "You meet all the eligibility criteria for this scheme."
      : `You meet most criteria but: ${missing.join(", ")}.`,
    missingCriteria: missing.length > 0 ? missing[0] : null,
    requiredDocuments: scheme.documents,
  };
}
