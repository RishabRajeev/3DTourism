import { useMemo } from 'react';
import { tickets } from '../../../data/meenakshi';

const CATEGORY_CONFIG = {
  Entry:    { label: 'Entry & Darshan', icon: '🎫', color: 'bg-blue-50 border-blue-100',   badge: 'bg-blue-100 text-blue-800'   },
  Prayer:   { label: 'Prayer & Pooja',  icon: '🪔', color: 'bg-orange-50 border-orange-100', badge: 'bg-orange-100 text-orange-800' },
  Offering: { label: 'Offerings',       icon: '🌸', color: 'bg-pink-50 border-pink-100',    badge: 'bg-pink-100 text-pink-800'   },
  Seva:     { label: 'Seva',            icon: '👑', color: 'bg-yellow-50 border-yellow-100', badge: 'bg-yellow-100 text-yellow-800'},
  Marriage: { label: 'Marriage',        icon: '💍', color: 'bg-rose-50 border-rose-100',    badge: 'bg-rose-100 text-rose-800'   },
  Facility: { label: 'Facilities',      icon: '🧳', color: 'bg-gray-50 border-gray-100',    badge: 'bg-gray-100 text-gray-700'   },
};

/**
 * @param {{ onProceedToPayment: (item: object) => void }} props
 */
export default function TicketsSection({ onProceedToPayment }) {
  const grouped = useMemo(() => {
    return tickets.reduce((acc, t) => {
      if (!acc[t.category]) acc[t.category] = [];
      acc[t.category].push(t);
      return acc;
    }, {});
  }, []);

  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-600 shadow-sm">
        All fees are sourced from the official <strong>HR & CE portal</strong> (Pooja Info page) for
        Arulmigu Meenakshi Sundaraswarar Temple.
      </div>

      {Object.entries(grouped).map(([category, items]) => {
        const cfg = CATEGORY_CONFIG[category] ?? { label: category, icon: '📋', color: 'bg-gray-50 border-gray-100', badge: 'bg-gray-100 text-gray-700' };
        return (
          <div key={category}>
            {/* Category header */}
            <h3 className="flex items-center gap-2 text-sm font-extrabold text-gray-700 uppercase tracking-wider mb-3">
              <span>{cfg.icon}</span> {cfg.label}
            </h3>

            <div className="space-y-2">
              {items.map((ticket) => (
                <div
                  key={ticket.type}
                  className={`border rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow ${cfg.color}`}
                >
                  <div className="text-2xl flex-shrink-0">{ticket.icon}</div>

                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="font-bold text-gray-900 text-sm">{ticket.type}</div>
                        {ticket.tamil && (
                          <div className="text-xs text-gray-400 mt-0.5">{ticket.tamil}</div>
                        )}
                      </div>
                      <span
                        className={`flex-shrink-0 text-sm font-extrabold px-3 py-0.5 rounded-full ${
                          ticket.price === 'Free'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-white border border-gray-200 text-gray-800'
                        }`}
                      >
                        {ticket.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{ticket.description}</p>
                  </div>

                  {ticket.price !== 'Free' && (
                    <button
                      onClick={() => onProceedToPayment({ ...ticket, category: 'Ticket' })}
                      className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Book → Pay
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
