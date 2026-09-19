import { LegalClause } from '../types/document';

export interface GroqAnalysisResult {
  summary: string;
  clauses: LegalClause[];
}

export const analyzeDocumentWithGroq = async (
  documentText: string
): Promise<GroqAnalysisResult> => {
  // Blueprint endpoint using Groq Llama-3 / Mixtral inference
  // In production, pass documentText to https://api.groq.com/openai/v1/chat/completions
  
  // Simulated API response delay
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return {
    summary:
      'This is a residential rental agreement between you (tenant) and the landlord for a period of 11 months. It includes details about rent, deposit, property rules and termination conditions.',
    clauses: [
      {
        number: 1,
        title: 'Parties Involved',
        subtitle: 'Who the agreement is between',
        meaning:
          'The agreement is between you (the tenant) and the landlord (Mr. Sharma). You are renting the property, and the landlord owns it.',
        simpleTerms: 'It clearly states who is responsible for what in this agreement.',
      },
      {
        number: 2,
        title: 'Property Details',
        subtitle: 'Information about the property',
        meaning:
          'The document specifies the exact address and condition of the flat being leased.',
        simpleTerms: 'Ensures there is no confusion about which property you are renting.',
      },
      {
        number: 3,
        title: 'Rent and Payment Terms',
        subtitle: 'How much to pay and when',
        meaning:
          'Rent must be paid on or before the 5th of every month into the landlord bank account.',
        simpleTerms: 'You need to pay the agreed rent on time every month.',
      },
      {
        number: 4,
        title: 'Security Deposit',
        subtitle: 'Deposit amount and conditions',
        meaning:
          'A refundable deposit of 2 months rent is held and returned upon move-out after deductions for damage.',
        simpleTerms: 'You get your deposit back when you leave if the place is undamaged.',
      },
      {
        number: 5,
        title: 'Duration of Agreement',
        subtitle: 'Start and end date',
        meaning: 'The contract starts on Oct 1, 2026 and ends after 11 months.',
        simpleTerms: 'The lease lasts for 11 months from start date.',
      },
      {
        number: 6,
        title: 'Termination Conditions',
        subtitle: 'When either party can end the agreement',
        meaning:
          'Either party can terminate the agreement by serving a 1-month written notice.',
        simpleTerms: 'Give 30 days notice if you want to leave early.',
      },
      {
        number: 7,
        title: 'Additional Clauses',
        subtitle: 'Other important details',
        meaning: 'Covers maintenance charges, pets policy, and subletting bans.',
        simpleTerms: 'Lists house rules like no subletting and basic maintenance.',
      },
    ],
  };
};