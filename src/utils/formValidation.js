// Create a new file: src/utils/formValidation.js

export const setupFormLanguage = () => {
    // Add this to your application's initialization (e.g., in index.js or App.js)
    document.documentElement.lang = "en"; // or "it" based on selected language
    
    // Override the default validation messages
    if (HTMLInputElement.prototype.reportValidity) {
      const originalReportValidity = HTMLInputElement.prototype.reportValidity;
      HTMLInputElement.prototype.reportValidity = function() {
        // Disable the browser's default validation popup
        this.setCustomValidity("");
        return originalReportValidity.apply(this, arguments);
      };
    }
    
    // Same for textareas
    if (HTMLTextAreaElement.prototype.reportValidity) {
      const originalReportValidity = HTMLTextAreaElement.prototype.reportValidity;
      HTMLTextAreaElement.prototype.reportValidity = function() {
        this.setCustomValidity("");
        return originalReportValidity.apply(this, arguments);
      };
    }
  };