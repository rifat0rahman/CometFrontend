import { useState } from "react";

export default function TabCustom() {
  const [template, setTemplate] = useState("");

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const useTemplate = () => {
    alert(`Using template: ${template}`);
  };

  const saveTemplate = () => {
    alert(`Template saved: ${template}`);
  };

  return (
    <div className="p-2 h-[400px] max-w-[400px]">
      <div className="mb-2 text-sm text-gray-600">
        Hint: Insert a template below. Make sure the variables are in {"{ }"}
      </div>
      <textarea
        className="w-full h-[calc(100%-70px)] mb-4 p-2 border border-gray-300 rounded"
        value={template}
        onChange={handleTemplateChange}
      />
      <div className="w-full flex justify-between items-center">
        <button
          onClick={useTemplate}
          className=" px-4 py-1 bg-blue-500 text-white rounded-full focus:outline-none focus:ring-2 hover:ring-blue-400 focus:ring-opacity-50"
        >
          Use this template
        </button>
        <button
          onClick={saveTemplate}
          className="px-4 py-1 bg-white hover:text-white rounded focus:outline-none border border-blue-600 text-blue-600 focus:ring-2 hover:bg-blue-600 focus:ring-opacity-50"
        >
          Save
        </button>
      </div>
    </div>
  );
}
