export default function TopicCreationOutput() {
  const mapcoount = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div
      className="w-full px-0 md:px-5 pb-20 grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
    >
      {mapcoount.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[200px] border p-3 flex rounded-md shadow-md hover:shadow-xl flex-col justify-between gap-7"
        >
          <h1 className="text-xl font-medium">
            5 Ways AI Features Can Revolutionize Web Development
          </h1>
          <div className="w-full">
            <button className="p-1 px-3 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white">
              Create post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
