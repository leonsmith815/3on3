import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { games } from '../data/games';
import { teams } from '../data/teams';

export function SchedulePage() {
  const upcomingGames = games
    .filter(game => !game.isCompleted)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const completedGames = games
    .filter(game => game.isCompleted)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const renderGame = (game: typeof games[0], showResult = false) => {
    const homeTeam = teams.find(t => t.id === game.homeTeamId);
    const awayTeam = teams.find(t => t.id === game.awayTeamId);

    if (!homeTeam || !awayTeam) return null;

    return (
      <div key={game.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        {game.featured && (
          <div className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
            Featured Game
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-center flex-1">
            <div className="text-3xl mb-2">{awayTeam.logo}</div>
            <div className="font-bold text-lg text-[#0A1D37]">{awayTeam.city}</div>
            <div className="text-gray-600">{awayTeam.name}</div>
            <div className="text-sm text-gray-500">{awayTeam.wins}-{awayTeam.losses}</div>
            {showResult && game.awayScore !== undefined && (
              <div className="text-2xl font-bold text-[#FF8500] mt-2">{game.awayScore}</div>
            )}
          </div>
          
          <div className="text-center px-8">
            {showResult ? (
              <div className="text-xl font-bold text-[#0A1D37]">FINAL</div>
            ) : (
              <div className="text-2xl font-bold text-[#0A1D37] mb-2">VS</div>
            )}
            <div className="text-sm text-gray-600 flex items-center justify-center mb-1">
              <Calendar size={14} className="mr-1" />
              {game.date.toLocaleDateString()}
            </div>
            <div className="text-sm text-gray-600 flex items-center justify-center mb-1">
              <Clock size={14} className="mr-1" />
              {game.time}
            </div>
            <div className="text-sm text-gray-600 flex items-center justify-center">
              <MapPin size={14} className="mr-1" />
              {game.venue}
            </div>
          </div>
          
          <div className="text-center flex-1">
            <div className="text-3xl mb-2">{homeTeam.logo}</div>
            <div className="font-bold text-lg text-[#0A1D37]">{homeTeam.city}</div>
            <div className="text-gray-600">{homeTeam.name}</div>
            <div className="text-sm text-gray-500">{homeTeam.wins}-{homeTeam.losses}</div>
            {showResult && game.homeScore !== undefined && (
              <div className="text-2xl font-bold text-[#FF8500] mt-2">{game.homeScore}</div>
            )}
          </div>
        </div>
        
        {!showResult && (
          <div className="flex justify-center space-x-4">
            <button className="bg-[#FF8500] text-white px-4 py-2 rounded-lg hover:bg-[#E63946] transition-colors">
              Set Reminder
            </button>
            <button className="border border-[#FF8500] text-[#FF8500] px-4 py-2 rounded-lg hover:bg-[#FF8500] hover:text-white transition-colors">
              Preview
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">Game Schedule</h1>
          <p className="text-gray-600">Upcoming games and recent results</p>
        </div>

        {/* Upcoming Games */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0A1D37] mb-6">Upcoming Games</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingGames.map(game => renderGame(game))}
          </div>
        </div>

        {/* Recent Results */}
        {completedGames.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#0A1D37] mb-6">Recent Results</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {completedGames.map(game => renderGame(game, true))}
            </div>
          </div>
        )}

        {/* Schedule Info */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#0A1D37] mb-4">Schedule Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Calendar className="text-[#FF8500] mx-auto mb-2" size={32} />
              <h3 className="font-semibold text-[#0A1D37] mb-2">Game Days</h3>
              <p className="text-gray-600 text-sm">Games are typically played Tuesday through Sunday</p>
            </div>
            <div className="text-center">
              <Clock className="text-[#FF8500] mx-auto mb-2" size={32} />
              <h3 className="font-semibold text-[#0A1D37] mb-2">Prime Time</h3>
              <p className="text-gray-600 text-sm">Featured games at 8:00 PM ET on weekends</p>
            </div>
            <div className="text-center">
              <MapPin className="text-[#FF8500] mx-auto mb-2" size={32} />
              <h3 className="font-semibold text-[#0A1D37] mb-2">Venues</h3>
              <p className="text-gray-600 text-sm">Games played at team home arenas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
