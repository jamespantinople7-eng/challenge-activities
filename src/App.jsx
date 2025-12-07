import Header from "./components/Header";
import Footer from "./components/Footer";
import Car from "./components/Car";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{ flexShrink: 0, width: "100%" }}>
        <Header />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          overflow: "hidden",
          padding: 2,
        }}
      >
        {/* Car Component */}
        <Box sx={{ textAlign: "center", width: "100%", padding: 1 }}>
          <Car />
        </Box>

        {/* Forms Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "stretch",
            overflow: "hidden",
            padding: 1,
          }}
        >
          {/* Login Form */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 40%" },
              minWidth: "300px",
              maxWidth: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 1,
            }}
          >
            <Box sx={{ width: "100%", overflowY: "auto" }}>
              <LoginForm />
            </Box>
          </Box>

          {/* Sign Up Form (Scrollable) */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 55%" },
              minWidth: "350px",
              maxWidth: "650px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: "100%",
                overflowY: "auto",
                paddingRight: 1,

                /* prettier scrollbar */
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#bfbfbf",
                  borderRadius: "4px",
                },
              }}
            >
              <SignUpForm />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ flexShrink: 0, width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
