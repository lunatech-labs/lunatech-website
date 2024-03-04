import "./Timeline2.scss";
import { timeline } from "@/constants/index";

const Timeline2 = () => {
    return (
    <div className='timeline'>
        {timeline.map((event) => (
            <div className={`timeline__container ${event.lt ? 'right-container' : 'left-container'}`}>
                {event.lt ? (
                    <div className="timeline__icon">
                        <img src={event.icon} alt="" />
                    </div>
                ): 
                (
                    <span className="timeline__round"></span>
                )}
                <span className={`timeline__date ${event.lt ? `left` : `right`}`}>{event.year}</span>
                <div className='timeline__textBox'>
                    <h2>{event.title}</h2>
                    <p>{event.text}</p>
                    {event.lt ? (
                        <span className="timeline__arrow-right"></span>
                    ): (
                        <span className="timeline__arrow-left"></span>
                    )}
                </div>
            </div> 
        ))}
    </div>
    );
};

export default Timeline2;
