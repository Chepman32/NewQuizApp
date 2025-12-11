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
];
