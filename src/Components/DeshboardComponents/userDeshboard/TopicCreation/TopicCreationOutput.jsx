import { useState } from "react";
import SelectTemplete from "./SelectTemplete";

export default function TopicCreationOutput() {
  const [callSelectoption, setCallSelectOption] = useState(false);
  const mapcoount = [1, 2, 3, 4, 5, 6, 7, 8];

  const removecallSelect = (data) => {
    setCallSelectOption(data);
  };

  return (
    <div
      className="w-full px-0 relative md:px-5 pb-20 grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
    >
      {callSelectoption ? (
        <SelectTemplete
          callSelectoption={callSelectoption}
          removecallSelect={removecallSelect}
        />
      ) : (
        ""
      )}
      {mapcoount.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[220px] border p-3 flex rounded-md shadow-md hover:shadow-xl flex-col justify-between gap-7"
        >
          <h1 className="text-xl font-medium">
            5 Ways AI Features Can Revolutionize Web Development
          </h1>
          <div className="w-full">
            <button
              onClick={() => setCallSelectOption(!callSelectoption)}
              className="p-1 px-3 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Create post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
