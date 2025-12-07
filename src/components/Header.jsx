import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1976d2",
        padding: "10px 20px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left: Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "80px",        // <-- BIGGER LOGO
          width: "auto",
        }}
      />

      {/* Center: Title + Nav in a column */}
      <div style={{ textAlign: "center", flex: 1 }}>
        <h1 style={{ margin: "0 0 10px 0" }}>My React App</h1>

        <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Login
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Sign Up
          </a>
        </nav>
      </div>

      {/* Right spacer to balance layout */}
      <div style={{ width: "60px" }}></div>
    </header>
  );
}
