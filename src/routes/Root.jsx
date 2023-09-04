import { Route, Routes, useNavigate } from "react-router-dom";
import EmployeeDashboard from "../pages/employeedashboard/EmployeeDashboard";
import Login from "../pages/login/Login";
import { useEffect, useState } from "react";
import AddEmployee from "../pages/add-employee/AddEmplyee";

const Root = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    } else {
      setUser(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(false);
  };
  function NavigateToDefaultPage({ user }) {
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate(user ? "/empDashboard" : "/");
    }, [navigate, user]);
  
    return null;
  }
  return (
    <>
      <Routes>
        {!user && (
          <Route
            path="/"
            element={<Login authenticate={() => setUser(true)} />}
          />
        )}
        {user && (
          <>
            <Route
              path="/empDashboard"
              element={<EmployeeDashboard logout={handleLogout} />}
            />
             <Route
              path="/addemployee"
              element={<AddEmployee/>}
            />
          </>
        )}
        <Route path="*" element={<NavigateToDefaultPage user={user} />} />
      </Routes>
    </>
  );
};



export default Root;
