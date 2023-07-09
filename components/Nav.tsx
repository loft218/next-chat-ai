"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  IconButton,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from "@mui/joy";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Nav() {
  return (
    <SessionProvider>
      <NavMenus />
    </SessionProvider>
  );
}

function NavMenus() {
  return (
    <Box component={"nav"} sx={{ flexGrow: 1 }}>
      <List orientation="horizontal">
        <ListItem>
          <ListItemButton component="a" href="/">
            Home
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem>
          <ListItemButton component="a" href="/chat">
            Chat
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem>
          <ListItemButton component="a" href="#">
            About
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ marginInlineStart: "auto" }}>
          <AuthMenu />
        </ListItem>
      </List>
    </Box>
  );
}

function AuthMenu() {
  const { data: session } = useSession();

  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    signOut();
    setOpen(false);
  };

  return (
    <>
      {session?.user ? (
        <IconButton
          ref={buttonRef}
          id="positioned-button"
          aria-controls={"positioned-menu"}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="plain"
          color="neutral"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {session?.user?.email ? "Hi," + session.user.email.split("@")[0] : ""}
          <ArrowDropDownIcon />

          <Menu
            id="positioned-menu"
            anchorEl={buttonRef.current}
            open={open}
            onClose={handleClose}
            aria-labelledby="positioned-button"
            placement="bottom-end"
          >
            <MenuItem onClick={handleClose}>
              <ListItemDecorator>
                <LogoutIcon fontSize="small" />
              </ListItemDecorator>{" "}
              退出
            </MenuItem>
          </Menu>
        </IconButton>
      ) : (
        <ListItemButton component="a" href="/sign-in">
          <AccountCircleIcon />
          登录
        </ListItemButton>
      )}
    </>
  );
}
