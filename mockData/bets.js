const DATA = [
  {
    home: 'IFK Norrköping',
    away: 'AIK',
    outcome: 'home',
    odds: '1.01',
    league:"Football - Sweden - Allsvenskan",
    date: '14 oct 15.00'
  },
  {
    home: 'Manchester United',
    away: 'Arsenal',
    league: "Football - England - Premier League",
    outcome: 'home',
    odds: '1.87',
    date: '13 oct 20.00'
  },
  {
    home: 'Valencia',
    away: 'Atletico Madrid',
    league: "Football - Spain - La Liga",
    outcome: 'draw',
    odds: '3.40',
    date: '14 oct 14.00'
  },
  {
    home: 'Napoli',
    away: 'Juventus',
    league: "Football - Italy - Serie A",
    outcome: 'home',
    odds: '2.50',
    date: '14 oct 18.00'
  },
  {
    home: 'Manchester City',
    away: 'Chelsea',
    league: "Football - England - Premier League",
    outcome: 'home',
    odds: '1.94',
    date: '12 oct 20.00'
  },
  {
    home: 'Leicester',
    away: 'Everton',
    league: "Football - England - Premier League",
    outcome: 'home',
    odds: '1.67',
    date: '12 oct 20.00'
  }
]

const betHistoryData = [
  {
    game: "Manchester United - Arsenal",
    date: "2018-09-21",
    status: 'upcoming',
    amount: 50,
    bet: "Manchester United wins",
    odds: '1.87'
  },
  {
    game: "Chelsea - Watford",
    date: "2018-08-23",
    status: 'win',
    amount: 50,
    bet: "Chelsea wins",
    odds: '1.43'
  },
  {
    game: "PSG - Lyon",
    date: "2018-08-21",
    status: 'loss',
    amount: 50,
    bet: "PSG wins",
    odds: '1.36'
  },
  {
    game: "Elfsborg - Hammarby",
    date: "2018-06-12",
    status: 'win',
    amount: 50,
    bet: "Hammarby wins",
    odds: '2.62'
  }
]

export { DATA, betHistoryData }