import Navbar from "/Users/jaylanthompson/Desktop/My Desktop/PROGRAMMING FOLDER/js-folder/components/Navbar.js";

import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();

  let pageTitle = "Dashboard";
  if (router.pathname === "/about") {
    pageTitle = "About";
  } else if (router.pathname === "/contact") {
    pageTitle = "Contact";
  }

  return (
    <div>
      <Navbar />
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Dashboard;
