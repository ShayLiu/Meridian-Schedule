type TaskCardProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  status?: string;
  priority?: string;
};

export default function TaskCard({
  title,
  subtitle,
  meta,
  status,
  priority,
}: TaskCardProps) {
  return (
    <div className="task-card">
      <div className="task-card-main">
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}

        <div className="task-card-tags">
          {status ? <span className="task-tag">{status}</span> : null}
          {priority ? <span className="task-tag">{priority}</span> : null}
        </div>
      </div>

      {meta ? <span className="task-card-meta">{meta}</span> : null}
    </div>
  );
}
