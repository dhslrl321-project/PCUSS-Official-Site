import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer"
import Qualification from "../components/sections/Qualification";
import Hero from "../components/sections/Hero";
import { data as qualificationData } from "../components/sections/Qualification/data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div>
      <Navbar toggle={false} />
      <Hero />
      {/* <Merit data={meritData} /> */}
      <Qualification data={qualificationData} />
      <Footer />
    </div>
  )
}
