interface StatCardProps {
  label: string
  value: string | number
  icon: string
}

export default function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-discord transition">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}
