import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";

export default function SignUpForm() {
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
            Sign Up
          </Typography>

          <Box component="form">
            <TextField fullWidth label="Full Name" margin="normal" />
            <TextField fullWidth label="Email" type="email" margin="normal" />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
            />

            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 3, py: 1 }}
            >
              Create Account
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
