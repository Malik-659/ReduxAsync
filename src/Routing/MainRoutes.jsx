import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "../components/UsersList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
    </Routes>
  );
};

export default MainRoutes;
