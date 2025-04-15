import React, { useState } from "react";
import Nav from "./Components/Nav";
import Button from "./Components/Button";
import CheckOut from "./Components/CheckOut";
import Footer from "./Components/Footer";
const images = [
  "heroPics/s1.PNG",
  "heroPics/s2.PNG",
  "heroPics/s3.PNG",
  "heroPics/s4.PNG",
  "heroPics/s5.PNG",
  "heroPics/s6.PNG",
];
const gImages = [
  "gallery/g1.PNG",
  "gallery/g2.PNG",
  "gallery/g3.PNG",
  "gallery/g4.PNG",
  "gallery/g5.PNG",
  "gallery/g6.PNG",
  "gallery/g7.PNG",
  "gallery/g8.PNG",
  "gallery/g9.PNG",
  "gallery/g10.PNG",
  "gallery/g11.PNG",
];

const pricingData = [
  {
    title: "For Birthdays",
    price: "$250.99",
    services: [
      "Full Services",
      "Decorations",
      "Music And Photos",
      "Food And Drinks",
      "Invitation Card",
    ],
  },
  {
    title: "For Weddings",
    price: "$450.99",
    services: [
      "Full Services",
      "Decorations",
      "Music And Photos",
      "Food And Drinks",
      "Invitation Card",
    ],
  },
  {
    title: "For Concerts",
    price: "$650.99",
    services: [
      "Full Services",
      "Decorations",
      "Music And Photos",
      "Food And Drinks",
      "Invitation Card",
    ],
  },
  {
    title: "For Others",
    price: "$850.99",
    services: [
      "Full Services",
      "Decorations",
      "Music And Photos",
      "Food And Drinks",
      "Invitation Card",
    ],
  },
];
const App = () => {
  const [checkOut, setCheckOut] = useState(null);
  return (
    <>
      {checkOut && (
        <CheckOut service={checkOut} onClose={() => setCheckOut(null)} />
      )}

      <Nav />
      <div
        id="home"
        className="flex flex-col justify-center items-center w-full px-20 lg:px-40 "
      >
        <h1 className="uppercase text-center font-bold text-4xl text-[#BE5985] mt-10">
          Its time to celebrate! The <br />
          best <span className="text-[#C599B6]">Event organizers</span>
        </h1>
        <Button text={"Contact Us"} href={"mailto:onetapevents@gmail.com"} />
        <div className="flex gap-2 overflow-x-hidden whitespace-nowrap scrollbar-hide mt-10">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Event ${index + 1}`}
              className="w-1/6 h-auto object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
        <div id="service" className="container my-10">
          <h2 className="text-3xl font-bold text-[#BE5985] uppercase text-center mb-8">
            <span className="text-[#EC7FA9]">OUR</span> SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: {},
                title: "Venue Selection",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
              },
              {
                title: "Invitation Card",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
              },
              {
                title: "Entertainment",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
              },
              {
                title: "Food And Drinks",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
              },
              {
                title: "Photos And Videos",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
              },
              {
                title: "Custom Foods",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center bg-[#FFB8E0] shadow-lg rounded-md"
              >
                <h3 className="text-xl text-[#BE5985] font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-xs px-4 text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          id="about"
          className="flex flex-col justify-center items-center mb-10 w-full"
        >
          <h2 className="text-3xl font-bold text-[#BE5985] uppercase text-center mb-8">
            <span className="text-[#EC7FA9]">ABOUT</span> US
          </h2>
          <div className="flex items-center gap-8">
            <img
              src="about.jpg"
              alt=""
              className="w-1/2 border-8 border-[#FFB8E0]"
            />
            <div>
              <h1 className="text-[#BE5985] text-3xl font-bold mb-4">
                We will give a very special celebration for you
              </h1>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
              <Button
                text={"Contact Us"}
                href={"mailto:onetapevents@gmail.com"}
              />
            </div>
          </div>
        </div>
        <div
          id="gallery"
          className="flex flex-col justify-center items-center mb-10 w-full"
        >
          <h2 className="text-3xl font-bold text-[#BE5985] uppercase text-center mb-8">
            <span className="text-[#EC7FA9]">Our</span> gallery
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {gImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-1/8 h-40 object-cover rounded-lg shadow-lg border-4 border-[#FFB8E0]"
              />
            ))}
          </div>
        </div>
        <div
          id="price"
          className="flex flex-col justify-center items-center mb-10 w-full"
        >
          <h2 className="text-3xl font-bold text-[#BE5985] uppercase text-center mb-8">
            <span className="text-[#EC7FA9]">our</span> price
          </h2>
          <div className="flex w-full flex-wrap justify-center items-center gap-4">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="bg-[#BE5985] hover:scale-105 w-1/5 py-4 justify-center items-center flex flex-col shadow-lg rounded-md"
              >
                <h3 className="text-xl w-full text-center text-[#BE5985] py-2 bg-[#EC7FA9] font-bold ">
                  {item.title}
                </h3>
                <p className="text-2xl text-white font-semibold my-4">
                  {item.price}
                </p>
                <ul className="text-gray-200 text-sm list-disc  text-center list-inside">
                  {item.services.map((service, idx) => (
                    <li className="py-1" key={idx}>
                      {service}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setCheckOut(item.title);
                  }}
                  className="px-6 my-2 py-2 bg-[#FFB8E0] font-bold rounded-lg text-[#BE5985]"
                >
                  Check Out
                </button>
              </div>
            ))}
          </div>
        </div>
        <div
          id="contact"
          className="flex flex-col justify-center items-center mb-10 w-full"
        >
          <h2 className="text-3xl font-bold text-[#BE5985] uppercase text-center mb-4">
            <span className="text-[#EC7FA9]">contact</span> us
          </h2>
          <div className="flex w-full justify-center items-center gap-4">
            <form className="flex flex-col">
              <div className="flex gap-2">
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Type your message here..."
                  rows="4"
                  className="w-full px-4 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-4 rounded-md w-full hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
