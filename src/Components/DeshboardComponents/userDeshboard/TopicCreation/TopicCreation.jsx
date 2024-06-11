import { useForm } from "react-hook-form";

export default function TopicCreation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen md:px-5 px-2 overflow-scroll overflow-y-auto">
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
                This field is required
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
              id="whatDoYouDo"
              {...register("whatDoYouDo", { required: true })}
              placeholder="I help founders build personal brand on LinkedIn"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.whatDoYouDo && (
              <span className="text-red-500 text-sm">
                This field is required
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
              {...register("keywords", { required: true })}
              placeholder="Startup funding, Google Ads, AI Tools, SEO, etc"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.keywords && (
              <span className="text-red-500 text-sm">
                This field is required
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
    </div>
  );
}
