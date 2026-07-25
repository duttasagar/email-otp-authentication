import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/authService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    role: "job_seeker",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
      general: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await register({
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
      });

      if (response.status) {
        localStorage.setItem("verifyEmail", formData.email);
        toast.success(response.message);
        navigate("/verify-otp");
      }
    } catch (error) {
      const data = error.response?.data;

      if (data?.field) {
        setErrors((prev) => ({
          ...prev,
          [data.field]: data.message,
        }));
      } else {
        setErrors({
          general: data?.message || "Registration failed.",
        });
      }

      toast.error(data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-xl border border-gray-200 p-6 lg:p-8">

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-black">
          Create Account
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Register to access the Job Portal
        </p>
      </div>

      {errors.general && (
        <div className="mb-4 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {errors.general}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        {/* Username */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Username
          </label>

          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black focus:ring-2 focus:ring-gray-300"
          />

          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black focus:ring-2 focus:ring-gray-300"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black focus:ring-2 focus:ring-gray-300"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Account Type
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black focus:ring-2 focus:ring-gray-300"
          >
            <option value="job_seeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black focus:ring-2 focus:ring-gray-300"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black focus:ring-2 focus:ring-gray-300"
          />

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="md:col-span-2 mt-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </div>

      </form>

      <div className="mt-5 pt-4 border-t text-center">
        <p className="text-sm text-gray-600 mb-3">
          Already have an account?
        </p>

        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Login
        </Link>
      </div>

    </div>
  );
};

export default RegisterForm;


