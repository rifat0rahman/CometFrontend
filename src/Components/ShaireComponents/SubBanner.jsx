export default function SubBanner({ name, title }) {
  return (
    <div className="w-full bg-black h-[400px] flex justify-center items-center flex-col gap-5">
      <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl text-center">
        {name}
      </h1>
      <p className="text-white text-center text-xl">{title}</p>
    </div>
  );
}
