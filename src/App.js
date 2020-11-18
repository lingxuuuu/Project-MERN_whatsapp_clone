import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
//import axios from 'axios';
import axios from './axios';


function App() {

  const [messages, setMessages] = useState([]);

  //fetching
 useEffect(() => {
  axios.get('/messages/sync').then((response) => {
     setMessages(response.data);
  });
 }, []);

  //when the app loads, run this piece of listener code once to use Pusher
 useEffect(() => {
    const pusher = new Pusher('8af509e489c49360d052', {
      cluster: 'us3'
    });
  //messages and inserted can be found in server.js 
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //...operator means keep the current messages and add data
      setMessages([...messages, newMessage]);
    });
    
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
    
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className='app_body'>
         <Sidebar />
         <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
