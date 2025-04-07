// import { FaCloud, FaProjectDiagram, FaNetworkWired, FaLightbulb } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function OurApproach() {
//   const approaches = [
//     { icon: <FaCloud className="text-[#ff9908] text-5xl" />, title: "Data and cloud-fueled" },
//     { icon: <FaProjectDiagram className="text-[#ff9908] text-5xl" />, title: "Enterprise-wise" },
//     { icon: <FaNetworkWired className="text-[#ff9908] text-5xl" />, title: "Ecosystem-enabled" },
//     { icon: <FaLightbulb className="text-[#ff9908] text-5xl" />, title: "Responsible and ethical" },
//   ];

//   return (
//     <div className="bg-gray-100 py-12 px-6 md:px-12 text-white">
//       <motion.h2
//         initial={{ opacity: 0, y: -100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center text-sm  mb-12 tracking-wider"
//       >
//        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
//         Our<span className="text-[#fc9908] underline underline-offset-4 decoration-1 under font-light decoration-gray-900 text-center">  Approach</span>
//       </h2>
//       <p className="text-base text-gray-500 mb-8 text-center">
//       Transforming Industries with Cutting-Edge Solutions
//       </p> 
//       </motion.h2>

//       <div className="relative flex items-center justify-between w-full max-w-5xl mx-auto">
//         {approaches.map((item, index) => (
//           <motion.div
//             key={index}
//             className="relative text-center flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             whileHover={{ scale: 1.1 }}
//           >
//             <div className="p-4 bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
//               {item.icon}
//             </div>
//             <p className="text-gray-500 mb-8 ">{item.title}</p>

//             {/* Connecting line */}
//             {index !== approaches.length - 1 && (
//               <div className="absolute top-1/2 w-[100px] h-[2px] bg-[#fc9908] left-full transform -translate-y-1/2"></div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { FaCloud, FaProjectDiagram, FaNetworkWired, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurApproach() {
  const approaches = [
    { icon: <FaCloud className="text-[#ff9908] text-6xl" />, title: "Data and cloud-fueled" },
    { icon: <FaProjectDiagram className="text-[#ff9908] text-6xl" />, title: "Enterprise-wise" },
    { icon: <FaNetworkWired className="text-[#ff9908] text-6xl" />, title: "Ecosystem-enabled" },
    { icon: <FaLightbulb className="text-[#ff9908] text-6xl" />, title: "Responsible and ethical" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-900 mb-2 text-center"
      >
        Our
        <span className="text-[#fc9908] underline underline-offset-4 decoration-1 font-light decoration-gray-900">
          {" "}Approach
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg text-gray-500 mb-16 text-center"
      >
        Transforming Industries with Cutting-Edge Solutions
      </motion.p>

      {/* Approach Cards with Lines */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mx-auto space-y-16 sm:space-y-0 sm:space-x-24">
        {approaches.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Icon Container */}
            <div className="p-8 bg-gray-900 rounded-full shadow-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>
            {/* Title */}
            <p className="text-gray-700 text-lg font-semibold">{item.title}</p>

            {/* Horizontal line (for large screens) */}
            {index !== approaches.length - 1 && (
              <div className="hidden sm:block absolute top-1/2 w-[120px] sm:w-[160px] h-[2px] bg-[#fc9908] left-full transform -translate-y-1/2"></div>
            )}

            {/* Vertical line for mobile */}
            {index !== approaches.length - 1 && (
              <div className="sm:hidden absolute bottom-[-60px] w-[2px] h-[50px] bg-[#fc9908]"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
