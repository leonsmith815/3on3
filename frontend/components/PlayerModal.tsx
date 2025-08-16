import React from 'react';
import { X, Trophy, Calendar, DollarSign, Ruler, Weight } from 'lucide-react';
import { Player } from '../types';
import { teams } from '../data/teams';

interface PlayerModalProps {
  player: Player;
  onClose: () => void;
}

export function PlayerModal({ player, onClose }: PlayerModalProps) {
  const team = teams.find(t => t.id === player.teamId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white p-6 rounded-t-lg">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <img
                src={player.image || '/api/placeholder/100/100'}
                alt={player.name}
                className="w-20 h-20 rounded-full border-4 border-white"
              />
              <div>
                <h2 className="text-2xl font-bold">{player.name}</h2>
                <p className="text-lg opacity-90">#{player.position}</p>
                <p className="text-sm opacity-75">{team?.city} {team?.name}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#0A1D37]">{player.ppg}</div>
                <div className="text-sm text-gray-600">PPG</div>
              </div>
              <div className="text-center bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#0A1D37]">{player.rpg}</div>
                <div className="text-sm text-gray-600">RPG</div>
              </div>
              <div className="text-center bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#0A1D37]">{player.apg}</div>
                <div className="text-sm text-gray-600">APG</div>
              </div>
            </div>

            {/* Player Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="text-[#FF8500]" size={16} />
                  <span className="text-sm text-gray-600">Age:</span>
                  <span className="font-medium">{player.age}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Ruler className="text-[#FF8500]" size={16} />
                  <span className="text-sm text-gray-600">Height:</span>
                  <span className="font-medium">{player.height}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Weight className="text-[#FF8500]" size={16} />
                  <span className="text-sm text-gray-600">Weight:</span>
                  <span className="font-medium">{player.weight} lbs</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-[#FF8500]" size={16} />
                  <span className="text-sm text-gray-600">Salary:</span>
                  <span className="font-medium">${(player.salary / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-[#FF8500]" size={16} />
                  <span className="text-sm text-gray-600">Contract:</span>
                  <span className="font-medium">{player.contractYears} years</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Value:</span>
                  <div className="flex space-x-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < player.value ? 'bg-[#FF8500]' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* College */}
            {player.college && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#0A1D37] mb-2">Education</h3>
                <p className="text-gray-700">{player.college}</p>
              </div>
            )}

            {/* Awards */}
            {player.awards.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-[#0A1D37] mb-3 flex items-center">
                  <Trophy className="text-[#FF8500] mr-2" size={20} />
                  Awards & Achievements
                </h3>
                <div className="space-y-2">
                  {player.awards.map((award, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {award}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
