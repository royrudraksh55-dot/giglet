import ActiveGigCard from "./ActiveGigCard";

const ActiveGigs = () => {
  const gigs = [
    { id: 1, title: "E-commerce Frontend", status: "In Progress" },
    { id: 2, title: "Logo Branding Kit", status: "Awaiting Approval" },
  ];

  return (
    <div className="space-y-4">

      <h4 className="text-xl font-bold">
        Your Active Gigs
      </h4>

      {gigs.map(gig => (
        <ActiveGigCard
          key={gig.id}
          title={gig.title}
          status={gig.status}
        />
      ))}

    </div>
  );
};

export default ActiveGigs;