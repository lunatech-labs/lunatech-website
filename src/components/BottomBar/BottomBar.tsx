import Sound from '/sound.svg';
import "./BottomBar.scss";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
        <div className="lang">
            <p className="lang__text">en</p>
            <span className="lang__split"></span>
            <p className="lang__text">fr</p>
        </div>
        <div className="sound">
            <img className="sound__icon" src={Sound} alt="Sound" />
            <p className="sound__text">sound off</p>
        </div>
    </div>
  )
}

export default BottomBar