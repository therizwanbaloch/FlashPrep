import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { getCurrentUser } from "./services/api";
import { useSelector, useDispatch } from "react-redux";
import Notes from "./pages/Notes";

const App = () => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={userData ? <Notes /> : <Home/>}
      />

      {/* <Route
        path="/notes"
        element={userData ? <Notes /> : <Navigate to="/" replace />}
      /> */}

      
      <Route
        path="/auth"
        element={!userData ? <Auth /> : <Navigate to="/notes" replace />}
      />
    </Routes>
  );
};

export default App;
