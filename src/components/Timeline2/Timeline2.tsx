// import "./Timeline2.scss";
import Buildings1 from '/buildings1.svg';

interface TimelineEvent {
    year: number;
    title: string;
    text?: string;
    icon?: string
    lt?: boolean;
  }
  
  const eventsData: TimelineEvent[] = [
      { year: 1980, title: "IBM PC"},
      { year: 1981, title: "MS DOS Client Apps"},
      { year: 1982, title: "Windows 3"},
      { year: 1983, title: "Desktop Apps"},
      { year: 1988, title: "World Wide Web"},
      { year: 1990, title: "Lunatech is born", text: "Opening of the first office in Rotterdam", icon: Buildings1, lt: true},
      { year: 1993, title: "Lunatech is born", text: "Opening of the first office in Paris", icon: Buildings1, lt: true },
      { year: 1995, title: "Lunatech conf"},
      { year: 1997, title: "Lunatech is born", text: "Opening of the first office in Amsterdam", icon: Buildings1, lt: true },
  ];

const Timeline2 = () => {
    return (
    <div className='timeline'>
        {eventsData.map((event) => (
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
