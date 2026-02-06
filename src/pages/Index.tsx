import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatBreak from "@/components/CatBreak";
import WhyYouMatter from "@/components/WhyYouMatter";
import CareSafety from "@/components/CareSafety";
import Timeline from "@/components/Timeline";
import ClosingPromise from "@/components/ClosingPromise";

import catSleeping from "@/assets/cat-sleeping.jpg";
import catsCuddling from "@/assets/cats-cuddling.jpg";
import catWindow from "@/assets/cat-window.jpg";
import catPlaying from "@/assets/cat-playing.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CatBreak src={catSleeping} alt="A sleeping kitten on a soft pink blanket" caption="just a little comfort for you ♡" />
      <WhyYouMatter />
      <CatBreak src={catsCuddling} alt="Two kittens cuddling together" caption="because warmth is better shared" />
      <CareSafety />
      <CatBreak src={catWindow} alt="A cat sitting peacefully on a windowsill" caption="peace looks good on you" />
      <Timeline />
      <CatBreak src={catPlaying} alt="A kitten playing with yarn" caption="never stop being playful" />
      <ClosingPromise />

      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground font-body">
          made with care, just for you 💕
        </p>
      </footer>
    </div>
  );
};

export default Index;
