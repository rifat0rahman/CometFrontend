export default function PostCreateCard({ data }) {
  return (
    <div className="border cursor-pointer border-gray-300 rounded-lg p-4 shadow-md bg-white w-[330px]">
      <div className="text-2xl mb-2 flex items-center gap-5">
        {data.icon}
        <h2 className="text-lg font-bold mb-2">{data.title}</h2>
      </div>

      <p className="text-gray-600 text-md">{data.description}</p>
    </div>
  );
}
