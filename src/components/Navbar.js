import React from 'react'
import bank from './icon/bank.png'

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="title">
                    <span> 
                        <img src={bank} alt='icon' width="30px" height='30px' />
                        Welcome to the National Bank 
                    </span>
                </div>
            </nav>
        </React.Fragment>
    )
}