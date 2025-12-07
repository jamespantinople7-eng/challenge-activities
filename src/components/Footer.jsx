export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#f1f1f1",
        padding: "2px",
        marginTop: "0px",
        textAlign: "center",
      }}
    >
      <p>© {year} — Created by James Pantinople & Ashly Nicole Mamites</p>
    </footer>
  );
}
