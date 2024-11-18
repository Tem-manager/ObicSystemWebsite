import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // إضافة useNavigate

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // تحديد نوع المتغير email
  const [password, setPassword] = useState<string>(""); // تحديد نوع المتغير password
  const navigate = useNavigate(); // تعريف navigate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق التحقق من بيانات التسجيل (مثلاً، الاتصال بالخادم)
    console.log("Email:", email);
    console.log("Password:", password);
    
    // بعد التحقق من بيانات المستخدم (أو تسجيل الدخول بنجاح)، نقوم بالتوجيه
    navigate("/chat/chats"); // توجيه المستخدم إلى صفحة "AllChats"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="name"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:text-blue-700">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
