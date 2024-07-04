import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    navigate("/");
  }, []);
  return (
    <div>
      <>OK</>
    </div>
  );
}

export default Logout;
