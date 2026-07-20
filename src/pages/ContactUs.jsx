import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
const team = `${import.meta.env.VITE_PUBLIC_URL}/Home/team2.png`;
import { sendMessage, sendAccountDetails, sendNeeds } from "../components/Api";

import bg from "../imgs/program-images/contactUsBg.png";
import contactUsGirl from "../imgs/program-images/contactUsGirl.png";
import contactUsBoy from "../imgs/program-images/contactUsBoy.png";
import contactUsFamily from "../imgs/program-images/contactUsFamily.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    AccountDetails: "",
    need: "",
    nameneeds: "",
    emailneeds: "",
  });
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
const handleSubmit = async (e, apiFunction) => {
  e.preventDefault();

  try {
    const response = await apiFunction(formData);

    if (response.status === "success") {
      alert(response.message); 
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        AccountDetails: "",
        need: "",
        nameneeds: "",
        emailneeds: "",
      });
    } else {
      alert(response.message); 
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
};

  return (
    <>
      <section className="h-[80vh]">
        <div
          className="bg-no-repeat bg-cover bg-center h-[100%]  "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="h-[100%] w-[100%] bg-white bg-opacity-25 flex justify-center items-center">
            <h1 className="text-5xl font-bold text-black bg-[#515154] bg-opacity-30 text-center px-10 py-10 rounded-lg max-md:text-4xl uppercase  font-alegreya">
              Join our network of compassion
            </h1>
          </div>
        </div>
      </section>

        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 items-center">
            {/* Image */}
            <div
              className="bg-cover bg-center rounded-lg h-80 sm:h-full md:h-[450px] lg:h-full max-md:h-[30rem]"
              style={{ backgroundImage: `url(${contactUsGirl})` }}
            ></div>

            {/* Form */}
            <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-alegreya ">
                Be an Agent of Change!
              </h2>
              <p className="text-gray-600 mb-8 text-lg sm:text-xl text-justify font-alegreya">
                In a country like ours, there can never be too many mental health professionals, especially those working with people coming from marginalized sections of society. Join us in the capacity of a volunteer/intern/full-time member to be an agent of change in someone's life.
              </p>
              <form
                className="space-y-6 border-2 border-black rounded-3xl p-6 sm:p-10 bg-white shadow-lg"
                onSubmit={(e) => handleSubmit(e, sendMessage)}
              >
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-black">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-[#a8d940] placeholder:text-black rounded-lg focus:ring-2 focus:ring-[#a8d940] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-[#a8d940] placeholder:text-black rounded-lg focus:ring-2 focus:ring-[#a8d940] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border border-[#a8d940] placeholder:text-black rounded-lg focus:ring-2 focus:ring-[#a8d940] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-[#a8d940] placeholder:text-black rounded-lg focus:ring-2 focus:ring-[#a8d940] focus:outline-none"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#a8d940] text-white font-semibold rounded-3xl hover:bg-black transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>


        <section className="px-4 py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
            <div
              className="bg-cover bg-center rounded-lg h-80 sm:h-full md:h-[450px] lg:h-full order-first md:order-2 max-md:h-[30rem]"
              style={{ backgroundImage: `url(${contactUsBoy})` }}
            ></div>

            <div className="md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
                FAQs
              </h2>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="border border-black rounded-xl p-4 shadow-sm bg-white">
                  <h3 className="font-semibold text-lg mb-2">
                    Where is this Donation amount going to be utilised?
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-alegreya">
                    Your contribution will directly fund mental health support, both
                    individual and group, for survivors from marginalised communities.
                    Every rupee goes toward creating safe, accessible spaces where
                    individuals navigating layers of interrelated vulnerabilities can
                    find support, healing, and hope. With your support, we are not
                    offering charity — we are equipping survivors with the tools to
                    rebuild their sense of safety, dignity, and belonging, while
                    empowering them to extend that strength to their families and
                    communities.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="border border-black rounded-xl p-4 shadow-sm bg-white">
                  <h3 className="font-semibold text-lg mb-2 font-alegreya">
                    Do you accept small donations? Will they really help?
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-alegreya">
                    Absolutely! Even the smallest contribution has a triple effect. For
                    example, ₹500 can create access to one therapy session for a survivor,
                    while larger donations can fund group sessions, training programs, or
                    community outreach. Every rupee counts toward creating safety and
                    healing.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="border border-black rounded-xl p-4 shadow-sm bg-white">
                  <h3 className="font-semibold text-lg mb-2 font-alegreya">
                    Is there any Tax Exemption on Donations?
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-alegreya">
                    Yes, all donations made to us are eligible for tax exemption under
                    Section 80G of the Income Tax Act, 1961. Once you make a contribution,
                    you will receive a donation receipt that can be used to claim exemption
                    while filing your taxes.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="border border-black rounded-xl p-4 shadow-sm bg-white">
                  <h3 className="font-semibold text-lg mb-2 font-alegreya">
                    How do I know my donation is being used responsibly?
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-alegreya">
                    Transparency is at the core of our work. We share regular updates
                    through reports, newsletters, and social media so you can see the real
                    impact of your contribution. Every donation is carefully allocated to
                    ensure it directly supports survivors.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="border border-black rounded-xl p-4 shadow-sm bg-white">
                  <h3 className="font-semibold text-lg mb-2 font-alegreya">
                    Can I donate from outside India?
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-alegreya">
                    Currently, we can only accept donations from within India. We’re working
                    towards opening international donation channels soon.
                  </p>
                </div>

                {/* FAQ 6 */}
                <div className="border border-black rounded-xl p-4 shadow-sm bg-white">
                  <h3 className="font-semibold text-lg mb-2 font-alegreya">
                    Besides donating, how else can I support your work?
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-alegreya">
                    You can support us by volunteering your time, spreading awareness about
                    our cause, collaborating with us on community programs, or simply
                    sharing our story within your network. Every form of support helps us
                    reach more survivors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Join Hands Section */}
        <section className="px-4 py-16 bg-white">
          <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-stretch">
            {/* Image */}
            <div
              className="bg-cover bg-center rounded-lg h-80 sm:h-full md:h-[450px] lg:h-full max-md:h-[30rem]"
              style={{ backgroundImage: `url(${contactUsFamily})` }}
            ></div>

            {/* Form */}
            <div className="p-6 lg:p-10 rounded-lg max-md:w-full max-md:p-0">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center max-md:text-left font-alegreya">
                Join Hands with Us
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed max-md:text-justify max-md:text-lg text-justify font-alegreya">
                Change happens in collaboration, not isolation. Whether you are a corporate organization or a not-for-profit foundation, a school or an institution, a hospital or a government office, join us so we can add to the level of  impact in your community. We are equipped to offer specialised support to humans from all walks of life, from corporate trainings to SEL modules, from individual to group interventions.
              </p>
              <form
                className="space-y-6 border-[2px] border-black rounded-xl p-10"
                onSubmit={(e) => handleSubmit(e, sendNeeds)}
              >
                <div>
                  <label
                    htmlFor="nameneeds"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="nameneeds"
                    type="text"
                    value={formData.nameneeds}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-[#a8d940] placeholder:text-black  rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailneeds"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="emailneeds"
                    type="email"
                    value={formData.emailneeds}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-[#a8d940] placeholder:text-black  rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="need"
                    className="block text-lg font-medium text-gray-700"
                  >
                    What are your needs?
                  </label>
                  <textarea
                    id="need"
                    value={formData.need}
                    onChange={handleInputChange}
                    placeholder="Describe your needs"
                    className="w-full px-4 py-2 border border-[#a8d940] placeholder:text-black rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#a8d940] text-white font-semibold rounded-lg hover:bg-black transition duration-300"
                >
                  Submit Needs
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="text-center mt-8 px-4 md:px-8 mb-12">
          <h1 className="text-base xs:text-lg sm:text-xl md:text-3xl font-semibold ">
            For collaboration, write to us at{" "}
            <span className="font-bold ">info@iamwellbeing.in</span>
          </h1>
        </div>
    </>
  );
};

export default ContactUs;
