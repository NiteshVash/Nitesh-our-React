import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("grey");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white ">
          <button onClick={()=>{setColor("red")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button onClick={()=>{setColor("Blue")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button onClick={()=>{setColor("green")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button onClick={()=>{setColor("Purple")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "PurPle" }}
          >
            PurPle
          </button>
          <button onClick={()=>{setColor("Pink")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button onClick={()=>{setColor("Black")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button onClick={()=>{setColor("Lavender")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg "
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button onClick={()=>{setColor("grey")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Grey" }}
          >
            Grey
          </button>
          <button onClick={()=>{setColor("skyblue")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "skyblue" }}
          >
            Skyblue
          </button>
          <button onClick={()=>{setColor("Brown")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Brown" }}
          >
            Brown
          </button>
          <button onClick={()=>{setColor("Orange")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button onClick={()=>{setColor("yellow")}}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
