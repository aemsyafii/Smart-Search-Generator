import React from 'react';
import { Suggestion } from './types';

interface SuggestionItemProps {
  suggestion: Suggestion;
  onClick: (suggestion: Suggestion) => void;
  isSimpleModal?: boolean;
}

export const SuggestionItem: React.FC<SuggestionItemProps> = ({ 
  suggestion, 
  onClick, 
  isSimpleModal = false 
}) => {
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
      aria-label={`Search for "${suggestion.text}"`}
    >
      {suggestion.opened && (
        <i className="bi bi-check-circle-fill text-success flex-shrink-0" aria-hidden="true"></i>
      )}
      <span className="flex-grow-1">
        {suggestion.text}
      </span>
      <i className="bi bi-box-arrow-up-right external-link-icon" aria-hidden="true"></i>
    </div>
  );
};