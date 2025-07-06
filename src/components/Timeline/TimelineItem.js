import { Award, Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { useState } from "react";

const TimelineItem = ({ item, index, isVisible, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle(index);
  };

  return (
    <div className={`timeline-item ${isVisible ? 'animate-in' : ''}`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease-out'
      }}
    >
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
      </div>
      
      <div className="timeline-content">
        <div className="timeline-card" onClick={handleToggle}>
          <div className="timeline-header">
            <div className="timeline-date-badge">
              <Calendar className="me-2" size={16} />
              {item.period}
            </div>
            <div className="timeline-expand-btn">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          
          <div className="timeline-title-section">
            <h4 className="timeline-title">{item.title}</h4>
            <h6 className="timeline-company">{item.company}</h6>
            <p className="timeline-location">
              <MapPin size={14} className="me-1" />
              {item.location}
            </p>
          </div>
          
          <div className={`timeline-details ${isExpanded ? 'expanded' : ''}`}>
            <div className="timeline-description">
              {item.description.map((desc, i) => (
                <p key={i} className="mb-3">{desc}</p>
              ))}
            </div>
            
            {item.achievements && (
              <div className="timeline-achievements">
                <h6 className="achievements-title">
                  <Award size={16} className="me-2" />
                  Key Achievements
                </h6>
                <ul className="achievements-list">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {item.skills && (
              <div className="timeline-skills">
                <h6 className="skills-title">Technologies & Skills</h6>
                <div className="skills-badges">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;