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
];
