import FAQ from "./FAQ";
export default function FAQs() {
  return (
    <section id="faqs">
      <div className="max-w-6xl my-12 mx-auto px-4 md:px-0">
        <h1 className="text-white text-4xl">Frequently Asked Questions</h1>
        <div className="flex justify-between mt-3">
          <p className="text-gray60 md:max-w-3xl">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
          <a
            href="/"
            className="bg-black border-2 border-dark  rounded-lg text-white py-3 px-6 hidden md:block"
          >
            View All FAQ’s
          </a>
        </div>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-3 md:space-x-3 rounded-lg mt-12">
          <FAQ
            question="How do I search for properties on Estatein?"
            answer="Learn how to use our user-friendly search tools to find properties that match your criteria."
          />
          <FAQ
            answer="Find out about the necessary documentation for listing your property with us."
            question="What documents do I need to sell my property through Estatein?"
          />
          <FAQ
            question="How can I contact an Estatein agent? "
            answer="Discover the different ways you can get in touch with our experienced agents."
          />
          <button className="lg:hidden text-white bg-black py-4 rounded-lg">
            View All FAQ’s
          </button>
        </div>
      </div>
    </section>
  );
}
