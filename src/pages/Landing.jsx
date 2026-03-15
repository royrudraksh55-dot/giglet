export default function Landing() {
  return (
    <div style={{ padding: "60px 40px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Welcome to Giglet
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Get any task done. Anytime.
      </p>

      <button
        style={{
          padding: "12px 24px",
          backgroundColor: "#f97316",
          border: "none",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Post a Task
      </button>
    </div>
  );
}