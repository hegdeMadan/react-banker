import React from 'react'

const Instructions = () => {
    return (
        <div className="instruction">
            <h2> Instructions </h2>
            <div className="bar"></div>
            <ul>
                <li>
                    Use the slider to choose loan amount between 500$ and 5000$.
                </li>
                <li>
                    Choose number of months between 6 and 24, dragging slider.
                </li>
                <li>
                    Default amount is 500$ and time span is 24 Months.
                </li>
                <li>
                    Once you start dragging slider <strong>Interest rate</strong> and the <strong>Monthly Payment</strong> you'll have to make
                    will be displayed.
                </li>
            </ul>
        </div>
    )
}

export default Instructions