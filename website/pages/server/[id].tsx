import Head from 'next/head'
import { useRouter } from 'next/router'
import Sidebar from '@/components/Sidebar'

export default function ServerStats() {
  const router = useRouter()
  const { id } = router.query
  const [stats] = React.useState({
    name: 'Development Server',
    members: 1250,
    channels: 45,
    roles: 28,
    boosts: 12,
  })

  return (
    <>
      <Head>
        <title>Server Stats - Exi-E</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-900 text-white min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-8">📊 Server Statistics</h1>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { label: 'Members', value: stats.members, icon: '👥' },
              { label: 'Channels', value: stats.channels, icon: '📢' },
              { label: 'Roles', value: stats.roles, icon: '🏷️' },
              { label: 'Boosts', value: stats.boosts, icon: '⭐' },
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg">
                <p className="text-gray-400 mb-2">{stat.icon} {stat.label}</p>
                <p className="text-4xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

import React from 'react'
