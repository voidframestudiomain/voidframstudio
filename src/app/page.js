import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import Services from '@/components/Services/Services';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import GrowthResults from '@/components/GrowthResults/GrowthResults';
import Work from '@/components/Work/Work';
import Process from '@/components/Process/Process';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <TrustedBy />
      <Services />
      <WhatWeDo />
      <GrowthResults />
      <Work />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
