// import React from "react";

// const ScheduleTable = () => {
//   return (
//     <div className="overflow-x-auto pt-4 max-md:overflow-x-scroll max-xl:p-2 ">
//       <table className="min-w-full lg:p-2  border-collapse border bg-white border-black text-sm text-left sm:text-xs md:text-sm lg:text-base overflow-x-scroll ">
//         <thead>
//           <tr className="bg-[#029390] text-white font-bold">
//             <th className="border border-black px-2 py-2 lg:px-4">Week</th>
//             <th className="border border-black px-2 py-2 lg:px-4">Topics</th>
//             <th className="border border-black px-2 py-2 lg:px-4">
//               No. of sessions
//             </th>
//             <th className="border border-black px-2 py-2 lg:px-4">
//               Total hours
//             </th>
//             <th className="border border-black px-2 py-2 lg:px-4">
//               Tentative Date
//             </th>
//             <th className="border border-black px-2 py-2 lg:px-4">
//               Timing and Day
//             </th>
//             <th className="border border-black px-2 py-2 lg:px-4">
//               Assignment
//             </th>
//           </tr>
//         </thead>
//         <tbody className="overflow-x-auto max-md:overflow-x-scroll">
//           {/* Week 1 */}
//           <tr>
//             <td
//               className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
//               rowSpan="2"
//             >
//               Week 1
//             </td>
//             <td
//               className="border border-black px-4 py-2"
//               rowSpan="2"
//             >
//               <ul className="list-disc list-inside">
//                 <h1 className="font-bold text-lg md:text-xl">
//                   Basics of trauma
//                 </h1>
//                 <li className="text-sm md:text-base">
//                   Understanding trauma through the decades
//                 </li>
//                 <li className="text-sm md:text-base">
//                   Trauma perspectives across the globe
//                 </li>
//                 <li className="text-sm md:text-base">
//                   Adverse Childhood Experiences and its impact
//                 </li>
//               </ul>
//             </td>

//             <td
//               className="border border-black px-2 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               2
//             </td>
//             <td
//               className="border border-black px-2 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               4
//             </td>
//             <td className="border border-black px-4 py-2 text-center text-sm md:text-base">
//               14th June
//             </td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//             <td
//               className="border border-black px-2 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               1
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black px-4 py-2  text-center text-sm md:text-base">
//               15th June
//             </td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Sunday
//             </td>
//           </tr>

//           {/* Week 2 */}
//           <tr>
//             <td
//               className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
//               rowSpan="2"
//             >
//               Week 2
//             </td>
//             <td className="border border-black px-4 py-2" rowSpan="2">
//               <ul className="list-disc list-inside">
//                 <h1 className="font-bold">
//                   Neuroscience of trauma and levels of safety
//                 </h1>
//                 <li className="text-sm md:text-base">Anatomy of survival</li>
//                 <li className="text-sm md:text-base">Brain-body connection</li>
//                 <li className="text-sm md:text-base">Levels of safety</li>
//                 <li className="text-sm md:text-base">Imprint of trauma memories</li>
//               </ul>
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               2
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               4
//             </td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">21st June</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               1
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">22nd June</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Sunday
//             </td>
//           </tr>

//           {/* Week 3 */}
//           <tr>
//             <td className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center">
//               Week 3
//             </td>
//             <td className="border border-black px-4 py-2">
//               <ul className="list-disc list-inside">
//                 <h1 className="font-bold">Trauma-informed care</h1>
//                 <li>Goals and Principles</li>
//               </ul>
//             </td>
//             <td className="border border-black px-4 py-2 text-center text-sm md:text-base">1</td>
//             <td className="border border-black px-4 py-2 text-center text-sm md:text-base">2</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">28th June</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//             <td className="border border-black px-4 py-2 text-center text-sm md:text-base">1</td>
//           </tr>

//           {/* Week 4 */}
//           <tr>
//             <td
//               className="border border-black px-4 py-2 font-bold max-md:text-center"
//               rowSpan="2"
//             >
//               Week 4
//             </td>
//             <td className="border border-black px-4 py-2" rowSpan="2">
//               <ul className="list-disc list-inside">
//                 <h1 className="font-bold">
//                   Trauma-informed counselling skills
//                 </h1>
//                 <li className="text-sm md:text-base">Adapting the trauma lens in practice</li>
//                 <li className="text-sm md:text-base">Understanding client-therapist relationship</li>
//                 <li className="text-sm md:text-base">Practical applications</li>
//               </ul>
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               2
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               4
//             </td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">29th June</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Sunday
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               1
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">5th July</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//           </tr>

//           {/* Break */}
//           <tr className="bg-yellow-200">
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               colSpan="7"
//             >
//               Break (6th July)
//             </td>
//           </tr>
//           {/* {five} */}
//           {/* Week 5 */}
//           <tr>
//             <td
//               className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
//               rowSpan="2"
//             >
//               Week 5
//             </td>
//             <td className="border border-black px-4 py-2" rowSpan="5">
//               <ul className="list-disc list-inside">
//                 <h1 className="font-bold">
//                   Evidence based tools for processing trauma
//                 </h1>
//                 <li className="text-sm md:text-base">Orientation to Arts-Based Therapy (ABT)</li>
//                 <li className="text-sm md:text-base">Introduction to somatic practices</li>
//                 <li className="text-sm md:text-base">Basics of Emotional Freedom Tapping (EFT)</li>
//                 <li className="text-sm md:text-base">Mindfulness-based practices</li>
//                 <li className="text-sm md:text-base">Non-violent communication</li>
//               </ul>
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="5"
//             >
//               5
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="5"
//             >
//               10
//             </td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">12th July</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               1
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">13th July</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Sunday
//             </td>
//           </tr>

//           {/* Week 6 */}
//           <tr>
//             <td
//               className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
//               rowSpan="3"
//             >
//               Week 6
//             </td>

//             <td className="border border-black px-4 py-2 text-sm md:text-base">19th July</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="3"
//             >
//               1
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">20th July</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Sunday
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">26th July</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//           </tr>

//           {/* Week 7 */}
//           <tr>
//             <td
//               className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
//               rowSpan="2"
//             >
//               Week 7
//             </td>
//             <td
//               className="border border-black px-4 py-2"
//               rowSpan="4"
//             >
//               <ul className="list-disc list-inside">
//                 <h1 className="font-bold">
//                   Practical application and self-care
//                 </h1>
//                 <li className="text-sm md:text-base">Roleplays</li>
//                 <li className="text-sm md:text-base">Vicarious trauma and self-care</li>
//                 <li className="text-sm md:text-base">Orientation to supervision and case submissions + Q/A</li>
//               </ul>
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="4"
//             >
//               3
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="4"
//             >
//               6
//             </td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">27th July</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Sunday
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               1
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">2nd August</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Saturday
//             </td>
//           </tr>

//           {/* Week 8 */}
//           <tr>
//             <td
//               className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
//               rowSpan="2"
//             >
//               Week 8
//             </td>

//             <td className="border border-black px-4 py-2 text-sm md:text-base">3rd August</td>
//             <td className="border border-black px-4 py-2 text-sm md:text-base">
//               10 am to 12 pm: Sunday
//             </td>
//             <td
//               className="border border-black px-4 py-2 text-center text-sm md:text-base"
//               rowSpan="2"
//             >
//               1
//             </td>
//           </tr>
//         </tbody>

//         {/* Footer Row */}
//         <tfoot>
//           <tr>
//             <td
//               colSpan="6"
//               className="border border-black px-4 py-2 bg-teal-600 text-center text-white font-bold"
//             >
//               Closing Ceremony
//             </td>
//             <td className="border border-black px-4 py-2 bg-teal-600 text-center text-white">
//               December
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// };

// export default ScheduleTable;
import React from "react";

const TableContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 w-full">
      {/* Main Table Container */}
      <div className="flex-1 overflow-x-auto">
        <table className="min-w-full border-collapse border bg-white border-[#03989e] text-sm">
          <thead>
            <tr className="bg-[#029390] text-white font-bold">
              <th className="border border-[#03989e] px-2 py-2 lg:px-4  font-alegreya">Week</th>
              <th className="border border-[#03989e] px-2 py-2 lg:px-4  font-alegreya" >Topics</th>
              <th className="border border-[#03989e] px-2 py-2 lg:px-4  font-alegreya">
                No. of sessions
              </th>
              <th className="border border-[#03989e] px-2 py-2 lg:px-4  font-alegreya">
                Total hours
              </th>
              <th className="border border-[#03989e] px-2 py-2 lg:px-4  font-alegreya">
                Assignment
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Week 1 */}
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top  font-alegreya">
                Week 1
              </td>
              <td className="border border-[#03989e] px-4 py-2 align-top">
                <div className="font-bold mb-2  font-alegreya">Basics of trauma</div>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-sm  font-alegreya">
                    Understanding trauma through the decades
                  </li>
                  <li className="text-sm  font-alegreya">
                    Perspectives on trauma across the globe
                  </li>
                  <li className="text-sm  font-alegreya">
                    Adverse Childhood Experiences and its impact
                  </li>
                </ul>
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">2</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">4</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">1</td>
            </tr>

            {/* Week 2 */}
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top  font-alegreya">
                Week 2
              </td>
              <td className="border border-[#03989e] px-4 py-2 align-top">
                <div className="font-bold mb-2  font-alegreya">
                  Neuroscience of trauma and levels of safety
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-sm  font-alegreya">Anatomy of survival</li>
                  <li className="text-sm  font-alegreya">Brain-body connection</li>
                  <li className="text-sm  font-alegreya">Levels of safety</li>
                  <li className="text-sm  font-alegreya">Imprint of trauma memories</li>
                </ul>
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">2</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">4</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">1</td>
            </tr>

            {/* Week 3 */}
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top">
                Week 3
              </td>
              <td className="border border-[#03989e] px-4 py-2 align-top">
                <div className="font-bold mb-2  font-alegreya">Trauma-informed care</div>
                <ul className="list-disc list-inside">
                  <li className="text-sm  font-alegreya">Goals and Principles</li>
                </ul>
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">1</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">2</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">1</td>
            </tr>

            {/* Week 4 */}
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top  font-alegreya">
                Week 4
              </td>
              <td className="border border-[#03989e] px-4 py-2 align-top">
                <div className="font-bold mb-2  font-alegreya">
                  Trauma-informed counselling skills
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-sm  font-alegreya">Adapting the trauma lens in practice</li>
                  <li className="text-sm  font-alegreya">Understanding client-therapist relationship</li>
                  <li className="text-sm  font-alegreya">Practical applications</li>
                </ul>
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">2</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">4</td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya">1</td>
            </tr>

            {/* Integration Break */}
            <tr className="bg-white">
              <td
                className="border border-[#03989e] px-4 py-2 text-center font-semibold text-lg  font-alegreya"
                colSpan="5"
              >
                Integration Break
              </td>
            </tr>

            {/* Week 5 & 6 Combined */}
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top">
                Week 5
              </td>
              <td className="border border-[#03989e] px-4 py-2 align-top" rowSpan="2">
                <div className="font-bold mb-2  font-alegreya">
                  Evidence-based tools for processing trauma
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-sm  font-alegreya">Orientation to Arts-Based Therapy (ABT)</li>
                  <li className="text-sm  font-alegreya">Introduction to somatic practices</li>
                  <li className="text-sm  font-alegreya">Basics of Emotional Freedom Tapping (EFT)</li>
                  <li className="text-sm  font-alegreya">Mindfulness-based practices</li>
                  <li className="text-sm  font-alegreya">Non-violent communication</li>
                </ul>
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya" rowSpan="2">
                5
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya" rowSpan="2">
                10
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya" rowSpan="2">
                1
              </td>
            </tr>
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top  font-alegreya">
                Week 6
              </td>
            </tr>

            {/* Week 7 & 8 Combined */}
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top  font-alegreya">
                Week 7
              </td>
              <td className="border border-[#03989e] px-4 py-2 align-top  font-alegreya" rowSpan="2">
                <div className="font-bold mb-2  font-alegreya">
                  Practical application and self-care
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-sm  font-alegreya">Roleplays</li>
                  <li className="text-sm  font-alegreya">Vicarious trauma and self-care</li>
                  <li className="text-sm  font-alegreya">Orientation to supervision and case submissions + Q/A</li>
                </ul>
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya" rowSpan="2">
                3
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya" rowSpan="2">
                6
              </td>
              <td className="border border-[#03989e] px-2 py-2 text-center align-top font-bold text-lg  font-alegreya" rowSpan="2">
                1
              </td>
            </tr>
            <tr>
              <td className="border border-[#03989e] font-bold px-4 py-2 text-center align-top  font-alegreya">
                Week 8
              </td>
            </tr>

            {/* Supervision */}
            <tr className="bg-gray-100">
              <td
                className="border border-[#03989e] px-4 py-2 text-center font-semibold text-lg  font-alegreya"
                colSpan="5"
              >
                Supervision
              </td>
            </tr>
          </tbody>

          {/* Footer */}
          <tfoot>
            <tr>
              <td
                colSpan="5"
                className="border border-[#03989e] px-4 py-2 bg-[#029390] text-center text-white font-bold  font-alegreya"
              >
                Closing Ceremony
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-48 flex flex-col gap-2 relative">

        <div className="relative border-2 border-[#03989e] bg-white p-4  shadow-sm">
          <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none p-4  -top-2 -left-2"></div>
          <div className="text-center relative">
            <div className="font-bold text-lg   mb-1  font-alegreya">Theory</div>
            <div className="text-xl font-bold text-black  font-alegreya">30 hours</div>
          </div>
        </div>
        <div className="items-center ml-[50%] h-full border-l-2 border-dotted border-[#03989e]"></div>


        <div className="relative border-2 border-[#029390] bg-white p-4  shadow-sm">
          <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none p-4  -top-2 -left-2"></div>
          <div className="text-center relative">
            <div className="font-bold text-lg  mb-1  font-alegreya">Assignments</div>
            <div className="text-xl font-bold text-black  font-alegreya">9 hours</div>
          </div>
        </div>
        <div className="items-center ml-[50%] h-full border-l-2 border-dotted border-[#03989e]"></div>

        <div className="relative border-2 border-[#03989e] bg-white p-4  shadow-sm">
          <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none p-4  -top-2 -left-2"></div>
          <div className="text-center relative">
            <div className="font-bold text-md mb-1">Case Submissions</div>
            <div className="text-xl font-bold text-black  font-alegreya">30 hours</div>
          </div>
        </div>
        <div className="items-center ml-[50%] h-full border-l-2 border-dotted border-[#03989e]"></div>

        <div className="relative border-2 border-[#03989e] bg-white p-4  shadow-sm">
          <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none p-4  -top-2 -left-2"></div>
          <div className="text-center relative">
            <div className="font-bold text-lg   mb-1  font-alegreya">Supervision</div>
            <div className="text-xl font-bold text-black  font-alegreya">12 hours</div>
          </div>
        </div>
        <div className="items-center ml-[50%] h-full border-l-2 border-dotted border-[#03989e]"></div>

        <div className="relative border-2 border-[#03989e] bg-white p-4  shadow-sm">
          <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none p-4  -top-2 -left-2"></div>
          <div className="text-center relative">
            <div className="font-bold text-lg   mb-1  font-alegreya">Viva</div>
            <div className="text-xl font-bold text-black  font-alegreya">1 hour</div>
          </div>  
        </div>
      </div>



    </div>
  );
};

export default TableContent;