import type { Task } from "../types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Review weekly research goals",
    description: "Check current research priorities and adjust this week's plan.",
    date: "2026-04-16",
    startTime: "09:00",
    endTime: "09:30",
    priority: "high",
    status: "todo",
    domain: "Research",
    notes: "Focus on the most urgent deliverables first."
  },
  {
    id: "2",
    title: "Write project notes",
    description: "Summarize the current structure of Meridian-Schedule.",
    date: "2026-04-16",
    startTime: "14:00",
    endTime: "15:00",
    priority: "medium",
    status: "in_progress",
    domain: "Writing",
    notes: "Keep the notes concise and structured."
  },
  {
    id: "3",
    title: "Plan exercise session",
    description: "Arrange a workout block for the evening.",
    date: "2026-04-17",
    startTime: "18:00",
    endTime: "19:00",
    priority: "medium",
    status: "todo",
    domain: "Health",
    notes: "Keep it realistic and sustainable."
  }
];
