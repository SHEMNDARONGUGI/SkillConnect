import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
