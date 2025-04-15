// import React, { useEffect, useState } from "react";
// import { GiConfirmed } from "react-icons/gi";
// const CheckOut = ({ service, onClose }) => {
//   const [confirmed, setConfirmed] = useState(false);
//   return (
//     <div className="fixed z-20 self-center justify-self-center inset-0 rounded-2xl flex flex-col justify-center items-center bg-white w-1/2 h-fit p-8">
//       <button
//         className="absolute top-5 right-8 p-2 cursor-pointer font-extrabold"
//         onClick={() => {
//           onClose();
//         }}
//       >
//         X
//       </button>
//       <p className="text-xl font-bold mb-5">CheckOut</p>
//       {!confirmed ? (
//         <form
//           className="flex flex-col"
//           onSubmit={(e) => {
//             e.preventDefault();
//             setConfirmed(true);
//             setTimeout(() => {
//               onClose();
//             }, 5000);
//           }}
//         >
//           <div className="flex gap-2">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Number
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Your Phone Number"
//                 required
//                 className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Selected Pack
//               </label>
//               <input
//                 type="text"
//                 disabled
//                 value={service}
//                 className="w-full px-4 py-2 border border-pink-500 rounded-md bg-gray-300 text-pink-black focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-pink-500 text-white py-2 px-4 rounded-md w-full hover:bg-pink-600 transition"
//           >
//             Confirm Check Out
//           </button>
//         </form>
//       ) : (
//         <>
//           <GiConfirmed color="green" size={50} />
//           <p className="text-xl font-bold mt-4">Confirmed! Thank you</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default CheckOut;


import React, { useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
const CheckOut = ({ service, onClose }) => {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="fixed z-20 self-center justify-self-center inset-0 rounded-2xl flex flex-col justify-center items-center bg-white w-5/6 h-5/6 p-16">

      <button
        className="absolute top-5 right-8 p-2 cursor-pointer font-extrabold"
        onClick={() => {
          onClose();
        }}
      >
        X
      </button>
      <p className="text-xl font-bold mb-5">CheckOut</p>
      {!confirmed ? (
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            setConfirmed(true);
            setTimeout(() => {
              onClose();
            }, 5000);
          }}
        >
          <div className="flex gap-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Number
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Selected Pack
              </label>
              <input
                type="text"
                disabled
                value={service}
                className="w-full px-4 py-2 border border-pink-500 rounded-md bg-gray-300 text-pink-black focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Select Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Select Time
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-md w-full hover:bg-pink-600 transition"
          >
            Confirm Check Out
          </button>
        </form>
      ) : (
        <>
          <GiConfirmed color="green" size={50} />
          <p className="text-xl font-bold mt-4">Confirmed! Thank you</p>
        </>
      )}
    </div>
  );
};

export default CheckOut;