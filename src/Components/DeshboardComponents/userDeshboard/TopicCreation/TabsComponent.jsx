import { useState } from "react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { label: "Template", content: "Tab content 1" },
    { label: "Custom", content: "Tab content 2" },
    { label: "My template", content: "Tab content 3" },
  ];

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab px-4 pb-2 mt-3 ${
              activeTab === index
                ? "border-b-4 !border-blue-500"
                : "border-b-4 border-transparent"
            } focus:outline-none w-[150px]`}
            aria-selected={activeTab === index}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className=" p-1">
        {tabData[activeTab].content}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}
