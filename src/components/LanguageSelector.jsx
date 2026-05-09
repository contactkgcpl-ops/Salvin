import React, { useState, useEffect, useRef } from 'react';
import './LanguageSelector.css';

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'zh-CN', name: 'Chinese' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'it', name: 'Italian' }
];

export const LANGUAGE_CHANGE_EVENT = 'salvin-language-change';

function clearGoogleTranslateCookies() {
  const hostParts = window.location.hostname.split('.');
  const domains = ['', window.location.hostname];

  for (let index = 0; index < hostParts.length - 1; index += 1) {
    domains.push(`.${hostParts.slice(index).join('.')}`);
  }

  domains.forEach((domain) => {
    const domainPart = domain ? `;domain=${domain}` : '';
    document.cookie = `googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/${domainPart}`;
  });
}

function applyGoogleLanguage(code, attempt = 0) {
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = code;
    select.dispatchEvent(new Event('change'));
    return;
  }

  if (attempt < 8) {
    window.setTimeout(() => applyGoogleLanguage(code, attempt + 1), 350);
  }
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedLang, setSelectedLang] = useState('en');
  const dropdownRef = useRef(null);

  useEffect(() => {
    clearGoogleTranslateCookies();

    const hideGoogleTranslateBanner = () => {
      document.body.style.top = '0px';
      document.body.style.position = '';
      document.documentElement.style.marginTop = '0px';

      document
        .querySelectorAll('.goog-te-banner-frame, iframe.skiptranslate, body > .skiptranslate, .goog-te-balloon-frame, .goog-te-menu-frame, #goog-gt-tt, .VIpgJd-yAWNEb-L7lbkb, .VIpgJd-ZVi9od-ORHb-OEVmcd')
        .forEach((element) => {
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.style.height = '0';
        });
    };

    // Add Google Translate Script if not present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        );
        hideGoogleTranslateBanner();
      };
    }

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleExternalLanguageChange = (event) => {
      const code = event.detail?.code;
      if (!code) return;
      setSelectedLang(code);
      setIsOpen(false);
      setSearch('');
      applyGoogleLanguage(code);
    };

    const observer = new MutationObserver(hideGoogleTranslateBanner);
    observer.observe(document.body, { childList: true, subtree: true });
    const cleanupTimer = window.setInterval(hideGoogleTranslateBanner, 500);

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleExternalLanguageChange);
    hideGoogleTranslateBanner();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleExternalLanguageChange);
      observer.disconnect();
      window.clearInterval(cleanupTimer);
    };
  }, []);

  const changeLanguage = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
    setSearch('');

    applyGoogleLanguage(code);
  };

  const filteredLanguages = LANGUAGES.filter(lang =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  const currentLangName = LANGUAGES.find(l => l.code === selectedLang)?.name || 'Language';

  return (
    <div className="custom-language-selector" ref={dropdownRef}>
      <div id="google_translate_element" hidden style={{ display: 'none !important' }}></div>
      <button
        className="lang-select-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="lang-icon">🌐</span>
        <span className="lang-text">{currentLangName}</span>
        <span className="lang-caret">▼</span>
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu">
          <div className="lang-search-wrap">
            <input
              type="text"
              placeholder="Search language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="lang-search-input"
              autoFocus
            />
          </div>
          <ul className="lang-list" role="listbox">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map(lang => (
                <li
                  key={lang.code}
                  role="option"
                  aria-selected={selectedLang === lang.code}
                  className={`lang-option ${selectedLang === lang.code ? 'selected' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </li>
              ))
            ) : (
              <li className="lang-no-results">No languages found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
