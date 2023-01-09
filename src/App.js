import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/chatFeed';
import './App.css'; 

const App = ()  =>  {
return(

    <ChatEngine height="100vh"
    projectID = '5491966f-d613-45d1-bc1d-259dce553601'
    userName='yash'
    userSecret='696969'
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    
    
    />

);
}


export default App ;