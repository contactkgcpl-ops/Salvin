import React from 'react';
import './WhyChooseSalvin.css';
import whyChooseData from '../data/whyChooseSalvinData';

export default function WhyChooseSalvin({ prefix, isVisible, projectKey, customFeatures }) {
  const genericFeatures = [
    {
      title: 'Turnkey Solutions',
      desc: 'End-to-end processing solutions from design and manufacturing to installation and commissioning.',
      icon: <path d="M2 20h20M4 20V10l8-7 8 7v10M10 20v-6h4v6" />
    },
    {
      title: 'Food Grade Design',
      desc: 'SS304/SS316 contact parts with hygienic construction for food-safe processing.',
      icon: (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )
    },
    {
      title: 'Energy Efficient',
      desc: 'Optimized systems designed to reduce power consumption and improve productivity.',
      icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    },
    {
      title: 'Low Maintenance',
      desc: 'Robust industrial construction ensuring long service life and minimal maintenance.',
      icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    },
    {
      title: 'Automation Ready',
      desc: 'PLC-based automation and intelligent controls for consistent production.',
      icon: (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h10" />
        </>
      )
    },
    {
      title: 'After Sales Support',
      desc: 'Dedicated technical support, spare parts assistance and service guidance.',
      icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    }
  ];

  const featuresToUse = customFeatures || (projectKey && whyChooseData[projectKey]) || genericFeatures;

  const getIconForIndex = (index) => {
    return genericFeatures[index % genericFeatures.length].icon;
  };
  return (
    <section className={`${prefix}-section why-choose-section`} id="why-salvin" data-animate>
      <div className={`${prefix}-container ${prefix}-animate ${isVisible ? `${prefix}-animate--in` : ''}`}>
        <div className={`${prefix}-section-badge`}>Our Advantage</div>
        <h2 className={`${prefix}-section-title`}>Why Choose <span className={`${prefix}-accent`}>SALVIN</span></h2>
        <div className="why-choose-grid">
          {featuresToUse.map((feature, idx) => (
            <div className="why-choose-card" key={idx}>
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  {getIconForIndex(idx)}
                </svg>
              </div>
              <div>
                <p className="why-choose-title">{feature.title}</p>
                <p className="why-choose-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
