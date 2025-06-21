// "use client";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import Link from "next/link";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";

// export default function Navbar() {
//   return (
//     <AppBar position="static" color="default" elevation={2}>
//       <Toolbar>
//         <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontWeight: 700 }}>
//           Student Analytics Platform
//         </Typography>
//         <Box>
//           <Button
//             component={Link}
//             href="/"
//             color="primary"
//             startIcon={<HomeIcon />}
//             sx={{ mx: 1 }}
//           >
//             Home
//           </Button>
//           <Button
//             component={Link}
//             href="/about"
//             color="primary"
//             startIcon={<InfoIcon />}
//             sx={{ mx: 1 }}
//           >
//             About
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }


"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

export default function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          color="primary"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          Student Analytics Platform
        </Typography>
        <Box>
          <Button
            component={Link}
            href="/"
            color="primary"
            startIcon={<HomeIcon />}
            sx={{ mx: 1 }}
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/about"
            color="primary"
            startIcon={<InfoIcon />}
            sx={{ mx: 1 }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
