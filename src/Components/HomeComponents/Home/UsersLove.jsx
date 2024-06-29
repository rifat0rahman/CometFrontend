import Marquee from "react-fast-marquee";
import TestimonialCard from "../../ShaireComponents/TestimonialCard";

export default function UsersLove() {
  return (
    <div className="container mx-auto py-10 px-2">
      <h1 className="text-4xl font-bold text-center my-10">Users love us</h1>
      <p className="text-center  text-xl">
        Hear directly from those who have experienced the power of this platform
      </p>
      <div className="container  float-left mx-auto my-10 py-10">
        <Marquee className="mb-5">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Marquee>
      </div>
    </div>
  );
}
