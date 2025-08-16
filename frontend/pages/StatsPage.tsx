import React, { useState } from 'react';
import { players } from '../data/players';
import { teams } from '../data/teams';
import { Player } from '../types';

interface StatsPageProps {
  onPlayerClick: (player: Player) => void;
}

export function StatsPage({ onPlayerClick }: StatsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'ppg' | 'rpg' | 'apg'>('ppg');

  const categories = [
    { key: 'ppg' as const, label: 'Points Per Game', suffix: 'PPG' },
    { key: 'rpg' as const, label: 'Rebounds Per Game', suffix: 'RPG' },
    { key: 'apg' as const, label: 'Assists Per Game', suffix: 'APG' }
  ];

  const sortedPlayers = [...players].sort((a, b) => b[activeCategory] - a[activeCategory]);
  const topPlayers = sortedPlayers.slice(0, 10);

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">League Statistics</h1>
          <p className="text-gray-600">Top performers across all statistical categories</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white'
                    : 'text-gray-600 hover:text-[#FF8500]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Leaders Board */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white p-6">
            <h2 className="text-2xl font-bold">
              {categories.find(c => c.key === activeCategory)?.label} Leaders
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {categories.find(c => c.key === activeCategory)?.suffix}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APG</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topPlayers.map((player, index) => {
                  const team = teams.find(t => t.id === player.teamId);
                  return (
                    <tr
                      key={player.id}
                      onClick={() => onPlayerClick(player)}
                      className="hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-lg font-bold ${
                          index < 3 ? 'text-[#FF8500]' : 'text-gray-600'
                        }`}>
                          {index + 1}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={player.image || '/api/placeholder/40/40'}
                            alt={player.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{player.name}</div>
                            <div className="text-sm text-gray-500">Age {player.age}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{team?.logo}</span>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{team?.city}</div>
                            <div className="text-sm text-gray-500">{team?.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold bg-[#FF8500] text-white rounded-full">
                          {player.position}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-lg font-bold text-[#0A1D37]">
                          {player[activeCategory]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {player.ppg}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {player.rpg}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {player.apg}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-[#0A1D37] mb-4">Highest Scoring Game</h3>
            <div className="text-3xl font-bold text-[#FF8500] mb-2">34.2</div>
            <p className="text-gray-600">Points per game average</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-[#0A1D37] mb-4">Most Assists</h3>
            <div className="text-3xl font-bold text-[#FF8500] mb-2">12</div>
            <p className="text-gray-600">Single game record</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-[#0A1D37] mb-4">Most Rebounds</h3>
            <div className="text-3xl font-bold text-[#FF8500] mb-2">15</div>
            <p className="text-gray-600">Single game record</p>
          </div>
        </div>
      </div>
    </div>
  );
}
