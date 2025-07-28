import React from 'react';
import { useLanguage } from './LanguageContext';

interface SectionHeaderProps {
  title: string;
  count: number;
  isVisible: boolean;
  onToggle: () => void;
  sectionType: 'unopened' | 'opened';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  count,
  isVisible,
  onToggle,
  sectionType
}) => {
  const { t } = useLanguage();

  return (
    <div 
      className={`section-header ${sectionType}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      title={`${t.clickToToggle} - ${isVisible ? t.hideSection : t.showSection}`}
      aria-expanded={isVisible}
      aria-controls={`section-content-${sectionType}`}
    >
      <div className="section-header-content">
        <div className="section-title">
          <h6 className="mb-0">{title}</h6>
        </div>
        <i 
          className={`bi ${isVisible ? 'bi-chevron-down' : 'bi-chevron-right'} section-chevron`}
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};