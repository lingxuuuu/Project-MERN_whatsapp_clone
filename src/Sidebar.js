import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, Unsubscribe } from '@material-ui/icons';
import SidebarChat from "./SidebarChat"
import db from './firebase'


function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(()=> {
        db.collection('rooms').onSnapshot(snapshot =>(
            setRooms(snapshot.docs.map ( doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }))
        ))
        )
        //return () => {
            //Unsubscribe();
        //}
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src='https://avatars1.githubusercontent.com/u/36904516?s=460&u=3cda4183971cd59002e84d30ed21b199789390e0&v=4' />
                <div className ='sidebar_headerRight'>
                    <IconButton>
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className ='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>
            <div className ='sidebar_chats'>
                <SidebarChat addNewChat/>
                {rooms.map( room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                 )
                )}
            </div>
        </div>
    )
}

export default Sidebar
