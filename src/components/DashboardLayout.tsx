import { useState } from "react";
import { Outlet } from "react-router-dom";

import { styled } from "@mui/material";
import Sidebar from "./SideBar/SideBar";
import Navbar from "./SideBar/NavBar";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: "64px",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "280px",
  },
}));

const DashboardLayoutContainer = styled("div")({
  position: "relative",
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const DashboardLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
  overflowX: "hidden",
  position: "relative",
  WebkitOverflowScrolling: "touch",
});

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] =
    useState<boolean>(false);

  return (
    <DashboardLayoutRoot>
      <Navbar onSidebarMobileOpen={(): void => setIsSidebarMobileOpen(true)} />
      <Sidebar
        onMobileClose={(): void => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent id="dashboardLayoutContent">
            <Outlet />
            {children}
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
