import { useState } from "react";
import Descriptions from "./components/Description/Descriptions";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";


function App() {

  const startFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  const [feedback, setFeedback] = useState(startFeedback);
  

  function updateFeedback(feedbackType)  {
    if (feedbackType === "") {
      setFeedback(startFeedback);
    } else {
      setFeedback((previousState) => ({
        ...previousState,
        [feedbackType]: previousState[feedbackType] + 1,
      }));
    }
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  

return (
<div>
  
    <Descriptions/>
    <Options updateFeedback={updateFeedback}/>
   {totalFeedback !== 0 ? (<Feedback  
    good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/>
   ) : ( <Notification/> )}
</div>

)

}

export default App;
