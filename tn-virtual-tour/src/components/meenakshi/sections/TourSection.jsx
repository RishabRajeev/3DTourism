import { templeInfo } from '../../../data/meenakshi';

export default function TourSection() {
  return (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-800">
        <strong>Source:</strong> This is the official 360° virtual tour from the{' '}
        <a
          href="https://maduraimeenakshi.hrce.tn.gov.in/hrcehome/index_temple.php?tid=31962"
          target="_blank"
          rel="noreferrer"
          className="underline font-semibold"
        >
          HR & CE, Govt. of Tamil Nadu
        </a>{' '}
        portal. If the viewer appears blank, the server may be restricting cross-origin embedding —
        open the tour directly{' '}
        <a
          href="https://maduraimeenakshi.hrce.tn.gov.in/resources/docs/virtualtour/31962/index.html"
          target="_blank"
          rel="noreferrer"
          className="underline font-semibold"
        >
          here
        </a>.
      </div>

      {/* 360° iframe */}
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video w-full">
        <iframe
          src={templeInfo.iframeSrc}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '400px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Meenakshi Amman Temple – Virtual Tour"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: '🗼', label: '14 Gopurams', detail: 'Explore the towering gateways' },
          { icon: '🪷', label: 'Golden Lotus Tank', detail: 'The sacred Porthamarai Kulam' },
          { icon: '🏛️', label: '1000 Pillar Hall', detail: 'Intricately carved mandapam' },
        ].map(({ icon, label, detail }) => (
          <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
            <div className="text-3xl mb-2">{icon}</div>
            <div className="font-bold text-gray-800 text-sm">{label}</div>
            <div className="text-xs text-gray-500 mt-1">{detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
