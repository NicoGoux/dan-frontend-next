import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProTip from "app/components/ProTip";
import Link from "app/components/Link";
import Copyright from "app/components/Copyright";
import { RootLayout } from "app/components/Layout/RootLayout";

export default function About() {
  return (
    <RootLayout>
      <>
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
            <Box sx={{ maxWidth: "sm" }}>
              <Button variant="contained" component={Link} noLinkStyle href="/">
                Go to the home page
              </Button>
            </Box>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </>
    </RootLayout>
  );
}
