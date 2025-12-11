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
];
