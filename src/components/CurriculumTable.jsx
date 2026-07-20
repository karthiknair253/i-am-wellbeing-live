import React from 'react';

const CurriculumTable = () => {
  return (
    <div className="bg-[#FFDE59] p-6 md:p-12 max-xl:mx-2">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">Curriculum</h1>
        <p className="text-base md:text-lg lg:text-2xl mt-3 text-justify">
          Level 1 of the Course includes 6 modules. Below is the structure of
          the requirements of the Certificate Course in Trauma-Informed Care
          Practices
        </p>
      </div>
      <h2 className="text-center text-2xl md:text-3xl mt-5 mb-5 font-bold">
        Course Structure
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border-[2px] border-black">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border border-black text-lg md:text-xl">
                Category
              </th>
              <th className="px-4 py-2 text-left border border-black text-lg md:text-xl">
                Hours
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black">
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                Theory
              </td>
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                30
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                Assignments
              </td>
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                9
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                Case submissions
              </td>
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                10
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                Supervision
              </td>
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                12
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                Viva
              </td>
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left">
                1
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left font-bold">
                Total hours
              </td>
              <td className="px-4 py-2 border border-black text-sm md:text-base text-left font-bold">
                62
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurriculumTable;
