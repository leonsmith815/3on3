import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { StandingsPage } from './pages/StandingsPage';
import { StatsPage } from './pages/StatsPage';
import { SchedulePage } from './pages/SchedulePage';
import { TeamsPage } from './pages/TeamsPage';
import { PlayersPage } from './pages/PlayersPage';
import { DraftPage } from './pages/DraftPage';
import { TradesPage } from './pages/TradesPage';
import { DanceTeamPage } from './pages/DanceTeamPage';
import { PlayerModal } from './components/PlayerModal';
import { usePlayerModal } from './hooks/usePlayerModal';

export default function App() {
  const { selectedPlayer, openPlayerModal, closePlayerModal } = usePlayerModal();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage onPlayerClick={openPlayerModal} />} />
          <Route path="/standings" element={<StandingsPage />} />
          <Route path="/stats" element={<StatsPage onPlayerClick={openPlayerModal} />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/teams" element={<TeamsPage onPlayerClick={openPlayerModal} />} />
          <Route path="/players" element={<PlayersPage onPlayerClick={openPlayerModal} />} />
          <Route path="/draft" element={<DraftPage />} />
          <Route path="/trades" element={<TradesPage />} />
          <Route path="/dance-team" element={<DanceTeamPage />} />
        </Routes>
        {selectedPlayer && (
          <PlayerModal player={selectedPlayer} onClose={closePlayerModal} />
        )}
      </div>
    </Router>
  );
}
