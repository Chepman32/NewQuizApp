import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const historyQuestions: Question[] = [
  // ===== LEVEL 1: Very Easy =====
  {
    id: 'his1',
    text: 'Who was the first President of the United States?',
    answers: A('his1', 'George Washington', [
      'Abraham Lincoln',
      'Thomas Jefferson',
      'John Adams',
    ]),
    level: 1,
  },
  {
    id: 'his2',
    text: 'In which year did World War II end?',
    answers: A('his2', '1945', ['1944', '1946', '1943']),
    level: 1,
  },
  {
    id: 'his3',
    text: 'What ancient wonder was located in Egypt?',
    answers: A('his3', 'Great Pyramid of Giza', [
      'Hanging Gardens',
      'Colossus of Rhodes',
      'Lighthouse of Alexandria',
    ]),
    level: 1,
  },
  {
    id: 'his4',
    text: 'Who discovered America in 1492?',
    answers: A('his4', 'Christopher Columbus', [
      'Amerigo Vespucci',
      'Leif Erikson',
      'Marco Polo',
    ]),
    level: 1,
  },
  {
    id: 'his5',
    text: 'What was the name of the ship that brought Pilgrims to America?',
    answers: A('his5', 'Mayflower', ['Santa Maria', 'Titanic', 'Endeavour']),
    level: 1,
  },
  {
    id: 'his6',
    text: 'Who was known as the "Father of India"?',
    answers: A('his6', 'Mahatma Gandhi', [
      'Jawaharlal Nehru',
      'Subhas Chandra Bose',
      'Sardar Patel',
    ]),
    level: 1,
  },
  {
    id: 'his7',
    text: 'What year did the Titanic sink?',
    answers: A('his7', '1912', ['1910', '1914', '1908']),
    level: 1,
  },
  {
    id: 'his8',
    text: 'Who was the first man to walk on the moon?',
    answers: A('his8', 'Neil Armstrong', [
      'Buzz Aldrin',
      'Yuri Gagarin',
      'John Glenn',
    ]),
    level: 1,
  },
  {
    id: 'his9',
    text: 'What ancient civilization built the Colosseum?',
    answers: A('his9', 'Romans', ['Greeks', 'Egyptians', 'Persians']),
    level: 1,
  },
  {
    id: 'his10',
    text: 'Who wrote the Declaration of Independence?',
    answers: A('his10', 'Thomas Jefferson', [
      'Benjamin Franklin',
      'George Washington',
      'John Adams',
    ]),
    level: 1,
  },
  {
    id: 'his11',
    text: 'What year did World War I begin?',
    answers: A('his11', '1914', ['1912', '1916', '1918']),
    level: 1,
  },
  {
    id: 'his12',
    text: 'Who was the Queen of England for most of the 20th century?',
    answers: A('his12', 'Queen Elizabeth II', [
      'Queen Victoria',
      'Queen Mary',
      'Queen Anne',
    ]),
    level: 1,
  },
  {
    id: 'his13',
    text: 'What wall divided East and West Berlin?',
    answers: A('his13', 'Berlin Wall', [
      'Great Wall',
      "Hadrian's Wall",
      'Iron Curtain',
    ]),
    level: 1,
  },
  {
    id: 'his14',
    text: 'Who was the leader of Nazi Germany?',
    answers: A('his14', 'Adolf Hitler', [
      'Joseph Stalin',
      'Benito Mussolini',
      'Winston Churchill',
    ]),
    level: 1,
  },
  {
    id: 'his15',
    text: 'What country was Napoleon Bonaparte from?',
    answers: A('his15', 'France', ['Italy', 'Spain', 'Germany']),
    level: 1,
  },
  {
    id: 'his16',
    text: 'Who painted the Mona Lisa?',
    answers: A('his16', 'Leonardo da Vinci', [
      'Michelangelo',
      'Raphael',
      'Donatello',
    ]),
    level: 1,
  },
  {
    id: 'his17',
    text: 'What ancient civilization built the Parthenon?',
    answers: A('his17', 'Greeks', ['Romans', 'Egyptians', 'Persians']),
    level: 1,
  },
  {
    id: 'his18',
    text: 'Who was the first female Prime Minister of the UK?',
    answers: A('his18', 'Margaret Thatcher', [
      'Theresa May',
      'Queen Victoria',
      'Queen Elizabeth',
    ]),
    level: 1,
  },
  {
    id: 'his19',
    text: 'What year did the American Civil War end?',
    answers: A('his19', '1865', ['1863', '1867', '1861']),
    level: 1,
  },
  {
    id: 'his20',
    text: 'Who was the famous Egyptian queen who ruled with Julius Caesar?',
    answers: A('his20', 'Cleopatra', ['Nefertiti', 'Hatshepsut', 'Isis']),
    level: 1,
  },
  {
    id: 'his21',
    text: 'What empire was ruled by Genghis Khan?',
    answers: A('his21', 'Mongol Empire', [
      'Roman Empire',
      'Ottoman Empire',
      'Persian Empire',
    ]),
    level: 1,
  },
  {
    id: 'his22',
    text: 'Who invented the printing press?',
    answers: A('his22', 'Johannes Gutenberg', [
      'Benjamin Franklin',
      'Thomas Edison',
      'Alexander Graham Bell',
    ]),
    level: 1,
  },
  {
    id: 'his23',
    text: 'What year did the French Revolution begin?',
    answers: A('his23', '1789', ['1776', '1799', '1804']),
    level: 1,
  },
  {
    id: 'his24',
    text: 'Who was the first Emperor of Rome?',
    answers: A('his24', 'Augustus', ['Julius Caesar', 'Nero', 'Caligula']),
    level: 1,
  },
  {
    id: 'his25',
    text: 'What was the name of the first satellite launched into space?',
    answers: A('his25', 'Sputnik', ['Apollo', 'Voyager', 'Explorer']),
    level: 1,
  },
  {
    id: 'his26',
    text: 'Who led the civil rights movement in the USA?',
    answers: A('his26', 'Martin Luther King Jr.', [
      'Malcolm X',
      'Rosa Parks',
      'Frederick Douglass',
    ]),
    level: 1,
  },
  {
    id: 'his27',
    text: 'What ancient wonder was in Babylon?',
    answers: A('his27', 'Hanging Gardens', [
      'Great Pyramid',
      'Colossus',
      'Lighthouse',
    ]),
    level: 1,
  },
  {
    id: 'his28',
    text: 'Who was the British Prime Minister during World War II?',
    answers: A('his28', 'Winston Churchill', [
      'Neville Chamberlain',
      'Clement Attlee',
      'Anthony Eden',
    ]),
    level: 1,
  },
  {
    id: 'his29',
    text: 'What year did the Berlin Wall fall?',
    answers: A('his29', '1989', ['1987', '1991', '1985']),
    level: 1,
  },
  {
    id: 'his30',
    text: 'Who was the first woman to fly solo across the Atlantic?',
    answers: A('his30', 'Amelia Earhart', [
      'Harriet Quimby',
      'Bessie Coleman',
      'Jacqueline Cochran',
    ]),
    level: 1,
  },
  {
    id: 'his31',
    text: 'What was the name of the ship Darwin sailed on?',
    answers: A('his31', 'HMS Beagle', [
      'HMS Victory',
      'Mayflower',
      'Endeavour',
    ]),
    level: 1,
  },
  {
    id: 'his32',
    text: 'Who was the first person in space?',
    answers: A('his32', 'Yuri Gagarin', [
      'Neil Armstrong',
      'John Glenn',
      'Alan Shepard',
    ]),
    level: 1,
  },
  {
    id: 'his33',
    text: 'What year did the Soviet Union collapse?',
    answers: A('his33', '1991', ['1989', '1993', '1987']),
    level: 1,
  },
  {
    id: 'his34',
    text: 'Who was the famous nurse during the Crimean War?',
    answers: A('his34', 'Florence Nightingale', [
      'Clara Barton',
      'Mary Seacole',
      'Edith Cavell',
    ]),
    level: 1,
  },
  {
    id: 'his35',
    text: 'What ancient civilization built Machu Picchu?',
    answers: A('his35', 'Incas', ['Aztecs', 'Mayans', 'Olmecs']),
    level: 1,
  },
  {
    id: 'his36',
    text: 'Who was the first African American President of the USA?',
    answers: A('his36', 'Barack Obama', [
      'Colin Powell',
      'Condoleezza Rice',
      'Jesse Jackson',
    ]),
    level: 1,
  },
  {
    id: 'his37',
    text: 'What year did India gain independence?',
    answers: A('his37', '1947', ['1945', '1950', '1942']),
    level: 1,
  },
  {
    id: 'his38',
    text: 'Who was the famous Greek philosopher who taught Alexander the Great?',
    answers: A('his38', 'Aristotle', ['Plato', 'Socrates', 'Pythagoras']),
    level: 1,
  },
  {
    id: 'his39',
    text: 'What was the name of the first successful airplane?',
    answers: A('his39', 'Wright Flyer', [
      'Spirit of St. Louis',
      'Concorde',
      'Spitfire',
    ]),
    level: 1,
  },
  {
    id: 'his40',
    text: 'Who invented the telephone?',
    answers: A('his40', 'Alexander Graham Bell', [
      'Thomas Edison',
      'Nikola Tesla',
      'Guglielmo Marconi',
    ]),
    level: 1,
  },
  {
    id: 'his41',
    text: 'What year did the American Revolution begin?',
    answers: A('his41', '1775', ['1776', '1773', '1781']),
    level: 1,
  },
  {
    id: 'his42',
    text: 'Who was the last Tsar of Russia?',
    answers: A('his42', 'Nicholas II', [
      'Alexander III',
      'Peter the Great',
      'Ivan the Terrible',
    ]),
    level: 1,
  },
  {
    id: 'his43',
    text: 'What ancient civilization built the Sphinx?',
    answers: A('his43', 'Egyptians', ['Greeks', 'Romans', 'Persians']),
    level: 1,
  },
  {
    id: 'his44',
    text: 'Who was the famous Viking explorer who reached North America?',
    answers: A('his44', 'Leif Erikson', [
      'Erik the Red',
      'Ragnar Lothbrok',
      'Harald Hardrada',
    ]),
    level: 1,
  },
  {
    id: 'his45',
    text: 'What year did Japan attack Pearl Harbor?',
    answers: A('his45', '1941', ['1940', '1942', '1939']),
    level: 1,
  },
  {
    id: 'his46',
    text: 'Who was the founder of Buddhism?',
    answers: A('his46', 'Siddhartha Gautama', [
      'Confucius',
      'Lao Tzu',
      'Mahavira',
    ]),
    level: 1,
  },
  {
    id: 'his47',
    text: 'What was the name of the first permanent English settlement in America?',
    answers: A('his47', 'Jamestown', ['Plymouth', 'Roanoke', 'Boston']),
    level: 1,
  },
  {
    id: 'his48',
    text: 'Who was the famous Scottish king who fought for independence?',
    answers: A('his48', 'Robert the Bruce', [
      'William Wallace',
      'Macbeth',
      'James I',
    ]),
    level: 1,
  },
  {
    id: 'his49',
    text: 'What year did the Great Fire of London occur?',
    answers: A('his49', '1666', ['1665', '1667', '1660']),
    level: 1,
  },
  {
    id: 'his50',
    text: 'Who was the first female pharaoh of Egypt?',
    answers: A('his50', 'Hatshepsut', ['Cleopatra', 'Nefertiti', 'Nefertari']),
    level: 1,
  },

  // ===== LEVEL 2: Easy =====
  {
    id: 'his51',
    text: 'What treaty ended World War I?',
    answers: A('his51', 'Treaty of Versailles', [
      'Treaty of Paris',
      'Treaty of Ghent',
      'Treaty of Westphalia',
    ]),
    level: 2,
  },
  {
    id: 'his52',
    text: 'Who was the leader of the Soviet Union during World War II?',
    answers: A('his52', 'Joseph Stalin', [
      'Vladimir Lenin',
      'Nikita Khrushchev',
      'Leon Trotsky',
    ]),
    level: 2,
  },
  {
    id: 'his53',
    text: 'What was the name of the alliance between Germany, Italy, and Japan in WWII?',
    answers: A('his53', 'Axis Powers', [
      'Allied Powers',
      'Central Powers',
      'Triple Entente',
    ]),
    level: 2,
  },
  {
    id: 'his54',
    text: 'Who was the famous Carthaginian general who crossed the Alps?',
    answers: A('his54', 'Hannibal', ['Scipio', 'Hamilcar', 'Hasdrubal']),
    level: 2,
  },
  {
    id: 'his55',
    text: 'What was the name of the period of cultural rebirth in Europe?',
    answers: A('his55', 'Renaissance', [
      'Enlightenment',
      'Reformation',
      'Industrial Revolution',
    ]),
    level: 2,
  },
  {
    id: 'his56',
    text: 'Who was the famous Macedonian king who conquered Persia?',
    answers: A('his56', 'Alexander the Great', [
      'Philip II',
      'Darius III',
      'Xerxes',
    ]),
    level: 2,
  },
  {
    id: 'his57',
    text: 'What was the name of the economic crisis in 1929?',
    answers: A('his57', 'Great Depression', [
      'Great Recession',
      'Black Monday',
      'Panic of 1929',
    ]),
    level: 2,
  },
  {
    id: 'his58',
    text: 'Who was the first Holy Roman Emperor?',
    answers: A('his58', 'Charlemagne', ['Otto I', 'Frederick I', 'Henry IV']),
    level: 2,
  },
  {
    id: 'his59',
    text: 'What was the name of the conflict between England and France lasting 116 years?',
    answers: A('his59', "Hundred Years' War", [
      "Thirty Years' War",
      "Seven Years' War",
      'War of the Roses',
    ]),
    level: 2,
  },
  {
    id: 'his60',
    text: 'Who was the famous French military leader who became Emperor?',
    answers: A('his60', 'Napoleon Bonaparte', [
      'Louis XIV',
      'Charles de Gaulle',
      'Louis XVI',
    ]),
    level: 2,
  },
  {
    id: 'his61',
    text: 'What was the name of the movement to end slavery in America?',
    answers: A('his61', 'Abolitionism', [
      'Suffrage',
      'Prohibition',
      'Reconstruction',
    ]),
    level: 2,
  },
  {
    id: 'his62',
    text: 'Who was the famous Chinese philosopher who founded Confucianism?',
    answers: A('his62', 'Confucius', ['Lao Tzu', 'Sun Tzu', 'Mencius']),
    level: 2,
  },
  {
    id: 'his63',
    text: 'What was the name of the plague that killed millions in medieval Europe?',
    answers: A('his63', 'Black Death', ['Spanish Flu', 'Cholera', 'Smallpox']),
    level: 2,
  },
  {
    id: 'his64',
    text: 'Who was the famous English king who had six wives?',
    answers: A('his64', 'Henry VIII', [
      'Henry VII',
      'Edward VI',
      'Richard III',
    ]),
    level: 2,
  },
  {
    id: 'his65',
    text: 'What was the name of the religious movement started by Martin Luther?',
    answers: A('his65', 'Protestant Reformation', [
      'Counter-Reformation',
      'Great Awakening',
      'Enlightenment',
    ]),
    level: 2,
  },
  {
    id: 'his66',
    text: 'Who was the famous Russian leader who modernized Russia?',
    answers: A('his66', 'Peter the Great', [
      'Ivan the Terrible',
      'Catherine the Great',
      'Nicholas I',
    ]),
    level: 2,
  },
  {
    id: 'his67',
    text: 'What was the name of the war between North and South Korea?',
    answers: A('his67', 'Korean War', [
      'Vietnam War',
      'Cold War',
      'Pacific War',
    ]),
    level: 2,
  },
  {
    id: 'his68',
    text: 'Who was the famous Italian explorer who sailed for Spain?',
    answers: A('his68', 'Christopher Columbus', [
      'Amerigo Vespucci',
      'Marco Polo',
      'John Cabot',
    ]),
    level: 2,
  },
  {
    id: 'his69',
    text: 'What was the name of the period of intellectual growth in 18th century Europe?',
    answers: A('his69', 'Enlightenment', [
      'Renaissance',
      'Reformation',
      'Romanticism',
    ]),
    level: 2,
  },
  {
    id: 'his70',
    text: 'Who was the famous South African leader who fought apartheid?',
    answers: A('his70', 'Nelson Mandela', [
      'Desmond Tutu',
      'F.W. de Klerk',
      'Steve Biko',
    ]),
    level: 2,
  },
  {
    id: 'his71',
    text: 'What was the name of the conflict in Vietnam involving the USA?',
    answers: A('his71', 'Vietnam War', ['Korean War', 'Gulf War', 'Cold War']),
    level: 2,
  },
  {
    id: 'his72',
    text: 'Who was the famous Greek philosopher who was sentenced to death?',
    answers: A('his72', 'Socrates', ['Plato', 'Aristotle', 'Pythagoras']),
    level: 2,
  },
  {
    id: 'his73',
    text: 'What was the name of the system of racial segregation in South Africa?',
    answers: A('his73', 'Apartheid', [
      'Jim Crow',
      'Segregation',
      'Colonialism',
    ]),
    level: 2,
  },
  {
    id: 'his74',
    text: "Who was the famous Chinese leader who founded the People's Republic?",
    answers: A('his74', 'Mao Zedong', [
      'Sun Yat-sen',
      'Chiang Kai-shek',
      'Deng Xiaoping',
    ]),
    level: 2,
  },
  {
    id: 'his75',
    text: 'What was the name of the alliance between Britain, France, and Russia in WWI?',
    answers: A('his75', 'Triple Entente', [
      'Triple Alliance',
      'Axis Powers',
      'Allied Powers',
    ]),
    level: 2,
  },

  // ===== LEVEL 3: Intermediate =====
  {
    id: 'his76',
    text: 'What was the Magna Carta?',
    answers: A('his76', 'Charter limiting royal power', [
      'Religious text',
      'Trade agreement',
      'Military treaty',
    ]),
    level: 3,
  },
  {
    id: 'his77',
    text: 'Who was the Byzantine Emperor who codified Roman law?',
    answers: A('his77', 'Justinian I', [
      'Constantine',
      'Theodosius',
      'Heraclius',
    ]),
    level: 3,
  },
  {
    id: 'his78',
    text: 'What was the Domesday Book?',
    answers: A('his78', 'Survey of England', [
      'Religious text',
      'Legal code',
      'Chronicle',
    ]),
    level: 3,
  },
  {
    id: 'his79',
    text: 'Who led the Bolshevik Revolution?',
    answers: A('his79', 'Vladimir Lenin', [
      'Joseph Stalin',
      'Leon Trotsky',
      'Karl Marx',
    ]),
    level: 3,
  },
  {
    id: 'his80',
    text: 'What was the Congress of Vienna?',
    answers: A('his80', 'Post-Napoleonic peace conference', [
      'Trade summit',
      'Religious council',
      'Military alliance',
    ]),
    level: 3,
  },
  {
    id: 'his81',
    text: 'Who was the Ottoman Sultan who conquered Constantinople?',
    answers: A('his81', 'Mehmed II', ['Suleiman I', 'Selim I', 'Bayezid I']),
    level: 3,
  },
  {
    id: 'his82',
    text: 'What was the Meiji Restoration?',
    answers: A('his82', 'Japanese modernization', [
      'Chinese revolution',
      'Korean independence',
      'Vietnamese uprising',
    ]),
    level: 3,
  },
  {
    id: 'his83',
    text: 'Who was the Prussian chancellor who unified Germany?',
    answers: A('his83', 'Otto von Bismarck', [
      'Wilhelm I',
      'Frederick the Great',
      'Helmuth von Moltke',
    ]),
    level: 3,
  },
  {
    id: 'his84',
    text: 'What was the Scramble for Africa?',
    answers: A('his84', 'European colonization of Africa', [
      'African independence movement',
      'Trade competition',
      'Religious mission',
    ]),
    level: 3,
  },
  {
    id: 'his85',
    text: 'Who was the Mughal Emperor who built the Taj Mahal?',
    answers: A('his85', 'Shah Jahan', ['Akbar', 'Aurangzeb', 'Babur']),
    level: 3,
  },
  {
    id: 'his86',
    text: 'What was the Opium War about?',
    answers: A('his86', 'British-Chinese trade conflict', [
      'Japanese expansion',
      'Korean independence',
      'Vietnamese rebellion',
    ]),
    level: 3,
  },
  {
    id: 'his87',
    text: 'Who was the Spanish conquistador who conquered the Aztecs?',
    answers: A('his87', 'Hernán Cortés', [
      'Francisco Pizarro',
      'Juan Ponce de León',
      'Vasco Núñez de Balboa',
    ]),
    level: 3,
  },
  {
    id: 'his88',
    text: 'What was the Dreyfus Affair?',
    answers: A('his88', 'French political scandal', [
      'German military crisis',
      'British spy case',
      'Russian revolution',
    ]),
    level: 3,
  },
  {
    id: 'his89',
    text: 'Who was the founder of the Mongol Empire?',
    answers: A('his89', 'Genghis Khan', ['Kublai Khan', 'Tamerlane', 'Attila']),
    level: 3,
  },
  {
    id: 'his90',
    text: 'What was the Reconquista?',
    answers: A('his90', 'Christian reconquest of Iberia', [
      'Muslim expansion',
      'Crusades',
      'Viking raids',
    ]),
    level: 3,
  },

  // ===== LEVEL 4: Normal =====
  {
    id: 'his91',
    text: 'What was the significance of the Battle of Hastings?',
    answers: A('his91', 'Norman conquest of England', [
      'End of Roman Britain',
      'Viking defeat',
      'Scottish independence',
    ]),
    level: 4,
  },
  {
    id: 'his92',
    text: 'Who established the Qin Dynasty in China?',
    answers: A('his92', 'Qin Shi Huang', [
      'Liu Bang',
      'Wu Zetian',
      'Kublai Khan',
    ]),
    level: 4,
  },
  {
    id: 'his93',
    text: 'What was the significance of the Peace of Westphalia?',
    answers: A('his93', 'Established modern state sovereignty', [
      'Ended Crusades',
      'Started colonialism',
      'Created NATO',
    ]),
    level: 4,
  },
  {
    id: 'his94',
    text: 'Who was the founder of the Maurya Empire?',
    answers: A('his94', 'Chandragupta Maurya', [
      'Ashoka',
      'Bindusara',
      'Chanakya',
    ]),
    level: 4,
  },
  {
    id: 'his95',
    text: 'What was the Glorious Revolution?',
    answers: A('his95', 'Overthrow of James II', [
      'French Revolution',
      'American Revolution',
      'Russian Revolution',
    ]),
    level: 4,
  },
  {
    id: 'his96',
    text: 'Who was the founder of the Achaemenid Empire?',
    answers: A('his96', 'Cyrus the Great', ['Darius I', 'Xerxes', 'Cambyses']),
    level: 4,
  },
  {
    id: 'his97',
    text: 'What was the significance of the Battle of Tours?',
    answers: A('his97', 'Halted Muslim expansion into Europe', [
      'Started Crusades',
      'Ended Roman Empire',
      'Viking defeat',
    ]),
    level: 4,
  },
  {
    id: 'his98',
    text: 'Who was the founder of the Gupta Empire?',
    answers: A('his98', 'Sri Gupta', [
      'Chandragupta I',
      'Samudragupta',
      'Chandragupta II',
    ]),
    level: 4,
  },
  {
    id: 'his99',
    text: 'What was the Edict of Nantes?',
    answers: A('his99', 'Granted religious tolerance in France', [
      'Ended Hundred Years War',
      'Started Reformation',
      'Created Holy Roman Empire',
    ]),
    level: 4,
  },
  {
    id: 'his100',
    text: 'Who was the founder of the Umayyad Caliphate?',
    answers: A('his100', 'Muawiya I', ['Abu Bakr', 'Umar', 'Ali']),
    level: 4,
  },

  // ===== LEVEL 5: Hard =====
  {
    id: 'his101',
    text: 'What was the significance of the Diet of Worms?',
    answers: A('his101', "Luther's trial before Charles V", [
      'Peace treaty',
      'Trade agreement',
      'Coronation ceremony',
    ]),
    level: 5,
  },
  {
    id: 'his102',
    text: 'Who was the founder of the Safavid Dynasty?',
    answers: A('his102', 'Shah Ismail I', [
      'Abbas I',
      'Tahmasp I',
      'Nader Shah',
    ]),
    level: 5,
  },
  {
    id: 'his103',
    text: 'What was the Defenestration of Prague?',
    answers: A(
      'his103',
      'Throwing officials from window, starting Thirty Years War',
      ['Peace treaty', 'Royal coronation', 'Trade agreement'],
    ),
    level: 5,
  },
  {
    id: 'his104',
    text: 'Who was the founder of the Tokugawa Shogunate?',
    answers: A('his104', 'Tokugawa Ieyasu', [
      'Oda Nobunaga',
      'Toyotomi Hideyoshi',
      'Minamoto Yoritomo',
    ]),
    level: 5,
  },
  {
    id: 'his105',
    text: 'What was the significance of the Battle of Lepanto?',
    answers: A('his105', 'Christian victory over Ottoman navy', [
      'Muslim conquest',
      'Viking raid',
      'Crusader defeat',
    ]),
    level: 5,
  },
  {
    id: 'his106',
    text: 'Who established the Abbasid Caliphate?',
    answers: A('his106', 'Abu al-Abbas', [
      'Harun al-Rashid',
      'Al-Mansur',
      'Al-Mamun',
    ]),
    level: 5,
  },
  {
    id: 'his107',
    text: 'What was the Investiture Controversy?',
    answers: A('his107', 'Conflict over church appointments', [
      'Trade dispute',
      'Territorial war',
      'Succession crisis',
    ]),
    level: 5,
  },
  {
    id: 'his108',
    text: 'Who was the founder of the Seljuk Empire?',
    answers: A('his108', 'Tughril Beg', [
      'Alp Arslan',
      'Malik Shah',
      'Suleiman',
    ]),
    level: 5,
  },
  {
    id: 'his109',
    text: 'What was the significance of the Battle of Manzikert?',
    answers: A('his109', 'Seljuk victory opening Anatolia', [
      'Crusader victory',
      'Mongol invasion',
      'Byzantine expansion',
    ]),
    level: 5,
  },
  {
    id: 'his110',
    text: 'Who was the founder of the Fatimid Caliphate?',
    answers: A('his110', 'Abdullah al-Mahdi', [
      'Al-Hakim',
      'Al-Aziz',
      'Al-Mustansir',
    ]),
    level: 5,
  },
  {
    id: 'his111',
    text: 'What was the Concordat of Worms?',
    answers: A('his111', 'Agreement ending Investiture Controversy', [
      'Peace treaty',
      'Trade agreement',
      'Military alliance',
    ]),
    level: 5,
  },
  {
    id: 'his112',
    text: 'Who was the founder of the Khmer Empire?',
    answers: A('his112', 'Jayavarman II', [
      'Suryavarman II',
      'Jayavarman VII',
      'Indravarman I',
    ]),
    level: 5,
  },
  {
    id: 'his113',
    text: 'What was the significance of the Fourth Crusade?',
    answers: A('his113', 'Sack of Constantinople', [
      'Capture of Jerusalem',
      'Muslim victory',
      'Peace treaty',
    ]),
    level: 5,
  },
  {
    id: 'his114',
    text: 'Who was the founder of the Mali Empire?',
    answers: A('his114', 'Sundiata Keita', [
      'Mansa Musa',
      'Askia Muhammad',
      'Sonni Ali',
    ]),
    level: 5,
  },
  {
    id: 'his115',
    text: 'What was the Golden Bull of 1356?',
    answers: A('his115', 'Constitution of Holy Roman Empire', [
      'Peace treaty',
      'Trade agreement',
      'Religious decree',
    ]),
    level: 5,
  },

  // ===== LEVEL 6: Very Hard =====
  {
    id: 'his116',
    text: 'What was the significance of the Battle of Crécy?',
    answers: A('his116', 'English longbow dominance', [
      'French cavalry victory',
      'Peace treaty',
      'Siege warfare',
    ]),
    level: 6,
  },
  {
    id: 'his117',
    text: 'Who established the Vijayanagara Empire?',
    answers: A('his117', 'Harihara I and Bukka Raya I', [
      'Krishnadevaraya',
      'Deva Raya II',
      'Rama Raya',
    ]),
    level: 6,
  },
  {
    id: 'his118',
    text: 'What was the Pragmatic Sanction of 1713?',
    answers: A('his118', 'Habsburg succession law', [
      'Peace treaty',
      'Trade agreement',
      'Religious decree',
    ]),
    level: 6,
  },
  {
    id: 'his119',
    text: 'Who was the founder of the Songhai Empire?',
    answers: A('his119', 'Sonni Ali', [
      'Askia Muhammad',
      'Sundiata Keita',
      'Mansa Musa',
    ]),
    level: 6,
  },
  {
    id: 'his120',
    text: 'What was the significance of the Battle of Pavia?',
    answers: A('his120', 'Capture of Francis I by Charles V', [
      'French victory',
      'Ottoman defeat',
      'English conquest',
    ]),
    level: 6,
  },
  {
    id: 'his121',
    text: "Who established the Chola Dynasty's maritime empire?",
    answers: A('his121', 'Rajendra Chola I', [
      'Rajaraja Chola I',
      'Kulottunga I',
      'Vikrama Chola',
    ]),
    level: 6,
  },
  {
    id: 'his122',
    text: 'What was the Edict of Fontainebleau?',
    answers: A('his122', 'Revocation of Edict of Nantes', [
      'Religious tolerance',
      'Peace treaty',
      'Trade agreement',
    ]),
    level: 6,
  },
  {
    id: 'his123',
    text: 'Who was the founder of the Pala Empire?',
    answers: A('his123', 'Gopala', ['Dharmapala', 'Devapala', 'Mahipala']),
    level: 6,
  },
  {
    id: 'his124',
    text: 'What was the significance of the Battle of Mohács?',
    answers: A('his124', 'Ottoman conquest of Hungary', [
      'Hungarian victory',
      'Austrian expansion',
      'Polish intervention',
    ]),
    level: 6,
  },
  {
    id: 'his125',
    text: 'Who established the Rashtrakuta Dynasty?',
    answers: A('his125', 'Dantidurga', [
      'Amoghavarsha',
      'Krishna I',
      'Govinda III',
    ]),
    level: 6,
  },
  {
    id: 'his126',
    text: 'What was the Pacification of Ghent?',
    answers: A('his126', "Dutch provinces' alliance against Spain", [
      'Peace treaty',
      'Trade agreement',
      'Religious decree',
    ]),
    level: 6,
  },
  {
    id: 'his127',
    text: 'Who was the founder of the Chalukya Dynasty?',
    answers: A('his127', 'Pulakeshin I', [
      'Pulakeshin II',
      'Vikramaditya I',
      'Kirtivarman I',
    ]),
    level: 6,
  },
  {
    id: 'his128',
    text: 'What was the significance of the Battle of White Mountain?',
    answers: A('his128', 'Habsburg victory in Thirty Years War', [
      'Protestant victory',
      'Ottoman defeat',
      'French conquest',
    ]),
    level: 6,
  },
  {
    id: 'his129',
    text: 'Who established the Pallava Dynasty?',
    answers: A('his129', 'Simhavishnu', [
      'Mahendravarman I',
      'Narasimhavarman I',
      'Nandivarman II',
    ]),
    level: 6,
  },
  {
    id: 'his130',
    text: 'What was the Peace of Augsburg?',
    answers: A('his130', 'Religious settlement in Holy Roman Empire', [
      'End of Thirty Years War',
      'Trade agreement',
      'Military alliance',
    ]),
    level: 6,
  },

  // ===== LEVEL 7: Legendary =====
  {
    id: 'his131',
    text: 'What was the significance of the Synod of Whitby?',
    answers: A('his131', 'Roman Christianity adopted in England', [
      'Celtic Christianity victory',
      'Pagan revival',
      'Muslim influence',
    ]),
    level: 7,
  },
  {
    id: 'his132',
    text: 'Who established the Pratihara Dynasty?',
    answers: A('his132', 'Nagabhata I', [
      'Mihira Bhoja',
      'Mahendrapala I',
      'Vatsaraja',
    ]),
    level: 7,
  },
  {
    id: 'his133',
    text: 'What was the Capitulary of Quierzy?',
    answers: A('his133', 'Hereditary fiefs in Carolingian Empire', [
      'Peace treaty',
      'Trade agreement',
      'Religious decree',
    ]),
    level: 7,
  },
  {
    id: 'his134',
    text: 'Who was the founder of the Satavahana Dynasty?',
    answers: A('his134', 'Simuka', [
      'Gautamiputra Satakarni',
      'Vasishthiputra Pulumayi',
      'Yajna Sri Satakarni',
    ]),
    level: 7,
  },
  {
    id: 'his135',
    text: 'What was the significance of the Battle of Talas?',
    answers: A('his135', 'Arab victory spreading papermaking to West', [
      'Chinese expansion',
      'Mongol invasion',
      'Turkish conquest',
    ]),
    level: 7,
  },
  {
    id: 'his136',
    text: 'Who established the Vakataka Dynasty?',
    answers: A('his136', 'Vindhyashakti', [
      'Pravarasena I',
      'Rudrasena II',
      'Harishena',
    ]),
    level: 7,
  },
  {
    id: 'his137',
    text: 'What was the Donation of Constantine?',
    answers: A('his137', 'Forged document granting papal authority', [
      'Genuine imperial decree',
      'Peace treaty',
      'Trade agreement',
    ]),
    level: 7,
  },
  {
    id: 'his138',
    text: 'Who was the founder of the Kushan Empire?',
    answers: A('his138', 'Kujula Kadphises', [
      'Kanishka',
      'Vima Kadphises',
      'Huvishka',
    ]),
    level: 7,
  },
  {
    id: 'his139',
    text: 'What was the significance of the Edict of Thessalonica?',
    answers: A('his139', 'Christianity as Roman state religion', [
      'Pagan revival',
      'Religious tolerance',
      'Church-state separation',
    ]),
    level: 7,
  },
  {
    id: 'his140',
    text: 'Who established the Shaka Dynasty in India?',
    answers: A('his140', 'Maues', ['Azes I', 'Gondophares', 'Nahapana']),
    level: 7,
  },
  {
    id: 'his141',
    text: 'What was the Constitutio Antoniniana?',
    answers: A('his141', 'Roman citizenship to all free inhabitants', [
      'Military reform',
      'Tax law',
      'Religious decree',
    ]),
    level: 7,
  },
  {
    id: 'his142',
    text: 'Who was the founder of the Indo-Greek Kingdom?',
    answers: A('his142', 'Demetrius I', [
      'Menander I',
      'Eucratides I',
      'Apollodotus I',
    ]),
    level: 7,
  },
  {
    id: 'his143',
    text: 'What was the significance of the Council of Chalcedon?',
    answers: A('his143', "Defined Christ's two natures", [
      'Papal supremacy',
      'Iconoclasm',
      'Monasticism',
    ]),
    level: 7,
  },
  {
    id: 'his144',
    text: 'Who established the Sunga Dynasty?',
    answers: A('his144', 'Pushyamitra Sunga', [
      'Agnimitra',
      'Vasumitra',
      'Devabhuti',
    ]),
    level: 7,
  },
  {
    id: 'his145',
    text: 'What was the Lex Hortensia?',
    answers: A('his145', 'Plebiscites binding on all Romans', [
      'Military law',
      'Tax reform',
      'Religious decree',
    ]),
    level: 7,
  },

  // ===== LEVEL 8: Professor =====
  {
    id: 'his146',
    text: 'What was the significance of the Lex Canuleia?',
    answers: A('his146', 'Allowed patrician-plebeian marriage', [
      'Military reform',
      'Tax law',
      'Religious decree',
    ]),
    level: 8,
  },
  {
    id: 'his147',
    text: 'Who established the Nanda Dynasty?',
    answers: A('his147', 'Mahapadma Nanda', [
      'Dhana Nanda',
      'Panduka',
      'Rashtrapala',
    ]),
    level: 8,
  },
  {
    id: 'his148',
    text: 'What was the Lex Ogulnia?',
    answers: A('his148', 'Plebeians eligible for priesthoods', [
      'Military reform',
      'Tax law',
      'Land distribution',
    ]),
    level: 8,
  },
  {
    id: 'his149',
    text: 'Who was the founder of the Haryanka Dynasty?',
    answers: A('his149', 'Bimbisara', ['Ajatashatru', 'Udayin', 'Shishunaga']),
    level: 8,
  },
  {
    id: 'his150',
    text: 'What was the significance of the Lex Licinia Sextia?',
    answers: A('his150', 'Plebeians eligible for consulship', [
      'Military reform',
      'Tax law',
      'Religious decree',
    ]),
    level: 8,
  },
  {
    id: 'his151',
    text: 'Who established the Shishunaga Dynasty?',
    answers: A('his151', 'Shishunaga', [
      'Kalashoka',
      'Nandivardhana',
      'Mahanandin',
    ]),
    level: 8,
  },
  {
    id: 'his152',
    text: 'What was the Lex Publilia?',
    answers: A('his152', 'Plebiscites required senatorial approval', [
      'Military reform',
      'Tax law',
      'Religious decree',
    ]),
    level: 8,
  },
  {
    id: 'his153',
    text: 'Who was the founder of the Brihadratha Dynasty?',
    answers: A('his153', 'Brihadratha', ['Jarasandha', 'Sahadeva', 'Somadhi']),
    level: 8,
  },
  {
    id: 'his154',
    text: 'What was the significance of the Lex Genucia?',
    answers: A('his154', 'Banned interest on loans', [
      'Military reform',
      'Land distribution',
      'Religious decree',
    ]),
    level: 8,
  },
  {
    id: 'his155',
    text: 'Who established the Pradyota Dynasty?',
    answers: A('his155', 'Pradyota', ['Palaka', 'Visakhayupa', 'Ajaka']),
    level: 8,
  },
  {
    id: 'his156',
    text: 'What was the Lex Poetelia Papiria?',
    answers: A('his156', 'Abolished debt bondage', [
      'Military reform',
      'Tax law',
      'Religious decree',
    ]),
    level: 8,
  },
  {
    id: 'his157',
    text: 'Who was the founder of the Avanti Kingdom?',
    answers: A('his157', 'Pradyota', [
      'Palaka',
      'Avantivardhana',
      'Nandivardhana',
    ]),
    level: 8,
  },
  {
    id: 'his158',
    text: 'What was the significance of the Lex Valeria de Provocatione?',
    answers: A('his158', 'Right of appeal to people', [
      'Military reform',
      'Tax law',
      'Religious decree',
    ]),
    level: 8,
  },
  {
    id: 'his159',
    text: 'Who established the Vatsa Kingdom?',
    answers: A('his159', 'Udayana', [
      'Shatanika',
      'Sahasranika',
      'Dridhavarman',
    ]),
    level: 8,
  },
  {
    id: 'his160',
    text: 'What was the Lex Villia Annalis?',
    answers: A('his160', 'Minimum ages for magistracies', [
      'Military reform',
      'Tax law',
      'Religious decree',
    ]),
    level: 8,
  },
];
