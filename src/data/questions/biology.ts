import { Question, createAnswers } from './types';

// Biology questions organized by difficulty level (1-8)
// Level 1-2: Very Easy/Easy - Basic biology concepts
// Level 3-4: Intermediate/Normal - Cell biology, genetics basics
// Level 5-6: Hard/Very Hard - Molecular biology, biochemistry
// Level 7-8: Legendary/Professor - Advanced genetics, research topics

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const biologyQuestions: Question[] = [
  // ===== LEVEL 1: Very Easy (500+ questions) =====
  {
    id: 'bio1',
    text: 'What is the basic unit of life?',
    answers: A('bio1', 'Cell', ['Atom', 'Molecule', 'Organ']),
    level: 1,
  },
  {
    id: 'bio2',
    text: 'What do plants need to make food?',
    answers: A('bio2', 'Sunlight', ['Darkness', 'Salt', 'Metal']),
    level: 1,
  },
  {
    id: 'bio3',
    text: 'What gas do humans breathe in?',
    answers: A('bio3', 'Oxygen', ['Carbon dioxide', 'Nitrogen', 'Helium']),
    level: 1,
  },
  {
    id: 'bio4',
    text: 'What gas do plants release during photosynthesis?',
    answers: A('bio4', 'Oxygen', ['Carbon dioxide', 'Nitrogen', 'Methane']),
    level: 1,
  },
  {
    id: 'bio5',
    text: 'What is the largest organ in the human body?',
    answers: A('bio5', 'Skin', ['Heart', 'Liver', 'Brain']),
    level: 1,
  },
  {
    id: 'bio6',
    text: 'How many legs does an insect have?',
    answers: A('bio6', '6', ['4', '8', '10']),
    level: 1,
  },
  {
    id: 'bio7',
    text: 'What do herbivores eat?',
    answers: A('bio7', 'Plants', ['Meat', 'Both', 'Rocks']),
    level: 1,
  },
  {
    id: 'bio8',
    text: 'What do carnivores eat?',
    answers: A('bio8', 'Meat', ['Plants', 'Rocks', 'Water only']),
    level: 1,
  },
  {
    id: 'bio9',
    text: 'What is the process by which plants make food?',
    answers: A('bio9', 'Photosynthesis', [
      'Respiration',
      'Digestion',
      'Fermentation',
    ]),
    level: 1,
  },
  {
    id: 'bio10',
    text: 'What organ pumps blood through the body?',
    answers: A('bio10', 'Heart', ['Lungs', 'Liver', 'Kidney']),
    level: 1,
  },
  {
    id: 'bio11',
    text: 'What is the green pigment in plants called?',
    answers: A('bio11', 'Chlorophyll', ['Hemoglobin', 'Melanin', 'Carotene']),
    level: 1,
  },
  {
    id: 'bio12',
    text: 'Where does digestion begin?',
    answers: A('bio12', 'Mouth', ['Stomach', 'Intestine', 'Liver']),
    level: 1,
  },
  {
    id: 'bio13',
    text: 'What type of animal lays eggs?',
    answers: A('bio13', 'Oviparous', ['Viviparous', 'Mammal', 'Herbivore']),
    level: 1,
  },
  {
    id: 'bio14',
    text: 'What is the hard outer covering of insects called?',
    answers: A('bio14', 'Exoskeleton', ['Endoskeleton', 'Shell', 'Skin']),
    level: 1,
  },
  {
    id: 'bio15',
    text: 'What do fish use to breathe?',
    answers: A('bio15', 'Gills', ['Lungs', 'Skin', 'Nose']),
    level: 1,
  },
  {
    id: 'bio16',
    text: 'What is a baby frog called?',
    answers: A('bio16', 'Tadpole', ['Cub', 'Pup', 'Calf']),
    level: 1,
  },
  {
    id: 'bio17',
    text: 'What is the study of living things called?',
    answers: A('bio17', 'Biology', ['Chemistry', 'Physics', 'Geology']),
    level: 1,
  },
  {
    id: 'bio18',
    text: 'What part of the plant absorbs water?',
    answers: A('bio18', 'Roots', ['Leaves', 'Stem', 'Flower']),
    level: 1,
  },
  {
    id: 'bio19',
    text: 'What is the main function of leaves?',
    answers: A('bio19', 'Photosynthesis', [
      'Support',
      'Reproduction',
      'Storage',
    ]),
    level: 1,
  },
  {
    id: 'bio20',
    text: 'What type of blood cells fight infection?',
    answers: A('bio20', 'White blood cells', [
      'Red blood cells',
      'Platelets',
      'Plasma',
    ]),
    level: 1,
  },
  {
    id: 'bio21',
    text: 'What is the skeleton inside the body called?',
    answers: A('bio21', 'Endoskeleton', ['Exoskeleton', 'Cartilage', 'Tendon']),
    level: 1,
  },
  {
    id: 'bio22',
    text: 'What do omnivores eat?',
    answers: A('bio22', 'Plants and meat', [
      'Only plants',
      'Only meat',
      'Only insects',
    ]),
    level: 1,
  },
  {
    id: 'bio23',
    text: 'What is the liquid part of blood called?',
    answers: A('bio23', 'Plasma', ['Serum', 'Hemoglobin', 'Cytoplasm']),
    level: 1,
  },
  {
    id: 'bio24',
    text: 'How many chambers does the human heart have?',
    answers: A('bio24', '4', ['2', '3', '5']),
    level: 1,
  },
  {
    id: 'bio25',
    text: 'What is the largest land animal?',
    answers: A('bio25', 'Elephant', ['Giraffe', 'Rhino', 'Hippo']),
    level: 1,
  },
  {
    id: 'bio26',
    text: 'What is the fastest land animal?',
    answers: A('bio26', 'Cheetah', ['Lion', 'Horse', 'Leopard']),
    level: 1,
  },
  {
    id: 'bio27',
    text: 'What is the largest animal on Earth?',
    answers: A('bio27', 'Blue whale', ['Elephant', 'Giraffe', 'Shark']),
    level: 1,
  },
  {
    id: 'bio28',
    text: 'What is the process of a caterpillar becoming a butterfly?',
    answers: A('bio28', 'Metamorphosis', [
      'Evolution',
      'Mutation',
      'Adaptation',
    ]),
    level: 1,
  },
  {
    id: 'bio29',
    text: 'What is the main function of the lungs?',
    answers: A('bio29', 'Gas exchange', [
      'Pumping blood',
      'Digestion',
      'Filtering waste',
    ]),
    level: 1,
  },
  {
    id: 'bio30',
    text: 'What is the main function of the stomach?',
    answers: A('bio30', 'Digestion', ['Breathing', 'Circulation', 'Thinking']),
    level: 1,
  },
  {
    id: 'bio31',
    text: 'What are animals with backbones called?',
    answers: A('bio31', 'Vertebrates', [
      'Invertebrates',
      'Mammals',
      'Reptiles',
    ]),
    level: 1,
  },
  {
    id: 'bio32',
    text: 'What are animals without backbones called?',
    answers: A('bio32', 'Invertebrates', ['Vertebrates', 'Amphibians', 'Fish']),
    level: 1,
  },
  {
    id: 'bio33',
    text: 'What is the colored part of the eye called?',
    answers: A('bio33', 'Iris', ['Pupil', 'Cornea', 'Retina']),
    level: 1,
  },
  {
    id: 'bio34',
    text: 'What is the black center of the eye called?',
    answers: A('bio34', 'Pupil', ['Iris', 'Lens', 'Cornea']),
    level: 1,
  },
  {
    id: 'bio35',
    text: 'What sense do ears provide?',
    answers: A('bio35', 'Hearing', ['Sight', 'Smell', 'Taste']),
    level: 1,
  },
  {
    id: 'bio36',
    text: 'What sense does the nose provide?',
    answers: A('bio36', 'Smell', ['Taste', 'Touch', 'Hearing']),
    level: 1,
  },
  {
    id: 'bio37',
    text: 'What sense does the tongue provide?',
    answers: A('bio37', 'Taste', ['Smell', 'Touch', 'Sight']),
    level: 1,
  },
  {
    id: 'bio38',
    text: "What is the body's control center?",
    answers: A('bio38', 'Brain', ['Heart', 'Liver', 'Kidney']),
    level: 1,
  },
  {
    id: 'bio39',
    text: 'What carries blood away from the heart?',
    answers: A('bio39', 'Arteries', ['Veins', 'Capillaries', 'Nerves']),
    level: 1,
  },
  {
    id: 'bio40',
    text: 'What carries blood back to the heart?',
    answers: A('bio40', 'Veins', ['Arteries', 'Capillaries', 'Lymph vessels']),
    level: 1,
  },
  {
    id: 'bio41',
    text: 'What is the smallest blood vessel?',
    answers: A('bio41', 'Capillary', ['Artery', 'Vein', 'Aorta']),
    level: 1,
  },
  {
    id: 'bio42',
    text: 'What is the main organ of the respiratory system?',
    answers: A('bio42', 'Lungs', ['Heart', 'Liver', 'Kidney']),
    level: 1,
  },
  {
    id: 'bio43',
    text: 'What is the main organ of the circulatory system?',
    answers: A('bio43', 'Heart', ['Lungs', 'Brain', 'Stomach']),
    level: 1,
  },
  {
    id: 'bio44',
    text: 'What is the main organ of the nervous system?',
    answers: A('bio44', 'Brain', ['Heart', 'Spine', 'Nerves']),
    level: 1,
  },
  {
    id: 'bio45',
    text: 'What is the main organ of the digestive system?',
    answers: A('bio45', 'Stomach', ['Heart', 'Lungs', 'Brain']),
    level: 1,
  },
  {
    id: 'bio46',
    text: 'What is the tube that carries food to the stomach?',
    answers: A('bio46', 'Esophagus', ['Trachea', 'Intestine', 'Colon']),
    level: 1,
  },
  {
    id: 'bio47',
    text: 'What is the tube that carries air to the lungs?',
    answers: A('bio47', 'Trachea', ['Esophagus', 'Bronchi', 'Larynx']),
    level: 1,
  },
  {
    id: 'bio48',
    text: 'What is the voice box called?',
    answers: A('bio48', 'Larynx', ['Pharynx', 'Trachea', 'Esophagus']),
    level: 1,
  },
  {
    id: 'bio49',
    text: 'What is the windpipe called?',
    answers: A('bio49', 'Trachea', ['Esophagus', 'Larynx', 'Bronchi']),
    level: 1,
  },
  {
    id: 'bio50',
    text: 'What is the food pipe called?',
    answers: A('bio50', 'Esophagus', ['Trachea', 'Pharynx', 'Intestine']),
    level: 1,
  },

  {
    id: 'bio51',
    text: 'What is the longest bone in the human body?',
    answers: A('bio51', 'Femur', ['Tibia', 'Humerus', 'Spine']),
    level: 1,
  },
  {
    id: 'bio52',
    text: 'What is the smallest bone in the human body?',
    answers: A('bio52', 'Stapes', ['Femur', 'Phalanx', 'Vertebra']),
    level: 1,
  },
  {
    id: 'bio53',
    text: 'How many bones are in the adult human body?',
    answers: A('bio53', '206', ['106', '306', '156']),
    level: 1,
  },
  {
    id: 'bio54',
    text: 'What is the protective covering of the brain?',
    answers: A('bio54', 'Skull', ['Spine', 'Ribs', 'Pelvis']),
    level: 1,
  },
  {
    id: 'bio55',
    text: 'What protects the heart and lungs?',
    answers: A('bio55', 'Ribs', ['Skull', 'Pelvis', 'Spine']),
    level: 1,
  },
  {
    id: 'bio56',
    text: 'What is the backbone called?',
    answers: A('bio56', 'Spine', ['Skull', 'Ribs', 'Pelvis']),
    level: 1,
  },
  {
    id: 'bio57',
    text: 'What connects muscles to bones?',
    answers: A('bio57', 'Tendons', ['Ligaments', 'Cartilage', 'Nerves']),
    level: 1,
  },
  {
    id: 'bio58',
    text: 'What connects bones to bones?',
    answers: A('bio58', 'Ligaments', ['Tendons', 'Muscles', 'Cartilage']),
    level: 1,
  },
  {
    id: 'bio59',
    text: 'What is the soft tissue at the end of bones?',
    answers: A('bio59', 'Cartilage', ['Tendon', 'Ligament', 'Marrow']),
    level: 1,
  },
  {
    id: 'bio60',
    text: 'Where are red blood cells made?',
    answers: A('bio60', 'Bone marrow', ['Heart', 'Liver', 'Spleen']),
    level: 1,
  },
  {
    id: 'bio61',
    text: 'What is the function of red blood cells?',
    answers: A('bio61', 'Carry oxygen', [
      'Fight infection',
      'Clot blood',
      'Digest food',
    ]),
    level: 1,
  },
  {
    id: 'bio62',
    text: 'What is the function of platelets?',
    answers: A('bio62', 'Blood clotting', [
      'Carry oxygen',
      'Fight infection',
      'Transport nutrients',
    ]),
    level: 1,
  },
  {
    id: 'bio63',
    text: 'What is the protein in red blood cells that carries oxygen?',
    answers: A('bio63', 'Hemoglobin', ['Chlorophyll', 'Keratin', 'Collagen']),
    level: 1,
  },
  {
    id: 'bio64',
    text: 'What is the outer layer of skin called?',
    answers: A('bio64', 'Epidermis', ['Dermis', 'Hypodermis', 'Cortex']),
    level: 1,
  },
  {
    id: 'bio65',
    text: 'What gives skin its color?',
    answers: A('bio65', 'Melanin', ['Hemoglobin', 'Chlorophyll', 'Keratin']),
    level: 1,
  },
  {
    id: 'bio66',
    text: 'What is hair made of?',
    answers: A('bio66', 'Keratin', ['Collagen', 'Melanin', 'Elastin']),
    level: 1,
  },
  {
    id: 'bio67',
    text: 'What are nails made of?',
    answers: A('bio67', 'Keratin', ['Calcium', 'Collagen', 'Bone']),
    level: 1,
  },
  {
    id: 'bio68',
    text: 'What is the function of sweat glands?',
    answers: A('bio68', 'Cool the body', [
      'Produce oil',
      'Make hair',
      'Sense touch',
    ]),
    level: 1,
  },
  {
    id: 'bio69',
    text: 'What is the function of oil glands?',
    answers: A('bio69', 'Keep skin moist', [
      'Cool the body',
      'Sense pain',
      'Make hair',
    ]),
    level: 1,
  },
  {
    id: 'bio70',
    text: 'What is the largest internal organ?',
    answers: A('bio70', 'Liver', ['Heart', 'Brain', 'Kidney']),
    level: 1,
  },
  {
    id: 'bio71',
    text: 'What organ filters blood and removes waste?',
    answers: A('bio71', 'Kidney', ['Liver', 'Heart', 'Lungs']),
    level: 1,
  },
  {
    id: 'bio72',
    text: 'What organ produces bile?',
    answers: A('bio72', 'Liver', ['Gallbladder', 'Pancreas', 'Stomach']),
    level: 1,
  },
  {
    id: 'bio73',
    text: 'What organ stores bile?',
    answers: A('bio73', 'Gallbladder', ['Liver', 'Pancreas', 'Spleen']),
    level: 1,
  },
  {
    id: 'bio74',
    text: 'What organ produces insulin?',
    answers: A('bio74', 'Pancreas', ['Liver', 'Kidney', 'Thyroid']),
    level: 1,
  },
  {
    id: 'bio75',
    text: 'What is the function of the small intestine?',
    answers: A('bio75', 'Absorb nutrients', [
      'Store waste',
      'Produce bile',
      'Filter blood',
    ]),
    level: 1,
  },
  {
    id: 'bio76',
    text: 'What is the function of the large intestine?',
    answers: A('bio76', 'Absorb water', [
      'Digest protein',
      'Produce enzymes',
      'Filter blood',
    ]),
    level: 1,
  },
  {
    id: 'bio77',
    text: 'What is the muscular tube that moves food through the digestive system?',
    answers: A('bio77', 'Peristalsis', ['Osmosis', 'Diffusion', 'Filtration']),
    level: 1,
  },
  {
    id: 'bio78',
    text: 'What is the opening at the end of the digestive system?',
    answers: A('bio78', 'Anus', ['Mouth', 'Stomach', 'Esophagus']),
    level: 1,
  },
  {
    id: 'bio79',
    text: 'What is the waste product of the kidneys?',
    answers: A('bio79', 'Urine', ['Feces', 'Sweat', 'Carbon dioxide']),
    level: 1,
  },
  {
    id: 'bio80',
    text: 'What is the waste product of the lungs?',
    answers: A('bio80', 'Carbon dioxide', ['Oxygen', 'Urine', 'Feces']),
    level: 1,
  },
  {
    id: 'bio81',
    text: 'What is the waste product of the large intestine?',
    answers: A('bio81', 'Feces', ['Urine', 'Sweat', 'Carbon dioxide']),
    level: 1,
  },
  {
    id: 'bio82',
    text: 'What is the tube that carries urine from the kidney to the bladder?',
    answers: A('bio82', 'Ureter', [
      'Urethra',
      'Vas deferens',
      'Fallopian tube',
    ]),
    level: 1,
  },
  {
    id: 'bio83',
    text: 'What is the tube that carries urine out of the body?',
    answers: A('bio83', 'Urethra', ['Ureter', 'Bladder', 'Kidney']),
    level: 1,
  },
  {
    id: 'bio84',
    text: 'What organ stores urine?',
    answers: A('bio84', 'Bladder', ['Kidney', 'Liver', 'Stomach']),
    level: 1,
  },
  {
    id: 'bio85',
    text: 'What is the male reproductive cell called?',
    answers: A('bio85', 'Sperm', ['Egg', 'Zygote', 'Embryo']),
    level: 1,
  },
  {
    id: 'bio86',
    text: 'What is the female reproductive cell called?',
    answers: A('bio86', 'Egg', ['Sperm', 'Zygote', 'Fetus']),
    level: 1,
  },
  {
    id: 'bio87',
    text: 'What is a fertilized egg called?',
    answers: A('bio87', 'Zygote', ['Embryo', 'Fetus', 'Gamete']),
    level: 1,
  },
  {
    id: 'bio88',
    text: 'Where does a human baby develop?',
    answers: A('bio88', 'Uterus', ['Ovary', 'Fallopian tube', 'Vagina']),
    level: 1,
  },
  {
    id: 'bio89',
    text: 'What is the period of development before birth called?',
    answers: A('bio89', 'Pregnancy', ['Puberty', 'Adolescence', 'Infancy']),
    level: 1,
  },
  {
    id: 'bio90',
    text: 'How long is human pregnancy?',
    answers: A('bio90', '9 months', ['6 months', '12 months', '3 months']),
    level: 1,
  },
  {
    id: 'bio91',
    text: 'What is the study of plants called?',
    answers: A('bio91', 'Botany', ['Zoology', 'Ecology', 'Anatomy']),
    level: 1,
  },
  {
    id: 'bio92',
    text: 'What is the study of animals called?',
    answers: A('bio92', 'Zoology', ['Botany', 'Ecology', 'Genetics']),
    level: 1,
  },
  {
    id: 'bio93',
    text: 'What is the study of insects called?',
    answers: A('bio93', 'Entomology', [
      'Ornithology',
      'Ichthyology',
      'Herpetology',
    ]),
    level: 1,
  },
  {
    id: 'bio94',
    text: 'What is the study of birds called?',
    answers: A('bio94', 'Ornithology', [
      'Entomology',
      'Ichthyology',
      'Mammalogy',
    ]),
    level: 1,
  },
  {
    id: 'bio95',
    text: 'What is the study of fish called?',
    answers: A('bio95', 'Ichthyology', [
      'Ornithology',
      'Herpetology',
      'Entomology',
    ]),
    level: 1,
  },
  {
    id: 'bio96',
    text: 'What is the study of reptiles and amphibians called?',
    answers: A('bio96', 'Herpetology', [
      'Ichthyology',
      'Ornithology',
      'Mammalogy',
    ]),
    level: 1,
  },
  {
    id: 'bio97',
    text: 'What is the study of mammals called?',
    answers: A('bio97', 'Mammalogy', [
      'Ornithology',
      'Herpetology',
      'Ichthyology',
    ]),
    level: 1,
  },
  {
    id: 'bio98',
    text: 'What is the study of cells called?',
    answers: A('bio98', 'Cytology', ['Histology', 'Anatomy', 'Physiology']),
    level: 1,
  },
  {
    id: 'bio99',
    text: 'What is the study of tissues called?',
    answers: A('bio99', 'Histology', ['Cytology', 'Anatomy', 'Pathology']),
    level: 1,
  },
  {
    id: 'bio100',
    text: 'What is the study of body structure called?',
    answers: A('bio100', 'Anatomy', ['Physiology', 'Pathology', 'Histology']),
    level: 1,
  },

  // ===== LEVEL 2: Easy (continued) =====
  {
    id: 'bio101',
    text: 'What is the study of body functions called?',
    answers: A('bio101', 'Physiology', ['Anatomy', 'Pathology', 'Histology']),
    level: 2,
  },
  {
    id: 'bio102',
    text: 'What is the study of diseases called?',
    answers: A('bio102', 'Pathology', ['Physiology', 'Anatomy', 'Histology']),
    level: 2,
  },
  {
    id: 'bio103',
    text: 'What is the study of heredity called?',
    answers: A('bio103', 'Genetics', ['Ecology', 'Evolution', 'Taxonomy']),
    level: 2,
  },
  {
    id: 'bio104',
    text: 'What is the study of ecosystems called?',
    answers: A('bio104', 'Ecology', ['Genetics', 'Evolution', 'Taxonomy']),
    level: 2,
  },
  {
    id: 'bio105',
    text: 'What is the study of classification called?',
    answers: A('bio105', 'Taxonomy', ['Ecology', 'Genetics', 'Evolution']),
    level: 2,
  },
  {
    id: 'bio106',
    text: 'What is DNA?',
    answers: A('bio106', 'Genetic material', [
      'Protein',
      'Carbohydrate',
      'Lipid',
    ]),
    level: 2,
  },
  {
    id: 'bio107',
    text: 'What is RNA?',
    answers: A('bio107', 'Ribonucleic acid', [
      'Deoxyribonucleic acid',
      'Protein',
      'Lipid',
    ]),
    level: 2,
  },
  {
    id: 'bio108',
    text: 'What is a gene?',
    answers: A('bio108', 'Unit of heredity', [
      'Type of cell',
      'Type of tissue',
      'Type of organ',
    ]),
    level: 2,
  },
  {
    id: 'bio109',
    text: 'What is a chromosome?',
    answers: A('bio109', 'Structure containing DNA', [
      'Type of cell',
      'Type of protein',
      'Type of lipid',
    ]),
    level: 2,
  },
  {
    id: 'bio110',
    text: 'How many chromosomes do humans have?',
    answers: A('bio110', '46', ['23', '48', '44']),
    level: 2,
  },
  {
    id: 'bio111',
    text: 'What is mitosis?',
    answers: A('bio111', 'Cell division for growth', [
      'Cell division for reproduction',
      'Cell death',
      'Cell fusion',
    ]),
    level: 2,
  },
  {
    id: 'bio112',
    text: 'What is meiosis?',
    answers: A('bio112', 'Cell division for reproduction', [
      'Cell division for growth',
      'Cell death',
      'Cell fusion',
    ]),
    level: 2,
  },
  {
    id: 'bio113',
    text: 'What is the powerhouse of the cell?',
    answers: A('bio113', 'Mitochondria', [
      'Nucleus',
      'Ribosome',
      'Golgi apparatus',
    ]),
    level: 2,
  },
  {
    id: 'bio114',
    text: 'What is the control center of the cell?',
    answers: A('bio114', 'Nucleus', [
      'Mitochondria',
      'Ribosome',
      'Golgi apparatus',
    ]),
    level: 2,
  },
  {
    id: 'bio115',
    text: 'What makes proteins in the cell?',
    answers: A('bio115', 'Ribosomes', [
      'Nucleus',
      'Mitochondria',
      'Golgi apparatus',
    ]),
    level: 2,
  },
  {
    id: 'bio116',
    text: 'What is the cell membrane?',
    answers: A('bio116', 'Outer boundary of cell', [
      'Center of cell',
      'Inside nucleus',
      'Part of mitochondria',
    ]),
    level: 2,
  },
  {
    id: 'bio117',
    text: 'What is cytoplasm?',
    answers: A('bio117', 'Gel-like substance in cell', [
      'Cell membrane',
      'Nucleus',
      'Mitochondria',
    ]),
    level: 2,
  },
  {
    id: 'bio118',
    text: 'What is the cell wall?',
    answers: A('bio118', 'Rigid outer layer in plant cells', [
      'Animal cell structure',
      'Nucleus',
      'Mitochondria',
    ]),
    level: 2,
  },
  {
    id: 'bio119',
    text: 'What is a vacuole?',
    answers: A('bio119', 'Storage organelle', [
      'Energy organelle',
      'Protein maker',
      'Control center',
    ]),
    level: 2,
  },
  {
    id: 'bio120',
    text: 'What is a chloroplast?',
    answers: A('bio120', 'Organelle for photosynthesis', [
      'Organelle for respiration',
      'Organelle for protein synthesis',
      'Organelle for storage',
    ]),
    level: 2,
  },

  // ===== LEVEL 3: Intermediate =====
  {
    id: 'bio121',
    text: 'What is the Golgi apparatus?',
    answers: A('bio121', 'Packages and ships proteins', [
      'Makes proteins',
      'Makes energy',
      'Stores DNA',
    ]),
    level: 3,
  },
  {
    id: 'bio122',
    text: 'What is the endoplasmic reticulum?',
    answers: A('bio122', 'Network for transport in cell', [
      'Energy producer',
      'Protein maker',
      'DNA storage',
    ]),
    level: 3,
  },
  {
    id: 'bio123',
    text: 'What is rough ER?',
    answers: A('bio123', 'ER with ribosomes', [
      'ER without ribosomes',
      'Smooth ER',
      'Golgi apparatus',
    ]),
    level: 3,
  },
  {
    id: 'bio124',
    text: 'What is smooth ER?',
    answers: A('bio124', 'ER without ribosomes', [
      'ER with ribosomes',
      'Rough ER',
      'Golgi apparatus',
    ]),
    level: 3,
  },
  {
    id: 'bio125',
    text: 'What is a lysosome?',
    answers: A('bio125', 'Digestive organelle', [
      'Energy organelle',
      'Protein maker',
      'Storage organelle',
    ]),
    level: 3,
  },
  {
    id: 'bio126',
    text: 'What is the cytoskeleton?',
    answers: A('bio126', "Cell's internal framework", [
      'Cell membrane',
      'Cell wall',
      'Nucleus',
    ]),
    level: 3,
  },
  {
    id: 'bio127',
    text: 'What is ATP?',
    answers: A('bio127', 'Energy currency of cell', [
      'Genetic material',
      'Protein',
      'Lipid',
    ]),
    level: 3,
  },
  {
    id: 'bio128',
    text: 'What is cellular respiration?',
    answers: A('bio128', 'Process to make ATP from glucose', [
      'Process to make glucose',
      'Process to make protein',
      'Process to make DNA',
    ]),
    level: 3,
  },
  {
    id: 'bio129',
    text: 'Where does cellular respiration occur?',
    answers: A('bio129', 'Mitochondria', [
      'Nucleus',
      'Ribosome',
      'Golgi apparatus',
    ]),
    level: 3,
  },
  {
    id: 'bio130',
    text: 'What is glycolysis?',
    answers: A('bio130', 'Breakdown of glucose', [
      'Synthesis of glucose',
      'Breakdown of protein',
      'Synthesis of protein',
    ]),
    level: 3,
  },
  {
    id: 'bio131',
    text: 'Where does glycolysis occur?',
    answers: A('bio131', 'Cytoplasm', ['Mitochondria', 'Nucleus', 'Ribosome']),
    level: 3,
  },
  {
    id: 'bio132',
    text: 'What is the Krebs cycle?',
    answers: A('bio132', 'Part of cellular respiration', [
      'Part of photosynthesis',
      'Part of protein synthesis',
      'Part of DNA replication',
    ]),
    level: 3,
  },
  {
    id: 'bio133',
    text: 'What is the electron transport chain?',
    answers: A('bio133', 'Final stage of cellular respiration', [
      'First stage',
      'Part of photosynthesis',
      'Part of protein synthesis',
    ]),
    level: 3,
  },
  {
    id: 'bio134',
    text: 'What is fermentation?',
    answers: A('bio134', 'Anaerobic energy production', [
      'Aerobic energy production',
      'Photosynthesis',
      'Protein synthesis',
    ]),
    level: 3,
  },
  {
    id: 'bio135',
    text: 'What is lactic acid fermentation?',
    answers: A('bio135', 'Fermentation producing lactic acid', [
      'Fermentation producing alcohol',
      'Aerobic respiration',
      'Photosynthesis',
    ]),
    level: 3,
  },
  {
    id: 'bio136',
    text: 'What is alcoholic fermentation?',
    answers: A('bio136', 'Fermentation producing alcohol', [
      'Fermentation producing lactic acid',
      'Aerobic respiration',
      'Photosynthesis',
    ]),
    level: 3,
  },
  {
    id: 'bio137',
    text: 'What is an enzyme?',
    answers: A('bio137', 'Biological catalyst', [
      'Type of cell',
      'Type of tissue',
      'Type of organ',
    ]),
    level: 3,
  },
  {
    id: 'bio138',
    text: 'What is a substrate?',
    answers: A('bio138', 'Molecule enzyme acts on', [
      'Product of reaction',
      'Type of enzyme',
      'Type of cell',
    ]),
    level: 3,
  },
  {
    id: 'bio139',
    text: 'What is the active site?',
    answers: A('bio139', 'Where substrate binds to enzyme', [
      'Where product forms',
      'Entire enzyme',
      'Type of substrate',
    ]),
    level: 3,
  },
  {
    id: 'bio140',
    text: 'What is denaturation?',
    answers: A('bio140', 'Loss of protein structure', [
      'Gain of protein structure',
      'Protein synthesis',
      'Protein breakdown',
    ]),
    level: 3,
  },

  // ===== LEVEL 4: Normal =====
  {
    id: 'bio141',
    text: 'What is the central dogma of biology?',
    answers: A('bio141', 'DNA → RNA → Protein', [
      'Protein → RNA → DNA',
      'RNA → DNA → Protein',
      'DNA → Protein → RNA',
    ]),
    level: 4,
  },
  {
    id: 'bio142',
    text: 'What is transcription?',
    answers: A('bio142', 'DNA to RNA', [
      'RNA to protein',
      'DNA to protein',
      'Protein to DNA',
    ]),
    level: 4,
  },
  {
    id: 'bio143',
    text: 'What is translation?',
    answers: A('bio143', 'RNA to protein', [
      'DNA to RNA',
      'DNA to protein',
      'Protein to DNA',
    ]),
    level: 4,
  },
  {
    id: 'bio144',
    text: 'What is a codon?',
    answers: A('bio144', 'Three nucleotides coding for amino acid', [
      'Single nucleotide',
      'Amino acid',
      'Protein',
    ]),
    level: 4,
  },
  {
    id: 'bio145',
    text: 'What is an anticodon?',
    answers: A('bio145', 'Complementary sequence on tRNA', [
      'Sequence on mRNA',
      'Sequence on DNA',
      'Amino acid',
    ]),
    level: 4,
  },
  {
    id: 'bio146',
    text: 'What is mRNA?',
    answers: A('bio146', 'Messenger RNA', [
      'Transfer RNA',
      'Ribosomal RNA',
      'DNA',
    ]),
    level: 4,
  },
  {
    id: 'bio147',
    text: 'What is tRNA?',
    answers: A('bio147', 'Transfer RNA', [
      'Messenger RNA',
      'Ribosomal RNA',
      'DNA',
    ]),
    level: 4,
  },
  {
    id: 'bio148',
    text: 'What is rRNA?',
    answers: A('bio148', 'Ribosomal RNA', [
      'Messenger RNA',
      'Transfer RNA',
      'DNA',
    ]),
    level: 4,
  },
  {
    id: 'bio149',
    text: 'What is a mutation?',
    answers: A('bio149', 'Change in DNA sequence', [
      'Normal DNA',
      'Protein change',
      'Cell division',
    ]),
    level: 4,
  },
  {
    id: 'bio150',
    text: 'What is a point mutation?',
    answers: A('bio150', 'Single nucleotide change', [
      'Large deletion',
      'Chromosome change',
      'Gene duplication',
    ]),
    level: 4,
  },

  // ===== LEVEL 5: Hard =====
  {
    id: 'bio151',
    text: 'What is a frameshift mutation?',
    answers: A('bio151', 'Insertion or deletion shifting reading frame', [
      'Point mutation',
      'Silent mutation',
      'Missense mutation',
    ]),
    level: 5,
  },
  {
    id: 'bio152',
    text: 'What is a silent mutation?',
    answers: A('bio152', 'Mutation with no amino acid change', [
      'Mutation with amino acid change',
      'Frameshift mutation',
      'Nonsense mutation',
    ]),
    level: 5,
  },
  {
    id: 'bio153',
    text: 'What is a missense mutation?',
    answers: A('bio153', 'Mutation changing one amino acid', [
      'Silent mutation',
      'Nonsense mutation',
      'Frameshift mutation',
    ]),
    level: 5,
  },
  {
    id: 'bio154',
    text: 'What is a nonsense mutation?',
    answers: A('bio154', 'Mutation creating stop codon', [
      'Silent mutation',
      'Missense mutation',
      'Frameshift mutation',
    ]),
    level: 5,
  },
  {
    id: 'bio155',
    text: 'What is PCR?',
    answers: A('bio155', 'Polymerase Chain Reaction', [
      'Protein Chain Reaction',
      'Peptide Chain Reaction',
      'Phosphate Chain Reaction',
    ]),
    level: 5,
  },
  {
    id: 'bio156',
    text: 'What is gel electrophoresis?',
    answers: A('bio156', 'Separating DNA by size', [
      'Copying DNA',
      'Sequencing DNA',
      'Cutting DNA',
    ]),
    level: 5,
  },
  {
    id: 'bio157',
    text: 'What is a restriction enzyme?',
    answers: A('bio157', 'Enzyme that cuts DNA', [
      'Enzyme that copies DNA',
      'Enzyme that joins DNA',
      'Enzyme that repairs DNA',
    ]),
    level: 5,
  },
  {
    id: 'bio158',
    text: 'What is DNA ligase?',
    answers: A('bio158', 'Enzyme that joins DNA', [
      'Enzyme that cuts DNA',
      'Enzyme that copies DNA',
      'Enzyme that repairs DNA',
    ]),
    level: 5,
  },
  {
    id: 'bio159',
    text: 'What is a plasmid?',
    answers: A('bio159', 'Small circular DNA in bacteria', [
      'Large DNA',
      'RNA',
      'Protein',
    ]),
    level: 5,
  },
  {
    id: 'bio160',
    text: 'What is recombinant DNA?',
    answers: A('bio160', 'DNA from different sources combined', [
      'Natural DNA',
      'Mutated DNA',
      'Copied DNA',
    ]),
    level: 5,
  },

  // ===== LEVEL 6: Very Hard =====
  {
    id: 'bio161',
    text: 'What is CRISPR?',
    answers: A('bio161', 'Gene editing technology', [
      'Gene sequencing',
      'Gene copying',
      'Gene expression',
    ]),
    level: 6,
  },
  {
    id: 'bio162',
    text: 'What is Cas9?',
    answers: A('bio162', 'Enzyme used in CRISPR', [
      'Type of DNA',
      'Type of RNA',
      'Type of protein',
    ]),
    level: 6,
  },
  {
    id: 'bio163',
    text: 'What is epigenetics?',
    answers: A('bio163', 'Heritable changes not in DNA sequence', [
      'Changes in DNA sequence',
      'Protein changes',
      'Cell changes',
    ]),
    level: 6,
  },
  {
    id: 'bio164',
    text: 'What is DNA methylation?',
    answers: A('bio164', 'Adding methyl groups to DNA', [
      'Removing methyl groups',
      'Adding phosphate groups',
      'Removing phosphate groups',
    ]),
    level: 6,
  },
  {
    id: 'bio165',
    text: 'What is histone modification?',
    answers: A('bio165', 'Chemical changes to histone proteins', [
      'DNA changes',
      'RNA changes',
      'Lipid changes',
    ]),
    level: 6,
  },
  {
    id: 'bio166',
    text: 'What is chromatin?',
    answers: A('bio166', 'DNA-protein complex', [
      'Pure DNA',
      'Pure protein',
      'Pure RNA',
    ]),
    level: 6,
  },
  {
    id: 'bio167',
    text: 'What is euchromatin?',
    answers: A('bio167', 'Loosely packed, active chromatin', [
      'Tightly packed chromatin',
      'Inactive chromatin',
      'Condensed chromatin',
    ]),
    level: 6,
  },
  {
    id: 'bio168',
    text: 'What is heterochromatin?',
    answers: A('bio168', 'Tightly packed, inactive chromatin', [
      'Loosely packed chromatin',
      'Active chromatin',
      'Decondensed chromatin',
    ]),
    level: 6,
  },
  {
    id: 'bio169',
    text: 'What is a promoter?',
    answers: A('bio169', 'DNA sequence where transcription starts', [
      'DNA sequence where translation starts',
      'End of gene',
      'Middle of gene',
    ]),
    level: 6,
  },
  {
    id: 'bio170',
    text: 'What is an enhancer?',
    answers: A('bio170', 'DNA sequence that increases transcription', [
      'DNA sequence that decreases transcription',
      'Promoter',
      'Terminator',
    ]),
    level: 6,
  },

  // ===== LEVEL 7: Legendary =====
  {
    id: 'bio171',
    text: 'What is a silencer?',
    answers: A('bio171', 'DNA sequence that decreases transcription', [
      'DNA sequence that increases transcription',
      'Promoter',
      'Enhancer',
    ]),
    level: 7,
  },
  {
    id: 'bio172',
    text: 'What is alternative splicing?',
    answers: A('bio172', 'Different mRNAs from same gene', [
      'Same mRNA from different genes',
      'No splicing',
      'Constitutive splicing',
    ]),
    level: 7,
  },
  {
    id: 'bio173',
    text: 'What is an intron?',
    answers: A('bio173', 'Non-coding sequence removed from mRNA', [
      'Coding sequence',
      'Exon',
      'Promoter',
    ]),
    level: 7,
  },
  {
    id: 'bio174',
    text: 'What is an exon?',
    answers: A('bio174', 'Coding sequence in mRNA', [
      'Non-coding sequence',
      'Intron',
      'Promoter',
    ]),
    level: 7,
  },
  {
    id: 'bio175',
    text: 'What is RNA interference?',
    answers: A('bio175', 'Gene silencing by small RNAs', [
      'Gene activation',
      'Gene copying',
      'Gene editing',
    ]),
    level: 7,
  },
  {
    id: 'bio176',
    text: 'What is siRNA?',
    answers: A('bio176', 'Small interfering RNA', [
      'Small inducing RNA',
      'Signal RNA',
      'Structural RNA',
    ]),
    level: 7,
  },
  {
    id: 'bio177',
    text: 'What is miRNA?',
    answers: A('bio177', 'MicroRNA', [
      'Messenger RNA',
      'Mitochondrial RNA',
      'Modified RNA',
    ]),
    level: 7,
  },
  {
    id: 'bio178',
    text: 'What is a transcription factor?',
    answers: A('bio178', 'Protein regulating gene expression', [
      'DNA sequence',
      'RNA sequence',
      'Lipid',
    ]),
    level: 7,
  },
  {
    id: 'bio179',
    text: 'What is the lac operon?',
    answers: A('bio179', 'Gene regulation system in bacteria', [
      'Human gene system',
      'Plant gene system',
      'Viral gene system',
    ]),
    level: 7,
  },
  {
    id: 'bio180',
    text: 'What is an operon?',
    answers: A('bio180', 'Cluster of genes under single promoter', [
      'Single gene',
      'Chromosome',
      'Genome',
    ]),
    level: 7,
  },

  // ===== LEVEL 8: Professor =====
  {
    id: 'bio181',
    text: 'What is the trp operon?',
    answers: A('bio181', 'Tryptophan synthesis operon', [
      'Lactose operon',
      'Glucose operon',
      'Histidine operon',
    ]),
    level: 8,
  },
  {
    id: 'bio182',
    text: 'What is attenuation?',
    answers: A('bio182', 'Regulation by premature transcription termination', [
      'Regulation by translation',
      'Regulation by degradation',
      'Regulation by modification',
    ]),
    level: 8,
  },
  {
    id: 'bio183',
    text: 'What is a ribozyme?',
    answers: A('bio183', 'RNA with catalytic activity', [
      'Protein enzyme',
      'DNA enzyme',
      'Lipid enzyme',
    ]),
    level: 8,
  },
  {
    id: 'bio184',
    text: 'What is the RNA world hypothesis?',
    answers: A('bio184', 'RNA preceded DNA and proteins', [
      'DNA came first',
      'Proteins came first',
      'All evolved together',
    ]),
    level: 8,
  },
  {
    id: 'bio185',
    text: 'What is horizontal gene transfer?',
    answers: A('bio185', 'Gene transfer between organisms', [
      'Gene transfer to offspring',
      'Gene mutation',
      'Gene deletion',
    ]),
    level: 8,
  },
  {
    id: 'bio186',
    text: 'What is a transposon?',
    answers: A('bio186', 'Mobile genetic element', [
      'Fixed genetic element',
      'Protein',
      'Lipid',
    ]),
    level: 8,
  },
  {
    id: 'bio187',
    text: 'What is a retrotransposon?',
    answers: A('bio187', 'Transposon using RNA intermediate', [
      'DNA-only transposon',
      'Protein transposon',
      'Lipid transposon',
    ]),
    level: 8,
  },
  {
    id: 'bio188',
    text: 'What is genomic imprinting?',
    answers: A('bio188', 'Parent-specific gene expression', [
      'Random gene expression',
      'Equal expression',
      'No expression',
    ]),
    level: 8,
  },
  {
    id: 'bio189',
    text: 'What is X-inactivation?',
    answers: A('bio189', 'Silencing of one X chromosome', [
      'Activation of X chromosome',
      'Deletion of X chromosome',
      'Duplication of X chromosome',
    ]),
    level: 8,
  },
  {
    id: 'bio190',
    text: 'What is a Barr body?',
    answers: A('bio190', 'Inactivated X chromosome', [
      'Active X chromosome',
      'Y chromosome',
      'Autosome',
    ]),
    level: 8,
  },
];
