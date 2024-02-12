import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import NavMenu from "./components/NavMenu";
import Search from "./components/Search";
import UserMenu from "./components/UserMenu";

const settings = ["Profil", "Hesap Ayarları"];

const pages = [
  {
    id: 1,
    title: "İletişim",
    url: "https://www.softforware.com/#container5",
  },
  {
    id: 2,
    title: "Hakkımızda",
    url: "https://www.softforware.com/",
  },
];

function ResponsiveAppBar() {
  const { data: session } = useSession();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={"/"}>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Image
                src="/logo.png"
                alt="logo"
                width={84}
                height={84}
                priority
              />
            </Box>
          </Link>

          <NavMenu pages={pages} />

          <Search />

          <UserMenu session={session} settings={settings} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
