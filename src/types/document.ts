export interface LegalClause {
  number: number;
  title: string;
  subtitle: string;
  meaning: string;
  simpleTerms: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  uploadedAt: string;
  keyPointsCount: number;
  category: 'Contracts' | 'Agreements' | 'Others';
  summary?: string;
  clauses?: LegalClause[];
}