import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inentory";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import FooterBottom from "./components/FooterBottom/FooterBottom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory/:id" element={<InventoryItemDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <FooterBottom></FooterBottom>
    </>
  );
}

export default App;
