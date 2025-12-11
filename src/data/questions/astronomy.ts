import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const astronomyQuestions: Question[] = [
  // ===== LEVEL 1: Very Easy =====
  {
    id: 'ast1',
    text: 'What is the closest star to Earth?',
    answers: A('ast1', 'The Sun', ['Alpha Centauri', 'Sirius', 'Polaris']),
    level: 1,
  },
  {
    id: 'ast2',
    text: 'How many planets are in our solar system?',
    answers: A('ast2', '8', ['9', '7', '10']),
    level: 1,
  },
  {
    id: 'ast3',
    text: 'What is the largest planet in our solar system?',
    answers: A('ast3', 'Jupiter', ['Saturn', 'Neptune', 'Uranus']),
    level: 1,
  },
  {
    id: 'ast4',
    text: 'What is the smallest planet in our solar system?',
    answers: A('ast4', 'Mercury', ['Mars', 'Venus', 'Pluto']),
    level: 1,
  },
  {
    id: 'ast5',
    text: 'What planet is known as the Red Planet?',
    answers: A('ast5', 'Mars', ['Venus', 'Jupiter', 'Mercury']),
    level: 1,
  },
  {
    id: 'ast6',
    text: "What is Earth's natural satellite?",
    answers: A('ast6', 'The Moon', ['Phobos', 'Europa', 'Titan']),
    level: 1,
  },
  {
    id: 'ast7',
    text: 'What is the hottest planet in our solar system?',
    answers: A('ast7', 'Venus', ['Mercury', 'Mars', 'Jupiter']),
    level: 1,
  },
  {
    id: 'ast8',
    text: 'What planet has the most visible rings?',
    answers: A('ast8', 'Saturn', ['Jupiter', 'Uranus', 'Neptune']),
    level: 1,
  },
  {
    id: 'ast9',
    text: 'What is a shooting star?',
    answers: A('ast9', 'Meteor', ['Comet', 'Asteroid', 'Star']),
    level: 1,
  },
  {
    id: 'ast10',
    text: 'What is the Milky Way?',
    answers: A('ast10', 'Our galaxy', ['A planet', 'A star', 'A moon']),
    level: 1,
  },
  {
    id: 'ast11',
    text: 'What causes day and night on Earth?',
    answers: A('ast11', "Earth's rotation", [
      "Earth's orbit",
      "Moon's orbit",
      "Sun's movement",
    ]),
    level: 1,
  },
  {
    id: 'ast12',
    text: 'What causes seasons on Earth?',
    answers: A('ast12', "Earth's tilted axis", [
      'Distance from Sun',
      'Moon phases',
      'Solar flares',
    ]),
    level: 1,
  },
  {
    id: 'ast13',
    text: 'What is a constellation?',
    answers: A('ast13', 'Pattern of stars', [
      'Type of planet',
      'Type of galaxy',
      'Type of moon',
    ]),
    level: 1,
  },
  {
    id: 'ast14',
    text: 'What is the North Star called?',
    answers: A('ast14', 'Polaris', ['Sirius', 'Vega', 'Betelgeuse']),
    level: 1,
  },
  {
    id: 'ast15',
    text: 'What is a solar eclipse?',
    answers: A('ast15', 'Moon blocks the Sun', [
      'Earth blocks the Sun',
      'Sun blocks the Moon',
      'Stars block the Sun',
    ]),
    level: 1,
  },
  {
    id: 'ast16',
    text: 'What is a lunar eclipse?',
    answers: A('ast16', 'Earth blocks sunlight to Moon', [
      'Moon blocks the Sun',
      'Sun blocks the Moon',
      'Stars block the Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast17',
    text: 'What is an astronaut?',
    answers: A('ast17', 'Person who travels to space', [
      'Person who studies stars',
      'Person who builds rockets',
      'Person who predicts weather',
    ]),
    level: 1,
  },
  {
    id: 'ast18',
    text: 'What was the first animal in space?',
    answers: A('ast18', 'Fruit flies', ['Dog', 'Monkey', 'Cat']),
    level: 1,
  },
  {
    id: 'ast19',
    text: 'What was the first dog in space?',
    answers: A('ast19', 'Laika', ['Belka', 'Strelka', 'Rex']),
    level: 1,
  },
  {
    id: 'ast20',
    text: 'Who was the first human in space?',
    answers: A('ast20', 'Yuri Gagarin', [
      'Neil Armstrong',
      'John Glenn',
      'Alan Shepard',
    ]),
    level: 1,
  },
  {
    id: 'ast21',
    text: 'Who was the first person on the Moon?',
    answers: A('ast21', 'Neil Armstrong', [
      'Buzz Aldrin',
      'Michael Collins',
      'John Glenn',
    ]),
    level: 1,
  },
  {
    id: 'ast22',
    text: 'What year did humans first land on the Moon?',
    answers: A('ast22', '1969', ['1965', '1972', '1959']),
    level: 1,
  },
  {
    id: 'ast23',
    text: 'What is NASA?',
    answers: A('ast23', 'US space agency', [
      'Russian space agency',
      'European space agency',
      'Chinese space agency',
    ]),
    level: 1,
  },
  {
    id: 'ast24',
    text: 'What is a comet?',
    answers: A('ast24', 'Icy body with tail', [
      'Rocky body',
      'Gas giant',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast25',
    text: 'What is an asteroid?',
    answers: A('ast25', 'Rocky body orbiting Sun', [
      'Icy body with tail',
      'Gas giant',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast26',
    text: 'What is the asteroid belt?',
    answers: A('ast26', 'Region between Mars and Jupiter', [
      'Region beyond Neptune',
      'Region near Sun',
      'Region near Earth',
    ]),
    level: 1,
  },
  {
    id: 'ast27',
    text: 'What is a telescope?',
    answers: A('ast27', 'Instrument to see distant objects', [
      'Instrument to measure temperature',
      'Instrument to detect sound',
      'Instrument to measure weight',
    ]),
    level: 1,
  },
  {
    id: 'ast28',
    text: 'What is the Sun made of?',
    answers: A('ast28', 'Hydrogen and helium', [
      'Rock and metal',
      'Water and ice',
      'Carbon and oxygen',
    ]),
    level: 1,
  },
  {
    id: 'ast29',
    text: 'What is a light year?',
    answers: A('ast29', 'Distance light travels in a year', [
      'Time it takes light to reach Earth',
      'Speed of light',
      'Age of a star',
    ]),
    level: 1,
  },
  {
    id: 'ast30',
    text: 'What is gravity?',
    answers: A('ast30', 'Force that attracts objects', [
      'Force that repels objects',
      'Type of light',
      'Type of heat',
    ]),
    level: 1,
  },
  {
    id: 'ast31',
    text: 'What keeps planets in orbit around the Sun?',
    answers: A('ast31', 'Gravity', ['Magnetism', 'Wind', 'Light']),
    level: 1,
  },
  {
    id: 'ast32',
    text: 'What is the International Space Station?',
    answers: A('ast32', 'Space laboratory orbiting Earth', [
      'Moon base',
      'Mars colony',
      'Satellite',
    ]),
    level: 1,
  },
  {
    id: 'ast33',
    text: 'What is a satellite?',
    answers: A('ast33', 'Object orbiting another object', [
      'Type of star',
      'Type of planet',
      'Type of galaxy',
    ]),
    level: 1,
  },
  {
    id: 'ast34',
    text: 'What is the Big Dipper?',
    answers: A('ast34', 'Asterism in Ursa Major', [
      'Planet',
      'Galaxy',
      'Comet',
    ]),
    level: 1,
  },
  {
    id: 'ast35',
    text: 'What is Orion?',
    answers: A('ast35', 'Constellation', ['Planet', 'Star', 'Galaxy']),
    level: 1,
  },
  {
    id: 'ast36',
    text: 'What is the brightest star in the night sky?',
    answers: A('ast36', 'Sirius', ['Polaris', 'Vega', 'Betelgeuse']),
    level: 1,
  },
  {
    id: 'ast37',
    text: 'What planet is closest to the Sun?',
    answers: A('ast37', 'Mercury', ['Venus', 'Earth', 'Mars']),
    level: 1,
  },
  {
    id: 'ast38',
    text: 'What planet is farthest from the Sun?',
    answers: A('ast38', 'Neptune', ['Uranus', 'Saturn', 'Pluto']),
    level: 1,
  },
  {
    id: 'ast39',
    text: 'Is Pluto a planet?',
    answers: A('ast39', "No, it's a dwarf planet", [
      'Yes',
      "It's a moon",
      "It's an asteroid",
    ]),
    level: 1,
  },
  {
    id: 'ast40',
    text: 'What is a dwarf planet?',
    answers: A('ast40', 'Small planet-like body', [
      'Large planet',
      'Moon',
      'Asteroid',
    ]),
    level: 1,
  },
  {
    id: 'ast41',
    text: 'What is the Great Red Spot?',
    answers: A('ast41', 'Storm on Jupiter', [
      'Volcano on Mars',
      'Crater on Moon',
      'Ring of Saturn',
    ]),
    level: 1,
  },
  {
    id: 'ast42',
    text: 'How long does Earth take to orbit the Sun?',
    answers: A('ast42', '365 days', ['30 days', '24 hours', '7 days']),
    level: 1,
  },
  {
    id: 'ast43',
    text: 'How long does Earth take to rotate once?',
    answers: A('ast43', '24 hours', ['365 days', '30 days', '7 days']),
    level: 1,
  },
  {
    id: 'ast44',
    text: "What is the Moon's surface covered with?",
    answers: A('ast44', 'Craters and dust', ['Water', 'Grass', 'Ice']),
    level: 1,
  },
  {
    id: 'ast45',
    text: 'What causes Moon phases?',
    answers: A('ast45', "Moon's position relative to Sun and Earth", [
      'Moon changing shape',
      'Clouds',
      "Earth's shadow",
    ]),
    level: 1,
  },
  {
    id: 'ast46',
    text: 'What is a full moon?',
    answers: A('ast46', 'Entire lit side visible', [
      'Half lit side visible',
      'No lit side visible',
      'Quarter lit side visible',
    ]),
    level: 1,
  },
  {
    id: 'ast47',
    text: 'What is a new moon?',
    answers: A('ast47', 'No lit side visible from Earth', [
      'Entire lit side visible',
      'Half lit side visible',
      'Quarter lit side visible',
    ]),
    level: 1,
  },
  {
    id: 'ast48',
    text: 'What is the Sun?',
    answers: A('ast48', 'A star', ['A planet', 'A moon', 'A comet']),
    level: 1,
  },
  {
    id: 'ast49',
    text: 'What color is the Sun?',
    answers: A('ast49', 'White', ['Yellow', 'Orange', 'Red']),
    level: 1,
  },
  {
    id: 'ast50',
    text: 'What is space?',
    answers: A('ast50', "Area beyond Earth's atmosphere", [
      'Area inside Earth',
      'Ocean',
      'Sky',
    ]),
    level: 1,
  },

  // ===== LEVEL 2-4: Easy to Normal =====
  {
    id: 'ast51',
    text: 'What is the Kuiper Belt?',
    answers: A('ast51', 'Region beyond Neptune with icy bodies', [
      'Asteroid belt',
      'Ring of Saturn',
      'Oort Cloud',
    ]),
    level: 2,
  },
  {
    id: 'ast52',
    text: 'What is the Oort Cloud?',
    answers: A('ast52', 'Distant spherical shell of icy objects', [
      'Kuiper Belt',
      'Asteroid belt',
      'Nebula',
    ]),
    level: 2,
  },
  {
    id: 'ast53',
    text: 'What is a nebula?',
    answers: A('ast53', 'Cloud of gas and dust', [
      'Type of star',
      'Type of planet',
      'Type of galaxy',
    ]),
    level: 2,
  },
  {
    id: 'ast54',
    text: 'What is a supernova?',
    answers: A('ast54', 'Exploding star', [
      'New star',
      'Black hole',
      'Neutron star',
    ]),
    level: 2,
  },
  {
    id: 'ast55',
    text: 'What is a black hole?',
    answers: A('ast55', 'Region with extreme gravity', [
      'Type of star',
      'Type of planet',
      'Type of galaxy',
    ]),
    level: 2,
  },
  {
    id: 'ast56',
    text: 'What is a neutron star?',
    answers: A('ast56', 'Dense remnant of supernova', [
      'Type of planet',
      'Type of galaxy',
      'Type of comet',
    ]),
    level: 2,
  },
  {
    id: 'ast57',
    text: 'What is a pulsar?',
    answers: A('ast57', 'Rotating neutron star emitting beams', [
      'Type of planet',
      'Type of galaxy',
      'Type of comet',
    ]),
    level: 3,
  },
  {
    id: 'ast58',
    text: 'What is a quasar?',
    answers: A('ast58', 'Extremely luminous active galactic nucleus', [
      'Type of star',
      'Type of planet',
      'Type of moon',
    ]),
    level: 3,
  },
  {
    id: 'ast59',
    text: 'What is a red giant?',
    answers: A('ast59', 'Expanded dying star', [
      'Young star',
      'Neutron star',
      'White dwarf',
    ]),
    level: 2,
  },
  {
    id: 'ast60',
    text: 'What is a white dwarf?',
    answers: A('ast60', 'Dense stellar remnant', [
      'Young star',
      'Red giant',
      'Neutron star',
    ]),
    level: 2,
  },
  {
    id: 'ast61',
    text: 'What is the Hubble Space Telescope?',
    answers: A('ast61', 'Space telescope launched in 1990', [
      'Ground telescope',
      'Radio telescope',
      'X-ray telescope',
    ]),
    level: 2,
  },
  {
    id: 'ast62',
    text: 'What is the James Webb Space Telescope?',
    answers: A('ast62', 'Infrared space telescope launched in 2021', [
      'Hubble replacement',
      'Radio telescope',
      'X-ray telescope',
    ]),
    level: 2,
  },
  {
    id: 'ast63',
    text: 'What is the Andromeda Galaxy?',
    answers: A('ast63', 'Nearest large galaxy to Milky Way', [
      'Dwarf galaxy',
      'Irregular galaxy',
      'Elliptical galaxy',
    ]),
    level: 2,
  },
  {
    id: 'ast64',
    text: 'What type of galaxy is the Milky Way?',
    answers: A('ast64', 'Spiral galaxy', [
      'Elliptical galaxy',
      'Irregular galaxy',
      'Lenticular galaxy',
    ]),
    level: 2,
  },
  {
    id: 'ast65',
    text: 'What is the Big Bang?',
    answers: A('ast65', "Theory of universe's origin", [
      'Type of supernova',
      'Type of black hole',
      'Type of galaxy',
    ]),
    level: 2,
  },
  {
    id: 'ast66',
    text: 'How old is the universe?',
    answers: A('ast66', 'About 13.8 billion years', [
      'About 4.5 billion years',
      'About 1 billion years',
      'About 100 billion years',
    ]),
    level: 3,
  },
  {
    id: 'ast67',
    text: 'How old is the Sun?',
    answers: A('ast67', 'About 4.6 billion years', [
      'About 13.8 billion years',
      'About 1 billion years',
      'About 10 billion years',
    ]),
    level: 3,
  },
  {
    id: 'ast68',
    text: 'What is the habitable zone?',
    answers: A('ast68', 'Region where liquid water can exist', [
      'Region near black hole',
      'Region in asteroid belt',
      'Region in galaxy center',
    ]),
    level: 3,
  },
  {
    id: 'ast69',
    text: 'What is an exoplanet?',
    answers: A('ast69', 'Planet outside our solar system', [
      'Moon of Jupiter',
      'Asteroid',
      'Comet',
    ]),
    level: 3,
  },
  {
    id: 'ast70',
    text: 'What is the cosmic microwave background?',
    answers: A('ast70', 'Radiation from early universe', [
      'Light from stars',
      'Heat from Sun',
      'Radio waves from Earth',
    ]),
    level: 4,
  },
  {
    id: 'ast71',
    text: 'What is dark matter?',
    answers: A('ast71', 'Invisible matter affecting gravity', [
      'Black holes',
      'Neutron stars',
      'Asteroids',
    ]),
    level: 4,
  },
  {
    id: 'ast72',
    text: 'What is dark energy?',
    answers: A('ast72', 'Force accelerating universe expansion', [
      'Type of radiation',
      'Type of matter',
      'Type of gravity',
    ]),
    level: 4,
  },
  {
    id: 'ast73',
    text: 'What is redshift?',
    answers: A('ast73', 'Light stretched by expansion', [
      'Light compressed',
      'Light absorbed',
      'Light reflected',
    ]),
    level: 4,
  },
  {
    id: 'ast74',
    text: 'What is blueshift?',
    answers: A('ast74', 'Light compressed by approach', [
      'Light stretched',
      'Light absorbed',
      'Light reflected',
    ]),
    level: 4,
  },
  {
    id: 'ast75',
    text: 'What is the Doppler effect?',
    answers: A('ast75', 'Change in frequency due to motion', [
      'Change in brightness',
      'Change in color',
      'Change in size',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'ast76',
    text: 'What is the Chandrasekhar limit?',
    answers: A('ast76', 'Maximum mass of white dwarf', [
      'Maximum mass of neutron star',
      'Maximum mass of black hole',
      'Maximum mass of planet',
    ]),
    level: 5,
  },
  {
    id: 'ast77',
    text: 'What is the Schwarzschild radius?',
    answers: A('ast77', 'Event horizon radius of black hole', [
      'Radius of neutron star',
      'Radius of white dwarf',
      'Radius of Sun',
    ]),
    level: 5,
  },
  {
    id: 'ast78',
    text: 'What is Hawking radiation?',
    answers: A('ast78', 'Radiation emitted by black holes', [
      'Radiation from stars',
      'Radiation from nebulae',
      'Radiation from quasars',
    ]),
    level: 5,
  },
  {
    id: 'ast79',
    text: 'What is the event horizon?',
    answers: A('ast79', 'Boundary of black hole', [
      'Center of black hole',
      'Edge of galaxy',
      'Edge of universe',
    ]),
    level: 5,
  },
  {
    id: 'ast80',
    text: 'What is a singularity?',
    answers: A('ast80', 'Point of infinite density', [
      'Type of star',
      'Type of galaxy',
      'Type of nebula',
    ]),
    level: 5,
  },
  {
    id: 'ast81',
    text: 'What is gravitational lensing?',
    answers: A('ast81', 'Light bent by gravity', [
      'Light absorbed by gravity',
      'Light created by gravity',
      'Light destroyed by gravity',
    ]),
    level: 6,
  },
  {
    id: 'ast82',
    text: 'What are gravitational waves?',
    answers: A('ast82', 'Ripples in spacetime', [
      'Sound waves in space',
      'Light waves',
      'Radio waves',
    ]),
    level: 6,
  },
  {
    id: 'ast83',
    text: 'What is LIGO?',
    answers: A('ast83', 'Gravitational wave detector', [
      'Space telescope',
      'Radio telescope',
      'Particle accelerator',
    ]),
    level: 6,
  },
  {
    id: 'ast84',
    text: 'What is the Hertzsprung-Russell diagram?',
    answers: A('ast84', 'Plot of stellar luminosity vs temperature', [
      'Map of galaxies',
      'Map of solar system',
      'Map of universe',
    ]),
    level: 6,
  },
  {
    id: 'ast85',
    text: 'What is the main sequence?',
    answers: A('ast85', 'Band of hydrogen-burning stars on HR diagram', [
      'Type of galaxy',
      'Type of nebula',
      'Type of cluster',
    ]),
    level: 6,
  },
  {
    id: 'ast86',
    text: 'What is stellar nucleosynthesis?',
    answers: A('ast86', 'Element creation in stars', [
      'Star formation',
      'Star death',
      'Star movement',
    ]),
    level: 7,
  },
  {
    id: 'ast87',
    text: 'What is the CNO cycle?',
    answers: A('ast87', 'Hydrogen fusion using carbon, nitrogen, oxygen', [
      'Type of supernova',
      'Type of nebula',
      'Type of galaxy',
    ]),
    level: 7,
  },
  {
    id: 'ast88',
    text: 'What is the proton-proton chain?',
    answers: A('ast88', 'Hydrogen fusion in Sun-like stars', [
      'Type of supernova',
      'Type of nebula',
      'Type of galaxy',
    ]),
    level: 7,
  },
  {
    id: 'ast89',
    text: 'What is the Tolman-Oppenheimer-Volkoff limit?',
    answers: A('ast89', 'Maximum mass of neutron star', [
      'Maximum mass of white dwarf',
      'Maximum mass of black hole',
      'Maximum mass of planet',
    ]),
    level: 8,
  },
  {
    id: 'ast90',
    text: 'What is the Eddington luminosity?',
    answers: A(
      'ast90',
      'Maximum luminosity before radiation pressure exceeds gravity',
      ['Minimum luminosity', 'Average luminosity', 'Variable luminosity'],
    ),
    level: 8,
  },
  {
    id: 'ast91',
    text: 'What is the Jeans mass?',
    answers: A('ast91', 'Minimum mass for gravitational collapse', [
      'Maximum mass',
      'Average mass',
      'Variable mass',
    ]),
    level: 8,
  },
  {
    id: 'ast92',
    text: 'What is the virial theorem?',
    answers: A('ast92', 'Relation between kinetic and potential energy', [
      'Conservation of mass',
      'Conservation of momentum',
      'Conservation of charge',
    ]),
    level: 8,
  },
  {
    id: 'ast93',
    text: 'What is the Saha equation?',
    answers: A('ast93', 'Ionization equilibrium in stellar atmospheres', [
      'Nuclear fusion rate',
      'Gravitational force',
      'Electromagnetic force',
    ]),
    level: 8,
  },
  {
    id: 'ast94',
    text: 'What is the Lane-Emden equation?',
    answers: A('ast94', 'Polytropic stellar structure', [
      'Nuclear fusion',
      'Gravitational collapse',
      'Radiation transfer',
    ]),
    level: 8,
  },
  {
    id: 'ast95',
    text: 'What is the Bondi accretion rate?',
    answers: A('ast95', 'Spherical accretion onto compact object', [
      'Disk accretion',
      'Wind accretion',
      'Magnetic accretion',
    ]),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'ast96',
    text: 'What is the closest star to Earth?',
    answers: A('ast96', 'The Sun', [
      'Alpha Centauri',
      'Proxima Centauri',
      'Sirius',
    ]),
    level: 1,
  },
  {
    id: 'ast97',
    text: 'How many planets are in our solar system?',
    answers: A('ast97', '8', ['9', '7', '10']),
    level: 1,
  },
  {
    id: 'ast98',
    text: 'What is the largest planet in our solar system?',
    answers: A('ast98', 'Jupiter', ['Saturn', 'Neptune', 'Uranus']),
    level: 1,
  },
  {
    id: 'ast99',
    text: 'What is the smallest planet in our solar system?',
    answers: A('ast99', 'Mercury', ['Mars', 'Venus', 'Pluto']),
    level: 1,
  },
  {
    id: 'ast100',
    text: 'What planet is known as the Red Planet?',
    answers: A('ast100', 'Mars', ['Venus', 'Jupiter', 'Mercury']),
    level: 1,
  },
  {
    id: 'ast101',
    text: 'What is the Moon?',
    answers: A('ast101', 'Earth natural satellite', [
      'A planet',
      'A star',
      'An asteroid',
    ]),
    level: 1,
  },
  {
    id: 'ast102',
    text: 'What causes day and night?',
    answers: A('ast102', 'Earth rotation', [
      'Moon orbit',
      'Sun movement',
      'Earth orbit',
    ]),
    level: 1,
  },
  {
    id: 'ast103',
    text: 'What causes seasons?',
    answers: A('ast103', 'Earth tilted axis', [
      'Distance from Sun',
      'Moon phases',
      'Sun temperature',
    ]),
    level: 1,
  },
  {
    id: 'ast104',
    text: 'What is a shooting star?',
    answers: A('ast104', 'Meteor burning in atmosphere', [
      'Actual star',
      'Satellite',
      'Comet',
    ]),
    level: 1,
  },
  {
    id: 'ast105',
    text: 'What is the Milky Way?',
    answers: A('ast105', 'Our galaxy', ['A planet', 'A star', 'A moon']),
    level: 1,
  },
  {
    id: 'ast106',
    text: 'What is a constellation?',
    answers: A('ast106', 'Pattern of stars', [
      'Group of planets',
      'Type of galaxy',
      'Cluster of moons',
    ]),
    level: 2,
  },
  {
    id: 'ast107',
    text: 'What is an asteroid?',
    answers: A('ast107', 'Rocky object orbiting Sun', [
      'Icy object',
      'Gas cloud',
      'Star',
    ]),
    level: 2,
  },
  {
    id: 'ast108',
    text: 'What is a comet?',
    answers: A('ast108', 'Icy object with tail', [
      'Rocky asteroid',
      'Small planet',
      'Star',
    ]),
    level: 2,
  },
  {
    id: 'ast109',
    text: 'What is a solar eclipse?',
    answers: A('ast109', 'Moon blocking Sun', [
      'Earth blocking Sun',
      'Sun blocking Moon',
      'Planet blocking Sun',
    ]),
    level: 2,
  },
  {
    id: 'ast110',
    text: 'What is a lunar eclipse?',
    answers: A('ast110', 'Earth shadow on Moon', [
      'Moon shadow on Earth',
      'Sun shadow on Moon',
      'Planet shadow on Moon',
    ]),
    level: 2,
  },
  {
    id: 'ast111',
    text: 'What planet has the most moons?',
    answers: A('ast111', 'Saturn', ['Jupiter', 'Uranus', 'Neptune']),
    level: 2,
  },
  {
    id: 'ast112',
    text: 'What planet has rings?',
    answers: A('ast112', 'Saturn', ['Mars', 'Venus', 'Mercury']),
    level: 2,
  },
  {
    id: 'ast113',
    text: 'What is the hottest planet?',
    answers: A('ast113', 'Venus', ['Mercury', 'Mars', 'Jupiter']),
    level: 2,
  },
  {
    id: 'ast114',
    text: 'What is a light year?',
    answers: A('ast114', 'Distance light travels in one year', [
      'Time measurement',
      'Star brightness',
      'Planet size',
    ]),
    level: 2,
  },
  {
    id: 'ast115',
    text: 'What is the asteroid belt?',
    answers: A('ast115', 'Region between Mars and Jupiter', [
      'Region near Sun',
      'Region near Pluto',
      'Region near Earth',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'ast116',
    text: 'What is a nebula?',
    answers: A('ast116', 'Cloud of gas and dust', [
      'Type of star',
      'Type of planet',
      'Type of galaxy',
    ]),
    level: 3,
  },
  {
    id: 'ast117',
    text: 'What is a supernova?',
    answers: A('ast117', 'Exploding star', [
      'New star',
      'Black hole',
      'Neutron star',
    ]),
    level: 3,
  },
  {
    id: 'ast118',
    text: 'What is a black hole?',
    answers: A('ast118', 'Region of extreme gravity', [
      'Dark planet',
      'Empty space',
      'Dead star',
    ]),
    level: 3,
  },
  {
    id: 'ast119',
    text: 'What is a neutron star?',
    answers: A('ast119', 'Dense remnant of supernova', [
      'Type of planet',
      'Type of galaxy',
      'Type of asteroid',
    ]),
    level: 3,
  },
  {
    id: 'ast120',
    text: 'What is a pulsar?',
    answers: A('ast120', 'Rotating neutron star', [
      'Type of planet',
      'Type of galaxy',
      'Type of comet',
    ]),
    level: 3,
  },
  {
    id: 'ast121',
    text: 'What is a quasar?',
    answers: A('ast121', 'Extremely bright galactic nucleus', [
      'Type of star',
      'Type of planet',
      'Type of moon',
    ]),
    level: 3,
  },
  {
    id: 'ast122',
    text: 'What is the Kuiper Belt?',
    answers: A('ast122', 'Region beyond Neptune', [
      'Region near Sun',
      'Region near Earth',
      'Region near Mars',
    ]),
    level: 3,
  },
  {
    id: 'ast123',
    text: 'What is the Oort Cloud?',
    answers: A('ast123', 'Distant spherical shell of icy objects', [
      'Near Earth asteroids',
      'Jupiter moons',
      'Saturn rings',
    ]),
    level: 3,
  },
  {
    id: 'ast124',
    text: 'What is a dwarf planet?',
    answers: A('ast124', 'Small planet-like object', [
      'Large asteroid',
      'Small moon',
      'Type of star',
    ]),
    level: 3,
  },
  {
    id: 'ast125',
    text: 'What is Pluto classified as?',
    answers: A('ast125', 'Dwarf planet', ['Planet', 'Asteroid', 'Comet']),
    level: 3,
  },
  {
    id: 'ast126',
    text: 'What is the heliosphere?',
    answers: A('ast126', 'Region of Sun influence', [
      'Earth atmosphere',
      'Jupiter atmosphere',
      'Galaxy center',
    ]),
    level: 4,
  },
  {
    id: 'ast127',
    text: 'What is solar wind?',
    answers: A('ast127', 'Stream of particles from Sun', [
      'Wind on Sun',
      'Light from Sun',
      'Heat from Sun',
    ]),
    level: 4,
  },
  {
    id: 'ast128',
    text: 'What is a solar flare?',
    answers: A('ast128', 'Sudden Sun energy release', [
      'Sun spot',
      'Sun eclipse',
      'Sun rotation',
    ]),
    level: 4,
  },
  {
    id: 'ast129',
    text: 'What is a sunspot?',
    answers: A('ast129', 'Cooler region on Sun surface', [
      'Hot region',
      'Hole in Sun',
      'Sun explosion',
    ]),
    level: 4,
  },
  {
    id: 'ast130',
    text: 'What is the corona?',
    answers: A('ast130', 'Sun outer atmosphere', [
      'Sun core',
      'Sun surface',
      'Sun interior',
    ]),
    level: 4,
  },
  {
    id: 'ast131',
    text: 'What is the photosphere?',
    answers: A('ast131', 'Visible Sun surface', [
      'Sun core',
      'Sun atmosphere',
      'Sun interior',
    ]),
    level: 4,
  },
  {
    id: 'ast132',
    text: 'What is the chromosphere?',
    answers: A('ast132', 'Sun atmosphere layer', [
      'Sun core',
      'Sun surface',
      'Sun interior',
    ]),
    level: 4,
  },
  {
    id: 'ast133',
    text: 'What is nuclear fusion?',
    answers: A('ast133', 'Combining atomic nuclei', [
      'Splitting atoms',
      'Chemical reaction',
      'Gravity effect',
    ]),
    level: 4,
  },
  {
    id: 'ast134',
    text: 'What powers the Sun?',
    answers: A('ast134', 'Nuclear fusion', [
      'Nuclear fission',
      'Chemical burning',
      'Gravity',
    ]),
    level: 4,
  },
  {
    id: 'ast135',
    text: 'What is a red giant?',
    answers: A('ast135', 'Expanded dying star', [
      'Young star',
      'Small star',
      'Blue star',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'ast136',
    text: 'What is a white dwarf?',
    answers: A('ast136', 'Dense stellar remnant', [
      'Young star',
      'Large star',
      'Gas giant',
    ]),
    level: 5,
  },
  {
    id: 'ast137',
    text: 'What is the Chandrasekhar limit?',
    answers: A('ast137', 'Maximum white dwarf mass', [
      'Minimum star mass',
      'Black hole size',
      'Galaxy size',
    ]),
    level: 5,
  },
  {
    id: 'ast138',
    text: 'What is the event horizon?',
    answers: A('ast138', 'Black hole boundary', [
      'Star surface',
      'Galaxy edge',
      'Universe boundary',
    ]),
    level: 5,
  },
  {
    id: 'ast139',
    text: 'What is Hawking radiation?',
    answers: A('ast139', 'Black hole emission', [
      'Star radiation',
      'Galaxy radiation',
      'Cosmic background',
    ]),
    level: 5,
  },
  {
    id: 'ast140',
    text: 'What is gravitational lensing?',
    answers: A('ast140', 'Light bending by gravity', [
      'Light absorption',
      'Light emission',
      'Light reflection',
    ]),
    level: 5,
  },
  {
    id: 'ast141',
    text: 'What is dark matter?',
    answers: A('ast141', 'Invisible matter affecting gravity', [
      'Black holes',
      'Dark energy',
      'Antimatter',
    ]),
    level: 6,
  },
  {
    id: 'ast142',
    text: 'What is dark energy?',
    answers: A('ast142', 'Force accelerating universe expansion', [
      'Dark matter',
      'Black holes',
      'Antimatter',
    ]),
    level: 6,
  },
  {
    id: 'ast143',
    text: 'What is the cosmic microwave background?',
    answers: A('ast143', 'Radiation from early universe', [
      'Star radiation',
      'Galaxy radiation',
      'Sun radiation',
    ]),
    level: 6,
  },
  {
    id: 'ast144',
    text: 'What is redshift?',
    answers: A('ast144', 'Light wavelength increase from recession', [
      'Light decrease',
      'Light absorption',
      'Light reflection',
    ]),
    level: 6,
  },
  {
    id: 'ast145',
    text: 'What is the Hubble constant?',
    answers: A('ast145', 'Universe expansion rate', [
      'Star formation rate',
      'Galaxy rotation rate',
      'Light speed',
    ]),
    level: 6,
  },
  {
    id: 'ast146',
    text: 'What is the Schwarzschild radius?',
    answers: A('ast146', 'Black hole event horizon size', [
      'Star size',
      'Galaxy size',
      'Universe size',
    ]),
    level: 7,
  },
  {
    id: 'ast147',
    text: 'What is a magnetar?',
    answers: A('ast147', 'Neutron star with extreme magnetic field', [
      'Type of planet',
      'Type of galaxy',
      'Type of asteroid',
    ]),
    level: 7,
  },
  {
    id: 'ast148',
    text: 'What is a gamma-ray burst?',
    answers: A('ast148', 'Extremely energetic explosion', [
      'Radio emission',
      'X-ray emission',
      'Visible light',
    ]),
    level: 7,
  },
  {
    id: 'ast149',
    text: 'What is the Tolman-Oppenheimer-Volkoff limit?',
    answers: A('ast149', 'Maximum neutron star mass', [
      'Minimum star mass',
      'Black hole mass',
      'Galaxy mass',
    ]),
    level: 7,
  },
  {
    id: 'ast150',
    text: 'What is gravitational wave?',
    answers: A('ast150', 'Ripple in spacetime', [
      'Sound wave',
      'Light wave',
      'Radio wave',
    ]),
    level: 7,
  },
  {
    id: 'ast151',
    text: 'What is the Eddington luminosity?',
    answers: A('ast151', 'Maximum star brightness', [
      'Minimum brightness',
      'Average brightness',
      'Variable brightness',
    ]),
    level: 8,
  },
  {
    id: 'ast152',
    text: 'What is the Jeans mass?',
    answers: A('ast152', 'Minimum mass for gravitational collapse', [
      'Maximum mass',
      'Average mass',
      'Variable mass',
    ]),
    level: 8,
  },
  {
    id: 'ast153',
    text: 'What is the virial theorem?',
    answers: A('ast153', 'Relation between kinetic and potential energy', [
      'Energy conservation',
      'Mass conservation',
      'Momentum conservation',
    ]),
    level: 8,
  },
  {
    id: 'ast154',
    text: 'What is the Saha equation?',
    answers: A('ast154', 'Ionization equilibrium relation', [
      'Energy equation',
      'Mass equation',
      'Momentum equation',
    ]),
    level: 8,
  },
  {
    id: 'ast155',
    text: 'What is the Lane-Emden equation?',
    answers: A('ast155', 'Stellar structure equation', [
      'Galaxy equation',
      'Universe equation',
      'Orbit equation',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'ast156',
    text: 'What is the Sun?',
    answers: A('ast156', 'Star at center of solar system', [
      'Planet',
      'Moon',
      'Asteroid',
    ]),
    level: 1,
  },
  {
    id: 'ast157',
    text: 'What is the Moon?',
    answers: A('ast157', 'Earths natural satellite', [
      'Planet',
      'Star',
      'Asteroid',
    ]),
    level: 1,
  },
  {
    id: 'ast158',
    text: 'What is a star?',
    answers: A('ast158', 'Ball of hot gas that shines', [
      'Cold rock',
      'Planet',
      'Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast159',
    text: 'What is a planet?',
    answers: A('ast159', 'Large body orbiting a star', [
      'Star',
      'Moon',
      'Asteroid',
    ]),
    level: 1,
  },
  {
    id: 'ast160',
    text: 'What is Earth?',
    answers: A('ast160', 'Planet we live on', ['Star', 'Moon', 'Asteroid']),
    level: 1,
  },
  {
    id: 'ast161',
    text: 'What is Mars?',
    answers: A('ast161', 'Red planet', ['Blue planet', 'Gas giant', 'Star']),
    level: 1,
  },
  {
    id: 'ast162',
    text: 'What is Jupiter?',
    answers: A('ast162', 'Largest planet in solar system', [
      'Smallest planet',
      'Star',
      'Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast163',
    text: 'What is Saturn?',
    answers: A('ast163', 'Planet with rings', [
      'Planet without rings',
      'Star',
      'Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast164',
    text: 'What is Venus?',
    answers: A('ast164', 'Hottest planet', [
      'Coldest planet',
      'Largest planet',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast165',
    text: 'What is Mercury?',
    answers: A('ast165', 'Closest planet to Sun', [
      'Farthest planet',
      'Largest planet',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast166',
    text: 'What is Uranus?',
    answers: A('ast166', 'Ice giant planet', [
      'Gas giant',
      'Rocky planet',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast167',
    text: 'What is Neptune?',
    answers: A('ast167', 'Farthest planet from Sun', [
      'Closest planet',
      'Largest planet',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast168',
    text: 'What is a comet?',
    answers: A('ast168', 'Icy body with tail', [
      'Rocky body',
      'Gas body',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast169',
    text: 'What is an asteroid?',
    answers: A('ast169', 'Rocky object in space', [
      'Icy object',
      'Gas object',
      'Star',
    ]),
    level: 1,
  },
  {
    id: 'ast170',
    text: 'What is a meteor?',
    answers: A('ast170', 'Streak of light from space rock', [
      'Star',
      'Planet',
      'Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast171',
    text: 'What is a shooting star?',
    answers: A('ast171', 'Meteor burning in atmosphere', [
      'Real star',
      'Planet',
      'Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast172',
    text: 'What is a meteorite?',
    answers: A('ast172', 'Space rock that lands on Earth', [
      'Rock in space',
      'Star',
      'Planet',
    ]),
    level: 1,
  },
  {
    id: 'ast173',
    text: 'What is the Milky Way?',
    answers: A('ast173', 'Our galaxy', ['Another galaxy', 'Star', 'Planet']),
    level: 1,
  },
  {
    id: 'ast174',
    text: 'What is a galaxy?',
    answers: A('ast174', 'Collection of stars', [
      'Single star',
      'Planet',
      'Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast175',
    text: 'What is a constellation?',
    answers: A('ast175', 'Pattern of stars in sky', [
      'Single star',
      'Planet',
      'Galaxy',
    ]),
    level: 1,
  },
  {
    id: 'ast176',
    text: 'What is the Big Dipper?',
    answers: A('ast176', 'Famous star pattern', ['Planet', 'Galaxy', 'Moon']),
    level: 1,
  },
  {
    id: 'ast177',
    text: 'What is the North Star?',
    answers: A('ast177', 'Star indicating north', [
      'Star indicating south',
      'Planet',
      'Moon',
    ]),
    level: 1,
  },
  {
    id: 'ast178',
    text: 'What is a telescope?',
    answers: A('ast178', 'Instrument to see distant objects', [
      'Instrument to hear',
      'Instrument to smell',
      'Instrument to touch',
    ]),
    level: 1,
  },
  {
    id: 'ast179',
    text: 'What is an astronaut?',
    answers: A('ast179', 'Person who travels to space', [
      'Person who studies stars',
      'Person who builds rockets',
      'Person who predicts weather',
    ]),
    level: 1,
  },
  {
    id: 'ast180',
    text: 'What is a rocket?',
    answers: A('ast180', 'Vehicle that goes to space', [
      'Vehicle on ground',
      'Vehicle in water',
      'Vehicle in air only',
    ]),
    level: 1,
  },
  {
    id: 'ast181',
    text: 'What is a space station?',
    answers: A('ast181', 'Structure in orbit where people live', [
      'Building on Earth',
      'Rocket',
      'Satellite',
    ]),
    level: 1,
  },
  {
    id: 'ast182',
    text: 'What is a satellite?',
    answers: A('ast182', 'Object orbiting another object', [
      'Object on ground',
      'Star',
      'Galaxy',
    ]),
    level: 1,
  },
  {
    id: 'ast183',
    text: 'What is orbit?',
    answers: A('ast183', 'Path around another object', [
      'Straight line',
      'Random path',
      'No path',
    ]),
    level: 1,
  },
  {
    id: 'ast184',
    text: 'What is gravity?',
    answers: A('ast184', 'Force pulling objects together', [
      'Force pushing apart',
      'No force',
      'Random force',
    ]),
    level: 1,
  },
  {
    id: 'ast185',
    text: 'What is day?',
    answers: A('ast185', 'When your location faces Sun', [
      'When facing away',
      'Always light',
      'Always dark',
    ]),
    level: 1,
  },
  {
    id: 'ast186',
    text: 'What is night?',
    answers: A('ast186', 'When your location faces away from Sun', [
      'When facing Sun',
      'Always light',
      'Always dark',
    ]),
    level: 1,
  },
  {
    id: 'ast187',
    text: 'What causes seasons?',
    answers: A('ast187', 'Earths tilt', [
      'Distance from Sun',
      'Moon position',
      'Star position',
    ]),
    level: 1,
  },
  {
    id: 'ast188',
    text: 'What is a year?',
    answers: A('ast188', 'Time for Earth to orbit Sun', [
      'Time for Moon to orbit',
      'One day',
      'One month',
    ]),
    level: 1,
  },
  {
    id: 'ast189',
    text: 'What is a lunar eclipse?',
    answers: A('ast189', 'Earth blocks sunlight to Moon', [
      'Moon blocks Sun',
      'Sun disappears',
      'Stars disappear',
    ]),
    level: 1,
  },
  {
    id: 'ast190',
    text: 'What is a solar eclipse?',
    answers: A('ast190', 'Moon blocks sunlight to Earth', [
      'Earth blocks Moon',
      'Sun disappears',
      'Stars disappear',
    ]),
    level: 1,
  },
  {
    id: 'ast191',
    text: 'What is a full moon?',
    answers: A('ast191', 'Moon fully lit by Sun', [
      'Moon half lit',
      'Moon not lit',
      'Moon behind Earth',
    ]),
    level: 1,
  },
  {
    id: 'ast192',
    text: 'What is a new moon?',
    answers: A('ast192', 'Moon not visible from Earth', [
      'Moon fully visible',
      'Moon half visible',
      'Moon behind Sun',
    ]),
    level: 1,
  },
  {
    id: 'ast193',
    text: 'What is space?',
    answers: A('ast193', 'Area beyond Earths atmosphere', [
      'Area on Earth',
      'Area in ocean',
      'Area underground',
    ]),
    level: 1,
  },
  {
    id: 'ast194',
    text: 'What is the atmosphere?',
    answers: A('ast194', 'Layer of gas around Earth', [
      'Layer of rock',
      'Layer of water',
      'Layer of ice',
    ]),
    level: 1,
  },
  {
    id: 'ast195',
    text: 'What is the solar system?',
    answers: A('ast195', 'Sun and objects orbiting it', [
      'Just the Sun',
      'Just planets',
      'Just moons',
    ]),
    level: 1,
  },
  {
    id: 'ast196',
    text: 'How many planets in solar system?',
    answers: A('ast196', '8', ['9', '7', '10']),
    level: 1,
  },
  {
    id: 'ast197',
    text: 'What is the closest star to Earth?',
    answers: A('ast197', 'The Sun', ['Alpha Centauri', 'Sirius', 'Polaris']),
    level: 1,
  },
  {
    id: 'ast198',
    text: 'What is a light year?',
    answers: A('ast198', 'Distance light travels in one year', [
      'Time measurement',
      'Weight measurement',
      'Temperature measurement',
    ]),
    level: 1,
  },
  {
    id: 'ast199',
    text: 'What is the universe?',
    answers: A('ast199', 'All of space and everything in it', [
      'Just our galaxy',
      'Just our solar system',
      'Just Earth',
    ]),
    level: 1,
  },
  {
    id: 'ast200',
    text: 'What is astronomy?',
    answers: A('ast200', 'Study of space and celestial objects', [
      'Study of weather',
      'Study of rocks',
      'Study of animals',
    ]),
    level: 1,
  },
  // ===== LEVEL 2-4: More Questions =====
  {
    id: 'ast201',
    text: 'What is a red giant?',
    answers: A('ast201', 'Large cool star', [
      'Small hot star',
      'Planet',
      'Moon',
    ]),
    level: 2,
  },
  {
    id: 'ast202',
    text: 'What is a white dwarf?',
    answers: A('ast202', 'Small dense remnant of star', [
      'Large star',
      'Planet',
      'Moon',
    ]),
    level: 2,
  },
  {
    id: 'ast203',
    text: 'What is a supernova?',
    answers: A('ast203', 'Exploding star', [
      'Forming star',
      'Stable star',
      'Planet',
    ]),
    level: 2,
  },
  {
    id: 'ast204',
    text: 'What is a black hole?',
    answers: A('ast204', 'Region with extreme gravity', [
      'Empty space',
      'Dark planet',
      'Dark star',
    ]),
    level: 2,
  },
  {
    id: 'ast205',
    text: 'What is a neutron star?',
    answers: A('ast205', 'Dense remnant of massive star', [
      'Light star',
      'Planet',
      'Moon',
    ]),
    level: 3,
  },
  {
    id: 'ast206',
    text: 'What is a pulsar?',
    answers: A('ast206', 'Rotating neutron star emitting beams', [
      'Static star',
      'Planet',
      'Moon',
    ]),
    level: 3,
  },
  {
    id: 'ast207',
    text: 'What is a quasar?',
    answers: A('ast207', 'Extremely bright galactic nucleus', [
      'Dim object',
      'Planet',
      'Moon',
    ]),
    level: 4,
  },
  {
    id: 'ast208',
    text: 'What is the Big Bang?',
    answers: A('ast208', 'Theory of universe origin', [
      'Theory of star formation',
      'Theory of planet formation',
      'Theory of moon formation',
    ]),
    level: 2,
  },
  {
    id: 'ast209',
    text: 'What is dark matter?',
    answers: A('ast209', 'Invisible matter affecting gravity', [
      'Visible matter',
      'Light',
      'Energy',
    ]),
    level: 3,
  },
  {
    id: 'ast210',
    text: 'What is dark energy?',
    answers: A('ast210', 'Energy causing universe expansion', [
      'Energy causing contraction',
      'Light energy',
      'Heat energy',
    ]),
    level: 4,
  },
  {
    id: 'ast211',
    text: 'What is the Hubble Space Telescope?',
    answers: A('ast211', 'Space telescope orbiting Earth', [
      'Ground telescope',
      'Radio telescope',
      'X-ray telescope',
    ]),
    level: 2,
  },
  {
    id: 'ast212',
    text: 'What is the asteroid belt?',
    answers: A('ast212', 'Region of asteroids between Mars and Jupiter', [
      'Between Earth and Mars',
      'Beyond Neptune',
      'Near Sun',
    ]),
    level: 2,
  },
  {
    id: 'ast213',
    text: 'What is the Kuiper Belt?',
    answers: A('ast213', 'Region of icy bodies beyond Neptune', [
      'Between Mars and Jupiter',
      'Near Sun',
      'Near Earth',
    ]),
    level: 3,
  },
  {
    id: 'ast214',
    text: 'What is the Oort Cloud?',
    answers: A('ast214', 'Distant region of comets', [
      'Near Sun',
      'Between planets',
      'On Earth',
    ]),
    level: 4,
  },
  {
    id: 'ast215',
    text: 'What is Pluto?',
    answers: A('ast215', 'Dwarf planet', ['Full planet', 'Moon', 'Asteroid']),
    level: 2,
  },
  {
    id: 'ast216',
    text: 'What is a dwarf planet?',
    answers: A('ast216', 'Small planet-like body', [
      'Large planet',
      'Moon',
      'Star',
    ]),
    level: 2,
  },
  {
    id: 'ast217',
    text: 'What is the Great Red Spot?',
    answers: A('ast217', 'Storm on Jupiter', [
      'Storm on Mars',
      'Storm on Saturn',
      'Storm on Earth',
    ]),
    level: 2,
  },
  {
    id: 'ast218',
    text: 'What are Saturns rings made of?',
    answers: A('ast218', 'Ice and rock particles', [
      'Gas',
      'Liquid',
      'Solid metal',
    ]),
    level: 2,
  },
  {
    id: 'ast219',
    text: 'What is Titan?',
    answers: A('ast219', 'Saturns largest moon', [
      'Jupiters moon',
      'Mars moon',
      'Earths moon',
    ]),
    level: 3,
  },
  {
    id: 'ast220',
    text: 'What is Europa?',
    answers: A('ast220', 'Jupiters icy moon', [
      'Saturns moon',
      'Mars moon',
      'Earths moon',
    ]),
    level: 3,
  },
  {
    id: 'ast221',
    text: 'What is Io?',
    answers: A('ast221', 'Jupiters volcanic moon', [
      'Saturns moon',
      'Mars moon',
      'Earths moon',
    ]),
    level: 3,
  },
  {
    id: 'ast222',
    text: 'What is Ganymede?',
    answers: A('ast222', 'Largest moon in solar system', [
      'Smallest moon',
      'Planet',
      'Asteroid',
    ]),
    level: 3,
  },
  {
    id: 'ast223',
    text: 'What is the Andromeda Galaxy?',
    answers: A('ast223', 'Nearest large galaxy to Milky Way', [
      'Farthest galaxy',
      'Our galaxy',
      'Small galaxy',
    ]),
    level: 2,
  },
  {
    id: 'ast224',
    text: 'What is a spiral galaxy?',
    answers: A('ast224', 'Galaxy with spiral arms', [
      'Round galaxy',
      'Irregular galaxy',
      'No shape',
    ]),
    level: 3,
  },
  {
    id: 'ast225',
    text: 'What is an elliptical galaxy?',
    answers: A('ast225', 'Oval-shaped galaxy', [
      'Spiral galaxy',
      'Irregular galaxy',
      'No shape',
    ]),
    level: 3,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'ast226',
    text: 'What is redshift?',
    answers: A('ast226', 'Light stretched to longer wavelengths', [
      'Shorter wavelengths',
      'No change',
      'Random change',
    ]),
    level: 4,
  },
  {
    id: 'ast227',
    text: 'What is blueshift?',
    answers: A('ast227', 'Light compressed to shorter wavelengths', [
      'Longer wavelengths',
      'No change',
      'Random change',
    ]),
    level: 4,
  },
  {
    id: 'ast228',
    text: 'What is the Doppler effect?',
    answers: A('ast228', 'Change in wavelength due to motion', [
      'No change',
      'Random change',
      'Color change only',
    ]),
    level: 4,
  },
  {
    id: 'ast229',
    text: 'What is a protostar?',
    answers: A('ast229', 'Star in early formation', [
      'Dying star',
      'Stable star',
      'Dead star',
    ]),
    level: 4,
  },
  {
    id: 'ast230',
    text: 'What is stellar nucleosynthesis?',
    answers: A('ast230', 'Element creation in stars', [
      'Element destruction',
      'No elements',
      'Random elements',
    ]),
    level: 5,
  },
  {
    id: 'ast231',
    text: 'What is the main sequence?',
    answers: A('ast231', 'Stage where stars fuse hydrogen', [
      'Dying stage',
      'Birth stage',
      'No stage',
    ]),
    level: 4,
  },
  {
    id: 'ast232',
    text: 'What is a planetary nebula?',
    answers: A('ast232', 'Gas expelled by dying star', [
      'Forming star',
      'Planet',
      'Galaxy',
    ]),
    level: 5,
  },
  {
    id: 'ast233',
    text: 'What is the event horizon?',
    answers: A('ast233', 'Boundary of black hole', [
      'Center of black hole',
      'Outside black hole',
      'No boundary',
    ]),
    level: 5,
  },
  {
    id: 'ast234',
    text: 'What is Hawking radiation?',
    answers: A('ast234', 'Radiation from black holes', [
      'Radiation from stars',
      'No radiation',
      'Random radiation',
    ]),
    level: 6,
  },
  {
    id: 'ast235',
    text: 'What is a singularity?',
    answers: A('ast235', 'Point of infinite density', [
      'Normal density',
      'No density',
      'Low density',
    ]),
    level: 6,
  },
  {
    id: 'ast236',
    text: 'What is the Chandrasekhar limit?',
    answers: A('ast236', 'Maximum mass of white dwarf', [
      'Minimum mass',
      'Average mass',
      'No limit',
    ]),
    level: 6,
  },
  {
    id: 'ast237',
    text: 'What is the Schwarzschild radius?',
    answers: A('ast237', 'Radius of event horizon', [
      'Radius of star',
      'Radius of planet',
      'No radius',
    ]),
    level: 7,
  },
  {
    id: 'ast238',
    text: 'What is gravitational lensing?',
    answers: A('ast238', 'Light bent by gravity', [
      'Light absorbed',
      'Light reflected',
      'No effect',
    ]),
    level: 5,
  },
  {
    id: 'ast239',
    text: 'What is cosmic microwave background?',
    answers: A('ast239', 'Radiation from early universe', [
      'Recent radiation',
      'No radiation',
      'Star radiation',
    ]),
    level: 5,
  },
  {
    id: 'ast240',
    text: 'What is the Hubble constant?',
    answers: A('ast240', 'Rate of universe expansion', [
      'Rate of contraction',
      'No rate',
      'Random rate',
    ]),
    level: 6,
  },
  {
    id: 'ast241',
    text: 'What is a parsec?',
    answers: A('ast241', 'Unit of distance (3.26 light years)', [
      'Unit of time',
      'Unit of mass',
      'Unit of temperature',
    ]),
    level: 4,
  },
  {
    id: 'ast242',
    text: 'What is parallax?',
    answers: A('ast242', 'Apparent shift due to viewing angle', [
      'No shift',
      'Random shift',
      'Color shift',
    ]),
    level: 5,
  },
  {
    id: 'ast243',
    text: 'What is apparent magnitude?',
    answers: A('ast243', 'Brightness as seen from Earth', [
      'Actual brightness',
      'No brightness',
      'Random brightness',
    ]),
    level: 5,
  },
  {
    id: 'ast244',
    text: 'What is absolute magnitude?',
    answers: A('ast244', 'Brightness at standard distance', [
      'Brightness from Earth',
      'No brightness',
      'Random brightness',
    ]),
    level: 5,
  },
  {
    id: 'ast245',
    text: 'What is a Cepheid variable?',
    answers: A('ast245', 'Star with regular brightness changes', [
      'Constant star',
      'Dead star',
      'Planet',
    ]),
    level: 6,
  },
  {
    id: 'ast246',
    text: 'What is a Type Ia supernova?',
    answers: A('ast246', 'White dwarf explosion', [
      'Massive star explosion',
      'No explosion',
      'Planet explosion',
    ]),
    level: 6,
  },
  {
    id: 'ast247',
    text: 'What is a gamma-ray burst?',
    answers: A('ast247', 'Extremely energetic explosion', [
      'Low energy event',
      'No energy',
      'Random event',
    ]),
    level: 6,
  },
  {
    id: 'ast248',
    text: 'What is a magnetar?',
    answers: A('ast248', 'Neutron star with extreme magnetic field', [
      'Normal star',
      'Planet',
      'Moon',
    ]),
    level: 7,
  },
  {
    id: 'ast249',
    text: 'What is the Hertzsprung-Russell diagram?',
    answers: A('ast249', 'Plot of star luminosity vs temperature', [
      'Plot of planets',
      'Plot of galaxies',
      'No plot',
    ]),
    level: 6,
  },
  {
    id: 'ast250',
    text: 'What is the Roche limit?',
    answers: A('ast250', 'Distance where tidal forces destroy object', [
      'Safe distance',
      'No limit',
      'Random distance',
    ]),
    level: 7,
  },
  {
    id: 'ast251',
    text: 'What is Titan?',
    answers: A('ast251', 'Saturns largest moon with atmosphere', [
      'Jupiters moon',
      'Mars moon',
      'Neptune moon',
    ]),
    level: 3,
  },
  {
    id: 'ast252',
    text: 'What is Enceladus?',
    answers: A('ast252', 'Saturns moon with water geysers', [
      'Jupiters moon',
      'Uranus moon',
      'Neptune moon',
    ]),
    level: 4,
  },
  {
    id: 'ast253',
    text: 'What is Triton?',
    answers: A('ast253', 'Neptunes largest moon', [
      'Uranus moon',
      'Saturn moon',
      'Jupiter moon',
    ]),
    level: 4,
  },
  {
    id: 'ast254',
    text: 'What is Miranda?',
    answers: A('ast254', 'Uranus moon with extreme terrain', [
      'Neptune moon',
      'Saturn moon',
      'Jupiter moon',
    ]),
    level: 5,
  },
  {
    id: 'ast255',
    text: 'What is Charon?',
    answers: A('ast255', 'Plutos largest moon', [
      'Neptune moon',
      'Uranus moon',
      'Saturn moon',
    ]),
    level: 4,
  },
  {
    id: 'ast256',
    text: 'What is the Oort Cloud?',
    answers: A('ast256', 'Distant sphere of icy objects', [
      'Asteroid belt',
      'Planet ring',
      'Galaxy cluster',
    ]),
    level: 4,
  },
  {
    id: 'ast257',
    text: 'What is the Kuiper Belt?',
    answers: A('ast257', 'Region beyond Neptune with icy bodies', [
      'Asteroid belt',
      'Planet ring',
      'Galaxy cluster',
    ]),
    level: 4,
  },
  {
    id: 'ast258',
    text: 'What is Eris?',
    answers: A('ast258', 'Dwarf planet beyond Pluto', [
      'Planet',
      'Moon',
      'Asteroid',
    ]),
    level: 5,
  },
  {
    id: 'ast259',
    text: 'What is Makemake?',
    answers: A('ast259', 'Dwarf planet in Kuiper Belt', [
      'Planet',
      'Moon',
      'Asteroid',
    ]),
    level: 6,
  },
  {
    id: 'ast260',
    text: 'What is Haumea?',
    answers: A('ast260', 'Elongated dwarf planet', [
      'Round planet',
      'Moon',
      'Asteroid',
    ]),
    level: 6,
  },
  {
    id: 'ast261',
    text: 'What is Ceres?',
    answers: A('ast261', 'Dwarf planet in asteroid belt', [
      'Planet',
      'Moon',
      'Comet',
    ]),
    level: 4,
  },
  {
    id: 'ast262',
    text: 'What is Vesta?',
    answers: A('ast262', 'Large asteroid', ['Planet', 'Moon', 'Comet']),
    level: 5,
  },
  {
    id: 'ast263',
    text: 'What is Pallas?',
    answers: A('ast263', 'Large asteroid', ['Planet', 'Moon', 'Comet']),
    level: 6,
  },
  {
    id: 'ast264',
    text: "What is Halley's Comet?",
    answers: A('ast264', 'Famous periodic comet', [
      'Asteroid',
      'Planet',
      'Moon',
    ]),
    level: 2,
  },
  {
    id: 'ast265',
    text: "How often does Halley's Comet appear?",
    answers: A('ast265', 'Every 75-76 years', [
      'Every year',
      'Every 10 years',
      'Every 100 years',
    ]),
    level: 3,
  },
  {
    id: 'ast266',
    text: 'What is a meteor?',
    answers: A('ast266', 'Space rock burning in atmosphere', [
      'Rock on ground',
      'Planet',
      'Star',
    ]),
    level: 2,
  },
  {
    id: 'ast267',
    text: 'What is a meteorite?',
    answers: A('ast267', 'Space rock that reached ground', [
      'Rock in space',
      'Burning rock',
      'Star',
    ]),
    level: 2,
  },
  {
    id: 'ast268',
    text: 'What is a meteoroid?',
    answers: A('ast268', 'Small rock in space', [
      'Rock on ground',
      'Burning rock',
      'Planet',
    ]),
    level: 3,
  },
  {
    id: 'ast269',
    text: 'What causes meteor showers?',
    answers: A('ast269', 'Earth passing through comet debris', [
      'Asteroid collision',
      'Planet alignment',
      'Solar flares',
    ]),
    level: 3,
  },
  {
    id: 'ast270',
    text: 'What is the Perseid meteor shower?',
    answers: A('ast270', 'Annual August meteor shower', [
      'Winter shower',
      'Spring shower',
      'No pattern',
    ]),
    level: 4,
  },
  {
    id: 'ast271',
    text: 'What is a solar flare?',
    answers: A('ast271', 'Sudden burst of energy from Sun', [
      'Planet explosion',
      'Moon event',
      'Comet tail',
    ]),
    level: 3,
  },
  {
    id: 'ast272',
    text: 'What is a coronal mass ejection?',
    answers: A('ast272', 'Large release of solar plasma', [
      'Planet collision',
      'Moon formation',
      'Star birth',
    ]),
    level: 5,
  },
  {
    id: 'ast273',
    text: 'What causes auroras?',
    answers: A('ast273', 'Solar particles hitting atmosphere', [
      'Moon reflection',
      'Star light',
      'Planet glow',
    ]),
    level: 3,
  },
  {
    id: 'ast274',
    text: 'What is the Van Allen radiation belt?',
    answers: A('ast274', 'Charged particles trapped by Earths magnetic field', [
      'Asteroid belt',
      'Cloud layer',
      'Ocean current',
    ]),
    level: 5,
  },
  {
    id: 'ast275',
    text: 'What is the heliosphere?',
    answers: A('ast275', 'Bubble of solar wind around solar system', [
      'Sun surface',
      'Planet atmosphere',
      'Galaxy edge',
    ]),
    level: 6,
  },
  {
    id: 'ast276',
    text: 'What is the heliopause?',
    answers: A('ast276', 'Boundary where solar wind stops', [
      'Sun center',
      'Planet orbit',
      'Moon surface',
    ]),
    level: 6,
  },
  {
    id: 'ast277',
    text: 'What is interstellar space?',
    answers: A('ast277', 'Space between star systems', [
      'Space between planets',
      'Space in atmosphere',
      'Space in ocean',
    ]),
    level: 4,
  },
  {
    id: 'ast278',
    text: 'What is a brown dwarf?',
    answers: A('ast278', 'Failed star too small to fuse hydrogen', [
      'Dying star',
      'Planet',
      'Moon',
    ]),
    level: 5,
  },
  {
    id: 'ast279',
    text: 'What is a T Tauri star?',
    answers: A('ast279', 'Young pre-main-sequence star', [
      'Dying star',
      'Dead star',
      'Planet',
    ]),
    level: 7,
  },
  {
    id: 'ast280',
    text: 'What is a Wolf-Rayet star?',
    answers: A('ast280', 'Massive hot star losing mass rapidly', [
      'Small cool star',
      'Planet',
      'Moon',
    ]),
    level: 7,
  },
  {
    id: 'ast281',
    text: 'What is a carbon star?',
    answers: A('ast281', 'Star with more carbon than oxygen', [
      'Star with no carbon',
      'Planet',
      'Asteroid',
    ]),
    level: 7,
  },
  {
    id: 'ast282',
    text: 'What is a Mira variable?',
    answers: A('ast282', 'Pulsating red giant star', [
      'Constant star',
      'Planet',
      'Moon',
    ]),
    level: 7,
  },
  {
    id: 'ast283',
    text: 'What is a flare star?',
    answers: A('ast283', 'Star with sudden brightness increases', [
      'Constant star',
      'Planet',
      'Moon',
    ]),
    level: 7,
  },
  {
    id: 'ast284',
    text: 'What is a contact binary?',
    answers: A('ast284', 'Two stars sharing outer layers', [
      'Separate stars',
      'Single star',
      'Planet pair',
    ]),
    level: 7,
  },
  {
    id: 'ast285',
    text: 'What is an eclipsing binary?',
    answers: A('ast285', 'Binary stars that eclipse each other', [
      'Single star',
      'Planet system',
      'Moon system',
    ]),
    level: 6,
  },
  {
    id: 'ast286',
    text: 'What is a spectroscopic binary?',
    answers: A('ast286', 'Binary detected by spectral lines', [
      'Visual binary',
      'Single star',
      'Planet',
    ]),
    level: 7,
  },
  {
    id: 'ast287',
    text: 'What is proper motion?',
    answers: A('ast287', 'Stars movement across sky', [
      'No movement',
      'Planet orbit',
      'Moon phase',
    ]),
    level: 6,
  },
  {
    id: 'ast288',
    text: 'What is radial velocity?',
    answers: A('ast288', 'Stars motion toward or away from us', [
      'Sideways motion',
      'No motion',
      'Circular motion',
    ]),
    level: 6,
  },
  {
    id: 'ast289',
    text: 'What is the transit method?',
    answers: A('ast289', 'Detecting planets by star dimming', [
      'Direct imaging',
      'No detection',
      'Random method',
    ]),
    level: 5,
  },
  {
    id: 'ast290',
    text: 'What is the radial velocity method?',
    answers: A('ast290', 'Detecting planets by star wobble', [
      'Direct imaging',
      'No detection',
      'Random method',
    ]),
    level: 6,
  },
  {
    id: 'ast291',
    text: 'What is a hot Jupiter?',
    answers: A('ast291', 'Gas giant very close to its star', [
      'Cold planet',
      'Rocky planet',
      'Moon',
    ]),
    level: 5,
  },
  {
    id: 'ast292',
    text: 'What is a super-Earth?',
    answers: A('ast292', 'Rocky planet larger than Earth', [
      'Gas giant',
      'Smaller than Earth',
      'Moon',
    ]),
    level: 5,
  },
  {
    id: 'ast293',
    text: 'What is the habitable zone?',
    answers: A('ast293', 'Region where liquid water can exist', [
      'Too hot zone',
      'Too cold zone',
      'No zone',
    ]),
    level: 4,
  },
  {
    id: 'ast294',
    text: 'What is tidal locking?',
    answers: A('ast294', 'Same side always faces partner', [
      'Constant rotation',
      'No rotation',
      'Random rotation',
    ]),
    level: 5,
  },
  {
    id: 'ast295',
    text: 'What is orbital resonance?',
    answers: A('ast295', 'Orbits with simple period ratios', [
      'Random orbits',
      'No orbits',
      'Circular orbits',
    ]),
    level: 6,
  },
  {
    id: 'ast296',
    text: 'What is the Lagrange point?',
    answers: A('ast296', 'Point where gravitational forces balance', [
      'Random point',
      'Planet center',
      'Star center',
    ]),
    level: 6,
  },
  {
    id: 'ast297',
    text: 'What is the L1 Lagrange point?',
    answers: A('ast297', 'Point between two bodies', [
      'Behind smaller body',
      'Behind larger body',
      'Random location',
    ]),
    level: 7,
  },
  {
    id: 'ast298',
    text: 'What is the L2 Lagrange point?',
    answers: A('ast298', 'Point beyond smaller body', [
      'Between bodies',
      'Behind larger body',
      'Random location',
    ]),
    level: 7,
  },
  {
    id: 'ast299',
    text: 'What is a Trojan asteroid?',
    answers: A('ast299', 'Asteroid at Lagrange point', [
      'Main belt asteroid',
      'Near-Earth asteroid',
      'Kuiper belt object',
    ]),
    level: 6,
  },
  {
    id: 'ast300',
    text: 'What is the Great Red Spot?',
    answers: A('ast300', 'Giant storm on Jupiter', [
      'Mars feature',
      'Saturn ring',
      'Sun spot',
    ]),
    level: 2,
  },
];
