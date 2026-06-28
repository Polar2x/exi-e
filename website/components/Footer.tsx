export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Exi-E</h3>
            <p className="text-sm">A powerful Discord bot with web integration</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-discord transition">GitHub</a></li>
              <li><a href="#" className="hover:text-discord transition">Support</a></li>
              <li><a href="#" className="hover:text-discord transition">Invite Bot</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-discord transition">Privacy</a></li>
              <li><a href="#" className="hover:text-discord transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 Exi-E. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
