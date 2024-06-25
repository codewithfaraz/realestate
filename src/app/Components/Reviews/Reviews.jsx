import Review from "./Review";
import Profile1 from "../../../../public/Images/profile1.png";
import Profile2 from "../../../../public/Images/profile2.png";
import Profile3 from "../../../../public/Images/profile3.png";
export default function Reviews() {
  return (
    <section id="reviews">
      <div className="max-w-6xl my-12 mx-auto px-4 md:px-0">
        <h1 className="text-white text-4xl">What Our Clients Say</h1>
        <div className="flex justify-between mt-3">
          <p className="text-gray60 md:max-w-3xl">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <a
            href="/"
            className="bg-black border-2 border-dark  rounded-lg text-white py-3 px-6 hidden md:block"
          >
            View All Testomonials
          </a>
        </div>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-3 md:space-x-3 rounded-lg mt-12">
          <Review
            img={Profile1}
            title="Exceptional Service!"
            description="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
            reviewerName="Wade Warren"
            reviewerLocation="USA, California"
          />
          <Review
            img={Profile2}
            title="Efficient and Reliable"
            description="Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results. "
            reviewerName="Emelie Thomson"
            reviewerLocation="USA, Florida"
          />
          <Review
            img={Profile3}
            title="Trusted Advisors"
            description="The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!"
            reviewerName="John Mans"
            reviewerLocation="USA, Nevada"
          />
          <button className="lg:hidden text-white bg-black py-4 rounded-lg">
            See More Properties
          </button>
        </div>
      </div>
    </section>
  );
}
