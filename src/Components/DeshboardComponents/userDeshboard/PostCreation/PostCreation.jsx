import { BiBulb } from "react-icons/bi";
import PostCreateCard from "./PostCreateCard";
import { MdOutlineBook } from "react-icons/md";
import { AiOutlineExperiment, AiOutlineVideoCamera } from "react-icons/ai";
import { VscDeviceMobile } from "react-icons/vsc";
import { LuBrainCircuit } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";

export default function PostCreation() {
  const CreationTopicData = [
    {
      id: 1,
      icon: <BiBulb />,
      title: "Create Post from Blog",
      description:
        "Craft LinkedIn post from topic of your choice and make an impression on your audience.",
    },
    {
      id: 2,
      icon: <MdOutlineBook />,
      title: "Create Post from Topic",
      description:
        "Convert blog content into LinkedIn posts for impactful sharing.",
    },
    {
      id: 3,
      icon: <AiOutlineExperiment />,
      title: "Create Post from Passage",
      description:
        "Turn paragraph content into insightful and appealing LinkedIn posts.",
    },
    {
      id: 4,
      icon: <VscDeviceMobile />,
      title: "Create Post from Shorts",
      description:
        "Utilize YouTube shorts to create high quality and engaging LinkedIn post.",
    },
    {
      id: 5,
      icon: <AiOutlineVideoCamera />,
      title: "Create Post from Youtube",
      description:
        "Leverage YouTube videos for impactful LinkedIn posts effortlessly.",
    },
    {
      id: 6,
      icon: <LuBrainCircuit />,
      title: "Share your experience",
      description:
        "Supercharge your LinkedIn presence by sharing your experience effortlessly.",
    },
    {
      id: 7,
      icon: <TbBulb />,
      title: "Share an idea",
      description:
        "Share an idea in an appealing way with your audience on LinkedIn.",
    },
  ];

  return (
    <div className="w-full h-[celc(100%-50px)] md:px-5 px-2 overflow-y-auto">
      <div className="w-full p-2">
        <h1 className="text-[25px] font-bold">Generate LinkedIn Post</h1>
        <p className="text-[20px] py-[10px]">
          Check out how to make LinkedIn post today!
        </p>
      </div>
      <div
        className="w-full px-0 md:px-5 grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        {CreationTopicData.map((data) => (
          <PostCreateCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
