import { tickets } from '../../../data/meenakshi';

export default function TicketsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>⚠️ Please verify:</strong> Ticket details are placeholder values. Update them in{' '}
        <code className="bg-blue-100 px-1 rounded">src/data/meenakshi.js</code> under{' '}
        <code className="bg-blue-100 px-1 rounded">tickets</code>.
      </div>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.type}
            className={`border rounded-xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow ${
              ticket.highlight
                ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200'
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="text-3xl flex-shrink-0">{ticket.icon}</div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-bold text-gray-900">{ticket.type}</h3>
                <span
                  className={`flex-shrink-0 text-sm font-extrabold px-3 py-1 rounded-full ${
                    ticket.price === 'Free'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {ticket.price}
                </span>
              </div>
              <p className="text-sm text-gray-600">{ticket.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Book online CTA */}
      <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
        <h3 className="font-bold text-lg mb-2">Book Tickets Online</h3>
        <p className="text-gray-300 text-sm mb-4">
          Photography and special access permits can be booked through the official HR & CE portal.
        </p>
        <a
          href="https://maduraimeenakshi.hrce.tn.gov.in"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
        >
          Visit Official Portal →
        </a>
      </div>
    </div>
  );
}
