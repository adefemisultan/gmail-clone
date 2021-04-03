import { IconButton, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/iO0_QafVCqV4d0rmFgN4urt1nq4=/0x0:1320x880/1400x933/filters:focal(555x335:765x545):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68491189/newgmaillogo.0.jpg" alt=""/>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
