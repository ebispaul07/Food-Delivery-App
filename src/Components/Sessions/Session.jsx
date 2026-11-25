import React, { useState } from 'react';
import { SessionData } from '../../Data/Session.data.jsx';
import Card from 'react-bootstrap/Card';
const Session = ({ setSelectedSession }) => {
    const [SessionList, setSessionList] = useState(SessionData);
    const mess=(name)=>{
        console.log(name)
    }
  return (
    <div>
        {SessionList.map((session)=>(
        <div>
         <Card
          key={session.id}
          onClick={()=>setSelectedSession(session.SessionName)}
          style={{ width: '8rem', cursor: 'pointer' }}
          className="text-center shadow-sm p-2"
         >
          <Card.Img
            variant="top"
            src={session.SessionImage}
            style={{ width: '40px', height: '30px', margin: '0 auto' }}
          />
          <Card.Body className="p-2">
            <Card.Title className="fs-6 mb-0">{session.SessionName}</Card.Title>
          </Card.Body>
        </Card>
            </div>
        ))}
      
    </div>
  )
}

export default Session
   