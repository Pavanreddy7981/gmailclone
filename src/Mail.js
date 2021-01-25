import { IconButton } from '@material-ui/core'
import { ArrowBack, Delete,LabelImportant, Email, Error  ,CheckCircle, MoreVert, MoveToInbox, WatchLater, UnfoldMore, ExitToApp, Print } from '@material-ui/icons'
import React from 'react'
import "./Mail.css"
import {useHistory} from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectedOpenMail } from './features/mailSlice'

function Mail() {
    const history =  useHistory()

    const selectedMail = useSelector(selectedOpenMail)
    return (
        <div className="mail">
            <div className="mail_tools">

            <div className="mail_toolsLeft">
            <IconButton onClick={()=> history.push("/")}>
                <ArrowBack />
            </IconButton>
            <IconButton>
                <MoveToInbox />
            </IconButton>
            <IconButton>
                <Error />
            </IconButton>
            <IconButton>
                <Delete />
            </IconButton>
            <IconButton>
                <Email />
            </IconButton>
            <IconButton>
                <WatchLater />
            </IconButton>
            <IconButton>
                <CheckCircle />
            </IconButton>
            <IconButton>
                <LabelImportant />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
        <div className="mail_toolsRight">
            <IconButton>
                <UnfoldMore />
            </IconButton>

            <IconButton>
                <Print />
            </IconButton>

            <IconButton>
            <ExitToApp />
            </IconButton>
        </div>

            </div>
           
           <div className='mail_body'>
            <div className='mail_bodyHeader'>
                <h2> {selectedMail?.subject} </h2>
                <LabelImportant className="mail_important"/>
                <p> {selectedMail?.title} </p>
                <p className="mail_time"> {selectedMail?.time} </p>
            </div>
            
            <div className="mail_message">
                <p> {selectedMail?.description} </p>
            </div>
           </div>
        </div>
    )
}

export default Mail
