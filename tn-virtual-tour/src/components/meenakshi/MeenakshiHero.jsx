import { templeInfo } from '../../data/meenakshi';

/**
 * Full-width hero banner for the Meenakshi Temple detail page.
 * Shows the temple image (or a gradient fallback) with key info overlay.
 */
export default function MeenakshiHero({ onBack }) {
  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden">
      {/* Background: image if available, gradient fallback */}
      <div className="absolute inset-0">
        <img
          src="/images/meenakshi.jpg"
          alt="Meenakshi Amman Temple"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Graceful fallback to gradient when image is not yet added
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 opacity-90" />
      </div>

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-10 bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all cursor-pointer border border-white/30"
      >
        ← Back
      </button>

      {/* HR&CE badge */}
      <div className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
        HR & CE, Govt. of Tamil Nadu
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8">
        <span className="text-orange-300 text-xs font-bold tracking-widest uppercase mb-2">
          Arulmigu • Madurai
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
          {templeInfo.shortName}
        </h1>
        <p className="text-white/80 text-sm mb-4">{templeInfo.location}</p>

        {/* Timing pills */}
        <div className="flex flex-wrap gap-2">
          {templeInfo.timings.map((t) => (
            <span
              key={t.session}
              className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30"
            >
              {t.session}: {t.open} – {t.close}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
