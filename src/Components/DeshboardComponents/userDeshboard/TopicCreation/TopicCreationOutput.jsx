import { useState } from "react";
import SelectTemplete from "./SelectTemplete";

export default function TopicCreationOutput() {
  const [callSelectoption, setCallSelectOption] = useState(false);

  const removecallSelect = (data) => {
    setCallSelectOption(data);
  };

  const creationTopicData = [
    {
      0: "Maximizing Business Efficiency: How Custom Django Backend Solutions Can Streamline Your Operations",
    },
    {
      1: "The Power of Data Visualization: Enhancing Decision-Making with Vue.js Frontend Development",
    },
    {
      2: "Securing Your Business: Understanding the Importance of Backend Development in Django",
    },
    {
      3: "Elevating User Experience: Creating Seamless Interfaces with Vue.js Frontend Development",
    },
    {
      4: "Scaling Your Business: Leveraging Full Stack Development with Django and Vue.js for",
    },
  ];

  return (
    <div
      className="w-full px-0 relative md:px-5 pb-20 grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
    >
      {callSelectoption ? (
        <SelectTemplete
          callSelectoption={callSelectoption}
          removecallSelect={removecallSelect}
        />
      ) : null}
      {creationTopicData.map((item, index) => {
        const text = item[index];
        return (
          <div
            key={index}
            className="min-w-[250px] border p-3 flex rounded-md shadow-md hover:shadow-xl flex-col justify-between gap-3"
          >
            <h1 className="text-md font-medium">{text}</h1>
            <div className="w-full">
              <button
                onClick={() => setCallSelectOption(!callSelectoption)}
                className="p-1 px-3 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Create post
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
