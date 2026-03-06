import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            TaskFlow
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            A modern task management system that helps teams stay
            organized, track progress, and complete tasks efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Dashboard
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Tasks
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Login
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect
          </h3>

          <div className="flex gap-4 text-xl">

            <a
              href="#"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>

          </div>

          <p className="text-gray-500 text-sm mt-4">
            Built with React & Tailwind
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;