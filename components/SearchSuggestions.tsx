import React, { useState, useEffect, useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import { Suggestion, SearchEngine } from "./types";
import { generateInitialSuggestions, generateAdditionalSuggestions, generateTrendingTopics } from "./utils/suggestionGenerators";
import { SuggestionItem } from "./SuggestionItem";
import { SectionHeader } from "./SectionHeader";

export function SearchSuggestions() {
  const { t, language, setLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [trendingSuggestions, setTrendingSuggestions] = useState<Suggestion[]>([]);
  const [openedItems, setOpenedItems] = useState<Set<string>>(new Set());
  const [selectedEngine, setSelectedEngine] = useState<string>("google");
  const [queryCount, setQueryCount] = useState<number>(100);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [isLoadingRandom, setIsLoadingRandom] = useState<boolean>(false);
  const [showTrending, setShowTrending] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [previousQueryCount, setPreviousQueryCount] = useState<number>(100);
  const [previousSearchTerm, setPreviousSearchTerm] = useState<string>("");

  // Section visibility state
  const [showUnopenedSection, setShowUnopenedSection] = useState<boolean>(true);
  const [showOpenedSection, setShowOpenedSection] = useState<boolean>(true);

  // Search engines with translated names
  const searchEngines: SearchEngine[] = [
    { name: t.searchEngines.google, value: "google", url: "https://www.google.com/search?q=" },
    { name: t.searchEngines.bing, value: "bing", url: "https://www.bing.com/search?q=" },
    { name: t.searchEngines.duckduckgo, value: "duckduckgo", url: "https://duckduckgo.com/?q=" },
    { name: t.searchEngines.yahoo, value: "yahoo", url: "https://search.yahoo.com/search?p=" },
  ];

  // Reset opened items when search term changes
  useEffect(() => {
    if (searchTerm !== previousSearchTerm) {
      setOpenedItems(new Set());
      // If user starts typing, hide trending suggestions
      if (searchTerm.trim()) {
        setShowTrending(false);
        setTrendingSuggestions([]);
      }

      // Generate initial suggestions for new search term
      if (searchTerm.trim()) {
        const newSuggestions = generateInitialSuggestions(searchTerm, queryCount, language);
        setSuggestions(newSuggestions);
      } else {
        setSuggestions([]);
      }

      setPreviousSearchTerm(searchTerm);
    }
  }, [searchTerm, queryCount, previousSearchTerm, language]);

  // Handle query count changes for existing suggestions
  useEffect(() => {
    const currentCount = queryCount;
    const previousCount = previousQueryCount;

    // Only handle query count changes if search term hasn't changed
    if (currentCount !== previousCount && searchTerm === previousSearchTerm) {
      if (searchTerm.trim()) {
        setSuggestions((prevSuggestions) => {
          if (currentCount > previousCount) {
            // Add more suggestions
            const additionalCount = currentCount - previousCount;
            const additionalSuggestions = generateAdditionalSuggestions(searchTerm, prevSuggestions, additionalCount, language);
            return [...prevSuggestions, ...additionalSuggestions];
          } else {
            // Remove suggestions from the end
            return prevSuggestions.slice(0, currentCount);
          }
        });
      }

      // Handle trending suggestions count changes
      if (showTrending) {
        setTrendingSuggestions((prevTrending) => {
          if (currentCount > previousCount) {
            // Add more trending suggestions
            const additionalCount = currentCount - previousCount;
            const additionalTrending = generateTrendingTopics(additionalCount, language, selectedEngine);
            return [...prevTrending, ...additionalTrending];
          } else {
            // Remove trending suggestions from the end
            return prevTrending.slice(0, currentCount);
          }
        });
      }
    }

    setPreviousQueryCount(currentCount);
  }, [queryCount, previousQueryCount, searchTerm, previousSearchTerm, showTrending, language, selectedEngine]);

  // Regenerate suggestions when language changes
  useEffect(() => {
    if (searchTerm.trim()) {
      const newSuggestions = generateInitialSuggestions(searchTerm, queryCount, language);
      setSuggestions(newSuggestions);
      setOpenedItems(new Set());
    }

    if (showTrending) {
      const newTrendingSuggestions = generateTrendingTopics(queryCount, language, selectedEngine);
      setTrendingSuggestions(newTrendingSuggestions);
      setOpenedItems(new Set());
    }
  }, [language, searchTerm, queryCount, showTrending, selectedEngine]);

  // Sort suggestions: opened items first (by most recently opened), then unopened
  const sortedSuggestions = useMemo(() => {
    return [...suggestions].sort((a, b) => {
      if (a.opened && !b.opened) return -1;
      if (!a.opened && b.opened) return 1;
      if (a.opened && b.opened) {
        return (b.openedAt || 0) - (a.openedAt || 0);
      }
      return 0;
    });
  }, [suggestions]);

  // Get grouped suggestions for modal with proper separation
  const groupedSuggestions = useMemo(() => {
    const allSuggestions = showTrending ? trendingSuggestions : sortedSuggestions;
    const unopened = allSuggestions.filter((s) => !s.opened);
    const opened = allSuggestions.filter((s) => s.opened).sort((a, b) => (b.openedAt || 0) - (a.openedAt || 0));

    return { unopened, opened };
  }, [sortedSuggestions, showTrending, trendingSuggestions]);

  // Get preview suggestions: only show unclicked suggestions, replace clicked ones with new ones
  const previewSuggestions = useMemo(() => {
    if (showTrending) {
      // For trending topics, show unopened ones first, then opened ones
      const unopened = trendingSuggestions.filter((s) => !s.opened);
      return unopened.slice(0, 3);
    }

    const unopened = sortedSuggestions.filter((s) => !s.opened);

    // Always show up to 3 unclicked suggestions
    return unopened.slice(0, 3);
  }, [sortedSuggestions, showTrending, trendingSuggestions]);

  const handleSuggestionClick = (suggestion: Suggestion) => {
    // Mark as opened
    setOpenedItems((prev) => new Set([...prev, suggestion.id]));

    // Update the suggestion in the appropriate state
    if (showTrending) {
      setTrendingSuggestions((prev) => prev.map((s) => (s.id === suggestion.id ? { ...s, opened: true, openedAt: Date.now() } : s)));
    } else {
      setSuggestions((prev) => prev.map((s) => (s.id === suggestion.id ? { ...s, opened: true, openedAt: Date.now() } : s)));
    }

    // Open search in new tab
    const selectedSearchEngine = searchEngines.find((engine) => engine.value === selectedEngine);
    if (selectedSearchEngine) {
      const searchUrl = selectedSearchEngine.url + encodeURIComponent(suggestion.text);
      window.open(searchUrl, "_blank");
    }
  };

  const handleRandomTopic = async () => {
    setIsLoadingRandom(true);

    // Clear any existing search term and suggestions
    setSearchTerm("");
    setSuggestions([]);
    setOpenedItems(new Set());

    // Simulate RSS feed fetch delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate trending topics using the current query count
    const trendingData = generateTrendingTopics(queryCount, language, selectedEngine);

    setTrendingSuggestions(trendingData);
    setShowTrending(true);
    setIsLoadingRandom(false);
  };

  const selectedEngineData = searchEngines.find((engine) => engine.value === selectedEngine);

  // Calculate accurate statistics
  const currentSuggestionsList = showTrending ? trendingSuggestions : suggestions;
  const totalGenerated = currentSuggestionsList.length;
  const totalExplored = openedItems.size;
  const totalRemaining = totalGenerated - totalExplored;

  // Function to render text with icon replacement
  const renderTextWithIcon = (text: string) => {
    const parts = text.split("{icon}");
    if (parts.length === 1) {
      return text;
    }

    return (
      <>
        {parts[0]}
        <i className="bi bi-shuffle mx-1" style={{ fontSize: "inherit" }}></i>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="w-100">
      {/* Search Input */}
      <div className="position-relative mb-4">
        <i className="bi bi-search input-group-icon start"></i>
        <input type="text" className="form-control search-input" placeholder={t.searchPlaceholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="btn btn-icon input-group-icon end" onClick={handleRandomTopic} disabled={isLoadingRandom} title={`${t.getTrendingTopics} ${queryCount}`}>
          <i className={`bi bi-shuffle ${isLoadingRandom ? "spin" : ""}`}></i>
        </button>
      </div>

      {/* Settings */}
      <div className="settings-panel mb-4">
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2 flex-shrink-0" onClick={() => setShowSettings(!showSettings)}>
            <i className="bi bi-gear"></i>
            <span className="d-none d-sm-inline">{t.settings}</span>
          </button>

          {showSettings && (
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="query-count" className="form-label mb-0 small text-nowrap">
                  {t.queries}
                </label>
                <input
                  id="query-count"
                  type="number"
                  min="10"
                  max="500"
                  value={queryCount}
                  onChange={(e) => setQueryCount(parseInt(e.target.value) || 100)}
                  className="form-control form-control-sm"
                  style={{ width: "clamp(70px, 15vw, 80px)" }}
                />
              </div>

              <div className="d-flex align-items-center gap-2">
                <label htmlFor="search-engine" className="form-label mb-0 small text-nowrap">
                  {t.engine}
                </label>
                <select id="search-engine" className="form-select form-select-sm" value={selectedEngine} onChange={(e) => setSelectedEngine(e.target.value)} style={{ width: "clamp(100px, 20vw, 120px)" }}>
                  {searchEngines.map((engine) => (
                    <option key={engine.value} value={engine.value}>
                      {engine.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="d-flex align-items-center gap-2">
                <label htmlFor="language-select" className="form-label mb-0 small text-nowrap">
                  {t.language}
                </label>
                <select id="language-select" className="form-select form-select-sm" value={language} onChange={(e) => setLanguage(e.target.value as any)} style={{ width: "clamp(120px, 25vw, 150px)" }}>
                  {Object.entries(t.languages).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {!showSettings && (
            <div className="d-flex align-items-center gap-3 small text-muted flex-wrap">
              <span className="text-nowrap">
                {queryCount} {t.queries.toLowerCase()}
              </span>
              <span className="text-nowrap">{selectedEngineData?.name}</span>
              <span className="text-nowrap">{t.languages[language as keyof typeof t.languages]}</span>
            </div>
          )}
        </div>
      </div>

      {/* Trending Topics or Search Suggestions */}
      {(previewSuggestions.length > 0 || showTrending) && (
        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
            <h3 className="mb-0 h4 h3-sm">{showTrending ? t.trendingTopics : t.searchSuggestions}</h3>
            {totalGenerated > 3 && (
              <button className="btn btn-outline-primary btn-sm text-nowrap" onClick={() => setShowModal(true)}>
                {t.showAll}
              </button>
            )}
          </div>

          <div className="mb-3">
            <div className="stats-text mb-2">{showTrending ? `${t.clickToSearch} ${selectedEngineData?.name} • ${t.clickedReplaced}` : `${t.clickToSearch} ${selectedEngineData?.name} • ${t.clickedReplaced}`}</div>
            {previewSuggestions.map((suggestion) => (
              <SuggestionItem key={suggestion.id} suggestion={suggestion} onClick={handleSuggestionClick} />
            ))}
            {previewSuggestions.length === 0 && totalExplored > 0 && <div className="text-center text-muted py-4">{showTrending ? t.allExploredTrending : t.allExplored}</div>}
          </div>
        </div>
      )}

      {/* Statistics - Always show exact counts */}
      {totalGenerated > 0 && (
        <div className="stats-text text-center mb-4">
          <div>
            {totalExplored} {t.explored} / {totalGenerated} {t.queries.toLowerCase()}
          </div>
          {totalRemaining > 0 && (
            <div>
              {totalRemaining} {t.remaining}
            </div>
          )}
        </div>
      )}

      {/* Empty state */}
      {searchTerm && suggestions.length === 0 && (
        <div className="text-center text-muted py-4">
          {t.noSuggestions} "{searchTerm}"
        </div>
      )}

      {/* Instructions */}
      {!searchTerm && !showTrending && (
        <div className="text-center text-muted py-4">
          <p>{t.startTyping}</p>
          <p className="small">{t.configureSettings}</p>
          <p className="small">{renderTextWithIcon(t.clickShuffle)}</p>
        </div>
      )}

      {/* Modal with Collapsible Sections */}
      {showModal && (
        <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-xl modal-fullscreen-lg-down">
            <div className="modal-content">
              <div className="modal-header border-0">
                <div className="flex-grow-1">
                  <h5 className="modal-title mb-1">{showTrending ? t.trendingTopics : `${t.allSuggestions} "${searchTerm}"`}</h5>
                  <p className="text-muted small mb-0">
                    {groupedSuggestions.unopened.length} {t.remaining} • {groupedSuggestions.opened.length} {t.explored}
                  </p>
                </div>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>

              <div className="modal-body">
                {groupedSuggestions.unopened.length > 0 || groupedSuggestions.opened.length > 0 ? (
                  <div className="sectioned-modal-list">
                    {/* Not Yet Explored Section */}
                    {groupedSuggestions.unopened.length > 0 && (
                      <div className="suggestion-section">
                        <SectionHeader title={t.sectionNotExplored} count={groupedSuggestions.unopened.length} isVisible={showUnopenedSection} onToggle={() => setShowUnopenedSection(!showUnopenedSection)} sectionType="unopened" />
                        {showUnopenedSection && (
                          <div className="section-content" id="section-content-unopened">
                            {groupedSuggestions.unopened.map((suggestion) => (
                              <SuggestionItem key={suggestion.id} suggestion={suggestion} isSimpleModal={true} onClick={handleSuggestionClick} />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Already Explored Section */}
                    {groupedSuggestions.opened.length > 0 && (
                      <div className="suggestion-section">
                        <SectionHeader title={t.sectionExplored} count={groupedSuggestions.opened.length} isVisible={showOpenedSection} onToggle={() => setShowOpenedSection(!showOpenedSection)} sectionType="opened" />
                        {showOpenedSection && (
                          <div className="section-content" id="section-content-opened">
                            {groupedSuggestions.opened.map((suggestion) => (
                              <SuggestionItem key={suggestion.id} suggestion={suggestion} isSimpleModal={true} onClick={handleSuggestionClick} />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-5 text-muted">
                    <i className="bi bi-search display-1 mb-3"></i>
                    <h5>No suggestions available</h5>
                    <p className="small">Start typing to generate search suggestions</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
