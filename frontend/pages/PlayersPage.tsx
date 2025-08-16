import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { players } from '../data/players';
import { teams } from '../data/teams';
import { Player } from '../types';

interface PlayersPageProps {
  onPlayerClick: (player: Player) => void;
}

export function PlayersPage({ onPlayerClick }: PlayersPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [selectedTeam, setSelectedTeam] = useState<string>('all');
  const [selectedDraftRound, setSelectedDraftRound] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'ppg' | 'rpg' | 'apg' | 'value' | 'capHit'>('ppg');

  const positions = ['all', 'PG', 'SG', 'SF', 'PF', 'C', 'Utility'];
  const draftRounds = ['all', '1', '2', '3', 'FA'];

  const filteredPlayers = players
    .filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
      const matchesTeam = selectedTeam === 'all' || player.teamId === selectedTeam;
      const matchesDraftRound = selectedDraftRound === 'all' || player.draftRound.toString() === selectedDraftRound;
      return matchesSearch && matchesPosition && matchesTeam && matchesDraftRound;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b[sortBy] - a[sortBy];
    });

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

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">Players</h1>
          <p className="text-gray-600">Discover all 72 players in the U3BL</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8500] focus:border-transparent"
              />
            </div>

            {/* Position Filter */}
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8500] focus:border-transparent"
            >
              {positions.map(position => (
                <option key={position} value={position}>
                  {position === 'all' ? 'All Positions' : position}
                </option>
              ))}
            </select>

            {/* Team Filter */}
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8500] focus:border-transparent"
            >
              <option value="all">All Teams</option>
              {teams.map(team => (
                <option key={team.id} value={team.id}>
                  {team.city} {team.name}
                </option>
              ))}
            </select>

            {/* Draft Round Filter */}
            <select
              value={selectedDraftRound}
              onChange={(e) => setSelectedDraftRound(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8500] focus:border-transparent"
            >
              <option value="all">All Draft Rounds</option>
              <option value="1">Round 1 (20 pts)</option>
              <option value="2">Round 2 (8 pts)</option>
              <option value="3">Round 3 (5 pts)</option>
              <option value="FA">Free Agent (3 pts)</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8500] focus:border-transparent"
            >
              <option value="ppg">Points Per Game</option>
              <option value="rpg">Rebounds Per Game</option>
              <option value="apg">Assists Per Game</option>
              <option value="capHit">Cap Hit</option>
              <option value="value">Player Value</option>
              <option value="name">Name (A-Z)</option>
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-gray-50 rounded-lg px-4 py-2">
              <Filter className="text-[#FF8500] mr-2" size={20} />
              <span className="font-semibold text-[#0A1D37]">
                {filteredPlayers.length} Players
              </span>
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => {
            const team = teams.find(t => t.id === player.teamId);
            return (
              <div
                key={player.id}
                onClick={() => onPlayerClick(player)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={player.image || '/api/placeholder/60/60'}
                      alt={player.name}
                      className="w-15 h-15 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1D37] text-lg">{player.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{team?.logo}</span>
                        <span className="text-sm text-gray-600">{team?.city} {team?.name}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 text-sm font-semibold bg-[#FF8500] text-white rounded-full">
                      {player.position}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Age {player.age}</div>
                      <div className="text-sm text-gray-600">{player.height}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center bg-gray-50 p-2 rounded">
                      <div className="text-lg font-bold text-[#0A1D37]">{player.ppg}</div>
                      <div className="text-xs text-gray-600">PPG</div>
                    </div>
                    <div className="text-center bg-gray-50 p-2 rounded">
                      <div className="text-lg font-bold text-[#0A1D37]">{player.rpg}</div>
                      <div className="text-xs text-gray-600">RPG</div>
                    </div>
                    <div className="text-center bg-gray-50 p-2 rounded">
                      <div className="text-lg font-bold text-[#0A1D37]">{player.apg}</div>
                      <div className="text-xs text-gray-600">APG</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-600">
                      Value: {player.value}/10
                    </div>
                    <div className="text-sm font-semibold text-[#FF8500]">
                      ${(player.salary / 1000000).toFixed(1)}M
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className={`px-2 py-1 text-xs font-semibold text-white rounded ${getDraftRoundColor(player.draftRound)}`}>
                      {getDraftRoundDisplay(player.draftRound)}
                    </span>
                    <div className="text-lg font-bold text-[#FF8500]">
                      {player.capHit} pts
                    </div>
                  </div>

                  {player.awards.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="text-xs text-[#FF8500] font-semibold">
                        🏆 {player.awards[0]}
                        {player.awards.length > 1 && ` +${player.awards.length - 1} more`}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No players found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
