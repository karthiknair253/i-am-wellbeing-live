// import { useEffect, useState } from "react";

// export function ImageAutoFit({ src, index }) {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = src;
//     img.onload = () => setLoaded(true);
//   }, [src]);

//   return (
//     <div
//       key={index}
//       className="flex-shrink-0 w-60 h-40 rounded-xl overflow-hidden  shadow-md bg-gray-200 flex items-center justify-center"
//     >
//       {!loaded && (
//         <div className="w-full h-full bg-gray-300 animate-pulse" />
//       )}

//       {loaded && (
//         <img
//           src={src}
//           alt={`image-${index}`}
//           className="w-full h-full object-fill object-center transition-all duration-500"
//         />
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export function ImageAutoFit({ src, index, sizesMap = {} }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  // Get custom width/height from sizesMap object
  const customSize = sizesMap[index] || {};
  const width = customSize.width || "15rem";  // default w-60
  const height = customSize.height || "10rem"; // default h-40

  return (
    <div
      key={index}
      className="flex-shrink-0 rounded-xl overflow-hidden shadow-md bg-gray-200 flex items-center justify-center"
      style={{
        width,
        height,
      }}
    >
      {!loaded && (
        <div className="w-full h-full bg-gray-300 animate-pulse" />
      )}

      {loaded && (
        <img
          src={src}
          alt={`image-${index}`}
          className="w-full h-full object-cover object-center transition-all duration-500"
        />
      )}
    </div>
  );
}
