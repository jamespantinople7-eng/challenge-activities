export default function FormContainer({ children }) {
  return (
    <div style={{ 
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px"
    }}>
      {children}
    </div>
  );
}
