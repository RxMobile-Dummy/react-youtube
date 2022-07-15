import React, { useState } from 'react'
import "./_categoriesBar.scss"

const keywords = [
        'All',
        'Music',
        'Sports',
        'Gaming',
        'News',
        'Entertainment',
        'Movies',
        'TV',
        'Kids',
        'Lifestyle',
        'Food',
        'Travel',
        'Science',
        'Technology',
        'Business',
        'Fashion',
        'Health',
        'Politics',
        'Space',
        'Others'
]
const Categoriesbar = () => {



        const [active, setActive] = useState(0)

        const handleClick = (index) => {
                setActive(index)
        }
        return (
                <div className="categoriesbar">

                        {
                                keywords.map((keyword, index) =>
                                        <span
                                                className={active === index ? 'active' : 'disabled'}
                                                onClick={() => handleClick(index)}
                                                key={index}>{keyword}</span>

                                )
                        }

                </div>
        )
}

export default Categoriesbar
