/**
 * Applies consistent styling to inline code elements
 */
export const applyCodeStyles = () => {
  const codeStyle = {
    padding: '0.2rem 0.4rem',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#14B8A6',
    whiteSpace: 'nowrap',
  };

  // Select all code elements that are not inside pre tags
  const codeElements = document.querySelectorAll('code:not(pre code)');
  codeElements.forEach(el => {
    // Type assertion to HTMLElement
    if (el instanceof HTMLElement) {
      Object.assign(el.style, codeStyle);
    }
  });
};