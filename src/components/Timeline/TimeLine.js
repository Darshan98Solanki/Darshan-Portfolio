import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Particle from '../Particle';
import { Container } from 'react-bootstrap';

export default function TimeLine() {
    return <Container fluid className="about-section">
        <Particle />
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="11/2010 – Present"
                style={{ color: '#e86971' }}
            >
                <div className="project-card-view" style={{ padding: '20px' }}>
                    <h3 className='mb-1'>Title, Company</h3>
                    <h4 className='mb-3'>Subtitle</h4>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                </div>
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="04/2009 – 11/2010"
                dateInnerStyle={{ background: '#6100ff', color: '#000' }}
                bodyContainerStyle={{
                    padding: '0px 20px',
                }}
            >
                <div className="project-card-view" style={{ padding: '20px' }}>
                    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
                    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                </div>
            </TimelineItem>
        </Timeline>
    </Container>;
}