import Particle from '../Particle';
import TimelineItem from './TimelineItem';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { timelineData } from './List';

export default function TimeLine() {

    const [visibleItems, setVisibleItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleItems(timelineData.map((_, index) => index));
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleItemToggle = (index) => {
        setExpandedItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return <Container fluid className="about-section">
        <Particle />
        <div className="timeline-container">
            <h1 className="project-heading">
                Professional <strong className="purple">Journey </strong>
            </h1>
            <p style={{ color: "white", marginBottom: "50px" }}>
                Open to freelance opportunities — feel free to reach out at <a className='purple' style={{ color: "white", fontWeight: "bold", textDecoration: "none" }} href="https://mail.google.com/mail/?view=cm&to=darshan98solanki@gmail.com" target="_blank" rel="noopener noreferrer">
                    darshan98solanki@gmail.com
                </a>
                .
            </p>

            <div className="timeline-wrapper">
                <div className="timeline-line"></div>

                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        isVisible={visibleItems.includes(index)}
                        onToggle={handleItemToggle}
                    />
                ))}
            </div>
        </div>
    </Container>
}