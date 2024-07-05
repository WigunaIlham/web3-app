"use client";

import {Navbar, Welcome, Footer, Services} from "./componen";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
  </div>
);

export default App;
