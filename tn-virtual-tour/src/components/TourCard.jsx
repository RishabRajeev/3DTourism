/**
 * Displays a single tour destination as a card.
 * @param {{ tour: import('../data/tours').tours[number], onOpen: () => void }} props
 */
export default function TourCard({ tour, onOpen }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      <div className="h-48 bg-gray-200 relative">
        <img
          src={tour.image}
          alt={tour.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow-sm">
          {tour.city}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
        <p className="text-sm text-gray-600 mb-6 flex-grow">{tour.cardDesc}</p>
        <button
          onClick={onOpen}
          className="w-full bg-blue-50 text-blue-700 border border-blue-200 font-bold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
        >
          Explore in 360°
        </button>
      </div>
    </div>
  );
}
