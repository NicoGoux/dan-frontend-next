import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "app/components/Link";
import ProTip from "app/components/ProTip";
import Copyright from "app/components/Copyright";
import { RootLayout } from "app/components/Layout/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <>
        {" "}
        <Container maxWidth="lg">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              Material UI - Next.js example in TypeScript
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </>
    </RootLayout>
  );
}
