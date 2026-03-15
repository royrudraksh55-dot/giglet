import AvailableTaskCard from "./AvailableTaskCard";

const AvailableTasks = () => {
  const tasks = [
    { id: 1, title: "Website Landing Page Design", budget: 300 },
    { id: 2, title: "Fix React Bugs", budget: 150 },
  ];

  return (
    <div className="space-y-4">

      <h4 className="text-xl font-bold">
        Available Tasks
      </h4>

      {tasks.map(task => (
        <AvailableTaskCard
          key={task.id}
          title={task.title}
          budget={task.budget}
        />
      ))}

    </div>
  );
};

export default AvailableTasks;