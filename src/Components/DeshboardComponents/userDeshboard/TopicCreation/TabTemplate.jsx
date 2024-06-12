export default function TabTemplate() {
  const checkingmap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5, 4, 7];
  return (
    <div className="w-full overflow-y-auto">
      <div className="w-full p-1 flex gap-3 overflow-x-auto">
        {checkingmap.map((data, idx) => (
          <button
            key={idx}
            className="px-5 p-1 w-[150px] rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Template
          </button>
        ))}
      </div>
      {/* --------------------------there template skills card------------------------------- */}
      <div className="w-full grid grid-cols-1 pt-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {checkingmap.map((data, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg p-4 shadow-md bg-white w-full"
          >
            <p className="mb-4">If you`re in {`{x function}`}, study:</p>
            <ul className="list-decimal pl-6 mb-4">
              <li>{`{skill 1}`}</li>
              <li>{`{skill 2}`}</li>
              <li>{`{skill 3}`}</li>
              <li>{`{skill 4}`}</li>
              <li>{`{skill 5}`}</li>
              <li>{`{skill 6}`}</li>
              <li>{`{skill 7}`}</li>
              <li>{`{skill 8}`}</li>
              <li>{`{skill 9}`}</li>
              <li>{`{skill 10}`}</li>
            </ul>
            <p className="text-sm text-gray-600 mb-4">
              {`{X}`} is just {`{define x differently}`}.
            </p>
            <button className="bg-blue-500 rounded-full text-white px-4 py-2 hover:bg-blue-600">
              Use this template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
