import NavBar from "@/components/NavBar";
import Presentation from "@/components/Presentation";
import Planes from "@/components/Planes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full background">
      <NavBar/>
      <Presentation/>
      <Planes/>
      <Footer/>
    </div>
  );
}
