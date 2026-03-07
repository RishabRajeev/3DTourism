import InfoPopup from './InfoPopup';

/**
 * Fullscreen 360° tour viewer with an embedded Google Maps Street View iframe
 * and a floating InfoPopup panel.
 *
 * The iframe src is set once and never cleared when closing, which avoids
 * a Google Maps security redirect issue on re-open of the same tour.
 *
 * @param {{
 *   tour: import('../data/tours').tours[number] | null,
 *   isPopupOpen: boolean,
 *   onTogglePopup: () => void,
 *   onClose: () => void
 * }} props
 */
export default function TourViewer({ tour, isPopupOpen, onTogglePopup, onClose }) {
  return (
    <div className="relative w-full h-full">
      {/* Back button */}
      <button
        onClick={onClose}
        className="absolute bottom-8 left-8 z-60 bg-white text-gray-900 hover:text-blue-600 hover:bg-gray-100 px-5 py-3 rounded-full text-sm font-bold shadow-2xl border border-gray-200 flex items-center gap-2 transition-all cursor-pointer"
      >
        <span>←</span> Back to Directory
      </button>

      {/* Street View iframe fills the entire viewer */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={tour?.iframeSrc ?? ''}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={tour?.title ?? 'Virtual Tour'}
        />
      </div>

      {/* Floating info popup + reopen button */}
      <InfoPopup tour={tour} isOpen={isPopupOpen} onToggle={onTogglePopup} />
    </div>
  );
}
