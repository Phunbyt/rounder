import {
  Box,
  Container,
  IconButton,
  InputBase,
  Link,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { rounderLogo } from "../../assets/images";
import { BodyText } from "../Text";
import CustomButton from "../Button/Button";
import Grid from "@mui/material/Grid2";

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: { xs: 4, md: 8 },
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo + Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                component="img"
                src={rounderLogo}
                alt="Rounder Logo"
                sx={{
                  width: 150,
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              />

              <BodyText
                text="RoundeR uses smart shelf sensors and real-time analytics to track inventory levels. Automated alerts notify you when stock is low or products are nearing expiry, helping reduce stock-outs by up to 40%."
                style={{
                  fontSize: { xs: "0.7rem", md: "0.9rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              />

              {/* Email Subscribe */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  marginTop: 3,
                  width: { xs: "100%", sm: "80%", md: "100%" },
                }}
              >
                <IconButton sx={{ color: "white" }}>
                  <EmailIcon />
                </IconButton>

                <InputBase
                  placeholder="Your Email"
                  sx={{
                    flex: 1,
                    background: "rgba(255,255,255,0.1)",
                    padding: "6px 10px",
                    borderRadius: 1,
                    color: "white",
                  }}
                />
              </Box>

              <CustomButton
                text="Contact Us"
                color="#fff"
                backgroundColor="#DE05FF"
                sx={{
                  marginTop: 2,
                  padding: { xs: "0.6em", md: "0.8em" },
                  width: { xs: "100%", sm: "80%", md: "60%" },
                }}
              />
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Stack spacing={1.5}>
              {["Home", "How to buy", "About us", "Blog", "FAQ"].map((item) => (
                <Link
                  key={item}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    "&:hover": { color: "#DE05FF" },
                  }}
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Stack spacing={1.5}>
              {["Facebook", "LinkedIn", "Twitter", "Instagram", "TikTok"].map(
                (item) => (
                  <Link
                    key={item}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: { xs: "0.85rem", md: "1rem" },
                      "&:hover": { color: "#DE05FF" },
                    }}
                    href="#"
                  >
                    {item}
                  </Link>
                )
              )}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <BodyText
              text="Contact Us"
              style={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                marginBottom: "1rem",
              }}
            />

            <Link
              href="mailto:info@rounder.com"
              sx={{
                color: "#DE05FF",
                fontSize: { xs: "0.9rem", md: "1rem" },
                textDecoration: "none",
              }}
            >
              info@rounder.com
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
