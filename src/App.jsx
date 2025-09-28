
import React, { useState } from "react";
import "./styles/App.css";
import "./styles/Contact.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WasteManagementModal from "./components/WasteManagementModal";

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [items, setItems] = useState({ plasticBottles: 0, cans: 0 });
  const [rewards, setRewards] = useState({ rice: 0, broom: 0 });

  return (
    <div className="app">
      <Header />
      <Hero />
      <News />
      <Services setSelectedService={setSelectedService} />
      <Contact />
      <Footer />
      {selectedService === "waste" && (
        <WasteManagementModal 
          setSelectedService={setSelectedService}
          items={items}
          setItems={setItems}
          rewards={rewards}
          setRewards={setRewards}
        />
      )}
    </div>
  );
}