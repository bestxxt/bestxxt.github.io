import { useState } from 'react';
import './About.css';

type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  side: 'left' | 'right';
  type: 'education' | 'work';
  details: string[];
  topOffsetMonths: number;
  durationMonths: number;
};

// Base date: Apr 2026 = 0 (Top)
// End date: Sep 2019 = 79 (Bottom)
const events: TimelineEvent[] = [
  {
    id: 'ta_uoft',
    year: 'Jan. 2025 -- Apr. 2026',
    title: 'Teaching Assistant',
    subtitle: 'University of Toronto - Canada',
    side: 'right',
    type: 'work',
    details: [
      "Led lab sessions on CPU architecture, memory interfacing, A/D & D/A conversion, and motor control. Guided 100+ students in designing and debugging using Assembly and C language.",
      "Provided detailed feedback on student code, lab reports, and delivered weekly summaries to the professor, highlighting common challenges, lab performance, and areas needing additional instruction."
    ],
    topOffsetMonths: 0,
    durationMonths: 15,
  },
  {
    id: 'uoft',
    year: 'Sep. 2024 -- Apr. 2026',
    title: 'University of Toronto',
    subtitle: 'M.Eng in Mechanical and Industrial Engineering (Emphasis in Data Analytics and Machine Learning)',
    side: 'left',
    type: 'education',
    details: [],
    topOffsetMonths: 0,
    durationMonths: 19,
  },
  {
    id: 'swe_huitong',
    year: 'Aug. 2023 -- May. 2024',
    title: 'Software Engineer',
    subtitle: 'HUITONG Technology - China',
    side: 'right',
    type: 'work',
    details: [
      "Developed the backend using Node.js, integrating satellite networks via socket interfaces to process over 500k location updates daily, with data stored securely in a MySQL database.",
      "Built the interactive interface with Vue.js, enabling real-time visualization of helicopters' locations, altitude, and operational status, as well as providing historical flight records and instant alerts for abnormal flights, reducing response time to emergencies by 30%.",
      "Deployed and managed services using Docker for containerization, combined with Caddy as a reverse proxy and load balancer, enabling 99.3% system uptime and supporting 40% faster horizontal scaling to meet peak traffic demands.",
      "Achieved significant operational improvements by maintaining real-time tracking for over 26 helicopters across 16 main regions, with data latency under 1 second in 98% of cases."
    ],
    topOffsetMonths: 23,
    durationMonths: 9,
  },
  {
    id: 'scau',
    year: 'Sep. 2019 -- Jun. 2023',
    title: 'South China Agricultural University',
    subtitle: 'Bachelor of Science in Electronic Information Science and Technology',
    side: 'left',
    type: 'education',
    details: [],
    topOffsetMonths: 34,
    durationMonths: 45,
  },
  {
    id: 'intern_powergrid',
    year: 'Jun. 2022 -- Nov. 2022',
    title: 'Embedded Engineer Intern',
    subtitle: 'China Nanfang Power Grid - China',
    side: 'right',
    type: 'work',
    details: [
      "Collaborated within a cross-functional team to develop a UAV Retrieval System to locate and recover crashed inspection drones using advanced communication, control, and alarm technologies.",
      "Design and implementation of the sky-end module, enabling reliable location data transmission via 4G, Satellite and LoRa and integrating an alarm and eject system to enhance drone recovery efficiency.",
      "Achieved an 86% success rate (28 mountain area tests) in functionality tests and successfully located a large inspection UAV used for high-voltage tower inspections during real-world operations, preventing significant company property losses."
    ],
    topOffsetMonths: 41,
    durationMonths: 5,
  },
  {
    id: 'ra_gdas',
    year: 'Feb. 2021 -- Jul. 2021',
    title: 'Research Assistant',
    subtitle: 'Guangdong Academy of Agricultural Sciences - China',
    side: 'right',
    type: 'work',
    details: [
      "Upgraded the lab’s spectral data collection system by integrating Arduino-controlled sensors with a conveyor belt and serial communication to the host computer.",
      "Automated the trigger logic for fruit detection and spectral capture, replacing the manual workflow.",
      "Improved data collection efficiency, reducing the time for a full dataset from 2 weeks to 1 week."
    ],
    topOffsetMonths: 57,
    durationMonths: 5,
  }
];

const MONTH_SCALE = 15; // 15px per month avoids event collisions while keeping it compact
const TOTAL_HEIGHT = 79 * MONTH_SCALE; 

const About = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [clickCoords, setClickCoords] = useState<{ x: number; y: number } | null>(null);
  const [savedScrollY, setSavedScrollY] = useState<number | null>(null);
  const [transitionStyle, setTransitionStyle] = useState('none');

  const handleEventClick = (event: TimelineEvent, e: React.MouseEvent) => {
    // Only capture click if we aren't already viewing details
    if (selectedEvent) return;

    // Save current scroll position
    setSavedScrollY(window.scrollY);

    const section = document.getElementById('about');
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      
      // Calculate where on the screen the user clicked relative to the section
      const x = e.clientX - sectionRect.left;
      const y = e.clientY - sectionRect.top;
      
      setTransitionStyle('none');
      setClickCoords({ x, y });
      
      setTimeout(() => {
        setTransitionStyle('clip-path 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)');
        setSelectedEvent(event);
        
        // Smooth scroll to the top of the section for reading details
        const topOffset = sectionRect.top + window.scrollY;
        window.scrollTo({ top: topOffset - 40, behavior: 'smooth' });
      }, 20);
    }
  };

  const handleBackClick = () => {
    setTransitionStyle('clip-path 0.6s ease-out');
    setSelectedEvent(null);
    
    if (savedScrollY !== null) {
      setTimeout(() => {
        window.scrollTo({ top: savedScrollY, behavior: 'smooth' });
      }, 50);
    }
  };
  
  return (
    <section id="about" className={`section about-section ${selectedEvent ? 'detail-active' : ''}`}>
      
      <div 
        className="bg-expansion-layer"
        style={{
          transition: transitionStyle,
          backgroundColor: 'var(--ink)',
          clipPath: selectedEvent && clickCoords 
            ? `circle(300% at ${clickCoords.x}px ${clickCoords.y}px)` 
            : clickCoords 
              ? `circle(0px at ${clickCoords.x}px ${clickCoords.y}px)` 
              : 'circle(0px at 50% 50px)'
        }}
      ></div>
      
      <div className="container about-container">
        
        <div className="dynamic-header-container">
          <button 
            className={`back-button ${selectedEvent ? 'visible' : ''}`}
            onClick={handleBackClick}
            aria-label="Go back"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h2 className="section-title dynamic-title">
            {selectedEvent ? selectedEvent.title : "In the Past"}
          </h2>
        </div>
        
        <div className={`timeline-legend ${selectedEvent ? 'hidden' : ''}`}>
          <span className="legend-left">Education & Honors</span>
          <span className="legend-right">Work Experience</span>
        </div>

        <div className="timeline-wrapper">
          <div 
            className={`timeline-container ${selectedEvent ? 'hidden' : ''}`}
            style={{ height: `${TOTAL_HEIGHT}px` }}
          >
            <div className="timeline-line"></div>
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className={`timeline-item ${event.side} fade-in-up`}
                style={{ 
                  top: `${event.topOffsetMonths * MONTH_SCALE}px`,
                  // Enforce a minimum height so small events don't get crushed, but let it grow if text is long
                  minHeight: `${Math.max(event.durationMonths * MONTH_SCALE, 180)}px`,
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className="timeline-dot-sticky">
                  <div className="timeline-dot brutal-border bg-ink"></div>
                </div>
                
                <div 
                  className="timeline-calendar-event brutal-border brutal-shadow" 
                  onClick={(e) => handleEventClick(event, e)}
                >
                  <div className="timeline-text-sticky">
                    <span className="timeline-year mono-tag bg-ink text-paper">
                      {event.year}
                    </span>
                    <h3>{event.title}</h3>
                    <p>{event.subtitle}</p>
                    <div className="click-hint mono-tag">Click to view details &rarr;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`detail-container ${selectedEvent ? 'visible' : ''}`}>
            {selectedEvent && (
              <div className="detail-content fade-in-up">
                <span className="detail-type mono-tag">
                  {selectedEvent.type === 'education' ? 'EDUCATION' : 'WORK EXPERIENCE'}
                </span>
                <span className="detail-year mono-tag">
                  {selectedEvent.year}
                </span>
                <h4 className="detail-subtitle">
                  {selectedEvent.subtitle}
                </h4>
                <div className="detail-divider"></div>
                {selectedEvent.details.length > 0 ? (
                  <ul className="detail-bullets">
                    {selectedEvent.details.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="detail-body">
                    No additional details provided.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
