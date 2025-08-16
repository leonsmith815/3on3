import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Trophy, Users, Calendar, BarChart3, Play, Eye } from 'lucide-react';
import { Player } from '../types';
import { teams } from '../data/teams';
import { players } from '../data/players';
import { games } from '../data/games';

interface HomePageProps {
  onPlayerClick: (player: Player) => void;
}

export function HomePage({ onPlayerClick }: HomePageProps) {
  const topScorers = players
    .sort((a, b) => b.ppg - a.ppg)
    .slice(0, 3);

  const topTeams = teams
    .sort((a, b) => b.wins - a.wins)
    .slice(0, 4);

  const featuredGame = games.find(g => g.featured);
  const homeTeam = teams.find(t => t.id === featuredGame?.homeTeamId);
  const awayTeam = teams.find(t => t.id === featuredGame?.awayTeamId);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1D37] via-[#1a2f4a] to-[#0A1D37]">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF8500] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#E63946] rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#FF8500] rounded-full opacity-30 animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="https://i.imgur.com/u3bl-logo.png" 
              alt="U3BL Logo" 
              className="w-32 h-32 mx-auto object-contain mb-4"
              onError={(e) => {
                // Fallback to gradient circle if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-32 h-32 bg-gradient-to-br from-[#FF8500] to-[#E63946] rounded-full flex items-center justify-center font-bold text-4xl mx-auto mb-4" style={{display: 'none'}}>
              U3BL
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#FF8500] to-[#E63946] bg-clip-text text-transparent">
            U3BL
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#F7F5F3]">
            UNITED 3-ON-3 BASKETBALL LEAGUE
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Where Elite Athletes Battle for Championship Glory
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF8500]">12</div>
              <div className="text-sm text-gray-300">Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF8500]">72</div>
              <div className="text-sm text-gray-300">Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF8500]">75</div>
              <div className="text-sm text-gray-300">Games</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/standings"
              className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              VIEW STANDINGS
            </Link>
            <button className="bg-transparent border-2 border-[#FF8500] text-[#FF8500] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF8500] hover:text-white transition-all duration-200">
              WATCH LIVE
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-[#FF8500] mx-auto" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Trophy className="text-[#FF8500] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-[#0A1D37] mb-2">Championship</h3>
              <p className="text-gray-600">Elite competition at its finest</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="text-[#FF8500] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-[#0A1D37] mb-2">72 Players</h3>
              <p className="text-gray-600">Top athletes from across the nation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Calendar className="text-[#FF8500] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-[#0A1D37] mb-2">Season Long</h3>
              <p className="text-gray-600">Action-packed games every week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <BarChart3 className="text-[#FF8500] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-[#0A1D37] mb-2">Live Stats</h3>
              <p className="text-gray-600">Real-time performance tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0A1D37] mb-12">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { to: '/standings', icon: Trophy, label: 'Standings' },
              { to: '/stats', icon: BarChart3, label: 'Stats' },
              { to: '/schedule', icon: Calendar, label: 'Schedule' },
              { to: '/teams', icon: Users, label: 'Teams' }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="bg-gradient-to-br from-[#0A1D37] to-[#1a2f4a] text-white p-6 rounded-lg text-center hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <item.icon className="mx-auto mb-3 text-[#FF8500]" size={32} />
                <span className="font-semibold">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Game of the Week */}
      {featuredGame && homeTeam && awayTeam && (
        <section className="py-16 bg-[#F7F5F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#0A1D37] mb-12">Game of the Week</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-4xl mb-2">{awayTeam.logo}</div>
                    <div className="font-bold text-lg">{awayTeam.city}</div>
                    <div className="font-semibold">{awayTeam.name}</div>
                    <div className="text-sm opacity-75">{awayTeam.wins}-{awayTeam.losses}</div>
                  </div>
                  <div className="text-center px-8">
                    <div className="text-2xl font-bold mb-2">VS</div>
                    <div className="text-sm">{featuredGame.date.toLocaleDateString()}</div>
                    <div className="text-sm">{featuredGame.time}</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-4xl mb-2">{homeTeam.logo}</div>
                    <div className="font-bold text-lg">{homeTeam.city}</div>
                    <div className="font-semibold">{homeTeam.name}</div>
                    <div className="text-sm opacity-75">{homeTeam.wins}-{homeTeam.losses}</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <Play className="text-[#FF8500] mx-auto mb-4" size={48} />
                  <p className="text-gray-600 mb-4">Game highlights and live stream will be available here</p>
                  <button className="bg-[#FF8500] text-white px-6 py-2 rounded-lg hover:bg-[#E63946] transition-colors">
                    <Eye className="inline mr-2" size={16} />
                    Watch Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Current Standings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1D37]">Current Standings</h2>
            <Link to="/standings" className="text-[#FF8500] hover:text-[#E63946] font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTeams.map((team, index) => (
              <div key={team.id} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-lg border">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{team.logo}</div>
                  <div className="text-2xl font-bold text-[#FF8500]">#{index + 1}</div>
                </div>
                <h3 className="font-bold text-lg text-[#0A1D37] mb-1">{team.city}</h3>
                <p className="text-gray-600 mb-3">{team.name}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">W: {team.wins}</span>
                  <span className="text-red-600 font-semibold">L: {team.losses}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Leaderboard */}
      <section className="py-16 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1D37]">Scoring Leaders</h2>
            <Link to="/stats" className="text-[#FF8500] hover:text-[#E63946] font-semibold">
              View All Stats →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topScorers.map((player, index) => {
              const team = teams.find(t => t.id === player.teamId);
              return (
                <div
                  key={player.id}
                  onClick={() => onPlayerClick(player)}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-[#FF8500]">#{index + 1}</div>
                    <img
                      src={player.image || '/api/placeholder/60/60'}
                      alt={player.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1D37]">{player.name}</h3>
                      <p className="text-sm text-gray-600">{team?.city} {team?.name}</p>
                      <p className="text-lg font-bold text-[#FF8500]">{player.ppg} PPG</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules & FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0A1D37] mb-12">League Information</h2>
          <div className="space-y-6">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-[#0A1D37] cursor-pointer hover:text-[#FF8500]">
                What is the U3BL format?
              </summary>
              <p className="mt-4 text-gray-700">
                The United 3-on-3 Basketball League features 12 teams split into Eastern and Western conferences. 
                Each team has 6 players competing in fast-paced 3-on-3 games throughout the season.
              </p>
            </details>
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-[#0A1D37] cursor-pointer hover:text-[#FF8500]">
                How does the salary cap work?
              </summary>
              <p className="mt-4 text-gray-700">
                Each team operates under a salary cap system to ensure competitive balance. 
                Teams can trade players and manage contracts to build the best possible roster within the cap constraints.
              </p>
            </details>
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-[#0A1D37] cursor-pointer hover:text-[#FF8500]">
                When are games played?
              </summary>
              <p className="mt-4 text-gray-700">
                Games are played throughout the week with prime-time matchups on weekends. 
                Check our schedule page for the latest game times and featured matchups.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
