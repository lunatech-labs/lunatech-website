import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timeline } from "@/constants";
import './Timeline3.scss';

const Timeline3 = () => {
    return (
        <>
            {timeline.map((event) => (
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="timeline"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={event.year.toString()}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={
                            <div className="timeline__icon">
                                {event.icon && (
                                    <img 
                                    src={event.icon} 
                                    alt={event.title}
                                    />
                                )}
                            </div>
                        }
                        {...event.lt ? { position: 'right' } : { position: 'left' }}
                    >
                        <div>
                        <h3 className="timeline__title">{event.title}</h3>
                        <p className="timeline__subtitle" style={{margin: 0}}>{event.text}</p>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            ))}
        </>
    );
};

export default Timeline3;