import React from 'react'
import "./Header.css"
import {Menu, Search, ArrowDropDown,Apps,Notifications} from "@material-ui/icons"
import {IconButton, Avatar} from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        }
            
        )
    }
    return (
        <div className="header">
            <div className="header_left">
            <IconButton>
                <Menu />
            </IconButton>
            <img src="https://cdn.vox-cdn.com/thumbor/ttJ6TTVOWTTi2p3EaeeLfS4fUS8=/0x0:1320x880/1400x933/filters:focal(555x335:765x545):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg" 
            alt=""/>
            
            </div>

            <div className="header_middle" >
                <Search />
                <input placeholder="Search Email" type="text"/>
                <ArrowDropDown className="header_dropdown"/>
            </div>

            <div className="header_right">
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoURl} />
            
            </div>
        </div>
    )
}

export default Header
