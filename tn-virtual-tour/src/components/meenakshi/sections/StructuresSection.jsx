import { useState } from 'react';
import { gopurams, structures, tanks } from '../../../data/meenakshi';

const SUB_TABS = [
  { id: 'gopurams',   label: 'Gopurams',         icon: '🗼' },
  { id: 'structures', label: 'Key Structures',    icon: '🏛️' },
  { id: 'tanks',      label: 'Sacred Tanks',      icon: '🪷' },
  { id: 'shrines',    label: 'Shrines & Deities', icon: '🙏' },
];

/** List of known sannadhis — no additional detail available from official records. */
const shrines = [
  'Sri Meenakshi Amman Sannathi (Main Shrine)',
  'Sri Sundareswarar Sannathi (Main Shrine)',
  'Sri Vinayakar Sannathi',
  'Sri Murugan Sannathi',
  'Sri Chandrasekhara Sannathi',
  'Sri Nataraja Sannathi (Sabhapathi)',
  'Sri Chandikeswarar Sannathi',
  'Sri Durgai Amman Sannathi',
  'Sri Nagalingam Sannathi',
  'Sri Adhikara Nandi Sannathi',
];

export default function StructuresSection() {
  const [sub, setSub] = useState('gopurams');
  const [expandedGopuram, setExpandedGopuram] = useState(null);

  return (
    <div className="space-y-5">
      {/* Sub-tab pills */}
      <div className="flex flex-wrap gap-2">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setSub(t.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
              sub === t.id
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
          >
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* ── GOPURAMS ── */}
      {sub === 'gopurams' && (
        <div className="space-y-3">
          <p className="text-sm text-gray-500 bg-white border border-gray-100 rounded-xl p-4">
            The temple complex has <strong>12 gopurams (gateway towers)</strong> of varying heights and centuries, each adorned with hundreds of stucco sculptures depicting mythological stories.
          </p>
          {gopurams.map((g, i) => {
            const isOpen = expandedGopuram === i;
            return (
              <div key={g.name} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                {/* Header — always visible */}
                <button
                  onClick={() => setExpandedGopuram(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{g.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{g.century} · {g.tiers} Tiers · {g.sculptures} Sculptures</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full hidden sm:block">
                      {g.height}
                    </span>
                    <span className="text-gray-400 text-lg">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="border-t border-gray-100 px-5 py-4 bg-orange-50/30 space-y-3">
                    <p className="text-sm text-gray-700 leading-relaxed">{g.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {[
                        { label: 'Constructor', value: g.constructor },
                        { label: 'Height', value: g.height },
                        { label: 'Base', value: g.base },
                        { label: 'Tiers', value: g.tiers },
                        { label: 'Kalasam', value: g.kalasam },
                        { label: 'Sculptures', value: g.sculptures },
                      ].map(({ label, value }) => value && (
                        <div key={label} className="bg-white border border-gray-100 rounded-lg p-2">
                          <div className="text-gray-400 font-semibold uppercase tracking-wider text-[10px]">{label}</div>
                          <div className="font-bold text-gray-800 mt-0.5">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── KEY STRUCTURES ── */}
      {sub === 'structures' && (
        <div className="space-y-5">
          {structures.map((s) => (
            <div key={s.name} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-gray-900 to-gray-700 px-5 py-4 flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-white">{s.name}</h3>
                  <p className="text-gray-300 text-xs mt-0.5">{s.summary}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-relaxed">{s.details}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── SACRED TANKS ── */}
      {sub === 'tanks' && (
        <div className="space-y-5">
          {tanks.map((tank) => (
            <div key={tank.name} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-teal-800 px-5 py-4 flex items-center gap-3">
                <span className="text-3xl">{tank.icon}</span>
                <div>
                  <h3 className="font-bold text-white">{tank.name}</h3>
                  <span className="text-xs text-blue-200 font-semibold">{tank.type}</span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Area', value: tank.area },
                    { label: 'Depth', value: tank.depth },
                    { label: 'Float Festival', value: tank.floatFestival },
                    tank.theerthavari && { label: 'Theerthavari', value: tank.theerthavari },
                    tank.lastRenovated && { label: 'Last Renovated', value: tank.lastRenovated },
                  ].filter(Boolean).map(({ label, value }) => (
                    <div key={label} className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{label}</div>
                      <div className="text-sm font-semibold text-gray-800 mt-0.5">{value}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">{tank.details}</p>

                {tank.specialty && (
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 text-sm text-teal-800">
                    <strong>Festival Highlight:</strong> {tank.specialty}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── SHRINES & DEITIES ── */}
      {sub === 'shrines' && (
        <div className="space-y-4">
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-sm text-orange-800">
            The temple houses numerous sannadhis (shrines) for various deities. Below are the principal shrines within the complex.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {shrines.map((shrine, i) => (
              <div
                key={shrine}
                className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-7 h-7 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm font-semibold text-gray-800">{shrine}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-gray-400">
            Detailed information for each sannathi is available at the temple office and the official HR & CE portal.
          </p>
        </div>
      )}
    </div>
  );
}
