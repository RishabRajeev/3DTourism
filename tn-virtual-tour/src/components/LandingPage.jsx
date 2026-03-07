import { tours } from '../data/tours';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TourCard from './TourCard';

const streetviewTours = tours.filter((t) => t.type === 'streetview');
const meenakshiTour = tours.find((t) => t.key === 'meenakshi');

/**
 * Landing page showing the hero banner, the featured Meenakshi Temple card,
 * and the grid of standard 360° street-view tours.
 *
 * @param {{
 *   onOpenTour: (key: string) => void,
 *   onOpenMeenakshi: () => void
 * }} props
 */
export default function LandingPage({ onOpenTour, onOpenMeenakshi }) {
  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="max-w-5xl mx-auto w-full px-6 py-12 flex-grow">

        {/* ── Featured Temple: Meenakshi Amman ── */}
        {meenakshiTour && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">
                ✦ Featured Temple
              </span>
              <div className="flex-grow h-px bg-orange-100" />
            </div>

            <div
              onClick={onOpenMeenakshi}
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Background image or gradient */}
              <div className="relative h-56 md:h-72 bg-gradient-to-br from-orange-900 via-red-800 to-yellow-900">
                <img
                  src={meenakshiTour.image}
                  alt={meenakshiTour.alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* City badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow-sm">
                  {meenakshiTour.city}
                </div>

                {/* Detail page badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                  Full Experience
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-lg">
                    {meenakshiTour.title}
                  </h3>
                  <p className="text-white/80 text-sm max-w-lg leading-relaxed mb-4">
                    {meenakshiTour.cardDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Poojas', 'Festivals', 'Passes & Tickets', '360° Tour', 'Payments', 'Seva'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA bar */}
              <div className="bg-orange-500 group-hover:bg-orange-600 transition-colors px-6 py-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm">Explore the Full Temple Experience</span>
                <span className="text-white text-lg font-bold">→</span>
              </div>
            </div>
          </section>
        )}

        {/* ── Standard 360° Tours ── */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Available 360° Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {streetviewTours.map((tour) => (
              <TourCard
                key={tour.key}
                tour={tour}
                onOpen={() => onOpenTour(tour.key)}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
