import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'

export default function Settings() {
  const [settings, setSettings] = useState({
    prefix: '/',
    modLog: true,
    welcomeMessages: true,
    autoRole: false,
  })

  const handleToggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Head>
        <title>Settings - Exi-E</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-900 text-white min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-8">⚙️ Bot Settings</h1>
          
          <div className="max-w-2xl space-y-6">
            {/* Prefix Setting */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Command Prefix</h2>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={settings.prefix}
                  onChange={(e) => setSettings(prev => ({ ...prev, prefix: e.target.value }))}
                  className="bg-gray-700 text-white px-4 py-2 rounded flex-1"
                />
                <button className="bg-discord px-6 py-2 rounded font-bold hover:bg-opacity-80 transition">
                  Save
                </button>
              </div>
            </div>

            {/* Toggle Settings */}
            {[
              { key: 'modLog', label: 'Moderation Logs', icon: '🛡️' },
              { key: 'welcomeMessages', label: 'Welcome Messages', icon: '👋' },
              { key: 'autoRole', label: 'Auto Role Assignment', icon: '🤖' },
            ].map(({ key, label, icon }) => (
              <div key={key} className="bg-gray-800 p-6 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">{icon} {label}</h3>
                  <p className="text-gray-400 text-sm">Enable or disable this feature</p>
                </div>
                <button
                  onClick={() => handleToggle(key)}
                  className={`w-12 h-6 rounded-full transition ${
                    settings[key as keyof typeof settings] ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  <div 
                    className={`w-5 h-5 rounded-full bg-white transition ${
                      settings[key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
