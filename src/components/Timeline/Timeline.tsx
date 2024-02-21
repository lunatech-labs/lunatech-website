import Icon from "../Icon/Icon";
import "./Timeline.scss";
import Buildings1 from '/buildings1.svg';


const Timeline = () => {
  return (
    <div className="timeline">
        <div className="timeline__body">
            <div className="timeline__event">
                <div></div>
                <p>1980</p>
                <p>IBM PC</p>
            </div>
            <div className="timeline__event">
                <div></div>
                <p>1981</p>
                <p>MS DOS Client Apps</p>
            </div>
            <div className="timeline__event">
                <div></div>
                <p>1982</p>
                <p>Windows 3</p>
            </div>
            <div className="timeline__event">
                <div></div>
                <p>1983</p>
                <p>Desktop Apps</p>
            </div>
            <div className="timeline__event">
                <div></div>
                <p>1988</p>
                <p>World Wide Web</p>
            </div>
            <div className="timeline__lt-event">
                <Icon imageUrl={Buildings1} size="small" />
                <p className="timeline__date">1980</p>
                <p className="timeline__title">Lunatech is born</p>
                <p className="timeline__text">Opening of the first office in Rotterdam</p>
                <div className="timeline__round"></div>
            </div>
            <div className="timeline__lt-event">
                <Icon imageUrl={Buildings1} size="small" />
                <p className="timeline__date">1993</p>
                <p className="timeline__title">Lunatech is born</p>
                <p className="timeline__text">Opening of the first office in Rotterdam</p>
                <div className="timeline__round"></div>
            </div>
            <div className="timeline__lt-event">
                <Icon imageUrl={Buildings1} size="small" />
                <p className="timeline__date">1993</p>
                <p className="timeline__title">Lunatech is born</p>
                <p className="timeline__text">Opening of the first office in Rotterdam</p>
                <div className="timeline__round"></div>
            </div>
            <div className="timeline__event">
                <div></div>
                <p>1993</p>
                <p>Lunatech is born</p>
            </div>
            <div className="timeline__event">
                <div></div>
                <p>1993</p>
                <p>Lunatech is born<br /> fjefihe fjeo fejo fezhfz </p>
            </div>
            <div className="timeline__lt-event">
                <Icon imageUrl={Buildings1} size="small" />
                <p className="timeline__date">1993</p>
                <p className="timeline__title">Lunatech is born</p>
                <p className="timeline__text">Opening of the first office in Rotterdam</p>
                <div className="timeline__round"></div>
            </div>
            <div className="timeline__lt-event">
                <Icon imageUrl={Buildings1} size="small" />
                <p className="timeline__date">1993</p>
                <p className="timeline__title">Lunatech is born</p>
                <p className="timeline__text">Opening of the first office in Rotterdam</p>
                <div className="timeline__round"></div>
            </div>
        </div>
        <div className="timeline__line"></div>
    </div>
  )
}

export default Timeline