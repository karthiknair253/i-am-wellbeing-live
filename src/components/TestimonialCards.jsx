import React from 'react';

export default function TestimonialCards() {
    const testimonials = [
        {
            text: "I think the class gave a lot of perspective on how the functions we just study anatomically are so important in understanding trauma. Earlier I just saw them as biological reactions, not understanding the impact on our body and nervous system. Understanding trauma from a biological lens and keeping that information while dealing with clients will help me in working holistically.",
            author: "Neha Rao",
            cohort: "Cohort 3"
        },
        {
            text: "I experienced & witnessed the entire cycle of activation & deactivation throughout the session! I am also sitting with the understanding on being around the periphery & exploring conversations outside the content & gauging how the client's nervous system is experiencing everything. I am taking away the learning that our bodies know how to heal and our role is to just facilitate this wisdom that our clients' bodies primarily carries. It has lifted some amount of pressure I place on myself.",
            author: "Smriti Khurana",
            cohort: "Cohort 3"
        },
        {
            text: "For me, this session was a wake-up call, allowing me to physically experience the meaning of the Goals, especially the aspect of Safety and its absence. The session was planned and held in such a way that the impact of the lack of Safety didn't hinder my learning. Instead, I was able to embrace it with the gentleness the space provided, which reinforced my desire to create a similar space for my clients and myself.",
            author: "Maanya Chetty",
            cohort: "Cohort 3"
        }
    ];

    return (
        <div className="  px-4 py-20">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative   border-2 border-[#03989e] p-4 shadow-lg">
                            <div className="absolute  inset-2 border-2 border-dotted border-[#03989e] pointer-events-none -bottom-2 -right-2"></div>

                            <div className="mb-6">
                                <p className="text-black italic text-md leading-relaxed text-center rounded-lg  font-alegreya">
                                    {testimonial.text}
                                </p>
                            </div>



                            <div className="text-center">
                                <p className="text-black font-medium text-md italic  font-alegreya">
                                    -{testimonial.author}, {testimonial.cohort}
                                </p>
                            </div>
                    
                        </div>
                    ))}
            </div>
        </div>
        </div >
    );
}