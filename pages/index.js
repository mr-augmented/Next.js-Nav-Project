import Navbar from "../components/Navbar.js";
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();

  let pageTitle = "Dashboard";
  if (router.pathname === "/about") {
    pageTitle = "About";
  } else if (router.pathname === "/contact") {
    pageTitle = "Contact";
  }

  const MapComponent = dynamic(() => import('../components/MapComponent'), {
    ssr: false,
  });
    
    return (
      <div>
        <h1>Pillar World Creator Studio Beta</h1>
        <MapComponent />
      </div>
    );
}

export default Dashboard;
