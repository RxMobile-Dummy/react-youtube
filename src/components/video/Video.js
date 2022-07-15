import React from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'
const Video = () => {
        return (
                <div className='video'>

                        <div className='video__top'>
                                <img src='https://i.ytimg.com/vi/QH2-TGUlwu4/maxresdefault.jpg' alt='video' />
                                <span>Video</span>
                        </div>
                        <div className='video__title'>
                                Create a video with your friends
                        </div>
                        <div className='video__details'>
                                <span> <AiFillEye /> {' '} 5m view *</span>
                                <span> 5 days ago</span>
                        </div>
                        <div className='video__channel'>
                                <img src='https://i.ytimg.com/vi/QH2-TGUlwu4/maxresdefault.jpg' alt='channel' sizes={20} />
                                <span>Channel</span>
                        </div>
                </div>
        )
}

export default Video