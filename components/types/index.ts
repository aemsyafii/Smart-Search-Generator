// Core type definitions for the Search Suggestion Generator

export interface Suggestion {
  id: string;
  text: string;
  opened: boolean;
  openedAt?: number;
}

export interface SearchEngine {
  name: string;
  value: string;
  url: string;
}

export interface SuggestionPattern {
  templates: string[];
  prefixes: string[];
  suffixes: string[];
  related: string[];
  questions: string[];
  comparisons: string[];
}

export interface TrendingTopic {
  category: string;
  topics: string[];
}

export type Language = 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'ru' | 'es' | 'fr' | 'de' | 'pt' | 'hi' | 'ko';