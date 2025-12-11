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

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'ana66',
    text: 'What is the heart?',
    answers: A('ana66', 'Organ that pumps blood', [
      'Organ that breathes',
      'Organ that digests',
      'Organ that thinks',
    ]),
    level: 1,
  },
  {
    id: 'ana67',
    text: 'What are lungs?',
    answers: A('ana67', 'Organs for breathing', [
      'Organs for pumping blood',
      'Organs for digestion',
      'Organs for thinking',
    ]),
    level: 1,
  },
  {
    id: 'ana68',
    text: 'What is the brain?',
    answers: A('ana68', 'Organ for thinking', [
      'Organ for breathing',
      'Organ for pumping blood',
      'Organ for digestion',
    ]),
    level: 1,
  },
  {
    id: 'ana69',
    text: 'What is the stomach?',
    answers: A('ana69', 'Organ for digestion', [
      'Organ for breathing',
      'Organ for pumping blood',
      'Organ for thinking',
    ]),
    level: 1,
  },
  {
    id: 'ana70',
    text: 'What is skin?',
    answers: A('ana70', 'Outer covering of body', [
      'Inner organ',
      'Bone',
      'Muscle',
    ]),
    level: 1,
  },
  {
    id: 'ana71',
    text: 'What are bones?',
    answers: A('ana71', 'Hard structures supporting body', [
      'Soft organs',
      'Muscles',
      'Skin',
    ]),
    level: 1,
  },
  {
    id: 'ana72',
    text: 'What are muscles?',
    answers: A('ana72', 'Tissues that move body', ['Bones', 'Organs', 'Skin']),
    level: 1,
  },
  {
    id: 'ana73',
    text: 'What is blood?',
    answers: A('ana73', 'Fluid carrying oxygen and nutrients', [
      'Solid tissue',
      'Bone',
      'Muscle',
    ]),
    level: 1,
  },
  {
    id: 'ana74',
    text: 'What is the spine?',
    answers: A('ana74', 'Backbone', ['Arm bone', 'Leg bone', 'Skull']),
    level: 1,
  },
  {
    id: 'ana75',
    text: 'What is the skull?',
    answers: A('ana75', 'Bone protecting brain', [
      'Bone in arm',
      'Bone in leg',
      'Bone in chest',
    ]),
    level: 1,
  },
  {
    id: 'ana76',
    text: 'What is the liver?',
    answers: A('ana76', 'Organ that filters blood', [
      'Organ that pumps blood',
      'Organ that breathes',
      'Organ that thinks',
    ]),
    level: 2,
  },
  {
    id: 'ana77',
    text: 'What are kidneys?',
    answers: A('ana77', 'Organs that filter waste', [
      'Organs that pump blood',
      'Organs that breathe',
      'Organs that digest',
    ]),
    level: 2,
  },
  {
    id: 'ana78',
    text: 'What is the intestine?',
    answers: A('ana78', 'Organ for absorbing nutrients', [
      'Organ for breathing',
      'Organ for pumping blood',
      'Organ for thinking',
    ]),
    level: 2,
  },
  {
    id: 'ana79',
    text: 'What is the esophagus?',
    answers: A('ana79', 'Tube from mouth to stomach', [
      'Tube from nose to lungs',
      'Tube from heart to body',
      'Tube from brain to spine',
    ]),
    level: 2,
  },
  {
    id: 'ana80',
    text: 'What is the trachea?',
    answers: A('ana80', 'Windpipe to lungs', [
      'Food pipe',
      'Blood vessel',
      'Nerve',
    ]),
    level: 2,
  },
  {
    id: 'ana81',
    text: 'What are arteries?',
    answers: A('ana81', 'Blood vessels from heart', [
      'Blood vessels to heart',
      'Nerves',
      'Muscles',
    ]),
    level: 2,
  },
  {
    id: 'ana82',
    text: 'What are veins?',
    answers: A('ana82', 'Blood vessels to heart', [
      'Blood vessels from heart',
      'Nerves',
      'Muscles',
    ]),
    level: 2,
  },
  {
    id: 'ana83',
    text: 'What are capillaries?',
    answers: A('ana83', 'Tiny blood vessels', [
      'Large blood vessels',
      'Nerves',
      'Muscles',
    ]),
    level: 2,
  },
  {
    id: 'ana84',
    text: 'What is the diaphragm?',
    answers: A('ana84', 'Muscle for breathing', [
      'Muscle for walking',
      'Muscle for eating',
      'Muscle for thinking',
    ]),
    level: 2,
  },
  {
    id: 'ana85',
    text: 'What is the pancreas?',
    answers: A('ana85', 'Organ producing insulin', [
      'Organ producing blood',
      'Organ producing air',
      'Organ producing thoughts',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'ana86',
    text: 'What is the femur?',
    answers: A('ana86', 'Thigh bone', ['Arm bone', 'Skull bone', 'Spine bone']),
    level: 3,
  },
  {
    id: 'ana87',
    text: 'What is the humerus?',
    answers: A('ana87', 'Upper arm bone', [
      'Leg bone',
      'Skull bone',
      'Spine bone',
    ]),
    level: 3,
  },
  {
    id: 'ana88',
    text: 'What is the tibia?',
    answers: A('ana88', 'Shin bone', ['Arm bone', 'Skull bone', 'Spine bone']),
    level: 3,
  },
  {
    id: 'ana89',
    text: 'What is the fibula?',
    answers: A('ana89', 'Smaller lower leg bone', [
      'Upper leg bone',
      'Arm bone',
      'Skull bone',
    ]),
    level: 3,
  },
  {
    id: 'ana90',
    text: 'What is the radius?',
    answers: A('ana90', 'Forearm bone on thumb side', [
      'Forearm bone on pinky side',
      'Upper arm bone',
      'Leg bone',
    ]),
    level: 3,
  },
  {
    id: 'ana91',
    text: 'What is the ulna?',
    answers: A('ana91', 'Forearm bone on pinky side', [
      'Forearm bone on thumb side',
      'Upper arm bone',
      'Leg bone',
    ]),
    level: 3,
  },
  {
    id: 'ana92',
    text: 'What is the patella?',
    answers: A('ana92', 'Kneecap', ['Elbow bone', 'Shoulder bone', 'Hip bone']),
    level: 3,
  },
  {
    id: 'ana93',
    text: 'What is the scapula?',
    answers: A('ana93', 'Shoulder blade', [
      'Hip bone',
      'Knee bone',
      'Elbow bone',
    ]),
    level: 3,
  },
  {
    id: 'ana94',
    text: 'What is the clavicle?',
    answers: A('ana94', 'Collarbone', ['Hip bone', 'Knee bone', 'Elbow bone']),
    level: 3,
  },
  {
    id: 'ana95',
    text: 'What is the pelvis?',
    answers: A('ana95', 'Hip bone structure', [
      'Shoulder structure',
      'Knee structure',
      'Elbow structure',
    ]),
    level: 3,
  },
  {
    id: 'ana96',
    text: 'What is the cerebrum?',
    answers: A('ana96', 'Largest part of brain', [
      'Smallest part',
      'Middle part',
      'Back part',
    ]),
    level: 4,
  },
  {
    id: 'ana97',
    text: 'What is the cerebellum?',
    answers: A('ana97', 'Brain part for coordination', [
      'Brain part for thinking',
      'Brain part for vision',
      'Brain part for hearing',
    ]),
    level: 4,
  },
  {
    id: 'ana98',
    text: 'What is the brainstem?',
    answers: A('ana98', 'Brain part connecting to spinal cord', [
      'Front of brain',
      'Top of brain',
      'Side of brain',
    ]),
    level: 4,
  },
  {
    id: 'ana99',
    text: 'What is the hypothalamus?',
    answers: A('ana99', 'Brain region controlling hormones', [
      'Brain region for vision',
      'Brain region for hearing',
      'Brain region for smell',
    ]),
    level: 4,
  },
  {
    id: 'ana100',
    text: 'What is the thalamus?',
    answers: A('ana100', 'Brain relay station', [
      'Brain storage',
      'Brain motor area',
      'Brain sensory area',
    ]),
    level: 4,
  },
  {
    id: 'ana101',
    text: 'What is the hippocampus?',
    answers: A('ana101', 'Brain region for memory', [
      'Brain region for vision',
      'Brain region for hearing',
      'Brain region for smell',
    ]),
    level: 4,
  },
  {
    id: 'ana102',
    text: 'What is the amygdala?',
    answers: A('ana102', 'Brain region for emotions', [
      'Brain region for memory',
      'Brain region for vision',
      'Brain region for hearing',
    ]),
    level: 4,
  },
  {
    id: 'ana103',
    text: 'What is the corpus callosum?',
    answers: A('ana103', 'Connection between brain hemispheres', [
      'Connection to spine',
      'Connection to eyes',
      'Connection to ears',
    ]),
    level: 4,
  },
  {
    id: 'ana104',
    text: 'What is the medulla oblongata?',
    answers: A('ana104', 'Brainstem controlling vital functions', [
      'Cerebrum part',
      'Cerebellum part',
      'Thalamus part',
    ]),
    level: 4,
  },
  {
    id: 'ana105',
    text: 'What is the pons?',
    answers: A('ana105', 'Brainstem relay center', [
      'Cerebrum part',
      'Cerebellum part',
      'Thalamus part',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'ana106',
    text: 'What is the brachial plexus?',
    answers: A('ana106', 'Nerve network for arm', [
      'Nerve network for leg',
      'Nerve network for face',
      'Nerve network for trunk',
    ]),
    level: 5,
  },
  {
    id: 'ana107',
    text: 'What is the lumbar plexus?',
    answers: A('ana107', 'Nerve network for lower body', [
      'Nerve network for arm',
      'Nerve network for face',
      'Nerve network for chest',
    ]),
    level: 5,
  },
  {
    id: 'ana108',
    text: 'What is the sacral plexus?',
    answers: A('ana108', 'Nerve network including sciatic', [
      'Nerve network for arm',
      'Nerve network for face',
      'Nerve network for chest',
    ]),
    level: 5,
  },
  {
    id: 'ana109',
    text: 'What is the vagus nerve?',
    answers: A('ana109', 'Cranial nerve X for parasympathetic', [
      'Cranial nerve I',
      'Cranial nerve II',
      'Cranial nerve III',
    ]),
    level: 5,
  },
  {
    id: 'ana110',
    text: 'What is the trigeminal nerve?',
    answers: A('ana110', 'Cranial nerve V for face sensation', [
      'Cranial nerve I',
      'Cranial nerve II',
      'Cranial nerve III',
    ]),
    level: 5,
  },
  {
    id: 'ana111',
    text: 'What is the Circle of Willis?',
    answers: A('ana111', 'Arterial circle at brain base', [
      'Venous circle',
      'Nerve circle',
      'Muscle circle',
    ]),
    level: 6,
  },
  {
    id: 'ana112',
    text: 'What is the carotid artery?',
    answers: A('ana112', 'Major artery to head', [
      'Major artery to arm',
      'Major artery to leg',
      'Major artery to heart',
    ]),
    level: 6,
  },
  {
    id: 'ana113',
    text: 'What is the jugular vein?',
    answers: A('ana113', 'Major vein from head', [
      'Major vein from arm',
      'Major vein from leg',
      'Major vein from heart',
    ]),
    level: 6,
  },
  {
    id: 'ana114',
    text: 'What is the aorta?',
    answers: A('ana114', 'Largest artery from heart', [
      'Largest vein',
      'Smallest artery',
      'Smallest vein',
    ]),
    level: 6,
  },
  {
    id: 'ana115',
    text: 'What is the vena cava?',
    answers: A('ana115', 'Largest vein to heart', [
      'Largest artery',
      'Smallest vein',
      'Smallest artery',
    ]),
    level: 6,
  },
  {
    id: 'ana116',
    text: 'What is the meninges?',
    answers: A('ana116', 'Membranes covering brain and spinal cord', [
      'Membranes covering heart',
      'Membranes covering lungs',
      'Membranes covering liver',
    ]),
    level: 7,
  },
  {
    id: 'ana117',
    text: 'What is the dura mater?',
    answers: A('ana117', 'Outermost meningeal layer', [
      'Innermost layer',
      'Middle layer',
      'No layer',
    ]),
    level: 7,
  },
  {
    id: 'ana118',
    text: 'What is the arachnoid mater?',
    answers: A('ana118', 'Middle meningeal layer', [
      'Outermost layer',
      'Innermost layer',
      'No layer',
    ]),
    level: 7,
  },
  {
    id: 'ana119',
    text: 'What is the pia mater?',
    answers: A('ana119', 'Innermost meningeal layer', [
      'Outermost layer',
      'Middle layer',
      'No layer',
    ]),
    level: 7,
  },
  {
    id: 'ana120',
    text: 'What is cerebrospinal fluid?',
    answers: A('ana120', 'Fluid cushioning brain and spinal cord', [
      'Blood',
      'Lymph',
      'Bile',
    ]),
    level: 7,
  },
  {
    id: 'ana121',
    text: 'What is the blood-brain barrier?',
    answers: A('ana121', 'Selective barrier protecting brain', [
      'Open barrier',
      'No barrier',
      'Random barrier',
    ]),
    level: 8,
  },
  {
    id: 'ana122',
    text: 'What is the reticular formation?',
    answers: A('ana122', 'Brainstem network for arousal', [
      'Cerebrum network',
      'Cerebellum network',
      'Thalamus network',
    ]),
    level: 8,
  },
  {
    id: 'ana123',
    text: 'What is the limbic system?',
    answers: A('ana123', 'Brain system for emotion and memory', [
      'System for vision',
      'System for hearing',
      'System for movement',
    ]),
    level: 8,
  },
  {
    id: 'ana124',
    text: 'What is the basal ganglia?',
    answers: A('ana124', 'Brain nuclei for movement control', [
      'Brain nuclei for vision',
      'Brain nuclei for hearing',
      'Brain nuclei for smell',
    ]),
    level: 8,
  },
  {
    id: 'ana125',
    text: 'What is the substantia nigra?',
    answers: A('ana125', 'Midbrain structure producing dopamine', [
      'Cerebrum structure',
      'Cerebellum structure',
      'Thalamus structure',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'ana126',
    text: 'What is the knee?',
    answers: A('ana126', 'Joint between thigh and leg', [
      'Joint in arm',
      'Joint in neck',
      'Joint in back',
    ]),
    level: 1,
  },
  {
    id: 'ana127',
    text: 'What is the elbow?',
    answers: A('ana127', 'Joint between upper and lower arm', [
      'Joint in leg',
      'Joint in neck',
      'Joint in back',
    ]),
    level: 1,
  },
  {
    id: 'ana128',
    text: 'What is the ankle?',
    answers: A('ana128', 'Joint between leg and foot', [
      'Joint in arm',
      'Joint in neck',
      'Joint in back',
    ]),
    level: 1,
  },
  {
    id: 'ana129',
    text: 'What is the wrist?',
    answers: A('ana129', 'Joint between arm and hand', [
      'Joint in leg',
      'Joint in neck',
      'Joint in back',
    ]),
    level: 1,
  },
  {
    id: 'ana130',
    text: 'What is the shoulder?',
    answers: A('ana130', 'Joint connecting arm to body', [
      'Joint in leg',
      'Joint in neck',
      'Joint in back',
    ]),
    level: 1,
  },
  {
    id: 'ana131',
    text: 'What is the hip?',
    answers: A('ana131', 'Joint connecting leg to body', [
      'Joint in arm',
      'Joint in neck',
      'Joint in back',
    ]),
    level: 1,
  },
  {
    id: 'ana132',
    text: 'What is the neck?',
    answers: A('ana132', 'Part connecting head to body', [
      'Part of arm',
      'Part of leg',
      'Part of hand',
    ]),
    level: 1,
  },
  {
    id: 'ana133',
    text: 'What is the chest?',
    answers: A('ana133', 'Front part of torso', [
      'Back part',
      'Side part',
      'Lower part',
    ]),
    level: 1,
  },
  {
    id: 'ana134',
    text: 'What is the abdomen?',
    answers: A('ana134', 'Area between chest and pelvis', [
      'Area in head',
      'Area in arm',
      'Area in leg',
    ]),
    level: 1,
  },
  {
    id: 'ana135',
    text: 'What is the back?',
    answers: A('ana135', 'Rear part of torso', [
      'Front part',
      'Side part',
      'Lower part',
    ]),
    level: 1,
  },
  {
    id: 'ana136',
    text: 'What is the forehead?',
    answers: A('ana136', 'Upper part of face', [
      'Lower part of face',
      'Side of face',
      'Back of head',
    ]),
    level: 1,
  },
  {
    id: 'ana137',
    text: 'What is the chin?',
    answers: A('ana137', 'Lower part of face', [
      'Upper part of face',
      'Side of face',
      'Back of head',
    ]),
    level: 1,
  },
  {
    id: 'ana138',
    text: 'What is the cheek?',
    answers: A('ana138', 'Side of face below eye', [
      'Top of face',
      'Bottom of face',
      'Back of head',
    ]),
    level: 1,
  },
  {
    id: 'ana139',
    text: 'What is the jaw?',
    answers: A('ana139', 'Bone forming lower face', [
      'Bone in arm',
      'Bone in leg',
      'Bone in back',
    ]),
    level: 1,
  },
  {
    id: 'ana140',
    text: 'What is the scalp?',
    answers: A('ana140', 'Skin covering the skull', [
      'Skin on face',
      'Skin on neck',
      'Skin on back',
    ]),
    level: 1,
  },
  {
    id: 'ana141',
    text: 'What is the palm?',
    answers: A('ana141', 'Inner surface of hand', [
      'Back of hand',
      'Side of hand',
      'Finger',
    ]),
    level: 1,
  },
  {
    id: 'ana142',
    text: 'What is the sole?',
    answers: A('ana142', 'Bottom of foot', [
      'Top of foot',
      'Side of foot',
      'Heel',
    ]),
    level: 1,
  },
  {
    id: 'ana143',
    text: 'What is the heel?',
    answers: A('ana143', 'Back part of foot', [
      'Front of foot',
      'Side of foot',
      'Top of foot',
    ]),
    level: 1,
  },
  {
    id: 'ana144',
    text: 'What is the thumb?',
    answers: A('ana144', 'Shortest finger on hand', [
      'Longest finger',
      'Middle finger',
      'Ring finger',
    ]),
    level: 1,
  },
  {
    id: 'ana145',
    text: 'What is the big toe?',
    answers: A('ana145', 'Largest toe on foot', [
      'Smallest toe',
      'Middle toe',
      'Second toe',
    ]),
    level: 1,
  },
  {
    id: 'ana146',
    text: 'What is the eyelid?',
    answers: A('ana146', 'Skin covering the eye', [
      'Part of ear',
      'Part of nose',
      'Part of mouth',
    ]),
    level: 1,
  },
  {
    id: 'ana147',
    text: 'What is the eyebrow?',
    answers: A('ana147', 'Hair above the eye', [
      'Hair below eye',
      'Hair on cheek',
      'Hair on chin',
    ]),
    level: 1,
  },
  {
    id: 'ana148',
    text: 'What is the eyelash?',
    answers: A('ana148', 'Hair on edge of eyelid', [
      'Hair on eyebrow',
      'Hair on cheek',
      'Hair on chin',
    ]),
    level: 1,
  },
  {
    id: 'ana149',
    text: 'What is the nostril?',
    answers: A('ana149', 'Opening of the nose', [
      'Opening of ear',
      'Opening of mouth',
      'Opening of eye',
    ]),
    level: 1,
  },
  {
    id: 'ana150',
    text: 'What is the lip?',
    answers: A('ana150', 'Edge of the mouth', [
      'Edge of nose',
      'Edge of ear',
      'Edge of eye',
    ]),
    level: 1,
  },
  {
    id: 'ana151',
    text: 'What is the tongue?',
    answers: A('ana151', 'Muscle in the mouth', [
      'Bone in mouth',
      'Skin in mouth',
      'Tooth',
    ]),
    level: 1,
  },
  {
    id: 'ana152',
    text: 'What is a tooth?',
    answers: A('ana152', 'Hard structure for chewing', [
      'Soft structure',
      'Muscle',
      'Bone',
    ]),
    level: 1,
  },
  {
    id: 'ana153',
    text: 'What is the gum?',
    answers: A('ana153', 'Tissue around teeth', [
      'Tissue in nose',
      'Tissue in ear',
      'Tissue in eye',
    ]),
    level: 1,
  },
  {
    id: 'ana154',
    text: 'What is the throat?',
    answers: A('ana154', 'Passage from mouth to stomach', [
      'Passage in arm',
      'Passage in leg',
      'Passage in back',
    ]),
    level: 1,
  },
  {
    id: 'ana155',
    text: 'What is the armpit?',
    answers: A('ana155', 'Area under the arm', [
      'Area under leg',
      'Area under neck',
      'Area under back',
    ]),
    level: 1,
  },
  {
    id: 'ana156',
    text: 'What is the navel?',
    answers: A('ana156', 'Belly button', [
      'Part of chest',
      'Part of back',
      'Part of leg',
    ]),
    level: 1,
  },
  {
    id: 'ana157',
    text: 'What is the waist?',
    answers: A('ana157', 'Narrow part of torso', [
      'Wide part of torso',
      'Part of arm',
      'Part of leg',
    ]),
    level: 1,
  },
  {
    id: 'ana158',
    text: 'What is the thigh?',
    answers: A('ana158', 'Upper part of leg', [
      'Lower part of leg',
      'Part of arm',
      'Part of back',
    ]),
    level: 1,
  },
  {
    id: 'ana159',
    text: 'What is the calf?',
    answers: A('ana159', 'Back of lower leg', [
      'Front of lower leg',
      'Part of arm',
      'Part of back',
    ]),
    level: 1,
  },
  {
    id: 'ana160',
    text: 'What is the shin?',
    answers: A('ana160', 'Front of lower leg', [
      'Back of lower leg',
      'Part of arm',
      'Part of back',
    ]),
    level: 1,
  },
  {
    id: 'ana161',
    text: 'What is the forearm?',
    answers: A('ana161', 'Lower part of arm', [
      'Upper part of arm',
      'Part of leg',
      'Part of back',
    ]),
    level: 1,
  },
  {
    id: 'ana162',
    text: 'What is the upper arm?',
    answers: A('ana162', 'Part between shoulder and elbow', [
      'Part between elbow and wrist',
      'Part of leg',
      'Part of back',
    ]),
    level: 1,
  },
  {
    id: 'ana163',
    text: 'What is a knuckle?',
    answers: A('ana163', 'Joint of a finger', [
      'Joint of toe',
      'Joint of elbow',
      'Joint of knee',
    ]),
    level: 1,
  },
  {
    id: 'ana164',
    text: 'What is a fingernail?',
    answers: A('ana164', 'Hard covering on finger tip', [
      'Soft covering',
      'Skin on finger',
      'Bone in finger',
    ]),
    level: 1,
  },
  {
    id: 'ana165',
    text: 'What is a toenail?',
    answers: A('ana165', 'Hard covering on toe tip', [
      'Soft covering',
      'Skin on toe',
      'Bone in toe',
    ]),
    level: 1,
  },
  {
    id: 'ana166',
    text: 'What is the spine?',
    answers: A('ana166', 'Backbone', ['Arm bone', 'Leg bone', 'Skull']),
    level: 1,
  },
  {
    id: 'ana167',
    text: 'What is the skull?',
    answers: A('ana167', 'Bone protecting the brain', [
      'Bone in arm',
      'Bone in leg',
      'Bone in chest',
    ]),
    level: 1,
  },
  {
    id: 'ana168',
    text: 'What is a rib?',
    answers: A('ana168', 'Bone protecting chest organs', [
      'Bone in arm',
      'Bone in leg',
      'Bone in head',
    ]),
    level: 1,
  },
  {
    id: 'ana169',
    text: 'What is the pelvis?',
    answers: A('ana169', 'Hip bone structure', [
      'Shoulder bone',
      'Arm bone',
      'Leg bone',
    ]),
    level: 1,
  },
  {
    id: 'ana170',
    text: 'What is the collarbone?',
    answers: A('ana170', 'Bone connecting shoulder to chest', [
      'Bone in arm',
      'Bone in leg',
      'Bone in back',
    ]),
    level: 1,
  },
  {
    id: 'ana171',
    text: 'What is the kneecap?',
    answers: A('ana171', 'Bone protecting the knee', [
      'Bone in elbow',
      'Bone in shoulder',
      'Bone in hip',
    ]),
    level: 1,
  },
  {
    id: 'ana172',
    text: 'What is cartilage?',
    answers: A('ana172', 'Flexible tissue at joints', [
      'Hard bone',
      'Muscle tissue',
      'Skin tissue',
    ]),
    level: 1,
  },
  {
    id: 'ana173',
    text: 'What is a tendon?',
    answers: A('ana173', 'Tissue connecting muscle to bone', [
      'Tissue connecting bones',
      'Muscle tissue',
      'Skin tissue',
    ]),
    level: 1,
  },
  {
    id: 'ana174',
    text: 'What is a ligament?',
    answers: A('ana174', 'Tissue connecting bone to bone', [
      'Tissue connecting muscle to bone',
      'Muscle tissue',
      'Skin tissue',
    ]),
    level: 1,
  },
  {
    id: 'ana175',
    text: 'What is a muscle?',
    answers: A('ana175', 'Tissue that contracts for movement', [
      'Bone tissue',
      'Skin tissue',
      'Fat tissue',
    ]),
    level: 1,
  },
  {
    id: 'ana176',
    text: 'What is the bicep?',
    answers: A('ana176', 'Muscle in front of upper arm', [
      'Muscle in back of arm',
      'Muscle in leg',
      'Muscle in chest',
    ]),
    level: 1,
  },
  {
    id: 'ana177',
    text: 'What is the tricep?',
    answers: A('ana177', 'Muscle in back of upper arm', [
      'Muscle in front of arm',
      'Muscle in leg',
      'Muscle in chest',
    ]),
    level: 1,
  },
  {
    id: 'ana178',
    text: 'What is the quadricep?',
    answers: A('ana178', 'Muscle in front of thigh', [
      'Muscle in back of thigh',
      'Muscle in arm',
      'Muscle in chest',
    ]),
    level: 1,
  },
  {
    id: 'ana179',
    text: 'What is the hamstring?',
    answers: A('ana179', 'Muscle in back of thigh', [
      'Muscle in front of thigh',
      'Muscle in arm',
      'Muscle in chest',
    ]),
    level: 1,
  },
  {
    id: 'ana180',
    text: 'What is the heart?',
    answers: A('ana180', 'Organ that pumps blood', [
      'Organ that breathes',
      'Organ that digests',
      'Organ that thinks',
    ]),
    level: 1,
  },
  {
    id: 'ana181',
    text: 'What are the lungs?',
    answers: A('ana181', 'Organs for breathing', [
      'Organs for pumping blood',
      'Organs for digestion',
      'Organs for thinking',
    ]),
    level: 1,
  },
  {
    id: 'ana182',
    text: 'What is the brain?',
    answers: A('ana182', 'Organ for thinking', [
      'Organ for breathing',
      'Organ for pumping blood',
      'Organ for digestion',
    ]),
    level: 1,
  },
  {
    id: 'ana183',
    text: 'What is the stomach?',
    answers: A('ana183', 'Organ for digestion', [
      'Organ for breathing',
      'Organ for pumping blood',
      'Organ for thinking',
    ]),
    level: 1,
  },
  {
    id: 'ana184',
    text: 'What is the liver?',
    answers: A('ana184', 'Organ that filters blood', [
      'Organ that pumps blood',
      'Organ that breathes',
      'Organ that thinks',
    ]),
    level: 1,
  },
  {
    id: 'ana185',
    text: 'What are the kidneys?',
    answers: A('ana185', 'Organs that filter waste', [
      'Organs that pump blood',
      'Organs that breathe',
      'Organs that digest',
    ]),
    level: 1,
  },
  {
    id: 'ana186',
    text: 'What is the bladder?',
    answers: A('ana186', 'Organ that stores urine', [
      'Organ that stores blood',
      'Organ that stores air',
      'Organ that stores food',
    ]),
    level: 1,
  },
  {
    id: 'ana187',
    text: 'What is the intestine?',
    answers: A('ana187', 'Organ for absorbing nutrients', [
      'Organ for breathing',
      'Organ for pumping blood',
      'Organ for thinking',
    ]),
    level: 1,
  },
  {
    id: 'ana188',
    text: 'What is the esophagus?',
    answers: A('ana188', 'Tube from mouth to stomach', [
      'Tube from nose to lungs',
      'Tube in arm',
      'Tube in leg',
    ]),
    level: 1,
  },
  {
    id: 'ana189',
    text: 'What is the trachea?',
    answers: A('ana189', 'Windpipe to lungs', [
      'Food pipe to stomach',
      'Tube in arm',
      'Tube in leg',
    ]),
    level: 1,
  },
  {
    id: 'ana190',
    text: 'What is an artery?',
    answers: A('ana190', 'Blood vessel from heart', [
      'Blood vessel to heart',
      'Nerve',
      'Muscle',
    ]),
    level: 1,
  },
  {
    id: 'ana191',
    text: 'What is a vein?',
    answers: A('ana191', 'Blood vessel to heart', [
      'Blood vessel from heart',
      'Nerve',
      'Muscle',
    ]),
    level: 1,
  },
  {
    id: 'ana192',
    text: 'What is a capillary?',
    answers: A('ana192', 'Tiny blood vessel', [
      'Large blood vessel',
      'Nerve',
      'Muscle',
    ]),
    level: 1,
  },
  {
    id: 'ana193',
    text: 'What is a nerve?',
    answers: A('ana193', 'Fiber carrying signals', [
      'Blood vessel',
      'Muscle',
      'Bone',
    ]),
    level: 1,
  },
  {
    id: 'ana194',
    text: 'What is the spinal cord?',
    answers: A('ana194', 'Nerve bundle in spine', [
      'Nerve in arm',
      'Nerve in leg',
      'Nerve in head',
    ]),
    level: 1,
  },
  {
    id: 'ana195',
    text: 'What is blood?',
    answers: A('ana195', 'Fluid carrying oxygen and nutrients', [
      'Fluid for digestion',
      'Fluid for breathing',
      'Fluid for thinking',
    ]),
    level: 1,
  },
  {
    id: 'ana196',
    text: 'What is plasma?',
    answers: A('ana196', 'Liquid part of blood', [
      'Solid part of blood',
      'Gas in blood',
      'Cell in blood',
    ]),
    level: 1,
  },
  {
    id: 'ana197',
    text: 'What is a red blood cell?',
    answers: A('ana197', 'Cell carrying oxygen', [
      'Cell fighting infection',
      'Cell for clotting',
      'Cell for digestion',
    ]),
    level: 1,
  },
  {
    id: 'ana198',
    text: 'What is a white blood cell?',
    answers: A('ana198', 'Cell fighting infection', [
      'Cell carrying oxygen',
      'Cell for clotting',
      'Cell for digestion',
    ]),
    level: 1,
  },
  {
    id: 'ana199',
    text: 'What is a platelet?',
    answers: A('ana199', 'Cell for blood clotting', [
      'Cell carrying oxygen',
      'Cell fighting infection',
      'Cell for digestion',
    ]),
    level: 1,
  },
  {
    id: 'ana200',
    text: 'What is the skin?',
    answers: A('ana200', 'Outer covering of body', [
      'Inner organ',
      'Bone',
      'Muscle',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'ana201',
    text: 'What is the dermis?',
    answers: A('ana201', 'Inner layer of skin', [
      'Outer layer of skin',
      'Muscle layer',
      'Fat layer',
    ]),
    level: 2,
  },
  {
    id: 'ana202',
    text: 'What is the epidermis?',
    answers: A('ana202', 'Outer layer of skin', [
      'Inner layer of skin',
      'Muscle layer',
      'Fat layer',
    ]),
    level: 2,
  },
  {
    id: 'ana203',
    text: 'What is melanin?',
    answers: A('ana203', 'Pigment giving skin color', [
      'Protein in muscle',
      'Fat in skin',
      'Bone material',
    ]),
    level: 2,
  },
  {
    id: 'ana204',
    text: 'What is keratin?',
    answers: A('ana204', 'Protein in hair and nails', [
      'Protein in blood',
      'Protein in muscle',
      'Protein in bone',
    ]),
    level: 2,
  },
  {
    id: 'ana205',
    text: 'What is a sweat gland?',
    answers: A('ana205', 'Gland producing sweat', [
      'Gland producing oil',
      'Gland producing saliva',
      'Gland producing tears',
    ]),
    level: 2,
  },
  {
    id: 'ana206',
    text: 'What is a sebaceous gland?',
    answers: A('ana206', 'Gland producing oil', [
      'Gland producing sweat',
      'Gland producing saliva',
      'Gland producing tears',
    ]),
    level: 2,
  },
  {
    id: 'ana207',
    text: 'What is a hair follicle?',
    answers: A('ana207', 'Structure producing hair', [
      'Structure producing nails',
      'Structure producing sweat',
      'Structure producing oil',
    ]),
    level: 2,
  },
  {
    id: 'ana208',
    text: 'What is the femur?',
    answers: A('ana208', 'Thigh bone', ['Arm bone', 'Rib bone', 'Skull bone']),
    level: 2,
  },
  {
    id: 'ana209',
    text: 'What is the tibia?',
    answers: A('ana209', 'Shin bone', ['Thigh bone', 'Arm bone', 'Rib bone']),
    level: 2,
  },
  {
    id: 'ana210',
    text: 'What is the fibula?',
    answers: A('ana210', 'Smaller lower leg bone', [
      'Larger lower leg bone',
      'Arm bone',
      'Rib bone',
    ]),
    level: 2,
  },
  {
    id: 'ana211',
    text: 'What is the humerus?',
    answers: A('ana211', 'Upper arm bone', [
      'Lower arm bone',
      'Leg bone',
      'Rib bone',
    ]),
    level: 2,
  },
  {
    id: 'ana212',
    text: 'What is the radius?',
    answers: A('ana212', 'Forearm bone on thumb side', [
      'Forearm bone on pinky side',
      'Upper arm bone',
      'Leg bone',
    ]),
    level: 2,
  },
  {
    id: 'ana213',
    text: 'What is the ulna?',
    answers: A('ana213', 'Forearm bone on pinky side', [
      'Forearm bone on thumb side',
      'Upper arm bone',
      'Leg bone',
    ]),
    level: 2,
  },
  {
    id: 'ana214',
    text: 'What is the scapula?',
    answers: A('ana214', 'Shoulder blade', [
      'Hip bone',
      'Rib bone',
      'Skull bone',
    ]),
    level: 2,
  },
  {
    id: 'ana215',
    text: 'What is the clavicle?',
    answers: A('ana215', 'Collarbone', [
      'Shoulder blade',
      'Hip bone',
      'Rib bone',
    ]),
    level: 2,
  },
  {
    id: 'ana216',
    text: 'What is the sternum?',
    answers: A('ana216', 'Breastbone', ['Backbone', 'Hip bone', 'Skull bone']),
    level: 2,
  },
  {
    id: 'ana217',
    text: 'What is a vertebra?',
    answers: A('ana217', 'Single bone of spine', [
      'Rib bone',
      'Arm bone',
      'Leg bone',
    ]),
    level: 2,
  },
  {
    id: 'ana218',
    text: 'What is the patella?',
    answers: A('ana218', 'Kneecap', [
      'Elbow bone',
      'Shoulder bone',
      'Hip bone',
    ]),
    level: 2,
  },
  {
    id: 'ana219',
    text: 'What is the mandible?',
    answers: A('ana219', 'Lower jaw bone', [
      'Upper jaw bone',
      'Cheek bone',
      'Forehead bone',
    ]),
    level: 2,
  },
  {
    id: 'ana220',
    text: 'What is the maxilla?',
    answers: A('ana220', 'Upper jaw bone', [
      'Lower jaw bone',
      'Cheek bone',
      'Forehead bone',
    ]),
    level: 2,
  },
  {
    id: 'ana221',
    text: 'What is the cranium?',
    answers: A('ana221', 'Skull bones protecting brain', [
      'Face bones',
      'Jaw bones',
      'Neck bones',
    ]),
    level: 2,
  },
  {
    id: 'ana222',
    text: 'What is bone marrow?',
    answers: A('ana222', 'Soft tissue inside bones', [
      'Hard outer bone',
      'Cartilage',
      'Tendon',
    ]),
    level: 2,
  },
  {
    id: 'ana223',
    text: 'What is the periosteum?',
    answers: A('ana223', 'Membrane covering bone', [
      'Inside of bone',
      'Cartilage',
      'Tendon',
    ]),
    level: 2,
  },
  {
    id: 'ana224',
    text: 'What is compact bone?',
    answers: A('ana224', 'Dense outer bone layer', [
      'Spongy inner bone',
      'Bone marrow',
      'Cartilage',
    ]),
    level: 2,
  },
  {
    id: 'ana225',
    text: 'What is spongy bone?',
    answers: A('ana225', 'Porous inner bone layer', [
      'Dense outer bone',
      'Bone marrow',
      'Cartilage',
    ]),
    level: 2,
  },
  {
    id: 'ana226',
    text: 'What is the deltoid?',
    answers: A('ana226', 'Shoulder muscle', [
      'Arm muscle',
      'Leg muscle',
      'Chest muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana227',
    text: 'What is the pectoralis?',
    answers: A('ana227', 'Chest muscle', [
      'Back muscle',
      'Arm muscle',
      'Leg muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana228',
    text: 'What is the latissimus dorsi?',
    answers: A('ana228', 'Large back muscle', [
      'Chest muscle',
      'Arm muscle',
      'Leg muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana229',
    text: 'What is the trapezius?',
    answers: A('ana229', 'Upper back and neck muscle', [
      'Lower back muscle',
      'Arm muscle',
      'Leg muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana230',
    text: 'What is the gluteus maximus?',
    answers: A('ana230', 'Buttock muscle', [
      'Thigh muscle',
      'Calf muscle',
      'Back muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana231',
    text: 'What is the gastrocnemius?',
    answers: A('ana231', 'Calf muscle', [
      'Thigh muscle',
      'Arm muscle',
      'Back muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana232',
    text: 'What is the rectus abdominis?',
    answers: A('ana232', 'Abdominal muscle', [
      'Back muscle',
      'Chest muscle',
      'Leg muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana233',
    text: 'What is the diaphragm?',
    answers: A('ana233', 'Breathing muscle below lungs', [
      'Heart muscle',
      'Stomach muscle',
      'Back muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana234',
    text: 'What is cardiac muscle?',
    answers: A('ana234', 'Heart muscle', [
      'Skeletal muscle',
      'Smooth muscle',
      'Voluntary muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana235',
    text: 'What is smooth muscle?',
    answers: A('ana235', 'Involuntary muscle in organs', [
      'Heart muscle',
      'Skeletal muscle',
      'Voluntary muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana236',
    text: 'What is skeletal muscle?',
    answers: A('ana236', 'Voluntary muscle attached to bones', [
      'Heart muscle',
      'Smooth muscle',
      'Involuntary muscle',
    ]),
    level: 2,
  },
  {
    id: 'ana237',
    text: 'What is the aorta?',
    answers: A('ana237', 'Largest artery from heart', [
      'Largest vein to heart',
      'Small blood vessel',
      'Nerve',
    ]),
    level: 2,
  },
  {
    id: 'ana238',
    text: 'What is the vena cava?',
    answers: A('ana238', 'Largest vein to heart', [
      'Largest artery from heart',
      'Small blood vessel',
      'Nerve',
    ]),
    level: 2,
  },
  {
    id: 'ana239',
    text: 'What is the pulmonary artery?',
    answers: A('ana239', 'Artery to lungs', [
      'Artery to brain',
      'Artery to legs',
      'Artery to arms',
    ]),
    level: 2,
  },
  {
    id: 'ana240',
    text: 'What is the pulmonary vein?',
    answers: A('ana240', 'Vein from lungs', [
      'Vein from brain',
      'Vein from legs',
      'Vein from arms',
    ]),
    level: 2,
  },
  {
    id: 'ana241',
    text: 'What is the atrium?',
    answers: A('ana241', 'Upper chamber of heart', [
      'Lower chamber of heart',
      'Valve of heart',
      'Wall of heart',
    ]),
    level: 2,
  },
  {
    id: 'ana242',
    text: 'What is the ventricle?',
    answers: A('ana242', 'Lower chamber of heart', [
      'Upper chamber of heart',
      'Valve of heart',
      'Wall of heart',
    ]),
    level: 2,
  },
  {
    id: 'ana243',
    text: 'What is a heart valve?',
    answers: A('ana243', 'Structure preventing backflow', [
      'Chamber of heart',
      'Wall of heart',
      'Artery of heart',
    ]),
    level: 2,
  },
  {
    id: 'ana244',
    text: 'What is the septum?',
    answers: A('ana244', 'Wall dividing heart chambers', [
      'Valve of heart',
      'Chamber of heart',
      'Artery of heart',
    ]),
    level: 2,
  },
  {
    id: 'ana245',
    text: 'What is the pericardium?',
    answers: A('ana245', 'Sac surrounding heart', [
      'Inside of heart',
      'Valve of heart',
      'Chamber of heart',
    ]),
    level: 2,
  },
  {
    id: 'ana246',
    text: 'What is the bronchus?',
    answers: A('ana246', 'Airway branch to lung', [
      'Airway to stomach',
      'Blood vessel',
      'Nerve',
    ]),
    level: 2,
  },
  {
    id: 'ana247',
    text: 'What is a bronchiole?',
    answers: A('ana247', 'Small airway in lung', [
      'Large airway',
      'Blood vessel',
      'Nerve',
    ]),
    level: 2,
  },
  {
    id: 'ana248',
    text: 'What is an alveolus?',
    answers: A('ana248', 'Air sac in lung', [
      'Airway tube',
      'Blood vessel',
      'Nerve',
    ]),
    level: 2,
  },
  {
    id: 'ana249',
    text: 'What is the larynx?',
    answers: A('ana249', 'Voice box', ['Food pipe', 'Windpipe', 'Nose']),
    level: 2,
  },
  {
    id: 'ana250',
    text: 'What is the pharynx?',
    answers: A('ana250', 'Throat', ['Voice box', 'Windpipe', 'Food pipe']),
    level: 2,
  },
  // ===== LEVEL 3: More Intermediate Questions =====
  {
    id: 'ana251',
    text: 'What is the epiglottis?',
    answers: A('ana251', 'Flap preventing food entering airway', [
      'Flap in stomach',
      'Flap in heart',
      'Flap in brain',
    ]),
    level: 3,
  },
  {
    id: 'ana252',
    text: 'What is the pleura?',
    answers: A('ana252', 'Membrane surrounding lungs', [
      'Membrane around heart',
      'Membrane around brain',
      'Membrane around stomach',
    ]),
    level: 3,
  },
  {
    id: 'ana253',
    text: 'What is the mediastinum?',
    answers: A('ana253', 'Space between lungs', [
      'Space in abdomen',
      'Space in skull',
      'Space in pelvis',
    ]),
    level: 3,
  },
  {
    id: 'ana254',
    text: 'What is the duodenum?',
    answers: A('ana254', 'First part of small intestine', [
      'Last part of small intestine',
      'Part of large intestine',
      'Part of stomach',
    ]),
    level: 3,
  },
  {
    id: 'ana255',
    text: 'What is the jejunum?',
    answers: A('ana255', 'Middle part of small intestine', [
      'First part of small intestine',
      'Last part of small intestine',
      'Part of large intestine',
    ]),
    level: 3,
  },
  {
    id: 'ana256',
    text: 'What is the ileum?',
    answers: A('ana256', 'Last part of small intestine', [
      'First part of small intestine',
      'Middle part of small intestine',
      'Part of large intestine',
    ]),
    level: 3,
  },
  {
    id: 'ana257',
    text: 'What is the cecum?',
    answers: A('ana257', 'Beginning of large intestine', [
      'End of large intestine',
      'Part of small intestine',
      'Part of stomach',
    ]),
    level: 3,
  },
  {
    id: 'ana258',
    text: 'What is the appendix?',
    answers: A('ana258', 'Small pouch attached to cecum', [
      'Part of stomach',
      'Part of liver',
      'Part of kidney',
    ]),
    level: 3,
  },
  {
    id: 'ana259',
    text: 'What is the colon?',
    answers: A('ana259', 'Main part of large intestine', [
      'Part of small intestine',
      'Part of stomach',
      'Part of liver',
    ]),
    level: 3,
  },
  {
    id: 'ana260',
    text: 'What is the rectum?',
    answers: A('ana260', 'End of large intestine', [
      'Beginning of large intestine',
      'Part of small intestine',
      'Part of stomach',
    ]),
    level: 3,
  },
  {
    id: 'ana261',
    text: 'What is the gallbladder?',
    answers: A('ana261', 'Organ storing bile', [
      'Organ producing bile',
      'Organ storing urine',
      'Organ storing blood',
    ]),
    level: 3,
  },
  {
    id: 'ana262',
    text: 'What is the pancreas?',
    answers: A('ana262', 'Organ producing insulin and enzymes', [
      'Organ storing bile',
      'Organ filtering blood',
      'Organ pumping blood',
    ]),
    level: 3,
  },
  {
    id: 'ana263',
    text: 'What is the spleen?',
    answers: A('ana263', 'Organ filtering blood and storing platelets', [
      'Organ producing bile',
      'Organ storing urine',
      'Organ digesting food',
    ]),
    level: 3,
  },
  {
    id: 'ana264',
    text: 'What is the ureter?',
    answers: A('ana264', 'Tube from kidney to bladder', [
      'Tube from bladder out',
      'Tube in digestive system',
      'Tube in respiratory system',
    ]),
    level: 3,
  },
  {
    id: 'ana265',
    text: 'What is the urethra?',
    answers: A('ana265', 'Tube from bladder out of body', [
      'Tube from kidney to bladder',
      'Tube in digestive system',
      'Tube in respiratory system',
    ]),
    level: 3,
  },
  {
    id: 'ana266',
    text: 'What is the nephron?',
    answers: A('ana266', 'Functional unit of kidney', [
      'Functional unit of liver',
      'Functional unit of lung',
      'Functional unit of heart',
    ]),
    level: 3,
  },
  {
    id: 'ana267',
    text: 'What is the glomerulus?',
    answers: A('ana267', 'Filtering structure in nephron', [
      'Structure in liver',
      'Structure in lung',
      'Structure in heart',
    ]),
    level: 3,
  },
  {
    id: 'ana268',
    text: 'What is the renal cortex?',
    answers: A('ana268', 'Outer region of kidney', [
      'Inner region of kidney',
      'Part of liver',
      'Part of lung',
    ]),
    level: 3,
  },
  {
    id: 'ana269',
    text: 'What is the renal medulla?',
    answers: A('ana269', 'Inner region of kidney', [
      'Outer region of kidney',
      'Part of liver',
      'Part of lung',
    ]),
    level: 3,
  },
  {
    id: 'ana270',
    text: 'What is the adrenal gland?',
    answers: A('ana270', 'Gland on top of kidney', [
      'Gland in neck',
      'Gland in brain',
      'Gland in chest',
    ]),
    level: 3,
  },
  {
    id: 'ana271',
    text: 'What is the thyroid gland?',
    answers: A('ana271', 'Gland in neck producing hormones', [
      'Gland on kidney',
      'Gland in brain',
      'Gland in chest',
    ]),
    level: 3,
  },
  {
    id: 'ana272',
    text: 'What is the pituitary gland?',
    answers: A('ana272', 'Master gland in brain', [
      'Gland in neck',
      'Gland on kidney',
      'Gland in chest',
    ]),
    level: 3,
  },
  {
    id: 'ana273',
    text: 'What is the hypothalamus?',
    answers: A('ana273', 'Brain region controlling hormones', [
      'Brain region for vision',
      'Brain region for hearing',
      'Brain region for movement',
    ]),
    level: 3,
  },
  {
    id: 'ana274',
    text: 'What is the pineal gland?',
    answers: A('ana274', 'Gland producing melatonin', [
      'Gland producing insulin',
      'Gland producing adrenaline',
      'Gland producing thyroid hormone',
    ]),
    level: 3,
  },
  {
    id: 'ana275',
    text: 'What is the thymus?',
    answers: A('ana275', 'Gland for immune cell development', [
      'Gland for hormone production',
      'Gland for digestion',
      'Gland for breathing',
    ]),
    level: 3,
  },
  // ===== LEVEL 4: More Normal Questions =====
  {
    id: 'ana276',
    text: 'What is the cerebrum?',
    answers: A('ana276', 'Largest part of brain', [
      'Smallest part of brain',
      'Back of brain',
      'Bottom of brain',
    ]),
    level: 4,
  },
  {
    id: 'ana277',
    text: 'What is the cerebellum?',
    answers: A('ana277', 'Brain part for coordination', [
      'Brain part for thinking',
      'Brain part for vision',
      'Brain part for hearing',
    ]),
    level: 4,
  },
  {
    id: 'ana278',
    text: 'What is the brainstem?',
    answers: A('ana278', 'Brain part connecting to spinal cord', [
      'Top of brain',
      'Side of brain',
      'Front of brain',
    ]),
    level: 4,
  },
  {
    id: 'ana279',
    text: 'What is the frontal lobe?',
    answers: A('ana279', 'Brain region for reasoning', [
      'Brain region for vision',
      'Brain region for hearing',
      'Brain region for touch',
    ]),
    level: 4,
  },
  {
    id: 'ana280',
    text: 'What is the parietal lobe?',
    answers: A('ana280', 'Brain region for sensory processing', [
      'Brain region for vision',
      'Brain region for hearing',
      'Brain region for reasoning',
    ]),
    level: 4,
  },
  {
    id: 'ana281',
    text: 'What is the temporal lobe?',
    answers: A('ana281', 'Brain region for hearing and memory', [
      'Brain region for vision',
      'Brain region for touch',
      'Brain region for reasoning',
    ]),
    level: 4,
  },
  {
    id: 'ana282',
    text: 'What is the occipital lobe?',
    answers: A('ana282', 'Brain region for vision', [
      'Brain region for hearing',
      'Brain region for touch',
      'Brain region for reasoning',
    ]),
    level: 4,
  },
  {
    id: 'ana283',
    text: 'What is the corpus callosum?',
    answers: A('ana283', 'Structure connecting brain hemispheres', [
      'Structure in cerebellum',
      'Structure in brainstem',
      'Structure in spinal cord',
    ]),
    level: 4,
  },
  {
    id: 'ana284',
    text: 'What is the thalamus?',
    answers: A('ana284', 'Brain relay station for sensory info', [
      'Brain region for memory',
      'Brain region for emotion',
      'Brain region for movement',
    ]),
    level: 4,
  },
  {
    id: 'ana285',
    text: 'What is the amygdala?',
    answers: A('ana285', 'Brain structure for emotions', [
      'Brain structure for memory',
      'Brain structure for vision',
      'Brain structure for hearing',
    ]),
    level: 4,
  },
  {
    id: 'ana286',
    text: 'What is the hippocampus?',
    answers: A('ana286', 'Brain structure for memory', [
      'Brain structure for emotion',
      'Brain structure for vision',
      'Brain structure for hearing',
    ]),
    level: 4,
  },
  {
    id: 'ana287',
    text: 'What is the meninges?',
    answers: A('ana287', 'Membranes covering brain and spinal cord', [
      'Membranes around heart',
      'Membranes around lungs',
      'Membranes around stomach',
    ]),
    level: 4,
  },
  {
    id: 'ana288',
    text: 'What is cerebrospinal fluid?',
    answers: A('ana288', 'Fluid cushioning brain and spinal cord', [
      'Fluid in blood',
      'Fluid in stomach',
      'Fluid in lungs',
    ]),
    level: 4,
  },
  {
    id: 'ana289',
    text: 'What is a synapse?',
    answers: A('ana289', 'Junction between neurons', [
      'Junction between muscles',
      'Junction between bones',
      'Junction between blood vessels',
    ]),
    level: 4,
  },
  {
    id: 'ana290',
    text: 'What is a neurotransmitter?',
    answers: A('ana290', 'Chemical messenger between neurons', [
      'Chemical in blood',
      'Chemical in stomach',
      'Chemical in lungs',
    ]),
    level: 4,
  },
  {
    id: 'ana291',
    text: 'What is the axon?',
    answers: A('ana291', 'Long projection of neuron', [
      'Cell body of neuron',
      'Short projection of neuron',
      'Covering of neuron',
    ]),
    level: 4,
  },
  {
    id: 'ana292',
    text: 'What is a dendrite?',
    answers: A('ana292', 'Branching projection receiving signals', [
      'Long projection sending signals',
      'Cell body',
      'Covering of neuron',
    ]),
    level: 4,
  },
  {
    id: 'ana293',
    text: 'What is myelin?',
    answers: A('ana293', 'Insulating covering of axons', [
      'Cell body of neuron',
      'Dendrite of neuron',
      'Synapse',
    ]),
    level: 4,
  },
  {
    id: 'ana294',
    text: 'What is the autonomic nervous system?',
    answers: A('ana294', 'System controlling involuntary functions', [
      'System controlling voluntary movement',
      'System for thinking',
      'System for memory',
    ]),
    level: 4,
  },
  {
    id: 'ana295',
    text: 'What is the sympathetic nervous system?',
    answers: A('ana295', 'Fight or flight response system', [
      'Rest and digest system',
      'Voluntary movement system',
      'Memory system',
    ]),
    level: 4,
  },
  {
    id: 'ana296',
    text: 'What is the parasympathetic nervous system?',
    answers: A('ana296', 'Rest and digest response system', [
      'Fight or flight system',
      'Voluntary movement system',
      'Memory system',
    ]),
    level: 4,
  },
  {
    id: 'ana297',
    text: 'What is the somatic nervous system?',
    answers: A('ana297', 'System controlling voluntary movement', [
      'System controlling involuntary functions',
      'System for thinking',
      'System for memory',
    ]),
    level: 4,
  },
  {
    id: 'ana298',
    text: 'What is the brachial plexus?',
    answers: A('ana298', 'Nerve network for arm', [
      'Nerve network for leg',
      'Nerve network for chest',
      'Nerve network for abdomen',
    ]),
    level: 4,
  },
  {
    id: 'ana299',
    text: 'What is the sciatic nerve?',
    answers: A('ana299', 'Largest nerve running down leg', [
      'Nerve in arm',
      'Nerve in chest',
      'Nerve in neck',
    ]),
    level: 4,
  },
  {
    id: 'ana300',
    text: 'What is the vagus nerve?',
    answers: A('ana300', 'Nerve controlling many organ functions', [
      'Nerve for arm movement',
      'Nerve for leg movement',
      'Nerve for vision',
    ]),
    level: 4,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'ana301',
    text: 'What is the sinoatrial node?',
    answers: A('ana301', 'Natural pacemaker of heart', [
      'Valve of heart',
      'Chamber of heart',
      'Wall of heart',
    ]),
    level: 5,
  },
  {
    id: 'ana302',
    text: 'What is the atrioventricular node?',
    answers: A('ana302', 'Electrical relay in heart', [
      'Pacemaker of heart',
      'Valve of heart',
      'Chamber of heart',
    ]),
    level: 5,
  },
  {
    id: 'ana303',
    text: 'What is the bundle of His?',
    answers: A('ana303', 'Electrical pathway in heart', [
      'Valve of heart',
      'Chamber of heart',
      'Artery of heart',
    ]),
    level: 5,
  },
  {
    id: 'ana304',
    text: 'What are Purkinje fibers?',
    answers: A('ana304', 'Conducting fibers in heart ventricles', [
      'Muscle fibers in arm',
      'Nerve fibers in brain',
      'Fibers in lung',
    ]),
    level: 5,
  },
  {
    id: 'ana305',
    text: 'What is the endocardium?',
    answers: A('ana305', 'Inner lining of heart', [
      'Outer covering of heart',
      'Middle layer of heart',
      'Valve of heart',
    ]),
    level: 5,
  },
  {
    id: 'ana306',
    text: 'What is the myocardium?',
    answers: A('ana306', 'Muscular wall of heart', [
      'Inner lining of heart',
      'Outer covering of heart',
      'Valve of heart',
    ]),
    level: 5,
  },
  {
    id: 'ana307',
    text: 'What is the epicardium?',
    answers: A('ana307', 'Outer layer of heart wall', [
      'Inner lining of heart',
      'Middle layer of heart',
      'Valve of heart',
    ]),
    level: 5,
  },
  {
    id: 'ana308',
    text: 'What is the mitral valve?',
    answers: A('ana308', 'Valve between left atrium and ventricle', [
      'Valve between right chambers',
      'Valve to aorta',
      'Valve to pulmonary artery',
    ]),
    level: 5,
  },
  {
    id: 'ana309',
    text: 'What is the tricuspid valve?',
    answers: A('ana309', 'Valve between right atrium and ventricle', [
      'Valve between left chambers',
      'Valve to aorta',
      'Valve to pulmonary artery',
    ]),
    level: 5,
  },
  {
    id: 'ana310',
    text: 'What is the aortic valve?',
    answers: A('ana310', 'Valve from left ventricle to aorta', [
      'Valve between chambers',
      'Valve to lungs',
      'Valve to vena cava',
    ]),
    level: 5,
  },
  {
    id: 'ana311',
    text: 'What is the pulmonary valve?',
    answers: A('ana311', 'Valve from right ventricle to pulmonary artery', [
      'Valve between chambers',
      'Valve to aorta',
      'Valve to vena cava',
    ]),
    level: 5,
  },
  {
    id: 'ana312',
    text: 'What is the coronary sinus?',
    answers: A('ana312', 'Vein collecting blood from heart muscle', [
      'Artery to heart',
      'Chamber of heart',
      'Valve of heart',
    ]),
    level: 5,
  },
  {
    id: 'ana313',
    text: 'What is the foramen ovale?',
    answers: A('ana313', 'Fetal heart opening between atria', [
      'Adult heart structure',
      'Valve of heart',
      'Artery of heart',
    ]),
    level: 6,
  },
  {
    id: 'ana314',
    text: 'What is the ductus arteriosus?',
    answers: A('ana314', 'Fetal blood vessel bypassing lungs', [
      'Adult blood vessel',
      'Valve of heart',
      'Chamber of heart',
    ]),
    level: 6,
  },
  {
    id: 'ana315',
    text: 'What is the circle of Willis?',
    answers: A('ana315', 'Arterial circle at base of brain', [
      'Venous circle',
      'Nerve circle',
      'Muscle circle',
    ]),
    level: 6,
  },
  {
    id: 'ana316',
    text: 'What is the carotid artery?',
    answers: A('ana316', 'Major artery to head and neck', [
      'Artery to arm',
      'Artery to leg',
      'Artery to abdomen',
    ]),
    level: 5,
  },
  {
    id: 'ana317',
    text: 'What is the jugular vein?',
    answers: A('ana317', 'Major vein from head and neck', [
      'Vein from arm',
      'Vein from leg',
      'Vein from abdomen',
    ]),
    level: 5,
  },
  {
    id: 'ana318',
    text: 'What is the subclavian artery?',
    answers: A('ana318', 'Artery below collarbone to arm', [
      'Artery to leg',
      'Artery to head',
      'Artery to abdomen',
    ]),
    level: 5,
  },
  {
    id: 'ana319',
    text: 'What is the femoral artery?',
    answers: A('ana319', 'Major artery in thigh', [
      'Artery in arm',
      'Artery in neck',
      'Artery in chest',
    ]),
    level: 5,
  },
  {
    id: 'ana320',
    text: 'What is the saphenous vein?',
    answers: A('ana320', 'Long vein in leg', [
      'Vein in arm',
      'Vein in neck',
      'Vein in chest',
    ]),
    level: 5,
  },
  {
    id: 'ana321',
    text: 'What is the hepatic portal vein?',
    answers: A('ana321', 'Vein carrying blood from intestines to liver', [
      'Vein from liver to heart',
      'Artery to liver',
      'Vein from kidney',
    ]),
    level: 6,
  },
  {
    id: 'ana322',
    text: 'What is the lymphatic system?',
    answers: A('ana322', 'System draining fluid and fighting infection', [
      'Blood circulation system',
      'Digestive system',
      'Respiratory system',
    ]),
    level: 4,
  },
  {
    id: 'ana323',
    text: 'What is a lymph node?',
    answers: A('ana323', 'Filter for lymph fluid', [
      'Blood filter',
      'Air filter',
      'Food filter',
    ]),
    level: 4,
  },
  {
    id: 'ana324',
    text: 'What is the thoracic duct?',
    answers: A('ana324', 'Main lymphatic vessel', [
      'Main blood vessel',
      'Main nerve',
      'Main airway',
    ]),
    level: 6,
  },
  {
    id: 'ana325',
    text: 'What is the cisterna chyli?',
    answers: A('ana325', 'Lymphatic sac in abdomen', [
      'Blood vessel',
      'Nerve bundle',
      'Muscle',
    ]),
    level: 7,
  },
  {
    id: 'ana326',
    text: 'What is the retina?',
    answers: A('ana326', 'Light-sensitive layer in eye', [
      'Lens of eye',
      'Outer covering of eye',
      'Fluid in eye',
    ]),
    level: 3,
  },
  {
    id: 'ana327',
    text: 'What is the cornea?',
    answers: A('ana327', 'Clear front covering of eye', [
      'Back of eye',
      'Colored part of eye',
      'Lens of eye',
    ]),
    level: 3,
  },
  {
    id: 'ana328',
    text: 'What is the lens?',
    answers: A('ana328', 'Structure focusing light in eye', [
      'Light-sensitive layer',
      'Colored part',
      'Outer covering',
    ]),
    level: 3,
  },
  {
    id: 'ana329',
    text: 'What is the iris?',
    answers: A('ana329', 'Colored part of eye controlling pupil', [
      'Light-sensitive layer',
      'Lens',
      'Outer covering',
    ]),
    level: 2,
  },
  {
    id: 'ana330',
    text: 'What is the pupil?',
    answers: A('ana330', 'Opening in iris letting in light', [
      'Colored part',
      'Lens',
      'Light-sensitive layer',
    ]),
    level: 2,
  },
  {
    id: 'ana331',
    text: 'What is the sclera?',
    answers: A('ana331', 'White outer layer of eye', [
      'Clear front layer',
      'Colored part',
      'Light-sensitive layer',
    ]),
    level: 3,
  },
  {
    id: 'ana332',
    text: 'What is the optic nerve?',
    answers: A('ana332', 'Nerve carrying visual signals to brain', [
      'Nerve for hearing',
      'Nerve for smell',
      'Nerve for taste',
    ]),
    level: 3,
  },
  {
    id: 'ana333',
    text: 'What is the vitreous humor?',
    answers: A('ana333', 'Gel filling inside of eye', [
      'Fluid in front of eye',
      'Lens',
      'Retina',
    ]),
    level: 4,
  },
  {
    id: 'ana334',
    text: 'What is the aqueous humor?',
    answers: A('ana334', 'Fluid in front of eye', [
      'Gel in back of eye',
      'Lens',
      'Retina',
    ]),
    level: 4,
  },
  {
    id: 'ana335',
    text: 'What is the cochlea?',
    answers: A('ana335', 'Spiral structure for hearing', [
      'Structure for balance',
      'Outer ear',
      'Middle ear bone',
    ]),
    level: 4,
  },
  {
    id: 'ana336',
    text: 'What is the vestibular system?',
    answers: A('ana336', 'Inner ear system for balance', [
      'System for hearing',
      'System for smell',
      'System for taste',
    ]),
    level: 4,
  },
  {
    id: 'ana337',
    text: 'What is the tympanic membrane?',
    answers: A('ana337', 'Eardrum', [
      'Inner ear structure',
      'Outer ear',
      'Middle ear bone',
    ]),
    level: 3,
  },
  {
    id: 'ana338',
    text: 'What are the ossicles?',
    answers: A('ana338', 'Three small bones in middle ear', [
      'Bones in inner ear',
      'Bones in outer ear',
      'Bones in nose',
    ]),
    level: 4,
  },
  {
    id: 'ana339',
    text: 'What is the malleus?',
    answers: A('ana339', 'Hammer bone in ear', [
      'Anvil bone',
      'Stirrup bone',
      'Cochlea',
    ]),
    level: 5,
  },
  {
    id: 'ana340',
    text: 'What is the incus?',
    answers: A('ana340', 'Anvil bone in ear', [
      'Hammer bone',
      'Stirrup bone',
      'Cochlea',
    ]),
    level: 5,
  },
  {
    id: 'ana341',
    text: 'What is the stapes?',
    answers: A('ana341', 'Stirrup bone in ear', [
      'Hammer bone',
      'Anvil bone',
      'Cochlea',
    ]),
    level: 5,
  },
  {
    id: 'ana342',
    text: 'What is the eustachian tube?',
    answers: A('ana342', 'Tube connecting ear to throat', [
      'Tube in nose',
      'Tube in eye',
      'Tube in mouth',
    ]),
    level: 4,
  },
  {
    id: 'ana343',
    text: 'What is the olfactory bulb?',
    answers: A('ana343', 'Brain structure for smell', [
      'Structure for taste',
      'Structure for hearing',
      'Structure for vision',
    ]),
    level: 5,
  },
  {
    id: 'ana344',
    text: 'What are taste buds?',
    answers: A('ana344', 'Receptors for taste on tongue', [
      'Receptors for smell',
      'Receptors for touch',
      'Receptors for temperature',
    ]),
    level: 2,
  },
  {
    id: 'ana345',
    text: 'What is the uvula?',
    answers: A('ana345', 'Hanging tissue at back of throat', [
      'Tissue in nose',
      'Tissue in ear',
      'Tissue in eye',
    ]),
    level: 3,
  },
  {
    id: 'ana346',
    text: 'What are tonsils?',
    answers: A('ana346', 'Lymphoid tissue in throat', [
      'Tissue in nose',
      'Tissue in ear',
      'Tissue in eye',
    ]),
    level: 3,
  },
  {
    id: 'ana347',
    text: 'What are adenoids?',
    answers: A('ana347', 'Lymphoid tissue behind nose', [
      'Tissue in throat',
      'Tissue in ear',
      'Tissue in eye',
    ]),
    level: 4,
  },
  {
    id: 'ana348',
    text: 'What is the soft palate?',
    answers: A('ana348', 'Back part of roof of mouth', [
      'Front part of roof',
      'Floor of mouth',
      'Side of mouth',
    ]),
    level: 4,
  },
  {
    id: 'ana349',
    text: 'What is the hard palate?',
    answers: A('ana349', 'Front part of roof of mouth', [
      'Back part of roof',
      'Floor of mouth',
      'Side of mouth',
    ]),
    level: 4,
  },
  {
    id: 'ana350',
    text: 'What is the salivary gland?',
    answers: A('ana350', 'Gland producing saliva', [
      'Gland producing tears',
      'Gland producing sweat',
      'Gland producing oil',
    ]),
    level: 3,
  },
  {
    id: 'ana351',
    text: 'What is the parotid gland?',
    answers: A('ana351', 'Largest salivary gland near ear', [
      'Gland under tongue',
      'Gland under jaw',
      'Gland in throat',
    ]),
    level: 5,
  },
  {
    id: 'ana352',
    text: 'What is the submandibular gland?',
    answers: A('ana352', 'Salivary gland under jaw', [
      'Gland near ear',
      'Gland under tongue',
      'Gland in throat',
    ]),
    level: 5,
  },
  {
    id: 'ana353',
    text: 'What is the sublingual gland?',
    answers: A('ana353', 'Salivary gland under tongue', [
      'Gland near ear',
      'Gland under jaw',
      'Gland in throat',
    ]),
    level: 5,
  },
  {
    id: 'ana354',
    text: 'What is the lacrimal gland?',
    answers: A('ana354', 'Gland producing tears', [
      'Gland producing saliva',
      'Gland producing sweat',
      'Gland producing oil',
    ]),
    level: 4,
  },
  {
    id: 'ana355',
    text: 'What is the conjunctiva?',
    answers: A('ana355', 'Membrane lining eyelid and covering eye', [
      'Lens of eye',
      'Retina',
      'Cornea',
    ]),
    level: 5,
  },
  {
    id: 'ana356',
    text: 'What is the choroid?',
    answers: A('ana356', 'Vascular layer of eye', [
      'Outer layer of eye',
      'Inner layer of eye',
      'Lens',
    ]),
    level: 6,
  },
  {
    id: 'ana357',
    text: 'What is the ciliary body?',
    answers: A('ana357', 'Structure controlling lens shape', [
      'Structure for vision',
      'Structure for color',
      'Structure for light',
    ]),
    level: 6,
  },
  {
    id: 'ana358',
    text: 'What is the fovea?',
    answers: A('ana358', 'Area of sharpest vision in retina', [
      'Blind spot',
      'Optic nerve',
      'Lens',
    ]),
    level: 6,
  },
  {
    id: 'ana359',
    text: 'What is the macula?',
    answers: A('ana359', 'Central area of retina for detailed vision', [
      'Peripheral retina',
      'Optic nerve',
      'Lens',
    ]),
    level: 6,
  },
  {
    id: 'ana360',
    text: 'What are rods?',
    answers: A('ana360', 'Photoreceptors for dim light', [
      'Photoreceptors for color',
      'Nerve cells',
      'Blood cells',
    ]),
    level: 5,
  },
  {
    id: 'ana361',
    text: 'What are cones?',
    answers: A('ana361', 'Photoreceptors for color vision', [
      'Photoreceptors for dim light',
      'Nerve cells',
      'Blood cells',
    ]),
    level: 5,
  },
  {
    id: 'ana362',
    text: 'What is the organ of Corti?',
    answers: A('ana362', 'Hearing receptor organ in cochlea', [
      'Balance organ',
      'Smell organ',
      'Taste organ',
    ]),
    level: 7,
  },
  {
    id: 'ana363',
    text: 'What are hair cells?',
    answers: A('ana363', 'Sensory cells in ear for hearing', [
      'Cells for smell',
      'Cells for taste',
      'Cells for touch',
    ]),
    level: 6,
  },
  {
    id: 'ana364',
    text: 'What is the semicircular canal?',
    answers: A('ana364', 'Inner ear structure for balance', [
      'Structure for hearing',
      'Structure for smell',
      'Structure for taste',
    ]),
    level: 5,
  },
  {
    id: 'ana365',
    text: 'What is the utricle?',
    answers: A('ana365', 'Inner ear structure detecting linear motion', [
      'Structure for hearing',
      'Structure for smell',
      'Structure for taste',
    ]),
    level: 7,
  },
  {
    id: 'ana366',
    text: 'What is the saccule?',
    answers: A('ana366', 'Inner ear structure detecting vertical motion', [
      'Structure for hearing',
      'Structure for smell',
      'Structure for taste',
    ]),
    level: 7,
  },
  {
    id: 'ana367',
    text: 'What is the oval window?',
    answers: A('ana367', 'Membrane between middle and inner ear', [
      'Eardrum',
      'Outer ear opening',
      'Cochlea opening',
    ]),
    level: 6,
  },
  {
    id: 'ana368',
    text: 'What is the round window?',
    answers: A('ana368', 'Membrane releasing pressure in inner ear', [
      'Eardrum',
      'Oval window',
      'Outer ear opening',
    ]),
    level: 7,
  },
  {
    id: 'ana369',
    text: 'What is the pinna?',
    answers: A('ana369', 'Outer visible part of ear', [
      'Inner ear',
      'Middle ear',
      'Eardrum',
    ]),
    level: 3,
  },
  {
    id: 'ana370',
    text: 'What is the external auditory canal?',
    answers: A('ana370', 'Ear canal to eardrum', [
      'Inner ear canal',
      'Eustachian tube',
      'Cochlea',
    ]),
    level: 4,
  },
  {
    id: 'ana371',
    text: 'What is cerumen?',
    answers: A('ana371', 'Ear wax', ['Ear fluid', 'Ear bone', 'Ear membrane']),
    level: 4,
  },
  {
    id: 'ana372',
    text: 'What is the olfactory epithelium?',
    answers: A('ana372', 'Smell receptor tissue in nose', [
      'Taste tissue',
      'Hearing tissue',
      'Vision tissue',
    ]),
    level: 6,
  },
  {
    id: 'ana373',
    text: 'What are olfactory receptors?',
    answers: A('ana373', 'Cells detecting smell', [
      'Cells detecting taste',
      'Cells detecting sound',
      'Cells detecting light',
    ]),
    level: 5,
  },
  {
    id: 'ana374',
    text: 'What is the nasal septum?',
    answers: A('ana374', 'Wall dividing nasal cavity', [
      'Roof of nose',
      'Floor of nose',
      'Opening of nose',
    ]),
    level: 4,
  },
  {
    id: 'ana375',
    text: 'What are nasal conchae?',
    answers: A('ana375', 'Bony ridges in nasal cavity', [
      'Cartilage in nose',
      'Membrane in nose',
      'Opening in nose',
    ]),
    level: 6,
  },
];
