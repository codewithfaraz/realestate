"use client";
import Review from "./Review";
import Profile1 from "../../../../public/Images/profile1.png";
import Profile2 from "../../../../public/Images/profile2.png";
import Profile3 from "../../../../public/Images/profile3.png";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

export default function Reviews() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "slider",
        startAt: 0,
        autoplay: 2000,
        perView: 3,
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
    <section id="reviews">
      <div className="max-w-6xl my-12 mx-auto px-4 md:px-0 mb-24">
        <h1 className="text-white text-4xl">What Our Clients Say</h1>
        <div className="flex justify-between mt-3">
          <p className="text-gray60 md:max-w-3xl">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <a
            href="/"
            className="bg-black border-2 border-dark rounded-lg text-white py-3 px-6 hidden md:block"
          >
            View All Testimonials
          </a>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 mt-5 md:space-x-3 p-3 border-2 border-gray-500">
          <div className="glide" ref={sliderRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <Review
                    img={Profile1}
                    title="Exceptional Service!"
                    description="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
                    reviewerName="Wade Warren"
                    reviewerLocation="USA, California"
                  />
                </li>
                <li className="glide__slide">
                  <Review
                    img={Profile1}
                    title="Exceptional Service!"
                    description="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
                    reviewerName="Wade Warren"
                    reviewerLocation="USA, California"
                  />
                </li>
                <li className="glide__slide">
                  <Review
                    img={Profile1}
                    title="Exceptional Service!"
                    description="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
                    reviewerName="Wade Warren"
                    reviewerLocation="USA, California"
                  />
                </li>
                <li className="glide__slide">
                  <Review
                    img={Profile1}
                    title="Exceptional Service!"
                    description="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
                    reviewerName="Wade Warren"
                    reviewerLocation="USA, California"
                  />
                </li>
                <li className="glide__slide">
                  <Review
                    img={Profile2}
                    title="Efficient and Reliable"
                    description="Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results."
                    reviewerName="Emelie Thomson"
                    reviewerLocation="USA, Florida"
                  />
                </li>
                <li className="glide__slide">
                  <Review
                    img={Profile3}
                    title="Trusted Advisors"
                    description="The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!"
                    reviewerName="John Mans"
                    reviewerLocation="USA, Nevada"
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
          <button className="lg:hidden text-white bg-black py-4 rounded-lg">
            See More Properties
          </button>
        </div>
      </div>
    </section>
  );
}
