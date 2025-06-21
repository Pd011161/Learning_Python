// "use client";
// import { useState } from "react";
// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export default function StudentForm({ setRefresh }) {
//   const [form, setForm] = useState({ name: "", age: "", gender: "", score: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post(`${API_URL}/students/`, { ...form, age: +form.age, score: +form.score })
//       .then(() => {
//         setForm({ name: "", age: "", gender: "", score: "" });
//         setRefresh((v) => !v);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Student</h2>
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//       <input name="age" placeholder="Age" type="number" value={form.age} onChange={handleChange} required />
//       <select name="gender" value={form.gender} onChange={handleChange} required>
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//       <input name="score" placeholder="Score" type="number" value={form.score} onChange={handleChange} required />
//       <button type="submit">Add</button>
//     </form>
//   );
// }


"use client";
import { useState } from "react";
import axios from "axios";
import { Box, TextField, Select, MenuItem, Button, InputLabel, FormControl, Paper, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function StudentForm({ setRefresh }) {
  const [form, setForm] = useState({ name: "", age: "", gender: "", score: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/students/`, { ...form, age: +form.age, score: +form.score })
      .then(() => {
        setForm({ name: "", age: "", gender: "", score: "" });
        setRefresh((v) => !v);
      });
  };

  // return (
  //   <Paper elevation={3} sx={{ p: 3, my: 3, maxWidth: 400 }}>
  //     <Typography variant="h6" color="primary" gutterBottom>
  //       <PersonAddIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Add Student
  //     </Typography>
  //     <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
  //       <TextField name="name" label="Name" value={form.name} onChange={handleChange} required />
  //       <TextField name="age" label="Age" type="number" value={form.age} onChange={handleChange} required />
  //       <FormControl>
  //         <InputLabel id="gender-label">Gender</InputLabel>
  //         <Select name="gender" label="Gender" labelId="gender-label" value={form.gender} onChange={handleChange} required>
  //           <MenuItem value=""><em>Select Gender</em></MenuItem>
  //           <MenuItem value="Male">Male</MenuItem>
  //           <MenuItem value="Female">Female</MenuItem>
  //         </Select>
  //       </FormControl>
  //       <TextField name="score" label="Score" type="number" value={form.score} onChange={handleChange} required />
  //       <Button type="submit" variant="contained" color="primary">Add</Button>
  //     </Box>
  //   </Paper>
  // );
  return (
  <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2} mt={3}>
    <Typography variant="h6" color="primary" gutterBottom>
      <PersonAddIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Add Student
    </Typography>
    <TextField name="name" label="Name" value={form.name} onChange={handleChange} required />
    <TextField name="age" label="Age" type="number" value={form.age} onChange={handleChange} required />
    <FormControl>
      <InputLabel id="gender-label">Gender</InputLabel>
      <Select name="gender" label="Gender" labelId="gender-label" value={form.gender} onChange={handleChange} required>
        <MenuItem value=""><em>Select Gender</em></MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
      </Select>
    </FormControl>
    <TextField name="score" label="Score" type="number" value={form.score} onChange={handleChange} required />
    <Button type="submit" variant="contained" color="primary">Add</Button>
  </Box>
)


}
