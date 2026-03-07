import { useState } from 'react';
import MeenakshiHero from '../components/meenakshi/MeenakshiHero';
import MeenakshiTabNav from '../components/meenakshi/MeenakshiTabNav';
import AboutSection from '../components/meenakshi/sections/AboutSection';
import StructuresSection from '../components/meenakshi/sections/StructuresSection';
import TourSection from '../components/meenakshi/sections/TourSection';
import PoojaSection from '../components/meenakshi/sections/PoojaSection';
import FestivalsSection from '../components/meenakshi/sections/FestivalsSection';
import PassesSection from '../components/meenakshi/sections/PassesSection';
import TicketsSection from '../components/meenakshi/sections/TicketsSection';
import PaymentsSection from '../components/meenakshi/sections/PaymentsSection';
import SevaSection from '../components/meenakshi/sections/SevaSection';
import FacilitiesSection from '../components/meenakshi/sections/FacilitiesSection';

const SECTION_MAP = {
  about:      <AboutSection />,
  structures: <StructuresSection />,
  tour:       <TourSection />,
  pooja:      <PoojaSection />,
  festivals:  <FestivalsSection />,
  passes:     <PassesSection />,
  tickets:    <TicketsSection />,
  payments:   <PaymentsSection />,
  seva:       <SevaSection />,
  facilities: <FacilitiesSection />,
};

/**
 * Full detail page for Meenakshi Amman Temple.
 * Composed of a hero, tab navigation, and swappable content sections.
 *
 * @param {{ onBack: () => void }} props
 */
export default function MeenakshiPage({ onBack }) {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="h-full w-full overflow-y-auto flex flex-col bg-gray-50">
      <MeenakshiHero onBack={onBack} />
      <MeenakshiTabNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-4xl mx-auto w-full px-4 md:px-6 py-8 flex-grow">
        {SECTION_MAP[activeTab]}
      </main>

      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        Arulmigu Meenakshi Sundaraswarar Temple · HR & CE Department, Govt. of Tamil Nadu
      </footer>
    </div>
  );
}
