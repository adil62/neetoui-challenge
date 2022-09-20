import { UserCircle, Text, Download } from "neetoicons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "All Notes",
    to: "/notes",
    icon: Text,
  },
  {
    label: "Contacts",
    to: "/contact",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Download,
  },
];
