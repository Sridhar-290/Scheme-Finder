import { Router } from "express";
import { SCHEMES, SchemeData } from "../data/schemes.js";

const CATEGORY_COLORS: Record<string, string> = {
  Agriculture: "#22c55e",
  Education: "#3b82f6",
  Health: "#ef4444",
  Housing: "#f59e0b",
  "Women & Child": "#ec4899",
  Employment: "#8b5cf6",
  "Social Welfare": "#f97316",
  "Financial Inclusion": "#06b6d4",
  "Rural Development": "#84cc16",
  "Skill Development": "#6366f1",
  "Environment & Energy": "#10b981",
  "Sports & Youth": "#d946ef",
  "Digital India": "#0ea5e9",
  "Minority Welfare": "#a855f7",
  "Tribal Welfare": "#d97706",
};

function svgDataUri(color: string, label: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="100%" stop-color="${color}dd"/>
    </linearGradient></defs>
    <rect fill="url(#g)" width="600" height="400"/>
    <text x="300" y="200" text-anchor="middle" fill="white" font-size="28" font-family="sans-serif" font-weight="bold" opacity="0.8">${label}</text>
  </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

const CATEGORY_IMAGES: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_COLORS).map(([cat, color]) => [cat, svgDataUri(color, cat)])
);

const SCHEME_IMAGES: Record<string, string> = {};

function withImage<T extends SchemeData>(s: T): T & { image: string } {
  return { ...s, image: SCHEME_IMAGES[s.id] || CATEGORY_IMAGES[s.category] || CATEGORY_IMAGES["Agriculture"] };
}

export const schemesRouter = Router();

schemesRouter.get("/stats", (_req, res) => {
  const centralSchemes = SCHEMES.filter(s => s.schemeType === "central").length;
  const stateSchemes = SCHEMES.filter(s => s.schemeType === "state").length;
  
  const counts: Record<string, number> = {};
  for (const scheme of SCHEMES) {
    counts[scheme.category] = (counts[scheme.category] ?? 0) + 1;
  }
  const categoryCounts = Object.entries(counts).map(([category, count]) => ({ category, count }));

  res.json({
    totalSchemes: SCHEMES.length,
    categoryCounts,
    centralSchemes,
    stateSchemes,
    totalBeneficiaries: "50+ crore",
  });
});

schemesRouter.get("/featured", (_req, res) => {
  const featured = SCHEMES.filter(s => s.isFeatured).slice(0, 8);
  res.json(featured.map(withImage));
});

schemesRouter.get("/categories", (_req, res) => {
  const counts: Record<string, number> = {};
  for (const scheme of SCHEMES) {
    counts[scheme.category] = (counts[scheme.category] ?? 0) + 1;
  }
  const categories = Object.entries(counts).map(([category, count]) => ({ category, count }));
  res.json(categories);
});

schemesRouter.get("/:id", (req, res) => {
  const scheme = SCHEMES.find(s => s.id === req.params["id"]);
  if (!scheme) {
    res.status(404).json({ error: "Scheme not found" });
    return;
  }
  res.json(withImage(scheme));
});

schemesRouter.get("/", (req, res) => {
  let results = [...SCHEMES];

  const { search, category, state, schemeType, gender, minAge, maxAge, maxIncome, occupation, page, limit } = req.query as Record<string, string | undefined>;

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.benefits.toLowerCase().includes(q)
    );
  }

  if (category) {
    results = results.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }

  if (state) {
    results = results.filter(s => s.state === null || s.state.toLowerCase() === state.toLowerCase());
  }

  if (schemeType) {
    results = results.filter(s => s.schemeType === schemeType);
  }

  if (gender) {
    results = results.filter(s => s.gender === null || s.gender === gender);
  }

  if (occupation) {
    results = results.filter(s => s.occupation === null || s.occupation === occupation);
  }

  if (minAge) {
    const age = parseInt(minAge, 10);
    results = results.filter(s => s.maxAge === null || s.maxAge >= age);
  }

  if (maxAge) {
    const age = parseInt(maxAge, 10);
    results = results.filter(s => s.minAge === null || s.minAge <= age);
  }

  if (maxIncome) {
    const income = parseInt(maxIncome, 10);
    results = results.filter(s => s.maxIncome === null || s.maxIncome >= income);
  }

  const pageNum = parseInt(page ?? "1", 10);
  const limitNum = Math.min(parseInt(limit ?? "20", 10), 50);
  const total = results.length;
  const start = (pageNum - 1) * limitNum;
  const items = results.slice(start, start + limitNum);

  res.json({
    schemes: items.map(withImage),
    total,
    page: pageNum,
    limit: limitNum,
    totalPages: Math.ceil(total / limitNum),
  });
});
