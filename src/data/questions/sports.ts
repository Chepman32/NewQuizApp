import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const sportsQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'spo1',
    text: 'How many players are on a soccer team on the field?',
    answers: A('spo1', '11', ['9', '10', '12']),
    level: 1,
  },
  {
    id: 'spo2',
    text: 'How many players are on a basketball team on the court?',
    answers: A('spo2', '5', ['6', '7', '4']),
    level: 1,
  },
  {
    id: 'spo3',
    text: 'What sport uses a bat and ball with bases?',
    answers: A('spo3', 'Baseball', ['Soccer', 'Basketball', 'Football']),
    level: 1,
  },
  {
    id: 'spo4',
    text: 'What sport is played at Wimbledon?',
    answers: A('spo4', 'Tennis', ['Golf', 'Cricket', 'Rugby']),
    level: 1,
  },
  {
    id: 'spo5',
    text: 'What is the most popular sport in the world?',
    answers: A('spo5', 'Soccer/Football', ['Basketball', 'Cricket', 'Tennis']),
    level: 1,
  },
  {
    id: 'spo6',
    text: 'How many points is a touchdown worth in American football?',
    answers: A('spo6', '6', ['7', '3', '1']),
    level: 1,
  },
  {
    id: 'spo7',
    text: 'What sport is the Super Bowl for?',
    answers: A('spo7', 'American Football', [
      'Baseball',
      'Basketball',
      'Hockey',
    ]),
    level: 1,
  },
  {
    id: 'spo8',
    text: 'What sport is the World Series for?',
    answers: A('spo8', 'Baseball', [
      'American Football',
      'Basketball',
      'Hockey',
    ]),
    level: 1,
  },
  {
    id: 'spo9',
    text: 'What sport is the NBA for?',
    answers: A('spo9', 'Basketball', [
      'Baseball',
      'American Football',
      'Hockey',
    ]),
    level: 1,
  },
  {
    id: 'spo10',
    text: 'What sport is the NHL for?',
    answers: A('spo10', 'Hockey', [
      'Basketball',
      'Baseball',
      'American Football',
    ]),
    level: 1,
  },
  {
    id: 'spo11',
    text: 'What sport uses a puck?',
    answers: A('spo11', 'Hockey', ['Soccer', 'Basketball', 'Tennis']),
    level: 1,
  },
  {
    id: 'spo12',
    text: 'What sport is played on a court with a net in the middle?',
    answers: A('spo12', 'Tennis', ['Soccer', 'Baseball', 'Golf']),
    level: 1,
  },
  {
    id: 'spo13',
    text: 'What sport uses clubs and holes?',
    answers: A('spo13', 'Golf', ['Tennis', 'Baseball', 'Hockey']),
    level: 1,
  },
  {
    id: 'spo14',
    text: 'How many holes are in a standard golf course?',
    answers: A('spo14', '18', ['9', '12', '21']),
    level: 1,
  },
  {
    id: 'spo15',
    text: 'What is a perfect score in bowling?',
    answers: A('spo15', '300', ['200', '250', '350']),
    level: 1,
  },
  {
    id: 'spo16',
    text: 'How many pins are in bowling?',
    answers: A('spo16', '10', ['8', '9', '12']),
    level: 1,
  },
  {
    id: 'spo17',
    text: "What sport is the Olympics' 100m sprint?",
    answers: A('spo17', 'Track and Field/Athletics', [
      'Swimming',
      'Cycling',
      'Gymnastics',
    ]),
    level: 1,
  },
  {
    id: 'spo18',
    text: 'What sport is Michael Phelps famous for?',
    answers: A('spo18', 'Swimming', [
      'Track and Field',
      'Gymnastics',
      'Diving',
    ]),
    level: 1,
  },
  {
    id: 'spo19',
    text: 'What sport is Usain Bolt famous for?',
    answers: A('spo19', 'Sprinting/Track', [
      'Swimming',
      'Long Jump',
      'Marathon',
    ]),
    level: 1,
  },
  {
    id: 'spo20',
    text: 'What sport is Serena Williams famous for?',
    answers: A('spo20', 'Tennis', ['Golf', 'Swimming', 'Gymnastics']),
    level: 1,
  },
  {
    id: 'spo21',
    text: 'What sport is Tiger Woods famous for?',
    answers: A('spo21', 'Golf', ['Tennis', 'Baseball', 'Basketball']),
    level: 1,
  },
  {
    id: 'spo22',
    text: 'What sport is Michael Jordan famous for?',
    answers: A('spo22', 'Basketball', [
      'Baseball',
      'American Football',
      'Golf',
    ]),
    level: 1,
  },
  {
    id: 'spo23',
    text: 'What sport is Lionel Messi famous for?',
    answers: A('spo23', 'Soccer/Football', ['Basketball', 'Tennis', 'Golf']),
    level: 1,
  },
  {
    id: 'spo24',
    text: 'What sport is Cristiano Ronaldo famous for?',
    answers: A('spo24', 'Soccer/Football', ['Basketball', 'Tennis', 'Golf']),
    level: 1,
  },
  {
    id: 'spo25',
    text: 'What sport is Tom Brady famous for?',
    answers: A('spo25', 'American Football', [
      'Baseball',
      'Basketball',
      'Hockey',
    ]),
    level: 1,
  },
  {
    id: 'spo26',
    text: 'What is the FIFA World Cup for?',
    answers: A('spo26', 'Soccer/Football', ['Rugby', 'Cricket', 'Basketball']),
    level: 2,
  },
  {
    id: 'spo27',
    text: 'How often is the FIFA World Cup held?',
    answers: A('spo27', 'Every 4 years', [
      'Every 2 years',
      'Every year',
      'Every 3 years',
    ]),
    level: 2,
  },
  {
    id: 'spo28',
    text: 'How often are the Summer Olympics held?',
    answers: A('spo28', 'Every 4 years', [
      'Every 2 years',
      'Every year',
      'Every 3 years',
    ]),
    level: 2,
  },
  {
    id: 'spo29',
    text: 'What is a hat trick in soccer?',
    answers: A('spo29', '3 goals by one player', [
      '2 goals',
      '4 goals',
      '5 goals',
    ]),
    level: 2,
  },
  {
    id: 'spo30',
    text: 'What is a grand slam in tennis?',
    answers: A('spo30', 'Winning all 4 major tournaments', [
      'Winning 1 tournament',
      'Winning 2 tournaments',
      'Winning 3 tournaments',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'spo31',
    text: 'What are the four Grand Slam tennis tournaments?',
    answers: A('spo31', 'Australian Open, French Open, Wimbledon, US Open', [
      'Only Wimbledon and US Open',
      'Only European tournaments',
      'Only American tournaments',
    ]),
    level: 3,
  },
  {
    id: 'spo32',
    text: 'What is the marathon distance?',
    answers: A('spo32', '42.195 km (26.2 miles)', ['40 km', '50 km', '30 km']),
    level: 3,
  },
  {
    id: 'spo33',
    text: 'What is the decathlon?',
    answers: A('spo33', '10 track and field events', [
      '5 events',
      '7 events',
      '15 events',
    ]),
    level: 3,
  },
  {
    id: 'spo34',
    text: 'What is the heptathlon?',
    answers: A('spo34', '7 track and field events', [
      '5 events',
      '10 events',
      '3 events',
    ]),
    level: 3,
  },
  {
    id: 'spo35',
    text: 'What is the triple jump?',
    answers: A('spo35', 'Hop, step, and jump', [
      'Three long jumps',
      'Three high jumps',
      'Three pole vaults',
    ]),
    level: 3,
  },
  {
    id: 'spo36',
    text: 'What is a birdie in golf?',
    answers: A('spo36', 'One under par', [
      'One over par',
      'Two under par',
      'Even par',
    ]),
    level: 3,
  },
  {
    id: 'spo37',
    text: 'What is an eagle in golf?',
    answers: A('spo37', 'Two under par', [
      'One under par',
      'Three under par',
      'One over par',
    ]),
    level: 3,
  },
  {
    id: 'spo38',
    text: 'What is a bogey in golf?',
    answers: A('spo38', 'One over par', [
      'One under par',
      'Two over par',
      'Even par',
    ]),
    level: 3,
  },
  {
    id: 'spo39',
    text: 'What is an albatross in golf?',
    answers: A('spo39', 'Three under par', [
      'Two under par',
      'Four under par',
      'One under par',
    ]),
    level: 4,
  },
  {
    id: 'spo40',
    text: 'What is a hole-in-one called in golf?',
    answers: A('spo40', 'Ace', ['Eagle', 'Birdie', 'Albatross']),
    level: 4,
  },
  {
    id: 'spo41',
    text: 'What is the Ryder Cup?',
    answers: A('spo41', 'Golf competition between Europe and USA', [
      'Tennis tournament',
      'Soccer tournament',
      'Rugby tournament',
    ]),
    level: 4,
  },
  {
    id: 'spo42',
    text: 'What is the Tour de France?',
    answers: A('spo42', 'Cycling race', [
      'Running race',
      'Car race',
      'Swimming race',
    ]),
    level: 4,
  },
  {
    id: 'spo43',
    text: 'What is Formula 1?',
    answers: A('spo43', 'Auto racing series', [
      'Cycling series',
      'Running series',
      'Swimming series',
    ]),
    level: 4,
  },
  {
    id: 'spo44',
    text: 'What is the Indianapolis 500?',
    answers: A('spo44', 'Auto race', [
      'Cycling race',
      'Running race',
      'Horse race',
    ]),
    level: 4,
  },
  {
    id: 'spo45',
    text: 'What is the Kentucky Derby?',
    answers: A('spo45', 'Horse race', [
      'Auto race',
      'Cycling race',
      'Running race',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'spo46',
    text: 'What is the Triple Crown in horse racing?',
    answers: A('spo46', 'Kentucky Derby, Preakness, Belmont Stakes', [
      'Three races in one day',
      'Three wins in a row',
      'Three different horses',
    ]),
    level: 5,
  },
  {
    id: 'spo47',
    text: 'What is the Ironman triathlon distance?',
    answers: A('spo47', '2.4 mi swim, 112 mi bike, 26.2 mi run', [
      'Half those distances',
      'Double those distances',
      'Only running',
    ]),
    level: 5,
  },
  {
    id: 'spo48',
    text: 'What is the offside rule in soccer?',
    answers: A(
      'spo48',
      'Attacker behind second-to-last defender when ball played',
      ['Behind goalkeeper', "In opponent's half", 'Near the goal'],
    ),
    level: 5,
  },
  {
    id: 'spo49',
    text: 'What is a perfect game in baseball?',
    answers: A('spo49', 'No batter reaches base', [
      'No runs scored',
      'No hits allowed',
      'Striking out every batter',
    ]),
    level: 5,
  },
  {
    id: 'spo50',
    text: 'What is a no-hitter in baseball?',
    answers: A('spo50', 'No hits allowed', [
      'No runs scored',
      'No walks allowed',
      'No errors',
    ]),
    level: 5,
  },
  {
    id: 'spo51',
    text: 'What is the Cy Young Award?',
    answers: A('spo51', 'Best pitcher in baseball', [
      'Best hitter',
      'Best fielder',
      'Best rookie',
    ]),
    level: 6,
  },
  {
    id: 'spo52',
    text: 'What is the Heisman Trophy?',
    answers: A('spo52', 'Best college football player', [
      'Best NFL player',
      'Best college basketball player',
      'Best college baseball player',
    ]),
    level: 6,
  },
  {
    id: 'spo53',
    text: "What is the Ballon d'Or?",
    answers: A('spo53', 'Best soccer player in the world', [
      'Best team',
      'Best goalkeeper',
      'Best young player',
    ]),
    level: 6,
  },
  {
    id: 'spo54',
    text: 'What is the Davis Cup?',
    answers: A('spo54', "Men's international tennis team competition", [
      "Women's tennis",
      'Golf competition',
      'Soccer competition',
    ]),
    level: 6,
  },
  {
    id: 'spo55',
    text: 'What is the Fed Cup/Billie Jean King Cup?',
    answers: A('spo55', "Women's international tennis team competition", [
      "Men's tennis",
      'Golf competition',
      'Soccer competition',
    ]),
    level: 6,
  },
  {
    id: 'spo56',
    text: 'What is the Ashes?',
    answers: A('spo56', 'Cricket series between England and Australia', [
      'Soccer series',
      'Rugby series',
      'Tennis series',
    ]),
    level: 7,
  },
  {
    id: 'spo57',
    text: 'What is a googly in cricket?',
    answers: A('spo57', 'Leg-spin delivery that turns the other way', [
      'Fast ball',
      'Slow ball',
      'Bouncer',
    ]),
    level: 7,
  },
  {
    id: 'spo58',
    text: 'What is a yorker in cricket?',
    answers: A('spo58', "Ball aimed at batsman's feet", [
      'Ball aimed at head',
      'Slow ball',
      'Spin ball',
    ]),
    level: 7,
  },
  {
    id: 'spo59',
    text: 'What is a century in cricket?',
    answers: A('spo59', '100 runs by a batsman', [
      '100 wickets',
      '100 catches',
      '100 overs',
    ]),
    level: 7,
  },
  {
    id: 'spo60',
    text: 'What is a hat-trick in cricket?',
    answers: A('spo60', '3 wickets in 3 consecutive balls', [
      '3 runs',
      '3 catches',
      '3 sixes',
    ]),
    level: 7,
  },
  {
    id: 'spo61',
    text: 'What is the Duckworth-Lewis method?',
    answers: A('spo61', 'Cricket scoring system for rain-affected matches', [
      'Tennis scoring',
      'Golf scoring',
      'Soccer scoring',
    ]),
    level: 8,
  },
  {
    id: 'spo62',
    text: 'What is the Fosbury Flop?',
    answers: A('spo62', 'High jump technique going over backwards', [
      'Long jump technique',
      'Pole vault technique',
      'Triple jump technique',
    ]),
    level: 8,
  },
  {
    id: 'spo63',
    text: 'What is the Cruyff Turn?',
    answers: A('spo63', 'Soccer dribbling move', [
      'Tennis serve',
      'Golf swing',
      'Basketball move',
    ]),
    level: 8,
  },
  {
    id: 'spo64',
    text: 'What is the Statue of Liberty play?',
    answers: A('spo64', 'American football trick play', [
      'Basketball play',
      'Baseball play',
      'Hockey play',
    ]),
    level: 8,
  },
  {
    id: 'spo65',
    text: 'What is the Triangle Offense?',
    answers: A('spo65', 'Basketball offensive system', [
      'Football system',
      'Soccer system',
      'Hockey system',
    ]),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'spo66',
    text: 'How many players are on a soccer team?',
    answers: A('spo66', '11', ['9', '10', '12']),
    level: 1,
  },
  {
    id: 'spo67',
    text: 'How many players are on a basketball team on court?',
    answers: A('spo67', '5', ['6', '7', '4']),
    level: 1,
  },
  {
    id: 'spo68',
    text: 'What sport uses a bat and ball?',
    answers: A('spo68', 'Baseball', ['Soccer', 'Basketball', 'Swimming']),
    level: 1,
  },
  {
    id: 'spo69',
    text: 'What sport is played in a pool?',
    answers: A('spo69', 'Swimming', ['Soccer', 'Basketball', 'Tennis']),
    level: 1,
  },
  {
    id: 'spo70',
    text: 'What sport uses a racket?',
    answers: A('spo70', 'Tennis', ['Soccer', 'Basketball', 'Swimming']),
    level: 1,
  },
  {
    id: 'spo71',
    text: 'What is a goal in soccer?',
    answers: A('spo71', 'Ball going into net', [
      'Ball going out',
      'Player falling',
      'Referee whistle',
    ]),
    level: 1,
  },
  {
    id: 'spo72',
    text: 'What is a touchdown?',
    answers: A('spo72', 'Scoring in American football', [
      'Scoring in soccer',
      'Scoring in basketball',
      'Scoring in baseball',
    ]),
    level: 1,
  },
  {
    id: 'spo73',
    text: 'What is a home run?',
    answers: A('spo73', 'Hitting ball out of park in baseball', [
      'Running home',
      'Scoring in soccer',
      'Scoring in basketball',
    ]),
    level: 1,
  },
  {
    id: 'spo74',
    text: 'What color is a basketball?',
    answers: A('spo74', 'Orange', ['White', 'Black', 'Blue']),
    level: 1,
  },
  {
    id: 'spo75',
    text: 'What is the Olympics?',
    answers: A('spo75', 'International sports competition', [
      'Music competition',
      'Art competition',
      'Science competition',
    ]),
    level: 1,
  },
  {
    id: 'spo76',
    text: 'What is a referee?',
    answers: A('spo76', 'Official who enforces rules', [
      'Player',
      'Coach',
      'Fan',
    ]),
    level: 2,
  },
  {
    id: 'spo77',
    text: 'What is a coach?',
    answers: A('spo77', 'Person who trains team', ['Player', 'Referee', 'Fan']),
    level: 2,
  },
  {
    id: 'spo78',
    text: 'What is a foul?',
    answers: A('spo78', 'Rule violation', ['Good play', 'Goal', 'Win']),
    level: 2,
  },
  {
    id: 'spo79',
    text: 'What is halftime?',
    answers: A('spo79', 'Break in middle of game', [
      'End of game',
      'Start of game',
      'Overtime',
    ]),
    level: 2,
  },
  {
    id: 'spo80',
    text: 'What is overtime?',
    answers: A('spo80', 'Extra time when tied', [
      'Regular time',
      'Halftime',
      'Warmup',
    ]),
    level: 2,
  },
  {
    id: 'spo81',
    text: 'What is a penalty?',
    answers: A('spo81', 'Punishment for rule violation', [
      'Reward',
      'Goal',
      'Win',
    ]),
    level: 2,
  },
  {
    id: 'spo82',
    text: 'What is a stadium?',
    answers: A('spo82', 'Large sports venue', [
      'Small room',
      'Office',
      'House',
    ]),
    level: 2,
  },
  {
    id: 'spo83',
    text: 'What is a jersey?',
    answers: A('spo83', 'Team uniform shirt', ['Pants', 'Shoes', 'Hat']),
    level: 2,
  },
  {
    id: 'spo84',
    text: 'What is a trophy?',
    answers: A('spo84', 'Award for winning', [
      'Punishment',
      'Equipment',
      'Uniform',
    ]),
    level: 2,
  },
  {
    id: 'spo85',
    text: 'What is a championship?',
    answers: A('spo85', 'Final competition for title', [
      'First game',
      'Practice',
      'Warmup',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'spo86',
    text: 'What is offside in soccer?',
    answers: A('spo86', 'Player ahead of ball and defenders', [
      'Player behind ball',
      'Player on sideline',
      'Player in goal',
    ]),
    level: 3,
  },
  {
    id: 'spo87',
    text: 'What is a hat trick?',
    answers: A('spo87', 'Three goals by one player', [
      'Two goals',
      'Four goals',
      'One goal',
    ]),
    level: 3,
  },
  {
    id: 'spo88',
    text: 'What is a slam dunk?',
    answers: A('spo88', 'Forceful basketball shot through hoop', [
      'Free throw',
      'Three pointer',
      'Layup',
    ]),
    level: 3,
  },
  {
    id: 'spo89',
    text: 'What is a triple double?',
    answers: A('spo89', 'Double digits in three categories', [
      'Double digits in two',
      'Double digits in one',
      'No double digits',
    ]),
    level: 3,
  },
  {
    id: 'spo90',
    text: 'What is a grand slam in tennis?',
    answers: A('spo90', 'Winning all four major tournaments', [
      'Winning one tournament',
      'Winning two',
      'Winning three',
    ]),
    level: 3,
  },
  {
    id: 'spo91',
    text: 'What is a perfect game in baseball?',
    answers: A('spo91', 'No opposing player reaches base', [
      'No runs allowed',
      'No hits allowed',
      'No walks allowed',
    ]),
    level: 3,
  },
  {
    id: 'spo92',
    text: 'What is a shutout?',
    answers: A('spo92', 'Opponent scores zero', [
      'Opponent scores one',
      'Opponent scores many',
      'Tie game',
    ]),
    level: 3,
  },
  {
    id: 'spo93',
    text: 'What is a double fault in tennis?',
    answers: A('spo93', 'Two consecutive serve faults', [
      'One fault',
      'No faults',
      'Three faults',
    ]),
    level: 3,
  },
  {
    id: 'spo94',
    text: 'What is a birdie in golf?',
    answers: A('spo94', 'One under par', [
      'One over par',
      'Two under par',
      'Even par',
    ]),
    level: 3,
  },
  {
    id: 'spo95',
    text: 'What is an eagle in golf?',
    answers: A('spo95', 'Two under par', [
      'One under par',
      'Three under par',
      'Even par',
    ]),
    level: 3,
  },
  {
    id: 'spo96',
    text: 'What is a bogey in golf?',
    answers: A('spo96', 'One over par', [
      'One under par',
      'Two over par',
      'Even par',
    ]),
    level: 4,
  },
  {
    id: 'spo97',
    text: 'What is a hole in one?',
    answers: A('spo97', 'Ball in hole with one stroke', [
      'Two strokes',
      'Three strokes',
      'Four strokes',
    ]),
    level: 4,
  },
  {
    id: 'spo98',
    text: 'What is a knockout in boxing?',
    answers: A('spo98', 'Opponent cannot continue', [
      'Opponent wins',
      'Draw',
      'Disqualification',
    ]),
    level: 4,
  },
  {
    id: 'spo99',
    text: 'What is a technical knockout?',
    answers: A('spo99', 'Referee stops fight', [
      'Knockout punch',
      'Draw',
      'Disqualification',
    ]),
    level: 4,
  },
  {
    id: 'spo100',
    text: 'What is a submission in MMA?',
    answers: A('spo100', 'Opponent taps out', ['Knockout', 'Decision', 'Draw']),
    level: 4,
  },
  {
    id: 'spo101',
    text: 'What is a pole position?',
    answers: A('spo101', 'First starting position in racing', [
      'Last position',
      'Middle position',
      'Random position',
    ]),
    level: 4,
  },
  {
    id: 'spo102',
    text: 'What is a pit stop?',
    answers: A('spo102', 'Quick stop for service in racing', [
      'End of race',
      'Start of race',
      'Crash',
    ]),
    level: 4,
  },
  {
    id: 'spo103',
    text: 'What is a photo finish?',
    answers: A('spo103', 'Very close race ending', [
      'Clear winner',
      'Tie',
      'Disqualification',
    ]),
    level: 4,
  },
  {
    id: 'spo104',
    text: 'What is a personal best?',
    answers: A('spo104', 'Athlete best performance', [
      'World record',
      'Team record',
      'Average performance',
    ]),
    level: 4,
  },
  {
    id: 'spo105',
    text: 'What is a world record?',
    answers: A('spo105', 'Best performance ever recorded', [
      'Personal best',
      'National record',
      'Average performance',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'spo106',
    text: 'What is the Fosbury Flop?',
    answers: A('spo106', 'High jump technique', [
      'Long jump technique',
      'Pole vault technique',
      'Triple jump technique',
    ]),
    level: 5,
  },
  {
    id: 'spo107',
    text: 'What is the West Coast Offense?',
    answers: A('spo107', 'Football passing system', [
      'Basketball system',
      'Soccer system',
      'Hockey system',
    ]),
    level: 5,
  },
  {
    id: 'spo108',
    text: 'What is the prevent defense?',
    answers: A('spo108', 'Football defensive strategy', [
      'Offensive strategy',
      'Basketball defense',
      'Soccer defense',
    ]),
    level: 5,
  },
  {
    id: 'spo109',
    text: 'What is a pick and roll?',
    answers: A('spo109', 'Basketball offensive play', [
      'Football play',
      'Soccer play',
      'Hockey play',
    ]),
    level: 5,
  },
  {
    id: 'spo110',
    text: 'What is tiki-taka?',
    answers: A('spo110', 'Soccer possession style', [
      'Basketball style',
      'Football style',
      'Hockey style',
    ]),
    level: 5,
  },
  {
    id: 'spo111',
    text: 'What is gegenpressing?',
    answers: A('spo111', 'Soccer counter-pressing tactic', [
      'Basketball tactic',
      'Football tactic',
      'Hockey tactic',
    ]),
    level: 6,
  },
  {
    id: 'spo112',
    text: 'What is the neutral zone trap?',
    answers: A('spo112', 'Hockey defensive system', [
      'Basketball system',
      'Football system',
      'Soccer system',
    ]),
    level: 6,
  },
  {
    id: 'spo113',
    text: 'What is a false nine?',
    answers: A('spo113', 'Soccer striker playing deeper', [
      'Goalkeeper',
      'Defender',
      'Midfielder',
    ]),
    level: 6,
  },
  {
    id: 'spo114',
    text: 'What is WAR in baseball?',
    answers: A('spo114', 'Wins Above Replacement statistic', [
      'Walks and Runs',
      'Win Average Rate',
      'Weighted Average Runs',
    ]),
    level: 6,
  },
  {
    id: 'spo115',
    text: 'What is PER in basketball?',
    answers: A('spo115', 'Player Efficiency Rating', [
      'Points Every Round',
      'Player Error Rate',
      'Performance Evaluation Rank',
    ]),
    level: 6,
  },
  {
    id: 'spo116',
    text: 'What is xG in soccer?',
    answers: A('spo116', 'Expected Goals statistic', [
      'Extra Goals',
      'Excellent Goals',
      'Extreme Goals',
    ]),
    level: 7,
  },
  {
    id: 'spo117',
    text: 'What is VORP?',
    answers: A('spo117', 'Value Over Replacement Player', [
      'Victory Over Regular Player',
      'Valuable Outstanding Regular Player',
      'Variable Output Rating Points',
    ]),
    level: 7,
  },
  {
    id: 'spo118',
    text: 'What is Corsi in hockey?',
    answers: A('spo118', 'Shot attempt differential', [
      'Goal differential',
      'Save percentage',
      'Penalty minutes',
    ]),
    level: 7,
  },
  {
    id: 'spo119',
    text: 'What is the Moneyball approach?',
    answers: A('spo119', 'Using statistics to find undervalued players', [
      'Spending most money',
      'Traditional scouting',
      'Random selection',
    ]),
    level: 7,
  },
  {
    id: 'spo120',
    text: 'What is load management?',
    answers: A('spo120', 'Resting players to prevent injury', [
      'Playing all games',
      'Maximum effort always',
      'No rest',
    ]),
    level: 7,
  },
  {
    id: 'spo121',
    text: 'What is periodization in training?',
    answers: A('spo121', 'Systematic training variation', [
      'Constant training',
      'Random training',
      'No training',
    ]),
    level: 8,
  },
  {
    id: 'spo122',
    text: 'What is VO2 max?',
    answers: A('spo122', 'Maximum oxygen uptake', [
      'Minimum oxygen',
      'Average oxygen',
      'No oxygen',
    ]),
    level: 8,
  },
  {
    id: 'spo123',
    text: 'What is lactate threshold?',
    answers: A('spo123', 'Intensity where lactate accumulates', [
      'Low intensity',
      'No intensity',
      'Random intensity',
    ]),
    level: 8,
  },
  {
    id: 'spo124',
    text: 'What is the anaerobic threshold?',
    answers: A('spo124', 'Point where anaerobic metabolism dominates', [
      'Aerobic point',
      'Rest point',
      'Random point',
    ]),
    level: 8,
  },
  {
    id: 'spo125',
    text: 'What is biomechanical analysis?',
    answers: A('spo125', 'Study of movement mechanics', [
      'Study of nutrition',
      'Study of psychology',
      'Study of history',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'spo126',
    text: 'How many players on a basketball team on court?',
    answers: A('spo126', '5', ['6', '7', '11']),
    level: 1,
  },
  {
    id: 'spo127',
    text: 'What sport uses a puck?',
    answers: A('spo127', 'Ice hockey', ['Soccer', 'Basketball', 'Tennis']),
    level: 1,
  },
  {
    id: 'spo128',
    text: 'What sport uses a shuttlecock?',
    answers: A('spo128', 'Badminton', ['Tennis', 'Squash', 'Table tennis']),
    level: 1,
  },
  {
    id: 'spo129',
    text: 'How many holes in a standard golf course?',
    answers: A('spo129', '18', ['9', '12', '21']),
    level: 1,
  },
  {
    id: 'spo130',
    text: 'What is the goal in bowling?',
    answers: A('spo130', 'Knock down pins', [
      'Score goals',
      'Hit targets',
      'Run fast',
    ]),
    level: 1,
  },
  {
    id: 'spo131',
    text: 'What sport is played at Wimbledon?',
    answers: A('spo131', 'Tennis', ['Golf', 'Cricket', 'Soccer']),
    level: 1,
  },
  {
    id: 'spo132',
    text: 'What color is a basketball?',
    answers: A('spo132', 'Orange', ['White', 'Black', 'Blue']),
    level: 1,
  },
  {
    id: 'spo133',
    text: 'What do you hit in baseball?',
    answers: A('spo133', 'Ball', ['Puck', 'Shuttlecock', 'Disc']),
    level: 1,
  },
  {
    id: 'spo134',
    text: 'What do swimmers wear?',
    answers: A('spo134', 'Swimsuit', ['Uniform', 'Armor', 'Suit']),
    level: 1,
  },
  {
    id: 'spo135',
    text: 'What sport uses a racket and ball on a table?',
    answers: A('spo135', 'Table tennis', ['Tennis', 'Badminton', 'Squash']),
    level: 1,
  },
  {
    id: 'spo136',
    text: 'What is a marathon?',
    answers: A('spo136', 'Long distance running race', [
      'Swimming race',
      'Cycling race',
      'Car race',
    ]),
    level: 1,
  },
  {
    id: 'spo137',
    text: 'What sport is played on ice with brooms?',
    answers: A('spo137', 'Curling', [
      'Ice hockey',
      'Figure skating',
      'Speed skating',
    ]),
    level: 1,
  },
  {
    id: 'spo138',
    text: 'What do you wear on your feet to ice skate?',
    answers: A('spo138', 'Ice skates', ['Roller skates', 'Shoes', 'Boots']),
    level: 1,
  },
  {
    id: 'spo139',
    text: 'What sport involves riding waves?',
    answers: A('spo139', 'Surfing', ['Swimming', 'Diving', 'Water polo']),
    level: 1,
  },
  {
    id: 'spo140',
    text: 'What do boxers wear on their hands?',
    answers: A('spo140', 'Gloves', ['Mittens', 'Wraps only', 'Nothing']),
    level: 1,
  },
  {
    id: 'spo141',
    text: 'What is the Tour de France?',
    answers: A('spo141', 'Cycling race', [
      'Running race',
      'Car race',
      'Swimming race',
    ]),
    level: 1,
  },
  {
    id: 'spo142',
    text: 'What sport uses a bow and arrow?',
    answers: A('spo142', 'Archery', ['Shooting', 'Fencing', 'Javelin']),
    level: 1,
  },
  {
    id: 'spo143',
    text: 'What is the Super Bowl?',
    answers: A('spo143', 'American football championship', [
      'Baseball championship',
      'Basketball championship',
      'Soccer championship',
    ]),
    level: 1,
  },
  {
    id: 'spo144',
    text: 'What sport is played at the Masters?',
    answers: A('spo144', 'Golf', ['Tennis', 'Cricket', 'Soccer']),
    level: 1,
  },
  {
    id: 'spo145',
    text: 'What do you throw in shot put?',
    answers: A('spo145', 'Heavy metal ball', ['Disc', 'Javelin', 'Hammer']),
    level: 1,
  },
  {
    id: 'spo146',
    text: 'What sport involves jumping over a bar?',
    answers: A('spo146', 'High jump', [
      'Long jump',
      'Triple jump',
      'Pole vault',
    ]),
    level: 1,
  },
  {
    id: 'spo147',
    text: 'What is a triathlon?',
    answers: A('spo147', 'Swim, bike, run race', [
      'Three running races',
      'Three swimming races',
      'Three cycling races',
    ]),
    level: 1,
  },
  {
    id: 'spo148',
    text: 'What sport uses a net and volleyball?',
    answers: A('spo148', 'Volleyball', ['Tennis', 'Badminton', 'Basketball']),
    level: 1,
  },
  {
    id: 'spo149',
    text: 'What do you ride in equestrian sports?',
    answers: A('spo149', 'Horse', ['Bicycle', 'Motorcycle', 'Car']),
    level: 1,
  },
  {
    id: 'spo150',
    text: 'What is a touchdown worth in American football?',
    answers: A('spo150', '6 points', ['3 points', '7 points', '1 point']),
    level: 1,
  },
  {
    id: 'spo151',
    text: 'What is a home run in baseball?',
    answers: A('spo151', 'Hit that allows batter to score', [
      'Strikeout',
      'Walk',
      'Bunt',
    ]),
    level: 1,
  },
  {
    id: 'spo152',
    text: 'What sport is played at the World Cup?',
    answers: A('spo152', 'Soccer', ['Cricket', 'Rugby', 'Basketball']),
    level: 1,
  },
  {
    id: 'spo153',
    text: 'What do you use to hit a golf ball?',
    answers: A('spo153', 'Golf club', ['Bat', 'Racket', 'Stick']),
    level: 1,
  },
  {
    id: 'spo154',
    text: 'What is a slam dunk?',
    answers: A('spo154', 'Jumping and putting ball through hoop', [
      'Three-point shot',
      'Free throw',
      'Layup',
    ]),
    level: 1,
  },
  {
    id: 'spo155',
    text: 'What sport has a pitcher and catcher?',
    answers: A('spo155', 'Baseball', ['Basketball', 'Soccer', 'Tennis']),
    level: 1,
  },
  {
    id: 'spo156',
    text: 'What is a penalty kick in soccer?',
    answers: A('spo156', 'Free kick from penalty spot', [
      'Corner kick',
      'Free kick from anywhere',
      'Throw-in',
    ]),
    level: 1,
  },
  {
    id: 'spo157',
    text: 'What do you wear to protect your head in cycling?',
    answers: A('spo157', 'Helmet', ['Cap', 'Hat', 'Headband']),
    level: 1,
  },
  {
    id: 'spo158',
    text: 'What is a referee?',
    answers: A('spo158', 'Official who enforces rules', [
      'Player',
      'Coach',
      'Fan',
    ]),
    level: 1,
  },
  {
    id: 'spo159',
    text: 'What is a coach?',
    answers: A('spo159', 'Person who trains athletes', [
      'Referee',
      'Player',
      'Fan',
    ]),
    level: 1,
  },
  {
    id: 'spo160',
    text: 'What is an athlete?',
    answers: A('spo160', 'Person who plays sports', [
      'Coach',
      'Referee',
      'Fan',
    ]),
    level: 1,
  },
  {
    id: 'spo161',
    text: 'What is a stadium?',
    answers: A('spo161', 'Large venue for sports', [
      'Small gym',
      'Swimming pool',
      'Tennis court',
    ]),
    level: 1,
  },
  {
    id: 'spo162',
    text: 'What is a trophy?',
    answers: A('spo162', 'Award for winning', [
      'Ticket',
      'Uniform',
      'Equipment',
    ]),
    level: 1,
  },
  {
    id: 'spo163',
    text: 'What is a medal?',
    answers: A('spo163', 'Award worn around neck', [
      'Trophy',
      'Certificate',
      'Ribbon',
    ]),
    level: 1,
  },
  {
    id: 'spo164',
    text: 'What color is the gold medal?',
    answers: A('spo164', 'Gold', ['Silver', 'Bronze', 'Platinum']),
    level: 1,
  },
  {
    id: 'spo165',
    text: 'What place gets silver medal?',
    answers: A('spo165', 'Second place', [
      'First place',
      'Third place',
      'Fourth place',
    ]),
    level: 1,
  },
  {
    id: 'spo166',
    text: 'What place gets bronze medal?',
    answers: A('spo166', 'Third place', [
      'First place',
      'Second place',
      'Fourth place',
    ]),
    level: 1,
  },
  {
    id: 'spo167',
    text: 'What is a team?',
    answers: A('spo167', 'Group of players working together', [
      'Single player',
      'Coach',
      'Referee',
    ]),
    level: 1,
  },
  {
    id: 'spo168',
    text: 'What is a captain?',
    answers: A('spo168', 'Leader of a team', ['Coach', 'Referee', 'Fan']),
    level: 1,
  },
  {
    id: 'spo169',
    text: 'What is a uniform?',
    answers: A('spo169', 'Matching clothes worn by team', [
      'Equipment',
      'Trophy',
      'Medal',
    ]),
    level: 1,
  },
  {
    id: 'spo170',
    text: 'What is a jersey?',
    answers: A('spo170', 'Shirt worn by athletes', ['Pants', 'Shoes', 'Hat']),
    level: 1,
  },
  {
    id: 'spo171',
    text: 'What is a warm-up?',
    answers: A('spo171', 'Exercise before main activity', [
      'Cool-down',
      'Main event',
      'Rest',
    ]),
    level: 1,
  },
  {
    id: 'spo172',
    text: 'What is a cool-down?',
    answers: A('spo172', 'Exercise after main activity', [
      'Warm-up',
      'Main event',
      'Rest',
    ]),
    level: 1,
  },
  {
    id: 'spo173',
    text: 'What is stretching?',
    answers: A('spo173', 'Extending muscles', [
      'Running',
      'Jumping',
      'Throwing',
    ]),
    level: 1,
  },
  {
    id: 'spo174',
    text: 'What is a sprint?',
    answers: A('spo174', 'Short fast run', ['Long slow run', 'Walk', 'Jump']),
    level: 1,
  },
  {
    id: 'spo175',
    text: 'What is a lap?',
    answers: A('spo175', 'One complete circuit', [
      'Half circuit',
      'Quarter circuit',
      'Start',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'spo176',
    text: 'What is a hat trick in soccer?',
    answers: A('spo176', 'Three goals by one player', [
      'Two goals',
      'Four goals',
      'Five goals',
    ]),
    level: 2,
  },
  {
    id: 'spo177',
    text: 'What is an assist in basketball?',
    answers: A('spo177', 'Pass leading to a score', [
      'Rebound',
      'Block',
      'Steal',
    ]),
    level: 2,
  },
  {
    id: 'spo178',
    text: 'What is a rebound?',
    answers: A('spo178', 'Catching ball after missed shot', [
      'Assist',
      'Block',
      'Steal',
    ]),
    level: 2,
  },
  {
    id: 'spo179',
    text: 'What is a block in basketball?',
    answers: A('spo179', 'Deflecting opponents shot', [
      'Rebound',
      'Assist',
      'Steal',
    ]),
    level: 2,
  },
  {
    id: 'spo180',
    text: 'What is a steal in basketball?',
    answers: A('spo180', 'Taking ball from opponent', [
      'Rebound',
      'Block',
      'Assist',
    ]),
    level: 2,
  },
  {
    id: 'spo181',
    text: 'What is a free throw?',
    answers: A('spo181', 'Uncontested shot from line', [
      'Three-pointer',
      'Layup',
      'Dunk',
    ]),
    level: 2,
  },
  {
    id: 'spo182',
    text: 'What is a three-pointer?',
    answers: A('spo182', 'Shot from beyond the arc', [
      'Free throw',
      'Layup',
      'Dunk',
    ]),
    level: 2,
  },
  {
    id: 'spo183',
    text: 'What is a layup?',
    answers: A('spo183', 'Shot near basket off backboard', [
      'Three-pointer',
      'Free throw',
      'Dunk',
    ]),
    level: 2,
  },
  {
    id: 'spo184',
    text: 'What is dribbling in basketball?',
    answers: A('spo184', 'Bouncing ball while moving', [
      'Passing',
      'Shooting',
      'Blocking',
    ]),
    level: 2,
  },
  {
    id: 'spo185',
    text: 'What is a foul in basketball?',
    answers: A('spo185', 'Illegal physical contact', [
      'Legal play',
      'Timeout',
      'Substitution',
    ]),
    level: 2,
  },
  {
    id: 'spo186',
    text: 'What is a strike in baseball?',
    answers: A('spo186', 'Missed swing or ball in zone', [
      'Ball outside zone',
      'Hit',
      'Foul',
    ]),
    level: 2,
  },
  {
    id: 'spo187',
    text: 'What is a ball in baseball?',
    answers: A('spo187', 'Pitch outside strike zone', [
      'Strike',
      'Hit',
      'Foul',
    ]),
    level: 2,
  },
  {
    id: 'spo188',
    text: 'What is a walk in baseball?',
    answers: A('spo188', 'Four balls giving free base', [
      'Strikeout',
      'Hit',
      'Home run',
    ]),
    level: 2,
  },
  {
    id: 'spo189',
    text: 'What is a strikeout?',
    answers: A('spo189', 'Three strikes ending at-bat', [
      'Walk',
      'Hit',
      'Home run',
    ]),
    level: 2,
  },
  {
    id: 'spo190',
    text: 'What is an inning in baseball?',
    answers: A('spo190', 'Period where both teams bat', [
      'Single at-bat',
      'Whole game',
      'Timeout',
    ]),
    level: 2,
  },
  {
    id: 'spo191',
    text: 'How many innings in standard baseball game?',
    answers: A('spo191', '9', ['7', '10', '12']),
    level: 2,
  },
  {
    id: 'spo192',
    text: 'What is a double in baseball?',
    answers: A('spo192', 'Hit reaching second base', [
      'Hit reaching first',
      'Hit reaching third',
      'Home run',
    ]),
    level: 2,
  },
  {
    id: 'spo193',
    text: 'What is a triple in baseball?',
    answers: A('spo193', 'Hit reaching third base', [
      'Hit reaching first',
      'Hit reaching second',
      'Home run',
    ]),
    level: 2,
  },
  {
    id: 'spo194',
    text: 'What is a grand slam in baseball?',
    answers: A('spo194', 'Home run with bases loaded', [
      'Regular home run',
      'Triple',
      'Double',
    ]),
    level: 2,
  },
  {
    id: 'spo195',
    text: 'What is an RBI?',
    answers: A('spo195', 'Run batted in', [
      'Runs by innings',
      'Runs by individual',
      'Running base indicator',
    ]),
    level: 2,
  },
  {
    id: 'spo196',
    text: 'What is a corner kick in soccer?',
    answers: A('spo196', 'Kick from corner of field', [
      'Penalty kick',
      'Free kick',
      'Goal kick',
    ]),
    level: 2,
  },
  {
    id: 'spo197',
    text: 'What is a goal kick in soccer?',
    answers: A('spo197', 'Kick by goalkeeper from goal area', [
      'Corner kick',
      'Penalty kick',
      'Free kick',
    ]),
    level: 2,
  },
  {
    id: 'spo198',
    text: 'What is offside in soccer?',
    answers: A('spo198', 'Attacking player ahead of defenders', [
      'Defensive position',
      'Foul',
      'Handball',
    ]),
    level: 2,
  },
  {
    id: 'spo199',
    text: 'What is a yellow card?',
    answers: A('spo199', 'Warning for foul', [
      'Ejection',
      'Goal',
      'Substitution',
    ]),
    level: 2,
  },
  {
    id: 'spo200',
    text: 'What is a red card?',
    answers: A('spo200', 'Ejection from game', [
      'Warning',
      'Goal',
      'Substitution',
    ]),
    level: 2,
  },
  {
    id: 'spo201',
    text: 'What is a header in soccer?',
    answers: A('spo201', 'Hitting ball with head', [
      'Kicking ball',
      'Throwing ball',
      'Catching ball',
    ]),
    level: 2,
  },
  {
    id: 'spo202',
    text: 'What is a throw-in in soccer?',
    answers: A('spo202', 'Throwing ball from sideline', [
      'Kicking ball',
      'Header',
      'Goal kick',
    ]),
    level: 2,
  },
  {
    id: 'spo203',
    text: 'What is a save in soccer?',
    answers: A('spo203', 'Goalkeeper stopping a shot', [
      'Goal scored',
      'Assist',
      'Foul',
    ]),
    level: 2,
  },
  {
    id: 'spo204',
    text: 'What is a clean sheet?',
    answers: A('spo204', 'No goals conceded', [
      'Many goals scored',
      'Tie game',
      'Overtime',
    ]),
    level: 2,
  },
  {
    id: 'spo205',
    text: 'What is extra time in soccer?',
    answers: A('spo205', 'Additional time after regulation', [
      'Halftime',
      'Timeout',
      'Substitution',
    ]),
    level: 2,
  },
  {
    id: 'spo206',
    text: 'What is a penalty shootout?',
    answers: A('spo206', 'Deciding tied game with penalty kicks', [
      'Regular penalties',
      'Extra time',
      'Sudden death',
    ]),
    level: 2,
  },
  {
    id: 'spo207',
    text: 'What is a serve in tennis?',
    answers: A('spo207', 'Starting shot of point', [
      'Return shot',
      'Volley',
      'Lob',
    ]),
    level: 2,
  },
  {
    id: 'spo208',
    text: 'What is an ace in tennis?',
    answers: A('spo208', 'Serve opponent cannot return', [
      'Double fault',
      'Volley',
      'Lob',
    ]),
    level: 2,
  },
  {
    id: 'spo209',
    text: 'What is a double fault?',
    answers: A('spo209', 'Two failed serves losing point', [
      'Ace',
      'Winner',
      'Volley',
    ]),
    level: 2,
  },
  {
    id: 'spo210',
    text: 'What is a volley in tennis?',
    answers: A('spo210', 'Hitting ball before bounce', [
      'Hitting after bounce',
      'Serve',
      'Lob',
    ]),
    level: 2,
  },
  {
    id: 'spo211',
    text: 'What is a lob in tennis?',
    answers: A('spo211', 'High arcing shot', ['Low shot', 'Serve', 'Volley']),
    level: 2,
  },
  {
    id: 'spo212',
    text: 'What is deuce in tennis?',
    answers: A('spo212', 'Score tied at 40-40', [
      'First point',
      'Game point',
      'Set point',
    ]),
    level: 2,
  },
  {
    id: 'spo213',
    text: 'What is advantage in tennis?',
    answers: A('spo213', 'Point after deuce', [
      'First point',
      'Game point',
      'Set point',
    ]),
    level: 2,
  },
  {
    id: 'spo214',
    text: 'What is a set in tennis?',
    answers: A('spo214', 'Collection of games', [
      'Single game',
      'Single point',
      'Match',
    ]),
    level: 2,
  },
  {
    id: 'spo215',
    text: 'What is a match in tennis?',
    answers: A('spo215', 'Complete contest of sets', [
      'Single set',
      'Single game',
      'Single point',
    ]),
    level: 2,
  },
  {
    id: 'spo216',
    text: 'What is a tiebreak?',
    answers: A('spo216', 'Special game to decide set', [
      'Regular game',
      'Deuce',
      'Advantage',
    ]),
    level: 2,
  },
  {
    id: 'spo217',
    text: 'What is a backhand?',
    answers: A('spo217', 'Shot with back of hand facing ball', [
      'Forehand',
      'Serve',
      'Volley',
    ]),
    level: 2,
  },
  {
    id: 'spo218',
    text: 'What is a forehand?',
    answers: A('spo218', 'Shot with palm facing ball', [
      'Backhand',
      'Serve',
      'Volley',
    ]),
    level: 2,
  },
  {
    id: 'spo219',
    text: 'What is a birdie in golf?',
    answers: A('spo219', 'One under par', [
      'One over par',
      'Even par',
      'Two under par',
    ]),
    level: 2,
  },
  {
    id: 'spo220',
    text: 'What is a bogey in golf?',
    answers: A('spo220', 'One over par', [
      'One under par',
      'Even par',
      'Two over par',
    ]),
    level: 2,
  },
  {
    id: 'spo221',
    text: 'What is par in golf?',
    answers: A('spo221', 'Expected number of strokes', [
      'Under expected',
      'Over expected',
      'Hole in one',
    ]),
    level: 2,
  },
  {
    id: 'spo222',
    text: 'What is an eagle in golf?',
    answers: A('spo222', 'Two under par', [
      'One under par',
      'One over par',
      'Even par',
    ]),
    level: 2,
  },
  {
    id: 'spo223',
    text: 'What is a hole in one?',
    answers: A('spo223', 'Ball in hole with one stroke', [
      'Two strokes',
      'Three strokes',
      'Par',
    ]),
    level: 2,
  },
  {
    id: 'spo224',
    text: 'What is a fairway?',
    answers: A('spo224', 'Mowed area between tee and green', [
      'Rough area',
      'Sand trap',
      'Green',
    ]),
    level: 2,
  },
  {
    id: 'spo225',
    text: 'What is the green in golf?',
    answers: A('spo225', 'Smooth area around hole', [
      'Fairway',
      'Rough',
      'Tee box',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-4: More Intermediate Questions =====
  {
    id: 'spo226',
    text: 'What is a bunker in golf?',
    answers: A('spo226', 'Sand trap hazard', [
      'Water hazard',
      'Rough',
      'Fairway',
    ]),
    level: 3,
  },
  {
    id: 'spo227',
    text: 'What is the rough in golf?',
    answers: A('spo227', 'Longer grass area', [
      'Short grass',
      'Sand trap',
      'Green',
    ]),
    level: 3,
  },
  {
    id: 'spo228',
    text: 'What is a driver in golf?',
    answers: A('spo228', 'Club for long distance shots', [
      'Club for putting',
      'Club for sand',
      'Club for short shots',
    ]),
    level: 3,
  },
  {
    id: 'spo229',
    text: 'What is a putter?',
    answers: A('spo229', 'Club for rolling ball on green', [
      'Club for long shots',
      'Club for sand',
      'Club for fairway',
    ]),
    level: 3,
  },
  {
    id: 'spo230',
    text: 'What is a caddie?',
    answers: A('spo230', 'Person carrying golfers clubs', [
      'Referee',
      'Coach',
      'Opponent',
    ]),
    level: 3,
  },
  {
    id: 'spo231',
    text: 'What is a power play in hockey?',
    answers: A('spo231', 'Advantage when opponent has penalty', [
      'Regular play',
      'Overtime',
      'Shootout',
    ]),
    level: 3,
  },
  {
    id: 'spo232',
    text: 'What is icing in hockey?',
    answers: A('spo232', 'Shooting puck across lines', [
      'Scoring goal',
      'Penalty',
      'Timeout',
    ]),
    level: 3,
  },
  {
    id: 'spo233',
    text: 'What is a hat trick in hockey?',
    answers: A('spo233', 'Three goals by one player', [
      'Two goals',
      'Four goals',
      'Assist',
    ]),
    level: 3,
  },
  {
    id: 'spo234',
    text: 'What is a slapshot?',
    answers: A('spo234', 'Powerful hockey shot', [
      'Wrist shot',
      'Backhand',
      'Pass',
    ]),
    level: 3,
  },
  {
    id: 'spo235',
    text: 'What is a wrist shot?',
    answers: A('spo235', 'Quick hockey shot using wrist', [
      'Slapshot',
      'Backhand',
      'Pass',
    ]),
    level: 3,
  },
  {
    id: 'spo236',
    text: 'What is a face-off in hockey?',
    answers: A('spo236', 'Dropping puck to start play', [
      'Goal',
      'Penalty',
      'Timeout',
    ]),
    level: 3,
  },
  {
    id: 'spo237',
    text: 'What is the crease in hockey?',
    answers: A('spo237', 'Area in front of goal', [
      'Center ice',
      'Blue line',
      'Red line',
    ]),
    level: 3,
  },
  {
    id: 'spo238',
    text: 'What is a try in rugby?',
    answers: A('spo238', 'Scoring by grounding ball', [
      'Kick through posts',
      'Penalty',
      'Conversion',
    ]),
    level: 3,
  },
  {
    id: 'spo239',
    text: 'What is a conversion in rugby?',
    answers: A('spo239', 'Kick after try for extra points', [
      'Try',
      'Penalty kick',
      'Drop goal',
    ]),
    level: 3,
  },
  {
    id: 'spo240',
    text: 'What is a scrum in rugby?',
    answers: A('spo240', 'Contested restart formation', [
      'Lineout',
      'Try',
      'Conversion',
    ]),
    level: 3,
  },
  {
    id: 'spo241',
    text: 'What is a lineout in rugby?',
    answers: A('spo241', 'Restart from sideline', [
      'Scrum',
      'Try',
      'Conversion',
    ]),
    level: 3,
  },
  {
    id: 'spo242',
    text: 'What is a drop goal in rugby?',
    answers: A('spo242', 'Kick through posts during play', [
      'Try',
      'Conversion',
      'Penalty kick',
    ]),
    level: 3,
  },
  {
    id: 'spo243',
    text: 'What is a ruck in rugby?',
    answers: A('spo243', 'Contest for ball on ground', [
      'Scrum',
      'Lineout',
      'Maul',
    ]),
    level: 3,
  },
  {
    id: 'spo244',
    text: 'What is a maul in rugby?',
    answers: A('spo244', 'Contest with ball carrier standing', [
      'Ruck',
      'Scrum',
      'Lineout',
    ]),
    level: 3,
  },
  {
    id: 'spo245',
    text: 'What is a field goal in American football?',
    answers: A('spo245', 'Kick through uprights for 3 points', [
      'Touchdown',
      'Safety',
      'Extra point',
    ]),
    level: 3,
  },
  {
    id: 'spo246',
    text: 'What is a safety in American football?',
    answers: A('spo246', 'Tackling opponent in their end zone', [
      'Touchdown',
      'Field goal',
      'Extra point',
    ]),
    level: 3,
  },
  {
    id: 'spo247',
    text: 'What is a two-point conversion?',
    answers: A('spo247', 'Scoring from 2-yard line after TD', [
      'Extra point kick',
      'Field goal',
      'Safety',
    ]),
    level: 3,
  },
  {
    id: 'spo248',
    text: 'What is a sack in American football?',
    answers: A('spo248', 'Tackling quarterback behind line', [
      'Interception',
      'Fumble',
      'Touchdown',
    ]),
    level: 3,
  },
  {
    id: 'spo249',
    text: 'What is an interception?',
    answers: A('spo249', 'Catching opponents pass', [
      'Fumble',
      'Sack',
      'Touchdown',
    ]),
    level: 3,
  },
  {
    id: 'spo250',
    text: 'What is a fumble?',
    answers: A('spo250', 'Dropping the ball', [
      'Interception',
      'Sack',
      'Touchdown',
    ]),
    level: 3,
  },
  {
    id: 'spo251',
    text: 'What is a punt in American football?',
    answers: A('spo251', 'Kicking ball to opponent', [
      'Field goal',
      'Kickoff',
      'Extra point',
    ]),
    level: 3,
  },
  {
    id: 'spo252',
    text: 'What is a kickoff?',
    answers: A('spo252', 'Starting play by kicking', [
      'Punt',
      'Field goal',
      'Extra point',
    ]),
    level: 3,
  },
  {
    id: 'spo253',
    text: 'What is a first down?',
    answers: A('spo253', 'Gaining 10 yards for new set of downs', [
      'Touchdown',
      'Field goal',
      'Punt',
    ]),
    level: 3,
  },
  {
    id: 'spo254',
    text: 'What is the line of scrimmage?',
    answers: A('spo254', 'Where play begins', [
      'End zone',
      'Sideline',
      'Goal line',
    ]),
    level: 3,
  },
  {
    id: 'spo255',
    text: 'What is a quarterback?',
    answers: A('spo255', 'Player who throws passes', [
      'Player who catches',
      'Player who kicks',
      'Player who blocks',
    ]),
    level: 3,
  },
  {
    id: 'spo256',
    text: 'What is a wide receiver?',
    answers: A('spo256', 'Player who catches passes', [
      'Quarterback',
      'Running back',
      'Lineman',
    ]),
    level: 3,
  },
  {
    id: 'spo257',
    text: 'What is a running back?',
    answers: A('spo257', 'Player who runs with ball', [
      'Quarterback',
      'Wide receiver',
      'Lineman',
    ]),
    level: 3,
  },
  {
    id: 'spo258',
    text: 'What is a tight end?',
    answers: A('spo258', 'Player who blocks and catches', [
      'Quarterback',
      'Wide receiver',
      'Running back',
    ]),
    level: 3,
  },
  {
    id: 'spo259',
    text: 'What is a linebacker?',
    answers: A('spo259', 'Defensive player behind line', [
      'Offensive player',
      'Quarterback',
      'Wide receiver',
    ]),
    level: 3,
  },
  {
    id: 'spo260',
    text: 'What is a cornerback?',
    answers: A('spo260', 'Defensive player covering receivers', [
      'Offensive player',
      'Quarterback',
      'Running back',
    ]),
    level: 3,
  },
  {
    id: 'spo261',
    text: 'What is a safety position?',
    answers: A('spo261', 'Deep defensive back', [
      'Offensive player',
      'Quarterback',
      'Running back',
    ]),
    level: 3,
  },
  {
    id: 'spo262',
    text: 'What is a blitz?',
    answers: A('spo262', 'Extra defenders rushing quarterback', [
      'Offensive play',
      'Punt',
      'Field goal',
    ]),
    level: 4,
  },
  {
    id: 'spo263',
    text: 'What is a screen pass?',
    answers: A('spo263', 'Short pass behind blockers', [
      'Long pass',
      'Run play',
      'Punt',
    ]),
    level: 4,
  },
  {
    id: 'spo264',
    text: 'What is a Hail Mary?',
    answers: A('spo264', 'Desperate long pass', [
      'Short pass',
      'Run play',
      'Punt',
    ]),
    level: 4,
  },
  {
    id: 'spo265',
    text: 'What is a pick in basketball?',
    answers: A('spo265', 'Screen to free teammate', [
      'Steal',
      'Block',
      'Rebound',
    ]),
    level: 4,
  },
  {
    id: 'spo266',
    text: 'What is a pick and roll?',
    answers: A('spo266', 'Screen then roll to basket', [
      'Fast break',
      'Zone defense',
      'Man defense',
    ]),
    level: 4,
  },
  {
    id: 'spo267',
    text: 'What is a fast break?',
    answers: A('spo267', 'Quick attack before defense sets', [
      'Slow offense',
      'Zone defense',
      'Man defense',
    ]),
    level: 4,
  },
  {
    id: 'spo268',
    text: 'What is zone defense?',
    answers: A('spo268', 'Defending area not player', [
      'Man-to-man defense',
      'Offense',
      'Fast break',
    ]),
    level: 4,
  },
  {
    id: 'spo269',
    text: 'What is man-to-man defense?',
    answers: A('spo269', 'Each defender guards one player', [
      'Zone defense',
      'Offense',
      'Fast break',
    ]),
    level: 4,
  },
  {
    id: 'spo270',
    text: 'What is a double-double?',
    answers: A('spo270', 'Double digits in two categories', [
      'Triple-double',
      'Single stat',
      'Team stat',
    ]),
    level: 4,
  },
  {
    id: 'spo271',
    text: 'What is a triple-double?',
    answers: A('spo271', 'Double digits in three categories', [
      'Double-double',
      'Single stat',
      'Team stat',
    ]),
    level: 4,
  },
  {
    id: 'spo272',
    text: 'What is a technical foul?',
    answers: A('spo272', 'Foul for unsportsmanlike conduct', [
      'Personal foul',
      'Flagrant foul',
      'Offensive foul',
    ]),
    level: 4,
  },
  {
    id: 'spo273',
    text: 'What is a flagrant foul?',
    answers: A('spo273', 'Severe or dangerous foul', [
      'Technical foul',
      'Personal foul',
      'Offensive foul',
    ]),
    level: 4,
  },
  {
    id: 'spo274',
    text: 'What is traveling in basketball?',
    answers: A('spo274', 'Moving without dribbling', [
      'Double dribble',
      'Foul',
      'Goaltending',
    ]),
    level: 4,
  },
  {
    id: 'spo275',
    text: 'What is double dribble?',
    answers: A('spo275', 'Dribbling after stopping', [
      'Traveling',
      'Foul',
      'Goaltending',
    ]),
    level: 4,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'spo276',
    text: 'What is goaltending?',
    answers: A('spo276', 'Illegally blocking shot near basket', [
      'Legal block',
      'Foul',
      'Traveling',
    ]),
    level: 5,
  },
  {
    id: 'spo277',
    text: 'What is a shot clock violation?',
    answers: A('spo277', 'Not shooting before time expires', [
      'Traveling',
      'Double dribble',
      'Foul',
    ]),
    level: 5,
  },
  {
    id: 'spo278',
    text: 'What is the paint in basketball?',
    answers: A('spo278', 'Rectangular area near basket', [
      'Three-point line',
      'Half court',
      'Sideline',
    ]),
    level: 5,
  },
  {
    id: 'spo279',
    text: 'What is a euro step?',
    answers: A('spo279', 'Two-step move around defender', [
      'Crossover',
      'Spin move',
      'Step back',
    ]),
    level: 5,
  },
  {
    id: 'spo280',
    text: 'What is a crossover dribble?',
    answers: A('spo280', 'Switching ball between hands', [
      'Behind back',
      'Between legs',
      'Spin move',
    ]),
    level: 5,
  },
  {
    id: 'spo281',
    text: 'What is a no-hitter in baseball?',
    answers: A('spo281', 'Game with no hits allowed', [
      'Perfect game',
      'Shutout',
      'Complete game',
    ]),
    level: 5,
  },
  {
    id: 'spo282',
    text: 'What is a perfect game in baseball?',
    answers: A('spo282', 'No batter reaches base', [
      'No-hitter',
      'Shutout',
      'Complete game',
    ]),
    level: 5,
  },
  {
    id: 'spo283',
    text: 'What is a shutout?',
    answers: A('spo283', 'Game with no runs allowed', [
      'No-hitter',
      'Perfect game',
      'Complete game',
    ]),
    level: 5,
  },
  {
    id: 'spo284',
    text: 'What is ERA in baseball?',
    answers: A('spo284', 'Earned run average', [
      'Errors recorded average',
      'Extra runs allowed',
      'Earned runs accumulated',
    ]),
    level: 5,
  },
  {
    id: 'spo285',
    text: 'What is batting average?',
    answers: A('spo285', 'Hits divided by at-bats', [
      'Runs divided by games',
      'Home runs divided by at-bats',
      'Walks divided by at-bats',
    ]),
    level: 5,
  },
  {
    id: 'spo286',
    text: 'What is OPS in baseball?',
    answers: A('spo286', 'On-base plus slugging', [
      'Outs per season',
      'Overall player score',
      'Offensive production stat',
    ]),
    level: 6,
  },
  {
    id: 'spo287',
    text: 'What is WAR in baseball?',
    answers: A('spo287', 'Wins above replacement', [
      'Walks and runs',
      'Win-loss ratio',
      'Weighted average runs',
    ]),
    level: 6,
  },
  {
    id: 'spo288',
    text: 'What is a changeup?',
    answers: A('spo288', 'Slower pitch disguised as fastball', [
      'Fast pitch',
      'Breaking ball',
      'Knuckleball',
    ]),
    level: 5,
  },
  {
    id: 'spo289',
    text: 'What is a curveball?',
    answers: A('spo289', 'Pitch that curves downward', [
      'Fastball',
      'Changeup',
      'Slider',
    ]),
    level: 5,
  },
  {
    id: 'spo290',
    text: 'What is a slider?',
    answers: A('spo290', 'Pitch that breaks laterally', [
      'Curveball',
      'Fastball',
      'Changeup',
    ]),
    level: 5,
  },
  {
    id: 'spo291',
    text: 'What is a knuckleball?',
    answers: A('spo291', 'Pitch with minimal spin', [
      'Fastball',
      'Curveball',
      'Slider',
    ]),
    level: 6,
  },
  {
    id: 'spo292',
    text: 'What is a sinker?',
    answers: A('spo292', 'Fastball that drops', [
      'Rising fastball',
      'Curveball',
      'Slider',
    ]),
    level: 6,
  },
  {
    id: 'spo293',
    text: 'What is a cutter?',
    answers: A('spo293', 'Fastball with late break', [
      'Curveball',
      'Changeup',
      'Sinker',
    ]),
    level: 6,
  },
  {
    id: 'spo294',
    text: 'What is a splitter?',
    answers: A('spo294', 'Pitch that drops sharply', [
      'Fastball',
      'Curveball',
      'Slider',
    ]),
    level: 6,
  },
  {
    id: 'spo295',
    text: 'What is WHIP in baseball?',
    answers: A('spo295', 'Walks plus hits per inning pitched', [
      'Wins per innings pitched',
      'Weighted hitting percentage',
      'Win-loss ratio',
    ]),
    level: 6,
  },
  {
    id: 'spo296',
    text: 'What is a tiki-taka style?',
    answers: A('spo296', 'Short passing possession soccer', [
      'Long ball style',
      'Counter-attack',
      'Defensive style',
    ]),
    level: 6,
  },
  {
    id: 'spo297',
    text: 'What is gegenpressing?',
    answers: A('spo297', 'Immediate pressing after losing ball', [
      'Defensive sitting',
      'Possession play',
      'Counter-attack',
    ]),
    level: 7,
  },
  {
    id: 'spo298',
    text: 'What is a false nine?',
    answers: A('spo298', 'Striker dropping into midfield', [
      'Traditional striker',
      'Winger',
      'Defender',
    ]),
    level: 7,
  },
  {
    id: 'spo299',
    text: 'What is an inverted winger?',
    answers: A('spo299', 'Winger cutting inside on strong foot', [
      'Traditional winger',
      'Striker',
      'Midfielder',
    ]),
    level: 7,
  },
  {
    id: 'spo300',
    text: 'What is a sweeper keeper?',
    answers: A('spo300', 'Goalkeeper playing high and wide', [
      'Traditional goalkeeper',
      'Defender',
      'Midfielder',
    ]),
    level: 7,
  },
];
