import React from 'react';

export default function CourseInfoLayout() {
  return (
    <div className=" bg-white p-4 md:p-8">
      <div className="container mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">

            <div className="relative   border-2 border-[#03989e] p-4 shadow-lg">
              <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>

              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900  font-alegreya">Attendance</h2>
              <ul className="space-y-2 text-sm text-gray-900 leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-base  font-alegreya">•</span>
                  <span className='text-lg  font-alegreya'>It is mandatory to attend all course sessions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-base  font-alegreya">•</span>
                  <span className='text-lg  font-alegreya'>Regularity in attendance shall be taken into account for final course credits and certification.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-base  font-alegreya">•</span>
                  <span className='text-lg  font-alegreya'>Extra sessions for those missed shall not be provided</span>
                </li>
              </ul>

            </div>
            <div className="relative   border-2 border-[#03989e] p-4 shadow-lg">
              <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Assignments</h2>
              <ul className="space-y-2 text-sm text-gray-900 leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-base  font-alegreya">•</span>
                  <span className='text-lg  font-alegreya'>After each module, the participants are required to submit a reflective assignment for evaluation, which the team will share. All assignments must be submitted according to the assigned due date.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-base  font-alegreya">•</span>
                  <span className='text-lg  font-alegreya'>Assignments are essential in fulfilling the total credits required to complete the course.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-base  font-alegreya">•</span>
                  <span className='text-lg  font-alegreya'>Late submissions shall not be accepted.</span>
                </li>
              </ul>

            </div>
          </div>
          <div className="relative   border-2 border-[#03989e] p-4 shadow-lg">
            <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Grading Criteria</h2>
            <p className="text-sm text-gray-900 leading-relaxed mb-4  font-alegreya">
              The following grading criteria are used for evaluation of both assignments and the overall course:
            </p>
            <div className="border border-gray-400">
              <div className="flex border-b border-gray-400">
                <div className="flex-1 text-center py-2 px-4 bg-gray-50 text-sm font-semibold text-gray-900  font-alegreya">Above 85%</div>
                <div className="w-20 text-center py-2 px-4 border-l border-gray-400 bg-gray-50 text-sm font-bold text-gray-900  font-alegreya">5</div>
              </div>
              <div className="flex border-b border-gray-400">
                <div className="flex-1 text-center py-2 px-4 text-sm font-semibold text-gray-900  font-alegreya">70-85%</div>
                <div className="w-20 text-center py-2 px-4 border-l border-gray-400 text-sm font-bold text-gray-900  font-alegreya">4</div>
              </div>
              <div className="flex border-b border-gray-400">
                <div className="flex-1 text-center py-2 px-4 bg-gray-50 text-sm font-semibold text-gray-900  font-alegreya">51-65%</div>
                <div className="w-20 text-center py-2 px-4 border-l border-gray-400 bg-gray-50 text-sm font-bold text-gray-900  font-alegreya">3</div>
              </div>
              <div className="flex border-b border-gray-400">
                <div className="flex-1 text-center py-2 px-4 text-sm font-semibold text-gray-900  font-alegreya">31-50%</div>
                <div className="w-20 text-center py-2 px-4 border-l border-gray-400 text-sm font-bold text-gray-900  font-alegreya">2</div>
              </div>
              <div className="flex">
                <div className="flex-1 text-center py-2 px-4 bg-gray-50 text-sm font-semibold text-gray-900  font-alegreya">&lt;30%</div>
                <div className="w-20 text-center py-2 px-4 border-l border-gray-400 bg-gray-50 text-sm font-bold text-gray-900  font-alegreya">1</div>
              </div>
            </div>

          </div>
        </div>

        {/* Assignments Section */}


        {/* Parameters for Grading */}
        <div className="bg-white ">
          <div className="mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-start mb-8 text-gray-900  font-alegreya">
              Some Parameters for grading during the course:
            </h2>

            <div className="relative">
              {/* Top Row Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-6 sm:gap-2 mb-4">
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Group Participation and<br />Interaction
                  </p>
                </div>
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Creativity and Curiosity
                  </p>
                </div>
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Problem Solving and<br />Decision Making
                  </p>
                </div>
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Critical Analysis and<br />Reflective Thinking
                  </p>
                </div>
              </div>

              {/* Connecting Lines and Person Icon */}
              <div className="relative h-40 my-2 hidden sm:block">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 1200 160"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Top left box to center - curved */}
                  <path
                    d="M 150 0 Q 150 50, 600 80"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />

                  {/* Top center-left box to center - curved */}
                  <path
                    d="M 450 0 Q 450 40, 600 80"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />

                  {/* Top center-right box to center - curved */}
                  <path
                    d="M 750 0 Q 750 40, 600 80"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />

                  {/* Top right box to center - curved */}
                  <path
                    d="M 1050 0 Q 1050 50, 600 80"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />

                  {/* Center to bottom left box - curved */}
                  <path
                    d="M 600 80 Q 150 110, 150 160"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />

                  {/* Center to bottom center-left box - curved */}
                  <path
                    d="M 600 80 Q 450 120, 450 160"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />

                  {/* Center to bottom center-right box - curved */}
                  <path
                    d="M 600 80 Q 750 120, 750 160"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />

                  {/* Center to bottom right box - curved */}
                  <path
                    d="M 600 80 Q 1050 110, 1050 160"
                    fill="none"
                    stroke="#03989e"
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Person Icon - centered */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-white rounded-full p-1">
                    {/* Simple stick figure person with raised arms */}
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      {/* Head */}
                      <circle cx="30" cy="15" r="6" fill="black" />
                      {/* Body */}
                      <line x1="30" y1="21" x2="30" y2="38" stroke="black" strokeWidth="2.5" />
                      {/* Left arm raised */}
                      <line x1="30" y1="25" x2="18" y2="15" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Right arm raised */}
                      <line x1="30" y1="25" x2="42" y2="15" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Left leg */}
                      <line x1="30" y1="38" x2="22" y2="50" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Right leg */}
                      <line x1="30" y1="38" x2="38" y2="50" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Row Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  lg:gap-6 sm:gap-2 mb-2">
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Holistic Understanding<br />of Trauma
                  </p>
                </div>
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Unlearning and building<br />new Perspectives
                  </p>
                </div>
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Integration and<br />Application of Principles
                  </p>
                </div>
                <div className="border-2 border-dotted border-[#03989e] p-4 text-center min-h-[80px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-gray-900 leading-tight  font-alegreya">
                    Authenticity and<br />willingness to connect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section - Application Process and Eligibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* Application Process Box */}
          <div className="relative   border-2 border-[#03989e] p-4 shadow-lg">
            <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900  font-alegreya">Application Process</h2>
            <ul className="space-y-3 text-sm text-gray-900 leading-relaxed">
              <li className='text-lg'>
                <span className="font-bold text-lg  font-alegreya">• Step 1:</span> Complete the application form. The link to the form is on the Admission Brochure.
              </li>
              <li className='text-lg  font-alegreya'>
                <span className="font-bold text-lg  font-alegreya">• Step 2:</span> If selected, you will be notified about the next round, which will involve a virtual interaction with the panel, along with members of the cohort.
              </li>
              <li className='text-lg  font-alegreya'>
                <span className="font-bold text-lg  font-alegreya">• Step 3:</span> Attend the interview with the program faculty and wait for our email about it. (Please keep checking your spam folder as well.)
              </li>
              <li className='text-lg  font-alegreya'>
                <span className="font-bold text-lg  font-alegreya">• Step 4:</span> If selected, pay the fee within the stipulated time to block your seat. Please note that we can only hold a seat until the time given in the email.
              </li>
            </ul>

          </div>

          {/* Eligibility Criteria Box */}
          <div className="relative  h-[200px]  border-2 border-[#03989e] p-4 shadow-lg">
            <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-4 -left-4"></div>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Eligibility Criteria</h2>
            <ul className="space-y-2 text-sm text-gray-900 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-lg">•</span>
                <span className='text-lg  font-alegreya'>Postgraduate Students from psychology and allied fields</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-lg  font-alegreya">•</span>
                <span className='text-lg  font-alegreya'>Working mental health practitioners</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}