"use client";
import { Card, CardContent, Typography, Avatar, Button, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        py: 8,
      }}
    >
      <Card
        sx={{
          width: 350,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Avatar
          alt="Predee Chaiyakit"
          src="/uploads/IMG_7328.jpg" // รูปต้องอยู่ที่ public/uploads/
          sx={{ width: 200, height: 200, mb: 2, boxShadow: 2 }}
        />
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          Predee Chaiyakit
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
          Data Scientist AI
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: "center" }}>
          This platform is built with <b>Next.js</b>, <b>FastAPI</b>, and <b>Material UI</b>.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/predee-chaiyakit-873360310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: 600, textTransform: "none" }}
        >
          LinkedIn
        </Button>
      </Card>
    </Box>
  );
}


