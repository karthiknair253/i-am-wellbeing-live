import Slider from "react-slick";

const test1 = `${
  import.meta.env.VITE_PUBLIC_URL
}/ticp-images/quote-bg-green.png`;

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div
      className="testimonials-slider-container text-center m-auto md:w-[100%] lg:w-[100%] h-auto min-h-[500px]  lg:h-[600px] flex items-center justify-center"
      style={{
        backgroundPositionX: "center",
        backgroundImage: `url(${test1})`,
        ObjeectFit: "cover",
        backgroundRepeat: "repeat",
        height: "100%",
      }}
    >
      <Slider
        {...settings}
        className=" max-w-[80%]  pb-0 flex  flex-col justify-center items-center "
      >
        <div className="testimonials-slider__item max-w-3xl mx-auto lg:mt-10">
          <div className="testimonials-slider__text text-center">
            <p className="text-2xl leading-[40px] italic font-medium ">
              "COVID Response has empowered me to help people through the
              consistent supervision, training workshops and support circle
              provided. I thank them for being so supportive due to which only
              we have become effective Crisis Counsellors"
            </p>
            <div className="testimonials-slider__author mt-10 text-xl">
              <span className="testimonials-slider__name font-bold text-[#029390] text-center">
                - A covid response helpline counselor
              </span>
            </div>
          </div>
        </div>

        <div className="testimonials-slider__item max-w-2xl mx-auto ">
          <div className="testimonials-slider__text text-center">
            <p className="text-2xl leading-[40px] font-medium italic ">
              “This session was a wake-up call, allowing me to physically
              experience the meaning safety and also its absence. I was able to
              embrace this felt sense with the gentleness the space provided,
              which reinforced my desire to create a similar space for my
              clients and myself.
            </p>
            <div className="testimonials-slider__author mt-10 lg:ml-20 text-xl">
              <span className="testimonials-slider__name font-bold text-[#029390] text-center">
                - A TICP Participant
              </span>
            </div>
          </div>
        </div>

        <div className="testimonials-slider__item max-w-2xl mx-auto ">
          <div className="testimonials-slider__text text-center">
            <p className="text-2xl leading-[40px] lg:ml-20 font-medium italic">
              “I felt like the session pushed me to question the way I practice
              Psychology. It gave me a space to talk about myself, my fears and
              reservations in a very safe environment.”
            </p>
            <div className="testimonials-slider__author mt-10 lg:ml-20 text-xl">
              <span className="testimonials-slider__name font-bold text-[#029390] text-center">
                - A Short Trainings Programme Participant{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="testimonials-slider__item max-w-2xl mx-auto ">
          <div className="testimonials-slider__text text-center">
            <p className="text-2xl leading-[40px] lg:ml-20 font-medium italic">
              "It was a great experience working with you. I am a facilitator
              and also a single mother. Your sessions make help me in both
              contexts. Whether I am in a classroom or at home, it helps me
              understand kids behaviour, their negative and positive actions,
              and their needs."
            </p>
            <div className="testimonials-slider__author mt-10 lg:ml-20 text-xl">
              <span className="testimonials-slider__name font-bold text-[#029390] text-center">
                -A SEL facilitator
              </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
