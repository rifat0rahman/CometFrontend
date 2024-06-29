import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineCheckCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  return (
    <div className="flex justify-center items-center flex-col w-full sm:max-w-[500px]">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">First name</label>
            <input
              type="text"
              placeholder="Steve"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                First name is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last name</label>
            <input
              type="text"
              placeholder="Smith"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                Last name is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
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
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Re-enter Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              className={`w-full p-2 border ${
                confirmPassword
                  ? password === confirmPassword
                    ? "border-green-500 outline-green-500"
                    : "border-red-500 outline-red-500"
                  : "border-gray-300"
              } rounded mt-1`}
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="w-full pt-4 flex justify-center items-center">
          <Link to="/login" className="text-md text-center text-blue-600">
            Already have an account? Log In
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
