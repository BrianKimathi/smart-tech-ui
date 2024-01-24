
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ken from "../images/ken.jpeg";
import altken from "../images/altken.jpeg"; // Replace with the path to your second image

function About() {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Adjust the autoplay speed in milliseconds
  };

  return (
    <div className="container mx-auto p-8 mt-8 ">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Slider */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
          <Slider {...sliderSettings}>
            <div>
              <img
                src={ken}
                alt="Electronic Shop"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <img
                src={altken}
                alt="Second Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </Slider>
        </div>

        {/* Shop Description */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4 text-pink-500">
            Welcome to SMART-TECH Kenya
          </h1>
          <p className="text-gray-700 mb-4">
            The greatest internet retailer in Kenya and East Africa specializing
            in general electronics, lifestyle products, and information
            technology and telecommunications equipment.
            <br />
            Our motto is <b>"We have everything you need."</b>
            <br />
            Everything we do is driven by the needs of the people we serve.
            We'll always suggest the best solutions based on your unique demands
            rather than the price tag because we value listening to our clients
            and we think that building customers is more important than making
            sales. Priorities are the customer, second, and third.
          </p>

          {/* Delivery Information */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-pink-500">
              Delivery Information
            </h2>
            <p className="text-gray-700">
              Free Delivery within Nairobi CBD
              <br />
              Other locations Nairobi at large and outside Nairobi are charged
              based on the distance.
            </p>
          </div>

          {/* Support */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-pink-500">
              Support
            </h2>
            <p className="text-gray-700">
              Our dedicated support team is available 24/7 to assist you. Feel
              free to contact us for any inquiries or assistance.
              <br />
              <b>Contact Number :</b> +245704636244
            </p>
          </div>

          {/* Payment Information */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-pink-500">
              Payment Information
            </h2>
            <p className="text-gray-700">
              We accept various payment methods to make your shopping experience
              convenient and secure.
            </p>
          </div>

          {/* Physical Location */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-pink-500">
              Physical Location
            </h2>
            <p className="text-gray-700">
              Visit our store at: Gaberone Plaza along Gaberone Road Forth Floor
              RM A13 (Nairobi-CBD)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
