import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Notes from "./pages/Notes";
import { getCurrentUser } from "./services/api";
import { useSelector, useDispatch } from "react-redux";
import PricingPage from "./pages/PricingPage";

const App = () => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/auth"
        element={!userData ? <Auth /> : <Navigate to="/notes" replace />}
      />

      <Route
        path="/pricing"
        element={userData ? <PricingPage /> : <Navigate to="/" replace />}
      />

      <Route
        path="/notes"
        element={userData ? <Notes /> : <Navigate to="/" replace />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;