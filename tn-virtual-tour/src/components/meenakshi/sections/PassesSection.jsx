import { passes } from '../../../data/meenakshi';

/**
 * @param {{ onProceedToPayment: (item: object) => void }} props
 */
export default function PassesSection({ onProceedToPayment }) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>⚠️ Please verify:</strong> Pass prices and types are placeholder values. Update
        them in <code className="bg-blue-100 px-1 rounded">src/data/meenakshi.js</code> under{' '}
        <code className="bg-blue-100 px-1 rounded">passes</code> once you have the official
        information.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {passes.map((pass) => (
          <div
            key={pass.type}
            className={`bg-white border rounded-xl p-5 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow ${
              pass.available ? 'border-gray-100' : 'border-dashed border-gray-300 opacity-70'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{pass.icon}</span>
                <h3 className="font-bold text-gray-900">{pass.type}</h3>
              </div>
              <span
                className={`text-sm font-extrabold px-3 py-1 rounded-full ${
                  pass.available
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {pass.price}
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{pass.description}</p>

            <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
              <span>ℹ️</span>
              <span>{pass.note}</span>
            </div>

            {pass.available ? (
              <button
                onClick={() => onProceedToPayment({ ...pass, category: 'Pass' })}
                className="w-full mt-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                Get Pass <span>→ Pay</span>
              </button>
            ) : (
              <button
                disabled
                className="w-full mt-1 bg-gray-100 text-gray-400 font-bold py-2.5 rounded-lg text-sm cursor-not-allowed"
              >
                Contact Temple Office
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
