import { payments } from '../../../data/meenakshi';

/**
 * @param {{
 *   selectedItem: object | null,
 *   onClearItem: () => void
 * }} props
 */
export default function PaymentsSection({ selectedItem, onClearItem }) {
  return (
    <div className="space-y-6">

      {/* ── Selected pass / ticket summary ── */}
      {selectedItem ? (
        <div className="bg-orange-500 text-white rounded-xl p-5 shadow-md">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedItem.icon}</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-orange-200 mb-0.5">
                  {selectedItem.category} Selected
                </div>
                <div className="font-extrabold text-lg">{selectedItem.type}</div>
                <div className="text-orange-100 text-sm mt-0.5">{selectedItem.description}</div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span className="bg-white text-orange-600 font-extrabold px-3 py-1 rounded-full text-sm">
                {selectedItem.price}
              </span>
              <button
                onClick={onClearItem}
                className="text-orange-200 hover:text-white text-xs underline cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="mt-4 border-t border-orange-400 pt-3 text-sm text-orange-100">
            Choose a payment method below to complete your booking.
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-sm text-gray-500 text-center">
          No item selected. Go to <strong>Passes</strong> or <strong>Tickets</strong> and click <strong>Get Pass → Pay</strong> or <strong>Book → Pay</strong> to start here automatically.
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>⚠️ Please verify:</strong> Replace the UPI ID and bank details in{' '}
        <code className="bg-blue-100 px-1 rounded">src/data/meenakshi.js</code> under{' '}
        <code className="bg-blue-100 px-1 rounded">payments</code> with the official temple values.
      </div>

      {/* UPI */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>📱</span> UPI / QR Payment
        </h3>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="w-28 h-28 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-xs text-center p-2">
            QR Code<br />(Add official QR)
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">UPI ID</p>
            <p className="font-mono font-bold text-gray-900 text-lg bg-orange-50 px-3 py-2 rounded-lg border border-orange-100">
              {payments.upiId}
            </p>
            <p className="text-xs text-gray-400 mt-2">Accepted: GPay, PhonePe, Paytm, BHIM</p>
          </div>
        </div>
      </div>

      {/* Payment methods */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Accepted Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {payments.methods.map(({ label, icon, note }) => (
            <div key={label} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">{label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bank details */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🏦</span> Bank Transfer Details (NEFT / RTGS)
        </h3>
        <div className="space-y-2">
          {Object.entries(payments.bankDetails).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
            >
              <span className="text-sm text-gray-500 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-sm font-semibold text-gray-800 text-right max-w-xs">{value}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
