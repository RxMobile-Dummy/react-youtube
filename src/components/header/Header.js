import React from 'react'
import "./_header.scss"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { Form } from 'react-bootstrap'
const Header = ({handleSidebar}) => {
        return (
                <div className='header'>
                        <FaBars className='header__menu' size={26} onClick={()=>handleSidebar()} />
                        <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' className='header__logo'></img>

                        <Form>

                                <input type='text' placeholder='Search' />
                                <button type='submit'>
                                        <AiOutlineSearch size={26} />
                                </button>


                        </Form>
                        <div className='header__icons'>
                                <MdNotifications size={28} />
                                <MdApps size={28} />
                        </div>


                </div>
        )
}

export default Header