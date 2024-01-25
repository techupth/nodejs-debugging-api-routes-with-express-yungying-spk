import { Router } from "express";
import { assignments as assignmentsFromFile } from "../data/assignments.js";

let assignments = [...assignmentsFromFile];
console.log(assignments);

const assignmentRouter = Router();

// start coding here
assignmentRouter.get("/", (req, res) => {
  return res.json({
    data: assignments,
  });
});

assignmentRouter.get("/:id", (req, res) => {
  const assignmentId = Number(req.params.id);
  console.log(assignmentId);
  const hasFound = assignments.find((assign) => assign.id === assignmentId);

  if (!hasFound) {
    return res.status(404).json({
      messsage: `Assignment ${assignmentId} not found`,
    });
  }

  const assignment = assignments.filter((assign) => assign.id === assignmentId);

  return res.json({
    data: assignment[0],
  });
});

export default assignmentRouter;
