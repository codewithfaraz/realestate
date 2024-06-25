export default function CTA() {
  return (
    <section id="cta">
      <div className="max-w-6xl mx-auto my-12 px-4 md:px-0">
        <h1 className="text-white text-3xl">
          Start Your Real Estate Journey Today
        </h1>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-3 space-y-2 md:space-y-0">
          <p className="text-gray60 max-w-5xl">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
          <button className="bg-purple60 text-white py-2 px-2 rounded-lg">
            Browse Properties
          </button>
        </div>
      </div>
    </section>
  );
}
