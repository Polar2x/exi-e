import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function Profile() {
  const router = useRouter()
  const { id } = router.query
  const [profile, setProfile] = useState({
    username: 'User',
    level: 5,
    xp: 2450,
    avatar: 'https://via.placeholder.com/150',
    badges: ['Founder', 'Speed Runner', 'Legendary'],
  })

  return (
    <>
      <Head>
        <title>{profile.username}'s Profile - Exi-E</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-900 text-white min-h-screen p-8">
          <div className="max-w-2xl">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-discord to-purple-500 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-6">
                <img src={profile.avatar} alt="Avatar" className="w-32 h-32 rounded-full border-4 border-white" />
                <div>
                  <h1 className="text-4xl font-bold mb-2">{profile.username}</h1>
                  <p className="text-xl mb-4">Level {profile.level}</p>
                  <div className="flex gap-2">
                    {profile.badges.map((badge, i) => (
                      <span key={i} className="bg-white text-discord px-3 py-1 rounded-full text-sm font-bold">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400">Total XP</p>
                  <p className="text-3xl font-bold">{profile.xp}</p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400">Rank</p>
                  <p className="text-3xl font-bold">#42</p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400">Games Played</p>
                  <p className="text-3xl font-bold">156</p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400">Win Rate</p>
                  <p className="text-3xl font-bold">68%</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
