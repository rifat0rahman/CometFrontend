import { useForm } from "react-hook-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center items-center flex-col w-full sm:max-w-[500px]">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                  message:
                    "Password must contain at least one number and one uppercase letter",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="w-full flex justify-between items-center mb-4">
            <label className="flex text-sm items-center gap-2">
              <input type="checkbox" {...register("rememberMe")} />
              Remember me
            </label>
            <Link className="text-sm text-blue-600" to="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 mt-4 text-white p-2 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <div className="w-full flex justify-center items-center mt-4">
          <Link to="/signup" className="text-md text-center text-blue-600">
            Create a new account
          </Link>
        </div>
      </div>
      <div className="flex justify-between w-full px-5 text-white items-center mt-4 text-sm">
        <span className="flex items-center">
          <AiOutlineCheckCircle className="mr-1" /> No credit card required
        </span>
        <span className="flex items-center">
          <AiOutlineCheckCircle className="mr-1" /> Free for 7 days
        </span>
        <span className="flex items-center">
          <AiOutlineCheckCircle className="mr-1" /> Cancel anytime
        </span>
      </div>
    </div>
  );
}
