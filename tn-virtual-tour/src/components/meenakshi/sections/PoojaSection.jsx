import { poojas } from '../../../data/meenakshi';

export default function PoojaSection() {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
        <strong>Note:</strong> Pooja timings below are the standard daily schedule. Timings may
        shift during festivals or special occasions. Please verify with the temple office or
        update the timings in <code className="bg-amber-100 px-1 rounded">src/data/meenakshi.js</code>.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {poojas.map((pooja, index) => (
          <div
            key={pooja.id}
            className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
          >
            {/* Step number + icon */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                {pooja.icon}
              </div>
              <div className="text-xs font-bold text-orange-400">#{index + 1}</div>
            </div>

            <div className="flex-grow min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-gray-900">{pooja.name}</h3>
                <span className="flex-shrink-0 text-xs bg-orange-50 text-orange-700 border border-orange-200 font-bold px-2 py-0.5 rounded-full">
                  {pooja.time}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{pooja.description}</p>
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
    </div>
  );
}
