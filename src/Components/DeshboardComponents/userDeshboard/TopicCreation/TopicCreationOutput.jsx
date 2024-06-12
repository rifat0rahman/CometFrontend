export default function TopicCreationOutput({ topicIdeas }) {
  const mapcoount = topicIdeas;
  console.log("from child",mapcoount)
  return (
    <div
      className="w-full px-0 md:px-5 pb-20 grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
    >
      {mapcoount.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[220px] border p-3 flex rounded-md shadow-md hover:shadow-xl flex-col justify-between gap-7"
        >
          <h1 className="text-xl font-medium">
            {item}
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
