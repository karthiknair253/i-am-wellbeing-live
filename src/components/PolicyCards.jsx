import React from 'react';

export default function PolicyCards() {
  return (
    <div className=" bg-white py-8 px-4">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contribution Card */}
          <div className="relative  border-2 border-[#03989e] p-4 shadow-lg">
            <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>

            <h2 className="text-2xl font-bold text-center mb-6 text-black  font-alegreya">
              Contribution
            </h2>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <p className="text-black leading-relaxed  font-alegreya">
                  The contribution amount is payable in advance (option to pay in instalments is available) as per the application process protocols.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <p className="text-black leading-relaxed  font-alegreya">
                  The amount can be paid via online transfer (NEFT/IMPS).
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <p className="text-black leading-relaxed  font-alegreya">
                  The following details will be required for fee initiation: PAN Card, Aadhar Card**.
                </p>
              </li>
            </ul>

            <div className=" ">
              <p className="text-lg text-black leading-relaxed  font-alegreya ">
                *All the contributions will be utilised by Nairatmya Foundation's work with under-resourced communities.
              </p>
              <p className="text-lg text-black leading-relaxed  font-alegreya">
                **The person whose account was used to make the money transfer must submit the PAN and Aadhar details.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative   border-2 border-[#03989e] p-4 shadow-lg">
              <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800  font-alegreya">
                Refund Policy
              </h2>
              <p className="text-gray-700 leading-relaxed  font-alegreya">
                In case the participant wants to withdraw from the course before it begins, 50% of the contribution amount shall be returned upon connecting with the organization 10-12 days prior to the course commencement.
              </p>

            </div>

            {/* Scholarship Policy Card */}
            <div className="relative   border-2 border-[#03989e] p-4 shadow-lg">
              <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>

              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800  font-alegreya">
                Scholarship Policy
              </h2>
              <p className="text-gray-700 leading-relaxed  font-alegreya">
                In line with our mission of making India trauma-informed, we recognise that financial constraints can be a significant barrier for those passionate about growing in their professional journey. To bridge this gap, we are offering limited scholarships for students/professionals from under-resourced communities. Eligible applicants will receive a 50% waiver on the total course fee.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}