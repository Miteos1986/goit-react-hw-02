// // import css from "./Options.module.css"



const Options = ({updateFeedback, totalFeedback}) => {

   
    return (
  <div>
    <button onClick={()=> updateFeedback ("good")} >Good</button>
    <button onClick={()=> updateFeedback ("neutral")}>Neutral</button>
    <button onClick={()=> updateFeedback ("bad")}>Bad</button>
    <button disabled={totalFeedback === 0} onClick={()=> updateFeedback ("reset")}>Reset</button>

  </div>
    )
};

export default Options;
