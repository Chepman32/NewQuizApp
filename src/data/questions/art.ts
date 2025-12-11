import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const artQuestions: Question[] = [
  // ===== LEVEL 1: Very Easy =====
  {
    id: 'art1',
    text: 'Who painted the Mona Lisa?',
    answers: A('art1', 'Leonardo da Vinci', [
      'Michelangelo',
      'Raphael',
      'Donatello',
    ]),
    level: 1,
  },
  {
    id: 'art2',
    text: 'What are the three primary colors?',
    answers: A('art2', 'Red, blue, yellow', [
      'Red, green, blue',
      'Orange, purple, green',
      'Black, white, gray',
    ]),
    level: 1,
  },
  {
    id: 'art3',
    text: 'Who painted the ceiling of the Sistine Chapel?',
    answers: A('art3', 'Michelangelo', [
      'Leonardo da Vinci',
      'Raphael',
      'Botticelli',
    ]),
    level: 1,
  },
  {
    id: 'art4',
    text: 'What is a sculpture?',
    answers: A('art4', '3D artwork', [
      '2D painting',
      'Written work',
      'Musical piece',
    ]),
    level: 1,
  },
  {
    id: 'art5',
    text: 'Who painted "Starry Night"?',
    answers: A('art5', 'Vincent van Gogh', [
      'Claude Monet',
      'Pablo Picasso',
      'Salvador Dalí',
    ]),
    level: 1,
  },
  {
    id: 'art6',
    text: 'What tool do painters use to apply paint?',
    answers: A('art6', 'Brush', ['Hammer', 'Scissors', 'Needle']),
    level: 1,
  },
  {
    id: 'art7',
    text: 'What is a portrait?',
    answers: A('art7', 'Picture of a person', [
      'Picture of landscape',
      'Picture of food',
      'Picture of animals',
    ]),
    level: 1,
  },
  {
    id: 'art8',
    text: 'What is a landscape painting?',
    answers: A('art8', 'Picture of nature/scenery', [
      'Picture of a person',
      'Picture of objects',
      'Abstract art',
    ]),
    level: 1,
  },
  {
    id: 'art9',
    text: 'Who painted "The Last Supper"?',
    answers: A('art9', 'Leonardo da Vinci', [
      'Michelangelo',
      'Raphael',
      'Caravaggio',
    ]),
    level: 1,
  },
  {
    id: 'art10',
    text: 'What is a canvas?',
    answers: A('art10', 'Surface for painting', [
      'Type of paint',
      'Painting tool',
      'Art style',
    ]),
    level: 1,
  },
  {
    id: 'art11',
    text: 'What color do you get mixing red and yellow?',
    answers: A('art11', 'Orange', ['Green', 'Purple', 'Brown']),
    level: 1,
  },
  {
    id: 'art12',
    text: 'What color do you get mixing blue and yellow?',
    answers: A('art12', 'Green', ['Orange', 'Purple', 'Brown']),
    level: 1,
  },
  {
    id: 'art13',
    text: 'What color do you get mixing red and blue?',
    answers: A('art13', 'Purple', ['Green', 'Orange', 'Brown']),
    level: 1,
  },
  {
    id: 'art14',
    text: 'Who created the sculpture "David"?',
    answers: A('art14', 'Michelangelo', [
      'Leonardo da Vinci',
      'Donatello',
      'Bernini',
    ]),
    level: 1,
  },
  {
    id: 'art15',
    text: 'What is a still life painting?',
    answers: A('art15', 'Picture of inanimate objects', [
      'Picture of people',
      'Picture of landscapes',
      'Picture of animals',
    ]),
    level: 1,
  },
  {
    id: 'art16',
    text: 'What is a mural?',
    answers: A('art16', 'Painting on a wall', [
      'Small painting',
      'Sculpture',
      'Drawing',
    ]),
    level: 1,
  },
  {
    id: 'art17',
    text: 'What is a self-portrait?',
    answers: A('art17', "Artist's picture of themselves", [
      'Picture of family',
      'Picture of friend',
      'Picture of stranger',
    ]),
    level: 1,
  },
  {
    id: 'art18',
    text: 'Who painted "The Scream"?',
    answers: A('art18', 'Edvard Munch', [
      'Vincent van Gogh',
      'Pablo Picasso',
      'Salvador Dalí',
    ]),
    level: 1,
  },
  {
    id: 'art19',
    text: 'What is an easel?',
    answers: A('art19', 'Stand for holding canvas', [
      'Type of paint',
      'Painting technique',
      'Art movement',
    ]),
    level: 1,
  },
  {
    id: 'art20',
    text: 'What is a palette?',
    answers: A('art20', 'Board for mixing colors', [
      'Type of brush',
      'Canvas type',
      'Art style',
    ]),
    level: 1,
  },
  {
    id: 'art21',
    text: 'Who painted "Girl with a Pearl Earring"?',
    answers: A('art21', 'Johannes Vermeer', [
      'Rembrandt',
      'Frans Hals',
      'Jan Steen',
    ]),
    level: 1,
  },
  {
    id: 'art22',
    text: 'What is watercolor?',
    answers: A('art22', 'Paint mixed with water', [
      'Oil-based paint',
      'Acrylic paint',
      'Spray paint',
    ]),
    level: 1,
  },
  {
    id: 'art23',
    text: 'What is oil paint?',
    answers: A('art23', 'Paint mixed with oil', [
      'Water-based paint',
      'Acrylic paint',
      'Spray paint',
    ]),
    level: 1,
  },
  {
    id: 'art24',
    text: 'Who painted "Water Lilies"?',
    answers: A('art24', 'Claude Monet', [
      'Vincent van Gogh',
      'Pierre-Auguste Renoir',
      'Edgar Degas',
    ]),
    level: 1,
  },
  {
    id: 'art25',
    text: 'What is a sketch?',
    answers: A('art25', 'Quick drawing', [
      'Finished painting',
      'Sculpture',
      'Photograph',
    ]),
    level: 1,
  },
  {
    id: 'art26',
    text: 'What is a gallery?',
    answers: A('art26', 'Place to display art', [
      'Art supply store',
      'Art school',
      'Artist studio',
    ]),
    level: 1,
  },
  {
    id: 'art27',
    text: 'What is a museum?',
    answers: A('art27', 'Building housing art collections', [
      'Art school',
      'Art supply store',
      'Artist studio',
    ]),
    level: 1,
  },
  {
    id: 'art28',
    text: 'Who painted "The Birth of Venus"?',
    answers: A('art28', 'Sandro Botticelli', [
      'Leonardo da Vinci',
      'Michelangelo',
      'Raphael',
    ]),
    level: 1,
  },
  {
    id: 'art29',
    text: 'What is a frame?',
    answers: A('art29', 'Border around artwork', [
      'Type of paint',
      'Painting technique',
      'Art movement',
    ]),
    level: 1,
  },
  {
    id: 'art30',
    text: 'What is charcoal used for in art?',
    answers: A('art30', 'Drawing', ['Painting', 'Sculpting', 'Printing']),
    level: 1,
  },
  {
    id: 'art31',
    text: 'What is a collage?',
    answers: A('art31', 'Art made from glued materials', [
      'Oil painting',
      'Watercolor',
      'Sculpture',
    ]),
    level: 1,
  },
  {
    id: 'art32',
    text: 'What is pottery?',
    answers: A('art32', 'Art made from clay', [
      'Art made from metal',
      'Art made from wood',
      'Art made from glass',
    ]),
    level: 1,
  },
  {
    id: 'art33',
    text: 'What is a mosaic?',
    answers: A('art33', 'Art made from small pieces', [
      'Large painting',
      'Sculpture',
      'Drawing',
    ]),
    level: 1,
  },
  {
    id: 'art34',
    text: 'Who painted "Sunflowers"?',
    answers: A('art34', 'Vincent van Gogh', [
      'Claude Monet',
      'Paul Cézanne',
      'Paul Gauguin',
    ]),
    level: 1,
  },
  {
    id: 'art35',
    text: 'What is a statue?',
    answers: A('art35', 'Sculpture of a person or animal', [
      'Painting',
      'Drawing',
      'Photograph',
    ]),
    level: 1,
  },
  {
    id: 'art36',
    text: 'What is bronze?',
    answers: A('art36', 'Metal used for sculptures', [
      'Type of paint',
      'Canvas material',
      'Drawing tool',
    ]),
    level: 1,
  },
  {
    id: 'art37',
    text: 'What is marble?',
    answers: A('art37', 'Stone used for sculptures', [
      'Type of paint',
      'Canvas material',
      'Drawing tool',
    ]),
    level: 1,
  },
  {
    id: 'art38',
    text: 'Who painted "American Gothic"?',
    answers: A('art38', 'Grant Wood', [
      'Edward Hopper',
      'Norman Rockwell',
      'Andrew Wyeth',
    ]),
    level: 1,
  },
  {
    id: 'art39',
    text: 'What is a bust?',
    answers: A('art39', 'Sculpture of head and shoulders', [
      'Full body sculpture',
      'Painting',
      'Drawing',
    ]),
    level: 1,
  },
  {
    id: 'art40',
    text: 'What is a fresco?',
    answers: A('art40', 'Painting on wet plaster', [
      'Oil painting',
      'Watercolor',
      'Acrylic painting',
    ]),
    level: 1,
  },
  {
    id: 'art41',
    text: 'Who painted "Nighthawks"?',
    answers: A('art41', 'Edward Hopper', [
      'Grant Wood',
      'Norman Rockwell',
      'Andrew Wyeth',
    ]),
    level: 1,
  },
  {
    id: 'art42',
    text: 'What is perspective in art?',
    answers: A('art42', 'Creating depth on flat surface', [
      'Color mixing',
      'Brush technique',
      'Art movement',
    ]),
    level: 1,
  },
  {
    id: 'art43',
    text: 'What is shading?',
    answers: A('art43', 'Adding dark tones for depth', [
      'Adding bright colors',
      'Mixing colors',
      'Drawing outlines',
    ]),
    level: 1,
  },
  {
    id: 'art44',
    text: 'What is a horizon line?',
    answers: A('art44', 'Where sky meets land', [
      'Top of painting',
      'Bottom of painting',
      'Center of painting',
    ]),
    level: 1,
  },
  {
    id: 'art45',
    text: 'Who painted "The Persistence of Memory"?',
    answers: A('art45', 'Salvador Dalí', [
      'Pablo Picasso',
      'René Magritte',
      'Joan Miró',
    ]),
    level: 1,
  },
  {
    id: 'art46',
    text: 'What are the melting objects in "The Persistence of Memory"?',
    answers: A('art46', 'Clocks', ['Faces', 'Buildings', 'Trees']),
    level: 1,
  },
  {
    id: 'art47',
    text: 'What is abstract art?',
    answers: A('art47', 'Art not representing reality', [
      'Realistic art',
      'Portrait art',
      'Landscape art',
    ]),
    level: 1,
  },
  {
    id: 'art48',
    text: 'Who painted "Guernica"?',
    answers: A('art48', 'Pablo Picasso', [
      'Salvador Dalí',
      'Joan Miró',
      'Diego Rivera',
    ]),
    level: 1,
  },
  {
    id: 'art49',
    text: 'What is a print in art?',
    answers: A('art49', 'Reproduced image', [
      'Original painting',
      'Sculpture',
      'Drawing',
    ]),
    level: 1,
  },
  {
    id: 'art50',
    text: 'What is an art exhibition?',
    answers: A('art50', 'Public display of artworks', [
      'Art class',
      'Art auction',
      'Art competition',
    ]),
    level: 1,
  },

  // ===== LEVEL 2: Easy =====
  {
    id: 'art51',
    text: 'What art movement did Monet belong to?',
    answers: A('art51', 'Impressionism', [
      'Cubism',
      'Surrealism',
      'Expressionism',
    ]),
    level: 2,
  },
  {
    id: 'art52',
    text: 'What art movement did Picasso help create?',
    answers: A('art52', 'Cubism', [
      'Impressionism',
      'Surrealism',
      'Expressionism',
    ]),
    level: 2,
  },
  {
    id: 'art53',
    text: 'What art movement did Dalí belong to?',
    answers: A('art53', 'Surrealism', [
      'Cubism',
      'Impressionism',
      'Expressionism',
    ]),
    level: 2,
  },
  {
    id: 'art54',
    text: 'What is the Renaissance?',
    answers: A('art54', 'Cultural rebirth in Europe', [
      'Modern art movement',
      'Ancient art period',
      'Asian art style',
    ]),
    level: 2,
  },
  {
    id: 'art55',
    text: 'Where did the Renaissance begin?',
    answers: A('art55', 'Italy', ['France', 'Germany', 'Spain']),
    level: 2,
  },
  {
    id: 'art56',
    text: 'Who painted "The Night Watch"?',
    answers: A('art56', 'Rembrandt', ['Vermeer', 'Frans Hals', 'Jan Steen']),
    level: 2,
  },
  {
    id: 'art57',
    text: 'What is Baroque art known for?',
    answers: A('art57', 'Drama and grandeur', [
      'Simplicity',
      'Geometric shapes',
      'Flat colors',
    ]),
    level: 2,
  },
  {
    id: 'art58',
    text: 'Who painted "The Creation of Adam"?',
    answers: A('art58', 'Michelangelo', [
      'Leonardo da Vinci',
      'Raphael',
      'Botticelli',
    ]),
    level: 2,
  },
  {
    id: 'art59',
    text: 'What is chiaroscuro?',
    answers: A('art59', 'Light and shadow contrast', [
      'Color mixing',
      'Perspective technique',
      'Brush stroke style',
    ]),
    level: 2,
  },
  {
    id: 'art60',
    text: 'Who painted "The School of Athens"?',
    answers: A('art60', 'Raphael', [
      'Leonardo da Vinci',
      'Michelangelo',
      'Botticelli',
    ]),
    level: 2,
  },
  {
    id: 'art61',
    text: 'What is Pop Art?',
    answers: A('art61', 'Art using popular culture imagery', [
      'Classical art',
      'Abstract art',
      'Religious art',
    ]),
    level: 2,
  },
  {
    id: 'art62',
    text: 'Who was a famous Pop Art artist?',
    answers: A('art62', 'Andy Warhol', [
      'Pablo Picasso',
      'Salvador Dalí',
      'Claude Monet',
    ]),
    level: 2,
  },
  {
    id: 'art63',
    text: 'What did Andy Warhol famously paint?',
    answers: A('art63', "Campbell's Soup Cans", [
      'Sunflowers',
      'Water Lilies',
      'Starry Night',
    ]),
    level: 2,
  },
  {
    id: 'art64',
    text: 'What is Expressionism?',
    answers: A('art64', 'Art expressing emotions', [
      'Realistic art',
      'Geometric art',
      'Classical art',
    ]),
    level: 2,
  },
  {
    id: 'art65',
    text: 'Who painted "The Kiss"?',
    answers: A('art65', 'Gustav Klimt', [
      'Edvard Munch',
      'Egon Schiele',
      'Wassily Kandinsky',
    ]),
    level: 2,
  },
  {
    id: 'art66',
    text: 'What is Art Nouveau?',
    answers: A('art66', 'Decorative art with organic forms', [
      'Geometric art',
      'Abstract art',
      'Realistic art',
    ]),
    level: 2,
  },
  {
    id: 'art67',
    text: 'What is Minimalism?',
    answers: A('art67', 'Art with simple forms', [
      'Complex detailed art',
      'Realistic art',
      'Emotional art',
    ]),
    level: 2,
  },
  {
    id: 'art68',
    text: 'Who painted "A Sunday on La Grande Jatte"?',
    answers: A('art68', 'Georges Seurat', [
      'Claude Monet',
      'Pierre-Auguste Renoir',
      'Edgar Degas',
    ]),
    level: 2,
  },
  {
    id: 'art69',
    text: 'What is Pointillism?',
    answers: A('art69', 'Painting with dots', [
      'Painting with lines',
      'Painting with shapes',
      'Painting with splashes',
    ]),
    level: 2,
  },
  {
    id: 'art70',
    text: 'Who painted "The Dance Class"?',
    answers: A('art70', 'Edgar Degas', [
      'Claude Monet',
      'Pierre-Auguste Renoir',
      'Édouard Manet',
    ]),
    level: 2,
  },
  {
    id: 'art71',
    text: 'What subjects did Degas often paint?',
    answers: A('art71', 'Ballet dancers', [
      'Landscapes',
      'Still lifes',
      'Religious scenes',
    ]),
    level: 2,
  },
  {
    id: 'art72',
    text: 'Who painted "Luncheon on the Grass"?',
    answers: A('art72', 'Édouard Manet', [
      'Claude Monet',
      'Pierre-Auguste Renoir',
      'Edgar Degas',
    ]),
    level: 2,
  },
  {
    id: 'art73',
    text: 'What is the difference between Manet and Monet?',
    answers: A('art73', 'Different artists with similar names', [
      'Same person',
      'Father and son',
      'Brothers',
    ]),
    level: 2,
  },
  {
    id: 'art74',
    text: 'Who painted "The Card Players"?',
    answers: A('art74', 'Paul Cézanne', [
      'Vincent van Gogh',
      'Paul Gauguin',
      'Henri Toulouse-Lautrec',
    ]),
    level: 2,
  },
  {
    id: 'art75',
    text: 'What is Post-Impressionism?',
    answers: A('art75', 'Movement after Impressionism', [
      'Movement before Impressionism',
      'Same as Impressionism',
      'Type of sculpture',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'art76',
    text: 'Who painted "Las Meninas"?',
    answers: A('art76', 'Diego Velázquez', [
      'Francisco Goya',
      'El Greco',
      'Bartolomé Murillo',
    ]),
    level: 3,
  },
  {
    id: 'art77',
    text: 'What is tenebrism?',
    answers: A('art77', 'Dramatic illumination technique', [
      'Color theory',
      'Perspective method',
      'Sculpture technique',
    ]),
    level: 3,
  },
  {
    id: 'art78',
    text: 'Who painted "The Third of May 1808"?',
    answers: A('art78', 'Francisco Goya', [
      'Diego Velázquez',
      'El Greco',
      'Bartolomé Murillo',
    ]),
    level: 3,
  },
  {
    id: 'art79',
    text: 'What is sfumato?',
    answers: A('art79', 'Soft blending technique', [
      'Hard edge technique',
      'Color mixing',
      'Perspective method',
    ]),
    level: 3,
  },
  {
    id: 'art80',
    text: 'Who developed sfumato?',
    answers: A('art80', 'Leonardo da Vinci', [
      'Michelangelo',
      'Raphael',
      'Botticelli',
    ]),
    level: 3,
  },
  {
    id: 'art81',
    text: 'What is contrapposto?',
    answers: A('art81', 'Asymmetrical standing pose', [
      'Symmetrical pose',
      'Sitting pose',
      'Lying pose',
    ]),
    level: 3,
  },
  {
    id: 'art82',
    text: 'Who painted "The Garden of Earthly Delights"?',
    answers: A('art82', 'Hieronymus Bosch', [
      'Pieter Bruegel',
      'Jan van Eyck',
      'Rogier van der Weyden',
    ]),
    level: 3,
  },
  {
    id: 'art83',
    text: 'What is tempera paint?',
    answers: A('art83', 'Egg-based paint', [
      'Oil-based paint',
      'Water-based paint',
      'Acrylic paint',
    ]),
    level: 3,
  },
  {
    id: 'art84',
    text: 'Who painted "The Arnolfini Portrait"?',
    answers: A('art84', 'Jan van Eyck', [
      'Rogier van der Weyden',
      'Hans Memling',
      'Hugo van der Goes',
    ]),
    level: 3,
  },
  {
    id: 'art85',
    text: 'What is gesso?',
    answers: A('art85', 'Primer for canvas', [
      'Type of paint',
      'Brush type',
      'Art movement',
    ]),
    level: 3,
  },
  {
    id: 'art86',
    text: 'Who painted "The Hay Wain"?',
    answers: A('art86', 'John Constable', [
      'J.M.W. Turner',
      'Thomas Gainsborough',
      'Joshua Reynolds',
    ]),
    level: 4,
  },
  {
    id: 'art87',
    text: 'What is plein air painting?',
    answers: A('art87', 'Painting outdoors', [
      'Painting indoors',
      'Painting from memory',
      'Painting from photographs',
    ]),
    level: 4,
  },
  {
    id: 'art88',
    text: 'Who painted "Rain, Steam and Speed"?',
    answers: A('art88', 'J.M.W. Turner', [
      'John Constable',
      'Thomas Gainsborough',
      'Joshua Reynolds',
    ]),
    level: 4,
  },
  {
    id: 'art89',
    text: 'What is impasto?',
    answers: A('art89', 'Thick paint application', [
      'Thin paint application',
      'Smooth paint application',
      'Spray paint application',
    ]),
    level: 4,
  },
  {
    id: 'art90',
    text: 'Who painted "Olympia"?',
    answers: A('art90', 'Édouard Manet', [
      'Claude Monet',
      'Pierre-Auguste Renoir',
      'Edgar Degas',
    ]),
    level: 4,
  },
  {
    id: 'art91',
    text: 'What is the Salon in art history?',
    answers: A('art91', 'Official French art exhibition', [
      'Art school',
      'Art gallery',
      'Art movement',
    ]),
    level: 4,
  },
  {
    id: 'art92',
    text: 'Who painted "Impression, Sunrise"?',
    answers: A('art92', 'Claude Monet', [
      'Pierre-Auguste Renoir',
      'Edgar Degas',
      'Camille Pissarro',
    ]),
    level: 4,
  },
  {
    id: 'art93',
    text: 'What painting gave Impressionism its name?',
    answers: A('art93', 'Impression, Sunrise', [
      'Water Lilies',
      'Starry Night',
      'The Scream',
    ]),
    level: 4,
  },
  {
    id: 'art94',
    text: 'Who painted "Le Moulin de la Galette"?',
    answers: A('art94', 'Pierre-Auguste Renoir', [
      'Claude Monet',
      'Edgar Degas',
      'Édouard Manet',
    ]),
    level: 4,
  },
  {
    id: 'art95',
    text: 'What is en plein air?',
    answers: A('art95', 'French for "in open air"', [
      'French for "in studio"',
      'French for "in gallery"',
      'French for "in museum"',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-6: Hard/Very Hard =====
  {
    id: 'art96',
    text: 'What is the Bauhaus?',
    answers: A('art96', 'German art school', [
      'French art movement',
      'Italian art period',
      'Spanish art style',
    ]),
    level: 5,
  },
  {
    id: 'art97',
    text: 'Who founded the Bauhaus?',
    answers: A('art97', 'Walter Gropius', [
      'Ludwig Mies van der Rohe',
      'Marcel Breuer',
      'Paul Klee',
    ]),
    level: 5,
  },
  {
    id: 'art98',
    text: 'What is De Stijl?',
    answers: A('art98', 'Dutch art movement', [
      'German art movement',
      'French art movement',
      'Italian art movement',
    ]),
    level: 5,
  },
  {
    id: 'art99',
    text: 'Who was associated with De Stijl?',
    answers: A('art99', 'Piet Mondrian', [
      'Pablo Picasso',
      'Wassily Kandinsky',
      'Paul Klee',
    ]),
    level: 5,
  },
  {
    id: 'art100',
    text: 'What is Suprematism?',
    answers: A('art100', 'Russian abstract art movement', [
      'French art movement',
      'German art movement',
      'Italian art movement',
    ]),
    level: 5,
  },
  {
    id: 'art101',
    text: 'Who founded Suprematism?',
    answers: A('art101', 'Kazimir Malevich', [
      'Wassily Kandinsky',
      'El Lissitzky',
      'Alexander Rodchenko',
    ]),
    level: 5,
  },
  {
    id: 'art102',
    text: 'What is Constructivism?',
    answers: A('art102', 'Russian art movement', [
      'French art movement',
      'German art movement',
      'Italian art movement',
    ]),
    level: 5,
  },
  {
    id: 'art103',
    text: 'What is Dadaism?',
    answers: A('art103', 'Anti-art movement', [
      'Classical art movement',
      'Realistic art movement',
      'Religious art movement',
    ]),
    level: 5,
  },
  {
    id: 'art104',
    text: 'Who was associated with Dadaism?',
    answers: A('art104', 'Marcel Duchamp', [
      'Pablo Picasso',
      'Salvador Dalí',
      'René Magritte',
    ]),
    level: 5,
  },
  {
    id: 'art105',
    text: 'What is a readymade?',
    answers: A('art105', 'Found object as art', [
      'Handmade sculpture',
      'Painted canvas',
      'Drawn sketch',
    ]),
    level: 5,
  },
  {
    id: 'art106',
    text: "What is Duchamp's famous readymade?",
    answers: A('art106', 'Fountain (urinal)', [
      'Bicycle wheel',
      'Bottle rack',
      'Hat rack',
    ]),
    level: 6,
  },
  {
    id: 'art107',
    text: 'What is Abstract Expressionism?',
    answers: A('art107', 'American abstract movement', [
      'European abstract movement',
      'Asian abstract movement',
      'African abstract movement',
    ]),
    level: 6,
  },
  {
    id: 'art108',
    text: 'Who was associated with Abstract Expressionism?',
    answers: A('art108', 'Jackson Pollock', [
      'Andy Warhol',
      'Roy Lichtenstein',
      'Jasper Johns',
    ]),
    level: 6,
  },
  {
    id: 'art109',
    text: 'What is action painting?',
    answers: A('art109', 'Spontaneous paint application', [
      'Careful detailed painting',
      'Geometric painting',
      'Realistic painting',
    ]),
    level: 6,
  },
  {
    id: 'art110',
    text: 'What technique did Pollock use?',
    answers: A('art110', 'Drip painting', [
      'Pointillism',
      'Impasto',
      'Sfumato',
    ]),
    level: 6,
  },
  {
    id: 'art111',
    text: 'Who painted "No. 5, 1948"?',
    answers: A('art111', 'Jackson Pollock', [
      'Mark Rothko',
      'Willem de Kooning',
      'Franz Kline',
    ]),
    level: 6,
  },
  {
    id: 'art112',
    text: 'What is Color Field painting?',
    answers: A('art112', 'Large areas of flat color', [
      'Small detailed areas',
      'Geometric shapes',
      'Realistic scenes',
    ]),
    level: 6,
  },
  {
    id: 'art113',
    text: 'Who was associated with Color Field painting?',
    answers: A('art113', 'Mark Rothko', [
      'Jackson Pollock',
      'Willem de Kooning',
      'Franz Kline',
    ]),
    level: 6,
  },
  {
    id: 'art114',
    text: 'What is Conceptual Art?',
    answers: A('art114', 'Idea over aesthetics', [
      'Aesthetics over idea',
      'Technical skill focus',
      'Traditional methods',
    ]),
    level: 6,
  },
  {
    id: 'art115',
    text: 'Who is associated with Conceptual Art?',
    answers: A('art115', 'Sol LeWitt', [
      'Andy Warhol',
      'Roy Lichtenstein',
      'Jasper Johns',
    ]),
    level: 6,
  },

  // ===== LEVEL 7-8: Legendary/Professor =====
  {
    id: 'art116',
    text: 'What is the "death of painting" debate?',
    answers: A('art116', "Question of painting's relevance", [
      'Literal death of painters',
      'End of art schools',
      'Destruction of paintings',
    ]),
    level: 7,
  },
  {
    id: 'art117',
    text: 'What is institutional critique?',
    answers: A('art117', 'Art questioning art institutions', [
      'Art supporting institutions',
      'Art ignoring institutions',
      'Art destroying institutions',
    ]),
    level: 7,
  },
  {
    id: 'art118',
    text: 'Who is associated with institutional critique?',
    answers: A('art118', 'Hans Haacke', [
      'Andy Warhol',
      'Jeff Koons',
      'Damien Hirst',
    ]),
    level: 7,
  },
  {
    id: 'art119',
    text: 'What is relational aesthetics?',
    answers: A('art119', 'Art as social encounter', [
      'Art as object',
      'Art as decoration',
      'Art as investment',
    ]),
    level: 7,
  },
  {
    id: 'art120',
    text: 'Who coined "relational aesthetics"?',
    answers: A('art120', 'Nicolas Bourriaud', [
      'Arthur Danto',
      'Rosalind Krauss',
      'Hal Foster',
    ]),
    level: 7,
  },
  {
    id: 'art121',
    text: 'What is the "expanded field" in sculpture?',
    answers: A('art121', "Rosalind Krauss's theory", [
      'Traditional sculpture',
      'Miniature sculpture',
      'Bronze sculpture',
    ]),
    level: 8,
  },
  {
    id: 'art122',
    text: 'What is the "white cube" gallery?',
    answers: A('art122', 'Neutral exhibition space', [
      'Colorful gallery',
      'Outdoor gallery',
      'Underground gallery',
    ]),
    level: 8,
  },
  {
    id: 'art123',
    text: 'Who wrote "The Work of Art in the Age of Mechanical Reproduction"?',
    answers: A('art123', 'Walter Benjamin', [
      'Theodor Adorno',
      'Max Horkheimer',
      'Herbert Marcuse',
    ]),
    level: 8,
  },
  {
    id: 'art124',
    text: 'What is "aura" in Benjamin\'s theory?',
    answers: A('art124', 'Unique presence of original', [
      'Copy quality',
      'Artist fame',
      'Market value',
    ]),
    level: 8,
  },
  {
    id: 'art125',
    text: 'What is the "artworld" according to Danto?',
    answers: A('art125', 'Theory and history enabling art', [
      'Physical art market',
      'Art collectors',
      'Art museums',
    ]),
    level: 8,
  },
];
