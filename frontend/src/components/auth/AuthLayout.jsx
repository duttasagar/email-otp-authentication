import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center overflow-hidden p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-black text-white text-center py-3">
          <h1 className="text-3xl font-bold tracking-wide">
            SecureAuth
          </h1>

          <p className="text-sm text-gray-300 mt-1">
            Email OTP Authentication System
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {children || <Outlet />}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;









// import { Link } from "react-router-dom";

// const AuthLayout = ({
//   title,
//   children,
//   footerText,
//   footerLink,
//   footerLinkText,
// }) => {
//   return (
//     <div className="h-full  bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center ">
//       <div className="w-full  bg-white  shadow-2xl overflow-hidden">

//         {/* Header */}
//         <div className="bg-black text-white text-center py-4 px-8">
//           <h1 className="text-4xl font-bold tracking-wide">
//             Job Portal
//           </h1>
//           <p className="text-gray-300 mt-2">
//             Find your dream job with confidence
//           </p>
//         </div>

//         {/* Body */}
//         <div className="px-5 py-5">
//           <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
//             {title}
//           </h2>

//           {children}

//           <div className="mt-8 text-center text-gray-600">
//             {footerText}{" "}
//             <Link
//               to={footerLink}
//               className="font-semibold text-black hover:underline"
//             >
//               {footerLinkText}
//             </Link>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AuthLayout;