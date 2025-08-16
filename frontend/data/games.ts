import { Game } from '../types';

export const games: Game[] = [
  {
    id: 'g1',
    homeTeamId: 'eagles',
    awayTeamId: 'longhorns',
    date: new Date('2024-02-15'),
    time: '8:00 PM',
    venue: 'Phoenix Arena',
    isCompleted: false,
    featured: true
  },
  {
    id: 'g2',
    homeTeamId: 'gladiators',
    awayTeamId: 'thunder',
    date: new Date('2024-02-16'),
    time: '7:30 PM',
    venue: 'Crypto.com Arena',
    isCompleted: false
  },
  {
    id: 'g3',
    homeTeamId: 'shamrocks',
    awayTeamId: 'falcons',
    date: new Date('2024-02-17'),
    time: '6:00 PM',
    venue: 'TD Garden',
    isCompleted: false
  },
  {
    id: 'g4',
    homeTeamId: 'wolves',
    awayTeamId: 'crush',
    date: new Date('2024-02-18'),
    time: '8:30 PM',
    venue: 'Target Center',
    isCompleted: false
  },
  {
    id: 'g5',
    homeTeamId: 'blaze',
    awayTeamId: 'bulldawgs',
    date: new Date('2024-02-19'),
    time: '7:00 PM',
    venue: 'FTX Arena',
    isCompleted: false
  },
  {
    id: 'g6',
    homeTeamId: 'hornets',
    awayTeamId: 'stags',
    date: new Date('2024-02-20'),
    time: '7:30 PM',
    venue: 'Spectrum Center',
    isCompleted: false
  }
];
