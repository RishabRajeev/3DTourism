import { useState, useMemo } from 'react';
import { festivals, festivalSchedule, festivalGroupConfig } from '../../../data/meenakshi';

/** Groups the flat schedule array by festival name, preserving insertion order. */
function groupByFestival(schedule) {
  return schedule.reduce((acc, entry) => {
    if (!acc[entry.festival]) acc[entry.festival] = [];
    acc[entry.festival].push(entry);
    return acc;
  }, {});
}

/** Formats "16/01/2026" → "16 Jan 2026" */
function formatDate(dateStr) {
  const [d, m, y] = dateStr.split('/');
  return new Date(`${y}-${m}-${d}`).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function FestivalsSection() {
  const [view, setView] = useState('overview'); // 'overview' | 'schedule'
  const [activeGroup, setActiveGroup] = useState(null); // filter by festival group

  const grouped = useMemo(() => groupByFestival(festivalSchedule), []);
  const groupNames = Object.keys(grouped);

  const filteredEntries = activeGroup ? grouped[activeGroup] : festivalSchedule;

  return (
    <div className="space-y-6">
      {/* Sub-tab toggle */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: 'overview', label: 'Annual Overview' },
          { id: 'schedule', label: 'Festival Schedule' },
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

      {/* ── OVERVIEW ── */}
      {view === 'overview' && (
        <>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-600 leading-relaxed">
              The Meenakshi Amman Temple celebrates numerous festivals throughout the year, attracting
              millions of pilgrims from across India and the world. The grandest of all is the{' '}
              <strong className="text-orange-600">Chithirai Thiruvizha</strong> — a 10-day festival
              that re-enacts the celestial wedding of Goddess Meenakshi and Lord Sundareswarar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {festivals.map((fest) => (
              <div
                key={fest.name}
                className={`border rounded-xl p-5 hover:shadow-md transition-shadow ${fest.color}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{fest.icon}</span>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-bold text-gray-900">{fest.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${fest.badge}`}>
                        {fest.month}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                        {fest.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{fest.highlight}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-gray-400">
            Switch to <strong>Festival Schedule</strong> for exact dates and pooja timings.
          </p>
        </>
      )}

      {/* ── SCHEDULE ── */}
      {view === 'schedule' && (
        <>
          {/* Group filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveGroup(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                activeGroup === null
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              All
            </button>
            {groupNames.map((name) => {
              const cfg = festivalGroupConfig[name] ?? {};
              const isActive = activeGroup === name;
              return (
                <button
                  key={name}
                  onClick={() => setActiveGroup(isActive ? null : name)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-gray-800 text-white border-gray-800'
                      : `bg-white text-gray-600 border-gray-200 hover:border-gray-400`
                  }`}
                >
                  <span>{cfg.icon}</span>
                  {name}
                </button>
              );
            })}
          </div>

          {/* Schedule cards */}
          <div className="space-y-3">
            {filteredEntries.map((entry, i) => {
              const cfg = festivalGroupConfig[entry.festival] ?? {
                icon: '🎊',
                color: 'bg-gray-50 border-gray-200',
                badge: 'bg-gray-100 text-gray-700',
                dot: 'bg-gray-400',
              };
              return (
                <div
                  key={i}
                  className={`border rounded-xl p-4 ${cfg.color}`}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{cfg.icon}</span>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{entry.festivalDetail}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{entry.thithiType}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                        {entry.festival}
                      </span>
                      <span className="text-xs font-semibold text-gray-600">
                        📅 {entry.festivalPeriod
                          ? entry.festivalPeriod
                          : formatDate(entry.festivalDate)}
                      </span>
                    </div>
                  </div>

                  {/* Pooja timings */}
                  <div className="flex flex-wrap gap-2">
                    {entry.poojaTimings.map((timing, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1 text-xs font-semibold bg-white/80 border border-white text-gray-700 px-2.5 py-1 rounded-full shadow-sm"
                      >
                        🪔 {timing}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-center text-gray-400">
            {filteredEntries.length} event{filteredEntries.length !== 1 ? 's' : ''} shown
            {activeGroup ? ` for ${activeGroup}` : ' across all festivals'}.
          </p>
        </>
      )}
    </div>
  );
}
