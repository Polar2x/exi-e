import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const router = useRouter()

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/profile/me', label: 'Profile', icon: '👤' },
    { href: '/leaderboard', label: 'Leaderboard', icon: '🏆' },
    { href: '/games', label: 'Games', icon: '🎮' },
    { href: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 h-screen text-white p-6 hidden md:block">
      <h2 className="text-xl font-bold text-discord mb-8">Menu</h2>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className={`flex items-center gap-3 px-4 py-3 rounded transition ${
              router.pathname.includes(link.href.split('/')[1]) ? 'bg-discord' : 'hover:bg-gray-800'
            }`}>
              <span>{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
