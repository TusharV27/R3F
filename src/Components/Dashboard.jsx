import React, { useEffect } from "react";
import imgimg from "./img4.png";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate("/");
    } else {
      setUserName(localStorage.getItem("userName"));
    }
  }, []);
  return (
    <div>
      <img src={imgimg} className="absolute h-[100%]" />
      <div className="absolute w-full z-10 top-[36%] flex justify-center text-2xl ">
        <h1 className="border-b-2 border-black px-6 pb-2">{userName}</h1>
      </div>
    </div>
  );
}

export default Dashboard;
