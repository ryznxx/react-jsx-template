import { Helmet } from "react-helmet-async"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from "./pages/Homepage/Homepage"

function App() {
  
  return (
    <>
      <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,0" />
      </Helmet>
      <BrowserRouter>  
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;