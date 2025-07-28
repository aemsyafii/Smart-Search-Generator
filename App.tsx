import { SearchSuggestions } from './components/SearchSuggestions';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { useEffect } from 'react';

function AppContent() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.appTitle;
  }, [t.appTitle]);
  
  return (
    <div className="app-container">
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <div className="text-center mb-5">
              <h1 className="mb-3">{t.appTitle}</h1>
              <p className="text-muted">
                {t.appDescription}
              </p>
            </div>
            
            <SearchSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
