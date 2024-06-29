import TestimonialCard from "../../ShaireComponents/TestimonialCard";

export default function UsersLove() {
  return (
    <div className="container mx-auto py-10 px-2">
      <h1 className="text-4xl font-bold text-center my-10">Users love us</h1>
      <p className="text-center text-xl">
        Hear directly from those who have experienced the power of this platform
      </p>
      <div className="w-auto mt-10 py-5  relative overflow-y-auto  flex ">
        <div className="w-auto float-left mx-5 noneScroll">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}
