import { Suggestion } from '../types';
import { Language } from '../LanguageContext';
import { suggestionPatterns } from '../data/suggestionPatterns';
import { trendingTopics } from '../data/trendingTopics';

// Generate unique ID for suggestions
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Shuffle array utility - using function declaration to avoid JSX parsing issues
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate initial suggestions based on search term
export const generateInitialSuggestions = (
  searchTerm: string,
  count: number,
  language: Language
): Suggestion[] => {
  const patterns = suggestionPatterns[language] || suggestionPatterns.en;
  const suggestions: Suggestion[] = [];
  
  // Create suggestions by replacing {term} in patterns
  const shuffledPatterns = shuffleArray(patterns);
  
  for (let i = 0; i < Math.min(count, shuffledPatterns.length * 3); i++) {
    const pattern = shuffledPatterns[i % shuffledPatterns.length];
    let suggestionText = pattern.replace('{term}', searchTerm.trim());
    
    // Add some variations if we need more suggestions than patterns
    if (i >= shuffledPatterns.length) {
      const variations = [
        `${suggestionText} 2024`,
        `${suggestionText} advanced`,
        `${suggestionText} free`,
        `${suggestionText} online`,
        `${suggestionText} complete`,
        `${suggestionText} professional`
      ];
      suggestionText = variations[Math.floor(Math.random() * variations.length)];
    }
    
    suggestions.push({
      id: generateId(),
      text: suggestionText,
      opened: false
    });
  }
  
  // Ensure we have exactly the requested count
  while (suggestions.length < count) {
    const basePattern = shuffledPatterns[Math.floor(Math.random() * shuffledPatterns.length)];
    const baseSuggestion = basePattern.replace('{term}', searchTerm.trim());
    const randomNumber = Math.floor(Math.random() * 1000);
    
    suggestions.push({
      id: generateId(),
      text: `${baseSuggestion} ${randomNumber}`,
      opened: false
    });
  }
  
  return suggestions.slice(0, count);
};

// Generate additional suggestions when count is increased
export const generateAdditionalSuggestions = (
  searchTerm: string,
  existingSuggestions: Suggestion[],
  additionalCount: number,
  language: Language
): Suggestion[] => {
  const patterns = suggestionPatterns[language] || suggestionPatterns.en;
  const existingTexts = new Set(existingSuggestions.map(s => s.text));
  const additionalSuggestions: Suggestion[] = [];
  
  const shuffledPatterns = shuffleArray(patterns);
  let attempts = 0;
  const maxAttempts = additionalCount * 5; // Prevent infinite loop
  
  while (additionalSuggestions.length < additionalCount && attempts < maxAttempts) {
    attempts++;
    
    const pattern = shuffledPatterns[Math.floor(Math.random() * shuffledPatterns.length)];
    let suggestionText = pattern.replace('{term}', searchTerm.trim());
    
    // Add variations to make unique suggestions
    const variations = [
      suggestionText,
      `${suggestionText} guide`,
      `${suggestionText} tips`,
      `${suggestionText} 2024`,
      `${suggestionText} advanced`,
      `${suggestionText} beginner`,
      `${suggestionText} complete`,
      `${suggestionText} step by step`,
      `${suggestionText} professional`,
      `${suggestionText} free`
    ];
    
    suggestionText = variations[Math.floor(Math.random() * variations.length)];
    
    // Check if this suggestion is unique
    if (!existingTexts.has(suggestionText)) {
      additionalSuggestions.push({
        id: generateId(),
        text: suggestionText,
        opened: false
      });
      existingTexts.add(suggestionText);
    }
  }
  
  // If we still need more suggestions, add numbered variations
  while (additionalSuggestions.length < additionalCount) {
    const basePattern = shuffledPatterns[Math.floor(Math.random() * shuffledPatterns.length)];
    const baseSuggestion = basePattern.replace('{term}', searchTerm.trim());
    const randomNumber = Math.floor(Math.random() * 10000);
    const suggestionText = `${baseSuggestion} ${randomNumber}`;
    
    if (!existingTexts.has(suggestionText)) {
      additionalSuggestions.push({
        id: generateId(),
        text: suggestionText,
        opened: false
      });
      existingTexts.add(suggestionText);
    }
  }
  
  return additionalSuggestions;
};

// Generate trending topics
export const generateTrendingTopics = (
  count: number,
  language: Language,
  searchEngine: string
): Suggestion[] => {
  const topics = trendingTopics[language] || trendingTopics.en;
  const shuffledTopics = shuffleArray(topics);
  const suggestions: Suggestion[] = [];
  
  // First, use the predefined topics
  for (let i = 0; i < Math.min(count, shuffledTopics.length); i++) {
    suggestions.push({
      id: generateId(),
      text: shuffledTopics[i],
      opened: false
    });
  }
  
  // If we need more suggestions, generate variations
  while (suggestions.length < count) {
    const baseTopic = shuffledTopics[Math.floor(Math.random() * shuffledTopics.length)];
    const variations = [
      `${baseTopic} latest`,
      `${baseTopic} new`,
      `${baseTopic} update`,
      `${baseTopic} review`,
      `${baseTopic} comparison`,
      `${baseTopic} analysis`
    ];
    
    const variation = variations[Math.floor(Math.random() * variations.length)];
    
    // Check for duplicates
    const existingTexts = suggestions.map(s => s.text);
    if (!existingTexts.includes(variation)) {
      suggestions.push({
        id: generateId(),
        text: variation,
        opened: false
      });
    }
  }
  
  return suggestions.slice(0, count);
};