import { useState } from 'react';
import Icon from "@components/Icon/Icon";
import "./Timeline.scss";
import Buildings1 from '../../assets/netherlandsIcon.svg';
import { arrowChevronLeft, arrowChevronRight } from '@/assets';

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

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [minMaxBtn, setMinMaxBtn] = useState('min')

  const handleArrowClick = (direction: 'left' | 'right') => {
    setActiveIndex((prevIndex) => {
      let newIndex;
      if (direction === 'right') {
        newIndex = Math.min(prevIndex + 1, eventsData.length - 1);
      } else {
        newIndex = Math.max(prevIndex - 1, -1);
      }

      if (newIndex === -1) {
        setMinMaxBtn('min');
      } else if (newIndex === eventsData.length - 1) {
        setMinMaxBtn('max');
      } else {
        setMinMaxBtn('');
      }

      return newIndex;
    });
  }

  return (
    <div>
        <div className="timeline">
            <div className="timeline__body">
                {eventsData.map((event, index) => (
                    <div key={index}>
                        <div className={`${event.lt ? 'timeline__lt-event' : 'timeline__event'}`} key={event.year}>
                                <p className={`timeline__icon ${index <= activeIndex ? 'active' : ''}`}>
                                    {event.icon && (<Icon   imageUrl={event.icon} size="small" />)}
                                </p>
                                <div className={`${index <= activeIndex ? 'active' : ''}`}></div>
                                <p className={`timeline__date ${index <= activeIndex ? 'active' : ''}`}>{event.year}</p>
                                {eventsData[index].lt ? (
                                    <p className={`timeline__title ${index <= activeIndex ? 'active' : ''}`}>{event.title}</p>
                                ): (
                                    <p className={`timeline__subTitle ${index <= activeIndex ? 'active' : ''}`}>{event.title}</p>
                                )} 
                                {event.text && <p className={`timeline__text ${index <= activeIndex ? 'active' : ''}`}>{event.text}</p>}
                            {event.icon && (<div className={`timeline__round ${index <= activeIndex ? 'active' : ''}`}></div>)}
                        </div>
                        {index !== eventsData.length - 1 && (
                            <div className={`timeline__line ${index < activeIndex ? 'active' : ''}`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
        <div className='timeline__buttons'>
            <button className={`${minMaxBtn == 'min' ? 'min' : ''}`} onClick={() => handleArrowClick('left')}><img src={arrowChevronLeft} alt="Scroll Left" /></button>
            <button className={`${minMaxBtn == 'max' ? 'max' : ''}`} onClick={() => handleArrowClick('right')}><img src={arrowChevronRight} alt="Scroll Right" /></button>
        </div>
    </div>

  );
};

export default Timeline;