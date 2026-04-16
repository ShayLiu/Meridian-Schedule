export type TaskStatus = "todo" | "in_progress" | "done";

export type TaskPriority = "low" | "medium" | "high";

export type TaskDomain =
  | "Research"
  | "Writing"
  | "Admin"
  | "Health"
  | "Life";

export interface Task {
  id: string;
  title: string;
  description?: string;
  date: string;
  startTime?: string;
  endTime?: string;
  priority: TaskPriority;
  status: TaskStatus;
  domain: TaskDomain;
  notes?: string;
}
