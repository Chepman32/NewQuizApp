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
];
