import sleepGif from "../assets/icons/sleep2.gif";

function Sleep({onWake}){
    return (
        <div className="sleep-screen" onClick={onWake}>
            <img src={sleepGif}
            alt="sleeping"
            className="sleep-gif"/>
        </div>
    );
}
export default Sleep;