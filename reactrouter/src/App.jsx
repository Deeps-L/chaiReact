import {useState} from "react" ; 
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
 
function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
