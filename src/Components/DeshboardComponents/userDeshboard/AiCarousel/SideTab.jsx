import { useState } from "react";
import { FaPalette, FaSignature, FaThLarge } from "react-icons/fa";

export default function SideTab() {
  const [activeTab, setActiveTab] = useState("template");

  return (
    <div className="max-w-md mx-auto max-h-[350px] rounded-lg overflow-y-auto">
      <div className="flex  justify-around border-b">
        <button
          onClick={() => setActiveTab("template")}
          className={`py-2 flex-1 text-center ${
            activeTab === "template" ? "bg-gray-200" : ""
          }`}
        >
          <FaThLarge className="inline-block mr-1" /> Template
        </button>
        <button
          onClick={() => setActiveTab("theme")}
          className={`py-2 flex-1 text-center ${
            activeTab === "theme" ? "bg-gray-200" : ""
          }`}
        >
          <FaPalette className="inline-block mr-1" /> Theme
        </button>
        <button
          onClick={() => setActiveTab("signature")}
          className={`py-2 flex-1 text-center ${
            activeTab === "signature" ? "bg-gray-200" : ""
          }`}
        >
          <FaSignature className="inline-block mr-1" /> Signature
        </button>
      </div>
      <div className="p-4">
        {activeTab === "template" && (
          <div>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="border p-2 mb-2 rounded cursor-pointer">
                Design {i + 1}
              </div>
            ))}
          </div>
        )}
        {activeTab === "theme" && (
          <div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                "bg-blue-800",
                "bg-green-400",
                "bg-blue-300",
                "bg-pink-400",
              ].map((color, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${color} cursor-pointer`}
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {["BG 1", "Heading 1", "BG 2", "Heading 2", "Summary"].map(
                (label, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-green-200 rounded-full cursor-pointer"></div>
                    <span className="mt-1 text-sm">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        {activeTab === "signature" && (
          <div>
            <div className="mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
              <input
                type="text"
                placeholder="Your name or Brand name"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Social media handle"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Call-to-action 1"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Call-to-action 2"
                className="w-full p-2 border rounded mb-2"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
