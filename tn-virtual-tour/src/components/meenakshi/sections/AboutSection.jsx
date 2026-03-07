import { history, templeInfo } from '../../../data/meenakshi';

export default function AboutSection() {
  return (
    <div className="space-y-8">

      {/* Quick facts grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {history.quickFacts.map(({ label, value }) => (
          <div key={label} className="bg-orange-50 border border-orange-100 rounded-xl p-4">
            <div className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">{label}</div>
            <div className="text-sm font-semibold text-gray-800">{value}</div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3">About the Temple</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{history.summary}</p>
      </div>

      {/* Temple timings */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Temple Timings</h3>
        <div className="space-y-3">
          {templeInfo.timings.map((t) => (
            <div key={t.session} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <span className="font-semibold text-gray-700">{t.session} Session</span>
              <span className="text-sm bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full">
                {t.open} – {t.close}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3 italic">{templeInfo.closedNote}</p>
      </div>

      {/* History sections */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">History & Architecture</h3>
        {history.details.map(({ heading, text }) => (
          <div key={heading} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">{heading}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Literary Background */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📜</span> Literary Background
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">{history.literaryBackground}</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Kurinji', desc: 'Hilly country' },
            { name: 'Palai', desc: 'Dry waterless region' },
            { name: 'Mullai', desc: 'Wooded land' },
            { name: 'Marudam', desc: 'River valleys ★ Madurai' },
            { name: 'Neydal', desc: 'Coastal tracts' },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className={`rounded-lg px-3 py-2 text-xs border ${
                name === 'Marudam'
                  ? 'bg-orange-100 border-orange-300 font-bold text-orange-900'
                  : 'bg-white border-amber-100 text-gray-700'
              }`}
            >
              <div className="font-bold">{name}</div>
              <div className="text-gray-500 font-normal">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 text-sm">Historical References</h3>
        <ul className="space-y-1 text-xs text-gray-500 list-disc list-inside">
          <li>South Indian Inscriptions, Volumes IV–VIII, XXII</li>
          <li>Annual Reports on Indian Epigraphy (1890, 1908, 1915, 1937–38, 1941–44, 1955–56, 1961–64)</li>
          <li>S. Sathianatha Ayer, <em>History of Nayaks of Madurai</em>, Madras, 1924</li>
          <li>D. Devakunjari, <em>Madurai through the Ages</em>, SAHER, Madurai, 1985</li>
        </ul>
      </div>

    </div>
  );
}
