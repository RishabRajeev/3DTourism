export const TABS = [
  { id: 'about',      label: 'About',         icon: '🏛️' },
  { id: 'structures', label: 'Structures',    icon: '🗼' },
  { id: 'tour',       label: '360° Tour',     icon: '🌐' },
  { id: 'pooja',      label: 'Poojas',        icon: '🪔' },
  { id: 'festivals',  label: 'Festivals',     icon: '🎊' },
  { id: 'passes',     label: 'Passes',        icon: '🎫' },
  { id: 'tickets',    label: 'Tickets',       icon: '🎟️' },
  { id: 'payments',   label: 'Payments',      icon: '💳' },
  { id: 'seva',       label: 'Seva',          icon: '🙏' },
  { id: 'facilities', label: 'Facilities',    icon: '🏥' },
];

/**
 * Horizontally scrollable tab navigation bar for the Meenakshi Temple page.
 * @param {{ activeTab: string, onTabChange: (id: string) => void }} props
 */
export default function MeenakshiTabNav({ activeTab, onTabChange }) {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <div className="flex min-w-max px-4 md:px-8">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
