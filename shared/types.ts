export interface User {
  id: string
  discordId: string
  username: string
  avatar?: string
  level: number
  xp: number
  badges: string[]
  createdAt: Date
}

export interface ServerStats {
  id: string
  name: string
  members: number
  channels: number
  roles: number
  boosts: number
}

export interface GameScore {
  userId: string
  gameType: string
  score: number
  xpEarned: number
  completedAt: Date
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  requirement: string
}
