// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

interface TrackEventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

/**
 * Track a custom event in Google Analytics 4
 * @param params - Event parameters
 */
export const trackEvent = ({ action, category, label, value }: TrackEventParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track button clicks with section context
 * @param section - The section where the button is located
 * @param buttonName - The name/label of the button
 * @param destination - Optional destination URL or action
 */
export const trackButtonClick = (
  section: string,
  buttonName: string,
  destination?: string
): void => {
  trackEvent({
    action: 'click',
    category: section,
    label: destination ? `${buttonName} -> ${destination}` : buttonName,
  });
};

/**
 * Track page section views
 * @param sectionName - The name of the section viewed
 */
export const trackSectionView = (sectionName: string): void => {
  trackEvent({
    action: 'view_section',
    category: 'Section',
    label: sectionName,
  });
};

/**
 * Track form interactions
 * @param formName - The name of the form
 * @param action - The action (start, submit, error)
 */
export const trackFormInteraction = (
  formName: string,
  action: 'start' | 'submit' | 'error'
): void => {
  trackEvent({
    action: `form_${action}`,
    category: 'Form',
    label: formName,
  });
};

/**
 * Track external link clicks
 * @param linkUrl - The URL of the external link
 * @param context - Where the link was clicked from
 */
export const trackExternalLink = (linkUrl: string, context: string): void => {
  trackEvent({
    action: 'external_link_click',
    category: context,
    label: linkUrl,
  });
};
