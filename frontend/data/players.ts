import { Player } from '../types';

export const players: Player[] = [
  // Longhorns
  {
    id: 'p1',
    name: 'Marcus Johnson',
    position: 'PG',
    teamId: 'longhorns',
    ppg: 24.5,
    rpg: 5.2,
    apg: 8.7,
    contractYears: 3,
    salary: 1700000,
    capHit: 20,
    draftRound: 1,
    value: 9,
    age: 26,
    height: '6\'2"',
    weight: 185,
    college: 'University of Texas',
    awards: ['All-Star 2023', 'Assists Leader 2022'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p2',
    name: 'Tyler Rodriguez',
    position: 'SG',
    teamId: 'longhorns',
    ppg: 19.8,
    rpg: 4.1,
    apg: 3.5,
    contractYears: 2,
    salary: 1300000,
    capHit: 8,
    draftRound: 2,
    value: 8,
    age: 24,
    height: '6\'4"',
    weight: 195,
    college: 'Texas A&M',
    awards: ['Rookie of the Year 2022'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p3',
    name: 'DeAndre Williams',
    position: 'SF',
    teamId: 'longhorns',
    ppg: 16.3,
    rpg: 7.8,
    apg: 4.2,
    contractYears: 4,
    salary: 1440000,
    capHit: 5,
    draftRound: 3,
    value: 8,
    age: 28,
    height: '6\'7"',
    weight: 220,
    college: 'Baylor',
    awards: ['Defensive Player of the Year 2023'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p4',
    name: 'Carlos Martinez',
    position: 'PF',
    teamId: 'longhorns',
    ppg: 14.7,
    rpg: 9.5,
    apg: 2.1,
    contractYears: 1,
    salary: 1160000,
    capHit: 3,
    draftRound: 'FA',
    value: 7,
    age: 30,
    height: '6\'9"',
    weight: 240,
    college: 'Houston',
    awards: ['Rebounds Leader 2021'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p5',
    name: 'Jamal Thompson',
    position: 'C',
    teamId: 'longhorns',
    ppg: 12.1,
    rpg: 8.9,
    apg: 1.8,
    contractYears: 2,
    salary: 1040000,
    capHit: 3,
    draftRound: 'FA',
    value: 7,
    age: 27,
    height: '6\'11"',
    weight: 260,
    college: 'Texas Tech',
    awards: [],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p6',
    name: 'Alex Chen',
    position: 'Utility',
    teamId: 'longhorns',
    ppg: 8.9,
    rpg: 3.4,
    apg: 5.1,
    contractYears: 1,
    salary: 760000,
    capHit: 3,
    draftRound: 'FA',
    value: 6,
    age: 23,
    height: '6\'3"',
    weight: 180,
    college: 'Rice',
    awards: [],
    image: '/api/placeholder/150/150'
  },
  // Eagles
  {
    id: 'p7',
    name: 'Jordan Davis',
    position: 'PG',
    teamId: 'eagles',
    ppg: 26.8,
    rpg: 4.9,
    apg: 9.2,
    contractYears: 4,
    salary: 1900000,
    capHit: 20,
    draftRound: 1,
    value: 10,
    age: 25,
    height: '6\'1"',
    weight: 180,
    college: 'Arizona State',
    awards: ['MVP 2023', 'All-Star 2022', 'All-Star 2023'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p8',
    name: 'Kevin Brooks',
    position: 'SG',
    teamId: 'eagles',
    ppg: 22.4,
    rpg: 5.7,
    apg: 4.1,
    contractYears: 3,
    salary: 1560000,
    capHit: 8,
    draftRound: 2,
    value: 9,
    age: 27,
    height: '6\'5"',
    weight: 205,
    college: 'UCLA',
    awards: ['All-Star 2023', 'Scoring Champion 2022'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p9',
    name: 'Michael Foster',
    position: 'SF',
    teamId: 'eagles',
    ppg: 18.6,
    rpg: 8.2,
    apg: 3.8,
    contractYears: 2,
    salary: 1360000,
    capHit: 5,
    draftRound: 3,
    value: 8,
    age: 26,
    height: '6\'8"',
    weight: 225,
    college: 'Arizona',
    awards: ['All-Star 2023'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p10',
    name: 'Robert Jackson',
    position: 'PF',
    teamId: 'eagles',
    ppg: 15.9,
    rpg: 10.1,
    apg: 2.5,
    contractYears: 3,
    salary: 1240000,
    capHit: 3,
    draftRound: 'FA',
    value: 8,
    age: 29,
    height: '6\'10"',
    weight: 245,
    college: 'USC',
    awards: ['Rebounds Leader 2023'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p11',
    name: 'Anthony White',
    position: 'C',
    teamId: 'eagles',
    ppg: 13.7,
    rpg: 9.8,
    apg: 1.9,
    contractYears: 2,
    salary: 1120000,
    capHit: 3,
    draftRound: 'FA',
    value: 7,
    age: 28,
    height: '7\'0"',
    weight: 270,
    college: 'Stanford',
    awards: [],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p12',
    name: 'Luis Gonzalez',
    position: 'Utility',
    teamId: 'eagles',
    ppg: 10.2,
    rpg: 4.1,
    apg: 6.3,
    contractYears: 1,
    salary: 840000,
    capHit: 3,
    draftRound: 'FA',
    value: 6,
    age: 24,
    height: '6\'4"',
    weight: 190,
    college: 'UNLV',
    awards: [],
    image: '/api/placeholder/150/150'
  },
  // Gladiators
  {
    id: 'p13',
    name: 'Darius Mitchell',
    position: 'PG',
    teamId: 'gladiators',
    ppg: 23.1,
    rpg: 5.4,
    apg: 8.9,
    contractYears: 3,
    salary: 1640000,
    capHit: 20,
    draftRound: 1,
    value: 9,
    age: 27,
    height: '6\'3"',
    weight: 190,
    college: 'USC',
    awards: ['All-Star 2022', 'All-Star 2023'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p14',
    name: 'Brandon Lee',
    position: 'SG',
    teamId: 'gladiators',
    ppg: 20.7,
    rpg: 4.8,
    apg: 3.7,
    contractYears: 2,
    salary: 1400000,
    capHit: 8,
    draftRound: 2,
    value: 8,
    age: 25,
    height: '6\'6"',
    weight: 200,
    college: 'UCLA',
    awards: ['All-Star 2023'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p15',
    name: 'Isaiah Carter',
    position: 'SF',
    teamId: 'gladiators',
    ppg: 17.9,
    rpg: 7.1,
    apg: 4.5,
    contractYears: 4,
    salary: 1500000,
    capHit: 5,
    draftRound: 3,
    value: 8,
    age: 26,
    height: '6\'7"',
    weight: 215,
    college: 'Cal',
    awards: [],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p16',
    name: 'Terrell Washington',
    position: 'PF',
    teamId: 'gladiators',
    ppg: 16.2,
    rpg: 9.7,
    apg: 2.8,
    contractYears: 2,
    salary: 1280000,
    capHit: 3,
    draftRound: 'FA',
    value: 7,
    age: 28,
    height: '6\'9"',
    weight: 235,
    college: 'Pepperdine',
    awards: [],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p17',
    name: 'Marcus Robinson',
    position: 'C',
    teamId: 'gladiators',
    ppg: 14.5,
    rpg: 10.3,
    apg: 2.1,
    contractYears: 3,
    salary: 1180000,
    capHit: 3,
    draftRound: 'FA',
    value: 7,
    age: 29,
    height: '6\'11"',
    weight: 255,
    college: 'Long Beach State',
    awards: [],
    image: '/api/placeholder/150/150'
  },
  {
    id: 'p18',
    name: 'Tony Nguyen',
    position: 'Utility',
    teamId: 'gladiators',
    ppg: 9.8,
    rpg: 3.9,
    apg: 5.7,
    contractYears: 1,
    salary: 800000,
    capHit: 3,
    draftRound: 'FA',
    value: 6,
    age: 22,
    height: '6\'2"',
    weight: 175,
    college: 'UC Irvine',
    awards: [],
    image: '/api/placeholder/150/150'
  }
];

// Generate remaining players for other teams with updated cap hit structure
const generatePlayersForTeam = (teamId: string, startId: number): Player[] => {
  const positions: Player['position'][] = ['PG', 'SG', 'SF', 'PF', 'C', 'Utility'];
  const firstNames = ['James', 'Michael', 'Robert', 'John', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  
  // Cap hit based on draft round
  const getCapHitForRound = (round: Player['draftRound']) => {
    switch (round) {
      case 1: return 20;
      case 2: return 8;
      case 3: return 5;
      case 'FA': return 3;
      default: return 3;
    }
  };

  // Distribute draft rounds across positions
  const draftRounds: Player['draftRound'][] = [1, 2, 3, 'FA', 'FA', 'FA'];
  
  return positions.map((position, index) => {
    const value = Math.floor(Math.random() * 4) + 6; // 6-9 value range
    const draftRound = draftRounds[index];
    const capHit = getCapHitForRound(draftRound);
    
    return {
      id: `p${startId + index}`,
      name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
      position,
      teamId,
      ppg: Math.round((Math.random() * 20 + 8) * 10) / 10,
      rpg: Math.round((Math.random() * 8 + 2) * 10) / 10,
      apg: Math.round((Math.random() * 6 + 1) * 10) / 10,
      contractYears: Math.floor(Math.random() * 4) + 1,
      salary: Math.floor(Math.random() * 500000) + 300000,
      capHit,
      draftRound,
      value,
      age: Math.floor(Math.random() * 10) + 22,
      height: `6'${Math.floor(Math.random() * 12)}"`,
      weight: Math.floor(Math.random() * 60) + 180,
      college: 'State University',
      awards: [],
      image: '/api/placeholder/150/150'
    };
  });
};

// Add players for remaining teams
const remainingTeams = ['falcons', 'blaze', 'shamrocks', 'bulldawgs', 'stags', 'thunder', 'wolves', 'crush', 'hornets'];
let currentId = 19;

remainingTeams.forEach(teamId => {
  players.push(...generatePlayersForTeam(teamId, currentId));
  currentId += 6;
});
