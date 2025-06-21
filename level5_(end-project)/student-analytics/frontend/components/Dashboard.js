// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Pie } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// Chart.register(...registerables);

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export default function Dashboard({ refresh }) {
//   const [avgScore, setAvgScore] = useState(0);
//   const [genderDist, setGenderDist] = useState([]);

//   useEffect(() => {
//     axios.get(`${API_URL}/analytics/average-score`).then((res) => setAvgScore(res.data.average_score));
//     axios.get(`${API_URL}/analytics/gender-distribution`).then((res) => setGenderDist(res.data));
//   }, [refresh]);

//   return (
//     <Box display="flex" gap={2} mt={4} flexWrap="wrap">
//       <Card sx={{ minWidth: 275, flex: 1 }}>
//         <CardContent>
//           <Typography variant="h6" color="primary" gutterBottom>
//             Average Score
//           </Typography>
//           <Typography variant="h2" color="text.primary">
//             {avgScore?.toFixed(2) ?? 0}
//           </Typography>
//         </CardContent>
//       </Card>
//       <Card sx={{ minWidth: 275, flex: 1 }}>
//         <CardContent>
//           <Typography variant="h6" color="primary" gutterBottom>
//             Gender Distribution
//           </Typography>
//           <Pie
//             data={{
//               labels: genderDist.map((g) => g.gender),
//               datasets: [{ data: genderDist.map((g) => g.count), label: "Students", backgroundColor: ["#1976d2", "#f50057"] }],
//             }}
//             height={80}
//           />
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Card, CardContent, Typography, Box } from "@mui/material";
import StudentForm from "@/components/StudentForm";  // import form

Chart.register(...registerables);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Dashboard({ refresh, setRefresh }) {
  const [avgScore, setAvgScore] = useState(0);
  const [genderDist, setGenderDist] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/analytics/average-score`).then((res) => setAvgScore(res.data.average_score));
    axios.get(`${API_URL}/analytics/gender-distribution`).then((res) => setGenderDist(res.data));
  }, [refresh]);

  return (
    <Box display="flex" gap={2} mt={4} flexWrap="wrap">
      {/* CARD ที่มีทั้ง Score และฟอร์ม */}
      <Card sx={{ minWidth: 340, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <CardContent>
          <Typography variant="h6" color="primary" gutterBottom>
            Average Score
          </Typography>
          <Typography variant="h2" color="text.primary" sx={{ mb: 4 }}>
            {avgScore?.toFixed(2) ?? 0}
          </Typography>
          {/* ฟอร์มมาอยู่ใต้คะแนน */}
          <StudentForm setRefresh={setRefresh} />
        </CardContent>
      </Card>

      {/* CARD Pie Chart */}
      <Card sx={{ minWidth: 340, flex: 1 }}>
        <CardContent>
          <Typography variant="h6" color="primary" gutterBottom>
            Gender Distribution
          </Typography>
          <Pie
            data={{
              labels: genderDist.map((g) => g.gender),
              datasets: [{ data: genderDist.map((g) => g.count), label: "Students", backgroundColor: ["#1976d2", "#f50057"] }],
            }}
            height={80}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
