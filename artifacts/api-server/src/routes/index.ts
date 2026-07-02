import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import { authRouter } from "./auth.js";
import { schemesRouter } from "./schemes.js";
import { profileRouter } from "./profile.js";
import { savedRouter } from "./saved.js";
import { eligibilityRouter } from "./eligibility.js";
import { conversationsRouter } from "./conversations.js";
import { trackerRouter } from "./tracker.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/v1/auth", authRouter);
router.use("/v1/schemes", schemesRouter);
router.use("/v1/profile", profileRouter);
router.use("/v1/saved-schemes", savedRouter);
router.use("/v1/eligibility", eligibilityRouter);
router.use("/v1/conversations", conversationsRouter);
router.use("/v1/tracker", trackerRouter);

export default router;
