import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const literatureQuestions: Question[] = [
  // ===== LEVEL 1: Very Easy =====
  {
    id: 'lit1',
    text: 'Who wrote "Romeo and Juliet"?',
    answers: A('lit1', 'William Shakespeare', [
      'Charles Dickens',
      'Jane Austen',
      'Mark Twain',
    ]),
    level: 1,
  },
  {
    id: 'lit2',
    text: "What is the name of Harry Potter's best friend?",
    answers: A('lit2', 'Ron Weasley', [
      'Draco Malfoy',
      'Neville Longbottom',
      'Cedric Diggory',
    ]),
    level: 1,
  },
  {
    id: 'lit3',
    text: 'Who wrote "The Cat in the Hat"?',
    answers: A('lit3', 'Dr. Seuss', [
      'Roald Dahl',
      'Eric Carle',
      'Maurice Sendak',
    ]),
    level: 1,
  },
  {
    id: 'lit4',
    text: 'What animal is Winnie the Pooh?',
    answers: A('lit4', 'Bear', ['Pig', 'Tiger', 'Rabbit']),
    level: 1,
  },
  {
    id: 'lit5',
    text: 'Who wrote "Charlie and the Chocolate Factory"?',
    answers: A('lit5', 'Roald Dahl', [
      'Dr. Seuss',
      'J.K. Rowling',
      'C.S. Lewis',
    ]),
    level: 1,
  },
  {
    id: 'lit6',
    text: 'What is the name of the lion in "The Chronicles of Narnia"?',
    answers: A('lit6', 'Aslan', ['Simba', 'Mufasa', 'Scar']),
    level: 1,
  },
  {
    id: 'lit7',
    text: 'Who wrote "The Very Hungry Caterpillar"?',
    answers: A('lit7', 'Eric Carle', [
      'Dr. Seuss',
      'Maurice Sendak',
      'Shel Silverstein',
    ]),
    level: 1,
  },
  {
    id: 'lit8',
    text: 'What is the name of Dorothy\'s dog in "The Wizard of Oz"?',
    answers: A('lit8', 'Toto', ['Max', 'Buddy', 'Rex']),
    level: 1,
  },
  {
    id: 'lit9',
    text: 'Who wrote "Green Eggs and Ham"?',
    answers: A('lit9', 'Dr. Seuss', [
      'Roald Dahl',
      'Eric Carle',
      'Shel Silverstein',
    ]),
    level: 1,
  },
  {
    id: 'lit10',
    text: 'What is the name of the boy who never grows up?',
    answers: A('lit10', 'Peter Pan', [
      'Pinocchio',
      'Tom Sawyer',
      'Oliver Twist',
    ]),
    level: 1,
  },
  {
    id: 'lit11',
    text: 'Who wrote "Alice in Wonderland"?',
    answers: A('lit11', 'Lewis Carroll', [
      'J.M. Barrie',
      'Hans Christian Andersen',
      'Brothers Grimm',
    ]),
    level: 1,
  },
  {
    id: 'lit12',
    text: 'What is the name of the wooden puppet who wants to be a real boy?',
    answers: A('lit12', 'Pinocchio', [
      'Peter Pan',
      'Geppetto',
      'Jiminy Cricket',
    ]),
    level: 1,
  },
  {
    id: 'lit13',
    text: 'Who wrote "The Jungle Book"?',
    answers: A('lit13', 'Rudyard Kipling', [
      'Jack London',
      'Mark Twain',
      'Robert Louis Stevenson',
    ]),
    level: 1,
  },
  {
    id: 'lit14',
    text: 'What is the name of the boy raised by wolves?',
    answers: A('lit14', 'Mowgli', ['Tarzan', 'Simba', 'Baloo']),
    level: 1,
  },
  {
    id: 'lit15',
    text: 'Who wrote "Charlotte\'s Web"?',
    answers: A('lit15', 'E.B. White', [
      'Roald Dahl',
      'Beverly Cleary',
      'Judy Blume',
    ]),
    level: 1,
  },
  {
    id: 'lit16',
    text: 'What type of animal is Charlotte in "Charlotte\'s Web"?',
    answers: A('lit16', 'Spider', ['Pig', 'Rat', 'Goose']),
    level: 1,
  },
  {
    id: 'lit17',
    text: 'Who wrote "The Little Prince"?',
    answers: A('lit17', 'Antoine de Saint-Exupéry', [
      'Victor Hugo',
      'Alexandre Dumas',
      'Jules Verne',
    ]),
    level: 1,
  },
  {
    id: 'lit18',
    text: 'What is the name of the pig in "Charlotte\'s Web"?',
    answers: A('lit18', 'Wilbur', ['Babe', 'Porky', 'Piglet']),
    level: 1,
  },
  {
    id: 'lit19',
    text: 'Who wrote "Matilda"?',
    answers: A('lit19', 'Roald Dahl', [
      'J.K. Rowling',
      'Judy Blume',
      'Beverly Cleary',
    ]),
    level: 1,
  },
  {
    id: 'lit20',
    text: 'What is the name of the school in Harry Potter?',
    answers: A('lit20', 'Hogwarts', ['Narnia', 'Neverland', 'Wonderland']),
    level: 1,
  },
  {
    id: 'lit21',
    text: 'Who wrote "The BFG"?',
    answers: A('lit21', 'Roald Dahl', [
      'Dr. Seuss',
      'C.S. Lewis',
      'J.R.R. Tolkien',
    ]),
    level: 1,
  },
  {
    id: 'lit22',
    text: 'What does BFG stand for?',
    answers: A('lit22', 'Big Friendly Giant', [
      'Big Fat Giant',
      'Best Friend Giant',
      'Brave Friendly Giant',
    ]),
    level: 1,
  },
  {
    id: 'lit23',
    text: 'Who wrote "James and the Giant Peach"?',
    answers: A('lit23', 'Roald Dahl', [
      'Dr. Seuss',
      'Eric Carle',
      'Maurice Sendak',
    ]),
    level: 1,
  },
  {
    id: 'lit24',
    text: 'What fruit does James travel in?',
    answers: A('lit24', 'Peach', ['Apple', 'Orange', 'Watermelon']),
    level: 1,
  },
  {
    id: 'lit25',
    text: 'Who wrote "Where the Wild Things Are"?',
    answers: A('lit25', 'Maurice Sendak', [
      'Dr. Seuss',
      'Eric Carle',
      'Shel Silverstein',
    ]),
    level: 1,
  },
  {
    id: 'lit26',
    text: 'What is the name of the boy in "Where the Wild Things Are"?',
    answers: A('lit26', 'Max', ['Sam', 'Jack', 'Tom']),
    level: 1,
  },
  {
    id: 'lit27',
    text: 'Who wrote "Goodnight Moon"?',
    answers: A('lit27', 'Margaret Wise Brown', [
      'Dr. Seuss',
      'Eric Carle',
      'Maurice Sendak',
    ]),
    level: 1,
  },
  {
    id: 'lit28',
    text: 'Who wrote "The Giving Tree"?',
    answers: A('lit28', 'Shel Silverstein', [
      'Dr. Seuss',
      'Eric Carle',
      'Maurice Sendak',
    ]),
    level: 1,
  },
  {
    id: 'lit29',
    text: 'What is the name of the hobbit in "The Hobbit"?',
    answers: A('lit29', 'Bilbo Baggins', [
      'Frodo Baggins',
      'Samwise Gamgee',
      'Gandalf',
    ]),
    level: 1,
  },
  {
    id: 'lit30',
    text: 'Who wrote "The Hobbit"?',
    answers: A('lit30', 'J.R.R. Tolkien', [
      'C.S. Lewis',
      'J.K. Rowling',
      'George R.R. Martin',
    ]),
    level: 1,
  },
  {
    id: 'lit31',
    text: 'What is the name of the wizard in "The Lord of the Rings"?',
    answers: A('lit31', 'Gandalf', ['Dumbledore', 'Merlin', 'Saruman']),
    level: 1,
  },
  {
    id: 'lit32',
    text: 'Who wrote "A Christmas Carol"?',
    answers: A('lit32', 'Charles Dickens', [
      'William Shakespeare',
      'Jane Austen',
      'Mark Twain',
    ]),
    level: 1,
  },
  {
    id: 'lit33',
    text: 'What is the name of the miser in "A Christmas Carol"?',
    answers: A('lit33', 'Ebenezer Scrooge', [
      'Bob Cratchit',
      'Tiny Tim',
      'Jacob Marley',
    ]),
    level: 1,
  },
  {
    id: 'lit34',
    text: 'Who wrote "Treasure Island"?',
    answers: A('lit34', 'Robert Louis Stevenson', [
      'Mark Twain',
      'Jack London',
      'Herman Melville',
    ]),
    level: 1,
  },
  {
    id: 'lit35',
    text: 'What is the name of the one-legged pirate in "Treasure Island"?',
    answers: A('lit35', 'Long John Silver', [
      'Captain Hook',
      'Blackbeard',
      'Jack Sparrow',
    ]),
    level: 1,
  },
  {
    id: 'lit36',
    text: 'Who wrote "The Adventures of Tom Sawyer"?',
    answers: A('lit36', 'Mark Twain', [
      'Charles Dickens',
      'Jack London',
      'Herman Melville',
    ]),
    level: 1,
  },
  {
    id: 'lit37',
    text: "What is the name of Tom Sawyer's best friend?",
    answers: A('lit37', 'Huckleberry Finn', [
      'Joe Harper',
      'Sid Sawyer',
      'Injun Joe',
    ]),
    level: 1,
  },
  {
    id: 'lit38',
    text: 'Who wrote "The Call of the Wild"?',
    answers: A('lit38', 'Jack London', [
      'Mark Twain',
      'Ernest Hemingway',
      'John Steinbeck',
    ]),
    level: 1,
  },
  {
    id: 'lit39',
    text: 'What type of animal is Buck in "The Call of the Wild"?',
    answers: A('lit39', 'Dog', ['Wolf', 'Bear', 'Horse']),
    level: 1,
  },
  {
    id: 'lit40',
    text: 'Who wrote "Anne of Green Gables"?',
    answers: A('lit40', 'L.M. Montgomery', [
      'Louisa May Alcott',
      'Laura Ingalls Wilder',
      'Frances Hodgson Burnett',
    ]),
    level: 1,
  },
  {
    id: 'lit41',
    text: 'What color is Anne\'s hair in "Anne of Green Gables"?',
    answers: A('lit41', 'Red', ['Brown', 'Blonde', 'Black']),
    level: 1,
  },
  {
    id: 'lit42',
    text: 'Who wrote "Little Women"?',
    answers: A('lit42', 'Louisa May Alcott', [
      'L.M. Montgomery',
      'Jane Austen',
      'Charlotte Brontë',
    ]),
    level: 1,
  },
  {
    id: 'lit43',
    text: 'How many March sisters are there in "Little Women"?',
    answers: A('lit43', 'Four', ['Three', 'Five', 'Two']),
    level: 1,
  },
  {
    id: 'lit44',
    text: 'Who wrote "The Secret Garden"?',
    answers: A('lit44', 'Frances Hodgson Burnett', [
      'L.M. Montgomery',
      'Louisa May Alcott',
      'E. Nesbit',
    ]),
    level: 1,
  },
  {
    id: 'lit45',
    text: 'What is the name of the girl in "The Secret Garden"?',
    answers: A('lit45', 'Mary Lennox', [
      'Sara Crewe',
      'Anne Shirley',
      'Jo March',
    ]),
    level: 1,
  },
  {
    id: 'lit46',
    text: 'Who wrote "Black Beauty"?',
    answers: A('lit46', 'Anna Sewell', [
      'Jack London',
      'Walter Farley',
      'Marguerite Henry',
    ]),
    level: 1,
  },
  {
    id: 'lit47',
    text: 'What type of animal is Black Beauty?',
    answers: A('lit47', 'Horse', ['Dog', 'Cat', 'Cow']),
    level: 1,
  },
  {
    id: 'lit48',
    text: 'Who wrote "The Wind in the Willows"?',
    answers: A('lit48', 'Kenneth Grahame', [
      'Beatrix Potter',
      'A.A. Milne',
      'E.B. White',
    ]),
    level: 1,
  },
  {
    id: 'lit49',
    text: 'What type of animal is Mr. Toad in "The Wind in the Willows"?',
    answers: A('lit49', 'Toad', ['Frog', 'Rat', 'Mole']),
    level: 1,
  },
  {
    id: 'lit50',
    text: 'Who wrote "Stuart Little"?',
    answers: A('lit50', 'E.B. White', [
      'Roald Dahl',
      'Beverly Cleary',
      'Judy Blume',
    ]),
    level: 1,
  },

  // ===== LEVEL 2: Easy =====
  {
    id: 'lit51',
    text: 'Who wrote "Pride and Prejudice"?',
    answers: A('lit51', 'Jane Austen', [
      'Charlotte Brontë',
      'Emily Brontë',
      'George Eliot',
    ]),
    level: 2,
  },
  {
    id: 'lit52',
    text: 'What is the name of the main character in "Pride and Prejudice"?',
    answers: A('lit52', 'Elizabeth Bennet', [
      'Jane Bennet',
      'Emma Woodhouse',
      'Fanny Price',
    ]),
    level: 2,
  },
  {
    id: 'lit53',
    text: 'Who wrote "Jane Eyre"?',
    answers: A('lit53', 'Charlotte Brontë', [
      'Emily Brontë',
      'Jane Austen',
      'George Eliot',
    ]),
    level: 2,
  },
  {
    id: 'lit54',
    text: 'Who wrote "Wuthering Heights"?',
    answers: A('lit54', 'Emily Brontë', [
      'Charlotte Brontë',
      'Jane Austen',
      'George Eliot',
    ]),
    level: 2,
  },
  {
    id: 'lit55',
    text: 'What is the name of the estate in "Wuthering Heights"?',
    answers: A('lit55', 'Wuthering Heights', [
      'Thornfield Hall',
      'Pemberley',
      'Mansfield Park',
    ]),
    level: 2,
  },
  {
    id: 'lit56',
    text: 'Who wrote "Great Expectations"?',
    answers: A('lit56', 'Charles Dickens', [
      'Thomas Hardy',
      'George Eliot',
      'William Thackeray',
    ]),
    level: 2,
  },
  {
    id: 'lit57',
    text: 'What is the name of the main character in "Great Expectations"?',
    answers: A('lit57', 'Pip', ['Oliver', 'David', 'Nicholas']),
    level: 2,
  },
  {
    id: 'lit58',
    text: 'Who wrote "Oliver Twist"?',
    answers: A('lit58', 'Charles Dickens', [
      'Thomas Hardy',
      'George Eliot',
      'William Thackeray',
    ]),
    level: 2,
  },
  {
    id: 'lit59',
    text: 'What famous line does Oliver say?',
    answers: A('lit59', 'Please, sir, I want some more', [
      'To be or not to be',
      'It was the best of times',
      'Call me Ishmael',
    ]),
    level: 2,
  },
  {
    id: 'lit60',
    text: 'Who wrote "Moby-Dick"?',
    answers: A('lit60', 'Herman Melville', [
      'Mark Twain',
      'Jack London',
      'Ernest Hemingway',
    ]),
    level: 2,
  },
  {
    id: 'lit61',
    text: 'What type of animal is Moby-Dick?',
    answers: A('lit61', 'Whale', ['Shark', 'Dolphin', 'Octopus']),
    level: 2,
  },
  {
    id: 'lit62',
    text: 'Who wrote "The Great Gatsby"?',
    answers: A('lit62', 'F. Scott Fitzgerald', [
      'Ernest Hemingway',
      'John Steinbeck',
      'William Faulkner',
    ]),
    level: 2,
  },
  {
    id: 'lit63',
    text: 'What is the name of the narrator in "The Great Gatsby"?',
    answers: A('lit63', 'Nick Carraway', [
      'Jay Gatsby',
      'Tom Buchanan',
      'George Wilson',
    ]),
    level: 2,
  },
  {
    id: 'lit64',
    text: 'Who wrote "To Kill a Mockingbird"?',
    answers: A('lit64', 'Harper Lee', [
      'John Steinbeck',
      'William Faulkner',
      'Truman Capote',
    ]),
    level: 2,
  },
  {
    id: 'lit65',
    text: 'What is the name of the lawyer in "To Kill a Mockingbird"?',
    answers: A('lit65', 'Atticus Finch', [
      'Tom Robinson',
      'Boo Radley',
      'Bob Ewell',
    ]),
    level: 2,
  },
  {
    id: 'lit66',
    text: 'Who wrote "1984"?',
    answers: A('lit66', 'George Orwell', [
      'Aldous Huxley',
      'Ray Bradbury',
      'H.G. Wells',
    ]),
    level: 2,
  },
  {
    id: 'lit67',
    text: 'What is the name of the totalitarian leader in "1984"?',
    answers: A('lit67', 'Big Brother', [
      'The Party',
      "O'Brien",
      'Emmanuel Goldstein',
    ]),
    level: 2,
  },
  {
    id: 'lit68',
    text: 'Who wrote "Animal Farm"?',
    answers: A('lit68', 'George Orwell', [
      'Aldous Huxley',
      'Ray Bradbury',
      'H.G. Wells',
    ]),
    level: 2,
  },
  {
    id: 'lit69',
    text: 'What type of animals lead the revolution in "Animal Farm"?',
    answers: A('lit69', 'Pigs', ['Horses', 'Dogs', 'Sheep']),
    level: 2,
  },
  {
    id: 'lit70',
    text: 'Who wrote "Brave New World"?',
    answers: A('lit70', 'Aldous Huxley', [
      'George Orwell',
      'Ray Bradbury',
      'H.G. Wells',
    ]),
    level: 2,
  },
  {
    id: 'lit71',
    text: 'Who wrote "Fahrenheit 451"?',
    answers: A('lit71', 'Ray Bradbury', [
      'George Orwell',
      'Aldous Huxley',
      'Isaac Asimov',
    ]),
    level: 2,
  },
  {
    id: 'lit72',
    text: 'What is burned in "Fahrenheit 451"?',
    answers: A('lit72', 'Books', ['Houses', 'People', 'Machines']),
    level: 2,
  },
  {
    id: 'lit73',
    text: 'Who wrote "The Catcher in the Rye"?',
    answers: A('lit73', 'J.D. Salinger', [
      'John Updike',
      'Philip Roth',
      'Saul Bellow',
    ]),
    level: 2,
  },
  {
    id: 'lit74',
    text: 'What is the name of the main character in "The Catcher in the Rye"?',
    answers: A('lit74', 'Holden Caulfield', [
      'Nick Adams',
      'Jake Barnes',
      'Sal Paradise',
    ]),
    level: 2,
  },
  {
    id: 'lit75',
    text: 'Who wrote "Lord of the Flies"?',
    answers: A('lit75', 'William Golding', [
      'George Orwell',
      'Aldous Huxley',
      'Ray Bradbury',
    ]),
    level: 2,
  },

  // ===== LEVEL 3: Intermediate =====
  {
    id: 'lit76',
    text: 'Who wrote "Crime and Punishment"?',
    answers: A('lit76', 'Fyodor Dostoevsky', [
      'Leo Tolstoy',
      'Anton Chekhov',
      'Ivan Turgenev',
    ]),
    level: 3,
  },
  {
    id: 'lit77',
    text: 'What is the name of the main character in "Crime and Punishment"?',
    answers: A('lit77', 'Raskolnikov', ['Karamazov', 'Myshkin', 'Stavrogin']),
    level: 3,
  },
  {
    id: 'lit78',
    text: 'Who wrote "War and Peace"?',
    answers: A('lit78', 'Leo Tolstoy', [
      'Fyodor Dostoevsky',
      'Anton Chekhov',
      'Ivan Turgenev',
    ]),
    level: 3,
  },
  {
    id: 'lit79',
    text: 'Who wrote "Anna Karenina"?',
    answers: A('lit79', 'Leo Tolstoy', [
      'Fyodor Dostoevsky',
      'Anton Chekhov',
      'Ivan Turgenev',
    ]),
    level: 3,
  },
  {
    id: 'lit80',
    text: 'Who wrote "The Brothers Karamazov"?',
    answers: A('lit80', 'Fyodor Dostoevsky', [
      'Leo Tolstoy',
      'Anton Chekhov',
      'Ivan Turgenev',
    ]),
    level: 3,
  },
  {
    id: 'lit81',
    text: 'Who wrote "Don Quixote"?',
    answers: A('lit81', 'Miguel de Cervantes', [
      'Gabriel García Márquez',
      'Jorge Luis Borges',
      'Pablo Neruda',
    ]),
    level: 3,
  },
  {
    id: 'lit82',
    text: "What is the name of Don Quixote's squire?",
    answers: A('lit82', 'Sancho Panza', ['Rocinante', 'Dulcinea', 'Alonso']),
    level: 3,
  },
  {
    id: 'lit83',
    text: 'Who wrote "One Hundred Years of Solitude"?',
    answers: A('lit83', 'Gabriel García Márquez', [
      'Jorge Luis Borges',
      'Mario Vargas Llosa',
      'Isabel Allende',
    ]),
    level: 3,
  },
  {
    id: 'lit84',
    text: 'What is the name of the family in "One Hundred Years of Solitude"?',
    answers: A('lit84', 'Buendía', ['García', 'Márquez', 'Arcadio']),
    level: 3,
  },
  {
    id: 'lit85',
    text: 'Who wrote "The Divine Comedy"?',
    answers: A('lit85', 'Dante Alighieri', ['Petrarch', 'Boccaccio', 'Virgil']),
    level: 3,
  },
  {
    id: 'lit86',
    text: 'What are the three parts of "The Divine Comedy"?',
    answers: A('lit86', 'Inferno, Purgatorio, Paradiso', [
      'Heaven, Earth, Hell',
      'Past, Present, Future',
      'Birth, Life, Death',
    ]),
    level: 3,
  },
  {
    id: 'lit87',
    text: 'Who wrote "The Iliad"?',
    answers: A('lit87', 'Homer', ['Virgil', 'Sophocles', 'Euripides']),
    level: 3,
  },
  {
    id: 'lit88',
    text: 'What war is "The Iliad" about?',
    answers: A('lit88', 'Trojan War', [
      'Persian War',
      'Peloponnesian War',
      'Punic War',
    ]),
    level: 3,
  },
  {
    id: 'lit89',
    text: 'Who wrote "The Odyssey"?',
    answers: A('lit89', 'Homer', ['Virgil', 'Sophocles', 'Euripides']),
    level: 3,
  },
  {
    id: 'lit90',
    text: 'What is the name of the hero in "The Odyssey"?',
    answers: A('lit90', 'Odysseus', ['Achilles', 'Hector', 'Ajax']),
    level: 3,
  },
  {
    id: 'lit91',
    text: 'Who wrote "The Aeneid"?',
    answers: A('lit91', 'Virgil', ['Homer', 'Ovid', 'Horace']),
    level: 3,
  },
  {
    id: 'lit92',
    text: 'Who wrote "Hamlet"?',
    answers: A('lit92', 'William Shakespeare', [
      'Christopher Marlowe',
      'Ben Jonson',
      'John Milton',
    ]),
    level: 3,
  },
  {
    id: 'lit93',
    text: 'What is the famous opening line of "Hamlet"?',
    answers: A('lit93', "Who's there?", [
      'To be or not to be',
      'Something is rotten',
      'Good night, sweet prince',
    ]),
    level: 3,
  },
  {
    id: 'lit94',
    text: 'Who wrote "Macbeth"?',
    answers: A('lit94', 'William Shakespeare', [
      'Christopher Marlowe',
      'Ben Jonson',
      'John Milton',
    ]),
    level: 3,
  },
  {
    id: 'lit95',
    text: 'Who wrote "Othello"?',
    answers: A('lit95', 'William Shakespeare', [
      'Christopher Marlowe',
      'Ben Jonson',
      'John Milton',
    ]),
    level: 3,
  },
  {
    id: 'lit96',
    text: 'Who wrote "King Lear"?',
    answers: A('lit96', 'William Shakespeare', [
      'Christopher Marlowe',
      'Ben Jonson',
      'John Milton',
    ]),
    level: 3,
  },
  {
    id: 'lit97',
    text: 'Who wrote "A Midsummer Night\'s Dream"?',
    answers: A('lit97', 'William Shakespeare', [
      'Christopher Marlowe',
      'Ben Jonson',
      'John Milton',
    ]),
    level: 3,
  },
  {
    id: 'lit98',
    text: 'Who wrote "The Tempest"?',
    answers: A('lit98', 'William Shakespeare', [
      'Christopher Marlowe',
      'Ben Jonson',
      'John Milton',
    ]),
    level: 3,
  },
  {
    id: 'lit99',
    text: 'Who wrote "Paradise Lost"?',
    answers: A('lit99', 'John Milton', [
      'William Shakespeare',
      'John Donne',
      'Edmund Spenser',
    ]),
    level: 3,
  },
  {
    id: 'lit100',
    text: 'What is "Paradise Lost" about?',
    answers: A('lit100', 'Fall of man and Satan', [
      'Greek mythology',
      'Roman history',
      'Medieval knights',
    ]),
    level: 3,
  },

  // ===== LEVEL 4-5: Normal/Hard =====
  {
    id: 'lit101',
    text: 'Who wrote "Ulysses"?',
    answers: A('lit101', 'James Joyce', [
      'Virginia Woolf',
      'Samuel Beckett',
      'Oscar Wilde',
    ]),
    level: 4,
  },
  {
    id: 'lit102',
    text: 'In what city is "Ulysses" set?',
    answers: A('lit102', 'Dublin', ['London', 'Paris', 'New York']),
    level: 4,
  },
  {
    id: 'lit103',
    text: 'Who wrote "Mrs Dalloway"?',
    answers: A('lit103', 'Virginia Woolf', [
      'James Joyce',
      'E.M. Forster',
      'D.H. Lawrence',
    ]),
    level: 4,
  },
  {
    id: 'lit104',
    text: 'Who wrote "To the Lighthouse"?',
    answers: A('lit104', 'Virginia Woolf', [
      'James Joyce',
      'E.M. Forster',
      'D.H. Lawrence',
    ]),
    level: 4,
  },
  {
    id: 'lit105',
    text: 'Who wrote "The Sound and the Fury"?',
    answers: A('lit105', 'William Faulkner', [
      'Ernest Hemingway',
      'John Steinbeck',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit106',
    text: 'Who wrote "As I Lay Dying"?',
    answers: A('lit106', 'William Faulkner', [
      'Ernest Hemingway',
      'John Steinbeck',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit107',
    text: 'Who wrote "The Old Man and the Sea"?',
    answers: A('lit107', 'Ernest Hemingway', [
      'William Faulkner',
      'John Steinbeck',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit108',
    text: 'Who wrote "A Farewell to Arms"?',
    answers: A('lit108', 'Ernest Hemingway', [
      'William Faulkner',
      'John Steinbeck',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit109',
    text: 'Who wrote "For Whom the Bell Tolls"?',
    answers: A('lit109', 'Ernest Hemingway', [
      'William Faulkner',
      'John Steinbeck',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit110',
    text: 'Who wrote "Of Mice and Men"?',
    answers: A('lit110', 'John Steinbeck', [
      'Ernest Hemingway',
      'William Faulkner',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit111',
    text: 'Who wrote "The Grapes of Wrath"?',
    answers: A('lit111', 'John Steinbeck', [
      'Ernest Hemingway',
      'William Faulkner',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit112',
    text: 'Who wrote "East of Eden"?',
    answers: A('lit112', 'John Steinbeck', [
      'Ernest Hemingway',
      'William Faulkner',
      'F. Scott Fitzgerald',
    ]),
    level: 4,
  },
  {
    id: 'lit113',
    text: 'Who wrote "Catch-22"?',
    answers: A('lit113', 'Joseph Heller', [
      'Kurt Vonnegut',
      'Norman Mailer',
      'Philip Roth',
    ]),
    level: 4,
  },
  {
    id: 'lit114',
    text: 'Who wrote "Slaughterhouse-Five"?',
    answers: A('lit114', 'Kurt Vonnegut', [
      'Joseph Heller',
      'Norman Mailer',
      'Philip Roth',
    ]),
    level: 4,
  },
  {
    id: 'lit115',
    text: 'Who wrote "On the Road"?',
    answers: A('lit115', 'Jack Kerouac', [
      'Allen Ginsberg',
      'William S. Burroughs',
      'Neal Cassady',
    ]),
    level: 4,
  },
  {
    id: 'lit116',
    text: 'Who wrote "Lolita"?',
    answers: A('lit116', 'Vladimir Nabokov', [
      'Fyodor Dostoevsky',
      'Leo Tolstoy',
      'Anton Chekhov',
    ]),
    level: 5,
  },
  {
    id: 'lit117',
    text: 'Who wrote "The Master and Margarita"?',
    answers: A('lit117', 'Mikhail Bulgakov', [
      'Boris Pasternak',
      'Alexander Solzhenitsyn',
      'Maxim Gorky',
    ]),
    level: 5,
  },
  {
    id: 'lit118',
    text: 'Who wrote "Doctor Zhivago"?',
    answers: A('lit118', 'Boris Pasternak', [
      'Mikhail Bulgakov',
      'Alexander Solzhenitsyn',
      'Maxim Gorky',
    ]),
    level: 5,
  },
  {
    id: 'lit119',
    text: 'Who wrote "The Gulag Archipelago"?',
    answers: A('lit119', 'Alexander Solzhenitsyn', [
      'Boris Pasternak',
      'Mikhail Bulgakov',
      'Maxim Gorky',
    ]),
    level: 5,
  },
  {
    id: 'lit120',
    text: 'Who wrote "The Metamorphosis"?',
    answers: A('lit120', 'Franz Kafka', [
      'Thomas Mann',
      'Hermann Hesse',
      'Robert Musil',
    ]),
    level: 5,
  },
  {
    id: 'lit121',
    text: 'What does Gregor Samsa transform into in "The Metamorphosis"?',
    answers: A('lit121', 'Giant insect', ['Bird', 'Wolf', 'Snake']),
    level: 5,
  },
  {
    id: 'lit122',
    text: 'Who wrote "The Trial"?',
    answers: A('lit122', 'Franz Kafka', [
      'Thomas Mann',
      'Hermann Hesse',
      'Robert Musil',
    ]),
    level: 5,
  },
  {
    id: 'lit123',
    text: 'Who wrote "The Magic Mountain"?',
    answers: A('lit123', 'Thomas Mann', [
      'Franz Kafka',
      'Hermann Hesse',
      'Robert Musil',
    ]),
    level: 5,
  },
  {
    id: 'lit124',
    text: 'Who wrote "Steppenwolf"?',
    answers: A('lit124', 'Hermann Hesse', [
      'Thomas Mann',
      'Franz Kafka',
      'Robert Musil',
    ]),
    level: 5,
  },
  {
    id: 'lit125',
    text: 'Who wrote "Siddhartha"?',
    answers: A('lit125', 'Hermann Hesse', [
      'Thomas Mann',
      'Franz Kafka',
      'Robert Musil',
    ]),
    level: 5,
  },

  // ===== LEVEL 6-7: Very Hard/Legendary =====
  {
    id: 'lit126',
    text: 'Who wrote "In Search of Lost Time"?',
    answers: A('lit126', 'Marcel Proust', [
      'André Gide',
      'Albert Camus',
      'Jean-Paul Sartre',
    ]),
    level: 6,
  },
  {
    id: 'lit127',
    text: 'What is the famous madeleine scene from?',
    answers: A('lit127', 'In Search of Lost Time', [
      'Madame Bovary',
      'The Stranger',
      'Nausea',
    ]),
    level: 6,
  },
  {
    id: 'lit128',
    text: 'Who wrote "Madame Bovary"?',
    answers: A('lit128', 'Gustave Flaubert', [
      'Honoré de Balzac',
      'Émile Zola',
      'Stendhal',
    ]),
    level: 6,
  },
  {
    id: 'lit129',
    text: 'Who wrote "The Stranger"?',
    answers: A('lit129', 'Albert Camus', [
      'Jean-Paul Sartre',
      'Simone de Beauvoir',
      'André Gide',
    ]),
    level: 6,
  },
  {
    id: 'lit130',
    text: 'Who wrote "Nausea"?',
    answers: A('lit130', 'Jean-Paul Sartre', [
      'Albert Camus',
      'Simone de Beauvoir',
      'André Gide',
    ]),
    level: 6,
  },
  {
    id: 'lit131',
    text: 'Who wrote "Waiting for Godot"?',
    answers: A('lit131', 'Samuel Beckett', [
      'Harold Pinter',
      'Tom Stoppard',
      'Eugene Ionesco',
    ]),
    level: 6,
  },
  {
    id: 'lit132',
    text: 'Who wrote "The Unbearable Lightness of Being"?',
    answers: A('lit132', 'Milan Kundera', [
      'Václav Havel',
      'Bohumil Hrabal',
      'Karel Čapek',
    ]),
    level: 6,
  },
  {
    id: 'lit133',
    text: 'Who wrote "Midnight\'s Children"?',
    answers: A('lit133', 'Salman Rushdie', [
      'V.S. Naipaul',
      'Arundhati Roy',
      'Vikram Seth',
    ]),
    level: 6,
  },
  {
    id: 'lit134',
    text: 'Who wrote "The God of Small Things"?',
    answers: A('lit134', 'Arundhati Roy', [
      'Salman Rushdie',
      'V.S. Naipaul',
      'Vikram Seth',
    ]),
    level: 6,
  },
  {
    id: 'lit135',
    text: 'Who wrote "Beloved"?',
    answers: A('lit135', 'Toni Morrison', [
      'Alice Walker',
      'Maya Angelou',
      'Zora Neale Hurston',
    ]),
    level: 6,
  },
  {
    id: 'lit136',
    text: 'Who wrote "The Color Purple"?',
    answers: A('lit136', 'Alice Walker', [
      'Toni Morrison',
      'Maya Angelou',
      'Zora Neale Hurston',
    ]),
    level: 6,
  },
  {
    id: 'lit137',
    text: 'Who wrote "Their Eyes Were Watching God"?',
    answers: A('lit137', 'Zora Neale Hurston', [
      'Toni Morrison',
      'Alice Walker',
      'Maya Angelou',
    ]),
    level: 6,
  },
  {
    id: 'lit138',
    text: 'Who wrote "Invisible Man"?',
    answers: A('lit138', 'Ralph Ellison', [
      'Richard Wright',
      'James Baldwin',
      'Langston Hughes',
    ]),
    level: 6,
  },
  {
    id: 'lit139',
    text: 'Who wrote "Native Son"?',
    answers: A('lit139', 'Richard Wright', [
      'Ralph Ellison',
      'James Baldwin',
      'Langston Hughes',
    ]),
    level: 6,
  },
  {
    id: 'lit140',
    text: 'Who wrote "Go Tell It on the Mountain"?',
    answers: A('lit140', 'James Baldwin', [
      'Richard Wright',
      'Ralph Ellison',
      'Langston Hughes',
    ]),
    level: 6,
  },
  {
    id: 'lit141',
    text: 'What literary technique is "stream of consciousness"?',
    answers: A('lit141', 'Interior monologue narrative', [
      'Third person omniscient',
      'First person limited',
      'Epistolary form',
    ]),
    level: 7,
  },
  {
    id: 'lit142',
    text: 'What is "magical realism"?',
    answers: A('lit142', 'Realistic narrative with magical elements', [
      'Fantasy genre',
      'Science fiction',
      'Gothic horror',
    ]),
    level: 7,
  },
  {
    id: 'lit143',
    text: 'What is the "unreliable narrator" technique?',
    answers: A('lit143', 'Narrator whose credibility is compromised', [
      'Omniscient narrator',
      'First person narrator',
      'Third person narrator',
    ]),
    level: 7,
  },
  {
    id: 'lit144',
    text: 'What is "metafiction"?',
    answers: A('lit144', 'Fiction about fiction', [
      'Historical fiction',
      'Science fiction',
      'Crime fiction',
    ]),
    level: 7,
  },
  {
    id: 'lit145',
    text: 'What is "intertextuality"?',
    answers: A('lit145', 'Relationship between texts', [
      'Plot structure',
      'Character development',
      'Setting description',
    ]),
    level: 7,
  },

  // ===== LEVEL 8: Professor =====
  {
    id: 'lit146',
    text: 'What is the "anxiety of influence" theory?',
    answers: A('lit146', "Harold Bloom's theory of poetic influence", [
      'Freudian literary criticism',
      'Marxist literary theory',
      'Feminist criticism',
    ]),
    level: 8,
  },
  {
    id: 'lit147',
    text: 'What is "defamiliarization" in Russian Formalism?',
    answers: A('lit147', 'Making the familiar strange', [
      'Plot analysis',
      'Character study',
      'Theme identification',
    ]),
    level: 8,
  },
  {
    id: 'lit148',
    text: 'What is the "intentional fallacy"?',
    answers: A('lit148', "Error of judging work by author's intent", [
      'Misreading text',
      'Ignoring context',
      'Over-interpretation',
    ]),
    level: 8,
  },
  {
    id: 'lit149',
    text: 'What is "différance" in Derrida\'s theory?',
    answers: A('lit149', 'Deferral and difference in meaning', [
      'Binary opposition',
      'Structural analysis',
      'Historical context',
    ]),
    level: 8,
  },
  {
    id: 'lit150',
    text: 'What is the "death of the author" concept?',
    answers: A('lit150', "Barthes' rejection of authorial intent", [
      'Biographical criticism',
      'Historical criticism',
      'Moral criticism',
    ]),
    level: 8,
  },
  {
    id: 'lit151',
    text: 'What is "heteroglossia" in Bakhtin\'s theory?',
    answers: A('lit151', 'Multiple voices in discourse', [
      'Single narrative voice',
      'Authorial voice',
      'Character voice',
    ]),
    level: 8,
  },
  {
    id: 'lit152',
    text: 'What is the "carnivalesque" in literary theory?',
    answers: A('lit152', 'Subversion of dominant culture', [
      'Celebration of tradition',
      'Formal structure',
      'Classical unity',
    ]),
    level: 8,
  },
  {
    id: 'lit153',
    text: 'What is "aporia" in deconstruction?',
    answers: A('lit153', 'Irresolvable internal contradiction', [
      'Clear meaning',
      'Logical conclusion',
      'Unified theme',
    ]),
    level: 8,
  },
  {
    id: 'lit154',
    text: 'What is the "hermeneutic circle"?',
    answers: A('lit154', 'Part-whole interpretation relationship', [
      'Linear reading',
      'Surface meaning',
      'Literal interpretation',
    ]),
    level: 8,
  },
  {
    id: 'lit155',
    text: 'What is "negative capability" according to Keats?',
    answers: A('lit155', 'Accepting uncertainty without irritable reaching', [
      'Positive thinking',
      'Logical reasoning',
      'Moral certainty',
    ]),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'lit156',
    text: 'What is a story?',
    answers: A('lit156', 'Narrative of events', [
      'List of facts',
      'Mathematical equation',
      'Scientific formula',
    ]),
    level: 1,
  },
  {
    id: 'lit157',
    text: 'What is a poem?',
    answers: A('lit157', 'Writing with rhythm and often rhyme', [
      'News article',
      'Math problem',
      'Science report',
    ]),
    level: 1,
  },
  {
    id: 'lit158',
    text: 'What is a novel?',
    answers: A('lit158', 'Long fictional story', [
      'Short story',
      'Poem',
      'Play',
    ]),
    level: 1,
  },
  {
    id: 'lit159',
    text: 'What is a character?',
    answers: A('lit159', 'Person in a story', [
      'Place in a story',
      'Time in a story',
      'Object in a story',
    ]),
    level: 1,
  },
  {
    id: 'lit160',
    text: 'What is a setting?',
    answers: A('lit160', 'Where and when story takes place', [
      'Who is in story',
      'What happens',
      'Why it happens',
    ]),
    level: 1,
  },
  {
    id: 'lit161',
    text: 'What is a plot?',
    answers: A('lit161', 'Events in a story', [
      'Characters in story',
      'Setting of story',
      'Theme of story',
    ]),
    level: 1,
  },
  {
    id: 'lit162',
    text: 'What is fiction?',
    answers: A('lit162', 'Made-up stories', [
      'True stories',
      'News reports',
      'History books',
    ]),
    level: 1,
  },
  {
    id: 'lit163',
    text: 'What is non-fiction?',
    answers: A('lit163', 'True writing', [
      'Made-up stories',
      'Fantasy',
      'Science fiction',
    ]),
    level: 1,
  },
  {
    id: 'lit164',
    text: 'What is a fairy tale?',
    answers: A('lit164', 'Story with magic and fantasy', [
      'News story',
      'History book',
      'Science report',
    ]),
    level: 1,
  },
  {
    id: 'lit165',
    text: 'What is a fable?',
    answers: A('lit165', 'Story with moral lesson', [
      'News article',
      'History book',
      'Science report',
    ]),
    level: 1,
  },
  {
    id: 'lit166',
    text: 'What is a protagonist?',
    answers: A('lit166', 'Main character', [
      'Villain',
      'Minor character',
      'Narrator',
    ]),
    level: 2,
  },
  {
    id: 'lit167',
    text: 'What is an antagonist?',
    answers: A('lit167', 'Character opposing protagonist', [
      'Main character',
      'Narrator',
      'Author',
    ]),
    level: 2,
  },
  {
    id: 'lit168',
    text: 'What is a narrator?',
    answers: A('lit168', 'Person telling the story', [
      'Main character',
      'Villain',
      'Author',
    ]),
    level: 2,
  },
  {
    id: 'lit169',
    text: 'What is dialogue?',
    answers: A('lit169', 'Conversation between characters', [
      'Description',
      'Narration',
      'Setting',
    ]),
    level: 2,
  },
  {
    id: 'lit170',
    text: 'What is a theme?',
    answers: A('lit170', 'Main idea or message', [
      'Plot',
      'Setting',
      'Character',
    ]),
    level: 2,
  },
  {
    id: 'lit171',
    text: 'What is a metaphor?',
    answers: A('lit171', 'Comparison without like or as', [
      'Comparison with like or as',
      'Exaggeration',
      'Understatement',
    ]),
    level: 2,
  },
  {
    id: 'lit172',
    text: 'What is a simile?',
    answers: A('lit172', 'Comparison using like or as', [
      'Comparison without like or as',
      'Exaggeration',
      'Understatement',
    ]),
    level: 2,
  },
  {
    id: 'lit173',
    text: 'What is rhyme?',
    answers: A('lit173', 'Words with same ending sounds', [
      'Words with same meaning',
      'Words with opposite meaning',
      'Words with same spelling',
    ]),
    level: 2,
  },
  {
    id: 'lit174',
    text: 'What is a stanza?',
    answers: A('lit174', 'Group of lines in poem', [
      'Single line',
      'Whole poem',
      'Title',
    ]),
    level: 2,
  },
  {
    id: 'lit175',
    text: 'What is alliteration?',
    answers: A('lit175', 'Repeated beginning sounds', [
      'Repeated ending sounds',
      'Repeated middle sounds',
      'No repeated sounds',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'lit176',
    text: 'What is irony?',
    answers: A('lit176', 'Opposite of what is expected', [
      'Exactly what is expected',
      'Random events',
      'No meaning',
    ]),
    level: 3,
  },
  {
    id: 'lit177',
    text: 'What is foreshadowing?',
    answers: A('lit177', 'Hints about future events', [
      'Flashback',
      'Present events',
      'Random events',
    ]),
    level: 3,
  },
  {
    id: 'lit178',
    text: 'What is a flashback?',
    answers: A('lit178', 'Scene from the past', [
      'Scene from future',
      'Present scene',
      'Dream scene',
    ]),
    level: 3,
  },
  {
    id: 'lit179',
    text: 'What is symbolism?',
    answers: A('lit179', 'Using objects to represent ideas', [
      'Literal meaning only',
      'No meaning',
      'Random meaning',
    ]),
    level: 3,
  },
  {
    id: 'lit180',
    text: 'What is personification?',
    answers: A('lit180', 'Giving human traits to non-humans', [
      'Giving animal traits to humans',
      'No traits',
      'Random traits',
    ]),
    level: 3,
  },
  {
    id: 'lit181',
    text: 'What is hyperbole?',
    answers: A('lit181', 'Extreme exaggeration', [
      'Understatement',
      'Literal statement',
      'No statement',
    ]),
    level: 3,
  },
  {
    id: 'lit182',
    text: 'What is onomatopoeia?',
    answers: A('lit182', 'Words that sound like their meaning', [
      'Words with opposite meaning',
      'Silent words',
      'Random words',
    ]),
    level: 3,
  },
  {
    id: 'lit183',
    text: 'What is point of view?',
    answers: A('lit183', 'Perspective from which story is told', [
      'Plot',
      'Setting',
      'Theme',
    ]),
    level: 3,
  },
  {
    id: 'lit184',
    text: 'What is first person point of view?',
    answers: A('lit184', 'Narrator uses I and me', [
      'Narrator uses he and she',
      'Narrator uses you',
      'No narrator',
    ]),
    level: 3,
  },
  {
    id: 'lit185',
    text: 'What is third person point of view?',
    answers: A('lit185', 'Narrator uses he and she', [
      'Narrator uses I and me',
      'Narrator uses you',
      'No narrator',
    ]),
    level: 3,
  },
  {
    id: 'lit186',
    text: 'What is a sonnet?',
    answers: A('lit186', '14-line poem', [
      '10-line poem',
      '20-line poem',
      '8-line poem',
    ]),
    level: 4,
  },
  {
    id: 'lit187',
    text: 'What is iambic pentameter?',
    answers: A('lit187', 'Rhythm of five iambs per line', [
      'Rhythm of four iambs',
      'Rhythm of six iambs',
      'No rhythm',
    ]),
    level: 4,
  },
  {
    id: 'lit188',
    text: 'What is blank verse?',
    answers: A('lit188', 'Unrhymed iambic pentameter', [
      'Rhymed verse',
      'Free verse',
      'Prose',
    ]),
    level: 4,
  },
  {
    id: 'lit189',
    text: 'What is free verse?',
    answers: A('lit189', 'Poetry without regular meter or rhyme', [
      'Poetry with strict meter',
      'Poetry with strict rhyme',
      'Prose',
    ]),
    level: 4,
  },
  {
    id: 'lit190',
    text: 'What is a haiku?',
    answers: A('lit190', 'Japanese poem with 5-7-5 syllables', [
      'Chinese poem',
      'Korean poem',
      'English poem',
    ]),
    level: 4,
  },
  {
    id: 'lit191',
    text: 'What is an epic?',
    answers: A('lit191', 'Long narrative poem about heroes', [
      'Short poem',
      'Love poem',
      'Funny poem',
    ]),
    level: 4,
  },
  {
    id: 'lit192',
    text: 'What is a tragedy?',
    answers: A('lit192', 'Drama with unhappy ending', [
      'Drama with happy ending',
      'Comedy',
      'Farce',
    ]),
    level: 4,
  },
  {
    id: 'lit193',
    text: 'What is a comedy?',
    answers: A('lit193', 'Drama with happy ending', [
      'Drama with sad ending',
      'Tragedy',
      'Epic',
    ]),
    level: 4,
  },
  {
    id: 'lit194',
    text: 'What is satire?',
    answers: A('lit194', 'Using humor to criticize', [
      'Serious criticism',
      'Praise',
      'Description',
    ]),
    level: 4,
  },
  {
    id: 'lit195',
    text: 'What is allegory?',
    answers: A('lit195', 'Story with hidden meaning', [
      'Story with obvious meaning',
      'No meaning',
      'Random meaning',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'lit196',
    text: 'What is stream of consciousness?',
    answers: A('lit196', 'Writing mimicking thought flow', [
      'Structured writing',
      'Dialogue only',
      'Description only',
    ]),
    level: 5,
  },
  {
    id: 'lit197',
    text: 'What is an unreliable narrator?',
    answers: A('lit197', 'Narrator whose account is questionable', [
      'Trustworthy narrator',
      'Omniscient narrator',
      'No narrator',
    ]),
    level: 5,
  },
  {
    id: 'lit198',
    text: 'What is magical realism?',
    answers: A('lit198', 'Realistic fiction with magical elements', [
      'Pure fantasy',
      'Pure realism',
      'Science fiction',
    ]),
    level: 5,
  },
  {
    id: 'lit199',
    text: 'What is postmodernism in literature?',
    answers: A('lit199', 'Self-aware experimental fiction', [
      'Traditional fiction',
      'Realistic fiction',
      'Historical fiction',
    ]),
    level: 5,
  },
  {
    id: 'lit200',
    text: 'What is metafiction?',
    answers: A('lit200', 'Fiction about fiction', [
      'Fiction about reality',
      'Non-fiction',
      'Poetry',
    ]),
    level: 5,
  },
  {
    id: 'lit201',
    text: 'What is intertextuality?',
    answers: A('lit201', 'References between texts', [
      'No references',
      'Self-reference only',
      'Random references',
    ]),
    level: 6,
  },
  {
    id: 'lit202',
    text: 'What is the death of the author?',
    answers: A('lit202', 'Barthes theory separating author from text', [
      'Author biography',
      'Author death',
      'No author',
    ]),
    level: 6,
  },
  {
    id: 'lit203',
    text: 'What is deconstruction?',
    answers: A('lit203', 'Derrida method of textual analysis', [
      'Construction',
      'Destruction',
      'Reconstruction',
    ]),
    level: 6,
  },
  {
    id: 'lit204',
    text: 'What is the intentional fallacy?',
    answers: A('lit204', 'Error of judging work by author intent', [
      'Correct interpretation',
      'No interpretation',
      'Random interpretation',
    ]),
    level: 6,
  },
  {
    id: 'lit205',
    text: 'What is the affective fallacy?',
    answers: A('lit205', 'Error of judging work by reader response', [
      'Correct interpretation',
      'No interpretation',
      'Random interpretation',
    ]),
    level: 6,
  },
  {
    id: 'lit206',
    text: 'What is New Criticism?',
    answers: A('lit206', 'Close reading focusing on text itself', [
      'Biographical criticism',
      'Historical criticism',
      'Psychological criticism',
    ]),
    level: 7,
  },
  {
    id: 'lit207',
    text: 'What is reader-response theory?',
    answers: A('lit207', 'Meaning created by reader', [
      'Meaning in text only',
      'Meaning from author',
      'No meaning',
    ]),
    level: 7,
  },
  {
    id: 'lit208',
    text: 'What is structuralism?',
    answers: A('lit208', 'Analysis of underlying structures', [
      'Surface analysis',
      'No analysis',
      'Random analysis',
    ]),
    level: 7,
  },
  {
    id: 'lit209',
    text: 'What is post-structuralism?',
    answers: A('lit209', 'Critique of fixed structures', [
      'Support of structures',
      'No structures',
      'Random structures',
    ]),
    level: 7,
  },
  {
    id: 'lit210',
    text: 'What is the hermeneutic circle?',
    answers: A('lit210', 'Understanding parts through whole and vice versa', [
      'Linear understanding',
      'No understanding',
      'Random understanding',
    ]),
    level: 7,
  },
  {
    id: 'lit211',
    text: 'What is aporia?',
    answers: A('lit211', 'Irresolvable internal contradiction', [
      'Resolution',
      'Clarity',
      'Simplicity',
    ]),
    level: 8,
  },
  {
    id: 'lit212',
    text: 'What is differance?',
    answers: A('lit212', 'Derrida concept of deferred meaning', [
      'Fixed meaning',
      'No meaning',
      'Simple meaning',
    ]),
    level: 8,
  },
  {
    id: 'lit213',
    text: 'What is the anxiety of influence?',
    answers: A('lit213', 'Bloom theory of poetic influence', [
      'No influence',
      'Positive influence',
      'Random influence',
    ]),
    level: 8,
  },
  {
    id: 'lit214',
    text: 'What is heteroglossia?',
    answers: A('lit214', 'Bakhtin concept of multiple voices', [
      'Single voice',
      'No voice',
      'Random voice',
    ]),
    level: 8,
  },
  {
    id: 'lit215',
    text: 'What is the carnivalesque?',
    answers: A('lit215', 'Bakhtin concept of subversive humor', [
      'Serious literature',
      'No humor',
      'Random humor',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'lit216',
    text: 'What is a book?',
    answers: A('lit216', 'Written work with pages', [
      'Single page',
      'Movie',
      'Song',
    ]),
    level: 1,
  },
  {
    id: 'lit217',
    text: 'What is reading?',
    answers: A('lit217', 'Looking at and understanding text', [
      'Writing',
      'Speaking',
      'Listening',
    ]),
    level: 1,
  },
  {
    id: 'lit218',
    text: 'What is writing?',
    answers: A('lit218', 'Creating text', ['Reading', 'Speaking', 'Listening']),
    level: 1,
  },
  {
    id: 'lit219',
    text: 'What is a story?',
    answers: A('lit219', 'Narrative of events', [
      'List of facts',
      'Dictionary',
      'Encyclopedia',
    ]),
    level: 1,
  },
  {
    id: 'lit220',
    text: 'What is a character?',
    answers: A('lit220', 'Person in a story', [
      'Place in story',
      'Time in story',
      'Object in story',
    ]),
    level: 1,
  },
  {
    id: 'lit221',
    text: 'What is a hero?',
    answers: A('lit221', 'Main good character', [
      'Main bad character',
      'Minor character',
      'No character',
    ]),
    level: 1,
  },
  {
    id: 'lit222',
    text: 'What is a villain?',
    answers: A('lit222', 'Bad character', [
      'Good character',
      'Neutral character',
      'No character',
    ]),
    level: 1,
  },
  {
    id: 'lit223',
    text: 'What is a setting?',
    answers: A('lit223', 'Where and when story happens', [
      'Who is in story',
      'What happens',
      'Why it happens',
    ]),
    level: 1,
  },
  {
    id: 'lit224',
    text: 'What is a plot?',
    answers: A('lit224', 'What happens in story', [
      'Where story happens',
      'Who is in story',
      'When story happens',
    ]),
    level: 1,
  },
  {
    id: 'lit225',
    text: 'What is the beginning?',
    answers: A('lit225', 'Start of story', ['Middle', 'End', 'Climax']),
    level: 1,
  },
  {
    id: 'lit226',
    text: 'What is the middle?',
    answers: A('lit226', 'Central part of story', [
      'Beginning',
      'End',
      'Title',
    ]),
    level: 1,
  },
  {
    id: 'lit227',
    text: 'What is the end?',
    answers: A('lit227', 'Conclusion of story', [
      'Beginning',
      'Middle',
      'Title',
    ]),
    level: 1,
  },
  {
    id: 'lit228',
    text: 'What is a title?',
    answers: A('lit228', 'Name of book or story', [
      'Author name',
      'Character name',
      'Place name',
    ]),
    level: 1,
  },
  {
    id: 'lit229',
    text: 'What is an author?',
    answers: A('lit229', 'Person who writes book', [
      'Person who reads',
      'Person who sells',
      'Person who prints',
    ]),
    level: 1,
  },
  {
    id: 'lit230',
    text: 'What is a chapter?',
    answers: A('lit230', 'Section of book', [
      'Whole book',
      'Single page',
      'Single sentence',
    ]),
    level: 1,
  },
  {
    id: 'lit231',
    text: 'What is a page?',
    answers: A('lit231', 'Single sheet in book', [
      'Whole book',
      'Chapter',
      'Cover',
    ]),
    level: 1,
  },
  {
    id: 'lit232',
    text: 'What is a sentence?',
    answers: A('lit232', 'Complete thought with words', [
      'Single word',
      'Paragraph',
      'Chapter',
    ]),
    level: 1,
  },
  {
    id: 'lit233',
    text: 'What is a paragraph?',
    answers: A('lit233', 'Group of sentences', [
      'Single sentence',
      'Single word',
      'Chapter',
    ]),
    level: 1,
  },
  {
    id: 'lit234',
    text: 'What is a word?',
    answers: A('lit234', 'Unit of language', [
      'Sentence',
      'Paragraph',
      'Chapter',
    ]),
    level: 1,
  },
  {
    id: 'lit235',
    text: 'What is a letter?',
    answers: A('lit235', 'Symbol in alphabet', [
      'Word',
      'Sentence',
      'Paragraph',
    ]),
    level: 1,
  },
  {
    id: 'lit236',
    text: 'What is fiction?',
    answers: A('lit236', 'Made-up stories', [
      'True stories',
      'Facts',
      'History',
    ]),
    level: 1,
  },
  {
    id: 'lit237',
    text: 'What is non-fiction?',
    answers: A('lit237', 'True or factual writing', [
      'Made-up stories',
      'Fantasy',
      'Fairy tales',
    ]),
    level: 1,
  },
  {
    id: 'lit238',
    text: 'What is a fairy tale?',
    answers: A('lit238', 'Story with magic and fantasy', [
      'True story',
      'News article',
      'Biography',
    ]),
    level: 1,
  },
  {
    id: 'lit239',
    text: 'What is a poem?',
    answers: A('lit239', 'Writing with rhythm and often rhyme', [
      'Prose',
      'Novel',
      'Essay',
    ]),
    level: 1,
  },
  {
    id: 'lit240',
    text: 'What is rhyme?',
    answers: A('lit240', 'Words that sound alike', [
      'Words that look alike',
      'Words that mean alike',
      'Random words',
    ]),
    level: 1,
  },
  {
    id: 'lit241',
    text: 'What is a library?',
    answers: A('lit241', 'Place with books to borrow', [
      'Place to buy books',
      'Place to write books',
      'Place to print books',
    ]),
    level: 1,
  },
  {
    id: 'lit242',
    text: 'What is a bookstore?',
    answers: A('lit242', 'Place to buy books', [
      'Place to borrow books',
      'Place to write books',
      'Place to print books',
    ]),
    level: 1,
  },
  {
    id: 'lit243',
    text: 'What is a novel?',
    answers: A('lit243', 'Long fiction book', ['Short story', 'Poem', 'Essay']),
    level: 1,
  },
  {
    id: 'lit244',
    text: 'What is a short story?',
    answers: A('lit244', 'Brief fiction narrative', ['Novel', 'Poem', 'Essay']),
    level: 1,
  },
  {
    id: 'lit245',
    text: 'What is a magazine?',
    answers: A('lit245', 'Periodical publication', [
      'Book',
      'Newspaper',
      'Novel',
    ]),
    level: 1,
  },
  {
    id: 'lit246',
    text: 'What is a newspaper?',
    answers: A('lit246', 'Daily publication with news', [
      'Book',
      'Magazine',
      'Novel',
    ]),
    level: 1,
  },
  {
    id: 'lit247',
    text: 'What is a comic book?',
    answers: A('lit247', 'Book with pictures and text', [
      'Book with only text',
      'Book with only pictures',
      'Audio book',
    ]),
    level: 1,
  },
  {
    id: 'lit248',
    text: 'What is a picture book?',
    answers: A('lit248', 'Book with many illustrations', [
      'Book with no pictures',
      'Comic book',
      'Novel',
    ]),
    level: 1,
  },
  {
    id: 'lit249',
    text: 'What is an illustration?',
    answers: A('lit249', 'Picture in a book', [
      'Text in book',
      'Cover of book',
      'Title of book',
    ]),
    level: 1,
  },
  {
    id: 'lit250',
    text: 'What is a cover?',
    answers: A('lit250', 'Outside of book', [
      'Inside of book',
      'Page of book',
      'Chapter of book',
    ]),
    level: 1,
  },
  // ===== LEVEL 2-4: More Questions =====
  {
    id: 'lit251',
    text: 'What is a protagonist?',
    answers: A('lit251', 'Main character', [
      'Supporting character',
      'Villain',
      'Narrator',
    ]),
    level: 2,
  },
  {
    id: 'lit252',
    text: 'What is an antagonist?',
    answers: A('lit252', 'Character opposing protagonist', [
      'Main character',
      'Supporting character',
      'Narrator',
    ]),
    level: 2,
  },
  {
    id: 'lit253',
    text: 'What is a narrator?',
    answers: A('lit253', 'Voice telling the story', [
      'Main character',
      'Villain',
      'Author',
    ]),
    level: 2,
  },
  {
    id: 'lit254',
    text: 'What is first person?',
    answers: A('lit254', 'Narration using I', [
      'Narration using he/she',
      'Narration using you',
      'No narration',
    ]),
    level: 2,
  },
  {
    id: 'lit255',
    text: 'What is third person?',
    answers: A('lit255', 'Narration using he/she/they', [
      'Narration using I',
      'Narration using you',
      'No narration',
    ]),
    level: 2,
  },
  {
    id: 'lit256',
    text: 'What is dialogue?',
    answers: A('lit256', 'Conversation between characters', [
      'Description',
      'Narration',
      'Action',
    ]),
    level: 2,
  },
  {
    id: 'lit257',
    text: 'What is a theme?',
    answers: A('lit257', 'Central idea of story', [
      'Plot',
      'Setting',
      'Character',
    ]),
    level: 2,
  },
  {
    id: 'lit258',
    text: 'What is conflict?',
    answers: A('lit258', 'Problem or struggle in story', [
      'Resolution',
      'Peace',
      'Ending',
    ]),
    level: 2,
  },
  {
    id: 'lit259',
    text: 'What is resolution?',
    answers: A('lit259', 'How conflict is solved', [
      'Beginning of conflict',
      'Middle of conflict',
      'No solution',
    ]),
    level: 2,
  },
  {
    id: 'lit260',
    text: 'What is climax?',
    answers: A('lit260', 'Most exciting part of story', [
      'Beginning',
      'End',
      'Resolution',
    ]),
    level: 2,
  },
  {
    id: 'lit261',
    text: 'What is foreshadowing?',
    answers: A('lit261', 'Hints about future events', [
      'Flashback',
      'Description',
      'Dialogue',
    ]),
    level: 3,
  },
  {
    id: 'lit262',
    text: 'What is flashback?',
    answers: A('lit262', 'Scene from the past', [
      'Scene from future',
      'Present scene',
      'Foreshadowing',
    ]),
    level: 3,
  },
  {
    id: 'lit263',
    text: 'What is a metaphor?',
    answers: A('lit263', 'Comparison without like or as', [
      'Comparison with like',
      'Exaggeration',
      'Understatement',
    ]),
    level: 3,
  },
  {
    id: 'lit264',
    text: 'What is a simile?',
    answers: A('lit264', 'Comparison using like or as', [
      'Comparison without like',
      'Exaggeration',
      'Understatement',
    ]),
    level: 3,
  },
  {
    id: 'lit265',
    text: 'What is personification?',
    answers: A('lit265', 'Giving human traits to non-human', [
      'Comparison',
      'Exaggeration',
      'Understatement',
    ]),
    level: 3,
  },
  {
    id: 'lit266',
    text: 'What is hyperbole?',
    answers: A('lit266', 'Exaggeration for effect', [
      'Understatement',
      'Literal statement',
      'Comparison',
    ]),
    level: 3,
  },
  {
    id: 'lit267',
    text: 'What is irony?',
    answers: A('lit267', 'Opposite of what is expected', [
      'What is expected',
      'Literal meaning',
      'No meaning',
    ]),
    level: 3,
  },
  {
    id: 'lit268',
    text: 'What is symbolism?',
    answers: A('lit268', 'Using objects to represent ideas', [
      'Literal meaning',
      'No meaning',
      'Random objects',
    ]),
    level: 3,
  },
  {
    id: 'lit269',
    text: 'What is imagery?',
    answers: A('lit269', 'Descriptive language appealing to senses', [
      'Plain language',
      'Technical language',
      'No description',
    ]),
    level: 3,
  },
  {
    id: 'lit270',
    text: 'What is alliteration?',
    answers: A('lit270', 'Repetition of initial sounds', [
      'Repetition of end sounds',
      'No repetition',
      'Random sounds',
    ]),
    level: 3,
  },
  {
    id: 'lit271',
    text: 'What is onomatopoeia?',
    answers: A('lit271', 'Words that sound like their meaning', [
      'Silent words',
      'Random words',
      'Long words',
    ]),
    level: 3,
  },
  {
    id: 'lit272',
    text: 'What is a stanza?',
    answers: A('lit272', 'Group of lines in poem', [
      'Single line',
      'Whole poem',
      'Title',
    ]),
    level: 3,
  },
  {
    id: 'lit273',
    text: 'What is a verse?',
    answers: A('lit273', 'Line or section of poem', [
      'Whole poem',
      'Title',
      'Author',
    ]),
    level: 3,
  },
  {
    id: 'lit274',
    text: 'What is prose?',
    answers: A('lit274', 'Ordinary written language', [
      'Poetry',
      'Drama',
      'Song',
    ]),
    level: 3,
  },
  {
    id: 'lit275',
    text: 'What is drama?',
    answers: A('lit275', 'Literature meant to be performed', [
      'Novel',
      'Poem',
      'Essay',
    ]),
    level: 3,
  },
  {
    id: 'lit276',
    text: 'What is a play?',
    answers: A('lit276', 'Story written for performance', [
      'Novel',
      'Poem',
      'Essay',
    ]),
    level: 2,
  },
  {
    id: 'lit277',
    text: 'What is a scene?',
    answers: A('lit277', 'Section of play or story', [
      'Whole play',
      'Single line',
      'Title',
    ]),
    level: 2,
  },
  {
    id: 'lit278',
    text: 'What is an act?',
    answers: A('lit278', 'Major division of play', ['Scene', 'Line', 'Word']),
    level: 3,
  },
  {
    id: 'lit279',
    text: 'What is tragedy?',
    answers: A('lit279', 'Story with sad ending', [
      'Story with happy ending',
      'Funny story',
      'No ending',
    ]),
    level: 3,
  },
  {
    id: 'lit280',
    text: 'What is comedy?',
    answers: A('lit280', 'Funny story or play', [
      'Sad story',
      'Scary story',
      'No story',
    ]),
    level: 3,
  },
  {
    id: 'lit281',
    text: 'What is a biography?',
    answers: A('lit281', 'Story of someones life', [
      'Made-up story',
      'Poem',
      'Play',
    ]),
    level: 2,
  },
  {
    id: 'lit282',
    text: 'What is an autobiography?',
    answers: A('lit282', 'Story of own life', [
      'Story of others life',
      'Made-up story',
      'Poem',
    ]),
    level: 2,
  },
  {
    id: 'lit283',
    text: 'What is a memoir?',
    answers: A('lit283', 'Personal account of experiences', [
      'Fiction',
      'Poetry',
      'Drama',
    ]),
    level: 3,
  },
  {
    id: 'lit284',
    text: 'What is an essay?',
    answers: A('lit284', 'Short piece on a topic', ['Novel', 'Poem', 'Play']),
    level: 2,
  },
  {
    id: 'lit285',
    text: 'What is a genre?',
    answers: A('lit285', 'Category of literature', [
      'Single book',
      'Author',
      'Character',
    ]),
    level: 2,
  },
  {
    id: 'lit286',
    text: 'What is mystery?',
    answers: A('lit286', 'Genre with puzzle to solve', [
      'Romance',
      'Comedy',
      'Horror',
    ]),
    level: 2,
  },
  {
    id: 'lit287',
    text: 'What is science fiction?',
    answers: A('lit287', 'Genre with futuristic elements', [
      'Historical fiction',
      'Romance',
      'Mystery',
    ]),
    level: 2,
  },
  {
    id: 'lit288',
    text: 'What is fantasy?',
    answers: A('lit288', 'Genre with magic and imaginary worlds', [
      'Realistic fiction',
      'Biography',
      'History',
    ]),
    level: 2,
  },
  {
    id: 'lit289',
    text: 'What is horror?',
    answers: A('lit289', 'Genre meant to frighten', [
      'Comedy',
      'Romance',
      'Adventure',
    ]),
    level: 2,
  },
  {
    id: 'lit290',
    text: 'What is romance?',
    answers: A('lit290', 'Genre focused on love', [
      'Horror',
      'Mystery',
      'Science fiction',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-8: Advanced Literature Questions =====
  {
    id: 'lit291',
    text: 'Who wrote "War and Peace"?',
    answers: A('lit291', 'Leo Tolstoy', [
      'Fyodor Dostoevsky',
      'Anton Chekhov',
      'Ivan Turgenev',
    ]),
    level: 3,
  },
  {
    id: 'lit292',
    text: 'Who wrote "Crime and Punishment"?',
    answers: A('lit292', 'Fyodor Dostoevsky', [
      'Leo Tolstoy',
      'Anton Chekhov',
      'Nikolai Gogol',
    ]),
    level: 3,
  },
  {
    id: 'lit293',
    text: 'Who wrote "The Brothers Karamazov"?',
    answers: A('lit293', 'Fyodor Dostoevsky', [
      'Leo Tolstoy',
      'Anton Chekhov',
      'Ivan Turgenev',
    ]),
    level: 3,
  },
  {
    id: 'lit294',
    text: 'Who wrote "Anna Karenina"?',
    answers: A('lit294', 'Leo Tolstoy', [
      'Fyodor Dostoevsky',
      'Anton Chekhov',
      'Nikolai Gogol',
    ]),
    level: 3,
  },
  {
    id: 'lit295',
    text: 'Who wrote "Don Quixote"?',
    answers: A('lit295', 'Miguel de Cervantes', [
      'Gabriel Garcia Marquez',
      'Jorge Luis Borges',
      'Pablo Neruda',
    ]),
    level: 3,
  },
  {
    id: 'lit296',
    text: 'Who wrote "One Hundred Years of Solitude"?',
    answers: A('lit296', 'Gabriel Garcia Marquez', [
      'Miguel de Cervantes',
      'Jorge Luis Borges',
      'Isabel Allende',
    ]),
    level: 3,
  },
  {
    id: 'lit297',
    text: 'Who wrote "The Divine Comedy"?',
    answers: A('lit297', 'Dante Alighieri', [
      'Petrarch',
      'Boccaccio',
      'Machiavelli',
    ]),
    level: 3,
  },
  {
    id: 'lit298',
    text: 'Who wrote "The Iliad"?',
    answers: A('lit298', 'Homer', ['Virgil', 'Sophocles', 'Euripides']),
    level: 3,
  },
  {
    id: 'lit299',
    text: 'Who wrote "The Odyssey"?',
    answers: A('lit299', 'Homer', ['Virgil', 'Sophocles', 'Aeschylus']),
    level: 3,
  },
  {
    id: 'lit300',
    text: 'Who wrote "The Aeneid"?',
    answers: A('lit300', 'Virgil', ['Homer', 'Ovid', 'Horace']),
    level: 3,
  },
  {
    id: 'lit301',
    text: 'What is stream of consciousness?',
    answers: A('lit301', 'Narrative technique showing thoughts', [
      'Dialogue technique',
      'Plot structure',
      'Character type',
    ]),
    level: 4,
  },
  {
    id: 'lit302',
    text: 'Who pioneered stream of consciousness?',
    answers: A('lit302', 'James Joyce', [
      'Ernest Hemingway',
      'F. Scott Fitzgerald',
      'John Steinbeck',
    ]),
    level: 4,
  },
  {
    id: 'lit303',
    text: 'What is magical realism?',
    answers: A('lit303', 'Realistic narrative with magical elements', [
      'Pure fantasy',
      'Science fiction',
      'Horror',
    ]),
    level: 4,
  },
  {
    id: 'lit304',
    text: 'Who wrote "Ulysses"?',
    answers: A('lit304', 'James Joyce', [
      'Virginia Woolf',
      'William Faulkner',
      'Ernest Hemingway',
    ]),
    level: 4,
  },
  {
    id: 'lit305',
    text: 'Who wrote "Mrs Dalloway"?',
    answers: A('lit305', 'Virginia Woolf', [
      'James Joyce',
      'Jane Austen',
      'Charlotte Bronte',
    ]),
    level: 4,
  },
  {
    id: 'lit306',
    text: 'Who wrote "To the Lighthouse"?',
    answers: A('lit306', 'Virginia Woolf', [
      'James Joyce',
      'D.H. Lawrence',
      'E.M. Forster',
    ]),
    level: 4,
  },
  {
    id: 'lit307',
    text: 'What is an unreliable narrator?',
    answers: A('lit307', 'Narrator whose credibility is compromised', [
      'Omniscient narrator',
      'Third person narrator',
      'First person narrator',
    ]),
    level: 4,
  },
  {
    id: 'lit308',
    text: 'What is dramatic irony?',
    answers: A('lit308', 'Audience knows more than characters', [
      'Characters know more',
      'No one knows',
      'Everyone knows equally',
    ]),
    level: 4,
  },
  {
    id: 'lit309',
    text: 'What is a bildungsroman?',
    answers: A('lit309', 'Coming-of-age novel', [
      'Mystery novel',
      'Romance novel',
      'Horror novel',
    ]),
    level: 4,
  },
  {
    id: 'lit310',
    text: 'What is an epistolary novel?',
    answers: A('lit310', 'Novel written as letters', [
      'Novel in verse',
      'Novel in dialogue',
      'Novel in chapters',
    ]),
    level: 4,
  },
  {
    id: 'lit311',
    text: 'Who wrote "Frankenstein"?',
    answers: A('lit311', 'Mary Shelley', [
      'Bram Stoker',
      'Edgar Allan Poe',
      'H.G. Wells',
    ]),
    level: 3,
  },
  {
    id: 'lit312',
    text: 'Who wrote "Dracula"?',
    answers: A('lit312', 'Bram Stoker', [
      'Mary Shelley',
      'Edgar Allan Poe',
      'Oscar Wilde',
    ]),
    level: 3,
  },
  {
    id: 'lit313',
    text: 'Who wrote "The Picture of Dorian Gray"?',
    answers: A('lit313', 'Oscar Wilde', [
      'Bram Stoker',
      'Charles Dickens',
      'Thomas Hardy',
    ]),
    level: 3,
  },
  {
    id: 'lit314',
    text: 'Who wrote "Wuthering Heights"?',
    answers: A('lit314', 'Emily Bronte', [
      'Charlotte Bronte',
      'Anne Bronte',
      'Jane Austen',
    ]),
    level: 3,
  },
  {
    id: 'lit315',
    text: 'Who wrote "Jane Eyre"?',
    answers: A('lit315', 'Charlotte Bronte', [
      'Emily Bronte',
      'Anne Bronte',
      'Jane Austen',
    ]),
    level: 3,
  },
  {
    id: 'lit316',
    text: 'What is a picaresque novel?',
    answers: A('lit316', 'Novel about a roguish hero', [
      'Novel about royalty',
      'Novel about war',
      'Novel about love',
    ]),
    level: 5,
  },
  {
    id: 'lit317',
    text: 'What is metafiction?',
    answers: A('lit317', 'Fiction about fiction itself', [
      'Historical fiction',
      'Science fiction',
      'Realistic fiction',
    ]),
    level: 5,
  },
  {
    id: 'lit318',
    text: 'What is postmodernism in literature?',
    answers: A('lit318', 'Movement questioning narrative conventions', [
      'Classical movement',
      'Romantic movement',
      'Realist movement',
    ]),
    level: 5,
  },
  {
    id: 'lit319',
    text: 'Who wrote "Catch-22"?',
    answers: A('lit319', 'Joseph Heller', [
      'Kurt Vonnegut',
      'Norman Mailer',
      'Philip Roth',
    ]),
    level: 4,
  },
  {
    id: 'lit320',
    text: 'Who wrote "Slaughterhouse-Five"?',
    answers: A('lit320', 'Kurt Vonnegut', [
      'Joseph Heller',
      'Norman Mailer',
      'Thomas Pynchon',
    ]),
    level: 4,
  },
  {
    id: 'lit321',
    text: 'What is the Theatre of the Absurd?',
    answers: A('lit321', 'Drama emphasizing meaninglessness', [
      'Classical drama',
      'Romantic drama',
      'Realistic drama',
    ]),
    level: 5,
  },
  {
    id: 'lit322',
    text: 'Who wrote "Waiting for Godot"?',
    answers: A('lit322', 'Samuel Beckett', [
      'Eugene Ionesco',
      'Harold Pinter',
      'Tom Stoppard',
    ]),
    level: 5,
  },
  {
    id: 'lit323',
    text: 'What is existentialist literature?',
    answers: A('lit323', 'Literature exploring existence and meaning', [
      'Romantic literature',
      'Classical literature',
      'Fantasy literature',
    ]),
    level: 5,
  },
  {
    id: 'lit324',
    text: 'Who wrote "The Stranger"?',
    answers: A('lit324', 'Albert Camus', [
      'Jean-Paul Sartre',
      'Simone de Beauvoir',
      'Franz Kafka',
    ]),
    level: 5,
  },
  {
    id: 'lit325',
    text: 'Who wrote "Nausea"?',
    answers: A('lit325', 'Jean-Paul Sartre', [
      'Albert Camus',
      'Franz Kafka',
      'Samuel Beckett',
    ]),
    level: 5,
  },
  {
    id: 'lit326',
    text: 'Who wrote "The Metamorphosis"?',
    answers: A('lit326', 'Franz Kafka', [
      'Albert Camus',
      'Jean-Paul Sartre',
      'Thomas Mann',
    ]),
    level: 4,
  },
  {
    id: 'lit327',
    text: 'Who wrote "The Trial"?',
    answers: A('lit327', 'Franz Kafka', [
      'Albert Camus',
      'Fyodor Dostoevsky',
      'Thomas Mann',
    ]),
    level: 4,
  },
  {
    id: 'lit328',
    text: 'What is naturalism in literature?',
    answers: A('lit328', 'Extreme realism showing determinism', [
      'Romanticism',
      'Classicism',
      'Symbolism',
    ]),
    level: 5,
  },
  {
    id: 'lit329',
    text: 'Who wrote "Germinal"?',
    answers: A('lit329', 'Emile Zola', [
      'Gustave Flaubert',
      'Honore de Balzac',
      'Victor Hugo',
    ]),
    level: 5,
  },
  {
    id: 'lit330',
    text: 'Who wrote "Madame Bovary"?',
    answers: A('lit330', 'Gustave Flaubert', [
      'Emile Zola',
      'Honore de Balzac',
      'Stendhal',
    ]),
    level: 4,
  },
  {
    id: 'lit331',
    text: 'What is the Harlem Renaissance?',
    answers: A('lit331', 'African American cultural movement', [
      'European movement',
      'Asian movement',
      'Latin American movement',
    ]),
    level: 5,
  },
  {
    id: 'lit332',
    text: 'Who wrote "Their Eyes Were Watching God"?',
    answers: A('lit332', 'Zora Neale Hurston', [
      'Langston Hughes',
      'Richard Wright',
      'James Baldwin',
    ]),
    level: 5,
  },
  {
    id: 'lit333',
    text: 'Who wrote "Native Son"?',
    answers: A('lit333', 'Richard Wright', [
      'James Baldwin',
      'Ralph Ellison',
      'Langston Hughes',
    ]),
    level: 5,
  },
  {
    id: 'lit334',
    text: 'Who wrote "Invisible Man"?',
    answers: A('lit334', 'Ralph Ellison', [
      'Richard Wright',
      'James Baldwin',
      'Toni Morrison',
    ]),
    level: 5,
  },
  {
    id: 'lit335',
    text: 'Who wrote "Beloved"?',
    answers: A('lit335', 'Toni Morrison', [
      'Alice Walker',
      'Maya Angelou',
      'Zora Neale Hurston',
    ]),
    level: 4,
  },
  {
    id: 'lit336',
    text: 'What is the Beat Generation?',
    answers: A('lit336', 'Post-WWII literary movement', [
      'Victorian movement',
      'Romantic movement',
      'Classical movement',
    ]),
    level: 5,
  },
  {
    id: 'lit337',
    text: 'Who wrote "On the Road"?',
    answers: A('lit337', 'Jack Kerouac', [
      'Allen Ginsberg',
      'William S. Burroughs',
      'Neal Cassady',
    ]),
    level: 5,
  },
  {
    id: 'lit338',
    text: 'Who wrote "Howl"?',
    answers: A('lit338', 'Allen Ginsberg', [
      'Jack Kerouac',
      'William S. Burroughs',
      'Lawrence Ferlinghetti',
    ]),
    level: 5,
  },
  {
    id: 'lit339',
    text: 'What is Southern Gothic?',
    answers: A('lit339', 'Genre set in American South with dark themes', [
      'Northern literature',
      'Western literature',
      'European Gothic',
    ]),
    level: 5,
  },
  {
    id: 'lit340',
    text: 'Who wrote "A Good Man Is Hard to Find"?',
    answers: A('lit340', "Flannery O'Connor", [
      'William Faulkner',
      'Carson McCullers',
      'Eudora Welty',
    ]),
    level: 5,
  },
  {
    id: 'lit341',
    text: 'Who wrote "The Sound and the Fury"?',
    answers: A('lit341', 'William Faulkner', [
      'Ernest Hemingway',
      'F. Scott Fitzgerald',
      'John Steinbeck',
    ]),
    level: 5,
  },
  {
    id: 'lit342',
    text: 'What is free indirect discourse?',
    answers: A('lit342', 'Narrative blending narrator and character voice', [
      'Direct speech',
      'Indirect speech',
      'Dialogue',
    ]),
    level: 6,
  },
  {
    id: 'lit343',
    text: 'What is defamiliarization?',
    answers: A('lit343', 'Making familiar things seem strange', [
      'Making strange things familiar',
      'Simplification',
      'Clarification',
    ]),
    level: 6,
  },
  {
    id: 'lit344',
    text: 'Who coined the term defamiliarization?',
    answers: A('lit344', 'Viktor Shklovsky', [
      'Roman Jakobson',
      'Mikhail Bakhtin',
      'Vladimir Propp',
    ]),
    level: 7,
  },
  {
    id: 'lit345',
    text: 'What is the intentional fallacy?',
    answers: A('lit345', 'Error of judging work by author intent', [
      'Error of judging by reader response',
      'Error of judging by form',
      'Error of judging by context',
    ]),
    level: 7,
  },
  {
    id: 'lit346',
    text: 'What is New Criticism?',
    answers: A('lit346', 'Close reading focusing on text itself', [
      'Historical criticism',
      'Biographical criticism',
      'Marxist criticism',
    ]),
    level: 6,
  },
  {
    id: 'lit347',
    text: 'What is deconstruction?',
    answers: A('lit347', 'Analysis revealing contradictions in texts', [
      'Construction of meaning',
      'Simple interpretation',
      'Historical analysis',
    ]),
    level: 7,
  },
  {
    id: 'lit348',
    text: 'Who is associated with deconstruction?',
    answers: A('lit348', 'Jacques Derrida', [
      'Michel Foucault',
      'Roland Barthes',
      'Jean Baudrillard',
    ]),
    level: 7,
  },
  {
    id: 'lit349',
    text: 'What is the death of the author?',
    answers: A('lit349', 'Concept separating author from text meaning', [
      'Literal author death',
      'End of writing',
      'Author biography',
    ]),
    level: 7,
  },
  {
    id: 'lit350',
    text: 'Who wrote "The Death of the Author"?',
    answers: A('lit350', 'Roland Barthes', [
      'Jacques Derrida',
      'Michel Foucault',
      'Julia Kristeva',
    ]),
    level: 7,
  },
  {
    id: 'lit351',
    text: 'What is intertextuality?',
    answers: A('lit351', 'Relationship between texts', [
      'Single text analysis',
      'Author biography',
      'Historical context',
    ]),
    level: 6,
  },
  {
    id: 'lit352',
    text: 'Who coined the term intertextuality?',
    answers: A('lit352', 'Julia Kristeva', [
      'Roland Barthes',
      'Jacques Derrida',
      'Mikhail Bakhtin',
    ]),
    level: 7,
  },
  {
    id: 'lit353',
    text: 'What is dialogism?',
    answers: A('lit353', 'Multiple voices in narrative', [
      'Single voice',
      'Monologue',
      'Silence',
    ]),
    level: 7,
  },
  {
    id: 'lit354',
    text: 'Who developed the concept of dialogism?',
    answers: A('lit354', 'Mikhail Bakhtin', [
      'Roman Jakobson',
      'Viktor Shklovsky',
      'Vladimir Propp',
    ]),
    level: 7,
  },
  {
    id: 'lit355',
    text: 'What is heteroglossia?',
    answers: A('lit355', 'Diversity of voices in language', [
      'Single language',
      'Silence',
      'Monologue',
    ]),
    level: 8,
  },
  {
    id: 'lit356',
    text: 'What is the carnivalesque?',
    answers: A('lit356', 'Subversion of hierarchy through humor', [
      'Serious literature',
      'Tragic literature',
      'Epic literature',
    ]),
    level: 8,
  },
  {
    id: 'lit357',
    text: 'What is reader-response theory?',
    answers: A('lit357', 'Focus on reader interpretation', [
      'Focus on author intent',
      'Focus on text alone',
      'Focus on history',
    ]),
    level: 6,
  },
  {
    id: 'lit358',
    text: 'Who is associated with reader-response theory?',
    answers: A('lit358', 'Stanley Fish', [
      'Harold Bloom',
      'Northrop Frye',
      'M.H. Abrams',
    ]),
    level: 7,
  },
  {
    id: 'lit359',
    text: 'What is the anxiety of influence?',
    answers: A('lit359', 'Poets struggle with predecessors', [
      'Readers struggle',
      'Critics struggle',
      'Publishers struggle',
    ]),
    level: 7,
  },
  {
    id: 'lit360',
    text: 'Who wrote "The Anxiety of Influence"?',
    answers: A('lit360', 'Harold Bloom', [
      'Stanley Fish',
      'Northrop Frye',
      'Paul de Man',
    ]),
    level: 7,
  },
  {
    id: 'lit361',
    text: 'What is archetypal criticism?',
    answers: A('lit361', 'Analysis using universal symbols', [
      'Historical analysis',
      'Biographical analysis',
      'Linguistic analysis',
    ]),
    level: 6,
  },
  {
    id: 'lit362',
    text: 'Who wrote "Anatomy of Criticism"?',
    answers: A('lit362', 'Northrop Frye', [
      'Harold Bloom',
      'M.H. Abrams',
      'Wayne Booth',
    ]),
    level: 7,
  },
  {
    id: 'lit363',
    text: 'What is narratology?',
    answers: A('lit363', 'Study of narrative structure', [
      'Study of poetry',
      'Study of drama',
      'Study of essays',
    ]),
    level: 6,
  },
  {
    id: 'lit364',
    text: 'Who is considered the father of narratology?',
    answers: A('lit364', 'Gerard Genette', [
      'Roland Barthes',
      'Tzvetan Todorov',
      'Vladimir Propp',
    ]),
    level: 8,
  },
  {
    id: 'lit365',
    text: 'What is focalization?',
    answers: A('lit365', 'Perspective through which narrative is presented', [
      'Plot structure',
      'Character development',
      'Setting description',
    ]),
    level: 7,
  },
  {
    id: 'lit366',
    text: 'What is diegesis?',
    answers: A('lit366', 'The world of the narrative', [
      'The real world',
      'The author world',
      'The reader world',
    ]),
    level: 8,
  },
  {
    id: 'lit367',
    text: 'What is mimesis?',
    answers: A('lit367', 'Imitation of reality in art', [
      'Creation of fantasy',
      'Abstract expression',
      'Pure imagination',
    ]),
    level: 6,
  },
  {
    id: 'lit368',
    text: 'Who wrote "Poetics"?',
    answers: A('lit368', 'Aristotle', ['Plato', 'Socrates', 'Homer']),
    level: 4,
  },
  {
    id: 'lit369',
    text: 'What is catharsis?',
    answers: A('lit369', 'Emotional purification through art', [
      'Physical healing',
      'Mental confusion',
      'Spiritual awakening',
    ]),
    level: 5,
  },
  {
    id: 'lit370',
    text: 'What are the three unities in drama?',
    answers: A('lit370', 'Time, place, and action', [
      'Plot, character, theme',
      'Beginning, middle, end',
      'Tragedy, comedy, history',
    ]),
    level: 5,
  },
  {
    id: 'lit371',
    text: 'What is hamartia?',
    answers: A('lit371', 'Tragic flaw or error', [
      'Heroic virtue',
      'Comic relief',
      'Happy ending',
    ]),
    level: 6,
  },
  {
    id: 'lit372',
    text: 'What is hubris?',
    answers: A('lit372', 'Excessive pride leading to downfall', [
      'Humility',
      'Wisdom',
      'Courage',
    ]),
    level: 5,
  },
  {
    id: 'lit373',
    text: 'What is anagnorisis?',
    answers: A('lit373', 'Moment of recognition or discovery', [
      'Moment of confusion',
      'Moment of death',
      'Moment of birth',
    ]),
    level: 7,
  },
  {
    id: 'lit374',
    text: 'What is peripeteia?',
    answers: A('lit374', 'Reversal of fortune', [
      'Continuation of fortune',
      'Stable situation',
      'Happy ending',
    ]),
    level: 7,
  },
  {
    id: 'lit375',
    text: 'Who wrote "Oedipus Rex"?',
    answers: A('lit375', 'Sophocles', [
      'Euripides',
      'Aeschylus',
      'Aristophanes',
    ]),
    level: 4,
  },
  {
    id: 'lit376',
    text: 'Who wrote "Medea"?',
    answers: A('lit376', 'Euripides', [
      'Sophocles',
      'Aeschylus',
      'Aristophanes',
    ]),
    level: 5,
  },
  {
    id: 'lit377',
    text: 'Who wrote "The Oresteia"?',
    answers: A('lit377', 'Aeschylus', [
      'Sophocles',
      'Euripides',
      'Aristophanes',
    ]),
    level: 6,
  },
  {
    id: 'lit378',
    text: 'Who wrote "Lysistrata"?',
    answers: A('lit378', 'Aristophanes', [
      'Sophocles',
      'Euripides',
      'Aeschylus',
    ]),
    level: 6,
  },
  {
    id: 'lit379',
    text: 'What is a chorus in Greek drama?',
    answers: A('lit379', 'Group commenting on action', [
      'Single narrator',
      'Main character',
      'Villain',
    ]),
    level: 4,
  },
  {
    id: 'lit380',
    text: 'What is a deus ex machina?',
    answers: A('lit380', 'Unexpected resolution by external force', [
      'Natural resolution',
      'Character development',
      'Plot twist',
    ]),
    level: 5,
  },
  {
    id: 'lit381',
    text: 'Who wrote "The Canterbury Tales"?',
    answers: A('lit381', 'Geoffrey Chaucer', [
      'William Shakespeare',
      'John Milton',
      'Edmund Spenser',
    ]),
    level: 3,
  },
  {
    id: 'lit382',
    text: 'Who wrote "Beowulf"?',
    answers: A('lit382', 'Unknown Anglo-Saxon poet', [
      'Geoffrey Chaucer',
      'William Shakespeare',
      'John Milton',
    ]),
    level: 4,
  },
  {
    id: 'lit383',
    text: 'Who wrote "Sir Gawain and the Green Knight"?',
    answers: A('lit383', 'Unknown Pearl Poet', [
      'Geoffrey Chaucer',
      'Thomas Malory',
      'Edmund Spenser',
    ]),
    level: 6,
  },
  {
    id: 'lit384',
    text: 'Who wrote "Le Morte d\'Arthur"?',
    answers: A('lit384', 'Thomas Malory', [
      'Geoffrey Chaucer',
      'Edmund Spenser',
      'John Milton',
    ]),
    level: 5,
  },
  {
    id: 'lit385',
    text: 'Who wrote "The Faerie Queene"?',
    answers: A('lit385', 'Edmund Spenser', [
      'John Milton',
      'Geoffrey Chaucer',
      'William Shakespeare',
    ]),
    level: 6,
  },
  {
    id: 'lit386',
    text: 'What is an allegory?',
    answers: A('lit386', 'Story with symbolic meaning', [
      'Literal story',
      'Historical account',
      'Biography',
    ]),
    level: 3,
  },
  {
    id: 'lit387',
    text: 'Who wrote "Pilgrim\'s Progress"?',
    answers: A('lit387', 'John Bunyan', [
      'John Milton',
      'Daniel Defoe',
      'Jonathan Swift',
    ]),
    level: 5,
  },
  {
    id: 'lit388',
    text: 'Who wrote "Robinson Crusoe"?',
    answers: A('lit388', 'Daniel Defoe', [
      'Jonathan Swift',
      'Henry Fielding',
      'Samuel Richardson',
    ]),
    level: 3,
  },
  {
    id: 'lit389',
    text: 'Who wrote "Gulliver\'s Travels"?',
    answers: A('lit389', 'Jonathan Swift', [
      'Daniel Defoe',
      'Henry Fielding',
      'Laurence Sterne',
    ]),
    level: 3,
  },
  {
    id: 'lit390',
    text: 'Who wrote "Tom Jones"?',
    answers: A('lit390', 'Henry Fielding', [
      'Samuel Richardson',
      'Daniel Defoe',
      'Laurence Sterne',
    ]),
    level: 5,
  },
  {
    id: 'lit391',
    text: 'Who wrote "Pamela"?',
    answers: A('lit391', 'Samuel Richardson', [
      'Henry Fielding',
      'Daniel Defoe',
      'Jonathan Swift',
    ]),
    level: 6,
  },
  {
    id: 'lit392',
    text: 'Who wrote "Tristram Shandy"?',
    answers: A('lit392', 'Laurence Sterne', [
      'Henry Fielding',
      'Samuel Richardson',
      'Daniel Defoe',
    ]),
    level: 6,
  },
  {
    id: 'lit393',
    text: 'What is the Gothic novel?',
    answers: A('lit393', 'Genre with horror and mystery', [
      'Romantic comedy',
      'Historical fiction',
      'Science fiction',
    ]),
    level: 4,
  },
  {
    id: 'lit394',
    text: 'Who wrote "The Castle of Otranto"?',
    answers: A('lit394', 'Horace Walpole', [
      'Ann Radcliffe',
      'Matthew Lewis',
      'Mary Shelley',
    ]),
    level: 6,
  },
  {
    id: 'lit395',
    text: 'Who wrote "The Mysteries of Udolpho"?',
    answers: A('lit395', 'Ann Radcliffe', [
      'Horace Walpole',
      'Matthew Lewis',
      'Mary Shelley',
    ]),
    level: 7,
  },
  {
    id: 'lit396',
    text: 'What is Romanticism?',
    answers: A('lit396', 'Movement emphasizing emotion and nature', [
      'Movement emphasizing reason',
      'Movement emphasizing science',
      'Movement emphasizing industry',
    ]),
    level: 4,
  },
  {
    id: 'lit397',
    text: 'Who wrote "Lyrical Ballads"?',
    answers: A('lit397', 'Wordsworth and Coleridge', [
      'Byron and Shelley',
      'Keats and Blake',
      'Tennyson and Browning',
    ]),
    level: 5,
  },
  {
    id: 'lit398',
    text: 'Who wrote "The Rime of the Ancient Mariner"?',
    answers: A('lit398', 'Samuel Taylor Coleridge', [
      'William Wordsworth',
      'John Keats',
      'Percy Shelley',
    ]),
    level: 4,
  },
  {
    id: 'lit399',
    text: 'Who wrote "Ode to a Nightingale"?',
    answers: A('lit399', 'John Keats', [
      'Percy Shelley',
      'William Wordsworth',
      'Lord Byron',
    ]),
    level: 5,
  },
  {
    id: 'lit400',
    text: 'Who wrote "Ozymandias"?',
    answers: A('lit400', 'Percy Bysshe Shelley', [
      'John Keats',
      'Lord Byron',
      'William Wordsworth',
    ]),
    level: 5,
  },
  {
    id: 'lit401',
    text: 'Who wrote "Don Juan"?',
    answers: A('lit401', 'Lord Byron', [
      'Percy Shelley',
      'John Keats',
      'William Wordsworth',
    ]),
    level: 5,
  },
  {
    id: 'lit402',
    text: 'Who wrote "Songs of Innocence and Experience"?',
    answers: A('lit402', 'William Blake', [
      'William Wordsworth',
      'Samuel Coleridge',
      'John Keats',
    ]),
    level: 5,
  },
  {
    id: 'lit403',
    text: 'What is Victorian literature?',
    answers: A('lit403', 'Literature from Queen Victoria era', [
      'Medieval literature',
      'Renaissance literature',
      'Modern literature',
    ]),
    level: 3,
  },
  {
    id: 'lit404',
    text: 'Who wrote "In Memoriam"?',
    answers: A('lit404', 'Alfred Lord Tennyson', [
      'Robert Browning',
      'Matthew Arnold',
      'Gerard Manley Hopkins',
    ]),
    level: 6,
  },
  {
    id: 'lit405',
    text: 'Who wrote "My Last Duchess"?',
    answers: A('lit405', 'Robert Browning', [
      'Alfred Tennyson',
      'Matthew Arnold',
      'Thomas Hardy',
    ]),
    level: 5,
  },
  {
    id: 'lit406',
    text: 'What is a dramatic monologue?',
    answers: A('lit406', 'Poem spoken by single character', [
      'Dialogue between characters',
      'Narrative poem',
      'Lyric poem',
    ]),
    level: 4,
  },
  {
    id: 'lit407',
    text: 'Who wrote "Middlemarch"?',
    answers: A('lit407', 'George Eliot', [
      'Charles Dickens',
      'Thomas Hardy',
      'Anthony Trollope',
    ]),
    level: 4,
  },
  {
    id: 'lit408',
    text: "What was George Eliot's real name?",
    answers: A('lit408', 'Mary Ann Evans', [
      'Charlotte Bronte',
      'Jane Austen',
      'Elizabeth Gaskell',
    ]),
    level: 5,
  },
  {
    id: 'lit409',
    text: 'Who wrote "Tess of the d\'Urbervilles"?',
    answers: A('lit409', 'Thomas Hardy', [
      'George Eliot',
      'Charles Dickens',
      'Anthony Trollope',
    ]),
    level: 4,
  },
  {
    id: 'lit410',
    text: 'Who wrote "Jude the Obscure"?',
    answers: A('lit410', 'Thomas Hardy', [
      'George Eliot',
      'Charles Dickens',
      'Henry James',
    ]),
    level: 5,
  },
  {
    id: 'lit411',
    text: 'Who wrote "The Portrait of a Lady"?',
    answers: A('lit411', 'Henry James', [
      'Edith Wharton',
      'Thomas Hardy',
      'George Eliot',
    ]),
    level: 5,
  },
  {
    id: 'lit412',
    text: 'Who wrote "The Turn of the Screw"?',
    answers: A('lit412', 'Henry James', [
      'Edith Wharton',
      'Oscar Wilde',
      'Bram Stoker',
    ]),
    level: 5,
  },
  {
    id: 'lit413',
    text: 'Who wrote "The Age of Innocence"?',
    answers: A('lit413', 'Edith Wharton', [
      'Henry James',
      'F. Scott Fitzgerald',
      'Willa Cather',
    ]),
    level: 5,
  },
  {
    id: 'lit414',
    text: 'Who wrote "The House of Mirth"?',
    answers: A('lit414', 'Edith Wharton', [
      'Henry James',
      'Kate Chopin',
      'Willa Cather',
    ]),
    level: 6,
  },
  {
    id: 'lit415',
    text: 'Who wrote "The Awakening"?',
    answers: A('lit415', 'Kate Chopin', [
      'Edith Wharton',
      'Charlotte Perkins Gilman',
      'Willa Cather',
    ]),
    level: 5,
  },
  {
    id: 'lit416',
    text: 'Who wrote "The Yellow Wallpaper"?',
    answers: A('lit416', 'Charlotte Perkins Gilman', [
      'Kate Chopin',
      'Edith Wharton',
      'Virginia Woolf',
    ]),
    level: 5,
  },
  {
    id: 'lit417',
    text: 'What is Modernism in literature?',
    answers: A('lit417', 'Early 20th century experimental movement', [
      'Victorian movement',
      'Romantic movement',
      'Classical movement',
    ]),
    level: 6,
  },
  {
    id: 'lit418',
    text: 'Who wrote "Heart of Darkness"?',
    answers: A('lit418', 'Joseph Conrad', [
      'Rudyard Kipling',
      'E.M. Forster',
      'Graham Greene',
    ]),
    level: 4,
  },
  {
    id: 'lit419',
    text: 'Who wrote "Lord Jim"?',
    answers: A('lit419', 'Joseph Conrad', [
      'Herman Melville',
      'Robert Louis Stevenson',
      'Jack London',
    ]),
    level: 5,
  },
  {
    id: 'lit420',
    text: 'Who wrote "A Passage to India"?',
    answers: A('lit420', 'E.M. Forster', [
      'Joseph Conrad',
      'Rudyard Kipling',
      'Paul Scott',
    ]),
    level: 5,
  },
  {
    id: 'lit421',
    text: 'Who wrote "Howards End"?',
    answers: A('lit421', 'E.M. Forster', [
      'Virginia Woolf',
      'D.H. Lawrence',
      'Henry James',
    ]),
    level: 5,
  },
  {
    id: 'lit422',
    text: 'Who wrote "Sons and Lovers"?',
    answers: A('lit422', 'D.H. Lawrence', [
      'E.M. Forster',
      'Thomas Hardy',
      'James Joyce',
    ]),
    level: 5,
  },
  {
    id: 'lit423',
    text: 'Who wrote "Women in Love"?',
    answers: A('lit423', 'D.H. Lawrence', [
      'Virginia Woolf',
      'E.M. Forster',
      'Henry James',
    ]),
    level: 5,
  },
  {
    id: 'lit424',
    text: 'Who wrote "A Portrait of the Artist as a Young Man"?',
    answers: A('lit424', 'James Joyce', [
      'Virginia Woolf',
      'D.H. Lawrence',
      'Samuel Beckett',
    ]),
    level: 4,
  },
  {
    id: 'lit425',
    text: 'Who wrote "Dubliners"?',
    answers: A('lit425', 'James Joyce', [
      'Oscar Wilde',
      'Samuel Beckett',
      'W.B. Yeats',
    ]),
    level: 4,
  },
  {
    id: 'lit426',
    text: 'Who wrote "The Waves"?',
    answers: A('lit426', 'Virginia Woolf', [
      'James Joyce',
      'D.H. Lawrence',
      'E.M. Forster',
    ]),
    level: 6,
  },
  {
    id: 'lit427',
    text: 'Who wrote "Orlando"?',
    answers: A('lit427', 'Virginia Woolf', [
      'Vita Sackville-West',
      'E.M. Forster',
      'Daphne du Maurier',
    ]),
    level: 6,
  },
  {
    id: 'lit428',
    text: 'Who wrote "Rebecca"?',
    answers: A('lit428', 'Daphne du Maurier', [
      'Agatha Christie',
      'Virginia Woolf',
      'Iris Murdoch',
    ]),
    level: 4,
  },
  {
    id: 'lit429',
    text: 'Who wrote "The Thirty-Nine Steps"?',
    answers: A('lit429', 'John Buchan', [
      'Erskine Childers',
      'Graham Greene',
      'John le Carré',
    ]),
    level: 5,
  },
  {
    id: 'lit430',
    text: 'Who wrote "The Spy Who Came in from the Cold"?',
    answers: A('lit430', 'John le Carré', [
      'Ian Fleming',
      'Graham Greene',
      'Len Deighton',
    ]),
    level: 5,
  },
  {
    id: 'lit431',
    text: 'Who created James Bond?',
    answers: A('lit431', 'Ian Fleming', [
      'John le Carré',
      'Graham Greene',
      'Frederick Forsyth',
    ]),
    level: 3,
  },
  {
    id: 'lit432',
    text: 'Who wrote "The Power and the Glory"?',
    answers: A('lit432', 'Graham Greene', [
      'Evelyn Waugh',
      'Anthony Burgess',
      'Muriel Spark',
    ]),
    level: 6,
  },
  {
    id: 'lit433',
    text: 'Who wrote "Brideshead Revisited"?',
    answers: A('lit433', 'Evelyn Waugh', [
      'Graham Greene',
      'Anthony Powell',
      'Aldous Huxley',
    ]),
    level: 5,
  },
  {
    id: 'lit434',
    text: 'Who wrote "A Clockwork Orange"?',
    answers: A('lit434', 'Anthony Burgess', [
      'George Orwell',
      'Aldous Huxley',
      'J.G. Ballard',
    ]),
    level: 4,
  },
  {
    id: 'lit435',
    text: 'Who wrote "The Prime of Miss Jean Brodie"?',
    answers: A('lit435', 'Muriel Spark', [
      'Iris Murdoch',
      'Doris Lessing',
      'Margaret Drabble',
    ]),
    level: 6,
  },
  {
    id: 'lit436',
    text: 'Who wrote "The Golden Notebook"?',
    answers: A('lit436', 'Doris Lessing', [
      'Iris Murdoch',
      'Muriel Spark',
      'Margaret Atwood',
    ]),
    level: 6,
  },
  {
    id: 'lit437',
    text: 'Who wrote "The Sea, The Sea"?',
    answers: A('lit437', 'Iris Murdoch', [
      'Muriel Spark',
      'Doris Lessing',
      'A.S. Byatt',
    ]),
    level: 7,
  },
  {
    id: 'lit438',
    text: 'Who wrote "Possession"?',
    answers: A('lit438', 'A.S. Byatt', [
      'Iris Murdoch',
      'Margaret Drabble',
      'Penelope Fitzgerald',
    ]),
    level: 6,
  },
  {
    id: 'lit439',
    text: 'Who wrote "The Remains of the Day"?',
    answers: A('lit439', 'Kazuo Ishiguro', [
      'Salman Rushdie',
      'Ian McEwan',
      'Julian Barnes',
    ]),
    level: 5,
  },
  {
    id: 'lit440',
    text: 'Who wrote "Never Let Me Go"?',
    answers: A('lit440', 'Kazuo Ishiguro', [
      'Ian McEwan',
      'Margaret Atwood',
      'David Mitchell',
    ]),
    level: 5,
  },
  {
    id: 'lit441',
    text: 'Who wrote "Atonement"?',
    answers: A('lit441', 'Ian McEwan', [
      'Kazuo Ishiguro',
      'Julian Barnes',
      'Martin Amis',
    ]),
    level: 4,
  },
  {
    id: 'lit442',
    text: 'Who wrote "Cloud Atlas"?',
    answers: A('lit442', 'David Mitchell', [
      'Kazuo Ishiguro',
      'Ian McEwan',
      'Salman Rushdie',
    ]),
    level: 5,
  },
  {
    id: 'lit443',
    text: 'Who wrote "White Teeth"?',
    answers: A('lit443', 'Zadie Smith', [
      'Monica Ali',
      'Andrea Levy',
      'Hanif Kureishi',
    ]),
    level: 5,
  },
  {
    id: 'lit444',
    text: 'Who wrote "The Handmaid\'s Tale"?',
    answers: A('lit444', 'Margaret Atwood', [
      'Ursula K. Le Guin',
      'Octavia Butler',
      'Doris Lessing',
    ]),
    level: 3,
  },
  {
    id: 'lit445',
    text: 'Who wrote "The Blind Assassin"?',
    answers: A('lit445', 'Margaret Atwood', [
      'Alice Munro',
      'Carol Shields',
      'Anne Michaels',
    ]),
    level: 6,
  },
  {
    id: 'lit446',
    text: 'Who wrote "The Left Hand of Darkness"?',
    answers: A('lit446', 'Ursula K. Le Guin', [
      'Octavia Butler',
      'Margaret Atwood',
      'Joanna Russ',
    ]),
    level: 6,
  },
  {
    id: 'lit447',
    text: 'Who wrote "Kindred"?',
    answers: A('lit447', 'Octavia Butler', [
      'Ursula K. Le Guin',
      'Toni Morrison',
      'Alice Walker',
    ]),
    level: 6,
  },
  {
    id: 'lit448',
    text: 'Who wrote "Dune"?',
    answers: A('lit448', 'Frank Herbert', [
      'Isaac Asimov',
      'Arthur C. Clarke',
      'Robert Heinlein',
    ]),
    level: 3,
  },
  {
    id: 'lit449',
    text: 'Who wrote "Foundation"?',
    answers: A('lit449', 'Isaac Asimov', [
      'Arthur C. Clarke',
      'Robert Heinlein',
      'Frank Herbert',
    ]),
    level: 4,
  },
  {
    id: 'lit450',
    text: 'Who wrote "2001: A Space Odyssey"?',
    answers: A('lit450', 'Arthur C. Clarke', [
      'Isaac Asimov',
      'Ray Bradbury',
      'Philip K. Dick',
    ]),
    level: 4,
  },
  {
    id: 'lit451',
    text: 'Who wrote "Do Androids Dream of Electric Sheep?"?',
    answers: A('lit451', 'Philip K. Dick', [
      'Isaac Asimov',
      'Arthur C. Clarke',
      'William Gibson',
    ]),
    level: 5,
  },
  {
    id: 'lit452',
    text: 'Who wrote "Neuromancer"?',
    answers: A('lit452', 'William Gibson', [
      'Philip K. Dick',
      'Neal Stephenson',
      'Bruce Sterling',
    ]),
    level: 5,
  },
  {
    id: 'lit453',
    text: 'Who wrote "Snow Crash"?',
    answers: A('lit453', 'Neal Stephenson', [
      'William Gibson',
      'Philip K. Dick',
      'Bruce Sterling',
    ]),
    level: 5,
  },
  {
    id: 'lit454',
    text: 'Who wrote "The Martian Chronicles"?',
    answers: A('lit454', 'Ray Bradbury', [
      'Isaac Asimov',
      'Arthur C. Clarke',
      'Robert Heinlein',
    ]),
    level: 4,
  },
  {
    id: 'lit455',
    text: 'Who wrote "Stranger in a Strange Land"?',
    answers: A('lit455', 'Robert Heinlein', [
      'Isaac Asimov',
      'Arthur C. Clarke',
      'Frank Herbert',
    ]),
    level: 5,
  },
  {
    id: 'lit456',
    text: 'Who wrote "Ender\'s Game"?',
    answers: A('lit456', 'Orson Scott Card', [
      'Isaac Asimov',
      'Robert Heinlein',
      'Joe Haldeman',
    ]),
    level: 4,
  },
  {
    id: 'lit457',
    text: 'Who wrote "The Forever War"?',
    answers: A('lit457', 'Joe Haldeman', [
      'Robert Heinlein',
      'Orson Scott Card',
      'John Scalzi',
    ]),
    level: 6,
  },
  {
    id: 'lit458',
    text: 'Who wrote "American Gods"?',
    answers: A('lit458', 'Neil Gaiman', [
      'Terry Pratchett',
      'China Miéville',
      'Susanna Clarke',
    ]),
    level: 4,
  },
  {
    id: 'lit459',
    text: 'Who wrote "Good Omens" with Terry Pratchett?',
    answers: A('lit459', 'Neil Gaiman', [
      'Douglas Adams',
      'Tom Holt',
      'Robert Rankin',
    ]),
    level: 4,
  },
  {
    id: 'lit460',
    text: 'Who wrote "The Hitchhiker\'s Guide to the Galaxy"?',
    answers: A('lit460', 'Douglas Adams', [
      'Terry Pratchett',
      'Neil Gaiman',
      'Tom Holt',
    ]),
    level: 3,
  },
  {
    id: 'lit461',
    text: 'Who wrote the Discworld series?',
    answers: A('lit461', 'Terry Pratchett', [
      'Neil Gaiman',
      'Douglas Adams',
      'Robert Jordan',
    ]),
    level: 3,
  },
  {
    id: 'lit462',
    text: 'Who wrote "Jonathan Strange & Mr Norrell"?',
    answers: A('lit462', 'Susanna Clarke', [
      'Neil Gaiman',
      'China Miéville',
      'Erin Morgenstern',
    ]),
    level: 6,
  },
  {
    id: 'lit463',
    text: 'Who wrote "The Night Circus"?',
    answers: A('lit463', 'Erin Morgenstern', [
      'Susanna Clarke',
      'Neil Gaiman',
      'Lev Grossman',
    ]),
    level: 5,
  },
  {
    id: 'lit464',
    text: 'Who wrote "The Name of the Wind"?',
    answers: A('lit464', 'Patrick Rothfuss', [
      'Brandon Sanderson',
      'Joe Abercrombie',
      'Scott Lynch',
    ]),
    level: 4,
  },
  {
    id: 'lit465',
    text: 'Who wrote "A Game of Thrones"?',
    answers: A('lit465', 'George R.R. Martin', [
      'Robert Jordan',
      'Brandon Sanderson',
      'Joe Abercrombie',
    ]),
    level: 2,
  },
  {
    id: 'lit466',
    text: 'Who wrote "The Wheel of Time" series?',
    answers: A('lit466', 'Robert Jordan', [
      'George R.R. Martin',
      'Brandon Sanderson',
      'Terry Brooks',
    ]),
    level: 4,
  },
  {
    id: 'lit467',
    text: 'Who completed "The Wheel of Time" after Robert Jordan\'s death?',
    answers: A('lit467', 'Brandon Sanderson', [
      'George R.R. Martin',
      'Terry Brooks',
      'Steven Erikson',
    ]),
    level: 5,
  },
  {
    id: 'lit468',
    text: 'Who wrote "The Way of Kings"?',
    answers: A('lit468', 'Brandon Sanderson', [
      'Patrick Rothfuss',
      'Joe Abercrombie',
      'Steven Erikson',
    ]),
    level: 5,
  },
  {
    id: 'lit469',
    text: 'Who wrote "The First Law" trilogy?',
    answers: A('lit469', 'Joe Abercrombie', [
      'Brandon Sanderson',
      'Mark Lawrence',
      'Peter V. Brett',
    ]),
    level: 6,
  },
  {
    id: 'lit470',
    text: 'Who wrote "The Lies of Locke Lamora"?',
    answers: A('lit470', 'Scott Lynch', [
      'Joe Abercrombie',
      'Patrick Rothfuss',
      'Brent Weeks',
    ]),
    level: 6,
  },
  {
    id: 'lit471',
    text: 'Who wrote "The Hunger Games"?',
    answers: A('lit471', 'Suzanne Collins', [
      'Veronica Roth',
      'James Dashner',
      'Cassandra Clare',
    ]),
    level: 2,
  },
  {
    id: 'lit472',
    text: 'Who wrote "Divergent"?',
    answers: A('lit472', 'Veronica Roth', [
      'Suzanne Collins',
      'James Dashner',
      'Marie Lu',
    ]),
    level: 3,
  },
  {
    id: 'lit473',
    text: 'Who wrote "The Maze Runner"?',
    answers: A('lit473', 'James Dashner', [
      'Suzanne Collins',
      'Veronica Roth',
      'Rick Riordan',
    ]),
    level: 3,
  },
  {
    id: 'lit474',
    text: 'Who wrote the Percy Jackson series?',
    answers: A('lit474', 'Rick Riordan', [
      'Suzanne Collins',
      'James Dashner',
      'Cassandra Clare',
    ]),
    level: 2,
  },
  {
    id: 'lit475',
    text: 'Who wrote "The Fault in Our Stars"?',
    answers: A('lit475', 'John Green', [
      'Rainbow Rowell',
      'Gayle Forman',
      'Jenny Han',
    ]),
    level: 3,
  },
  {
    id: 'lit476',
    text: 'Who wrote "Eleanor & Park"?',
    answers: A('lit476', 'Rainbow Rowell', [
      'John Green',
      'Gayle Forman',
      'Sarah Dessen',
    ]),
    level: 4,
  },
  {
    id: 'lit477',
    text: 'Who wrote "The Kite Runner"?',
    answers: A('lit477', 'Khaled Hosseini', [
      'Arundhati Roy',
      'Mohsin Hamid',
      'Jhumpa Lahiri',
    ]),
    level: 4,
  },
  {
    id: 'lit478',
    text: 'Who wrote "A Thousand Splendid Suns"?',
    answers: A('lit478', 'Khaled Hosseini', [
      'Arundhati Roy',
      'Mohsin Hamid',
      'Jhumpa Lahiri',
    ]),
    level: 4,
  },
  {
    id: 'lit479',
    text: 'Who wrote "The Namesake"?',
    answers: A('lit479', 'Jhumpa Lahiri', [
      'Arundhati Roy',
      'Khaled Hosseini',
      'Vikram Seth',
    ]),
    level: 5,
  },
  {
    id: 'lit480',
    text: 'Who wrote "The Reluctant Fundamentalist"?',
    answers: A('lit480', 'Mohsin Hamid', [
      'Khaled Hosseini',
      'Jhumpa Lahiri',
      'Salman Rushdie',
    ]),
    level: 6,
  },
  {
    id: 'lit481',
    text: 'Who wrote "Life of Pi"?',
    answers: A('lit481', 'Yann Martel', [
      'Salman Rushdie',
      'Michael Ondaatje',
      'Rohinton Mistry',
    ]),
    level: 4,
  },
  {
    id: 'lit482',
    text: 'Who wrote "The English Patient"?',
    answers: A('lit482', 'Michael Ondaatje', [
      'Yann Martel',
      'Salman Rushdie',
      'Kazuo Ishiguro',
    ]),
    level: 5,
  },
  {
    id: 'lit483',
    text: 'Who wrote "The Road"?',
    answers: A('lit483', 'Cormac McCarthy', [
      'Don DeLillo',
      'Thomas Pynchon',
      'Philip Roth',
    ]),
    level: 4,
  },
  {
    id: 'lit484',
    text: 'Who wrote "Blood Meridian"?',
    answers: A('lit484', 'Cormac McCarthy', [
      'Larry McMurtry',
      'Thomas Pynchon',
      'Don DeLillo',
    ]),
    level: 6,
  },
  {
    id: 'lit485',
    text: 'Who wrote "No Country for Old Men"?',
    answers: A('lit485', 'Cormac McCarthy', [
      'Larry McMurtry',
      'Elmore Leonard',
      'James Lee Burke',
    ]),
    level: 4,
  },
  {
    id: 'lit486',
    text: 'Who wrote "White Noise"?',
    answers: A('lit486', 'Don DeLillo', [
      'Thomas Pynchon',
      'Philip Roth',
      'John Updike',
    ]),
    level: 6,
  },
  {
    id: 'lit487',
    text: 'Who wrote "Gravity\'s Rainbow"?',
    answers: A('lit487', 'Thomas Pynchon', [
      'Don DeLillo',
      'William Gaddis',
      'John Barth',
    ]),
    level: 7,
  },
  {
    id: 'lit488',
    text: 'Who wrote "Infinite Jest"?',
    answers: A('lit488', 'David Foster Wallace', [
      'Thomas Pynchon',
      'Don DeLillo',
      'Jonathan Franzen',
    ]),
    level: 6,
  },
  {
    id: 'lit489',
    text: 'Who wrote "The Corrections"?',
    answers: A('lit489', 'Jonathan Franzen', [
      'David Foster Wallace',
      'Jeffrey Eugenides',
      'Michael Chabon',
    ]),
    level: 5,
  },
  {
    id: 'lit490',
    text: 'Who wrote "Middlesex"?',
    answers: A('lit490', 'Jeffrey Eugenides', [
      'Jonathan Franzen',
      'Michael Chabon',
      'Jonathan Safran Foer',
    ]),
    level: 5,
  },
  {
    id: 'lit491',
    text: 'Who wrote "The Amazing Adventures of Kavalier & Clay"?',
    answers: A('lit491', 'Michael Chabon', [
      'Jonathan Lethem',
      'Jeffrey Eugenides',
      'Jonathan Safran Foer',
    ]),
    level: 6,
  },
  {
    id: 'lit492',
    text: 'Who wrote "Everything Is Illuminated"?',
    answers: A('lit492', 'Jonathan Safran Foer', [
      'Michael Chabon',
      'Jeffrey Eugenides',
      'Nicole Krauss',
    ]),
    level: 6,
  },
  {
    id: 'lit493',
    text: 'Who wrote "The History of Love"?',
    answers: A('lit493', 'Nicole Krauss', [
      'Jonathan Safran Foer',
      'Michael Chabon',
      'Jhumpa Lahiri',
    ]),
    level: 6,
  },
  {
    id: 'lit494',
    text: 'Who wrote "The Brief Wondrous Life of Oscar Wao"?',
    answers: A('lit494', 'Junot Díaz', [
      'Sandra Cisneros',
      'Julia Alvarez',
      'Cristina García',
    ]),
    level: 5,
  },
  {
    id: 'lit495',
    text: 'Who wrote "The House on Mango Street"?',
    answers: A('lit495', 'Sandra Cisneros', [
      'Julia Alvarez',
      'Junot Díaz',
      'Ana Castillo',
    ]),
    level: 5,
  },
  {
    id: 'lit496',
    text: 'Who wrote "The Joy Luck Club"?',
    answers: A('lit496', 'Amy Tan', [
      'Maxine Hong Kingston',
      'Gish Jen',
      'Chang-rae Lee',
    ]),
    level: 4,
  },
  {
    id: 'lit497',
    text: 'Who wrote "The Woman Warrior"?',
    answers: A('lit497', 'Maxine Hong Kingston', [
      'Amy Tan',
      'Gish Jen',
      'Chang-rae Lee',
    ]),
    level: 6,
  },
  {
    id: 'lit498',
    text: 'Who wrote "Native Speaker"?',
    answers: A('lit498', 'Chang-rae Lee', [
      'Amy Tan',
      'Maxine Hong Kingston',
      'Viet Thanh Nguyen',
    ]),
    level: 7,
  },
  {
    id: 'lit499',
    text: 'Who wrote "The Sympathizer"?',
    answers: A('lit499', 'Viet Thanh Nguyen', [
      'Chang-rae Lee',
      'Ocean Vuong',
      'Celeste Ng',
    ]),
    level: 5,
  },
  {
    id: 'lit500',
    text: 'Who wrote "On Earth We\'re Briefly Gorgeous"?',
    answers: A('lit500', 'Ocean Vuong', [
      'Viet Thanh Nguyen',
      'Celeste Ng',
      'Min Jin Lee',
    ]),
    level: 5,
  },
];
