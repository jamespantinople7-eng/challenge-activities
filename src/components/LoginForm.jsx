import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";

export default function LoginForm() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 2,
        boxShadow: 3,
        borderRadius: 3
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 1 }}
            gutterBottom
          >
            Login
          </Typography>

          <Box component="form">
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              sx={{ mt: 2 }}
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1 }}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
