import React, { useState } from 'react';
import { Shuffle, Users, Trophy } from 'lucide-react';
import { teams } from '../data/teams';
import { players } from '../data/players';

export function DraftPage() {
  const [draftOrder, setDraftOrder] = useState<string[]>([]);
  const [currentPick, setCurrentPick] = useState(1);
  const [draftedPlayers, setDraftedPlayers] = useState<string[]>([]);

  const generateDraftOrder = () => {
    // Reverse standings order for draft (worst teams pick first)
    const sortedTeams = [...teams].sort((a, b) => a.wins - b.wins);
    const order: string[] = [];
    
    // 3 rounds of picks
    for (let round = 1; round <= 3; round++) {
      if (round % 2 === 1) {
        // Odd rounds: worst to best
        order.push(...sortedTeams.map(team => team.id));
      } else {
        // Even rounds: best to worst
        order.push(...sortedTeams.reverse().map(team => team.id));
      }
    }
    
    setDraftOrder(order);
    setCurrentPick(1);
    setDraftedPlayers([]);
  };

  const availablePlayers = players.filter(player => !draftedPlayers.includes(player.id));
  const currentTeam = draftOrder.length > 0 ? teams.find(t => t.id === draftOrder[currentPick - 1]) : null;

  const draftPlayer = (playerId: string) => {
    if (currentPick <= draftOrder.length) {
      setDraftedPlayers([...draftedPlayers, playerId]);
      setCurrentPick(currentPick + 1);
    }
  };

  const getDraftResults = () => {
    const results: { [teamId: string]: string[] } = {};
    draftOrder.forEach(teamId => {
      if (!results[teamId]) results[teamId] = [];
    });
    
    draftedPlayers.forEach((playerId, index) => {
      const teamId = draftOrder[index];
      if (teamId && results[teamId]) {
        results[teamId].push(playerId);
      }
    });
    
    return results;
  };

  const draftResults = getDraftResults();

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">Draft Board</h1>
          <p className="text-gray-600">Simulate the U3BL draft process</p>
        </div>

        {/* Draft Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={generateDraftOrder}
                className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                <Shuffle className="mr-2" size={20} />
                Generate Draft Order
              </button>
              {draftOrder.length > 0 && (
                <div className="text-sm text-gray-600">
                  Total Picks: {draftOrder.length} | Completed: {draftedPlayers.length}
                </div>
              )}
            </div>
            
            {currentTeam && currentPick <= draftOrder.length && (
              <div className="bg-[#0A1D37] text-white px-4 py-2 rounded-lg">
                <div className="text-sm">Pick #{currentPick}</div>
                <div className="font-bold">{currentTeam.city} {currentTeam.name}</div>
              </div>
            )}
          </div>
        </div>

        {draftOrder.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Available Players */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white p-4">
                <h2 className="text-xl font-bold flex items-center">
                  <Users className="mr-2" size={20} />
                  Available Players ({availablePlayers.length})
                </h2>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  {availablePlayers
                    .sort((a, b) => b.value - a.value)
                    .slice(0, 20)
                    .map((player) => {
                      const team = teams.find(t => t.id === player.teamId);
                      return (
                        <div
                          key={player.id}
                          onClick={() => currentPick <= draftOrder.length && draftPlayer(player.id)}
                          className={`p-3 border rounded-lg ${
                            currentPick <= draftOrder.length
                              ? 'cursor-pointer hover:bg-gray-50 hover:border-[#FF8500]'
                              : 'opacity-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <img
                                src={player.image || '/api/placeholder/40/40'}
                                alt={player.name}
                                className="w-10 h-10 rounded-full"
                              />
                              <div>
                                <div className="font-medium text-[#0A1D37]">{player.name}</div>
                                <div className="text-sm text-gray-600">
                                  {player.position} • {team?.city} {team?.name}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-[#FF8500]">
                                Value: {player.value}/10
                              </div>
                              <div className="text-xs text-gray-600">
                                {player.ppg} PPG
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Draft Results */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white p-4">
                <h2 className="text-xl font-bold flex items-center">
                  <Trophy className="mr-2" size={20} />
                  Draft Results
                </h2>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  {teams
                    .sort((a, b) => a.wins - b.wins)
                    .map((team) => {
                      const teamPicks = draftResults[team.id] || [];
                      return (
                        <div key={team.id} className="border rounded-lg p-3">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-xl">{team.logo}</span>
                            <div>
                              <div className="font-medium text-[#0A1D37]">
                                {team.city} {team.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {teamPicks.length} picks made
                              </div>
                            </div>
                          </div>
                          {teamPicks.length > 0 && (
                            <div className="space-y-1">
                              {teamPicks.map((playerId, index) => {
                                const player = players.find(p => p.id === playerId);
                                const pickNumber = draftedPlayers.indexOf(playerId) + 1;
                                return (
                                  <div key={playerId} className="text-sm bg-gray-50 p-2 rounded">
                                    <span className="font-medium text-[#FF8500]">
                                      Pick #{pickNumber}:
                                    </span>{' '}
                                    {player?.name} ({player?.position})
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}

        {draftOrder.length === 0 && (
          <div className="text-center py-12">
            <Shuffle className="text-gray-400 mx-auto mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Ready to Draft?</h3>
            <p className="text-gray-500 mb-6">
              Generate a draft order based on current standings to begin the simulation
            </p>
            <button
              onClick={generateDraftOrder}
              className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Draft Simulation
            </button>
          </div>
        )}

        {/* Draft Info */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#0A1D37] mb-4">Draft Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF8500] mb-2">3</div>
              <div className="text-sm text-gray-600">Rounds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF8500] mb-2">36</div>
              <div className="text-sm text-gray-600">Total Picks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF8500] mb-2">Snake</div>
              <div className="text-sm text-gray-600">Draft Format</div>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>
              The draft order is determined by reverse standings order. Teams with fewer wins pick earlier.
              The draft follows a snake format where the order reverses each round.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
