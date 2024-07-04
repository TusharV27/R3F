import React, { useEffect } from "react";
import "./loginStyle.css";
import bgimg from "./bgimg.png";
import tr from "./tr.png";
import logo from "./logo.png";
import uname from "./name.png";
import whatNo from "./what.png";
import btn from "./btn.png";
import bl from "./bl.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [Whatsapp, setWhatsapp] = React.useState("");

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      navigate("/welcome");
    }
  }, []);

  const handleSubmit = () => {
    if (userName === "" || Whatsapp === "" || userName.length >= 30) {
      alert("Please fill all the fields");
    } else {
      if (Whatsapp.length === 10) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("Whatsapp", Whatsapp);
        axios
          .post("https://megascalebackend.vercel.app/", {
            name: userName,
            mobile: Whatsapp,
          })
          .then((e) => {
            if (e.data.result) {
              navigate("/welcome");
            }
          });
      } else {
        alert("Please enter a valid whatsapp number");
      }
    }
  };
  return (
    <div>
      <div>
        <img className="bg-img" src={bgimg} />
        <div className="full-screen">
          {/* <div className="glass-card"></div> */}
          <div className="h-[70%] w-[80%] border-2 bg-white-0 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-75 border-gray-400 flex items-center relative">
            <div className="h-full w-full p-3 flex flex-col justify-between">
              <div className="tr w-full flex justify-end">
                <img src={tr} />
              </div>
              <div className="tr w-full flex justify-center px-8">
                <img src={logo} />
              </div>
              <>
                <form>
                  <div className="tr w-full flex justify-center mb-5">
                    {/* <img src={uname} />*/}
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-[90%] h-12 border-t-[5px] border-black bg-white-0 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-75 flex items-center border-2 px-4 placeholder:font-bold "
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="tr w-full flex justify-center">
                    {/* <img src={whatNo} /> */}
                    <input
                      type="tel"
                      required
                      placeholder="Whatsapp No."
                      className="w-[90%] h-12 border-t-[5px] border-black bg-white-0 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-75 flex items-center border-2 px-4 placeholder:font-bold "
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                </form>
                <div className="tr w-full flex justify-center ">
                  <button onClick={() => handleSubmit()}>
                    <img src={btn} />
                  </button>
                </div>
              </>
              <div className="tr w-full flex justify-start">
                <img src={bl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
