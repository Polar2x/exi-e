import os
from dotenv import load_dotenv
import discord
from discord.ext import commands
import aiohttp
from database import init_db

load_dotenv()

TOKEN = os.getenv('DISCORD_TOKEN')
API_URL = os.getenv('API_URL', 'http://localhost:3000')

intents = discord.Intents.default()
intents.message_content = True
intents.members = True

bot = commands.Bot(command_prefix='/', intents=intents)

@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')
    try:
        synced = await bot.tree.sync()
        print(f'Synced {len(synced)} command(s)')
    except Exception as e:
        print(e)

@bot.tree.command(name='ping', description='Check bot latency')
async def ping(interaction: discord.Interaction):
    latency = bot.latency * 1000
    embed = discord.Embed(
        title='🏓 Pong!',
        description=f'Bot latency: {latency:.2f}ms',
        color=discord.Color.blue()
    )
    await interaction.response.send_message(embed=embed)

@bot.tree.command(name='profile', description='View your profile')
async def profile(interaction: discord.Interaction):
    user = interaction.user
    embed = discord.Embed(
        title=f'{user.name}\'s Profile',
        color=discord.Color.purple()
    )
    embed.set_thumbnail(url=user.avatar.url)
    embed.add_field(name='Username', value=f'@{user.name}', inline=True)
    embed.add_field(name='User ID', value=user.id, inline=True)
    embed.add_field(name='Account Created', value=user.created_at.strftime('%Y-%m-%d'), inline=True)
    embed.add_field(name='Reputation', value='🌟 100 XP', inline=True)
    embed.add_field(name='Level', value='5', inline=True)
    embed.add_field(name='View Full Profile', value=f'[Dashboard]({API_URL}/profile/{user.id})', inline=False)
    
    await interaction.response.send_message(embed=embed)

@bot.tree.command(name='stats', description='Get server statistics')
async def stats(interaction: discord.Interaction):
    guild = interaction.guild
    embed = discord.Embed(
        title=f'{guild.name} Statistics',
        color=discord.Color.green()
    )
    embed.set_thumbnail(url=guild.icon.url if guild.icon else None)
    embed.add_field(name='Members', value=guild.member_count, inline=True)
    embed.add_field(name='Channels', value=len(guild.channels), inline=True)
    embed.add_field(name='Roles', value=len(guild.roles), inline=True)
    embed.add_field(name='Created', value=guild.created_at.strftime('%Y-%m-%d'), inline=True)
    embed.add_field(name='Boosts', value=guild.premium_subscription_count, inline=True)
    embed.add_field(name='Full Stats', value=f'[View Dashboard]({API_URL}/server/{guild.id})', inline=False)
    
    await interaction.response.send_message(embed=embed)

@bot.tree.command(name='leaderboard', description='View global leaderboard')
async def leaderboard(interaction: discord.Interaction):
    embed = discord.Embed(
        title='🏆 Global Leaderboard',
        color=discord.Color.gold()
    )
    # Placeholder - fetch from API
    embed.add_field(name='Top Players', value='Coming soon!', inline=False)
    embed.add_field(name='View Full Leaderboard', value=f'[Click Here]({API_URL}/leaderboard)', inline=False)
    
    await interaction.response.send_message(embed=embed)

@bot.tree.command(name='games', description='Play a mini-game')
async def games(interaction: discord.Interaction):
    embed = discord.Embed(
        title='🎮 Mini Games',
        color=discord.Color.orange()
    )
    embed.add_field(name='Available Games', value='Trivia, Roulette, Slots, Memory', inline=False)
    embed.add_field(name='Play Games', value=f'[Play Now]({API_URL}/games)', inline=False)
    
    await interaction.response.send_message(embed=embed)

@bot.tree.command(name='dashboard', description='Link to your dashboard')
async def dashboard(interaction: discord.Interaction):
    embed = discord.Embed(
        title='📊 Dashboard',
        description=f'Visit your personal dashboard to manage settings, view stats, and more!',
        color=discord.Color.blue(),
        url=f'{API_URL}/dashboard'
    )
    
    await interaction.response.send_message(embed=embed)

if __name__ == '__main__':
    init_db()
    bot.run(TOKEN)
