import Head from 'next/head'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import StatCard from '@/components/StatCard'

export default function Dashboard() {
  const [stats, setStats] = useState({
    level: 5,
    xp: 2450,
    nextLevelXp: 5000,
    servers: 12,
    achievements: 8,
  })

  return (
    <>
      <Head>
        <title>Dashboard - Exi-E</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-900 text-white min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Level" value={stats.level} icon="⭐" />
            <StatCard label="Experience" value={`${stats.xp}/${stats.nextLevelXp}`} icon="✨" />
            <StatCard label="Servers" value={stats.servers} icon="🖥️" />
            <StatCard label="Achievements" value={stats.achievements} icon="🏆" />
          </div>

          {/* XP Progress */}
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Level Progress</h2>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-discord to-purple-500 h-4 rounded-full"
                style={{ width: `${(stats.xp / stats.nextLevelXp) * 100}%` }}
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">{stats.xp} / {stats.nextLevelXp} XP</p>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {[
                '⭐ Gained 100 XP from a trivia game',
                '🏆 Unlocked "Speed Runner" achievement',
                '👥 Joined "Developers Hub" server',
                '🎮 Completed 5 consecutive games',
              ].map((activity, i) => (
                <p key={i} className="text-gray-300 border-b border-gray-700 pb-3">{activity}</p>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
