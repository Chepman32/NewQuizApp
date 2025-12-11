import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const anatomyQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'ana1',
    text: 'How many bones are in the adult human body?',
    answers: A('ana1', '206', ['106', '306', '156']),
    level: 1,
  },
  {
    id: 'ana2',
    text: 'What is the largest organ in the human body?',
    answers: A('ana2', 'Skin', ['Liver', 'Heart', 'Brain']),
    level: 1,
  },
  {
    id: 'ana3',
    text: 'What organ pumps blood through the body?',
    answers: A('ana3', 'Heart', ['Lungs', 'Liver', 'Kidney']),
    level: 1,
  },
  {
    id: 'ana4',
    text: 'What is the longest bone in the human body?',
    answers: A('ana4', 'Femur', ['Tibia', 'Humerus', 'Spine']),
    level: 1,
  },
  {
    id: 'ana5',
    text: 'What is the smallest bone in the human body?',
    answers: A('ana5', 'Stapes', ['Femur', 'Phalanx', 'Vertebra']),
    level: 1,
  },
  {
    id: 'ana6',
    text: 'How many chambers does the human heart have?',
    answers: A('ana6', '4', ['2', '3', '5']),
    level: 1,
  },
  {
    id: 'ana7',
    text: 'What is the main function of the lungs?',
    answers: A('ana7', 'Gas exchange', [
      'Pumping blood',
      'Digestion',
      'Filtering waste',
    ]),
    level: 1,
  },
  {
    id: 'ana8',
    text: 'What is the brain protected by?',
    answers: A('ana8', 'Skull', ['Ribs', 'Spine', 'Pelvis']),
    level: 1,
  },
  {
    id: 'ana9',
    text: 'What protects the heart and lungs?',
    answers: A('ana9', 'Ribs', ['Skull', 'Pelvis', 'Spine']),
    level: 1,
  },
  {
    id: 'ana10',
    text: 'What is the backbone called?',
    answers: A('ana10', 'Spine/Vertebral column', ['Skull', 'Ribs', 'Pelvis']),
    level: 1,
  },
  {
    id: 'ana11',
    text: 'What connects muscles to bones?',
    answers: A('ana11', 'Tendons', ['Ligaments', 'Cartilage', 'Nerves']),
    level: 1,
  },
  {
    id: 'ana12',
    text: 'What connects bones to bones?',
    answers: A('ana12', 'Ligaments', ['Tendons', 'Muscles', 'Cartilage']),
    level: 1,
  },
  {
    id: 'ana13',
    text: 'What is the largest internal organ?',
    answers: A('ana13', 'Liver', ['Heart', 'Brain', 'Kidney']),
    level: 1,
  },
  {
    id: 'ana14',
    text: 'What organ filters blood and removes waste?',
    answers: A('ana14', 'Kidney', ['Liver', 'Heart', 'Lungs']),
    level: 1,
  },
  {
    id: 'ana15',
    text: 'What organ produces bile?',
    answers: A('ana15', 'Liver', ['Gallbladder', 'Pancreas', 'Stomach']),
    level: 1,
  },
  {
    id: 'ana16',
    text: 'What organ stores bile?',
    answers: A('ana16', 'Gallbladder', ['Liver', 'Pancreas', 'Spleen']),
    level: 1,
  },
  {
    id: 'ana17',
    text: 'What organ produces insulin?',
    answers: A('ana17', 'Pancreas', ['Liver', 'Kidney', 'Thyroid']),
    level: 1,
  },
  {
    id: 'ana18',
    text: 'What carries blood away from the heart?',
    answers: A('ana18', 'Arteries', ['Veins', 'Capillaries', 'Nerves']),
    level: 1,
  },
  {
    id: 'ana19',
    text: 'What carries blood back to the heart?',
    answers: A('ana19', 'Veins', ['Arteries', 'Capillaries', 'Lymph vessels']),
    level: 1,
  },
  {
    id: 'ana20',
    text: 'What is the smallest blood vessel?',
    answers: A('ana20', 'Capillary', ['Artery', 'Vein', 'Aorta']),
    level: 1,
  },
  {
    id: 'ana21',
    text: 'What is the largest artery in the body?',
    answers: A('ana21', 'Aorta', ['Carotid', 'Femoral', 'Pulmonary']),
    level: 2,
  },
  {
    id: 'ana22',
    text: 'What is the largest vein in the body?',
    answers: A('ana22', 'Vena cava', ['Jugular', 'Femoral', 'Pulmonary']),
    level: 2,
  },
  {
    id: 'ana23',
    text: 'How many vertebrae are in the human spine?',
    answers: A('ana23', '33', ['26', '24', '30']),
    level: 2,
  },
  {
    id: 'ana24',
    text: 'What are the bones of the fingers called?',
    answers: A('ana24', 'Phalanges', ['Metacarpals', 'Carpals', 'Tarsals']),
    level: 2,
  },
  {
    id: 'ana25',
    text: 'What are the bones of the palm called?',
    answers: A('ana25', 'Metacarpals', ['Phalanges', 'Carpals', 'Tarsals']),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'ana26',
    text: 'What is the kneecap called?',
    answers: A('ana26', 'Patella', ['Femur', 'Tibia', 'Fibula']),
    level: 3,
  },
  {
    id: 'ana27',
    text: 'What is the collarbone called?',
    answers: A('ana27', 'Clavicle', ['Scapula', 'Sternum', 'Humerus']),
    level: 3,
  },
  {
    id: 'ana28',
    text: 'What is the shoulder blade called?',
    answers: A('ana28', 'Scapula', ['Clavicle', 'Sternum', 'Humerus']),
    level: 3,
  },
  {
    id: 'ana29',
    text: 'What is the breastbone called?',
    answers: A('ana29', 'Sternum', ['Clavicle', 'Scapula', 'Ribs']),
    level: 3,
  },
  {
    id: 'ana30',
    text: 'What is the upper arm bone called?',
    answers: A('ana30', 'Humerus', ['Radius', 'Ulna', 'Femur']),
    level: 3,
  },
  {
    id: 'ana31',
    text: 'What are the two forearm bones?',
    answers: A('ana31', 'Radius and ulna', [
      'Humerus and femur',
      'Tibia and fibula',
      'Carpals and metacarpals',
    ]),
    level: 3,
  },
  {
    id: 'ana32',
    text: 'What is the thigh bone called?',
    answers: A('ana32', 'Femur', ['Tibia', 'Fibula', 'Humerus']),
    level: 3,
  },
  {
    id: 'ana33',
    text: 'What are the two lower leg bones?',
    answers: A('ana33', 'Tibia and fibula', [
      'Femur and patella',
      'Radius and ulna',
      'Tarsals and metatarsals',
    ]),
    level: 3,
  },
  {
    id: 'ana34',
    text: 'What is the shinbone called?',
    answers: A('ana34', 'Tibia', ['Fibula', 'Femur', 'Patella']),
    level: 3,
  },
  {
    id: 'ana35',
    text: 'What type of joint is the knee?',
    answers: A('ana35', 'Hinge joint', [
      'Ball and socket',
      'Pivot joint',
      'Gliding joint',
    ]),
    level: 4,
  },
  {
    id: 'ana36',
    text: 'What type of joint is the hip?',
    answers: A('ana36', 'Ball and socket', [
      'Hinge joint',
      'Pivot joint',
      'Gliding joint',
    ]),
    level: 4,
  },
  {
    id: 'ana37',
    text: 'What type of joint is the shoulder?',
    answers: A('ana37', 'Ball and socket', [
      'Hinge joint',
      'Pivot joint',
      'Gliding joint',
    ]),
    level: 4,
  },
  {
    id: 'ana38',
    text: 'What is the membrane covering bones?',
    answers: A('ana38', 'Periosteum', [
      'Endosteum',
      'Perichondrium',
      'Synovium',
    ]),
    level: 4,
  },
  {
    id: 'ana39',
    text: 'What is the fluid in joints called?',
    answers: A('ana39', 'Synovial fluid', [
      'Cerebrospinal fluid',
      'Lymph',
      'Plasma',
    ]),
    level: 4,
  },
  {
    id: 'ana40',
    text: 'What is the outer layer of skin called?',
    answers: A('ana40', 'Epidermis', ['Dermis', 'Hypodermis', 'Subcutis']),
    level: 4,
  },
  {
    id: 'ana41',
    text: 'What is the middle layer of skin called?',
    answers: A('ana41', 'Dermis', ['Epidermis', 'Hypodermis', 'Subcutis']),
    level: 4,
  },
  {
    id: 'ana42',
    text: 'What gives skin its color?',
    answers: A('ana42', 'Melanin', ['Hemoglobin', 'Keratin', 'Collagen']),
    level: 4,
  },
  {
    id: 'ana43',
    text: 'What protein makes up hair and nails?',
    answers: A('ana43', 'Keratin', ['Collagen', 'Elastin', 'Melanin']),
    level: 4,
  },
  {
    id: 'ana44',
    text: 'What is the main protein in connective tissue?',
    answers: A('ana44', 'Collagen', ['Keratin', 'Elastin', 'Melanin']),
    level: 4,
  },
  {
    id: 'ana45',
    text: 'What is the protein in red blood cells?',
    answers: A('ana45', 'Hemoglobin', ['Myoglobin', 'Albumin', 'Fibrin']),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'ana46',
    text: 'What is the bundle of His?',
    answers: A('ana46', 'Cardiac conduction tissue', [
      'Nerve bundle',
      'Muscle bundle',
      'Blood vessel bundle',
    ]),
    level: 5,
  },
  {
    id: 'ana47',
    text: 'What is the sinoatrial node?',
    answers: A('ana47', "Heart's natural pacemaker", [
      'Nerve center',
      'Muscle group',
      'Blood vessel',
    ]),
    level: 5,
  },
  {
    id: 'ana48',
    text: 'What is the atrioventricular node?',
    answers: A(
      'ana48',
      'Delays electrical signal between atria and ventricles',
      ['Pacemaker', 'Valve', 'Chamber'],
    ),
    level: 5,
  },
  {
    id: 'ana49',
    text: 'What are Purkinje fibers?',
    answers: A('ana49', 'Cardiac conduction fibers in ventricles', [
      'Nerve fibers',
      'Muscle fibers',
      'Connective tissue',
    ]),
    level: 5,
  },
  {
    id: 'ana50',
    text: 'What is the foramen ovale?',
    answers: A('ana50', 'Opening between fetal heart atria', [
      'Skull opening',
      'Spinal opening',
      'Pelvic opening',
    ]),
    level: 5,
  },
  {
    id: 'ana51',
    text: 'What is the ductus arteriosus?',
    answers: A('ana51', 'Fetal blood vessel bypassing lungs', [
      'Adult artery',
      'Vein',
      'Capillary',
    ]),
    level: 6,
  },
  {
    id: 'ana52',
    text: 'What is the circle of Willis?',
    answers: A('ana52', 'Arterial circle at base of brain', [
      'Venous circle',
      'Nerve circle',
      'Muscle circle',
    ]),
    level: 6,
  },
  {
    id: 'ana53',
    text: 'What is the brachial plexus?',
    answers: A('ana53', 'Network of nerves for arm', [
      'Network for leg',
      'Network for trunk',
      'Network for head',
    ]),
    level: 6,
  },
  {
    id: 'ana54',
    text: 'What is the lumbar plexus?',
    answers: A('ana54', 'Network of nerves for lower limb', [
      'Network for arm',
      'Network for trunk',
      'Network for head',
    ]),
    level: 6,
  },
  {
    id: 'ana55',
    text: 'What is the sacral plexus?',
    answers: A('ana55', 'Network of nerves including sciatic', [
      'Network for arm',
      'Network for trunk',
      'Network for head',
    ]),
    level: 6,
  },
  {
    id: 'ana56',
    text: 'What is the sciatic nerve?',
    answers: A('ana56', 'Largest nerve in body', [
      'Smallest nerve',
      'Cranial nerve',
      'Spinal nerve only',
    ]),
    level: 7,
  },
  {
    id: 'ana57',
    text: 'What is the vagus nerve?',
    answers: A('ana57', 'Cranial nerve X, parasympathetic', [
      'Sympathetic nerve',
      'Motor nerve only',
      'Sensory nerve only',
    ]),
    level: 7,
  },
  {
    id: 'ana58',
    text: 'What is the trigeminal nerve?',
    answers: A('ana58', 'Cranial nerve V, facial sensation', [
      'Cranial nerve X',
      'Spinal nerve',
      'Autonomic nerve',
    ]),
    level: 7,
  },
  {
    id: 'ana59',
    text: 'What is the facial nerve?',
    answers: A('ana59', 'Cranial nerve VII, facial expression', [
      'Cranial nerve V',
      'Cranial nerve X',
      'Spinal nerve',
    ]),
    level: 7,
  },
  {
    id: 'ana60',
    text: 'What is the optic nerve?',
    answers: A('ana60', 'Cranial nerve II, vision', [
      'Cranial nerve I',
      'Cranial nerve III',
      'Spinal nerve',
    ]),
    level: 7,
  },
  {
    id: 'ana61',
    text: 'What is the olfactory nerve?',
    answers: A('ana61', 'Cranial nerve I, smell', [
      'Cranial nerve II',
      'Cranial nerve III',
      'Spinal nerve',
    ]),
    level: 8,
  },
  {
    id: 'ana62',
    text: 'What is the oculomotor nerve?',
    answers: A('ana62', 'Cranial nerve III, eye movement', [
      'Cranial nerve II',
      'Cranial nerve IV',
      'Cranial nerve VI',
    ]),
    level: 8,
  },
  {
    id: 'ana63',
    text: 'What is the trochlear nerve?',
    answers: A('ana63', 'Cranial nerve IV, superior oblique muscle', [
      'Cranial nerve III',
      'Cranial nerve VI',
      'Cranial nerve VII',
    ]),
    level: 8,
  },
  {
    id: 'ana64',
    text: 'What is the abducens nerve?',
    answers: A('ana64', 'Cranial nerve VI, lateral rectus muscle', [
      'Cranial nerve III',
      'Cranial nerve IV',
      'Cranial nerve VII',
    ]),
    level: 8,
  },
  {
    id: 'ana65',
    text: 'What is the hypoglossal nerve?',
    answers: A('ana65', 'Cranial nerve XII, tongue movement', [
      'Cranial nerve X',
      'Cranial nerve XI',
      'Cranial nerve IX',
    ]),
    level: 8,
  },
];
