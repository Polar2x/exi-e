import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-discord">
            Exi-E
          </Link>
          <div className="flex gap-6">
            <Link href="/" className={`hover:text-discord transition ${router.pathname === '/' ? 'text-discord' : ''}`}>
              Home
            </Link>
            <Link href="/dashboard" className={`hover:text-discord transition ${router.pathname === '/dashboard' ? 'text-discord' : ''}`}>
              Dashboard
            </Link>
            <Link href="/leaderboard" className={`hover:text-discord transition ${router.pathname === '/leaderboard' ? 'text-discord' : ''}`}>
              Leaderboard
            </Link>
            <Link href="/games" className={`hover:text-discord transition ${router.pathname === '/games' ? 'text-discord' : ''}`}>
              Games
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
