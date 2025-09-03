'use client';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='min-h-screen'>
      <Navbar onSectionClick={scrollToSection} />
      <Hero />
    </div>
  );
}
