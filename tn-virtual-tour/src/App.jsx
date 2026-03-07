import { useState, useCallback } from 'react';
import { tours } from './data/tours';
import LandingPage from './components/LandingPage';
import TourViewer from './components/TourViewer';
import MeenakshiPage from './pages/MeenakshiPage';
import './App.css';

/**
 * Root application component.
 *
 * Three possible views:
 *   'landing'   → landing page with all tour cards
 *   'tour'      → fullscreen 360° Street View viewer (existing 4 tours)
 *   'meenakshi' → dedicated Meenakshi Temple detail page
 *
 * Transitions between landing ↔ tour use opacity fades.
 * Transitions to/from meenakshi use a simple slide-in via CSS.
 * The TourViewer stays mounted (display:none) after first open to preserve iframe src.
 */
export default function App() {
  /** Current view displayed to the user. */
  const [view, setView] = useState('landing'); // 'landing' | 'tour' | 'meenakshi'

  /** Key of the last opened 360° tour — never reset, preserves iframe src. */
  const [activeTourKey, setActiveTourKey] = useState(null);

  /** Controls display:none of the 360° tour overlay. */
  const [tourShown, setTourShown] = useState(false);

  /** Controls opacity fade-in/out of the 360° tour overlay. */
  const [tourOpaque, setTourOpaque] = useState(false);

  /** Controls opacity fade-out of the landing page. */
  const [landingOpaque, setLandingOpaque] = useState(true);

  /** Whether the info popup is open inside the 360° tour viewer. */
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const activeTour = tours.find((t) => t.key === activeTourKey) ?? null;

  /** Open one of the four standard 360° Street View tours. */
  const openTour = useCallback((key) => {
    setActiveTourKey(key);
    setIsPopupOpen(true);
    setLandingOpaque(false);
    setTimeout(() => {
      setTourShown(true);
      setView('tour');
      setTimeout(() => setTourOpaque(true), 50);
    }, 300);
  }, []);

  /** Return from 360° viewer to landing. */
  const closeTour = useCallback(() => {
    setTourOpaque(false);
    setTimeout(() => {
      setTourShown(false);
      setView('landing');
      setLandingOpaque(true);
    }, 300);
  }, []);

  /** Open the Meenakshi Temple detail page. */
  const openMeenakshi = useCallback(() => {
    setView('meenakshi');
  }, []);

  /** Return from Meenakshi detail page to landing. */
  const closeMeenakshi = useCallback(() => {
    setView('landing');
  }, []);

  const togglePopup = useCallback(() => {
    setIsPopupOpen((prev) => !prev);
  }, []);

  return (
    <div className="bg-gray-50 font-sans text-gray-800 h-screen w-full overflow-hidden relative">

      {/* ── Landing view ── */}
      <div
        className={`h-full w-full overflow-y-auto flex flex-col transition-opacity duration-300 ${
          landingOpaque ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${view === 'landing' ? '' : 'hidden'}`}
      >
        <LandingPage onOpenTour={openTour} onOpenMeenakshi={openMeenakshi} />
      </div>

      {/* ── 360° Tour overlay ── kept mounted to preserve iframe src */}
      {activeTourKey !== null && (
        <div
          className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
            tourOpaque ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${tourShown ? '' : 'hidden'}`}
        >
          <TourViewer
            tour={activeTour}
            isPopupOpen={isPopupOpen}
            onTogglePopup={togglePopup}
            onClose={closeTour}
          />
        </div>
      )}

      {/* ── Meenakshi Temple detail page ── */}
      {view === 'meenakshi' && (
        <div className="fixed inset-0 z-40 bg-gray-50">
          <MeenakshiPage onBack={closeMeenakshi} />
        </div>
      )}
    </div>
  );
}
