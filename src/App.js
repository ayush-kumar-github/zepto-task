import React, { useRef, useState } from "react";
import data from "./data/data";

const App = () => {
  // input value means search || selectedItem means people selected || items means total people
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [items, setItems] = useState(data);
  const inputref = useRef(null);

  const InputHandler = (e) => {
    setInputValue(e.target.value);
  };

  //add names to email chips
  const addtoInputHandler = (i) => {
    setSelectedItem([...selectedItem, i]);
    setItems(items.filter((item) => i !== item));
    setInputValue("");
  };

  //remove on clicking cross button
  const removeFromSelected = (i) => {
    const restItems = selectedItem.filter((item) => i !== item);
    setSelectedItem(restItems);
    setItems([...items, i]);
  };

  //remove on pressing backspace
  const keyDownHandler = (e) => {
    if (e.key === "Backspace" && inputValue === "") {
      if (selectedItem.length > 0) {
        const lastElement = selectedItem[selectedItem.length - 1];
        setSelectedItem(selectedItem.slice(0, -1));
        setItems([...items, lastElement]);
      }
    }
  };

  return (
    <div className="px-20 py-20 bg-[#DAE0E2] h-[100vh]">
      <div className="bg-[#DAE0E2] w-[70%] flex">
        <ul className="border-b border-blue-600 font-bold">
          {selectedItem.map((i) => (
            <li
              key={i}
              className="bg-[#2C3335] text-white px-1 rounded-full inline-block m-2"
            >
              {i}{" "}
              <span
                className="cursor-pointer px-1 "
                onClick={() => removeFromSelected(i)}
              >
                x
              </span>
            </li>
          ))}
          <input
            type="text"
            className="p-2  bg-[#DAE0E2] outline-none"
            placeholder="search"
            value={inputValue}
            onChange={InputHandler}
            onKeyDown={keyDownHandler}
            ref={inputref}
          />
        </ul>
      </div>
      <div className="mx-20">
        {inputValue && (
          <ul>
            {items
              .filter((item) =>
                item.toLowerCase().includes(inputValue.toLowerCase())
              )

              .map((i) => (
                <li
                  key={i}
                  className="bg-white p-2  w-1/3 cursor-pointer  hover:bg-gray-200"
                  onClick={() => addtoInputHandler(i)}
                >
                  {i}{" "}
                  <span className="text-sm px-3 text-[#7B8788]">
                    {i}@gmail.com
                  </span>
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* contact me */}
      <div class="flex flex-col min-h-screen ">
        <div class="flex-1 p-8"></div>
        <div class="bg-gray-100 p-4 sticky bottom-0">
          contact me:
          <a
            className="p-1 bg-green-600 text-white rounded ml-5"
            href="mailto:ayshkr571@gmail.com"
          >
            mail
          </a>
          <a
            className="p-1 bg-green-600 text-white rounded ml-5"
            href="https://www.linkedin.com/in/ayush-kumar-6320a0176/"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
