import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import useCustomCursor from "./hooks/useCustomCursor"; // Import custom cursor hook

const App = () => {
    // Use the custom cursor hook to handle the cursor logic
    useCustomCursor();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Custom Cursor */}
        <div className='custom-cursor'></div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App
