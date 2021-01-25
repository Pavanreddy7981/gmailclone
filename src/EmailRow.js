import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportant, StarBorder } from '@material-ui/icons'
import React from 'react'
import "./EmialRow.css"
import {useHistory} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'

function EmailRow({id, title, subject, description,time }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const OpenMail= () => {
        dispatch(selectMail({
            id, 
            title, 
            subject, 
            description,
            time
        }))
        history.push("/mail")
    }
    return (
        <div onClick={OpenMail} className="emailrow">
            <div className="emailrow_Options"> 
            <Checkbox />
            <IconButton >
                <StarBorder />
            </IconButton>
            <IconButton>
                <LabelImportant />
            </IconButton>
            </div>
            <h3 className="emailrow_title">
                {title}
            </h3>
            <div className="emailrow_message">
                <h4>
                    {subject} {""}
                    <span className="emailrow_description">
                        -{description}
                    </span>
                </h4>
            </div>
            <p className="emailrow_time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
