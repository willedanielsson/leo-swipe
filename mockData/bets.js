const DATA = [
  {
    home: 'IFK Norrköping',
    away: 'AIK',
    outcome: 'home',
    odds: '1.01',
    league:"Football - Sweden - Allsvenskan"
  },
  {
    home: 'Manchester United',
    away: 'Arsenal',
    league: "Football - England - Premier League",
    outcome: 'home',
    odds: '1.87'
  },
  {
    home: 'Valencia',
    away: 'Atletico Madrid',
    league: "Football - Spain - La Liga",
    outcome: 'draw',
    odds: '3.40'
  }
]

const betHistoryData = [
  {
    game: "Manchester United vs Arsenal",
    date: "2018-09-21",
    status: 'upcoming'
  },
  {
    game: "Chelsea vs Watford",
    date: "2018-08-23",
    status: 'win'
  },
  {
    game: "PSG vs Lyon",
    date: "2018-08-21",
    status: 'loss'
  },
  {
    game: "Elfsborg vs Hammarby",
    date: "2018-06-12",
    status: 'win'
  }
]

export { DATA, betHistoryData }