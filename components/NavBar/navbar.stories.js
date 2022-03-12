import "./navbar.css";
import navbarIndex from "./navbar-index.html";
import navbarBookmarks from "./navbar-bookmarks.html";
import navbarCreate from "./navbar-create.html";
import navbarProfile from "./navbar-profile.html";

export default {
  title: "Components/Navbar",
};

export const navBarIndex = () => navbarIndex;
export const navBarBookmark = () => navbarBookmarks;
export const navBarCreate = () => navbarCreate;
export const navBarProfile = () => navbarProfile;
