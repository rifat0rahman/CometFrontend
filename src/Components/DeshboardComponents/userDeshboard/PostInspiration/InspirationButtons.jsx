export default function InspirationButtons() {
  const buttonsArray = Array.from({ length: 20 });

  return (
    <section>
      <div className="block sm:hidden">
        <div className="w-full border-b p-3 flex items-center justify-start gap-2 overflow-y-auto noneScroll">
          {buttonsArray.map((_, index) => (
            <button
              key={index}
              className="p-1 px-4 rounded-full border bg-slate-100 hover:bg-slate-300"
            >
              button
            </button>
          ))}
        </div>
      </div>
      <div className="sm:block hidden">
        <div className="w-full border-b p-3  flex items-center justify-start gap-x-3 overflow-y-scroll scrollbar">
          {buttonsArray.map((_, index) => (
            <button
              key={index}
              className="p-1 px-4 rounded-full border bg-slate-100 hover:bg-slate-300"
            >
              button
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
