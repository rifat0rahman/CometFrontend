import { useForm } from "react-hook-form";
import { FaDownload } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const onSubmitForm2 = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <div className="w-full p-3 border-b flex justify-between items-center">
        <h4 className="text-xl font-medium text-gray-600">Account</h4>
        <button className="flex justify-center items-center gap-3 px-4 p-2 rounded bg-gray-200 hover:bg-gray-300">
          <IoLogOutOutline />
          Log out
        </button>
      </div>
      {/* -------------------- main content start from here ------------------  */}
      {/* -------------------- first from here ------------------  */}
      <div className="w-full flex flex-col gap-5 p-5">
        <div className="w-full md:w-[750px] p-2 border rounded-md">
          <h4 className="text-xl font-medium text-gray-600">Your Personal</h4>
          <form
            className="w-full p-3 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <label>Role</label>
              <input
                type="text"
                {...register("role", { required: true })}
                placeholder="I help founders create beautiful Facebook ADS"
                className="w-full px-3 p-1 mt-1 outline-1 border rounded-md"
              />
              {errors.role && (
                <span className="text-red-500">Role is required</span>
              )}
            </div>
            <div className="w-full">
              <label>Keywords that interest you</label>
              <input
                type="text"
                {...register("keywords", { required: true })}
                placeholder="FB ads, Social media, Video creation"
                className="w-full px-3 p-1 mt-1 outline-1 border rounded-md"
              />
              {errors.keywords && (
                <span className="text-red-500">Keywords are required</span>
              )}
            </div>
            <div className="w-full">
              <label>Additional Notes</label>
              <textarea
                {...register("notes", { required: true })}
                placeholder="Keywords that interest you FB ads, Social media, Video creation"
                className="w-full px-3 h-[250px] p-1 mt-1 outline-1 border rounded-md"
              />
              {errors.notes && (
                <span className="text-red-500">Notes are required</span>
              )}
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="flex justify-center items-center gap-3 px-4 p-2 rounded-md text-white bg-gray-800 hover:bg-gray-700"
              >
                <FaDownload />
                Save Personal
              </button>
            </div>
          </form>
        </div>

        {/* -------------------- secend from here ------------------  */}
        <div className="w-full md:w-[750px] p-2 border rounded-md">
          <h4 className="text-xl font-medium text-gray-600">
            Personal Details
          </h4>
          <form
            className="w-full p-3 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmitForm2)}
          >
            <div className="w-full">
              <label>Name</label>
              <input
                type="text"
                {...register("role", { required: true })}
                value={`USer Name`}
                className="w-full px-3 p-1 mt-1 outline-1 border rounded-md"
              />
              {errors.role && (
                <span className="text-red-500">Role is required</span>
              )}
            </div>
            <div className="w-full">
              <label>Email</label>
              <input
                type="text"
                disabled
                value={`userrmail@gmail.com`}
                className="w-full px-3 p-1 mt-1 outline-1 border rounded-md"
              />
            </div>
            <div className="w-full">
              <Link className="text-sm text-gray-400 underline">
                Reset password
              </Link>
            </div>
          </form>
        </div>

        {/* -------------------- third div here ------------------  */}
        <div className="w-full md:w-[750px] p-2 border rounded-md">
          <h4 className="text-xl font-medium text-gray-600">
            Your subscription
          </h4>
          <div className="w-full">
            <span className="text-sm text-gray-400">
              Manage your subscriptions
            </span>
          </div>
          <div className="w-full my-3">
            <button className=" px-4 p-2 rounded-md text-white bg-gray-800 hover:bg-gray-700">
              Upgrade Your Plame
            </button>
          </div>

          <div className="w-full">
            <Link className="text-sm text-gray-400 underline">
              Reset password
            </Link>
          </div>
        </div>

        {/* -------------------- fourth div here ------------------  */}
        <div className="w-full p-2 border rounded-md">
          <h4 className="text-xl font-medium mb-2 text-gray-600">
            Account Details <sub> (only visible to workspace admin)</sub>
          </h4>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="w-full border rounded-md bg-gray-200 p-2 py-5 flex justify-center items-center flex-col gap-5">
              <p>Workspace</p>
              <h3 className="text-xl font-medium">2/1</h3>
            </div>
            <div className="w-full border rounded-md bg-gray-200 p-2 py-5 flex justify-center items-center flex-col gap-5">
              <p>LinkedIn Account</p>
              <h3 className="text-xl font-medium">0/1</h3>
            </div>
            <div className="w-full border rounded-md bg-gray-200 p-2 py-5 flex justify-center items-center flex-col gap-5">
              <p>Users</p>
              <h3 className="text-xl font-medium">1/1</h3>
            </div>
            <div className="w-full border rounded-md bg-gray-200 p-2 py-5 flex justify-center items-center flex-col gap-5">
              <p>AI Credits</p>
              <h3 className="text-xl font-medium">Limited</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
