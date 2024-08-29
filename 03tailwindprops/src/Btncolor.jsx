import { useState } from "react";

function Btncolor() {
  let [color, setColors] = useState("lightgreen");
  return (
    <div
      className="fixed inset-0 w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="font-bold text-green-100">Bg color changer</h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1  mx-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColors("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1  mx-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColors("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1  mx-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColors("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1  mx-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColors("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1  mx-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColors("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1  mx-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColors("brown")}
          >
            Brown
          </button>
          <button
            className="outline-none px-4 py-1  mx-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColors("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default Btncolor;
