import { sevas } from '../../../data/meenakshi';

export default function SevaSection() {
  const { undiyal, annadhanam } = sevas;

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>⚠️ Please provide:</strong> Annadhanam meal timings, sponsorship cost, and contact
        number — update them in <code className="bg-blue-100 px-1 rounded">src/data/meenakshi.js</code>{' '}
        under <code className="bg-blue-100 px-1 rounded">sevas</code>.
      </div>

      {/* Undiyal Seva */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500" />
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{undiyal.icon}</span>
            <h3 className="text-xl font-bold text-gray-900">{undiyal.title}</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{undiyal.description}</p>

          <h4 className="font-bold text-gray-800 mb-3">How to Contribute</h4>
          <ul className="space-y-2 mb-5">
            {undiyal.howTo.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>

          <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 text-sm text-orange-800">
            {undiyal.note}
          </div>

          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer">
            Donate via Undiyal Seva
          </button>
        </div>
      </div>

      {/* Annadhanam Seva */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <div className="h-2 bg-gradient-to-r from-green-400 to-teal-500" />
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{annadhanam.icon}</span>
            <h3 className="text-xl font-bold text-gray-900">{annadhanam.title}</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{annadhanam.description}</p>

          {/* Meal schedule */}
          <h4 className="font-bold text-gray-800 mb-3">Daily Meal Schedule</h4>
          <div className="space-y-2 mb-5">
            {annadhanam.schedule.map(({ meal, time }) => (
              <div
                key={meal}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <span className="text-sm font-medium text-gray-700">{meal}</span>
                <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                  {time}
                </span>
              </div>
            ))}
          </div>

          {/* How to participate */}
          <h4 className="font-bold text-gray-800 mb-3">Sponsor Annadhanam</h4>
          <ul className="space-y-2 mb-5">
            {annadhanam.howToParticipate.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>

          <div className="bg-green-50 border border-green-100 rounded-lg p-3 text-sm text-green-800 flex items-center gap-2">
            <span>📞</span>
            <span>
              <strong>Contact:</strong> {annadhanam.contact}
            </span>
          </div>

          <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer">
            Sponsor Annadhanam Seva
          </button>
        </div>
      </div>
    </div>
  );
}
