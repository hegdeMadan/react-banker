import React, { Component } from 'react'
import axios from 'axios'

import Data from './Data'
import Instructions from './Instructions'
import Footer from './Footer'

class Dashboard extends Component {
    
    constructor() {
        super()
        
        this.state = {
            isLoading: false,
            amount: 500,
            month: 24
        }
    }

    handleChange = (e) => {

        this.setState( _ => {
            return {
                isLoading: true
            }
        })
        console.log(e.target.value)

        const value = e.target.value

        if(e.target.id === 'amount') {

            this.setState(_ => {
                return {
                    amount: value
                }
            }, _ => {
    
                axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.month}`)
    
                .then(res => {
                    console.log("res", res)
                    this.setState(_ => {
                        return {
                            data: res.data,
                            isLoading: false
                        }
                    })
                })
    
                .catch(error => {
                    console.log(error)
                    this.setState(_ => {
                        return {
                            error,
                            isLoading: false
                        }
                    })
                })
            
            })

        } else if(e.target.id === 'month') {

            this.setState(_ => {
                return {
                    month: value
                }
            }, _ => {

                axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount }&numMonths=${this.state.month}`)
    
                .then(res => {
                    console.log(res)
                    this.setState(_ => {
                        return {
                            data: res.data,
                            isLoading: false
                        }
                    }, _ => {
                        console.log('data', this.state)
                    })
                })
    
                .catch(error => {
                    console.log(error)
                    this.setState(_ => {
                        return {
                            error,
                            isLoading: false
                        }
                    })
                })
            
            })

        }
    }

    render() {
        return (
           <div>
               <Instructions />
                <div className="slide_container">
                    <div className="input_comp">
                        <div className="line"></div>
                        <div className="head">
                            <h3 align="center">
                                Choose the loan amount you want and the duration of holding                       
                            </h3>
                        </div>
                        <div className="input-div">
                            <label htmlFor="amount"> Amount </label>
                            <input
                            onChange={this.handleChange}
                                type="range" 
                                min="500" 
                                max="5000" 
                                className="amount slider"
                                id="amount" />
                            <div>
                                <span> 500$ </span>
                                <span className="val"> {this.state.amount}$ </span>
                                <span> 5000$ </span>
                            </div>
                        </div>
                        {/* <div>
                            <label> Enter value manually </label>
                            <input type="number" />
                        </div> */}
                        <div className="input-div">
                            <label htmlFor="month"> Month </label>
                            <input
                                onChange={this.handleChange}
                                type="range" 
                                min="6" 
                                max="24" 
                                className="month slider"
                                id="month" />
                            <div>
                                <span> 6 Months </span>
                                <span className="val"> {this.state.month} Months </span> 
                                <span> 24 Months </span>
                            </div>

                                <span className="waiting">
                                    { this.state.isLoading
                                        ? 'Calculating, Hang on a second...'
                                        : null }    
                                </span>
                                
                        </div>
                    </div>
                </div>
                <div className='data'>
                    { this.state.data
                    ? <Data values={this.state} />
                    : null }
                </div>
                <Footer />
           </div>
        )
    }
}

export default Dashboard