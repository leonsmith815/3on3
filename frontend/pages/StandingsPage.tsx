import React from 'react';
import { teams } from '../data/teams';

export function StandingsPage() {
  const easternTeams = teams
    .filter(team => team.conference === 'Eastern')
    .sort((a, b) => b.wins - a.wins);

  const westernTeams = teams
    .filter(team => team.conference === 'Western')
    .sort((a, b) => b.wins - a.wins);

  const renderConference = (conferenceTeams: typeof teams, conferenceName: string) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white p-4">
        <h2 className="text-xl font-bold">{conferenceName} Conference</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">W</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win %</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {conferenceTeams.map((team, index) => {
              const winPercentage = ((team.wins / (team.wins + team.losses)) * 100).toFixed(1);
              return (
                <tr key={team.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-lg font-bold text-[#FF8500]">{index + 1}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{team.logo}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{team.city}</div>
                        <div className="text-sm text-gray-500">{team.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    {team.wins}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">
                    {team.losses}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {winPercentage}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {team.points.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">League Standings</h1>
          <p className="text-gray-600">Current season standings by conference</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {renderConference(easternTeams, 'Eastern')}
          {renderConference(westernTeams, 'Western')}
        </div>

        {/* Playoff Picture */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#0A1D37] mb-6">Playoff Picture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#FF8500] mb-3">Eastern Conference</h3>
              <div className="space-y-2">
                {easternTeams.slice(0, 4).map((team, index) => (
                  <div key={team.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{team.logo}</span>
                      <span className="font-medium">{team.city} {team.name}</span>
                    </div>
                    <span className="text-sm text-green-600 font-semibold">#{index + 1} Seed</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FF8500] mb-3">Western Conference</h3>
              <div className="space-y-2">
                {westernTeams.slice(0, 4).map((team, index) => (
                  <div key={team.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{team.logo}</span>
                      <span className="font-medium">{team.city} {team.name}</span>
                    </div>
                    <span className="text-sm text-green-600 font-semibold">#{index + 1} Seed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
