import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import { Auth } from "./pages/Auth/Auth";
import { PrivateRoute } from "./components/PrivateRoute";
import { CreateListing } from "./pages/CreateListing";
import { UpdateListing } from "./pages/UpdateListing";
import { Listing } from "./pages/Listing";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:listingId" element={<Listing />} />

        <Route path="/sign-in" element={<Auth />} />
        <Route path="/sign-up" element={<Auth />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
