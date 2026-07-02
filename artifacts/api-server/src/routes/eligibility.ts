import { Router } from "express";
import { checkEligibility, checkSingleSchemeEligibility } from "../services/ai.js";

export const eligibilityRouter = Router();

eligibilityRouter.post("/check", async (req, res) => {
  const { age, state, income, gender, occupation, category } = req.body as {
    age?: number;
    state?: string;
    income?: number;
    gender?: string;
    occupation?: string;
    category?: string;
  };

  if (age === undefined || !state || income === undefined) {
    res.status(400).json({ error: "age, state, and income are required" });
    return;
  }

  const result = checkEligibility({
    age,
    state,
    income,
    gender: gender ?? "",
    occupation: occupation ?? "",
    category: category ?? "General",
  });

  res.json(result);
});

eligibilityRouter.post("/check/:id", async (req, res) => {
  const { id } = req.params;
  const { age, state, income, gender, occupation, category } = req.body as {
    age?: number;
    state?: string;
    income?: number;
    gender?: string;
    occupation?: string;
    category?: string;
  };

  if (age === undefined || !state || income === undefined) {
    res.status(400).json({ error: "age, state, and income are required" });
    return;
  }

  const result = checkSingleSchemeEligibility(id, {
    age,
    state,
    income,
    gender: gender ?? "",
    occupation: occupation ?? "",
    category: category ?? "General",
  });

  if (!result) {
    res.status(404).json({ error: "Scheme not found" });
    return;
  }

  res.json(result);
});
