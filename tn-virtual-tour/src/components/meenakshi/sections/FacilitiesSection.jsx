import { facilities } from '../../../data/meenakshi';

export default function FacilitiesSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <p className="text-sm text-gray-600 leading-relaxed">
          The Meenakshi Amman Temple complex provides a range of facilities to ensure a comfortable
          and convenient visit for all pilgrims and tourists.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {facilities.map(({ icon, name, detail }) => (
          <div
            key={name}
            className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3"
          >
            <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact / Location info */}
      <div className="bg-gray-900 text-white rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4">Contact & Location</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">📍</span>
            <div>
              <div className="font-semibold">Address</div>
              <div className="text-gray-400">
                Arulmigu Meenakshi Sundaraswarar Temple,<br />
                Madurai – 625001, Tamil Nadu, India
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">🌐</span>
            <div>
              <div className="font-semibold">Official Website</div>
              <a
                href="https://maduraimeenakshi.hrce.tn.gov.in"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                maduraimeenakshi.hrce.tn.gov.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
