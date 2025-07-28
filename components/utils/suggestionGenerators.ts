import { Suggestion, Language } from '../types';
import { suggestionPatterns } from '../data/suggestionPatterns';
import { trendingTopics } from '../data/trendingTopics';

// Generate unique ID for suggestions
function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

// Shuffle array utility
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Clean and normalize text
function cleanText(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, ' ');
}

// Generate suggestions from a search term with exact count and no duplicates
export function generateInitialSuggestions(
  searchTerm: string, 
  count: number, 
  language: Language = 'en'
): Suggestion[] {
  if (!searchTerm.trim()) {
    return [];
  }

  const pattern = suggestionPatterns[language];
  const suggestions: Suggestion[] = [];
  const usedTexts = new Set<string>();
  
  // All possible suggestion sources
  const allSources: string[] = [];
  
  // 1. Template-based suggestions
  pattern.templates.forEach(template => {
    const suggestion = template.replace('{query}', searchTerm.trim());
    allSources.push(suggestion);
  });
  
  // 2. Prefix + search term combinations
  pattern.prefixes.forEach(prefix => {
    allSources.push(`${prefix} ${searchTerm.trim()}`);
  });
  
  // 3. Search term + suffix combinations
  pattern.suffixes.forEach(suffix => {
    allSources.push(`${searchTerm.trim()} ${suffix}`);
  });
  
  // 4. Question-based suggestions
  pattern.questions.forEach(question => {
    allSources.push(`${question} ${searchTerm.trim()}`);
  });
  
  // 5. Related term combinations
  pattern.related.forEach(related => {
    allSources.push(`${searchTerm.trim()} ${related}`);
    allSources.push(`${related} ${searchTerm.trim()}`);
  });
  
  // 6. Comparison-based suggestions
  pattern.comparisons.forEach(comparison => {
    allSources.push(`${searchTerm.trim()} ${comparison}`);
  });
  
  // 7. Advanced combinations (prefix + query + suffix)
  const selectedPrefixes = shuffleArray(pattern.prefixes).slice(0, 10);
  const selectedSuffixes = shuffleArray(pattern.suffixes).slice(0, 10);
  
  selectedPrefixes.forEach(prefix => {
    selectedSuffixes.forEach(suffix => {
      allSources.push(`${prefix} ${searchTerm.trim()} ${suffix}`);
    });
  });
  
  // 8. Multi-word expansions if search term is single word
  const words = searchTerm.trim().split(' ');
  if (words.length === 1) {
    const baseWord = words[0];
    
    // Add variations
    allSources.push(`${baseWord} definition`);
    allSources.push(`${baseWord} meaning`);
    allSources.push(`${baseWord} examples`);
    allSources.push(`${baseWord} types`);
    allSources.push(`${baseWord} benefits`);
    allSources.push(`${baseWord} advantages`);
    allSources.push(`${baseWord} disadvantages`);
    allSources.push(`${baseWord} pros and cons`);
    allSources.push(`${baseWord} review`);
    allSources.push(`${baseWord} comparison`);
    allSources.push(`${baseWord} alternatives`);
    allSources.push(`${baseWord} vs`);
    allSources.push(`different types of ${baseWord}`);
    allSources.push(`${baseWord} for sale`);
    allSources.push(`${baseWord} near me`);
    allSources.push(`${baseWord} online`);
    allSources.push(`${baseWord} shop`);
    allSources.push(`${baseWord} store`);
    allSources.push(`${baseWord} price`);
    allSources.push(`${baseWord} cost`);
  }
  
  // 9. Additional contextual suggestions based on language
  if (language === 'en') {
    allSources.push(`${searchTerm} reddit`);
    allSources.push(`${searchTerm} youtube`);
    allSources.push(`${searchTerm} amazon`);
    allSources.push(`${searchTerm} walmart`);
    allSources.push(`${searchTerm} ebay`);
  } else if (language === 'id') {
    allSources.push(`${searchTerm} tokopedia`);
    allSources.push(`${searchTerm} shopee`);
    allSources.push(`${searchTerm} bukalapak`);
    allSources.push(`${searchTerm} lazada`);
  } else if (language === 'zh') {
    allSources.push(`${searchTerm} 淘宝`);
    allSources.push(`${searchTerm} 京东`);
    allSources.push(`${searchTerm} 天猫`);
  } else if (language === 'ja') {
    allSources.push(`${searchTerm} 楽天`);
    allSources.push(`${searchTerm} アマゾン`);
    allSources.push(`${searchTerm} ヤフー`);
  }
  
  // Shuffle all sources for randomness
  const shuffledSources = shuffleArray(allSources);
  
  // Generate exactly the requested count with no duplicates
  for (const source of shuffledSources) {
    if (suggestions.length >= count) {
      break;
    }
    
    const cleanedText = cleanText(source);
    
    // Skip if we've already used this text (case-insensitive check)
    if (usedTexts.has(cleanedText)) {
      continue;
    }
    
    // Skip if the suggestion is just the original search term
    if (cleanedText === cleanText(searchTerm)) {
      continue;
    }
    
    // Skip if suggestion is too short or too long
    if (source.length < 3 || source.length > 200) {
      continue;
    }
    
    usedTexts.add(cleanedText);
    suggestions.push({
      id: generateId(),
      text: source,
      opened: false
    });
  }
  
  // If we still don't have enough, generate more creative combinations
  if (suggestions.length < count) {
    const remainingCount = count - suggestions.length;
    const additionalSuggestions = generateFallbackSuggestions(
      searchTerm, 
      remainingCount, 
      usedTexts, 
      language
    );
    suggestions.push(...additionalSuggestions);
  }
  
  // Ensure we return exactly the requested count
  return suggestions.slice(0, count);
}

// Generate fallback suggestions when we need more
function generateFallbackSuggestions(
  searchTerm: string,
  count: number,
  usedTexts: Set<string>,
  language: Language
): Suggestion[] {
  const suggestions: Suggestion[] = [];
  const pattern = suggestionPatterns[language];
  
  // More creative combinations
  const creativePrefixes = [
    'ultimate', 'complete', 'comprehensive', 'detailed', 'advanced', 'basic',
    'essential', 'important', 'critical', 'vital', 'key', 'main', 'primary',
    'secondary', 'alternative', 'backup', 'emergency', 'quick', 'instant',
    'immediate', 'urgent', 'priority', 'special', 'unique', 'rare', 'common',
    'popular', 'trending', 'viral', 'famous', 'well-known', 'obscure', 'hidden'
  ];
  
  const creativeSuffixes = [
    'overview', 'summary', 'breakdown', 'analysis', 'review', 'evaluation',
    'assessment', 'examination', 'study', 'research', 'investigation', 'survey',
    'report', 'findings', 'results', 'conclusions', 'recommendations', 'suggestions',
    'advice', 'tips', 'tricks', 'secrets', 'hacks', 'shortcuts', 'methods',
    'techniques', 'strategies', 'approaches', 'solutions', 'answers', 'help',
    'support', 'assistance', 'guidance', 'direction', 'instructions', 'steps'
  ];
  
  // Try creative combinations
  for (let i = 0; i < count * 3 && suggestions.length < count; i++) {
    let suggestion = '';
    
    const randomType = Math.floor(Math.random() * 6);
    
    switch (randomType) {
      case 0:
        // Creative prefix + search term
        const randomPrefix = creativePrefixes[Math.floor(Math.random() * creativePrefixes.length)];
        suggestion = `${randomPrefix} ${searchTerm}`;
        break;
      case 1:
        // Search term + creative suffix
        const randomSuffix = creativeSuffixes[Math.floor(Math.random() * creativeSuffixes.length)];
        suggestion = `${searchTerm} ${randomSuffix}`;
        break;
      case 2:
        // Year-based
        const currentYear = new Date().getFullYear();
        const year = currentYear + Math.floor(Math.random() * 3) - 1; // Current year ±1
        suggestion = `${searchTerm} ${year}`;
        break;
      case 3:
        // Location-based (generic)
        const locations = ['near me', 'online', 'local', 'global', 'worldwide', 'international'];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        suggestion = `${searchTerm} ${randomLocation}`;
        break;
      case 4:
        // Size/quantity based
        const quantities = ['small', 'large', 'mini', 'giant', 'micro', 'macro', 'tiny', 'huge'];
        const randomQuantity = quantities[Math.floor(Math.random() * quantities.length)];
        suggestion = `${randomQuantity} ${searchTerm}`;
        break;
      case 5:
        // Question format
        const questionWords = ['what', 'how', 'why', 'when', 'where', 'which', 'who'];
        const randomQuestion = questionWords[Math.floor(Math.random() * questionWords.length)];
        suggestion = `${randomQuestion} ${searchTerm}`;
        break;
    }
    
    const cleanedText = cleanText(suggestion);
    
    if (!usedTexts.has(cleanedText) && suggestion.length >= 3 && suggestion.length <= 200) {
      usedTexts.add(cleanedText);
      suggestions.push({
        id: generateId(),
        text: suggestion,
        opened: false
      });
    }
  }
  
  // If still not enough, add numbered variations
  while (suggestions.length < count) {
    const baseNum = suggestions.length + 1;
    const numberedSuggestion = `${searchTerm} ${baseNum}`;
    const cleanedText = cleanText(numberedSuggestion);
    
    if (!usedTexts.has(cleanedText)) {
      usedTexts.add(cleanedText);
      suggestions.push({
        id: generateId(),
        text: numberedSuggestion,
        opened: false
      });
    } else {
      // Use timestamp to ensure uniqueness
      const timestampSuggestion = `${searchTerm} ${Date.now()}`;
      suggestions.push({
        id: generateId(),
        text: timestampSuggestion,
        opened: false
      });
    }
  }
  
  return suggestions;
}

// Generate additional suggestions for existing search terms (when count is increased)
export function generateAdditionalSuggestions(
  searchTerm: string,
  existingSuggestions: Suggestion[],
  additionalCount: number,
  language: Language = 'en'
): Suggestion[] {
  const usedTexts = new Set<string>();
  
  // Add existing suggestions to the used set
  existingSuggestions.forEach(suggestion => {
    usedTexts.add(cleanText(suggestion.text));
  });
  
  // Generate new suggestions ensuring no duplicates
  const totalNeeded = existingSuggestions.length + additionalCount;
  const allSuggestions = generateInitialSuggestions(searchTerm, totalNeeded * 2, language);
  
  const additionalSuggestions: Suggestion[] = [];
  
  for (const suggestion of allSuggestions) {
    if (additionalSuggestions.length >= additionalCount) {
      break;
    }
    
    const cleanedText = cleanText(suggestion.text);
    if (!usedTexts.has(cleanedText)) {
      usedTexts.add(cleanedText);
      additionalSuggestions.push(suggestion);
    }
  }
  
  // If still not enough, generate more fallback suggestions
  if (additionalSuggestions.length < additionalCount) {
    const remainingCount = additionalCount - additionalSuggestions.length;
    const fallbackSuggestions = generateFallbackSuggestions(
      searchTerm,
      remainingCount,
      usedTexts,
      language
    );
    additionalSuggestions.push(...fallbackSuggestions);
  }
  
  return additionalSuggestions.slice(0, additionalCount);
}

// Generate trending topics
export function generateTrendingTopics(
  count: number,
  language: Language = 'en',
  engine: string = 'google'
): Suggestion[] {
  const topics = trendingTopics[language];
  const suggestions: Suggestion[] = [];
  const usedTexts = new Set<string>();
  
  // Flatten all topics from all categories
  const allTopics: string[] = [];
  topics.forEach(category => {
    allTopics.push(...category.topics);
  });
  
  // Shuffle the topics for randomness
  const shuffledTopics = shuffleArray(allTopics);
  
  // Generate exactly the requested count
  for (let i = 0; i < Math.min(count, shuffledTopics.length); i++) {
    const topic = shuffledTopics[i];
    const cleanedText = cleanText(topic);
    
    if (!usedTexts.has(cleanedText)) {
      usedTexts.add(cleanedText);
      suggestions.push({
        id: generateId(),
        text: topic,
        opened: false
      });
    }
  }
  
  // If we need more suggestions than available trending topics, duplicate with variations
  if (suggestions.length < count) {
    const remainingCount = count - suggestions.length;
    
    for (let i = 0; i < remainingCount; i++) {
      const baseTopicIndex = i % shuffledTopics.length;
      const baseTopic = shuffledTopics[baseTopicIndex];
      
      // Add variations to ensure uniqueness
      const variations = [
        `${baseTopic} guide`,
        `${baseTopic} tips`,
        `${baseTopic} tutorial`,
        `${baseTopic} review`,
        `${baseTopic} explained`,
        `${baseTopic} benefits`,
        `${baseTopic} examples`,
        `${baseTopic} analysis`,
        `${baseTopic} comparison`,
        `${baseTopic} alternatives`
      ];
      
      const variation = variations[i % variations.length];
      const cleanedText = cleanText(variation);
      
      if (!usedTexts.has(cleanedText)) {
        usedTexts.add(cleanedText);
        suggestions.push({
          id: generateId(),
          text: variation,
          opened: false
        });
      } else {
        // Fallback with number
        const numberedVariation = `${variation} ${i + 1}`;
        suggestions.push({
          id: generateId(),
          text: numberedVariation,
          opened: false
        });
      }
    }
  }
  
  return suggestions.slice(0, count);
}