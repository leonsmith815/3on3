export interface Team {
  id: string;
  name: string;
  city: string;
  conference: 'Eastern' | 'Western';
  wins: number;
  losses: number;
  points: number;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
  position: 'PG' | 'SG' | 'SF' | 'PF' | 'C' | 'Utility';
  teamId: string;
  ppg: number;
  rpg: number;
  apg: number;
  contractYears: number;
  salary: number; // Keep for display purposes
  capHit: number; // New points-based cap hit
  draftRound: 1 | 2 | 3 | 'FA'; // Draft round or Free Agent
  value: number; // 1-10 rating
  age: number;
  height: string;
  weight: number;
  college?: string;
  awards: string[];
  image?: string;
}

export interface Game {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  date: Date;
  time: string;
  venue: string;
  isCompleted: boolean;
  homeScore?: number;
  awayScore?: number;
  featured?: boolean;
}

export interface DraftPick {
  round: number;
  pick: number;
  teamId: string;
  playerId?: string;
}

export interface Trade {
  id: string;
  fromTeamId: string;
  toTeamId: string;
  playersOffered: string[];
  playersRequested: string[];
  capSpaceOffered?: number;
  capSpaceRequested?: number;
  status: 'pending' | 'accepted' | 'rejected';
  date: Date;
}
