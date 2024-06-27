"use client";
import Property from "./Property";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import Image1 from "../../../../public/Images/Image1.png";
import Image2 from "../../../../public/Images/Image2.png";
import Image3 from "../../../../public/Images/Image3.png";
export default function FeaturedProperties() {
  const sliderRef = useRef(null);

  useEffect(() => {
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
  }, []);
  return (
    <section id="featuredproperties" className="relative mb-24">
      <div className="max-w-6xl my-12 mx-auto px-4 md:px-0">
        <h1 className="text-white text-4xl">Featured Properties</h1>
        <div className="flex justify-between mt-3">
          <p className="text-gray60 md:max-w-3xl">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.
          </p>
          <a
            href="/"
            className="bg-black border-2 border-dark  rounded-lg text-white py-3 px-6 hidden md:block"
          >
            View All Prodcuts
          </a>
        </div>
        <div className="flex flex-col lg:flex-row  space-y-3 lg:space-y-0 mt-5 md:space-x-3  p-3 border-2 border-gray-500">
          <div className=" glide" ref={sliderRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <Property
                  img={Image1}
                  title="Seaside Serenity Villa"
                  bedroom="4"
                  bathroom="3"
                  villa={true}
                />

                <Property
                  img={Image2}
                  title="Metropolitan Haven"
                  bedroom="2"
                  bathroom="2"
                  villa={true}
                />

                <Property
                  img={Image3}
                  title="Rustic Retreat Cottage"
                  bedroom="3"
                  bathroom="3"
                  villa={true}
                />
                <Property
                  img={Image3}
                  title="Rustic Retreat Cottage"
                  bedroom="3"
                  bathroom="3"
                  villa={true}
                />
                <Property
                  img={Image3}
                  title="Rustic Retreat Cottage"
                  bedroom="3"
                  bathroom="3"
                  villa={true}
                />
                <Property
                  img={Image3}
                  title="Rustic Retreat Cottage"
                  bedroom="3"
                  bathroom="3"
                  villa={true}
                />
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
{
  /* <Property
            img={Image1}
            title="Seaside Serenity Villa"
            bedroom="4"
            bathroom="3"
            villa={true}
          />
          <Property
            img={Image2}
            title="Metropolitan Haven"
            bedroom="2"
            bathroom="2"
            villa={true}
          />
          <Property
            img={Image3}
            title="Rustic Retreat Cottage"
            bedroom="3"
            bathroom="3"
            villa={true}
          /> */
}
