import { useMemo, useState } from "react";
import TaskCard from "./components/TaskCard";
import { mockTasks } from "./data/mockTasks";
import type { Task, TaskDomain, TaskPriority } from "./types/task";

type ViewName =
  | "Dashboard"
  | "Calendar"
  | "Tasks"
  | "Weekly Planning"
  | "Notes";

type NewTaskForm = {
  title: string;
  domain: TaskDomain;
  date: string;
  priority: TaskPriority;
};

const TODAY = "2026-04-16";

export default function App() {
  const [activeView, setActiveView] = useState<ViewName>("Dashboard");
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newTask, setNewTask] = useState<NewTaskForm>({
    title: "",
    domain: "Research",
    date: TODAY,
    priority: "medium",
  });

  const [weeklyPlanning, setWeeklyPlanning] = useState<string[]>([
    "Complete core planning flow",
    "Refine dashboard structure",
    "Keep schedule sustainable",
  ]);

  const [weeklyDraft, setWeeklyDraft] = useState<string[]>([
    "Complete core planning flow",
    "Refine dashboard structure",
    "Keep schedule sustainable",
  ]);

  const [notesText, setNotesText] = useState(
    "Ideas for future development:\n- Add quick notes\n- Link notes to tasks\n- Support lightweight journaling"
  );

  const todayTasks = useMemo(
    () => tasks.filter((task) => task.date === TODAY),
    [tasks]
  );

  const upcomingTasks = useMemo(
    () => tasks.filter((task) => task.date !== TODAY),
    [tasks]
  );

  const domains: TaskDomain[] = [
    "Research",
    "Writing",
    "Admin",
    "Health",
    "Life",
  ];

  const navItems: ViewName[] = [
    "Dashboard",
    "Calendar",
    "Tasks",
    "Weekly Planning",
    "Notes",
  ];

  function handleInputChange<K extends keyof NewTaskForm>(
    key: K,
    value: NewTaskForm[K]
  ) {
    setNewTask((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleAddTask() {
    const trimmedTitle = newTask.title.trim();

    if (!trimmedTitle) {
      return;
    }

    const createdTask: Task = {
      id: String(Date.now()),
      title: trimmedTitle,
      date: newTask.date,
      priority: newTask.priority,
      status: "todo",
      domain: newTask.domain,
      description: "",
      notes: "",
    };

    setTasks((prev) => [createdTask, ...prev]);

    setNewTask({
      title: "",
      domain: "Research",
      date: TODAY,
      priority: "medium",
    });

    setShowAddForm(false);
    setActiveView("Tasks");
  }

  function handleWeeklyDraftChange(index: number, value: string) {
    setWeeklyDraft((prev) =>
      prev.map((item, i) => (i === index ? value : item))
    );
  }

  function handleSaveWeeklyPlanning() {
    const cleaned = weeklyDraft.map((item) => item.trim()).filter(Boolean);
    setWeeklyPlanning(cleaned.length > 0 ? cleaned : ["No weekly priorities yet."]);
  }

  function renderMainView() {
    if (activeView === "Dashboard") {
      return (
        <section className="card-grid">
          <div className="card">
            <h2>Today</h2>
            <div className="task-list">
              {todayTasks.length > 0 ? (
                todayTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    subtitle={task.domain}
                    meta={task.startTime}
                    status={task.status}
                    priority={task.priority}
                  />
                ))
              ) : (
                <p className="empty-state">No tasks scheduled for today.</p>
              )}
            </div>
          </div>

          <div className="card">
            <h2>Upcoming</h2>
            <div className="task-list">
              {upcomingTasks.length > 0 ? (
                upcomingTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    subtitle={task.domain}
                    meta={task.date}
                    status={task.status}
                    priority={task.priority}
                  />
                ))
              ) : (
                <p className="empty-state">No upcoming tasks.</p>
              )}
            </div>
          </div>

          <div className="card">
            <h2>Weekly Priorities</h2>
            <ul>
              {weeklyPlanning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>Domains</h2>
            <ul>
              {domains.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>
        </section>
      );
    }

    if (activeView === "Calendar") {
      return (
        <section className="single-view-card">
          <h2>Calendar</h2>
          <p>
            This view will provide daily and weekly schedule planning with
            time-based structure.
          </p>
          <ul>
            <li>Daily view</li>
            <li>Weekly view</li>
            <li>Time blocks</li>
            <li>Schedule navigation</li>
          </ul>
        </section>
      );
    }

    if (activeView === "Tasks") {
      return (
        <section className="single-view-card">
          <h2>Tasks</h2>
          <div className="task-list">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  subtitle={`${task.domain} · ${task.date}`}
                  meta={task.startTime || task.date}
                  status={task.status}
                  priority={task.priority}
                />
              ))
            ) : (
              <p className="empty-state">No tasks available.</p>
            )}
          </div>
        </section>
      );
    }

    if (activeView === "Weekly Planning") {
      return (
        <section className="single-view-card">
          <h2>Weekly Planning</h2>
          <p>Fill in your weekly priorities below.</p>

          <div className="planning-editor">
            <label className="form-field">
              <span>Priority 1</span>
              <input
                type="text"
                value={weeklyDraft[0] ?? ""}
                onChange={(e) => handleWeeklyDraftChange(0, e.target.value)}
                placeholder="Enter your first weekly priority"
              />
            </label>

            <label className="form-field">
              <span>Priority 2</span>
              <input
                type="text"
                value={weeklyDraft[1] ?? ""}
                onChange={(e) => handleWeeklyDraftChange(1, e.target.value)}
                placeholder="Enter your second weekly priority"
              />
            </label>

            <label className="form-field">
              <span>Priority 3</span>
              <input
                type="text"
                value={weeklyDraft[2] ?? ""}
                onChange={(e) => handleWeeklyDraftChange(2, e.target.value)}
                placeholder="Enter your third weekly priority"
              />
            </label>

            <div className="form-actions">
              <button
                type="button"
                className="primary-button"
                onClick={handleSaveWeeklyPlanning}
              >
                Save Weekly Planning
              </button>
            </div>
          </div>

          <div className="notes-box">
            <p>Current weekly priorities:</p>
            <ul>
              {weeklyPlanning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      );
    }

    return (
      <section className="single-view-card">
        <h2>Notes</h2>
        <p>Write your reflections, temporary planning context, or working notes.</p>

        <label className="form-field">
          <span>Notes</span>
          <textarea
            className="notes-textarea"
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Write your notes here..."
          />
        </label>

        <div className="notes-box">
          <p>Preview:</p>
          <div className="notes-preview">
            {notesText ? (
              notesText.split("\n").map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))
            ) : (
              <p className="empty-state">No notes yet.</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">Meridian</div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className={item === activeView ? "nav-button active" : "nav-button"}
              onClick={() => setActiveView(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <div>
            <h1>Meridian-Schedule</h1>
            <p>
              A structured scheduling system for organizing work, research,
              and everyday life.
            </p>
          </div>
          <button
            className="primary-button"
            type="button"
            onClick={() => setShowAddForm((prev) => !prev)}
          >
            {showAddForm ? "Close" : "+ Add Task"}
          </button>
        </header>

        {showAddForm ? (
          <section className="single-view-card add-task-form">
            <h2>Add Task</h2>

            <div className="form-grid">
              <label className="form-field">
                <span>Title</span>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Enter task title"
                />
              </label>

              <label className="form-field">
                <span>Domain</span>
                <select
                  value={newTask.domain}
                  onChange={(e) =>
                    handleInputChange("domain", e.target.value as TaskDomain)
                  }
                >
                  {domains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-field">
                <span>Date</span>
                <input
                  type="date"
                  value={newTask.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Priority</span>
                <select
                  value={newTask.priority}
                  onChange={(e) =>
                    handleInputChange(
                      "priority",
                      e.target.value as TaskPriority
                    )
                  }
                >
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
              </label>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="primary-button"
                onClick={handleAddTask}
              >
                Save Task
              </button>
            </div>
          </section>
        ) : null}

        {renderMainView()}
      </main>
    </div>
  );
}
