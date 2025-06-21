// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export default function StudentTable({ refresh, setRefresh }) {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios.get(`${API_URL}/students/`).then((res) => setStudents(res.data));
//   }, [refresh]);

//   const handleDelete = (id) => {
//     axios.delete(`${API_URL}/students/${id}`).then(() => setRefresh(v => !v));
//   };

//   return (
//     <div>
//       <h2>All Students</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Score</th><th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((s) => (
//             <tr key={s.id}>
//               <td>{s.id}</td>
//               <td>{s.name}</td>
//               <td>{s.age}</td>
//               <td>{s.gender}</td>
//               <td>{s.score}</td>
//               <td>
//                 <button onClick={() => handleDelete(s.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// // import * as React from 'react';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';

// // export default function StudentTable({ students }) {
// //   return (
// //     <TableContainer component={Paper} sx={{ mt: 4 }}>
// //       <Table>
// //         <TableHead>
// //           <TableRow>
// //             <TableCell>Name</TableCell>
// //             <TableCell align="right">Gender</TableCell>
// //             <TableCell align="right">Score</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {students.map((student) => (
// //             <TableRow key={student.id}>
// //               <TableCell>{student.name}</TableCell>
// //               <TableCell align="right">{student.gender}</TableCell>
// //               <TableCell align="right">{student.score}</TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //   );
// // }


"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function StudentTable({ refresh, setRefresh }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/students/`).then((res) => setStudents(res.data));
  }, [refresh]);

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/students/${id}`).then(() => setRefresh(v => !v));
  };

  return (
    <TableContainer component={Paper} sx={{ my: 3 }}>
      <Typography variant="h6" color="primary" sx={{ p: 2 }}>All Students</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell><TableCell>Name</TableCell><TableCell>Age</TableCell><TableCell>Gender</TableCell><TableCell>Score</TableCell><TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.age}</TableCell>
              <TableCell>{s.gender}</TableCell>
              <TableCell>{s.score}</TableCell>
              <TableCell>
                <Button onClick={() => handleDelete(s.id)} color="error" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
