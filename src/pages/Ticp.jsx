import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import HeroImage from "../imgs/tic/heroticp.png"
import BackImage from "../imgs/tic/treeback1.png"


import trainer1 from "../imgs/tic/1.png"
import trainer2 from "../imgs/tic/2.png"
import trainer3 from "../imgs/tic/3.png"
import trainer4 from "../imgs/tic/4.png"
import trainer5 from "../imgs/tic/5.png"
import trainer6 from "../imgs/tic/6.png"

// import img from "../imgs/3a.png";

const ticp2Img = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/2.png`;
const ticp3Img = "/imgs/home-images/flow-chart.png";
const ticp4Img = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/2aa.png`;

// const trainer1 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer1.png`;
// const trainer2 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer2.png`;
// const trainer3 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer3.png`;
// const trainer4 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer4.png`;
// const trainer5 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer5.png`;
// import trainer5 from "../imgs/home-images/trainer5.png";

import graidingImg from "../imgs/home-images/graiding.png";

// const trainer6 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer6.png`;

const banner = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/ticp5.png`;
import flowChart from "../imgs/home-images/Critical Analysis.png";

import Faq from "../components/Faq";
import Model from "../components/Model";

import groupImag from "../imgs/home-images/ticp.png";
import CurriculumTable from "../components/CurriculumTable";
import ScheduleTable from "../components/TableContent";
import TableContent from "../components/TableContent";
import CourseInfoLayout from "../components/CourseInfoLayout";
import PolicyCards from "../components/PolicyCards";
import TestimonialCards from "../components/TestimonialCards";
import { Heading } from "../components/heading";
// import Timeline from "../components/FlowChart";
const Ticp = () => {
  const [team] = useState([
    {
      imgSrc: trainer1,
      name: "Akanksha Chandele  (They/Them)",
      smallImgSrc: "trainer1-small.png",
      designation: "(Holistic Trauma Therapist)",
      description:
        `Akanksha is a Holistic Trauma Therapist committed to supporting survivors of abuse and trauma. Their work is deeply rooted in compassion, interconnectedness, and the belief that true healing happens when the mind, body, and spirit are in harmony.
With an MA in Counselling Psychology, a diploma in Rehabilitation Psychology, and training in Arts-Based Therapy, Akanksha has cultivated a diverse and integrative approach to healing. They are a certified Somatic Experiencing Practitioner, EMDR Therapist, Integral Eye Movement Therapist, and Reiki Master Practitioner, in addition to being trained in Psychological First-Aid, Bach Remedies, and Access Consciousness.
Driven by a deep commitment to the holistic well-being of marginalised and vulnerable communities, Akanksha founded I Am Wellbeing (Nairatmya Foundation)—an organisation dedicated to making India trauma-informed. I Am Wellbeing provides direct support to survivors and equips mental health professionals, caregivers, and educators with the tools to offer trauma-informed care.`
    },
    {
      imgSrc: trainer2,
      name: "Pallavi Singh (She/Her)",
      smallImgSrc: "trainer2-small.png",
      designation: "(Trauma and Grief Therapist)",
      description:
        `Pallavi is a Trauma and Grief-Informed therapist driven to support people in overcoming personal obstacles. She is passionate about bringing healing to people who have been through traumatic life experiences. Her work focuses on building a client's self-worth & how they view their value as human beings.
         With the belief that connection is the key to trauma healing, she uses multiple trauma-informed approaches in her work with children at risk & young adults living in under-resourced communities. Equipped in working with children in institutional care,
         she has in-depth knowledge of the ecosystem of childcare homes, stakeholders, and legal frameworks. She is trained in providing psychological first- aid in the event of emergencies. She offers guidance on psychosocial care provided while supporting people & holds a Master's degree in applied psychology with a specialisation in clinical psychology from Jamia Millia Islamia University.`,
    },
    {
      imgSrc: trainer3,
      name: "Maitreyi Nigwekar (She/Her)",
      smallImgSrc: "trainer3-small.png",
      designation: "(Trauma-Informed Healer)",
      description: `Maitreyi has an MSc in Psychological Approaches to Health from the University of Leeds (UK, 2009), and an MA in Counseling Psychology from SNDT University (India, 2012). She also holds a Diploma in Arts-Based Therapy and is an NLP Practitioner, a Reiki Master-Teacher, and a Clinical Hypnotherapist. Most of her work experience has been in the developmental sector, working with patients and caregivers of chronic conditions, children, and women. She has also worked with Aangan Trust, an NGO that works toward child protection. Currently, she works with teens, young adults, caregivers, and individuals from dysfunctional families surviving struggling from trauma and abuse in her private practice.
`
    },
    {
      imgSrc: trainer4,
      name: "Preeta Ganguli (She/Her)",
      smallImgSrc: "trainer4-small.png",
      designation: "(Trauma-Informed Therapist)",
      description: `Preeta has worked closely with children, adolescents,  teachers, caregivers, and young adults across corporates, schools, and NGOs in the past decade. She also focuses on preventive work, and has designed programs, workshops, curricula, & manuals at various organizations. She is associated with multiple NGOs in addition to her practice. She is also an NLP and Shamanic Practitioner and addresses the triad of the mind, body, & spirit in her work.`
    },
    {
      imgSrc: trainer5,
      name: "Veena Hari (She/Her)",
      smallImgSrc: "trainer5-small.png",
      designation: "(Queer Affirmative Therapist)",
      description: `Veena Hari is a Mental Health Practitioner with a Master's in Clinical Psychology and around 10 years of experience across the mental health and development sector. She is also the founder of Bhavati Foundation, a not-for-profit organisation working on reproductive mental health in India. She has also completed an advanced perinatal psychotherapy course. Veena, mother to a three-year-old, is also the host of the podcast Mothering and describes herself as a passionate and imperfect feminist.`
    },
    {
      imgSrc: trainer6,
      name: "Shambhavi Singh (She/Her)",
      smallImgSrc: "trainer6-small.png",
      designation: "(Trauma-Informed Therapist)",
      description: `Shambhavi has studied Child and Adolescent Psychologist at Queen's University, Belfast. She is a Trauma Informed Arts Based Therapist; Solution Focussed Brief Therapist Who expertises in Social-Emotional Concerns and Parenting. She has been working since 13 years and uses Arts based mediums to work with trauma and learn regulation. In her personal life, she lives by Buddhist philosophy, enjoys coloring, cleaning and reality TV in her free time.`
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  return (
    <>
      <section className="w-full pt-[80px] md:pt-0">

        <section
          className="relative h-[40vh] sm:h-[45vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] 
             flex items-center justify-center overflow-hidden bg-center bg-cover"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        >



          <div className="absolute bottom-0 left-0 w-full  flex flex-col justify-center items-center">

            <div className=" px-10 py-0 sm:py-2 md:py-5 lg:py-8 bg-[#ffde59]/80 w-full justify-center items-center">

              <h1 className="text-black text-sm sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-center  font-alegreya">
                Certificate Course on Trauma-Informed Care Practices©
              </h1>
              <h2 className="text-black text-sm sm:text-xl md:text-xl lg:text-2xl text-center font-alegreya">First-of-its-kind in India</h2>
            </div>
            <div className=" bg-black/70 w-full justify-center items-center py-1 md:py-2 lg:py-4">
              <h2 className="text-white font-semibold text-sm sm:text-lg md:text-md lg:text-xl text-center  font-alegreya">
                Questions before registering? Please read through this page. If you still have questions, please send us an email at info@iamwellbeing.in
              </h2>
            </div>
          </div>
        </section>


        <div className="container w-full  m-auto  pt-2 ">


          <Heading Text="Rationale" />
          <div className="py-10  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
            <div className="space-y-3  relative flex flex-col gap-10 leading-10">
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya ">
                In India’s current climate, the number of people in need of mental health care far exceeds the number of professionals equipped to provide it,
                and this gap has only widened over the past decade. While recent years have brought greater awareness to the need for mental health interventions,
                they have also laid bare an uncomfortable truth: we simply do not have enough trained professionals to meet the staggering demand. Every day,
                new data emerges, whether it is an <strong>increasingly high number of deaths by suicide or severe mental and physical health concerns like chronic illnesses,
                  heart problems, and autoimmune diseases.</strong>

              </p>
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya my-10">
                If we are to address this crisis, we must go beyond treating surface-level ‘symptoms’ and work towards the <strong>root causes.</strong> This requires a <strong>holistic,
                  trauma-informed approach,</strong> one that is inclusive, culturally contextualised, and deeply de-stigmatising.

              </p>
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                I Am Wellbeing is committed to bridging this gap by equipping mental health professionals with the skills, knowledge, and tools to meet this urgent
                need. Our <strong>six-month course on trauma-informed care practices</strong> is designed to build capacity and shift how mental health concerns are understood and managed.

              </p>
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya my-10 ">
                This program empowers professionals to integrate evidence-based, holistic methods into their work, enabling them to support individuals to heal from deep-rooted
                trauma while coping with the challenges of everyday life.

              </p>
            </div>

          </div>

          <Heading Text="Course Structure" />
          <div className="py-5  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
            <TableContent />
            <div className="w-full bg-white py-5 px-4 sm:px-6 lg:px-8 justify-center items-center">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4  font-alegreya">
                  Beyond Level-1
                </h2>
                <p className="text-lg sm:text-xl mb-6  font-alegreya">
                  Successful completion of Level 1 will qualify the participant to apply for Level 2. This level will be a more specialised coursework, which will focus upon topics like:
                </p>
              </div>

              {/* Box Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center items-center  ">
                {["Gender, sexuality, & trauma", "Complex Trauma", "Relational Trauma", "Trauma and Addiction", "Religious Trauma"].map((topic, index) => (
                  <div
                    key={index}
                    className="relative lg:w-[220px] sm:w-[280px] w-[300px] h-[180px] flex items-center justify-center p-4
                   border-2 border-[#03989e]"
                  >
                    <div className="absolute  lg:w-[220px] sm:w-[280px] w-[300px] h-[180px]  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -top-3 -left-3"></div>

                    <p className="text-center text-xl sm:text-xl md:text-lg lg:text-xl font-semibold text-black z-10  font-alegreya">
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>

        <div className="container w-full  m-auto lg:bg-white pt-2 ">
          <Heading Text="Course Policies" />
          <div className="py-10  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
            <PolicyCards />
          </div>
        </div>


        <div className="container w-full  m-auto lg:bg-white pt-2 ">

          <Heading Text="Course Evaluation" />
          <div className="py-10  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
            <CourseInfoLayout />
          </div>
        </div>

        <div className="w-full m-auto lg:bg-white pt-2">
          <div className="know-your-trainner mt-5">
            {/* Header */}


            <Heading Text="Key Takeaways from the Course:" />

            {/* Content */}
            <div className="py-10  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
              <ul className="list-disc list-inside space-y-3 text-black text-lg lg:text-xl  font-alegreya">
                <li >An understanding of the theory, brain–body connection, and cultural context of trauma, with a focus on the Indian setting.</li>
                <li>Practical skills in trauma-informed care, counselling, and intervention planning using evidence-based, holistic tools for deep-rooted trauma.</li>
                <li>The ability to create a culture of safety, empowerment, and healing while reducing the risk of re-traumatization.</li>
                <li>The capacity to provide accessible, cost-effective, and high-quality mental health support that addresses root causes, not just symptoms.</li>
                <li>A trauma-informed lens to challenge stereotypes and labels, promoting inclusion and de-stigmatisation in mental health.</li>
                <li>A holistic approach that integrates mind, body, and soul in intervention and care.</li>
                <li>Enhanced professional expertise, reflective practice, and the ability to continue your personal and professional growth beyond the course.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <Model
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedTeamMember={selectedTeamMember}
          />
        </div>

        <div
          className="w-full relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BackImage})` }}

        >
          <div className="relative z-10 w-full m-auto  pt-2">
            <div className="know-your-trainner  mt-5">

              <Heading Text="Know Your Trainers" />


              <div className="trainners grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-5  max-w-5xl m-auto mt-10">
                {team.map((trainer, index) => (
                  <div
                    key={trainer.name}
                    className="trainner-card cursor-pointer flex flex-col items-center justify-center"
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedTeamMember(trainer);
                    }}
                  >
                    <div className="relative border-2 border-[#03989e] p-2 rounded-lg">
                      <div className="absolute inset-2 border-2  border-[#03989e] pointer-events-none -top-4 -left-4 rounded-lg"></div>
                      <LazyLoadImage
                        className="w-[200px] h-[200px] object-cover m-auto "
                        src={trainer.imgSrc}
                        alt={trainer.name}
                        effect="blur"
                        placeholder={
                          <BlurryImages imgUrl={`home-images/${trainer.smallImgSrc}`} />
                        }
                      />
                    </div>

                    <h1 className="text-xl text-center font-semibold mt-3 uppercase  font-alegreya">
                      {trainer.name}
                    </h1>
                  </div>
                ))}
              </div>
              {/* {isOpen && selectedTeamMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                  <div className="bg-white rounded-lg shadow-lg max-w-3xl w-[90%] p-6 relative">
                    <button
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      &times;
                    </button>

                    <h2 className="text-2xl font-bold mb-4">{selectedTeamMember.name}</h2>
                    <h3 className="text-lg text-gray-600 mb-4">{selectedTeamMember.designation}</h3>
                    <p className="text-gray-800 whitespace-pre-line">
                      {selectedTeamMember.description}
                    </p>
                  </div>
                </div>
              )} */}


              <div className="btns max-w-3xl flex flex-wrap items-center gap-5 lg:gap-20 justify-center m-auto mt-10">
                <button className="relative   border-2 border-[#03989e] p-4 shadow-lg rounded-md">
                  <div className="absolute  inset-2 border-2  border-[#03989e] pointer-events-none -bottom-2 -right-2 rounded-md"></div>
                  <a
                    href="https://drive.google.com/file/d/1nlYozsui-13TPcixr76VMVPlbwPmQRst/view?usp=sharing"
                    target="_blank"
                    className="relative text-lg font-bold top-1"
                  >
                    DOWNLOAD THE BROCHURE
                  </a>
                </button>
                <button className="relative   border-2 border-[#03989e] p-4 shadow-lg rounded-md">
                  <div className="absolute  inset-2 border-2  border-[#03989e] pointer-events-none -bottom-2 -right-2 rounded-md"></div>
                  <a
                    href="https://docs.google.com/forms/d/1XndjGihgSJNstgCGXm1J1shpAJeRuGz1C9foyq-Lljc/closedform?pli=1"
                    target="_blank"
                    className="relative text-lg font-bold top-1"
                  >
                    APPLY NOW
                  </a>
                </button>
              </div>
            </div>
            <div className="py-10  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">

              <TestimonialCards />
            </div>
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticp;
