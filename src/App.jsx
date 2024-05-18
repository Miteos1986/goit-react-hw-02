import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";



function App() {
  
  return (
    <>
 <div>
  <Profile
  name={userData.username}
  tag={userData.tag}
  location={userData.location}
  image={userData.avatar}
  stats={userData.stats}


  />
 </div>
 <div>
 <FriendList friends={friends} />
 <TransactionHistory items={transactions} />
 </div>
    </>
  );
}

export default App;
