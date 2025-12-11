import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const economicsQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'eco1',
    text: 'What is money used for?',
    answers: A('eco1', 'Buying goods and services', [
      'Decoration',
      'Building',
      'Cooking',
    ]),
    level: 1,
  },
  {
    id: 'eco2',
    text: 'What is a bank?',
    answers: A('eco2', 'Institution that holds money', [
      'Type of store',
      'Type of factory',
      'Type of school',
    ]),
    level: 1,
  },
  {
    id: 'eco3',
    text: 'What is saving?',
    answers: A('eco3', 'Keeping money for later', [
      'Spending all money',
      'Borrowing money',
      'Losing money',
    ]),
    level: 1,
  },
  {
    id: 'eco4',
    text: 'What is a price?',
    answers: A('eco4', 'Cost of a good or service', [
      'Weight of item',
      'Size of item',
      'Color of item',
    ]),
    level: 1,
  },
  {
    id: 'eco5',
    text: 'What is a budget?',
    answers: A('eco5', 'Plan for spending money', [
      'Type of bank',
      'Type of loan',
      'Type of tax',
    ]),
    level: 1,
  },
  {
    id: 'eco6',
    text: 'What is income?',
    answers: A('eco6', 'Money earned', [
      'Money spent',
      'Money lost',
      'Money borrowed',
    ]),
    level: 1,
  },
  {
    id: 'eco7',
    text: 'What is an expense?',
    answers: A('eco7', 'Money spent', [
      'Money earned',
      'Money saved',
      'Money invested',
    ]),
    level: 1,
  },
  {
    id: 'eco8',
    text: 'What is profit?',
    answers: A('eco8', 'Revenue minus costs', [
      'Revenue plus costs',
      'Only revenue',
      'Only costs',
    ]),
    level: 1,
  },
  {
    id: 'eco9',
    text: 'What is a tax?',
    answers: A('eco9', 'Money paid to government', [
      'Money paid to bank',
      'Money paid to store',
      'Money paid to friend',
    ]),
    level: 1,
  },
  {
    id: 'eco10',
    text: 'What is a loan?',
    answers: A('eco10', 'Borrowed money', [
      'Saved money',
      'Earned money',
      'Lost money',
    ]),
    level: 1,
  },
  {
    id: 'eco11',
    text: 'What is interest?',
    answers: A('eco11', 'Cost of borrowing money', [
      'Type of tax',
      'Type of profit',
      'Type of expense',
    ]),
    level: 1,
  },
  {
    id: 'eco12',
    text: 'What is inflation?',
    answers: A('eco12', 'Rising prices over time', [
      'Falling prices',
      'Stable prices',
      'No prices',
    ]),
    level: 2,
  },
  {
    id: 'eco13',
    text: 'What is supply?',
    answers: A('eco13', 'Amount available for sale', [
      'Amount wanted',
      'Amount used',
      'Amount wasted',
    ]),
    level: 2,
  },
  {
    id: 'eco14',
    text: 'What is demand?',
    answers: A('eco14', 'Amount wanted by buyers', [
      'Amount available',
      'Amount produced',
      'Amount stored',
    ]),
    level: 2,
  },
  {
    id: 'eco15',
    text: 'What happens when demand exceeds supply?',
    answers: A('eco15', 'Prices rise', [
      'Prices fall',
      'Prices stay same',
      'No effect',
    ]),
    level: 2,
  },
  {
    id: 'eco16',
    text: 'What is a market?',
    answers: A('eco16', 'Place where buyers and sellers meet', [
      'Type of bank',
      'Type of government',
      'Type of factory',
    ]),
    level: 2,
  },
  {
    id: 'eco17',
    text: 'What is GDP?',
    answers: A('eco17', 'Gross Domestic Product', [
      'General Domestic Price',
      'Government Debt Payment',
      'Global Development Plan',
    ]),
    level: 2,
  },
  {
    id: 'eco18',
    text: 'What does GDP measure?',
    answers: A('eco18', 'Total economic output', [
      'Population',
      'Land area',
      'Military strength',
    ]),
    level: 2,
  },
  {
    id: 'eco19',
    text: 'What is unemployment?',
    answers: A('eco19', 'People without jobs who want work', [
      'People with jobs',
      'People retired',
      'People in school',
    ]),
    level: 2,
  },
  {
    id: 'eco20',
    text: 'What is a recession?',
    answers: A('eco20', 'Economic decline', [
      'Economic growth',
      'Economic stability',
      'Economic boom',
    ]),
    level: 2,
  },
  {
    id: 'eco21',
    text: 'What is a stock?',
    answers: A('eco21', 'Share of company ownership', [
      'Type of bond',
      'Type of loan',
      'Type of tax',
    ]),
    level: 2,
  },
  {
    id: 'eco22',
    text: 'What is a bond?',
    answers: A('eco22', 'Loan to company or government', [
      'Share of ownership',
      'Type of tax',
      'Type of currency',
    ]),
    level: 2,
  },
  {
    id: 'eco23',
    text: 'What is the stock market?',
    answers: A('eco23', 'Place to buy and sell stocks', [
      'Type of bank',
      'Type of store',
      'Type of factory',
    ]),
    level: 2,
  },
  {
    id: 'eco24',
    text: 'What is a currency?',
    answers: A('eco24', 'Money used in a country', [
      'Type of stock',
      'Type of bond',
      'Type of tax',
    ]),
    level: 2,
  },
  {
    id: 'eco25',
    text: 'What is the US currency?',
    answers: A('eco25', 'Dollar', ['Euro', 'Pound', 'Yen']),
    level: 1,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'eco26',
    text: 'What is opportunity cost?',
    answers: A('eco26', 'Value of next best alternative', [
      'Total cost',
      'Fixed cost',
      'Variable cost',
    ]),
    level: 3,
  },
  {
    id: 'eco27',
    text: 'What is scarcity?',
    answers: A('eco27', 'Limited resources vs unlimited wants', [
      'Abundance',
      'Surplus',
      'Excess',
    ]),
    level: 3,
  },
  {
    id: 'eco28',
    text: 'What is a monopoly?',
    answers: A('eco28', 'Single seller in market', [
      'Many sellers',
      'Few sellers',
      'No sellers',
    ]),
    level: 3,
  },
  {
    id: 'eco29',
    text: 'What is an oligopoly?',
    answers: A('eco29', 'Few sellers dominating market', [
      'Single seller',
      'Many sellers',
      'No sellers',
    ]),
    level: 3,
  },
  {
    id: 'eco30',
    text: 'What is perfect competition?',
    answers: A('eco30', 'Many sellers, identical products', [
      'Single seller',
      'Few sellers',
      'No competition',
    ]),
    level: 3,
  },
  {
    id: 'eco31',
    text: 'What is elasticity?',
    answers: A('eco31', 'Responsiveness to price changes', [
      'Stiffness',
      'Rigidity',
      'Stability',
    ]),
    level: 3,
  },
  {
    id: 'eco32',
    text: 'What is marginal cost?',
    answers: A('eco32', 'Cost of producing one more unit', [
      'Total cost',
      'Average cost',
      'Fixed cost',
    ]),
    level: 3,
  },
  {
    id: 'eco33',
    text: 'What is marginal revenue?',
    answers: A('eco33', 'Revenue from selling one more unit', [
      'Total revenue',
      'Average revenue',
      'Fixed revenue',
    ]),
    level: 3,
  },
  {
    id: 'eco34',
    text: 'What is a central bank?',
    answers: A('eco34', 'Institution controlling money supply', [
      'Commercial bank',
      'Investment bank',
      'Savings bank',
    ]),
    level: 3,
  },
  {
    id: 'eco35',
    text: 'What is the Federal Reserve?',
    answers: A('eco35', 'US central bank', [
      'US Treasury',
      'US Congress',
      'US President',
    ]),
    level: 3,
  },
  {
    id: 'eco36',
    text: 'What is monetary policy?',
    answers: A('eco36', 'Central bank control of money supply', [
      'Government spending',
      'Tax policy',
      'Trade policy',
    ]),
    level: 4,
  },
  {
    id: 'eco37',
    text: 'What is fiscal policy?',
    answers: A('eco37', 'Government spending and taxation', [
      'Central bank policy',
      'Trade policy',
      'Monetary policy',
    ]),
    level: 4,
  },
  {
    id: 'eco38',
    text: 'What is a trade deficit?',
    answers: A('eco38', 'Imports exceed exports', [
      'Exports exceed imports',
      'Equal imports and exports',
      'No trade',
    ]),
    level: 4,
  },
  {
    id: 'eco39',
    text: 'What is a trade surplus?',
    answers: A('eco39', 'Exports exceed imports', [
      'Imports exceed exports',
      'Equal imports and exports',
      'No trade',
    ]),
    level: 4,
  },
  {
    id: 'eco40',
    text: 'What is comparative advantage?',
    answers: A('eco40', 'Ability to produce at lower opportunity cost', [
      'Absolute advantage',
      'Competitive advantage',
      'First mover advantage',
    ]),
    level: 4,
  },
  {
    id: 'eco41',
    text: 'What is absolute advantage?',
    answers: A('eco41', 'Ability to produce more with same resources', [
      'Comparative advantage',
      'Competitive advantage',
      'First mover advantage',
    ]),
    level: 4,
  },
  {
    id: 'eco42',
    text: 'What is a tariff?',
    answers: A('eco42', 'Tax on imports', [
      'Tax on exports',
      'Tax on income',
      'Tax on property',
    ]),
    level: 4,
  },
  {
    id: 'eco43',
    text: 'What is a quota?',
    answers: A('eco43', 'Limit on quantity of imports', [
      'Limit on price',
      'Limit on quality',
      'Limit on exports',
    ]),
    level: 4,
  },
  {
    id: 'eco44',
    text: 'What is free trade?',
    answers: A('eco44', 'Trade without barriers', [
      'Trade with tariffs',
      'Trade with quotas',
      'No trade',
    ]),
    level: 4,
  },
  {
    id: 'eco45',
    text: 'What is protectionism?',
    answers: A('eco45', 'Policies to protect domestic industries', [
      'Free trade',
      'Open markets',
      'Globalization',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'eco46',
    text: 'What is the Phillips Curve?',
    answers: A(
      'eco46',
      'Inverse relationship between inflation and unemployment',
      ['Direct relationship', 'No relationship', 'Random relationship'],
    ),
    level: 5,
  },
  {
    id: 'eco47',
    text: 'What is stagflation?',
    answers: A('eco47', 'High inflation with high unemployment', [
      'Low inflation with low unemployment',
      'High growth',
      'Low growth',
    ]),
    level: 5,
  },
  {
    id: 'eco48',
    text: 'What is quantitative easing?',
    answers: A('eco48', 'Central bank buying assets to increase money supply', [
      'Raising interest rates',
      'Reducing money supply',
      'Selling assets',
    ]),
    level: 5,
  },
  {
    id: 'eco49',
    text: 'What is the liquidity trap?',
    answers: A('eco49', 'Monetary policy ineffective at zero interest rates', [
      'High interest rates',
      'Inflation',
      'Deflation',
    ]),
    level: 5,
  },
  {
    id: 'eco50',
    text: 'What is moral hazard?',
    answers: A('eco50', 'Risk-taking due to protection from consequences', [
      'Adverse selection',
      'Market failure',
      'Externality',
    ]),
    level: 5,
  },
  {
    id: 'eco51',
    text: 'What is adverse selection?',
    answers: A('eco51', 'Information asymmetry before transaction', [
      'Moral hazard',
      'Market failure',
      'Externality',
    ]),
    level: 6,
  },
  {
    id: 'eco52',
    text: 'What is a Giffen good?',
    answers: A('eco52', 'Good with upward-sloping demand curve', [
      'Normal good',
      'Inferior good',
      'Luxury good',
    ]),
    level: 6,
  },
  {
    id: 'eco53',
    text: 'What is a Veblen good?',
    answers: A('eco53', 'Good desired more at higher prices', [
      'Normal good',
      'Inferior good',
      'Giffen good',
    ]),
    level: 6,
  },
  {
    id: 'eco54',
    text: 'What is the Laffer Curve?',
    answers: A('eco54', 'Relationship between tax rates and revenue', [
      'Phillips Curve',
      'Demand curve',
      'Supply curve',
    ]),
    level: 6,
  },
  {
    id: 'eco55',
    text: 'What is Pareto efficiency?',
    answers: A(
      'eco55',
      'No one can be better off without making someone worse off',
      ['Everyone equal', 'Maximum output', 'Minimum cost'],
    ),
    level: 6,
  },
  {
    id: 'eco56',
    text: 'What is the Coase theorem?',
    answers: A(
      'eco56',
      'Efficient outcomes through bargaining with clear property rights',
      [
        'Government intervention needed',
        'Market failure inevitable',
        'Externalities unsolvable',
      ],
    ),
    level: 7,
  },
  {
    id: 'eco57',
    text: 'What is the Arrow impossibility theorem?',
    answers: A('eco57', 'No perfect voting system exists', [
      'Perfect voting exists',
      'Democracy is best',
      'Dictatorship is best',
    ]),
    level: 7,
  },
  {
    id: 'eco58',
    text: 'What is the Nash equilibrium?',
    answers: A('eco58', 'No player can benefit by changing strategy alone', [
      'Optimal outcome',
      'Cooperative solution',
      'Zero-sum game',
    ]),
    level: 7,
  },
  {
    id: 'eco59',
    text: "What is the prisoner's dilemma?",
    answers: A(
      'eco59',
      'Game where individual rationality leads to suboptimal outcome',
      ['Cooperative game', 'Zero-sum game', 'Perfect information game'],
    ),
    level: 7,
  },
  {
    id: 'eco60',
    text: 'What is the Stolper-Samuelson theorem?',
    answers: A('eco60', 'Trade affects factor prices', [
      'Trade has no effect',
      'Trade benefits all',
      'Trade harms all',
    ]),
    level: 8,
  },
  {
    id: 'eco61',
    text: 'What is the Heckscher-Ohlin model?',
    answers: A('eco61', 'Trade based on factor endowments', [
      'Trade based on technology',
      'Trade based on preferences',
      'Trade based on size',
    ]),
    level: 8,
  },
  {
    id: 'eco62',
    text: 'What is the Mundell-Fleming model?',
    answers: A('eco62', 'Open economy IS-LM model', [
      'Closed economy model',
      'Growth model',
      'Trade model',
    ]),
    level: 8,
  },
  {
    id: 'eco63',
    text: 'What is the impossible trinity?',
    answers: A(
      'eco63',
      'Cannot have fixed exchange rate, free capital flow, and independent monetary policy',
      ['All three possible', 'Two possible', 'None possible'],
    ),
    level: 8,
  },
  {
    id: 'eco64',
    text: 'What is the Solow growth model?',
    answers: A('eco64', 'Neoclassical growth model with capital accumulation', [
      'Keynesian model',
      'Monetarist model',
      'Austrian model',
    ]),
    level: 8,
  },
  {
    id: 'eco65',
    text: 'What is endogenous growth theory?',
    answers: A('eco65', 'Growth driven by internal factors like innovation', [
      'Growth driven by external factors',
      'No growth possible',
      'Constant growth',
    ]),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'eco66',
    text: 'What is money?',
    answers: A('eco66', 'Medium of exchange', [
      'Type of food',
      'Type of clothing',
      'Type of shelter',
    ]),
    level: 1,
  },
  {
    id: 'eco67',
    text: 'What is a bank?',
    answers: A('eco67', 'Institution that handles money', [
      'Type of store',
      'Type of factory',
      'Type of farm',
    ]),
    level: 1,
  },
  {
    id: 'eco68',
    text: 'What is saving?',
    answers: A('eco68', 'Keeping money for later', [
      'Spending all money',
      'Borrowing money',
      'Losing money',
    ]),
    level: 1,
  },
  {
    id: 'eco69',
    text: 'What is spending?',
    answers: A('eco69', 'Using money to buy things', [
      'Saving money',
      'Earning money',
      'Losing money',
    ]),
    level: 1,
  },
  {
    id: 'eco70',
    text: 'What is a job?',
    answers: A('eco70', 'Work done for pay', ['Play', 'Sleep', 'Vacation']),
    level: 1,
  },
  {
    id: 'eco71',
    text: 'What is a salary?',
    answers: A('eco71', 'Money paid for work', [
      'Money given away',
      'Money found',
      'Money borrowed',
    ]),
    level: 1,
  },
  {
    id: 'eco72',
    text: 'What is a price?',
    answers: A('eco72', 'Cost of something', [
      'Size of something',
      'Color of something',
      'Weight of something',
    ]),
    level: 1,
  },
  {
    id: 'eco73',
    text: 'What is buying?',
    answers: A('eco73', 'Getting something with money', [
      'Giving something away',
      'Making something',
      'Breaking something',
    ]),
    level: 1,
  },
  {
    id: 'eco74',
    text: 'What is selling?',
    answers: A('eco74', 'Giving something for money', [
      'Buying something',
      'Making something',
      'Breaking something',
    ]),
    level: 1,
  },
  {
    id: 'eco75',
    text: 'What is a store?',
    answers: A('eco75', 'Place to buy things', [
      'Place to sleep',
      'Place to play',
      'Place to swim',
    ]),
    level: 1,
  },
  {
    id: 'eco76',
    text: 'What is profit?',
    answers: A('eco76', 'Money earned after costs', [
      'Money lost',
      'Money borrowed',
      'Money saved',
    ]),
    level: 2,
  },
  {
    id: 'eco77',
    text: 'What is loss?',
    answers: A('eco77', 'Money lost in business', [
      'Money earned',
      'Money saved',
      'Money borrowed',
    ]),
    level: 2,
  },
  {
    id: 'eco78',
    text: 'What is a budget?',
    answers: A('eco78', 'Plan for spending money', [
      'Random spending',
      'No spending',
      'Unlimited spending',
    ]),
    level: 2,
  },
  {
    id: 'eco79',
    text: 'What is income?',
    answers: A('eco79', 'Money received', [
      'Money spent',
      'Money lost',
      'Money borrowed',
    ]),
    level: 2,
  },
  {
    id: 'eco80',
    text: 'What is expense?',
    answers: A('eco80', 'Money spent', [
      'Money received',
      'Money saved',
      'Money found',
    ]),
    level: 2,
  },
  {
    id: 'eco81',
    text: 'What is a loan?',
    answers: A('eco81', 'Borrowed money', [
      'Given money',
      'Found money',
      'Earned money',
    ]),
    level: 2,
  },
  {
    id: 'eco82',
    text: 'What is interest?',
    answers: A('eco82', 'Cost of borrowing money', [
      'Free money',
      'Lost money',
      'Found money',
    ]),
    level: 2,
  },
  {
    id: 'eco83',
    text: 'What is a tax?',
    answers: A('eco83', 'Money paid to government', [
      'Money from government',
      'Free money',
      'Borrowed money',
    ]),
    level: 2,
  },
  {
    id: 'eco84',
    text: 'What is a market?',
    answers: A('eco84', 'Place where buying and selling happens', [
      'Place to sleep',
      'Place to play',
      'Place to study',
    ]),
    level: 2,
  },
  {
    id: 'eco85',
    text: 'What is competition?',
    answers: A('eco85', 'Businesses trying to win customers', [
      'Businesses working together',
      'No businesses',
      'One business only',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'eco86',
    text: 'What is GDP?',
    answers: A('eco86', 'Total value of goods and services produced', [
      'Total population',
      'Total land area',
      'Total number of businesses',
    ]),
    level: 3,
  },
  {
    id: 'eco87',
    text: 'What is inflation?',
    answers: A('eco87', 'Rising prices over time', [
      'Falling prices',
      'Stable prices',
      'No prices',
    ]),
    level: 3,
  },
  {
    id: 'eco88',
    text: 'What is deflation?',
    answers: A('eco88', 'Falling prices over time', [
      'Rising prices',
      'Stable prices',
      'No prices',
    ]),
    level: 3,
  },
  {
    id: 'eco89',
    text: 'What is unemployment?',
    answers: A('eco89', 'People without jobs who want work', [
      'People with jobs',
      'People not wanting work',
      'Retired people',
    ]),
    level: 3,
  },
  {
    id: 'eco90',
    text: 'What is a recession?',
    answers: A('eco90', 'Economic decline', [
      'Economic growth',
      'Economic stability',
      'No economy',
    ]),
    level: 3,
  },
  {
    id: 'eco91',
    text: 'What is a depression?',
    answers: A('eco91', 'Severe economic decline', [
      'Mild decline',
      'Economic growth',
      'Economic stability',
    ]),
    level: 3,
  },
  {
    id: 'eco92',
    text: 'What is a stock?',
    answers: A('eco92', 'Ownership share in company', [
      'Loan to company',
      'Product of company',
      'Employee of company',
    ]),
    level: 3,
  },
  {
    id: 'eco93',
    text: 'What is a bond?',
    answers: A('eco93', 'Loan to government or company', [
      'Ownership share',
      'Product',
      'Service',
    ]),
    level: 3,
  },
  {
    id: 'eco94',
    text: 'What is the stock market?',
    answers: A('eco94', 'Place to buy and sell stocks', [
      'Place to buy food',
      'Place to buy cars',
      'Place to buy houses',
    ]),
    level: 3,
  },
  {
    id: 'eco95',
    text: 'What is a dividend?',
    answers: A('eco95', 'Payment to shareholders', [
      'Payment to employees',
      'Payment to government',
      'Payment to suppliers',
    ]),
    level: 3,
  },
  {
    id: 'eco96',
    text: 'What is monetary policy?',
    answers: A('eco96', 'Central bank control of money supply', [
      'Government spending',
      'Tax policy',
      'Trade policy',
    ]),
    level: 4,
  },
  {
    id: 'eco97',
    text: 'What is fiscal policy?',
    answers: A('eco97', 'Government spending and taxation', [
      'Central bank policy',
      'Trade policy',
      'Foreign policy',
    ]),
    level: 4,
  },
  {
    id: 'eco98',
    text: 'What is the Federal Reserve?',
    answers: A('eco98', 'US central bank', [
      'US government',
      'US military',
      'US court',
    ]),
    level: 4,
  },
  {
    id: 'eco99',
    text: 'What is the interest rate?',
    answers: A('eco99', 'Cost of borrowing money', [
      'Amount of money',
      'Type of money',
      'Color of money',
    ]),
    level: 4,
  },
  {
    id: 'eco100',
    text: 'What is exchange rate?',
    answers: A('eco100', 'Value of one currency in another', [
      'Interest rate',
      'Tax rate',
      'Growth rate',
    ]),
    level: 4,
  },
  {
    id: 'eco101',
    text: 'What is a trade deficit?',
    answers: A('eco101', 'Imports exceed exports', [
      'Exports exceed imports',
      'Equal trade',
      'No trade',
    ]),
    level: 4,
  },
  {
    id: 'eco102',
    text: 'What is a trade surplus?',
    answers: A('eco102', 'Exports exceed imports', [
      'Imports exceed exports',
      'Equal trade',
      'No trade',
    ]),
    level: 4,
  },
  {
    id: 'eco103',
    text: 'What is a tariff?',
    answers: A('eco103', 'Tax on imports', [
      'Tax on exports',
      'Tax on income',
      'Tax on property',
    ]),
    level: 4,
  },
  {
    id: 'eco104',
    text: 'What is free trade?',
    answers: A('eco104', 'Trade without barriers', [
      'Trade with barriers',
      'No trade',
      'Limited trade',
    ]),
    level: 4,
  },
  {
    id: 'eco105',
    text: 'What is protectionism?',
    answers: A('eco105', 'Protecting domestic industries', [
      'Free trade',
      'No trade',
      'Unlimited imports',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'eco106',
    text: 'What is marginal utility?',
    answers: A('eco106', 'Additional satisfaction from one more unit', [
      'Total satisfaction',
      'Average satisfaction',
      'No satisfaction',
    ]),
    level: 5,
  },
  {
    id: 'eco107',
    text: 'What is elasticity?',
    answers: A('eco107', 'Responsiveness to price changes', [
      'Fixed response',
      'No response',
      'Random response',
    ]),
    level: 5,
  },
  {
    id: 'eco108',
    text: 'What is a monopoly?',
    answers: A('eco108', 'Single seller in market', [
      'Many sellers',
      'No sellers',
      'Two sellers',
    ]),
    level: 5,
  },
  {
    id: 'eco109',
    text: 'What is an oligopoly?',
    answers: A('eco109', 'Few sellers dominating market', [
      'Single seller',
      'Many sellers',
      'No sellers',
    ]),
    level: 5,
  },
  {
    id: 'eco110',
    text: 'What is perfect competition?',
    answers: A('eco110', 'Many sellers with identical products', [
      'Single seller',
      'Few sellers',
      'No sellers',
    ]),
    level: 5,
  },
  {
    id: 'eco111',
    text: 'What is the Phillips curve?',
    answers: A('eco111', 'Relationship between inflation and unemployment', [
      'Relationship between GDP and population',
      'Relationship between exports and imports',
      'Relationship between taxes and spending',
    ]),
    level: 6,
  },
  {
    id: 'eco112',
    text: 'What is the Laffer curve?',
    answers: A('eco112', 'Relationship between tax rates and revenue', [
      'Relationship between inflation and unemployment',
      'Relationship between supply and demand',
      'Relationship between imports and exports',
    ]),
    level: 6,
  },
  {
    id: 'eco113',
    text: 'What is the multiplier effect?',
    answers: A('eco113', 'Spending creating more spending', [
      'Spending creating less spending',
      'No effect',
      'Random effect',
    ]),
    level: 6,
  },
  {
    id: 'eco114',
    text: 'What is crowding out?',
    answers: A('eco114', 'Government borrowing reducing private investment', [
      'Government increasing private investment',
      'No effect',
      'Random effect',
    ]),
    level: 6,
  },
  {
    id: 'eco115',
    text: 'What is quantitative easing?',
    answers: A('eco115', 'Central bank buying assets', [
      'Central bank selling assets',
      'Government spending',
      'Tax cuts',
    ]),
    level: 6,
  },
  {
    id: 'eco116',
    text: 'What is the liquidity trap?',
    answers: A('eco116', 'Monetary policy ineffective at zero rates', [
      'Monetary policy always effective',
      'Fiscal policy ineffective',
      'No trap',
    ]),
    level: 7,
  },
  {
    id: 'eco117',
    text: 'What is rational expectations?',
    answers: A('eco117', 'People use all available information', [
      'People ignore information',
      'People use random information',
      'No expectations',
    ]),
    level: 7,
  },
  {
    id: 'eco118',
    text: 'What is the efficient market hypothesis?',
    answers: A('eco118', 'Prices reflect all information', [
      'Prices ignore information',
      'Prices are random',
      'No prices',
    ]),
    level: 7,
  },
  {
    id: 'eco119',
    text: 'What is moral hazard?',
    answers: A('eco119', 'Risk-taking due to protection from consequences', [
      'Risk avoidance',
      'No risk',
      'Random risk',
    ]),
    level: 7,
  },
  {
    id: 'eco120',
    text: 'What is adverse selection?',
    answers: A('eco120', 'Bad risks more likely to participate', [
      'Good risks more likely',
      'Equal participation',
      'No participation',
    ]),
    level: 7,
  },
  {
    id: 'eco121',
    text: 'What is the Coase theorem?',
    answers: A('eco121', 'Efficient outcomes through bargaining', [
      'Inefficient outcomes',
      'No outcomes',
      'Random outcomes',
    ]),
    level: 8,
  },
  {
    id: 'eco122',
    text: 'What is the Arrow impossibility theorem?',
    answers: A('eco122', 'No perfect voting system exists', [
      'Perfect voting exists',
      'Voting unnecessary',
      'Random voting',
    ]),
    level: 8,
  },
  {
    id: 'eco123',
    text: 'What is the Stolper-Samuelson theorem?',
    answers: A('eco123', 'Trade affects factor prices', [
      'Trade has no effect',
      'Trade affects only goods',
      'Trade affects only services',
    ]),
    level: 8,
  },
  {
    id: 'eco124',
    text: 'What is the Heckscher-Ohlin model?',
    answers: A('eco124', 'Trade based on factor endowments', [
      'Trade based on technology',
      'Trade based on preferences',
      'No trade',
    ]),
    level: 8,
  },
  {
    id: 'eco125',
    text: 'What is the Mundell-Fleming model?',
    answers: A('eco125', 'Open economy macroeconomic model', [
      'Closed economy model',
      'Microeconomic model',
      'No model',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'eco126',
    text: 'What is money?',
    answers: A('eco126', 'Medium of exchange', [
      'Only coins',
      'Only paper',
      'Only digital',
    ]),
    level: 1,
  },
  {
    id: 'eco127',
    text: 'What is a price?',
    answers: A('eco127', 'Amount paid for something', [
      'Quality of item',
      'Size of item',
      'Color of item',
    ]),
    level: 1,
  },
  {
    id: 'eco128',
    text: 'What is buying?',
    answers: A('eco128', 'Exchanging money for goods', [
      'Giving away',
      'Throwing away',
      'Keeping',
    ]),
    level: 1,
  },
  {
    id: 'eco129',
    text: 'What is selling?',
    answers: A('eco129', 'Exchanging goods for money', [
      'Buying',
      'Keeping',
      'Throwing away',
    ]),
    level: 1,
  },
  {
    id: 'eco130',
    text: 'What is a customer?',
    answers: A('eco130', 'Person who buys', [
      'Person who sells',
      'Person who makes',
      'Person who delivers',
    ]),
    level: 1,
  },
  {
    id: 'eco131',
    text: 'What is a store?',
    answers: A('eco131', 'Place to buy things', [
      'Place to live',
      'Place to work',
      'Place to sleep',
    ]),
    level: 1,
  },
  {
    id: 'eco132',
    text: 'What is a bank?',
    answers: A('eco132', 'Place to keep money', [
      'Place to buy food',
      'Place to buy clothes',
      'Place to buy cars',
    ]),
    level: 1,
  },
  {
    id: 'eco133',
    text: 'What is saving?',
    answers: A('eco133', 'Keeping money for later', [
      'Spending all money',
      'Throwing money away',
      'Giving money away',
    ]),
    level: 1,
  },
  {
    id: 'eco134',
    text: 'What is spending?',
    answers: A('eco134', 'Using money to buy things', [
      'Saving money',
      'Keeping money',
      'Hiding money',
    ]),
    level: 1,
  },
  {
    id: 'eco135',
    text: 'What is a job?',
    answers: A('eco135', 'Work done for pay', ['Play', 'Sleep', 'Vacation']),
    level: 1,
  },
  {
    id: 'eco136',
    text: 'What is a salary?',
    answers: A('eco136', 'Money paid for work', [
      'Money for gifts',
      'Money found',
      'Money borrowed',
    ]),
    level: 1,
  },
  {
    id: 'eco137',
    text: 'What is a wage?',
    answers: A('eco137', 'Payment for work', ['Gift', 'Loan', 'Prize']),
    level: 1,
  },
  {
    id: 'eco138',
    text: 'What is an employee?',
    answers: A('eco138', 'Person who works for someone', [
      'Person who owns business',
      'Customer',
      'Visitor',
    ]),
    level: 1,
  },
  {
    id: 'eco139',
    text: 'What is an employer?',
    answers: A('eco139', 'Person who hires workers', [
      'Employee',
      'Customer',
      'Visitor',
    ]),
    level: 1,
  },
  {
    id: 'eco140',
    text: 'What is a business?',
    answers: A('eco140', 'Organization selling goods or services', [
      'Hobby',
      'Game',
      'Sport',
    ]),
    level: 1,
  },
  {
    id: 'eco141',
    text: 'What is profit?',
    answers: A('eco141', 'Money earned after costs', [
      'Money spent',
      'Money lost',
      'Money borrowed',
    ]),
    level: 1,
  },
  {
    id: 'eco142',
    text: 'What is a loss?',
    answers: A('eco142', 'When costs exceed revenue', [
      'When revenue exceeds costs',
      'Breaking even',
      'No change',
    ]),
    level: 1,
  },
  {
    id: 'eco143',
    text: 'What is a coin?',
    answers: A('eco143', 'Metal money', [
      'Paper money',
      'Digital money',
      'Credit card',
    ]),
    level: 1,
  },
  {
    id: 'eco144',
    text: 'What is a bill?',
    answers: A('eco144', 'Paper money', [
      'Metal money',
      'Digital money',
      'Credit card',
    ]),
    level: 1,
  },
  {
    id: 'eco145',
    text: 'What is change?',
    answers: A('eco145', 'Money returned after purchase', [
      'Money paid',
      'Money saved',
      'Money borrowed',
    ]),
    level: 1,
  },
  {
    id: 'eco146',
    text: 'What is expensive?',
    answers: A('eco146', 'Costing a lot of money', [
      'Costing little',
      'Free',
      'Cheap',
    ]),
    level: 1,
  },
  {
    id: 'eco147',
    text: 'What is cheap?',
    answers: A('eco147', 'Costing little money', [
      'Costing a lot',
      'Free',
      'Expensive',
    ]),
    level: 1,
  },
  {
    id: 'eco148',
    text: 'What is free?',
    answers: A('eco148', 'Costing no money', ['Expensive', 'Cheap', 'Costly']),
    level: 1,
  },
  {
    id: 'eco149',
    text: 'What is a discount?',
    answers: A('eco149', 'Reduction in price', [
      'Increase in price',
      'Same price',
      'No price',
    ]),
    level: 1,
  },
  {
    id: 'eco150',
    text: 'What is a sale?',
    answers: A('eco150', 'Items sold at lower prices', [
      'Items at higher prices',
      'Items not for sale',
      'Items given away',
    ]),
    level: 1,
  },
  {
    id: 'eco151',
    text: 'What is a receipt?',
    answers: A('eco151', 'Proof of purchase', [
      'Proof of sale',
      'Coupon',
      'Advertisement',
    ]),
    level: 1,
  },
  {
    id: 'eco152',
    text: 'What is a coupon?',
    answers: A('eco152', 'Voucher for discount', [
      'Receipt',
      'Bill',
      'Invoice',
    ]),
    level: 1,
  },
  {
    id: 'eco153',
    text: 'What is a budget?',
    answers: A('eco153', 'Plan for spending money', [
      'Plan for vacation',
      'Plan for party',
      'Plan for game',
    ]),
    level: 1,
  },
  {
    id: 'eco154',
    text: 'What is income?',
    answers: A('eco154', 'Money received', [
      'Money spent',
      'Money lost',
      'Money borrowed',
    ]),
    level: 1,
  },
  {
    id: 'eco155',
    text: 'What is an expense?',
    answers: A('eco155', 'Money spent', [
      'Money received',
      'Money saved',
      'Money found',
    ]),
    level: 1,
  },
  {
    id: 'eco156',
    text: 'What is a loan?',
    answers: A('eco156', 'Borrowed money', [
      'Given money',
      'Found money',
      'Earned money',
    ]),
    level: 1,
  },
  {
    id: 'eco157',
    text: 'What is debt?',
    answers: A('eco157', 'Money owed', [
      'Money owned',
      'Money saved',
      'Money earned',
    ]),
    level: 1,
  },
  {
    id: 'eco158',
    text: 'What is interest?',
    answers: A('eco158', 'Cost of borrowing money', [
      'Free money',
      'Gift',
      'Salary',
    ]),
    level: 1,
  },
  {
    id: 'eco159',
    text: 'What is a credit card?',
    answers: A('eco159', 'Card to borrow money for purchases', [
      'Card to save money',
      'ID card',
      'Gift card',
    ]),
    level: 1,
  },
  {
    id: 'eco160',
    text: 'What is a debit card?',
    answers: A('eco160', 'Card to spend from bank account', [
      'Credit card',
      'Gift card',
      'ID card',
    ]),
    level: 1,
  },
  {
    id: 'eco161',
    text: 'What is cash?',
    answers: A('eco161', 'Physical money', [
      'Digital money',
      'Credit',
      'Check',
    ]),
    level: 1,
  },
  {
    id: 'eco162',
    text: 'What is a check?',
    answers: A('eco162', 'Written order to pay', [
      'Cash',
      'Credit card',
      'Debit card',
    ]),
    level: 1,
  },
  {
    id: 'eco163',
    text: 'What is an ATM?',
    answers: A('eco163', 'Machine to withdraw cash', [
      'Machine to buy things',
      'Machine to make things',
      'Machine to cook',
    ]),
    level: 1,
  },
  {
    id: 'eco164',
    text: 'What is a wallet?',
    answers: A('eco164', 'Holder for money and cards', [
      'Bag',
      'Suitcase',
      'Backpack',
    ]),
    level: 1,
  },
  {
    id: 'eco165',
    text: 'What is a piggy bank?',
    answers: A('eco165', 'Container to save coins', [
      'Real pig',
      'Bank building',
      'Credit card',
    ]),
    level: 1,
  },
  {
    id: 'eco166',
    text: 'What is a market?',
    answers: A('eco166', 'Place to buy and sell', [
      'Place to sleep',
      'Place to play',
      'Place to study',
    ]),
    level: 1,
  },
  {
    id: 'eco167',
    text: 'What is trade?',
    answers: A('eco167', 'Exchange of goods or services', [
      'Keeping things',
      'Throwing things',
      'Hiding things',
    ]),
    level: 1,
  },
  {
    id: 'eco168',
    text: 'What is barter?',
    answers: A('eco168', 'Trading without money', [
      'Trading with money',
      'Buying',
      'Selling',
    ]),
    level: 1,
  },
  {
    id: 'eco169',
    text: 'What is a product?',
    answers: A('eco169', 'Something made to sell', [
      'Something to keep',
      'Something to throw',
      'Something to hide',
    ]),
    level: 1,
  },
  {
    id: 'eco170',
    text: 'What is a service?',
    answers: A('eco170', 'Work done for others', ['Product', 'Good', 'Item']),
    level: 1,
  },
  {
    id: 'eco171',
    text: 'What is a factory?',
    answers: A('eco171', 'Place where products are made', [
      'Store',
      'Bank',
      'School',
    ]),
    level: 1,
  },
  {
    id: 'eco172',
    text: 'What is manufacturing?',
    answers: A('eco172', 'Making products', [
      'Selling products',
      'Buying products',
      'Using products',
    ]),
    level: 1,
  },
  {
    id: 'eco173',
    text: 'What is a consumer?',
    answers: A('eco173', 'Person who uses products', [
      'Person who makes products',
      'Person who sells products',
      'Person who delivers products',
    ]),
    level: 1,
  },
  {
    id: 'eco174',
    text: 'What is a producer?',
    answers: A('eco174', 'Person or company that makes products', [
      'Consumer',
      'Customer',
      'Buyer',
    ]),
    level: 1,
  },
  {
    id: 'eco175',
    text: 'What is supply?',
    answers: A('eco175', 'Amount available to sell', [
      'Amount wanted to buy',
      'Price',
      'Cost',
    ]),
    level: 1,
  },
  {
    id: 'eco176',
    text: 'What is demand?',
    answers: A('eco176', 'Amount people want to buy', [
      'Amount available',
      'Price',
      'Cost',
    ]),
    level: 1,
  },
  {
    id: 'eco177',
    text: 'What is scarcity?',
    answers: A('eco177', 'Limited resources', [
      'Unlimited resources',
      'Abundance',
      'Plenty',
    ]),
    level: 1,
  },
  {
    id: 'eco178',
    text: 'What is abundance?',
    answers: A('eco178', 'Having plenty', [
      'Having little',
      'Scarcity',
      'Shortage',
    ]),
    level: 1,
  },
  {
    id: 'eco179',
    text: 'What is a need?',
    answers: A('eco179', 'Something required to live', [
      'Something wanted',
      'Luxury',
      'Extra',
    ]),
    level: 1,
  },
  {
    id: 'eco180',
    text: 'What is a want?',
    answers: A('eco180', 'Something desired but not required', [
      'Need',
      'Necessity',
      'Requirement',
    ]),
    level: 1,
  },
  {
    id: 'eco181',
    text: 'What is a tax?',
    answers: A('eco181', 'Money paid to government', [
      'Money paid to store',
      'Money paid to bank',
      'Money paid to friend',
    ]),
    level: 1,
  },
  {
    id: 'eco182',
    text: 'What is a government?',
    answers: A('eco182', 'Organization that runs a country', [
      'Business',
      'Store',
      'Bank',
    ]),
    level: 1,
  },
  {
    id: 'eco183',
    text: 'What is an economy?',
    answers: A('eco183', 'System of producing and consuming', [
      'Type of car',
      'Type of food',
      'Type of sport',
    ]),
    level: 1,
  },
  {
    id: 'eco184',
    text: 'What is wealth?',
    answers: A('eco184', 'Having lots of money or assets', [
      'Being poor',
      'Having nothing',
      'Being in debt',
    ]),
    level: 1,
  },
  {
    id: 'eco185',
    text: 'What is poverty?',
    answers: A('eco185', 'Being very poor', [
      'Being rich',
      'Having wealth',
      'Being comfortable',
    ]),
    level: 1,
  },
  {
    id: 'eco186',
    text: 'What is a millionaire?',
    answers: A('eco186', 'Person with million dollars', [
      'Person with thousand dollars',
      'Person with hundred dollars',
      'Person with no money',
    ]),
    level: 1,
  },
  {
    id: 'eco187',
    text: 'What is a billionaire?',
    answers: A('eco187', 'Person with billion dollars', [
      'Person with million dollars',
      'Person with thousand dollars',
      'Person with hundred dollars',
    ]),
    level: 1,
  },
  {
    id: 'eco188',
    text: 'What is currency?',
    answers: A('eco188', 'Money used in a country', [
      'Food',
      'Clothes',
      'Cars',
    ]),
    level: 1,
  },
  {
    id: 'eco189',
    text: 'What is the dollar?',
    answers: A('eco189', 'US currency', [
      'European currency',
      'Japanese currency',
      'Chinese currency',
    ]),
    level: 1,
  },
  {
    id: 'eco190',
    text: 'What is the euro?',
    answers: A('eco190', 'European currency', [
      'US currency',
      'Japanese currency',
      'Chinese currency',
    ]),
    level: 1,
  },
  {
    id: 'eco191',
    text: 'What is the yen?',
    answers: A('eco191', 'Japanese currency', [
      'US currency',
      'European currency',
      'Chinese currency',
    ]),
    level: 1,
  },
  {
    id: 'eco192',
    text: 'What is the pound?',
    answers: A('eco192', 'British currency', [
      'US currency',
      'European currency',
      'Japanese currency',
    ]),
    level: 1,
  },
  {
    id: 'eco193',
    text: 'What is an investment?',
    answers: A('eco193', 'Putting money to grow', [
      'Spending money',
      'Wasting money',
      'Losing money',
    ]),
    level: 1,
  },
  {
    id: 'eco194',
    text: 'What is a stock?',
    answers: A('eco194', 'Share of company ownership', [
      'Type of food',
      'Type of car',
      'Type of house',
    ]),
    level: 1,
  },
  {
    id: 'eco195',
    text: 'What is a share?',
    answers: A('eco195', 'Part ownership of company', [
      'Whole company',
      'No ownership',
      'Debt',
    ]),
    level: 1,
  },
  {
    id: 'eco196',
    text: 'What is a dividend?',
    answers: A('eco196', 'Payment to shareholders', [
      'Payment to employees',
      'Payment to customers',
      'Payment to government',
    ]),
    level: 1,
  },
  {
    id: 'eco197',
    text: 'What is a bond?',
    answers: A('eco197', 'Loan to company or government', [
      'Stock',
      'Share',
      'Dividend',
    ]),
    level: 1,
  },
  {
    id: 'eco198',
    text: 'What is insurance?',
    answers: A('eco198', 'Protection against financial loss', [
      'Investment',
      'Loan',
      'Gift',
    ]),
    level: 1,
  },
  {
    id: 'eco199',
    text: 'What is a premium?',
    answers: A('eco199', 'Payment for insurance', [
      'Payment for loan',
      'Payment for stock',
      'Payment for bond',
    ]),
    level: 1,
  },
  {
    id: 'eco200',
    text: 'What is retirement?',
    answers: A('eco200', 'Stopping work due to age', [
      'Starting work',
      'Changing jobs',
      'Getting promoted',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'eco201',
    text: 'What is inflation?',
    answers: A('eco201', 'Rising prices over time', [
      'Falling prices',
      'Stable prices',
      'No prices',
    ]),
    level: 2,
  },
  {
    id: 'eco202',
    text: 'What is deflation?',
    answers: A('eco202', 'Falling prices over time', [
      'Rising prices',
      'Stable prices',
      'No prices',
    ]),
    level: 2,
  },
  {
    id: 'eco203',
    text: 'What is recession?',
    answers: A('eco203', 'Economic decline', [
      'Economic growth',
      'Economic stability',
      'Economic boom',
    ]),
    level: 2,
  },
  {
    id: 'eco204',
    text: 'What is GDP?',
    answers: A('eco204', 'Total value of goods and services', [
      'Government debt program',
      'General domestic price',
      'Gross daily production',
    ]),
    level: 2,
  },
  {
    id: 'eco205',
    text: 'What is unemployment?',
    answers: A('eco205', 'Being without a job', [
      'Having a job',
      'Working overtime',
      'Being retired',
    ]),
    level: 2,
  },
  {
    id: 'eco206',
    text: 'What is minimum wage?',
    answers: A('eco206', 'Lowest legal pay', [
      'Highest pay',
      'Average pay',
      'No pay',
    ]),
    level: 2,
  },
  {
    id: 'eco207',
    text: 'What is a monopoly?',
    answers: A('eco207', 'Single seller in market', [
      'Many sellers',
      'No sellers',
      'Two sellers',
    ]),
    level: 2,
  },
  {
    id: 'eco208',
    text: 'What is competition?',
    answers: A('eco208', 'Multiple businesses selling similar products', [
      'Single business',
      'No businesses',
      'Monopoly',
    ]),
    level: 2,
  },
  {
    id: 'eco209',
    text: 'What is a tariff?',
    answers: A('eco209', 'Tax on imports', [
      'Tax on income',
      'Tax on property',
      'Tax on sales',
    ]),
    level: 2,
  },
  {
    id: 'eco210',
    text: 'What is an import?',
    answers: A('eco210', 'Goods brought into country', [
      'Goods sent out',
      'Goods made locally',
      'Goods stored',
    ]),
    level: 2,
  },
  {
    id: 'eco211',
    text: 'What is an export?',
    answers: A('eco211', 'Goods sent to other countries', [
      'Goods brought in',
      'Goods made locally',
      'Goods stored',
    ]),
    level: 2,
  },
  {
    id: 'eco212',
    text: 'What is free trade?',
    answers: A('eco212', 'Trade without restrictions', [
      'Trade with tariffs',
      'No trade',
      'Limited trade',
    ]),
    level: 2,
  },
  {
    id: 'eco213',
    text: 'What is a trade deficit?',
    answers: A('eco213', 'Imports exceed exports', [
      'Exports exceed imports',
      'Equal trade',
      'No trade',
    ]),
    level: 2,
  },
  {
    id: 'eco214',
    text: 'What is a trade surplus?',
    answers: A('eco214', 'Exports exceed imports', [
      'Imports exceed exports',
      'Equal trade',
      'No trade',
    ]),
    level: 2,
  },
  {
    id: 'eco215',
    text: 'What is a central bank?',
    answers: A('eco215', 'Bank that controls money supply', [
      'Regular bank',
      'Investment bank',
      'Savings bank',
    ]),
    level: 2,
  },
  {
    id: 'eco216',
    text: 'What is the Federal Reserve?',
    answers: A('eco216', 'US central bank', [
      'US government',
      'US treasury',
      'US congress',
    ]),
    level: 2,
  },
  {
    id: 'eco217',
    text: 'What is monetary policy?',
    answers: A('eco217', 'Central bank control of money', [
      'Government spending',
      'Tax policy',
      'Trade policy',
    ]),
    level: 2,
  },
  {
    id: 'eco218',
    text: 'What is fiscal policy?',
    answers: A('eco218', 'Government spending and taxes', [
      'Central bank policy',
      'Trade policy',
      'Monetary policy',
    ]),
    level: 2,
  },
  {
    id: 'eco219',
    text: 'What is a subsidy?',
    answers: A('eco219', 'Government payment to business', [
      'Tax on business',
      'Fine on business',
      'Loan to business',
    ]),
    level: 2,
  },
  {
    id: 'eco220',
    text: 'What is a bailout?',
    answers: A('eco220', 'Government rescue of failing company', [
      'Company closure',
      'Company merger',
      'Company expansion',
    ]),
    level: 2,
  },
  {
    id: 'eco221',
    text: 'What is bankruptcy?',
    answers: A('eco221', 'Legal status when unable to pay debts', [
      'Being wealthy',
      'Being profitable',
      'Being successful',
    ]),
    level: 2,
  },
  {
    id: 'eco222',
    text: 'What is a merger?',
    answers: A('eco222', 'Two companies combining', [
      'Company splitting',
      'Company closing',
      'Company starting',
    ]),
    level: 2,
  },
  {
    id: 'eco223',
    text: 'What is an acquisition?',
    answers: A('eco223', 'One company buying another', [
      'Company merger',
      'Company split',
      'Company closure',
    ]),
    level: 2,
  },
  {
    id: 'eco224',
    text: 'What is a startup?',
    answers: A('eco224', 'New business venture', [
      'Old business',
      'Large corporation',
      'Government agency',
    ]),
    level: 2,
  },
  {
    id: 'eco225',
    text: 'What is an entrepreneur?',
    answers: A('eco225', 'Person who starts business', [
      'Employee',
      'Manager',
      'Customer',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-4: More Intermediate Questions =====
  {
    id: 'eco226',
    text: 'What is venture capital?',
    answers: A('eco226', 'Investment in startups', [
      'Bank loan',
      'Government grant',
      'Personal savings',
    ]),
    level: 3,
  },
  {
    id: 'eco227',
    text: 'What is an IPO?',
    answers: A('eco227', 'Initial public offering of stock', [
      'Internal profit operation',
      'Investment portfolio option',
      'Income payment order',
    ]),
    level: 3,
  },
  {
    id: 'eco228',
    text: 'What is market capitalization?',
    answers: A('eco228', 'Total value of company shares', [
      'Company revenue',
      'Company profit',
      'Company debt',
    ]),
    level: 3,
  },
  {
    id: 'eco229',
    text: 'What is a bear market?',
    answers: A('eco229', 'Declining stock prices', [
      'Rising stock prices',
      'Stable prices',
      'No trading',
    ]),
    level: 3,
  },
  {
    id: 'eco230',
    text: 'What is a bull market?',
    answers: A('eco230', 'Rising stock prices', [
      'Declining prices',
      'Stable prices',
      'No trading',
    ]),
    level: 3,
  },
  {
    id: 'eco231',
    text: 'What is a hedge fund?',
    answers: A('eco231', 'Investment fund using complex strategies', [
      'Regular savings account',
      'Government bond',
      'Bank loan',
    ]),
    level: 3,
  },
  {
    id: 'eco232',
    text: 'What is a mutual fund?',
    answers: A('eco232', 'Pooled investment fund', [
      'Individual stock',
      'Bank account',
      'Government bond',
    ]),
    level: 3,
  },
  {
    id: 'eco233',
    text: 'What is an index fund?',
    answers: A('eco233', 'Fund tracking market index', [
      'Active trading fund',
      'Hedge fund',
      'Private equity',
    ]),
    level: 3,
  },
  {
    id: 'eco234',
    text: 'What is the Dow Jones?',
    answers: A('eco234', 'US stock market index', [
      'European index',
      'Asian index',
      'Bond index',
    ]),
    level: 3,
  },
  {
    id: 'eco235',
    text: 'What is the S&P 500?',
    answers: A('eco235', 'Index of 500 large US companies', [
      'Index of 500 small companies',
      'Bond index',
      'International index',
    ]),
    level: 3,
  },
  {
    id: 'eco236',
    text: 'What is NASDAQ?',
    answers: A('eco236', 'US stock exchange', [
      'European exchange',
      'Asian exchange',
      'Bond market',
    ]),
    level: 3,
  },
  {
    id: 'eco237',
    text: 'What is a derivative?',
    answers: A('eco237', 'Financial contract based on underlying asset', [
      'Stock',
      'Bond',
      'Cash',
    ]),
    level: 4,
  },
  {
    id: 'eco238',
    text: 'What is a futures contract?',
    answers: A('eco238', 'Agreement to buy/sell at future date', [
      'Immediate purchase',
      'Past transaction',
      'No transaction',
    ]),
    level: 4,
  },
  {
    id: 'eco239',
    text: 'What is an option?',
    answers: A('eco239', 'Right to buy or sell at set price', [
      'Obligation to buy',
      'Obligation to sell',
      'No choice',
    ]),
    level: 4,
  },
  {
    id: 'eco240',
    text: 'What is a call option?',
    answers: A('eco240', 'Right to buy at set price', [
      'Right to sell',
      'Obligation to buy',
      'Obligation to sell',
    ]),
    level: 4,
  },
  {
    id: 'eco241',
    text: 'What is a put option?',
    answers: A('eco241', 'Right to sell at set price', [
      'Right to buy',
      'Obligation to buy',
      'Obligation to sell',
    ]),
    level: 4,
  },
  {
    id: 'eco242',
    text: 'What is short selling?',
    answers: A('eco242', 'Selling borrowed shares', [
      'Buying shares',
      'Holding shares',
      'Giving shares',
    ]),
    level: 4,
  },
  {
    id: 'eco243',
    text: 'What is margin trading?',
    answers: A('eco243', 'Trading with borrowed money', [
      'Trading with own money',
      'No trading',
      'Free trading',
    ]),
    level: 4,
  },
  {
    id: 'eco244',
    text: 'What is leverage?',
    answers: A('eco244', 'Using borrowed money to invest', [
      'Using own money',
      'No investment',
      'Saving money',
    ]),
    level: 4,
  },
  {
    id: 'eco245',
    text: 'What is liquidity?',
    answers: A('eco245', 'Ease of converting to cash', [
      'Difficulty converting',
      'No conversion',
      'Permanent holding',
    ]),
    level: 4,
  },
  {
    id: 'eco246',
    text: 'What is volatility?',
    answers: A('eco246', 'Price fluctuation', [
      'Price stability',
      'No price change',
      'Fixed price',
    ]),
    level: 4,
  },
  {
    id: 'eco247',
    text: 'What is diversification?',
    answers: A('eco247', 'Spreading investments', [
      'Concentrating investments',
      'No investment',
      'Single investment',
    ]),
    level: 4,
  },
  {
    id: 'eco248',
    text: 'What is a portfolio?',
    answers: A('eco248', 'Collection of investments', [
      'Single investment',
      'No investment',
      'Bank account',
    ]),
    level: 4,
  },
  {
    id: 'eco249',
    text: 'What is asset allocation?',
    answers: A('eco249', 'Dividing investments among types', [
      'Single asset type',
      'No assets',
      'Cash only',
    ]),
    level: 4,
  },
  {
    id: 'eco250',
    text: 'What is risk management?',
    answers: A('eco250', 'Controlling potential losses', [
      'Ignoring risk',
      'Maximizing risk',
      'No risk',
    ]),
    level: 4,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'eco251',
    text: 'What is quantitative easing?',
    answers: A('eco251', 'Central bank buying assets', [
      'Selling assets',
      'Raising rates',
      'Cutting spending',
    ]),
    level: 5,
  },
  {
    id: 'eco252',
    text: 'What is the yield curve?',
    answers: A('eco252', 'Graph of bond yields by maturity', [
      'Stock price chart',
      'GDP growth chart',
      'Inflation chart',
    ]),
    level: 5,
  },
  {
    id: 'eco253',
    text: 'What is an inverted yield curve?',
    answers: A('eco253', 'Short-term rates higher than long-term', [
      'Long-term higher',
      'Equal rates',
      'No rates',
    ]),
    level: 6,
  },
  {
    id: 'eco254',
    text: 'What is stagflation?',
    answers: A('eco254', 'High inflation with stagnant growth', [
      'Low inflation with growth',
      'Deflation',
      'Recession',
    ]),
    level: 5,
  },
  {
    id: 'eco255',
    text: 'What is hyperinflation?',
    answers: A('eco255', 'Extremely rapid price increases', [
      'Slow price increases',
      'Price decreases',
      'Stable prices',
    ]),
    level: 5,
  },
  {
    id: 'eco256',
    text: 'What is the Phillips curve?',
    answers: A('eco256', 'Relationship between inflation and unemployment', [
      'GDP and inflation',
      'Interest and growth',
      'Trade and currency',
    ]),
    level: 6,
  },
  {
    id: 'eco257',
    text: 'What is the Laffer curve?',
    answers: A('eco257', 'Relationship between tax rates and revenue', [
      'Inflation curve',
      'Growth curve',
      'Trade curve',
    ]),
    level: 6,
  },
  {
    id: 'eco258',
    text: 'What is moral hazard?',
    answers: A('eco258', 'Risk-taking due to protection from consequences', [
      'Ethical behavior',
      'Risk avoidance',
      'No risk',
    ]),
    level: 5,
  },
  {
    id: 'eco259',
    text: 'What is adverse selection?',
    answers: A('eco259', 'Information asymmetry in markets', [
      'Perfect information',
      'No information',
      'Equal information',
    ]),
    level: 6,
  },
  {
    id: 'eco260',
    text: 'What is the efficient market hypothesis?',
    answers: A('eco260', 'Prices reflect all information', [
      'Prices are random',
      'Prices are fixed',
      'Prices are manipulated',
    ]),
    level: 6,
  },
  {
    id: 'eco261',
    text: 'What is behavioral economics?',
    answers: A('eco261', 'Study of psychological factors in economics', [
      'Traditional economics',
      'Mathematical economics',
      'Historical economics',
    ]),
    level: 5,
  },
  {
    id: 'eco262',
    text: 'What is game theory?',
    answers: A('eco262', 'Study of strategic decision-making', [
      'Study of games',
      'Study of sports',
      'Study of entertainment',
    ]),
    level: 5,
  },
  {
    id: 'eco263',
    text: 'What is the Nash equilibrium?',
    answers: A(
      'eco263',
      'Stable state where no player benefits from changing',
      ['Unstable state', 'Random outcome', 'No equilibrium'],
    ),
    level: 7,
  },
  {
    id: 'eco264',
    text: 'What is Pareto efficiency?',
    answers: A(
      'eco264',
      'No one can be better off without making another worse',
      ['Everyone equal', 'Maximum profit', 'Minimum cost'],
    ),
    level: 7,
  },
  {
    id: 'eco265',
    text: 'What is the Gini coefficient?',
    answers: A('eco265', 'Measure of income inequality', [
      'Measure of GDP',
      'Measure of inflation',
      'Measure of unemployment',
    ]),
    level: 6,
  },
  {
    id: 'eco266',
    text: 'What is purchasing power parity?',
    answers: A('eco266', 'Exchange rate based on price levels', [
      'Fixed exchange rate',
      'Floating rate',
      'No exchange',
    ]),
    level: 6,
  },
  {
    id: 'eco267',
    text: 'What is the balance of payments?',
    answers: A('eco267', 'Record of international transactions', [
      'Domestic transactions',
      'Bank balance',
      'Trade balance only',
    ]),
    level: 5,
  },
  {
    id: 'eco268',
    text: 'What is the current account?',
    answers: A('eco268', 'Trade in goods and services', [
      'Capital flows',
      'Bank account',
      'Government budget',
    ]),
    level: 6,
  },
  {
    id: 'eco269',
    text: 'What is the capital account?',
    answers: A('eco269', 'International investment flows', [
      'Trade flows',
      'Government spending',
      'Consumer spending',
    ]),
    level: 6,
  },
  {
    id: 'eco270',
    text: 'What is a currency peg?',
    answers: A('eco270', 'Fixed exchange rate to another currency', [
      'Floating rate',
      'No exchange rate',
      'Multiple rates',
    ]),
    level: 5,
  },
  {
    id: 'eco271',
    text: 'What is currency devaluation?',
    answers: A('eco271', 'Deliberate reduction in currency value', [
      'Appreciation',
      'Stable value',
      'No change',
    ]),
    level: 5,
  },
  {
    id: 'eco272',
    text: 'What is a sovereign wealth fund?',
    answers: A('eco272', 'Government investment fund', [
      'Private fund',
      'Pension fund',
      'Hedge fund',
    ]),
    level: 6,
  },
  {
    id: 'eco273',
    text: 'What is a credit default swap?',
    answers: A('eco273', 'Insurance against debt default', [
      'Stock option',
      'Currency swap',
      'Interest rate swap',
    ]),
    level: 7,
  },
  {
    id: 'eco274',
    text: 'What is a collateralized debt obligation?',
    answers: A('eco274', 'Bundled debt securities', [
      'Single bond',
      'Stock',
      'Currency',
    ]),
    level: 7,
  },
  {
    id: 'eco275',
    text: 'What is the shadow banking system?',
    answers: A('eco275', 'Non-bank financial intermediaries', [
      'Regular banks',
      'Central bank',
      'Government',
    ]),
    level: 7,
  },
];
