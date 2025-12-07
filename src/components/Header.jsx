export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1976d2",
        padding: 1,
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>My React App</h1>

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
    </header>
  );
}
