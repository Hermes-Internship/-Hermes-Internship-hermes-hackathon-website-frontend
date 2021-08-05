import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import MainView from "./Components/MainView/MainView";
import Parteners from "./Components/Parteneri/Partners";
import Timeline from "./Components/Timeline/Timeline";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      <MainView />
      <About />
      <Parteners />
      <Timeline />
      <Footer />
    </div>
  );
};

export default App;
