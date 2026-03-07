const navLinks = [
  { label: 'Home', href: '#', active: false },
  { label: 'Destinations', href: '#', active: false },
  { label: 'Virtual Tours', href: '#', active: true },
  { label: 'Plan Your Trip', href: '#', active: false },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
      <div className="text-xl font-extrabold text-blue-700 tracking-tighter">
        TN<span className="text-orange-500">Tourism</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
        {navLinks.map(({ label, href, active }) => (
          <a
            key={label}
            href={href}
            className={
              active
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'hover:text-gray-900 transition-colors'
            }
          >
            {label}
          </a>
        ))}
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer">
        Login
      </button>
    </nav>
  );
}
