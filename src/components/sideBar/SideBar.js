import React from 'react'
import "./_sideBar.scss"
import {
        MdSubscriptions,
        MdHome,
        MdExitToApp,
        MdThumbUp,
        MdHistory,
        MdLibraryBooks,
        MdSentimentSatisfied

} from 'react-icons/md'
const SideBar = ({ sidebar, handleSidebar }) => {
        return (
                <nav className={sidebar ? 'sidebar open' : 'sidebar'}
                        onClick={() => handleSidebar(false)}
                >
                        <li>
                                <MdHome size={23} />
                                <span>Home</span>
                        </li>
                        <li>

                                <MdSubscriptions size={23} />
                                <span>Subscriptions</span>
                        </li>
                        <li>
                                <MdThumbUp size={23} />
                                <span>Liked Video</span>
                        </li>
                        <li>
                                <MdHistory size={23} />
                                <span>History</span>
                        </li>
                        <li>
                                <MdLibraryBooks size={23} />
                                <span>Library</span>
                        </li>
                        <li>
                                <MdSentimentSatisfied size={23} />
                                <span>Setting</span>
                        </li>
                        <hr />
                        <li>
                                <MdExitToApp size={23} />
                                <span>Logout</span>
                        </li>
                        <hr />


                </nav >
        )
}

export default SideBar