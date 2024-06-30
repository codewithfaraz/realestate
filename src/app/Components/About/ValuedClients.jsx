"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import ValuedClien from "./ValuedClient";
export default function ValuedClients(props) {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "slider",
        startAt: 0,
        autoplay: 2000,
        perView: 2,
        breakpoints: {
          600: {
            perView: 1,
          },
        },
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, [sliderRef]);
  return (
    <section id="valuedclients" className="px-12">
      <div className="max-w-6xl mx-auto my-12 p-4">
        <h1 className="text-white text-5xl">Our Valued Clients</h1>
        <p className="text-gray60">
          At Estatein, we have had the privilege of working with a diverse range
          of clients across various industries. Here are some of the clients
          we've had the pleasure of serving
        </p>
      </div>
      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 mt-5 md:space-x-3 p-3 border-2 border-gray-500">
        <div className="glide" ref={sliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <ValuedClien
                  since={2019}
                  title="ABC Corporation"
                  message="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs."
                  domain="Commercial Real Estate"
                  category="Luxury Home Development"
                />
              </li>
              <li className="glide__slide">
                <ValuedClien
                  since={2018}
                  title="GreenTech Enterprises"
                  message="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs."
                  domain="Commercial Real Estate"
                  category="Retail Space"
                />
              </li>
              <li className="glide__slide">
                <ValuedClien
                  since={2017}
                  title="Exceptional Service!"
                  message="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs."
                  domain="Commercial Real Estate"
                  category="Luxury Home Development"
                />
              </li>
              <li className="glide__slide">
                <ValuedClien
                  since={2016}
                  title="Exceptional Service!"
                  message="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs."
                  domain="Commercial Real Estate"
                  category="Luxury Home Development"
                />
              </li>
              <li className="glide__slide">
                <ValuedClien
                  since={2015}
                  title="Efficient and Reliable"
                  message="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs."
                  domain="Commercial Real Estate"
                  category="Luxury Home Development"
                />
              </li>
              <li className="glide__slide">
                <ValuedClien
                  since={2014}
                  title="Trusted Advisors"
                  message="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs."
                  domain="Commercial Real Estate"
                  category="Luxury Home Development"
                />
              </li>
            </ul>
          </div>

          <div
            className="absolute -bottom-32 md:-bottom-16 right-20 glide__arrows"
            data-glide-el="controls"
          >
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
