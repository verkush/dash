import {
  HiOutlineChartPie,
  HiOutlineUser,
  HiOutlineHome,
  HiCalendarDays,
  HiOutlineSparkles,
  HiOutlineFolder,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi2";

export const NAV_SIDEBAR_LINKS = [
  {
    name: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: HiOutlineHome,
  },
  {
    name: "team",
    label: "Teams",
    path: "/teams",
    icon: HiOutlineUser,
  },
  {
    name: "projects",
    label: "Projects",
    path: "/projects",
    icon: HiOutlineFolder,
  },
  {
    name: "calendar",
    label: "Calendar",
    path: "/calendar",
    icon: HiCalendarDays,
  },
  {
    name: "documents",
    label: "Documents",
    path: "/docs",
    icon: HiOutlineDocumentDuplicate,
  },
  {
    name: "reports",
    label: "Reports",
    path: "/reports",
    icon: HiOutlineChartPie,
  },
  {
    name: "innovation",
    label: "Innovation",
    path: "/innovation",
    icon: HiOutlineSparkles,
  },
];

export const NAV_SIDEBAR_TEAM_LINKS = [
  {
    id: 1,
    name: "SBAF",
    href: "#",
    initial: "S",
    current: false,
  },
  {
    id: 2,
    name: "Validation",
    href: "#",
    initial: "V",
    current: false,
  },
];
