import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-gray-900/30 to-black border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl text-white mb-4">Follow My Work</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg transition-all transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </div>

        <div className="text-center pt-6 border-t border-gray-800/30">
          <p className="text-gray-400">
            © 2024 Cynthia Andraos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}