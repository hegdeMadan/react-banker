import React from 'react'

const Data = ({ values }) => {

    const { data } = values

    return (
        <div className="data_wrapper">
            <p className="true-val">
                Total Amount of Loan: <span> {values.amount|| `${500}`}USD </span>
            </p>

            <p className="true-val">
                Number of Month you chose: <span> {values.month|| `${6}` }Months </span>
            </p>
            
           <div>
                <p>
                    Interest Rate: <span> {data.interestRate} </span>
                </p>

                <div className="stroke"></div>
                <p>
                    Monthly payment: <span>
                        {`${data.monthlyPayment.amount}${data.monthlyPayment.currency}`}
                    </span>
                </p>
                <div className="stroke"></div>
                
           </div>

        </div>
    )
}

export default Data