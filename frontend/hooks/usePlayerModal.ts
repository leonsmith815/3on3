import { useState } from 'react';
import { Player } from '../types';

export function usePlayerModal() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const openPlayerModal = (player: Player) => {
    setSelectedPlayer(player);
  };

  const closePlayerModal = () => {
    setSelectedPlayer(null);
  };

  return {
    selectedPlayer,
    openPlayerModal,
    closePlayerModal
  };
}
