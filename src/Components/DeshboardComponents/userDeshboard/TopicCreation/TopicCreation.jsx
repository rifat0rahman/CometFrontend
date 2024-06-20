import { useForm } from "react-hook-form";
import TopicCreationOutput from "./TopicCreationOutput";
import useAxiosSource from "../../../CustomComponents/useAxiousSorce.jsx";
import { useState } from "react";

export default function TopicCreation() {
  const [creationTopicData, setCreationTopicData] = useState();
  const { axiosSource } = useAxiosSource();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axiosSource
      .post("/", data)
      .then((result) => {
        setCreationTopicData(result.data.data);
      })
      .then((err) => console.log(err));
    reset();
  };

  const validateThreeWords = (value) => {
    const words = value.trim().split(/\s+/);
    return words.length >= 3 || "This field requires at least 3 words";
  };

  return (
    <div className="w-full h-[celc(100vh-50px)] relative md:px-5 px-2 ">
      <div className="w-full p-2">
        <h1 className="text-[25px] font-bold">Discover Topic ideas</h1>
        <p className="text-[20px] py-[10px]">
          Get topic ideas on which you can create content
        </p>
      </div>

      {/* ------------------------component main content start from here ------------------ */}
      <div className="w-full border-b">
        <button className="px-7 py-2 border-t-0 border-x-0 border-[4px] border-blue-500">
          Discover Topic
        </button>
      </div>

      {/* ----------------------------topic idea form here ----------------------------- */}
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" py-4 w-full sm:w-[400px]"
        >
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Your Role
            </label>
            <input
              id="role"
              {...register("role", { required: true })}
              placeholder="Founder, Marketer, IT Professional, Public speaker etc"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.role && (
              <span className="text-red-500 text-sm">
                You must have to fill this field.
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="whatDoYouDo"
              className="block text-sm font-medium text-gray-700"
            >
              What do you do?
            </label>
            <input
              id="does"
              {...register("does", { required: true })}
              placeholder="I help founders build personal brand on LinkedIn"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.does && (
              <span className="text-red-500 text-sm">
                You must have to fill this field.
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-700"
            >
              Suggest minimum 3 keywords for topic ideas
            </label>
            <input
              id="keywords"
              {...register("keywords", {
                required: "This field is required",
                validate: validateThreeWords,
              })}
              placeholder="Startup funding, Google Ads, AI Tools, SEO, etc"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.keywords && (
              <span className="text-red-500 text-sm">
                {errors.keywords.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className=" bg-blue-500 mt-4 text-white font-bold py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get Topic Ideas
          </button>
        </form>
      </div>
      {/* ---------------------------------creation idea output------------------------------- */}
      {creationTopicData ? (
        <TopicCreationOutput creationTopicData={creationTopicData} />
      ) : (
        ""
      )}
    </div>
  );
}
