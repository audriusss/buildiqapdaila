import { Router } from "express";
import { projects, getProjectBySlug } from "../data/projects";

const router = Router();

router.get("/projects", (_req, res) => {
  res.json(projects);
});

router.get("/projects/:slug", (req, res) => {
  const project = getProjectBySlug(req.params.slug);
  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  res.json(project);
});

export default router;
