"use client";
import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import StudentForm from "@/components/StudentForm";
import StudentTable from "@/components/StudentTable";
import { Container } from "@mui/material";

export default function HomePage() {
  const [refresh, setRefresh] = useState(false);

  return (
    <Container maxWidth="md">
      {/* <Dashboard refresh={refresh} /> */}
      <Dashboard refresh={refresh} setRefresh={setRefresh} />
      {/* <StudentForm setRefresh={setRefresh} /> */}
      <StudentTable refresh={refresh} setRefresh={setRefresh} />
    </Container>
  );
}
