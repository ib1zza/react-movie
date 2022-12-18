import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import { AppRoutes } from "./types/AppRoutes";
import Homepage from "./Pages/Homepage";
import Layout from "./components/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
