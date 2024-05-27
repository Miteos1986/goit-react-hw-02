import Descriptions from "./components/Description/Descriptions";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";


function App() {

  const startFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
  };

return (
<div>
  
    <Descriptions/>
    <Options/>
    <Feedback/>
  
</div>

)

}

export default App;
