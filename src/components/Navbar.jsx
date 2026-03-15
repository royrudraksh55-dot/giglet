import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1e3a8a",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}>Giglet</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/login">
          Login
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}