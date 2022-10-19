import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex h-[100vh] ">
        <div
          name="contact"
          className="w-full h-screen md:h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[120px] md:pt-[60px] "
        >
          <form
            method="POST"
            action="https://getform.io/f/c261d1c5-716d-4102-94df-48bbe495c3e4"
            className="flex flex-col max-w-[600px] w-full "
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300  ">
                Contact
              </p>
              <p className="text-gray-300 py-4">
                //Submit the form below or shoot me an email-
                <span className="text-xl text-yellow-400 ">
                  airyji9211@gmail.com
                </span>
              </p>
            </div>
            <input
              className="bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="bg-[#ccd6f6] my-4 p-2 "
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-[#ccd6f6] p-2"
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="text-white border-2 bg-yellow-400 animate-pulse  border-yellow-400 px-4 py-3 my-8 mx-auto flex items-center ">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
