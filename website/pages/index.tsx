import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Exi-E - Discord Bot Dashboard</title>
        <meta name="description" content="Powerful Discord bot with web dashboard" />
      </Head>

      <div className="bg-gradient-to-br from-discord to-purple-900 text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Exi-E</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              The ultimate Discord bot with a powerful web dashboard
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/dashboard">
                <button className="bg-white text-discord px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Go to Dashboard
                </button>
              </Link>
              <Link href="#features">
                <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-discord transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '👤 User Profiles',
                  desc: 'Create and customize your profile with achievements and stats'
                },
                {
                  title: '📊 Server Analytics',
                  desc: 'Real-time statistics and insights for your Discord server'
                },
                {
                  title: '🏆 Leaderboards',
                  desc: 'Compete with others and climb the global rankings'
                },
                {
                  title: '🎮 Mini-Games',
                  desc: 'Play interactive games and earn rewards'
                },
                {
                  title: '⚙️ Configuration',
                  desc: 'Easy-to-use dashboard to configure bot settings'
                },
                {
                  title: '💬 Real-time Chat',
                  desc: 'Connect with other players via web and Discord'
                },
              ].map((feature, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
