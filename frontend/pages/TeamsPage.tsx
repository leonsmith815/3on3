import React, { useState } from 'react';
import { teams } from '../data/teams';
import { players } from '../data/players';
import { Player } from '../types';

interface TeamsPageProps {
  onPlayerClick: (player: Player) => void;
}

export function TeamsPage({ onPlayerClick }: TeamsPageProps) {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const getTeamPlayers = (teamId: string) => {
    return players.filter(player => player.teamId === teamId);
  };

  const getTeamStats = (teamId: string) => {
    const teamPlayers = getTeamPlayers(teamId);
    const totalPPG = teamPlayers.reduce((sum, player) => sum + player.ppg, 0);
    const totalRPG = teamPlayers.reduce((sum, player) => sum + player.rpg, 0);
    const totalAPG = teamPlayers.reduce((sum, player) => sum + player.apg, 0);
    const totalCapHit = teamPlayers.reduce((sum, player) => sum + player.capHit, 0);
    
    return {
      totalPPG: Math.round(totalPPG * 10) / 10,
      totalRPG: Math.round(totalRPG * 10) / 10,
      totalAPG: Math.round(totalAPG * 10) / 10,
      avgPPG: Math.round((totalPPG / teamPlayers.length) * 10) / 10,
      avgRPG: Math.round((totalRPG / teamPlayers.length) * 10) / 10,
      avgAPG: Math.round((totalAPG / teamPlayers.length) * 10) / 10,
      totalCapHit
    };
  };

  const getDraftRoundDisplay = (round: 1 | 2 | 3 | 'FA') => {
    if (round === 'FA') return 'FA';
    return `R${round}`;
  };

  const getDraftRoundColor = (round: 1 | 2 | 3 | 'FA') => {
    switch (round) {
      case 1: return 'bg-yellow-500';
      case 2: return 'bg-gray-400';
      case 3: return 'bg-orange-600';
      case 'FA': return 'bg-green-600';
      default: return 'bg-gray-400';
    }
  };

  if (selectedTeam) {
    const team = teams.find(t => t.id === selectedTeam);
    const teamPlayers = getTeamPlayers(selectedTeam);
    const stats = getTeamStats(selectedTeam);

    if (!team) return null;

    return (
      <div className="min-h-screen bg-[#F7F5F3] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedTeam(null)}
            className="mb-6 text-[#FF8500] hover:text-[#E63946] font-semibold"
          >
            ← Back to Teams
          </button>

          {/* Team Header */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div 
              className="p-8 text-white"
              style={{ background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})` }}
            >
              <div className="flex items-center space-x-6">
                <div className="text-6xl">{team.logo}</div>
                <div>
                  <h1 className="text-4xl font-bold">{team.city} {team.name}</h1>
                  <p className="text-xl opacity-90">{team.conference} Conference</p>
                  <div className="flex space-x-6 mt-4">
                    <div>
                      <span className="text-2xl font-bold">{team.wins}</span>
                      <span className="text-sm opacity-75 ml-1">Wins</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">{team.losses}</span>
                      <span className="text-sm opacity-75 ml-1">Losses</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">{team.points.toLocaleString()}</span>
                      <span className="text-sm opacity-75 ml-1">Points</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-[#0A1D37] mb-4">Team Totals</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Points:</span>
                  <span className="font-bold text-[#FF8500]">{stats.totalPPG}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rebounds:</span>
                  <span className="font-bold text-[#FF8500]">{stats.totalRPG}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Assists:</span>
                  <span className="font-bold text-[#FF8500]">{stats.totalAPG}</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-[#0A1D37] mb-4">Player Averages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">PPG:</span>
                  <span className="font-bold text-[#FF8500]">{stats.avgPPG}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">RPG:</span>
                  <span className="font-bold text-[#FF8500]">{stats.avgRPG}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">APG:</span>
                  <span className="font-bold text-[#FF8500]">{stats.avgAPG}</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-[#0A1D37] mb-4">Salary Cap</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cap Hit:</span>
                  <span className="font-bold text-[#FF8500]">
                    {stats.totalCapHit}/39 pts
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cap Space:</span>
                  <span className="font-bold text-[#FF8500]">
                    {39 - stats.totalCapHit} pts
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conference Rank:</span>
                  <span className="font-bold text-[#FF8500]">
                    #{teams.filter(t => t.conference === team.conference).sort((a, b) => b.wins - a.wins).findIndex(t => t.id === team.id) + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Roster */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white p-6">
              <h2 className="text-2xl font-bold">Team Roster</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PPG</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RPG</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APG</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Draft</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cap Hit</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamPlayers.map((player) => (
                    <tr
                      key={player.id}
                      onClick={() => onPlayerClick(player)}
                      className="hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={player.image || '/api/placeholder/40/40'}
                            alt={player.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{player.name}</div>
                            <div className="text-sm text-gray-500">{player.height}, {player.weight} lbs</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold bg-[#FF8500] text-white rounded-full">
                          {player.position}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {player.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {player.ppg}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {player.rpg}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {player.apg}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold text-white rounded ${getDraftRoundColor(player.draftRound)}`}>
                          {getDraftRoundDisplay(player.draftRound)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#FF8500]">
                        {player.capHit} pts
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">Teams</h1>
          <p className="text-gray-600">Explore all 12 teams in the U3BL</p>
        </div>

        {/* Conference Sections */}
        {['Eastern', 'Western'].map((conference) => (
          <div key={conference} className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1D37] mb-6">{conference} Conference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams
                .filter(team => team.conference === conference)
                .sort((a, b) => b.wins - a.wins)
                .map((team) => {
                  const teamPlayers = getTeamPlayers(team.id);
                  const stats = getTeamStats(team.id);
                  
                  return (
                    <div
                      key={team.id}
                      onClick={() => setSelectedTeam(team.id)}
                      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      <div 
                        className="p-6 text-white"
                        style={{ background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})` }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-4xl">{team.logo}</div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{team.wins}-{team.losses}</div>
                            <div className="text-sm opacity-75">Record</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{team.city}</h3>
                        <p className="text-lg opacity-90">{team.name}</p>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-3 gap-4 text-center mb-4">
                          <div>
                            <div className="text-lg font-bold text-[#FF8500]">{stats.totalPPG}</div>
                            <div className="text-xs text-gray-600">Team PPG</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-[#FF8500]">{stats.totalRPG}</div>
                            <div className="text-xs text-gray-600">Team RPG</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-[#FF8500]">{stats.totalAPG}</div>
                            <div className="text-xs text-gray-600">Team APG</div>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Cap Hit:</span>
                            <span className="font-semibold text-[#FF8500]">
                              {stats.totalCapHit}/39 pts
                            </span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Cap Space:</span>
                            <span className="font-semibold text-green-600">
                              {39 - stats.totalCapHit} pts
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 text-center">
                            {teamPlayers.length} Players • Click to view roster
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
