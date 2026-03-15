import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "Logo Design for Organic Cafe",
      budget: 250,
      status: "open",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "React Frontend Development",
      budget: 1200,
      status: "progress",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Technical Article Writing",
      budget: 150,
      status: "completed",
      posted: "3 days ago",
    },
  ];

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold">
          Your Posted Tasks
        </h4>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>

    </div>
  );
};

export default TaskList;
