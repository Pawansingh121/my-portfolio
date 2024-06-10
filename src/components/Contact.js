import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex h-[100vh] bg-[#f1f1f1] rounded-tr-3xl rounded-tl-3xl ">
        <div
          name="contact"
          className="w-full h-screen md:h-screen flex  justify-center items-center p-4 pt-[120px] md:pt-[60px] "
        >
          <form
            data-aos="fade-right"
            data-aos-duration="1000"
            method="POST"
            action="https://getform.io/f/c261d1c5-716d-4102-94df-48bbe495c3e4"
            className="flex flex-col max-w-[600px] w-full "
          >
            <div className="pb-8 border bg-[#074840] text-white flex  flex-col  justify-center items-center rounded-xl">
              <h3 className="text-3xl pt-4">Contact</h3>
              <p className="">
                //Submit the form below or shoot me an email-
                <span className="text-xl ">airyji9211@gmail.com</span>
              </p>
            </div>
            <input
              className="bg-gray-200 p-2 mt-4 "
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="bg-gray-200 my-4 p-2 "
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-gray-200 p-2"
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="text-white bg-[#212121]  px-4 py-3 rounded-lg hover:scale-95 hover:bg-black my-8 mx-auto flex items-center ">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
