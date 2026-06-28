import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export default function Games() {
  const games = [
    { name: 'Trivia', icon: '🧠', desc: 'Answer questions and earn XP', reward: '100-500 XP' },
    { name: 'Slots', icon: '🎰', desc: 'Try your luck and win big', reward: '50-1000 XP' },
    { name: 'Roulette', icon: '🎡', desc: 'Spin the wheel of fortune', reward: '100-750 XP' },
    { name: 'Memory', icon: '🧩', desc: 'Match pairs and test your memory', reward: '75-300 XP' },
    { name: 'Connect Four', icon: '🔴', desc: 'Strategic tile matching game', reward: '200-600 XP' },
    { name: 'Hangman', icon: '🎭', desc: 'Guess the word before time runs out', reward: '150-400 XP' },
  ]

  return (
    <>
      <Head>
        <title>Games - Exi-E</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-900 text-white min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-2">🎮 Mini Games</h1>
          <p className="text-gray-400 mb-8">Play games, earn XP, and unlock achievements</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:from-discord hover:to-purple-600 transition cursor-pointer">
                <div className="text-6xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-gray-300 mb-4">{game.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-400 font-bold">{game.reward}</span>
                  <button className="bg-white text-discord px-4 py-2 rounded font-bold hover:bg-gray-100 transition">
                    Play
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
