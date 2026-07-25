import React from "react";
import { LogOut } from "lucide-react";
import { logout } from "../../services/authService";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      const refresh = localStorage.getItem("refresh");
      await logout(refresh);
    } catch (err) {
      console.log(err);
    }

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg text-center border border-gray-200">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold">
          {user?.username?.charAt(0).toUpperCase()}
        </div>

        <h1 className="text-4xl font-bold text-black">
          Welcome, {user?.username}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          🎉 You are logged in successfully.
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;













































// import React from "react";
// import { LogOut, Briefcase, Users, FileText, Bell } from "lucide-react";
// import { logout } from "../../services/authService";

// const Dashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

// const handleLogout = async () => {

//     try {

//         const refresh = localStorage.getItem("refresh");

//         await logout(refresh);

//     } catch (err) {
//         console.log(err);
//     }

//     localStorage.removeItem("access");
//     localStorage.removeItem("refresh");
//     localStorage.removeItem("user");

//     window.location.href = "/";
// };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-black text-white flex flex-col">
//         <div className="p-6 text-2xl font-bold border-b border-gray-700">
//           Job Portal
//         </div>

//         <nav className="flex-1 mt-6">
//           <ul className="space-y-2 px-4">
//             <li>
//               <button className="w-full text-left px-4 py-3 rounded-lg bg-white text-black font-semibold">
//                 Dashboard
//               </button>
//             </li>

//             <li>
//               <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
//                 Jobs
//               </button>
//             </li>

//             <li>
//               <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
//                 Applications
//               </button>
//             </li>

//             <li>
//               <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
//                 Profile
//               </button>
//             </li>

//             <li>
//               <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
//                 Settings
//               </button>
//             </li>
//           </ul>
//         </nav>

//         <div className="p-5 border-t border-gray-700">
//           <button
//             onClick={handleLogout}
//             className="flex items-center justify-center gap-2 w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
//           >
//             <LogOut size={20} />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Navbar */}
//         <header className="bg-white shadow px-8 py-5 flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">
//               Welcome, {user?.username}
//             </h1>
//             <p className="text-gray-500">
//               Manage your Job Portal from here.
//             </p>
//           </div>

//           <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
//             {user?.username?.charAt(0).toUpperCase()}
//           </div>
//         </header>

//         {/* Dashboard */}
//         <main className="p-8">
//           {/* Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-white rounded-xl shadow p-6">
//               <Briefcase className="text-black mb-4" size={35} />
//               <h2 className="text-3xl font-bold">25</h2>
//               <p className="text-gray-500">Jobs Applied</p>
//             </div>

//             <div className="bg-white rounded-xl shadow p-6">
//               <Users className="text-black mb-4" size={35} />
//               <h2 className="text-3xl font-bold">8</h2>
//               <p className="text-gray-500">Interviews</p>
//             </div>

//             <div className="bg-white rounded-xl shadow p-6">
//               <FileText className="text-black mb-4" size={35} />
//               <h2 className="text-3xl font-bold">12</h2>
//               <p className="text-gray-500">Saved Jobs</p>
//             </div>

//             <div className="bg-white rounded-xl shadow p-6">
//               <Bell className="text-black mb-4" size={35} />
//               <h2 className="text-3xl font-bold">5</h2>
//               <p className="text-gray-500">Notifications</p>
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <div className="mt-8 bg-white rounded-xl shadow p-6">
//             <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>

//             <div className="space-y-4">
//               <div className="border rounded-lg p-4 flex justify-between">
//                 <div>
//                   <h3 className="font-semibold">
//                     Applied for Frontend Developer
//                   </h3>
//                   <p className="text-gray-500">
//                     ABC Technologies • Today
//                   </p>
//                 </div>

//                 <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
//                   Applied
//                 </span>
//               </div>

//               <div className="border rounded-lg p-4 flex justify-between">
//                 <div>
//                   <h3 className="font-semibold">
//                     Resume Updated
//                   </h3>
//                   <p className="text-gray-500">
//                     Yesterday
//                   </p>
//                 </div>

//                 <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
//                   Updated
//                 </span>
//               </div>

//               <div className="border rounded-lg p-4 flex justify-between">
//                 <div>
//                   <h3 className="font-semibold">
//                     Interview Scheduled
//                   </h3>
//                   <p className="text-gray-500">
//                     XYZ Solutions
//                   </p>
//                 </div>

//                 <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
//                   Upcoming
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="mt-8 grid md:grid-cols-3 gap-6">
//             <button className="bg-black text-white rounded-xl py-5 text-lg font-semibold hover:bg-gray-800 transition">
//               Find Jobs
//             </button>

//             <button className="bg-white border rounded-xl py-5 text-lg font-semibold hover:bg-gray-100 transition">
//               View Profile
//             </button>

//             <button className="bg-white border rounded-xl py-5 text-lg font-semibold hover:bg-gray-100 transition">
//               My Applications
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;