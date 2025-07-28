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