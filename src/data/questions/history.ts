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

  // ===== Additional Level 1 Questions =====
  {
    id: 'his161',
    text: 'What is the capital of France?',
    answers: A('his161', 'Paris', ['London', 'Berlin', 'Rome']),
    level: 1,
  },
  {
    id: 'his162',
    text: 'Who built the Great Wall of China?',
    answers: A('his162', 'Chinese emperors', ['Romans', 'Greeks', 'Egyptians']),
    level: 1,
  },
  {
    id: 'his163',
    text: 'What year did the Titanic sink?',
    answers: A('his163', '1912', ['1905', '1920', '1898']),
    level: 1,
  },
  {
    id: 'his164',
    text: 'Who was the first man on the moon?',
    answers: A('his164', 'Neil Armstrong', [
      'Buzz Aldrin',
      'John Glenn',
      'Yuri Gagarin',
    ]),
    level: 1,
  },
  {
    id: 'his165',
    text: 'What country gave the Statue of Liberty to America?',
    answers: A('his165', 'France', ['England', 'Spain', 'Italy']),
    level: 1,
  },
  {
    id: 'his166',
    text: 'Who painted the Mona Lisa?',
    answers: A('his166', 'Leonardo da Vinci', [
      'Michelangelo',
      'Raphael',
      'Picasso',
    ]),
    level: 1,
  },
  {
    id: 'his167',
    text: 'What ancient civilization built the pyramids?',
    answers: A('his167', 'Egyptians', ['Greeks', 'Romans', 'Mayans']),
    level: 1,
  },
  {
    id: 'his168',
    text: 'Who wrote the Declaration of Independence?',
    answers: A('his168', 'Thomas Jefferson', [
      'George Washington',
      'Benjamin Franklin',
      'John Adams',
    ]),
    level: 1,
  },
  {
    id: 'his169',
    text: 'What war was fought between the North and South in America?',
    answers: A('his169', 'Civil War', [
      'Revolutionary War',
      'World War I',
      'War of 1812',
    ]),
    level: 1,
  },
  {
    id: 'his170',
    text: 'Who was known as the King of Rock and Roll?',
    answers: A('his170', 'Elvis Presley', [
      'Michael Jackson',
      'Chuck Berry',
      'Little Richard',
    ]),
    level: 1,
  },
  {
    id: 'his171',
    text: 'What empire was ruled by Julius Caesar?',
    answers: A('his171', 'Roman Empire', [
      'Greek Empire',
      'Persian Empire',
      'Egyptian Empire',
    ]),
    level: 1,
  },
  {
    id: 'his172',
    text: 'Who was the first woman to fly solo across the Atlantic?',
    answers: A('his172', 'Amelia Earhart', [
      'Harriet Quimby',
      'Bessie Coleman',
      'Jacqueline Cochran',
    ]),
    level: 1,
  },
  {
    id: 'his173',
    text: 'What year did World War I begin?',
    answers: A('his173', '1914', ['1912', '1916', '1918']),
    level: 1,
  },
  {
    id: 'his174',
    text: 'Who was the leader of Nazi Germany?',
    answers: A('his174', 'Adolf Hitler', [
      'Benito Mussolini',
      'Joseph Stalin',
      'Winston Churchill',
    ]),
    level: 1,
  },
  {
    id: 'his175',
    text: 'What country was Napoleon Bonaparte from?',
    answers: A('his175', 'France', ['Italy', 'Spain', 'Germany']),
    level: 1,
  },
  {
    id: 'his176',
    text: 'Who invented the telephone?',
    answers: A('his176', 'Alexander Graham Bell', [
      'Thomas Edison',
      'Nikola Tesla',
      'Guglielmo Marconi',
    ]),
    level: 1,
  },
  {
    id: 'his177',
    text: 'What was the name of the first satellite in space?',
    answers: A('his177', 'Sputnik', ['Apollo', 'Explorer', 'Voyager']),
    level: 1,
  },
  {
    id: 'his178',
    text: 'Who was the British Prime Minister during World War II?',
    answers: A('his178', 'Winston Churchill', [
      'Neville Chamberlain',
      'Clement Attlee',
      'Anthony Eden',
    ]),
    level: 1,
  },
  {
    id: 'his179',
    text: 'What ancient city was destroyed by a volcano in 79 AD?',
    answers: A('his179', 'Pompeii', ['Rome', 'Athens', 'Carthage']),
    level: 1,
  },
  {
    id: 'his180',
    text: 'Who was the first President of South Africa after apartheid?',
    answers: A('his180', 'Nelson Mandela', [
      'F.W. de Klerk',
      'Thabo Mbeki',
      'Jacob Zuma',
    ]),
    level: 1,
  },

  // ===== Additional Level 2 Questions =====
  {
    id: 'his181',
    text: 'What was the Renaissance?',
    answers: A('his181', 'Cultural rebirth in Europe', [
      'A war',
      'A disease',
      'A religion',
    ]),
    level: 2,
  },
  {
    id: 'his182',
    text: 'Who was Cleopatra?',
    answers: A('his182', 'Queen of Egypt', [
      'Queen of Rome',
      'Queen of Greece',
      'Queen of Persia',
    ]),
    level: 2,
  },
  {
    id: 'his183',
    text: 'What was the Cold War?',
    answers: A('his183', 'Tension between USA and USSR', [
      'A war in Antarctica',
      'A medieval conflict',
      'A trade dispute',
    ]),
    level: 2,
  },
  {
    id: 'his184',
    text: 'Who was Martin Luther King Jr.?',
    answers: A('his184', 'Civil rights leader', [
      'President',
      'General',
      'Scientist',
    ]),
    level: 2,
  },
  {
    id: 'his185',
    text: 'What was the Industrial Revolution?',
    answers: A('his185', 'Shift to machine manufacturing', [
      'A political revolution',
      'A religious movement',
      'A war',
    ]),
    level: 2,
  },
  {
    id: 'his186',
    text: 'Who was Alexander the Great?',
    answers: A('his186', 'Macedonian conqueror', [
      'Roman emperor',
      'Egyptian pharaoh',
      'Persian king',
    ]),
    level: 2,
  },
  {
    id: 'his187',
    text: 'What was the Black Death?',
    answers: A('his187', 'Plague pandemic in 1300s', [
      'A war',
      'A famine',
      'An earthquake',
    ]),
    level: 2,
  },
  {
    id: 'his188',
    text: 'Who was Mahatma Gandhi?',
    answers: A('his188', 'Indian independence leader', [
      'Chinese leader',
      'African leader',
      'European leader',
    ]),
    level: 2,
  },
  {
    id: 'his189',
    text: 'What was the French Revolution?',
    answers: A('his189', 'Overthrow of French monarchy', [
      'A war with England',
      'A religious movement',
      'A trade agreement',
    ]),
    level: 2,
  },
  {
    id: 'his190',
    text: 'Who was Queen Victoria?',
    answers: A('his190', 'British monarch 1837-1901', [
      'French queen',
      'Spanish queen',
      'Russian empress',
    ]),
    level: 2,
  },
  {
    id: 'his191',
    text: 'What was the Silk Road?',
    answers: A('his191', 'Ancient trade route', [
      'A river',
      'A mountain range',
      'A type of fabric',
    ]),
    level: 2,
  },
  {
    id: 'his192',
    text: 'Who was Genghis Khan?',
    answers: A('his192', 'Mongol Empire founder', [
      'Chinese emperor',
      'Indian ruler',
      'Persian king',
    ]),
    level: 2,
  },
  {
    id: 'his193',
    text: 'What was the Boston Tea Party?',
    answers: A('his193', 'Protest against British taxes', [
      'A celebration',
      'A battle',
      'A treaty',
    ]),
    level: 2,
  },
  {
    id: 'his194',
    text: 'Who was Joan of Arc?',
    answers: A('his194', 'French military leader', [
      'English queen',
      'Spanish princess',
      'Italian artist',
    ]),
    level: 2,
  },
  {
    id: 'his195',
    text: 'What was the Reformation?',
    answers: A('his195', 'Religious movement against Catholic Church', [
      'A war',
      'A plague',
      'A trade route',
    ]),
    level: 2,
  },
  {
    id: 'his196',
    text: 'Who was Confucius?',
    answers: A('his196', 'Chinese philosopher', [
      'Japanese emperor',
      'Indian guru',
      'Korean king',
    ]),
    level: 2,
  },
  {
    id: 'his197',
    text: 'What was the Magna Carta?',
    answers: A('his197', 'Document limiting royal power', [
      'A map',
      'A weapon',
      'A ship',
    ]),
    level: 2,
  },
  {
    id: 'his198',
    text: 'Who was Charlemagne?',
    answers: A('his198', 'Holy Roman Emperor', [
      'French king only',
      'Pope',
      'Byzantine emperor',
    ]),
    level: 2,
  },
  {
    id: 'his199',
    text: 'What was the Crusades?',
    answers: A('his199', 'Religious wars for Holy Land', [
      'Trade expeditions',
      'Scientific missions',
      'Art movements',
    ]),
    level: 2,
  },
  {
    id: 'his200',
    text: 'Who was Marco Polo?',
    answers: A('his200', 'Venetian explorer to Asia', [
      'Spanish conquistador',
      'Portuguese navigator',
      'English pirate',
    ]),
    level: 2,
  },

  // ===== Additional Level 3 Questions =====
  {
    id: 'his201',
    text: 'What was the Treaty of Versailles?',
    answers: A('his201', 'Peace treaty ending WWI', [
      'Trade agreement',
      'Military alliance',
      'Colonial charter',
    ]),
    level: 3,
  },
  {
    id: 'his202',
    text: 'Who was Otto von Bismarck?',
    answers: A('his202', 'German unification leader', [
      'Austrian emperor',
      'French general',
      'Russian tsar',
    ]),
    level: 3,
  },
  {
    id: 'his203',
    text: 'What was the Meiji Restoration?',
    answers: A('his203', 'Japanese modernization', [
      'Chinese revolution',
      'Korean war',
      'Vietnamese independence',
    ]),
    level: 3,
  },
  {
    id: 'his204',
    text: 'Who was Simón Bolívar?',
    answers: A('his204', 'South American liberator', [
      'Mexican president',
      'Cuban revolutionary',
      'Brazilian emperor',
    ]),
    level: 3,
  },
  {
    id: 'his205',
    text: 'What was the Opium Wars?',
    answers: A('his205', 'British-Chinese conflicts over trade', [
      'American-Japanese war',
      'French-Indian war',
      'Spanish-Dutch war',
    ]),
    level: 3,
  },
  {
    id: 'his206',
    text: 'Who was Catherine the Great?',
    answers: A('his206', 'Russian empress', [
      'French queen',
      'English queen',
      'Spanish queen',
    ]),
    level: 3,
  },
  {
    id: 'his207',
    text: 'What was the Scramble for Africa?',
    answers: A('his207', 'European colonization of Africa', [
      'African civil war',
      'Trade competition',
      'Religious mission',
    ]),
    level: 3,
  },
  {
    id: 'his208',
    text: 'Who was Tokugawa Ieyasu?',
    answers: A('his208', 'Japanese shogun', [
      'Chinese emperor',
      'Korean king',
      'Mongol khan',
    ]),
    level: 3,
  },
  {
    id: 'his209',
    text: 'What was the Hundred Years War?',
    answers: A('his209', 'English-French conflict', [
      'German-Italian war',
      'Spanish-Portuguese war',
      'Russian-Polish war',
    ]),
    level: 3,
  },
  {
    id: 'his210',
    text: 'Who was Suleiman the Magnificent?',
    answers: A('his210', 'Ottoman sultan', [
      'Persian shah',
      'Mughal emperor',
      'Egyptian pharaoh',
    ]),
    level: 3,
  },
  {
    id: 'his211',
    text: 'What was the Thirty Years War?',
    answers: A('his211', 'European religious conflict', [
      'Asian trade war',
      'African colonial war',
      'American independence war',
    ]),
    level: 3,
  },
  {
    id: 'his212',
    text: 'Who was Peter the Great?',
    answers: A('his212', 'Russian tsar who modernized Russia', [
      'French king',
      'English king',
      'German emperor',
    ]),
    level: 3,
  },
  {
    id: 'his213',
    text: 'What was the Spanish Inquisition?',
    answers: A('his213', 'Religious persecution tribunal', [
      'Military campaign',
      'Trade organization',
      'Scientific academy',
    ]),
    level: 3,
  },
  {
    id: 'his214',
    text: 'Who was Akbar the Great?',
    answers: A('his214', 'Mughal emperor', [
      'Ottoman sultan',
      'Persian shah',
      'Chinese emperor',
    ]),
    level: 3,
  },
  {
    id: 'his215',
    text: 'What was the War of the Roses?',
    answers: A('his215', 'English civil war for throne', [
      'French revolution',
      'German unification',
      'Italian independence',
    ]),
    level: 3,
  },
  {
    id: 'his216',
    text: 'Who was Frederick the Great?',
    answers: A('his216', 'Prussian king', [
      'Austrian emperor',
      'Russian tsar',
      'French king',
    ]),
    level: 3,
  },
  {
    id: 'his217',
    text: 'What was the Glorious Revolution?',
    answers: A('his217', 'Bloodless English revolution', [
      'French revolution',
      'American revolution',
      'Russian revolution',
    ]),
    level: 3,
  },
  {
    id: 'his218',
    text: 'Who was Hernán Cortés?',
    answers: A('his218', 'Spanish conquistador of Aztecs', [
      'Portuguese explorer',
      'English colonizer',
      'French trader',
    ]),
    level: 3,
  },
  {
    id: 'his219',
    text: 'What was the Byzantine Empire?',
    answers: A('his219', 'Eastern Roman Empire', [
      'Western Roman Empire',
      'Greek Empire',
      'Persian Empire',
    ]),
    level: 3,
  },
  {
    id: 'his220',
    text: 'Who was Saladin?',
    answers: A('his220', 'Muslim leader during Crusades', [
      'Christian crusader',
      'Byzantine emperor',
      'Mongol khan',
    ]),
    level: 3,
  },

  // ===== Additional Level 4 Questions =====
  {
    id: 'his221',
    text: 'What was the Congress of Vienna?',
    answers: A('his221', 'Post-Napoleonic peace conference', [
      'Trade agreement',
      'Military alliance',
      'Religious council',
    ]),
    level: 4,
  },
  {
    id: 'his222',
    text: 'Who was Maximilien Robespierre?',
    answers: A('his222', 'French Revolution leader', [
      'Napoleon general',
      'English spy',
      'Austrian diplomat',
    ]),
    level: 4,
  },
  {
    id: 'his223',
    text: 'What was the Taiping Rebellion?',
    answers: A('his223', 'Chinese civil war 1850-1864', [
      'Japanese invasion',
      'Korean uprising',
      'Vietnamese revolution',
    ]),
    level: 4,
  },
  {
    id: 'his224',
    text: 'Who was Giuseppe Garibaldi?',
    answers: A('his224', 'Italian unification leader', [
      'French general',
      'Spanish king',
      'Austrian emperor',
    ]),
    level: 4,
  },
  {
    id: 'his225',
    text: 'What was the Sepoy Mutiny?',
    answers: A('his225', 'Indian rebellion against British', [
      'Chinese uprising',
      'African revolt',
      'Southeast Asian war',
    ]),
    level: 4,
  },
  {
    id: 'his226',
    text: 'Who was Klemens von Metternich?',
    answers: A('his226', 'Austrian statesman', [
      'Prussian general',
      'Russian diplomat',
      'French minister',
    ]),
    level: 4,
  },
  {
    id: 'his227',
    text: 'What was the Boxer Rebellion?',
    answers: A('his227', 'Chinese anti-foreign uprising', [
      'Japanese civil war',
      'Korean independence movement',
      'Vietnamese revolt',
    ]),
    level: 4,
  },
  {
    id: 'his228',
    text: 'Who was Toussaint Louverture?',
    answers: A('his228', 'Haitian revolution leader', [
      'Cuban revolutionary',
      'Mexican general',
      'Brazilian emperor',
    ]),
    level: 4,
  },
  {
    id: 'his229',
    text: 'What was the Dreyfus Affair?',
    answers: A('his229', 'French political scandal', [
      'German military crisis',
      'British spy case',
      'Russian revolution',
    ]),
    level: 4,
  },
  {
    id: 'his230',
    text: 'Who was Leopold II of Belgium?',
    answers: A('his230', 'Colonial ruler of Congo', [
      'French king',
      'Dutch emperor',
      'German kaiser',
    ]),
    level: 4,
  },
  {
    id: 'his231',
    text: 'What was the Zimmermann Telegram?',
    answers: A('his231', 'German message to Mexico in WWI', [
      'British code',
      'French treaty',
      'Russian alliance',
    ]),
    level: 4,
  },
  {
    id: 'his232',
    text: 'Who was Woodrow Wilson?',
    answers: A('his232', 'US President during WWI', [
      'British PM',
      'French President',
      'German Chancellor',
    ]),
    level: 4,
  },
  {
    id: 'his233',
    text: 'What was the Balfour Declaration?',
    answers: A('his233', 'British support for Jewish homeland', [
      'French colonial policy',
      'German war plan',
      'Russian treaty',
    ]),
    level: 4,
  },
  {
    id: 'his234',
    text: 'Who was Mustafa Kemal Atatürk?',
    answers: A('his234', 'Founder of modern Turkey', [
      'Persian shah',
      'Egyptian king',
      'Iraqi leader',
    ]),
    level: 4,
  },
  {
    id: 'his235',
    text: 'What was the Weimar Republic?',
    answers: A('his235', 'German democracy 1919-1933', [
      'Austrian empire',
      'French republic',
      'Italian kingdom',
    ]),
    level: 4,
  },
  {
    id: 'his236',
    text: 'Who was Benito Mussolini?',
    answers: A('his236', 'Italian fascist dictator', [
      'Spanish general',
      'Portuguese leader',
      'Greek king',
    ]),
    level: 4,
  },
  {
    id: 'his237',
    text: 'What was the Spanish Civil War?',
    answers: A('his237', 'Conflict between Republicans and Nationalists', [
      'Colonial war',
      'Religious war',
      'Trade war',
    ]),
    level: 4,
  },
  {
    id: 'his238',
    text: 'Who was Francisco Franco?',
    answers: A('his238', 'Spanish dictator', [
      'Portuguese leader',
      'Italian general',
      'Greek king',
    ]),
    level: 4,
  },
  {
    id: 'his239',
    text: 'What was the Munich Agreement?',
    answers: A('his239', 'Appeasement of Hitler', [
      'Trade deal',
      'Military alliance',
      'Peace treaty',
    ]),
    level: 4,
  },
  {
    id: 'his240',
    text: 'Who was Neville Chamberlain?',
    answers: A('his240', 'British PM who appeased Hitler', [
      'French President',
      'German Chancellor',
      'Italian PM',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'his241',
    text: 'What was the Molotov-Ribbentrop Pact?',
    answers: A('his241', 'Nazi-Soviet non-aggression pact', [
      'Allied treaty',
      'Trade agreement',
      'Military alliance',
    ]),
    level: 5,
  },
  {
    id: 'his242',
    text: 'What was Operation Barbarossa?',
    answers: A('his242', 'German invasion of USSR', [
      'Allied D-Day',
      'Japanese attack',
      'Italian campaign',
    ]),
    level: 5,
  },
  {
    id: 'his243',
    text: 'What was the Manhattan Project?',
    answers: A('his243', 'US atomic bomb development', [
      'British radar project',
      'German rocket program',
      'Soviet space program',
    ]),
    level: 5,
  },
  {
    id: 'his244',
    text: 'What was the Yalta Conference?',
    answers: A('his244', 'Allied leaders meeting 1945', [
      'Peace treaty',
      'Trade summit',
      'Military planning',
    ]),
    level: 5,
  },
  {
    id: 'his245',
    text: 'What was the Nuremberg Trials?',
    answers: A('his245', 'Nazi war crimes tribunal', [
      'Peace conference',
      'Trade negotiations',
      'Military court',
    ]),
    level: 5,
  },
  {
    id: 'his246',
    text: 'What was the Marshall Plan?',
    answers: A('his246', 'US aid to rebuild Europe', [
      'Military alliance',
      'Trade agreement',
      'Immigration policy',
    ]),
    level: 5,
  },
  {
    id: 'his247',
    text: 'What was the Berlin Airlift?',
    answers: A('his247', 'Western supply of blockaded Berlin', [
      'Military invasion',
      'Trade embargo',
      'Diplomatic mission',
    ]),
    level: 5,
  },
  {
    id: 'his248',
    text: 'What was the Korean War?',
    answers: A('his248', 'Conflict between North and South Korea', [
      'Chinese civil war',
      'Japanese invasion',
      'Vietnamese war',
    ]),
    level: 5,
  },
  {
    id: 'his249',
    text: 'What was the Suez Crisis?',
    answers: A('his249', 'Egyptian nationalization conflict', [
      'Israeli war',
      'Syrian uprising',
      'Lebanese civil war',
    ]),
    level: 5,
  },
  {
    id: 'his250',
    text: 'What was the Cuban Missile Crisis?',
    answers: A('his250', 'US-Soviet nuclear standoff', [
      'Trade dispute',
      'Immigration crisis',
      'Military exercise',
    ]),
    level: 5,
  },
  {
    id: 'his251',
    text: 'What was the Gulf of Tonkin Resolution?',
    answers: A('his251', 'US authorization for Vietnam War', [
      'Peace treaty',
      'Trade agreement',
      'Immigration law',
    ]),
    level: 6,
  },
  {
    id: 'his252',
    text: 'What was the Tet Offensive?',
    answers: A('his252', 'North Vietnamese attack 1968', [
      'US invasion',
      'Peace negotiation',
      'Trade embargo',
    ]),
    level: 6,
  },
  {
    id: 'his253',
    text: 'What was the Prague Spring?',
    answers: A('his253', 'Czechoslovak liberalization 1968', [
      'Polish uprising',
      'Hungarian revolution',
      'East German protest',
    ]),
    level: 6,
  },
  {
    id: 'his254',
    text: 'What was the Camp David Accords?',
    answers: A('his254', 'Egyptian-Israeli peace agreement', [
      'Syrian treaty',
      'Lebanese accord',
      'Jordanian pact',
    ]),
    level: 6,
  },
  {
    id: 'his255',
    text: 'What was the Iranian Revolution?',
    answers: A('his255', 'Overthrow of Shah 1979', [
      'Iraqi coup',
      'Afghan war',
      'Pakistani crisis',
    ]),
    level: 6,
  },
  {
    id: 'his256',
    text: 'What was Solidarity?',
    answers: A('his256', 'Polish trade union movement', [
      'Soviet policy',
      'German party',
      'Czech organization',
    ]),
    level: 6,
  },
  {
    id: 'his257',
    text: 'What was Glasnost?',
    answers: A('his257', 'Soviet openness policy', [
      'Economic reform',
      'Military strategy',
      'Foreign policy',
    ]),
    level: 6,
  },
  {
    id: 'his258',
    text: 'What was Perestroika?',
    answers: A('his258', 'Soviet economic restructuring', [
      'Political openness',
      'Military reform',
      'Foreign policy',
    ]),
    level: 6,
  },
  {
    id: 'his259',
    text: 'What was the Tiananmen Square Massacre?',
    answers: A('his259', 'Chinese government crackdown 1989', [
      'Cultural Revolution',
      'Great Leap Forward',
      'Long March',
    ]),
    level: 6,
  },
  {
    id: 'his260',
    text: 'What was the fall of the Berlin Wall?',
    answers: A('his260', 'End of divided Berlin 1989', [
      'Start of Cold War',
      'German unification',
      'Soviet collapse',
    ]),
    level: 6,
  },
  {
    id: 'his261',
    text: 'What was the Sykes-Picot Agreement?',
    answers: A('his261', 'Secret WWI Middle East division', [
      'Peace treaty',
      'Trade agreement',
      'Military alliance',
    ]),
    level: 7,
  },
  {
    id: 'his262',
    text: 'What was the Dawes Plan?',
    answers: A('his262', 'German reparations restructuring', [
      'Military alliance',
      'Trade agreement',
      'Immigration policy',
    ]),
    level: 7,
  },
  {
    id: 'his263',
    text: 'What was the Kellogg-Briand Pact?',
    answers: A('his263', 'Agreement to outlaw war', [
      'Military alliance',
      'Trade treaty',
      'Colonial agreement',
    ]),
    level: 7,
  },
  {
    id: 'his264',
    text: 'What was the Lateran Treaty?',
    answers: A('his264', 'Vatican-Italy agreement', [
      'French-German treaty',
      'British-Spanish pact',
      'Austrian-Hungarian accord',
    ]),
    level: 7,
  },
  {
    id: 'his265',
    text: 'What was the Locarno Treaties?',
    answers: A('his265', 'European border guarantees', [
      'Trade agreements',
      'Military alliances',
      'Colonial divisions',
    ]),
    level: 7,
  },
  {
    id: 'his266',
    text: 'What was the Rapallo Treaty?',
    answers: A('his266', 'German-Soviet agreement 1922', [
      'French-British pact',
      'Italian-Austrian treaty',
      'Polish-Czech accord',
    ]),
    level: 7,
  },
  {
    id: 'his267',
    text: 'What was the Hoare-Laval Pact?',
    answers: A('his267', 'Failed Ethiopian partition plan', [
      'Trade agreement',
      'Military alliance',
      'Peace treaty',
    ]),
    level: 7,
  },
  {
    id: 'his268',
    text: 'What was the Anti-Comintern Pact?',
    answers: A('his268', 'German-Japanese anti-communist agreement', [
      'Trade treaty',
      'Peace accord',
      'Colonial division',
    ]),
    level: 7,
  },
  {
    id: 'his269',
    text: 'What was the Tripartite Pact?',
    answers: A('his269', 'Axis powers alliance', [
      'Allied agreement',
      'Neutral pact',
      'Trade treaty',
    ]),
    level: 7,
  },
  {
    id: 'his270',
    text: 'What was the Atlantic Charter?',
    answers: A('his270', 'US-British war aims statement', [
      'Peace treaty',
      'Trade agreement',
      'Military alliance',
    ]),
    level: 7,
  },
  {
    id: 'his271',
    text: 'What was the Potsdam Conference?',
    answers: A('his271', 'Allied meeting on post-war Germany', [
      'Peace treaty',
      'Trade summit',
      'Military planning',
    ]),
    level: 8,
  },
  {
    id: 'his272',
    text: 'What was the Truman Doctrine?',
    answers: A('his272', 'US policy to contain communism', [
      'Trade policy',
      'Immigration law',
      'Military strategy',
    ]),
    level: 8,
  },
  {
    id: 'his273',
    text: 'What was the Brezhnev Doctrine?',
    answers: A('his273', 'Soviet right to intervene in socialist states', [
      'Economic policy',
      'Trade agreement',
      'Military strategy',
    ]),
    level: 8,
  },
  {
    id: 'his274',
    text: 'What was the Nixon Doctrine?',
    answers: A('his274', 'US allies should defend themselves', [
      'Trade policy',
      'Immigration law',
      'Economic plan',
    ]),
    level: 8,
  },
  {
    id: 'his275',
    text: 'What was the Carter Doctrine?',
    answers: A('his275', 'US would defend Persian Gulf', [
      'Trade policy',
      'Immigration law',
      'Economic plan',
    ]),
    level: 8,
  },
  {
    id: 'his276',
    text: 'What was the Reagan Doctrine?',
    answers: A('his276', 'US support for anti-communist movements', [
      'Trade policy',
      'Immigration law',
      'Economic plan',
    ]),
    level: 8,
  },
  {
    id: 'his277',
    text: 'What was the Bush Doctrine?',
    answers: A('his277', 'Preemptive war against terrorists', [
      'Trade policy',
      'Immigration law',
      'Economic plan',
    ]),
    level: 8,
  },
  {
    id: 'his278',
    text: 'What was the Domino Theory?',
    answers: A('his278', 'Fear of spreading communism', [
      'Economic theory',
      'Military strategy',
      'Trade policy',
    ]),
    level: 8,
  },
  {
    id: 'his279',
    text: 'What was Containment?',
    answers: A('his279', 'US policy to stop communist expansion', [
      'Trade policy',
      'Immigration law',
      'Economic plan',
    ]),
    level: 8,
  },
  {
    id: 'his280',
    text: 'What was Détente?',
    answers: A('his280', 'Easing of Cold War tensions', [
      'Military buildup',
      'Trade war',
      'Diplomatic crisis',
    ]),
    level: 8,
  },
  // ===== Additional Level 1 Questions (continued) =====
  {
    id: 'his281',
    text: 'What is history?',
    answers: A('his281', 'Study of the past', [
      'Study of the future',
      'Study of science',
      'Study of math',
    ]),
    level: 1,
  },
  {
    id: 'his282',
    text: 'What is an artifact?',
    answers: A('his282', 'Object from the past', [
      'Object from the future',
      'Natural object',
      'Modern object',
    ]),
    level: 1,
  },
  {
    id: 'his283',
    text: 'What is archaeology?',
    answers: A('his283', 'Study of ancient remains', [
      'Study of stars',
      'Study of animals',
      'Study of plants',
    ]),
    level: 1,
  },
  {
    id: 'his284',
    text: 'What is a civilization?',
    answers: A('his284', 'Advanced human society', [
      'Animal group',
      'Plant group',
      'Rock formation',
    ]),
    level: 1,
  },
  {
    id: 'his285',
    text: 'What is a dynasty?',
    answers: A('his285', 'Ruling family line', [
      'Single ruler',
      'No rulers',
      'Random rulers',
    ]),
    level: 1,
  },
  {
    id: 'his286',
    text: 'What is an empire?',
    answers: A('his286', 'Large territory under one ruler', [
      'Small village',
      'Single city',
      'No territory',
    ]),
    level: 1,
  },
  {
    id: 'his287',
    text: 'What is a kingdom?',
    answers: A('his287', 'Territory ruled by king or queen', [
      'Territory with no ruler',
      'Modern country',
      'Ancient tribe',
    ]),
    level: 1,
  },
  {
    id: 'his288',
    text: 'What is a republic?',
    answers: A('his288', 'Government without monarch', [
      'Government with king',
      'No government',
      'Random government',
    ]),
    level: 1,
  },
  {
    id: 'his289',
    text: 'What is democracy?',
    answers: A('his289', 'Rule by the people', [
      'Rule by one person',
      'Rule by few',
      'No rule',
    ]),
    level: 1,
  },
  {
    id: 'his290',
    text: 'What is a monarchy?',
    answers: A('his290', 'Rule by king or queen', [
      'Rule by people',
      'Rule by elected officials',
      'No rule',
    ]),
    level: 1,
  },
  {
    id: 'his291',
    text: 'What is a dictator?',
    answers: A('his291', 'Ruler with absolute power', [
      'Elected leader',
      'No leader',
      'Weak leader',
    ]),
    level: 1,
  },
  {
    id: 'his292',
    text: 'What is a revolution?',
    answers: A('his292', 'Overthrow of government', [
      'Peaceful change',
      'No change',
      'Small change',
    ]),
    level: 1,
  },
  {
    id: 'his293',
    text: 'What is a war?',
    answers: A('his293', 'Armed conflict between groups', [
      'Peaceful discussion',
      'Trade agreement',
      'Sports competition',
    ]),
    level: 1,
  },
  {
    id: 'his294',
    text: 'What is a treaty?',
    answers: A('his294', 'Agreement between nations', [
      'Declaration of war',
      'Trade embargo',
      'No agreement',
    ]),
    level: 1,
  },
  {
    id: 'his295',
    text: 'What is colonization?',
    answers: A('his295', 'Settling and controlling territory', [
      'Leaving territory',
      'Trading with territory',
      'Ignoring territory',
    ]),
    level: 1,
  },
  {
    id: 'his296',
    text: 'What is independence?',
    answers: A('his296', 'Freedom from foreign rule', [
      'Being ruled by others',
      'No government',
      'Random rule',
    ]),
    level: 1,
  },
  {
    id: 'his297',
    text: 'What is a constitution?',
    answers: A('his297', 'Fundamental laws of nation', [
      'Single law',
      'No laws',
      'Random rules',
    ]),
    level: 1,
  },
  {
    id: 'his298',
    text: 'What is slavery?',
    answers: A('his298', 'Owning people as property', [
      'Paying workers',
      'No workers',
      'Free labor',
    ]),
    level: 1,
  },
  {
    id: 'his299',
    text: 'What is abolition?',
    answers: A('his299', 'Ending slavery', [
      'Starting slavery',
      'Continuing slavery',
      'Ignoring slavery',
    ]),
    level: 1,
  },
  {
    id: 'his300',
    text: 'What is immigration?',
    answers: A('his300', 'Moving to new country', [
      'Staying in same country',
      'Leaving country',
      'No movement',
    ]),
    level: 1,
  },

  // ===== Additional Level 2 Questions (continued) =====
  {
    id: 'his301',
    text: 'What was the Stone Age?',
    answers: A('his301', 'Period using stone tools', [
      'Period using metal',
      'Period using plastic',
      'Modern period',
    ]),
    level: 2,
  },
  {
    id: 'his302',
    text: 'What was the Bronze Age?',
    answers: A('his302', 'Period using bronze tools', [
      'Period using stone',
      'Period using iron',
      'Modern period',
    ]),
    level: 2,
  },
  {
    id: 'his303',
    text: 'What was the Iron Age?',
    answers: A('his303', 'Period using iron tools', [
      'Period using stone',
      'Period using bronze',
      'Modern period',
    ]),
    level: 2,
  },
  {
    id: 'his304',
    text: 'What was the Middle Ages?',
    answers: A('his304', 'Period between ancient and modern', [
      'Ancient period',
      'Modern period',
      'Future period',
    ]),
    level: 2,
  },
  {
    id: 'his305',
    text: 'What was feudalism?',
    answers: A('his305', 'Medieval social system', [
      'Modern democracy',
      'Ancient republic',
      'No system',
    ]),
    level: 2,
  },
  {
    id: 'his306',
    text: 'What was a knight?',
    answers: A('his306', 'Medieval mounted warrior', [
      'Modern soldier',
      'Ancient farmer',
      'No warrior',
    ]),
    level: 2,
  },
  {
    id: 'his307',
    text: 'What was a castle?',
    answers: A('his307', 'Fortified medieval residence', [
      'Modern house',
      'Ancient tent',
      'No building',
    ]),
    level: 2,
  },
  {
    id: 'his308',
    text: 'What was the Renaissance?',
    answers: A('his308', 'Cultural rebirth in Europe', [
      'Dark ages',
      'Modern era',
      'Ancient times',
    ]),
    level: 2,
  },
  {
    id: 'his309',
    text: 'What was the Enlightenment?',
    answers: A('his309', 'Age of reason and science', [
      'Age of religion',
      'Age of war',
      'Age of darkness',
    ]),
    level: 2,
  },
  {
    id: 'his310',
    text: 'What was the Industrial Revolution?',
    answers: A('his310', 'Shift to machine manufacturing', [
      'Agricultural revolution',
      'Political revolution',
      'No revolution',
    ]),
    level: 2,
  },
  {
    id: 'his311',
    text: 'What was imperialism?',
    answers: A('his311', 'Extending national power', [
      'Isolationism',
      'Pacifism',
      'No expansion',
    ]),
    level: 2,
  },
  {
    id: 'his312',
    text: 'What was nationalism?',
    answers: A('his312', 'Pride in ones nation', [
      'No national pride',
      'Internationalism',
      'Globalism',
    ]),
    level: 2,
  },
  {
    id: 'his313',
    text: 'What was communism?',
    answers: A('his313', 'System of collective ownership', [
      'Capitalism',
      'Feudalism',
      'No system',
    ]),
    level: 2,
  },
  {
    id: 'his314',
    text: 'What was capitalism?',
    answers: A('his314', 'System of private ownership', [
      'Communism',
      'Feudalism',
      'No system',
    ]),
    level: 2,
  },
  {
    id: 'his315',
    text: 'What was fascism?',
    answers: A('his315', 'Authoritarian nationalist ideology', [
      'Democracy',
      'Communism',
      'Liberalism',
    ]),
    level: 2,
  },
  {
    id: 'his316',
    text: 'What was the Holocaust?',
    answers: A('his316', 'Nazi genocide of Jews', [
      'World War I',
      'Cold War',
      'Trade war',
    ]),
    level: 2,
  },
  {
    id: 'his317',
    text: 'What was apartheid?',
    answers: A('his317', 'South African racial segregation', [
      'Integration',
      'Democracy',
      'Freedom',
    ]),
    level: 2,
  },
  {
    id: 'his318',
    text: 'What was the Civil Rights Movement?',
    answers: A('his318', 'Fight for racial equality', [
      'Fight for war',
      'Fight for trade',
      'No fight',
    ]),
    level: 2,
  },
  {
    id: 'his319',
    text: 'What was the Space Race?',
    answers: A('his319', 'US-Soviet competition in space', [
      'Trade competition',
      'Military war',
      'Sports competition',
    ]),
    level: 2,
  },
  {
    id: 'his320',
    text: 'What was the Berlin Wall?',
    answers: A('his320', 'Wall dividing East and West Berlin', [
      'Wall in China',
      'Wall in Rome',
      'No wall',
    ]),
    level: 2,
  },
];
