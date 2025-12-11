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

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'art126',
    text: 'What are the primary colors?',
    answers: A('art126', 'Red, blue, yellow', [
      'Green, orange, purple',
      'Black, white, gray',
      'Pink, brown, tan',
    ]),
    level: 1,
  },
  {
    id: 'art127',
    text: 'What tool do painters use to apply paint?',
    answers: A('art127', 'Brush', ['Hammer', 'Scissors', 'Ruler']),
    level: 1,
  },
  {
    id: 'art128',
    text: 'What is a sculpture?',
    answers: A('art128', '3D artwork', ['2D painting', 'Music piece', 'Dance']),
    level: 1,
  },
  {
    id: 'art129',
    text: 'What is a portrait?',
    answers: A('art129', 'Picture of a person', [
      'Picture of landscape',
      'Picture of food',
      'Picture of animals',
    ]),
    level: 1,
  },
  {
    id: 'art130',
    text: 'What is a landscape painting?',
    answers: A('art130', 'Picture of nature scenery', [
      'Picture of people',
      'Picture of buildings',
      'Picture of objects',
    ]),
    level: 1,
  },
  {
    id: 'art131',
    text: 'What is a still life?',
    answers: A('art131', 'Painting of inanimate objects', [
      'Painting of people',
      'Painting of animals',
      'Painting of landscapes',
    ]),
    level: 1,
  },
  {
    id: 'art132',
    text: 'What is a canvas?',
    answers: A('art132', 'Surface for painting', [
      'Type of paint',
      'Painting tool',
      'Art style',
    ]),
    level: 1,
  },
  {
    id: 'art133',
    text: 'What is a palette?',
    answers: A('art133', 'Board for mixing colors', [
      'Type of brush',
      'Art frame',
      'Canvas type',
    ]),
    level: 1,
  },
  {
    id: 'art134',
    text: 'What is an easel?',
    answers: A('art134', 'Stand for holding canvas', [
      'Type of paint',
      'Painting technique',
      'Art style',
    ]),
    level: 1,
  },
  {
    id: 'art135',
    text: 'What is a mural?',
    answers: A('art135', 'Large wall painting', [
      'Small painting',
      'Sculpture',
      'Photograph',
    ]),
    level: 1,
  },
  {
    id: 'art136',
    text: 'What is a mosaic?',
    answers: A('art136', 'Art made from small pieces', [
      'Oil painting',
      'Watercolor',
      'Pencil drawing',
    ]),
    level: 2,
  },
  {
    id: 'art137',
    text: 'What is a fresco?',
    answers: A('art137', 'Painting on wet plaster', [
      'Painting on canvas',
      'Painting on wood',
      'Painting on paper',
    ]),
    level: 2,
  },
  {
    id: 'art138',
    text: 'What is perspective in art?',
    answers: A('art138', 'Creating depth on flat surface', [
      'Color mixing',
      'Brush technique',
      'Frame style',
    ]),
    level: 2,
  },
  {
    id: 'art139',
    text: 'What is shading?',
    answers: A('art139', 'Adding darkness for depth', [
      'Adding color',
      'Adding lines',
      'Adding texture',
    ]),
    level: 2,
  },
  {
    id: 'art140',
    text: 'What is a sketch?',
    answers: A('art140', 'Quick preliminary drawing', [
      'Finished painting',
      'Sculpture',
      'Photograph',
    ]),
    level: 2,
  },
  {
    id: 'art141',
    text: 'What is watercolor?',
    answers: A('art141', 'Paint mixed with water', [
      'Paint mixed with oil',
      'Paint mixed with wax',
      'Paint mixed with glue',
    ]),
    level: 2,
  },
  {
    id: 'art142',
    text: 'What is oil paint?',
    answers: A('art142', 'Paint with oil binder', [
      'Paint with water',
      'Paint with wax',
      'Paint with glue',
    ]),
    level: 2,
  },
  {
    id: 'art143',
    text: 'What is acrylic paint?',
    answers: A('art143', 'Fast-drying synthetic paint', [
      'Slow-drying oil paint',
      'Watercolor',
      'Tempera',
    ]),
    level: 2,
  },
  {
    id: 'art144',
    text: 'What is a collage?',
    answers: A('art144', 'Art from glued materials', [
      'Oil painting',
      'Watercolor',
      'Pencil drawing',
    ]),
    level: 2,
  },
  {
    id: 'art145',
    text: 'What is printmaking?',
    answers: A('art145', 'Creating art by printing', [
      'Painting',
      'Sculpting',
      'Drawing',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'art146',
    text: 'What is chiaroscuro?',
    answers: A('art146', 'Strong light-dark contrast', [
      'Color harmony',
      'Perspective technique',
      'Brush stroke',
    ]),
    level: 3,
  },
  {
    id: 'art147',
    text: 'What is sfumato?',
    answers: A('art147', 'Soft blending technique', [
      'Sharp edges',
      'Bold colors',
      'Geometric shapes',
    ]),
    level: 3,
  },
  {
    id: 'art148',
    text: 'What is trompe-l oeil?',
    answers: A('art148', 'Optical illusion art', [
      'Abstract art',
      'Minimalist art',
      'Expressionist art',
    ]),
    level: 3,
  },
  {
    id: 'art149',
    text: 'What is impasto?',
    answers: A('art149', 'Thick paint application', [
      'Thin paint layers',
      'Watercolor technique',
      'Pencil shading',
    ]),
    level: 3,
  },
  {
    id: 'art150',
    text: 'What is glazing in painting?',
    answers: A('art150', 'Transparent paint layers', [
      'Opaque paint',
      'Thick paint',
      'Dry brush',
    ]),
    level: 3,
  },
  {
    id: 'art151',
    text: 'What is the golden ratio?',
    answers: A('art151', 'Mathematical proportion in art', [
      'Color theory',
      'Brush technique',
      'Canvas size',
    ]),
    level: 3,
  },
  {
    id: 'art152',
    text: 'What is composition in art?',
    answers: A('art152', 'Arrangement of elements', [
      'Color choice',
      'Brush type',
      'Canvas material',
    ]),
    level: 3,
  },
  {
    id: 'art153',
    text: 'What is negative space?',
    answers: A('art153', 'Empty space around subject', [
      'Filled space',
      'Dark areas',
      'Colored areas',
    ]),
    level: 3,
  },
  {
    id: 'art154',
    text: 'What is a vanishing point?',
    answers: A('art154', 'Point where parallel lines meet', [
      'Starting point',
      'Center point',
      'Random point',
    ]),
    level: 3,
  },
  {
    id: 'art155',
    text: 'What is foreshortening?',
    answers: A('art155', 'Distortion for depth effect', [
      'Elongation',
      'Flattening',
      'Enlarging',
    ]),
    level: 3,
  },
  {
    id: 'art156',
    text: 'What is Art Nouveau?',
    answers: A('art156', 'Decorative style with organic forms', [
      'Geometric style',
      'Minimalist style',
      'Abstract style',
    ]),
    level: 4,
  },
  {
    id: 'art157',
    text: 'What is Art Deco?',
    answers: A('art157', 'Geometric decorative style', [
      'Organic style',
      'Naturalistic style',
      'Impressionist style',
    ]),
    level: 4,
  },
  {
    id: 'art158',
    text: 'What is Bauhaus?',
    answers: A('art158', 'German design school', [
      'French art movement',
      'Italian style',
      'Spanish technique',
    ]),
    level: 4,
  },
  {
    id: 'art159',
    text: 'What is De Stijl?',
    answers: A('art159', 'Dutch abstract movement', [
      'French movement',
      'German movement',
      'Italian movement',
    ]),
    level: 4,
  },
  {
    id: 'art160',
    text: 'What is Fauvism?',
    answers: A('art160', 'Bold color movement', [
      'Muted color movement',
      'Black and white art',
      'Realistic art',
    ]),
    level: 4,
  },
  {
    id: 'art161',
    text: 'What is Dadaism?',
    answers: A('art161', 'Anti-art movement', [
      'Traditional art',
      'Classical art',
      'Academic art',
    ]),
    level: 4,
  },
  {
    id: 'art162',
    text: 'What is Constructivism?',
    answers: A('art162', 'Russian abstract movement', [
      'French movement',
      'American movement',
      'British movement',
    ]),
    level: 4,
  },
  {
    id: 'art163',
    text: 'What is Suprematism?',
    answers: A('art163', 'Geometric abstraction movement', [
      'Figurative movement',
      'Realistic movement',
      'Naturalistic movement',
    ]),
    level: 4,
  },
  {
    id: 'art164',
    text: 'What is Futurism?',
    answers: A('art164', 'Movement celebrating speed and technology', [
      'Movement celebrating nature',
      'Movement celebrating tradition',
      'Movement celebrating stillness',
    ]),
    level: 4,
  },
  {
    id: 'art165',
    text: 'What is Precisionism?',
    answers: A('art165', 'American industrial art', [
      'European romantic art',
      'Asian traditional art',
      'African tribal art',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'art166',
    text: 'What is action painting?',
    answers: A('art166', 'Spontaneous paint application', [
      'Careful detailed painting',
      'Geometric painting',
      'Realistic painting',
    ]),
    level: 5,
  },
  {
    id: 'art167',
    text: 'What is color field painting?',
    answers: A('art167', 'Large areas of flat color', [
      'Small detailed areas',
      'Textured surfaces',
      'Geometric patterns',
    ]),
    level: 5,
  },
  {
    id: 'art168',
    text: 'What is hard-edge painting?',
    answers: A('art168', 'Sharp boundaries between colors', [
      'Soft blended edges',
      'Textured edges',
      'Irregular edges',
    ]),
    level: 5,
  },
  {
    id: 'art169',
    text: 'What is Neo-Expressionism?',
    answers: A('art169', 'Return to expressive painting', [
      'Minimalist movement',
      'Conceptual movement',
      'Abstract movement',
    ]),
    level: 5,
  },
  {
    id: 'art170',
    text: 'What is Photorealism?',
    answers: A('art170', 'Painting resembling photographs', [
      'Abstract painting',
      'Impressionist painting',
      'Expressionist painting',
    ]),
    level: 5,
  },
  {
    id: 'art171',
    text: 'What is appropriation art?',
    answers: A('art171', 'Using existing images', [
      'Creating original images',
      'Abstract art',
      'Minimalist art',
    ]),
    level: 6,
  },
  {
    id: 'art172',
    text: 'What is installation art?',
    answers: A('art172', 'Site-specific 3D works', [
      '2D paintings',
      'Small sculptures',
      'Photographs',
    ]),
    level: 6,
  },
  {
    id: 'art173',
    text: 'What is performance art?',
    answers: A('art173', 'Art as live action', [
      'Static art',
      'Painted art',
      'Sculpted art',
    ]),
    level: 6,
  },
  {
    id: 'art174',
    text: 'What is land art?',
    answers: A('art174', 'Art in natural landscape', [
      'Art in galleries',
      'Art in museums',
      'Art in studios',
    ]),
    level: 6,
  },
  {
    id: 'art175',
    text: 'What is video art?',
    answers: A('art175', 'Art using video medium', [
      'Art using paint',
      'Art using stone',
      'Art using metal',
    ]),
    level: 6,
  },
  {
    id: 'art176',
    text: 'What is relational aesthetics?',
    answers: A('art176', 'Art as social interaction', [
      'Art as object',
      'Art as image',
      'Art as sound',
    ]),
    level: 7,
  },
  {
    id: 'art177',
    text: 'What is institutional critique?',
    answers: A('art177', 'Art questioning art institutions', [
      'Art supporting institutions',
      'Art ignoring institutions',
      'Art decorating institutions',
    ]),
    level: 7,
  },
  {
    id: 'art178',
    text: 'What is post-internet art?',
    answers: A('art178', 'Art influenced by internet culture', [
      'Art before internet',
      'Art without technology',
      'Traditional art',
    ]),
    level: 7,
  },
  {
    id: 'art179',
    text: 'What is bio art?',
    answers: A('art179', 'Art using living organisms', [
      'Art using paint',
      'Art using stone',
      'Art using metal',
    ]),
    level: 7,
  },
  {
    id: 'art180',
    text: 'What is generative art?',
    answers: A('art180', 'Art created by algorithms', [
      'Art created by hand',
      'Art created by accident',
      'Art created by nature',
    ]),
    level: 7,
  },
  {
    id: 'art181',
    text: 'What is the Pictures Generation?',
    answers: A('art181', 'Artists using appropriated images', [
      'Artists using original images',
      'Artists using sculptures',
      'Artists using performance',
    ]),
    level: 8,
  },
  {
    id: 'art182',
    text: 'What is the Young British Artists movement?',
    answers: A('art182', 'Provocative British artists 1990s', [
      'Traditional British artists',
      'Academic British artists',
      'Classical British artists',
    ]),
    level: 8,
  },
  {
    id: 'art183',
    text: 'What is Superflat?',
    answers: A('art183', 'Japanese postmodern art movement', [
      'American movement',
      'European movement',
      'African movement',
    ]),
    level: 8,
  },
  {
    id: 'art184',
    text: 'What is Stuckism?',
    answers: A('art184', 'Anti-conceptual art movement', [
      'Pro-conceptual movement',
      'Abstract movement',
      'Minimalist movement',
    ]),
    level: 8,
  },
  {
    id: 'art185',
    text: 'What is Altermodern?',
    answers: A('art185', 'Post-postmodern art concept', [
      'Modern art',
      'Classical art',
      'Traditional art',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'art186',
    text: 'What is art?',
    answers: A('art186', 'Creative expression', ['Science', 'Math', 'History']),
    level: 1,
  },
  {
    id: 'art187',
    text: 'What is a painting?',
    answers: A('art187', 'Art made with paint', [
      'Art made with clay',
      'Art made with stone',
      'Art made with metal',
    ]),
    level: 1,
  },
  {
    id: 'art188',
    text: 'What is a drawing?',
    answers: A('art188', 'Art made with pencil or pen', [
      'Art made with paint',
      'Art made with clay',
      'Art made with stone',
    ]),
    level: 1,
  },
  {
    id: 'art189',
    text: 'What is a sculpture?',
    answers: A('art189', 'Three-dimensional art', [
      'Two-dimensional art',
      'Music',
      'Dance',
    ]),
    level: 1,
  },
  {
    id: 'art190',
    text: 'What is a photograph?',
    answers: A('art190', 'Image captured by camera', [
      'Painting',
      'Drawing',
      'Sculpture',
    ]),
    level: 1,
  },
  {
    id: 'art191',
    text: 'What is a museum?',
    answers: A('art191', 'Place to display art', [
      'Place to make art',
      'Place to sell art',
      'Place to destroy art',
    ]),
    level: 1,
  },
  {
    id: 'art192',
    text: 'What is a gallery?',
    answers: A('art192', 'Place to show and sell art', [
      'Place to make art',
      'Place to store art',
      'Place to destroy art',
    ]),
    level: 1,
  },
  {
    id: 'art193',
    text: 'What is an artist?',
    answers: A('art193', 'Person who creates art', [
      'Person who sells art',
      'Person who buys art',
      'Person who destroys art',
    ]),
    level: 1,
  },
  {
    id: 'art194',
    text: 'What is a canvas?',
    answers: A('art194', 'Surface for painting', [
      'Surface for writing',
      'Surface for walking',
      'Surface for sleeping',
    ]),
    level: 1,
  },
  {
    id: 'art195',
    text: 'What is a brush?',
    answers: A('art195', 'Tool for applying paint', [
      'Tool for cutting',
      'Tool for measuring',
      'Tool for writing',
    ]),
    level: 1,
  },
  {
    id: 'art196',
    text: 'What is a palette?',
    answers: A('art196', 'Surface for mixing paint', [
      'Surface for painting',
      'Tool for cutting',
      'Tool for measuring',
    ]),
    level: 1,
  },
  {
    id: 'art197',
    text: 'What is red?',
    answers: A('art197', 'Primary color', [
      'Secondary color',
      'Neutral color',
      'No color',
    ]),
    level: 1,
  },
  {
    id: 'art198',
    text: 'What is blue?',
    answers: A('art198', 'Primary color', [
      'Secondary color',
      'Neutral color',
      'No color',
    ]),
    level: 1,
  },
  {
    id: 'art199',
    text: 'What is yellow?',
    answers: A('art199', 'Primary color', [
      'Secondary color',
      'Neutral color',
      'No color',
    ]),
    level: 1,
  },
  {
    id: 'art200',
    text: 'What is green?',
    answers: A('art200', 'Secondary color (blue + yellow)', [
      'Primary color',
      'Neutral color',
      'No color',
    ]),
    level: 1,
  },
  {
    id: 'art201',
    text: 'What is orange?',
    answers: A('art201', 'Secondary color (red + yellow)', [
      'Primary color',
      'Neutral color',
      'No color',
    ]),
    level: 1,
  },
  {
    id: 'art202',
    text: 'What is purple?',
    answers: A('art202', 'Secondary color (red + blue)', [
      'Primary color',
      'Neutral color',
      'No color',
    ]),
    level: 1,
  },
  {
    id: 'art203',
    text: 'What is black?',
    answers: A('art203', 'Absence of light', [
      'Primary color',
      'Secondary color',
      'Bright color',
    ]),
    level: 1,
  },
  {
    id: 'art204',
    text: 'What is white?',
    answers: A('art204', 'All colors of light combined', [
      'Absence of color',
      'Primary color',
      'Secondary color',
    ]),
    level: 1,
  },
  {
    id: 'art205',
    text: 'What is a portrait?',
    answers: A('art205', 'Picture of a person', [
      'Picture of landscape',
      'Picture of objects',
      'Picture of animals',
    ]),
    level: 1,
  },
  {
    id: 'art206',
    text: 'What is a landscape?',
    answers: A('art206', 'Picture of scenery', [
      'Picture of person',
      'Picture of objects',
      'Picture of animals',
    ]),
    level: 1,
  },
  {
    id: 'art207',
    text: 'What is a still life?',
    answers: A('art207', 'Picture of objects', [
      'Picture of person',
      'Picture of landscape',
      'Picture of action',
    ]),
    level: 1,
  },
  {
    id: 'art208',
    text: 'What is a frame?',
    answers: A('art208', 'Border around artwork', [
      'Center of artwork',
      'Back of artwork',
      'Top of artwork',
    ]),
    level: 1,
  },
  {
    id: 'art209',
    text: 'What is a sketch?',
    answers: A('art209', 'Quick rough drawing', [
      'Detailed painting',
      'Sculpture',
      'Photograph',
    ]),
    level: 1,
  },
  {
    id: 'art210',
    text: 'What is a masterpiece?',
    answers: A('art210', 'Outstanding work of art', [
      'Average work',
      'Bad work',
      'Unfinished work',
    ]),
    level: 1,
  },
  {
    id: 'art211',
    text: 'What is a mural?',
    answers: A('art211', 'Painting on a wall', [
      'Painting on canvas',
      'Painting on paper',
      'Sculpture',
    ]),
    level: 1,
  },
  {
    id: 'art212',
    text: 'What is a statue?',
    answers: A('art212', 'Sculpture of person or animal', [
      'Painting',
      'Drawing',
      'Photograph',
    ]),
    level: 1,
  },
  {
    id: 'art213',
    text: 'What is clay?',
    answers: A('art213', 'Material for sculpting', [
      'Material for painting',
      'Material for drawing',
      'Material for photography',
    ]),
    level: 1,
  },
  {
    id: 'art214',
    text: 'What is pottery?',
    answers: A('art214', 'Objects made from clay', [
      'Objects made from metal',
      'Objects made from wood',
      'Objects made from glass',
    ]),
    level: 1,
  },
  {
    id: 'art215',
    text: 'What is a vase?',
    answers: A('art215', 'Container for flowers', [
      'Container for food',
      'Container for water',
      'Container for clothes',
    ]),
    level: 1,
  },
  {
    id: 'art216',
    text: 'What is a pencil?',
    answers: A('art216', 'Tool for drawing', [
      'Tool for painting',
      'Tool for sculpting',
      'Tool for photography',
    ]),
    level: 1,
  },
  {
    id: 'art217',
    text: 'What is an eraser?',
    answers: A('art217', 'Tool for removing marks', [
      'Tool for making marks',
      'Tool for painting',
      'Tool for sculpting',
    ]),
    level: 1,
  },
  {
    id: 'art218',
    text: 'What is paper?',
    answers: A('art218', 'Surface for drawing or writing', [
      'Surface for painting only',
      'Surface for sculpting',
      'Surface for photography',
    ]),
    level: 1,
  },
  {
    id: 'art219',
    text: 'What is watercolor?',
    answers: A('art219', 'Paint mixed with water', [
      'Paint mixed with oil',
      'Paint mixed with wax',
      'Dry paint',
    ]),
    level: 1,
  },
  {
    id: 'art220',
    text: 'What is oil paint?',
    answers: A('art220', 'Paint mixed with oil', [
      'Paint mixed with water',
      'Paint mixed with wax',
      'Dry paint',
    ]),
    level: 1,
  },
  {
    id: 'art221',
    text: 'What is a crayon?',
    answers: A('art221', 'Colored wax stick for drawing', [
      'Pencil',
      'Brush',
      'Pen',
    ]),
    level: 1,
  },
  {
    id: 'art222',
    text: 'What is a marker?',
    answers: A('art222', 'Pen with colored ink', ['Pencil', 'Crayon', 'Brush']),
    level: 1,
  },
  {
    id: 'art223',
    text: 'What is coloring?',
    answers: A('art223', 'Filling areas with color', [
      'Drawing outlines',
      'Sculpting',
      'Photography',
    ]),
    level: 1,
  },
  {
    id: 'art224',
    text: 'What is shading?',
    answers: A('art224', 'Adding dark areas for depth', [
      'Adding light areas',
      'Adding color',
      'Removing marks',
    ]),
    level: 1,
  },
  {
    id: 'art225',
    text: 'What is an outline?',
    answers: A('art225', 'Line showing edge of shape', [
      'Filled area',
      'Shaded area',
      'Colored area',
    ]),
    level: 1,
  },
  // ===== LEVEL 2-4: More Questions =====
  {
    id: 'art226',
    text: 'What is perspective?',
    answers: A('art226', 'Technique showing depth', [
      'Technique showing color',
      'Technique showing texture',
      'Technique showing movement',
    ]),
    level: 2,
  },
  {
    id: 'art227',
    text: 'What is composition?',
    answers: A('art227', 'Arrangement of elements', [
      'Single element',
      'Color only',
      'Texture only',
    ]),
    level: 2,
  },
  {
    id: 'art228',
    text: 'What is contrast?',
    answers: A('art228', 'Difference between elements', [
      'Similarity',
      'Sameness',
      'Unity',
    ]),
    level: 2,
  },
  {
    id: 'art229',
    text: 'What is balance?',
    answers: A('art229', 'Visual equilibrium', [
      'Visual chaos',
      'Visual confusion',
      'Visual disorder',
    ]),
    level: 2,
  },
  {
    id: 'art230',
    text: 'What is symmetry?',
    answers: A('art230', 'Mirror-image balance', [
      'Asymmetry',
      'Chaos',
      'Disorder',
    ]),
    level: 2,
  },
  {
    id: 'art231',
    text: 'What is texture?',
    answers: A('art231', 'Surface quality', ['Color', 'Shape', 'Size']),
    level: 2,
  },
  {
    id: 'art232',
    text: 'What is form?',
    answers: A('art232', 'Three-dimensional shape', [
      'Two-dimensional shape',
      'Color',
      'Texture',
    ]),
    level: 2,
  },
  {
    id: 'art233',
    text: 'What is line?',
    answers: A('art233', 'Mark connecting two points', [
      'Area',
      'Shape',
      'Color',
    ]),
    level: 2,
  },
  {
    id: 'art234',
    text: 'What is shape?',
    answers: A('art234', 'Two-dimensional area', [
      'Three-dimensional form',
      'Line',
      'Point',
    ]),
    level: 2,
  },
  {
    id: 'art235',
    text: 'What is space?',
    answers: A('art235', 'Area around and within objects', [
      'Color',
      'Texture',
      'Line',
    ]),
    level: 2,
  },
  {
    id: 'art236',
    text: 'What is value in art?',
    answers: A('art236', 'Lightness or darkness', [
      'Color',
      'Texture',
      'Shape',
    ]),
    level: 2,
  },
  {
    id: 'art237',
    text: 'What is hue?',
    answers: A('art237', 'Name of a color', [
      'Brightness',
      'Darkness',
      'Texture',
    ]),
    level: 2,
  },
  {
    id: 'art238',
    text: 'What is saturation?',
    answers: A('art238', 'Intensity of color', [
      'Name of color',
      'Lightness',
      'Darkness',
    ]),
    level: 2,
  },
  {
    id: 'art239',
    text: 'What is a warm color?',
    answers: A('art239', 'Red, orange, yellow', [
      'Blue, green, purple',
      'Black, white, gray',
      'No color',
    ]),
    level: 2,
  },
  {
    id: 'art240',
    text: 'What is a cool color?',
    answers: A('art240', 'Blue, green, purple', [
      'Red, orange, yellow',
      'Black, white, gray',
      'No color',
    ]),
    level: 2,
  },
  {
    id: 'art241',
    text: 'What is a neutral color?',
    answers: A('art241', 'Black, white, gray, brown', [
      'Primary colors',
      'Secondary colors',
      'Bright colors',
    ]),
    level: 2,
  },
  {
    id: 'art242',
    text: 'What is the color wheel?',
    answers: A('art242', 'Circle showing color relationships', [
      'Square of colors',
      'Line of colors',
      'Random colors',
    ]),
    level: 2,
  },
  {
    id: 'art243',
    text: 'What are complementary colors?',
    answers: A('art243', 'Opposite colors on wheel', [
      'Adjacent colors',
      'Same colors',
      'No colors',
    ]),
    level: 2,
  },
  {
    id: 'art244',
    text: 'What is Impressionism?',
    answers: A('art244', 'Art movement capturing light and moment', [
      'Realistic art',
      'Abstract art',
      'Ancient art',
    ]),
    level: 3,
  },
  {
    id: 'art245',
    text: 'What is Expressionism?',
    answers: A('art245', 'Art expressing emotion', [
      'Realistic art',
      'Impressionism',
      'Ancient art',
    ]),
    level: 3,
  },
  {
    id: 'art246',
    text: 'What is Cubism?',
    answers: A('art246', 'Art showing multiple viewpoints', [
      'Single viewpoint',
      'Realistic art',
      'Impressionism',
    ]),
    level: 3,
  },
  {
    id: 'art247',
    text: 'What is Surrealism?',
    answers: A('art247', 'Art of dreams and unconscious', [
      'Realistic art',
      'Impressionism',
      'Cubism',
    ]),
    level: 3,
  },
  {
    id: 'art248',
    text: 'What is Abstract art?',
    answers: A('art248', 'Art not representing reality', [
      'Realistic art',
      'Portrait art',
      'Landscape art',
    ]),
    level: 3,
  },
  {
    id: 'art249',
    text: 'What is Realism?',
    answers: A('art249', 'Art depicting reality accurately', [
      'Abstract art',
      'Surrealism',
      'Cubism',
    ]),
    level: 3,
  },
  {
    id: 'art250',
    text: 'What is Pop Art?',
    answers: A('art250', 'Art using popular culture imagery', [
      'Classical art',
      'Ancient art',
      'Religious art',
    ]),
    level: 3,
  },
  {
    id: 'art251',
    text: 'Who painted "American Gothic"?',
    answers: A('art251', 'Grant Wood', [
      'Edward Hopper',
      'Norman Rockwell',
      'Andrew Wyeth',
    ]),
    level: 4,
  },
  {
    id: 'art252',
    text: 'Who painted "Nighthawks"?',
    answers: A('art252', 'Edward Hopper', [
      'Grant Wood',
      'Norman Rockwell',
      'Andrew Wyeth',
    ]),
    level: 4,
  },
  {
    id: 'art253',
    text: 'Who painted "Christina\'s World"?',
    answers: A('art253', 'Andrew Wyeth', [
      'Edward Hopper',
      'Grant Wood',
      'Norman Rockwell',
    ]),
    level: 5,
  },
  {
    id: 'art254',
    text: 'Who painted "No. 5, 1948"?',
    answers: A('art254', 'Jackson Pollock', [
      'Mark Rothko',
      'Willem de Kooning',
      'Franz Kline',
    ]),
    level: 4,
  },
  {
    id: 'art255',
    text: 'What technique is Jackson Pollock known for?',
    answers: A('art255', 'Drip painting', [
      'Pointillism',
      'Impasto',
      'Glazing',
    ]),
    level: 3,
  },
  {
    id: 'art256',
    text: 'Who painted color field paintings with rectangles?',
    answers: A('art256', 'Mark Rothko', [
      'Jackson Pollock',
      'Barnett Newman',
      'Clyfford Still',
    ]),
    level: 5,
  },
  {
    id: 'art257',
    text: 'Who created "Campbell\'s Soup Cans"?',
    answers: A('art257', 'Andy Warhol', [
      'Roy Lichtenstein',
      'Jasper Johns',
      'Robert Rauschenberg',
    ]),
    level: 2,
  },
  {
    id: 'art258',
    text: 'Who created comic book style pop art?',
    answers: A('art258', 'Roy Lichtenstein', [
      'Andy Warhol',
      'Keith Haring',
      'Jean-Michel Basquiat',
    ]),
    level: 3,
  },
  {
    id: 'art259',
    text: 'Who painted "Flag"?',
    answers: A('art259', 'Jasper Johns', [
      'Andy Warhol',
      'Roy Lichtenstein',
      'Robert Rauschenberg',
    ]),
    level: 5,
  },
  {
    id: 'art260',
    text: 'Who created graffiti-inspired art in 1980s NYC?',
    answers: A('art260', 'Jean-Michel Basquiat', [
      'Keith Haring',
      'Andy Warhol',
      'Roy Lichtenstein',
    ]),
    level: 4,
  },
  {
    id: 'art261',
    text: 'Who created radiant baby and barking dog symbols?',
    answers: A('art261', 'Keith Haring', [
      'Jean-Michel Basquiat',
      'Kenny Scharf',
      'Futura 2000',
    ]),
    level: 4,
  },
  {
    id: 'art262',
    text: 'Who painted "The Treachery of Images" (This is not a pipe)?',
    answers: A('art262', 'René Magritte', [
      'Salvador Dalí',
      'Max Ernst',
      'Joan Miró',
    ]),
    level: 5,
  },
  {
    id: 'art263',
    text: 'Who painted "The Son of Man" with apple face?',
    answers: A('art263', 'René Magritte', [
      'Salvador Dalí',
      'Max Ernst',
      'Giorgio de Chirico',
    ]),
    level: 4,
  },
  {
    id: 'art264',
    text: 'Who painted "The Elephants" with long legs?',
    answers: A('art264', 'Salvador Dalí', [
      'René Magritte',
      'Max Ernst',
      'Yves Tanguy',
    ]),
    level: 4,
  },
  {
    id: 'art265',
    text: 'Who painted "The Burning Giraffe"?',
    answers: A('art265', 'Salvador Dalí', [
      'René Magritte',
      'Max Ernst',
      'Joan Miró',
    ]),
    level: 5,
  },
  {
    id: 'art266',
    text: 'Who painted abstract works with primary colors and black lines?',
    answers: A('art266', 'Piet Mondrian', [
      'Kazimir Malevich',
      'Wassily Kandinsky',
      'Paul Klee',
    ]),
    level: 4,
  },
  {
    id: 'art267',
    text: 'Who painted "Black Square"?',
    answers: A('art267', 'Kazimir Malevich', [
      'Piet Mondrian',
      'Wassily Kandinsky',
      'El Lissitzky',
    ]),
    level: 6,
  },
  {
    id: 'art268',
    text: 'Who is considered the father of abstract art?',
    answers: A('art268', 'Wassily Kandinsky', [
      'Piet Mondrian',
      'Kazimir Malevich',
      'Paul Klee',
    ]),
    level: 5,
  },
  {
    id: 'art269',
    text: 'Who painted "The Twittering Machine"?',
    answers: A('art269', 'Paul Klee', [
      'Wassily Kandinsky',
      'Joan Miró',
      'Max Ernst',
    ]),
    level: 6,
  },
  {
    id: 'art270',
    text: 'Who painted "Blue Nude" series?',
    answers: A('art270', 'Henri Matisse', [
      'Pablo Picasso',
      'Amedeo Modigliani',
      'Fernand Léger',
    ]),
    level: 4,
  },
  {
    id: 'art271',
    text: 'What art movement was Henri Matisse associated with?',
    answers: A('art271', 'Fauvism', ['Cubism', 'Surrealism', 'Expressionism']),
    level: 5,
  },
  {
    id: 'art272',
    text: 'Who painted "The Dance"?',
    answers: A('art272', 'Henri Matisse', [
      'Pablo Picasso',
      'Marc Chagall',
      'Fernand Léger',
    ]),
    level: 5,
  },
  {
    id: 'art273',
    text: 'Who painted elongated portraits with long necks?',
    answers: A('art273', 'Amedeo Modigliani', [
      'Henri Matisse',
      'Pablo Picasso',
      'Marc Chagall',
    ]),
    level: 5,
  },
  {
    id: 'art274',
    text: 'Who painted dreamlike scenes with floating figures?',
    answers: A('art274', 'Marc Chagall', [
      'Joan Miró',
      'Paul Klee',
      'Wassily Kandinsky',
    ]),
    level: 5,
  },
  {
    id: 'art275',
    text: 'Who painted "I and the Village"?',
    answers: A('art275', 'Marc Chagall', [
      'Joan Miró',
      'Paul Klee',
      'Max Ernst',
    ]),
    level: 6,
  },
  {
    id: 'art276',
    text: 'Who painted "The Harlequin\'s Carnival"?',
    answers: A('art276', 'Joan Miró', [
      'Marc Chagall',
      'Paul Klee',
      'Wassily Kandinsky',
    ]),
    level: 6,
  },
  {
    id: 'art277',
    text: 'Who painted "The Farm"?',
    answers: A('art277', 'Joan Miró', [
      'Marc Chagall',
      'Pablo Picasso',
      'Georges Braque',
    ]),
    level: 6,
  },
  {
    id: 'art278',
    text: 'Who co-founded Cubism with Picasso?',
    answers: A('art278', 'Georges Braque', [
      'Juan Gris',
      'Fernand Léger',
      'Robert Delaunay',
    ]),
    level: 5,
  },
  {
    id: 'art279',
    text: 'Who painted "The Portuguese"?',
    answers: A('art279', 'Georges Braque', [
      'Pablo Picasso',
      'Juan Gris',
      'Fernand Léger',
    ]),
    level: 7,
  },
  {
    id: 'art280',
    text: 'Who painted "The City Rises"?',
    answers: A('art280', 'Umberto Boccioni', [
      'Giacomo Balla',
      'Carlo Carrà',
      'Gino Severini',
    ]),
    level: 7,
  },
  {
    id: 'art281',
    text: 'What art movement emphasized speed and technology?',
    answers: A('art281', 'Futurism', ['Cubism', 'Surrealism', 'Dadaism']),
    level: 5,
  },
  {
    id: 'art282',
    text: 'Who created "Fountain" (urinal as art)?',
    answers: A('art282', 'Marcel Duchamp', [
      'Man Ray',
      'Francis Picabia',
      'Kurt Schwitters',
    ]),
    level: 5,
  },
  {
    id: 'art283',
    text: 'Who painted "Nude Descending a Staircase"?',
    answers: A('art283', 'Marcel Duchamp', [
      'Francis Picabia',
      'Man Ray',
      'Fernand Léger',
    ]),
    level: 6,
  },
  {
    id: 'art284',
    text: 'What is a "readymade" in art?',
    answers: A('art284', 'Everyday object presented as art', [
      'Handmade sculpture',
      'Oil painting',
      'Watercolor',
    ]),
    level: 6,
  },
  {
    id: 'art285',
    text: 'Who painted "The Two Fridas"?',
    answers: A('art285', 'Frida Kahlo', [
      'Diego Rivera',
      'Leonora Carrington',
      'Remedios Varo',
    ]),
    level: 3,
  },
  {
    id: 'art286',
    text: 'Who was Frida Kahlo married to?',
    answers: A('art286', 'Diego Rivera', [
      'David Alfaro Siqueiros',
      'José Clemente Orozco',
      'Rufino Tamayo',
    ]),
    level: 4,
  },
  {
    id: 'art287',
    text: 'Who painted murals of Mexican history?',
    answers: A('art287', 'Diego Rivera', [
      'José Clemente Orozco',
      'David Alfaro Siqueiros',
      'Rufino Tamayo',
    ]),
    level: 4,
  },
  {
    id: 'art288',
    text: 'Who painted "The Great Wave off Kanagawa"?',
    answers: A('art288', 'Katsushika Hokusai', [
      'Utagawa Hiroshige',
      'Kitagawa Utamaro',
      'Katsushika Hokusai',
    ]),
    level: 3,
  },
  {
    id: 'art289',
    text: 'What is Japanese woodblock printing called?',
    answers: A('art289', 'Ukiyo-e', ['Sumi-e', 'Nihonga', 'Yamato-e']),
    level: 6,
  },
  {
    id: 'art290',
    text: 'Who painted "Thirty-Six Views of Mount Fuji"?',
    answers: A('art290', 'Katsushika Hokusai', [
      'Utagawa Hiroshige',
      'Ando Hiroshige',
      'Kitagawa Utamaro',
    ]),
    level: 5,
  },
  {
    id: 'art291',
    text: 'Who painted "The Fifty-Three Stations of the Tōkaidō"?',
    answers: A('art291', 'Utagawa Hiroshige', [
      'Katsushika Hokusai',
      'Kitagawa Utamaro',
      'Katsukawa Shunshō',
    ]),
    level: 6,
  },
  {
    id: 'art292',
    text: 'Who is known for portraits of beautiful women (bijin-ga)?',
    answers: A('art292', 'Kitagawa Utamaro', [
      'Katsushika Hokusai',
      'Utagawa Hiroshige',
      'Tōshūsai Sharaku',
    ]),
    level: 7,
  },
  {
    id: 'art293',
    text: 'Who painted "The Hay Wain"?',
    answers: A('art293', 'John Constable', [
      'J.M.W. Turner',
      'Thomas Gainsborough',
      'Joshua Reynolds',
    ]),
    level: 5,
  },
  {
    id: 'art294',
    text: 'Who painted "The Fighting Temeraire"?',
    answers: A('art294', 'J.M.W. Turner', [
      'John Constable',
      'Thomas Gainsborough',
      'William Blake',
    ]),
    level: 6,
  },
  {
    id: 'art295',
    text: 'Who painted "The Blue Boy"?',
    answers: A('art295', 'Thomas Gainsborough', [
      'Joshua Reynolds',
      'John Constable',
      'George Romney',
    ]),
    level: 5,
  },
  {
    id: 'art296',
    text: 'Who painted "The Ancient of Days"?',
    answers: A('art296', 'William Blake', [
      'J.M.W. Turner',
      'John Martin',
      'Samuel Palmer',
    ]),
    level: 7,
  },
  {
    id: 'art297',
    text: 'Who painted "The Nightmare"?',
    answers: A('art297', 'Henry Fuseli', [
      'William Blake',
      'John Martin',
      'Caspar David Friedrich',
    ]),
    level: 6,
  },
  {
    id: 'art298',
    text: 'Who painted "Wanderer above the Sea of Fog"?',
    answers: A('art298', 'Caspar David Friedrich', [
      'J.M.W. Turner',
      'John Constable',
      'Carl Blechen',
    ]),
    level: 5,
  },
  {
    id: 'art299',
    text: 'Who painted "The Monk by the Sea"?',
    answers: A('art299', 'Caspar David Friedrich', [
      'J.M.W. Turner',
      'Philipp Otto Runge',
      'Carl Gustav Carus',
    ]),
    level: 6,
  },
  {
    id: 'art300',
    text: 'What is chiaroscuro?',
    answers: A('art300', 'Strong contrast between light and dark', [
      'Bright colors',
      'Soft blending',
      'Flat colors',
    ]),
    level: 5,
  },
];
