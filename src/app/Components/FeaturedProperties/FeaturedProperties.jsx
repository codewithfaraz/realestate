import Property from "./Property";

import Image1 from "./image1.png";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
export default function FeaturedProperties() {
  return (
    <section id="featuredproperties">
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
          <button className="lg:hidden text-white bg-black py-4 rounded-lg">
            See More Properties
          </button>
        </div>
      </div>
    </section>
  );
}
