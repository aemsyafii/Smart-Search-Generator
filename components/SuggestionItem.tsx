import React from 'react';
import { Suggestion } from './types';

interface SuggestionItemProps {
  suggestion: Suggestion;
  onClick: (suggestion: Suggestion) => void;
  isSimpleModal?: boolean;
  copyMode?: boolean;
  sameTab?: boolean;
}

export const SuggestionItem: React.FC<SuggestionItemProps> = ({ 
  suggestion, 
  onClick, 
  isSimpleModal = false,
  copyMode = false,
  sameTab = false
}) => {
  const getActionIcon = () => {
    if (copyMode) {
      return <i className="bi bi-clipboard copy-icon" aria-hidden="true"></i>;
    }
    if (sameTab) {
      return <i className="bi bi-arrow-right external-link-icon" aria-hidden="true"></i>;
    }
    return <i className="bi bi-box-arrow-up-right external-link-icon" aria-hidden="true"></i>;
  };

  const getAriaLabel = () => {
    if (copyMode) {
      return `Copy "${suggestion.text}"`;
    }
    if (sameTab) {
      return `Search for "${suggestion.text}" in same tab`;
    }
    return `Search for "${suggestion.text}" in new tab`;
  };

  return (
    <div
      onClick={() => onClick(suggestion)}
      className={`suggestion-item ${suggestion.opened ? 'opened' : ''} ${isSimpleModal ? 'simple-modal-item' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(suggestion);
        }
      }}
      aria-label={getAriaLabel()}
    >
      {suggestion.opened && (
        <i className="bi bi-check-circle-fill text-success flex-shrink-0" aria-hidden="true"></i>
      )}
      <span className="flex-grow-1">
        {suggestion.text}
      </span>
      {getActionIcon()}
    </div>
  );
};