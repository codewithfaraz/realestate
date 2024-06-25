import Hero from "./Components/Home/Hero";
import FeaturedProperties from "./Components/FeaturedProperties/FeaturedProperties";
import Reviews from "./Components/Reviews/Reviews";
import FAQs from "./Components/FAQ/FAQS";
import CTA from "./Components/CTA/CTA";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <Reviews />
      <FAQs />
      <CTA />
    </div>
  );
}
