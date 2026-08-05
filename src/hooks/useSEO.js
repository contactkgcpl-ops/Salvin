import { useEffect } from 'react';

export function useSEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }
    
    // Update canonical and og:url on route change
    const path = window.location.pathname.replace(/\/+$/, '');
    const cleanUrl = window.location.origin + (path || '/');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', cleanUrl);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', cleanUrl);

  }, [title, description]);
}
