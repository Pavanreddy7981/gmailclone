import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown,Redo, MoreVert, ChevronLeft, ChevronRight, KeyboardHide, Settings, Inbox, People, LocalOffer } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import EmailRow from './EmailRow'
import "./MailList.css"
import Section from './Section'
import {db} from "./firebase"

function MailList() {
    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection("emails").orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setEmails(
              snapshot.docs.map((doc) => ({
                  id : doc.id,
                  data : doc.data()
              }))  
            ))
    }, [])
    return (
        <div className="mailList">
            <div className="mailList_settings">
                <div className="mailList_settingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mailList_settingsRight">
                
            <IconButton>
                <ChevronLeft />
            </IconButton>
            <IconButton>
                <ChevronRight />
            </IconButton>
            <IconButton>
                <KeyboardHide />
            </IconButton>
            <IconButton>
                <Settings />
            </IconButton>

                </div>
            </div>
            <div className="mailList_section">
                <Section Icon={Inbox} title="Primary" color="red"  selected={true} />
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>
            <div className="mailList_List">
            {
                emails.map(({id, data:{to, subject, message, timestamp}}) => (
                    <EmailRow 
                        id = {id}
                        key ={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}

                    />
                ))
            }
                <EmailRow 
                title="Twitch"
                subject="Hey Fellow guys"
                description="This is a desc"
                time="12pm"
                />

                <EmailRow 
                title="Twitch"
                subject="Hey Fellow guys"
                description="This is a desc"
                time="12pm"
                />
            </div>
        </div>
    )
}

export default MailList
