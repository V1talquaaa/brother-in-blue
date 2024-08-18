import Community from "./components/Community";
import Council from "./components/Council";
import Footer from "./components/Footer";
import Goal from "./components/Goal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import Mission from "./components/Mission";
import Strategies from "./components/Strategies";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Goal />
      <Community />
      <Strategies />
      <History />
      <Council />
      <Mission />
      <Footer />
    </main>
  );
}
