import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Components/header";
import SecondPage from "./Pages/secondPage";

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/secondPage" element={<SecondPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
