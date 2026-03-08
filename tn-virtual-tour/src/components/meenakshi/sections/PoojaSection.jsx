import { useState } from 'react';
import { poojas, abhishekams } from '../../../data/meenakshi';

/**
 * @param {{ onProceedToPayment: (item: object) => void }} props
 */
export default function PoojaSection({ onProceedToPayment }) {
  const [view, setView] = useState('schedule'); // 'schedule' | 'abhishekam'

  return (
    <div className="space-y-6">
      {/* Sub-tab toggle */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: 'schedule',   label: 'Daily Schedule' },
          { id: 'abhishekam', label: 'Book Abhishekam' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              view === tab.id
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── DAILY SCHEDULE ── */}
      {view === 'schedule' && (
        <>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>Official timings</strong> from the HR & CE portal. Timings may vary during
            festivals or special occasions — please verify with the temple office.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {poojas.map((pooja, index) => (
              <div
                key={pooja.id}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                    {pooja.icon}
                  </div>
                  <div className="text-xs font-bold text-orange-400">#{index + 1}</div>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-900 leading-tight">{pooja.name}</h3>
                      {pooja.tamil && (
                        <div className="text-xs text-gray-400 mt-0.5">{pooja.tamil}</div>
                      )}
                      {pooja.subtitle && (
                        <div className="text-xs text-orange-500 font-semibold mt-0.5">
                          ({pooja.subtitle})
                        </div>
                      )}
                    </div>
                    <span className="flex-shrink-0 text-xs bg-orange-50 text-orange-700 border border-orange-200 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      {pooja.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">{pooja.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-center">
            <p className="text-sm text-gray-500">
              All six poojas are performed daily for both{' '}
              <strong className="text-gray-700">Sri Meenakshi Amman</strong> and{' '}
              <strong className="text-gray-700">Sri Sundareswarar</strong> in their respective sanctums.
            </p>
          </div>
        </>
      )}

      {/* ── BOOK ABHISHEKAM ── */}
      {view === 'abhishekam' && (
        <>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-600 shadow-sm">
            Sponsor an <strong>Abhishekam</strong> (sacred ritual bathing of the deity) performed
            by temple priests on your behalf. Prices are sourced from the official{' '}
            <strong>HR & CE ticketing portal</strong>. Click <strong>Book → Pay</strong> to proceed
            to the payment screen.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {abhishekams.map((item) => (
              <div
                key={item.type}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight">{item.type}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{item.tamil}</p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 text-sm font-extrabold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>

                {/* Deity */}
                <div className="text-xs text-orange-700 font-semibold bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-lg">
                  🙏 {item.deity}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{item.description}</p>

                {/* Availability + CTA */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-gray-100">
                  <span className="text-xs text-gray-400">📅 {item.availability}</span>
                  <button
                    onClick={() => onProceedToPayment({
                      icon: item.icon,
                      type: item.type,
                      description: item.description,
                      price: item.price,
                      category: 'Abhishekam',
                    })}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1"
                  >
                    Book <span>→ Pay</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
