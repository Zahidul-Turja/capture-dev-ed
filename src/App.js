import React from "react";

// ! Global Style
import GlobalStyle from "./components/GlobalStyle";

// ! Components
import Nav from "./components/Nav";

// ! Pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
