import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inentory";
import Login from "./components/Login/Login";
import Blog from "./components/Blog/Blog";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import FooterArea from "./components/FooterArea/FooterArea";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
import { ToastContainer } from "react-toastify";
import MyInventoryItems from "./components/MyInventoryItems/MyInventoryItems";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryItemDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-inventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/add-inventory-item"
          element={
            <RequireAuth>
              <AddInventoryItem />
            </RequireAuth>
          }
        />
        <Route
          path="/my-inventory-items"
          element={
            <RequireAuth>
              <MyInventoryItems />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <FooterArea></FooterArea>
      <ToastContainer />
    </>
  );
}

export default App;
