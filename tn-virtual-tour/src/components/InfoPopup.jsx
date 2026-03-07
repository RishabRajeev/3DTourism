/**
 * Floating info panel shown over the tour viewer.
 * Displays title, description, and highlights for the active tour.
 *
 * @param {{
 *   tour: import('../data/tours').tours[number],
 *   isOpen: boolean,
 *   onToggle: () => void
 * }} props
 */
export default function InfoPopup({ tour, isOpen, onToggle }) {
  if (!tour) return null;

  return (
    <>
      {/* Info panel */}
      <div
        className={`absolute top-24 right-8 z-50 w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Coloured header bar with close button */}
        <div className="h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-2xl flex items-center justify-end px-4">
          <button
            onClick={onToggle}
            aria-label="Close info panel"
            className="bg-black/20 hover:bg-black/40 text-white rounded-full p-1 transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
            {tour.location}
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-3">{tour.title}</h1>
          <p className="text-gray-700 text-sm leading-relaxed mb-4 border-b border-gray-100 pb-4">
            {tour.desc}
          </p>

          <ul className="space-y-3 mb-2">
            {tour.highlights.map(({ icon, label, detail, colorClass }) => (
              <li key={label} className="flex items-start text-sm text-gray-700">
                <span className={`mr-3 text-lg leading-none ${colorClass}`}>{icon}</span>
                <span>
                  <strong>{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Re-open button shown when panel is closed */}
      <button
        onClick={onToggle}
        aria-label="Open info panel"
        className={`absolute top-24 right-8 z-50 bg-white p-4 rounded-full shadow-2xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer group ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </>
  );
}
