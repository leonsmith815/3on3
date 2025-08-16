import React, { useState } from 'react';
import { ArrowRightLeft, DollarSign, Users, CheckCircle, XCircle } from 'lucide-react';
import { teams } from '../data/teams';
import { players } from '../data/players';

export function TradesPage() {
  const [selectedTeam1, setSelectedTeam1] = useState<string>('');
  const [selectedTeam2, setSelectedTeam2] = useState<string>('');
  const [team1Players, setTeam1Players] = useState<string[]>([]);
  const [team2Players, setTeam2Players] = useState<string[]>([]);
  const [tradeResult, setTradeResult] = useState<{
    valid: boolean;
    message: string;
    team1SalaryCap: number;
    team2SalaryCap: number;
  } | null>(null);

  const SALARY_CAP = 4000000; // $4M salary cap

  const getTeamPlayers = (teamId: string) => {
    return players.filter(player => player.teamId === teamId);
  };

  const getPlayersByIds = (playerIds: string[]) => {
    return players.filter(player => playerIds.includes(player.id));
  };

  const calculateSalaryTotal = (playerIds: string[]) => {
    return getPlayersByIds(playerIds).reduce((total, player) => total + player.salary, 0);
  };

  const getTeamSalaryCap = (teamId: string, removePlayers: string[] = [], addPlayers: string[] = []) => {
    const currentPlayers = getTeamPlayers(teamId);
    const remainingPlayers = currentPlayers.filter(p => !removePlayers.includes(p.id));
    const newPlayers = getPlayersByIds(addPlayers);
    
    return [...remainingPlayers, ...newPlayers].reduce((total, player) => total + player.salary, 0);
  };

  const validateTrade = () => {
    if (!selectedTeam1 || !selectedTeam2 || team1Players.length === 0 || team2Players.length === 0) {
      setTradeResult({
        valid: false,
        message: 'Please select teams and players for both sides of the trade.',
        team1SalaryCap: 0,
        team2SalaryCap: 0
      });
      return;
    }

    const team1NewSalary = getTeamSalaryCap(selectedTeam1, team1Players, team2Players);
    const team2NewSalary = getTeamSalaryCap(selectedTeam2, team2Players, team1Players);

    const team1Valid = team1NewSalary <= SALARY_CAP;
    const team2Valid = team2NewSalary <= SALARY_CAP;

    if (team1Valid && team2Valid) {
      setTradeResult({
        valid: true,
        message: 'Trade is valid! Both teams remain under the salary cap.',
        team1SalaryCap: team1NewSalary,
        team2SalaryCap: team2NewSalary
      });
    } else {
      const violatingTeams = [];
      if (!team1Valid) violatingTeams.push(teams.find(t => t.id === selectedTeam1)?.name);
      if (!team2Valid) violatingTeams.push(teams.find(t => t.id === selectedTeam2)?.name);
      
      setTradeResult({
        valid: false,
        message: `Trade violates salary cap for: ${violatingTeams.join(', ')}`,
        team1SalaryCap: team1NewSalary,
        team2SalaryCap: team2NewSalary
      });
    }
  };

  const executeTrade = () => {
    if (tradeResult?.valid) {
      alert('Trade executed successfully! (This is a simulation)');
      // Reset form
      setSelectedTeam1('');
      setSelectedTeam2('');
      setTeam1Players([]);
      setTeam2Players([]);
      setTradeResult(null);
    }
  };

  const togglePlayerSelection = (playerId: string, team: 1 | 2) => {
    if (team === 1) {
      setTeam1Players(prev => 
        prev.includes(playerId) 
          ? prev.filter(id => id !== playerId)
          : [...prev, playerId]
      );
    } else {
      setTeam2Players(prev => 
        prev.includes(playerId) 
          ? prev.filter(id => id !== playerId)
          : [...prev, playerId]
      );
    }
    setTradeResult(null);
  };

  const renderTeamSection = (teamNumber: 1 | 2) => {
    const selectedTeam = teamNumber === 1 ? selectedTeam1 : selectedTeam2;
    const selectedPlayers = teamNumber === 1 ? team1Players : team2Players;
    const setSelectedTeam = teamNumber === 1 ? setSelectedTeam1 : setSelectedTeam2;
    
    const team = teams.find(t => t.id === selectedTeam);
    const teamPlayers = selectedTeam ? getTeamPlayers(selectedTeam) : [];
    const selectedPlayerObjects = getPlayersByIds(selectedPlayers);
    const totalSalary = calculateSalaryTotal(selectedPlayers);

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#0A1D37] mb-4">
          Team {teamNumber}
        </h3>
        
        {/* Team Selection */}
        <select
          value={selectedTeam}
          onChange={(e) => {
            setSelectedTeam(e.target.value);
            if (teamNumber === 1) setTeam1Players([]);
            else setTeam2Players([]);
            setTradeResult(null);
          }}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8500] focus:border-transparent"
        >
          <option value="">Select a team...</option>
          {teams.map(team => (
            <option key={team.id} value={team.id}>
              {team.city} {team.name}
            </option>
          ))}
        </select>

        {team && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{team.logo}</span>
              <div>
                <div className="font-bold text-[#0A1D37]">{team.city} {team.name}</div>
                <div className="text-sm text-gray-600">
                  Current Salary: ${getTeamSalaryCap(team.id).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Player Selection */}
        {teamPlayers.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-[#0A1D37] mb-2">Available Players:</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {teamPlayers.map(player => (
                <div
                  key={player.id}
                  onClick={() => togglePlayerSelection(player.id, teamNumber)}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedPlayers.includes(player.id)
                      ? 'border-[#FF8500] bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{player.name}</div>
                      <div className="text-sm text-gray-600">
                        {player.position} • {player.ppg} PPG
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#FF8500]">
                        ${player.salary.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600">
                        {player.contractYears}yr contract
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Players Summary */}
        {selectedPlayerObjects.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-[#0A1D37] mb-2">Trading Away:</h4>
            <div className="space-y-2">
              {selectedPlayerObjects.map(player => (
                <div key={player.id} className="flex justify-between items-center text-sm">
                  <span>{player.name} ({player.position})</span>
                  <span className="font-medium">${player.salary.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-2 pt-2 flex justify-between font-bold">
              <span>Total Salary:</span>
              <span className="text-[#FF8500]">${totalSalary.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">Trade Center</h1>
          <p className="text-gray-600">Simulate trades with salary cap management</p>
        </div>

        {/* Salary Cap Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <DollarSign className="text-[#FF8500] mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-[#0A1D37]">${(SALARY_CAP / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-gray-600">Salary Cap</div>
            </div>
            <div className="text-center">
              <Users className="text-[#FF8500] mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-[#0A1D37]">6</div>
              <div className="text-sm text-gray-600">Players per Team</div>
            </div>
          </div>
        </div>

        {/* Trade Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {renderTeamSection(1)}
          {renderTeamSection(2)}
        </div>

        {/* Trade Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={validateTrade}
                className="bg-[#0A1D37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center"
              >
                <ArrowRightLeft className="mr-2" size={20} />
                Validate Trade
              </button>
              
              {tradeResult?.valid && (
                <button
                  onClick={executeTrade}
                  className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                >
                  <CheckCircle className="mr-2" size={20} />
                  Execute Trade
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Trade Result */}
        {tradeResult && (
          <div className={`rounded-lg shadow-lg p-6 mb-8 ${
            tradeResult.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center space-x-3 mb-4">
              {tradeResult.valid ? (
                <CheckCircle className="text-green-600" size={24} />
              ) : (
                <XCircle className="text-red-600" size={24} />
              )}
              <h3 className={`text-lg font-bold ${
                tradeResult.valid ? 'text-green-800' : 'text-red-800'
              }`}>
                Trade Validation Result
              </h3>
            </div>
            
            <p className={`mb-4 ${
              tradeResult.valid ? 'text-green-700' : 'text-red-700'
            }`}>
              {tradeResult.message}
            </p>

            {selectedTeam1 && selectedTeam2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A1D37] mb-2">
                    {teams.find(t => t.id === selectedTeam1)?.name} New Salary
                  </h4>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className={`font-bold ${
                      tradeResult.team1SalaryCap <= SALARY_CAP ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${tradeResult.team1SalaryCap.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Cap Space: ${(SALARY_CAP - tradeResult.team1SalaryCap).toLocaleString()}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A1D37] mb-2">
                    {teams.find(t => t.id === selectedTeam2)?.name} New Salary
                  </h4>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className={`font-bold ${
                      tradeResult.team2SalaryCap <= SALARY_CAP ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${tradeResult.team2SalaryCap.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Cap Space: ${(SALARY_CAP - tradeResult.team2SalaryCap).toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Trade Rules */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#0A1D37] mb-4">Trade Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#FF8500] mb-2">Salary Cap</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Teams must stay under ${(SALARY_CAP / 1000000).toFixed(1)}M salary cap</li>
                <li>• All player salaries count toward the cap</li>
                <li>• Trades cannot put teams over the cap</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#FF8500] mb-2">Trade Requirements</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Both teams must trade at least one player</li>
                <li>• Players can have multi-year contracts</li>
                <li>• Salary matching is required for cap compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
