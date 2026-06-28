import Head from 'next/head'
import Sidebar from '@/components/Sidebar'

export default function Leaderboard() {
  const leaderboard = [
    { rank: 1, username: 'ProPlayer', level: 42, xp: 125000 },
    { rank: 2, username: 'MasterMind', level: 41, xp: 122000 },
    { rank: 3, username: 'GrindGod', level: 40, xp: 118000 },
    { rank: 4, username: 'EliteUser', level: 38, xp: 112000 },
    { rank: 5, username: 'TopScore', level: 37, xp: 108000 },
  ]

  return (
    <>
      <Head>
        <title>Leaderboard - Exi-E</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-900 text-white min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-8">🏆 Global Leaderboard</h1>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-discord">
                <tr>
                  <th className="px-6 py-4 text-left">Rank</th>
                  <th className="px-6 py-4 text-left">Username</th>
                  <th className="px-6 py-4 text-left">Level</th>
                  <th className="px-6 py-4 text-left">Total XP</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((player) => (
                  <tr key={player.rank} className="border-t border-gray-700 hover:bg-gray-700 transition">
                    <td className="px-6 py-4">
                      {player.rank === 1 && '🥇'}
                      {player.rank === 2 && '🥈'}
                      {player.rank === 3 && '🥉'}
                      {player.rank > 3 && `#${player.rank}`}
                    </td>
                    <td className="px-6 py-4 font-bold">{player.username}</td>
                    <td className="px-6 py-4">{player.level}</td>
                    <td className="px-6 py-4">{player.xp.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  )
}
