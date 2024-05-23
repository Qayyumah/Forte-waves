import React from 'react'
import '../styles/SavingsPlan.css'
import { Link } from 'react-router-dom'

const SavingsPlan = () => {
  return (
    <div className='container'>
        <div className='body'>
            <div className='left-nav'>
                <div className='top'>
                    <h1>Fortewaves</h1>
                    <img src='/images/healthicons_ui-user-profile.png'/>
                </div>
                <div className='arrow'>
                    <img src='/images/akar-icons_arrow-left.png'/>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/fontisto_wallet.png'/>
                    <Link>Wallets</Link>
                </div>
                <div className='leftnav-content' style={{backgroundColor: '#FFFFFF', borderRadius:'50px 0px 0px 50px', width: '368px', height: '55px', marginLeft:'76px',color: '#000000', marginRight:''}}>
                    <img src='/images/fluent_savings-20-filled.png' style={{paddingLeft:'15px'}}/>
                    <Link to='/' style={{color:'#000'}}>Savings</Link>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/uil_arrow-growth.png'/>
                    <Link to='/investment'>Investment</Link>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/vaadin_money-exchange.png'/>
                    <Link>Transfers</Link>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/uil_money-withdrawal.png'/>
                    <Link>Withdrawal</Link>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/fa-solid_people-arrows.png'/>
                    <Link>Referrals</Link>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/bi_phone-fill.png'/>
                    <Link>Mobile top-up</Link>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/si-glyph_customer-support.png'/>
                    <Link>Customer support</Link>
                </div>
            </div>

            <div className='section-body-content'>
                <nav>
                    <div className='menu'>
                        <a>Overview</a>
                        <a>Policy</a>
                        <a>Report</a>
                    </div>
                    <div className='search-menu'>
                        <img src='/images/ant-design_search-outlined.png'/>
                        <p>Search</p>
                    </div>
                    <div className='btns'>
                        <img src='/images/Group (1).png'/>
                        <div className='history'>
                            <img src='/images/ic_baseline-history.png'/>
                            <p>History</p>
                        </div>
                        <img src='/images/Group (2).png'/>
                    </div>
                </nav>
                <div className='img'>
                    <img src='/images/Line 1.png'/>
                </div>

                <div className='section-body-plan'>
                    <div className='new-savings-plan'>
                        <h2 style={{fontSize:'20px', marginLeft:'23px'}}>Create a new savings plan</h2>
                        <div className='plan-row-plan'>
                            <div className='plan-column-plan'>
                                <p>1</p><img src='/images/Line 12.png' style={{marginLeft:'165px', marginTop:'-30px'}}/>
                                <span>Type</span>
                            </div>
                            <div className='plan-column-plan'>
                                <p style={{marginLeft:'-132px'}}>2</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                                <span style={{marginLeft:'-132px'}}>Title</span>
                            </div>
                        <div className='plan-column-plan'>
                            <p style={{marginLeft:'-132px'}}>3</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                            <span style={{marginLeft:'-132px'}}>Amount</span>
                        </div>
                        <div className='plan-column-plan'>
                            <p style={{backgroundColor: "rgba(3, 3, 3, 1)", color: '#FFFFFF', marginLeft:"-132px"}}>4</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                            <span style={{marginLeft:'-132px'}}>How to save</span>
                        </div>
                        <div className='plan-column-plan'>
                            <p style={{marginLeft:'-132px'}}>5</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                            <span style={{marginLeft:'-132px'}}>Add image</span>
                        </div>
                        <div className='plan-column-plan'>
                            <p style={{marginLeft:"-24px", marginBottom:'-20px'}}>6</p>
                            <span style={{marginLeft:'-49px', marginTop:'25px'}}>Confirm Details</span>
                        </div>
                    </div>
                </div>

            <div className='new-border-plan'>
                <div className='new-type-plan'>
                    <h3>How would you like to save</h3>
                </div>
                
                <div className='account-denied'>
                    <p>Your account will be deducted:</p>
                    <div className='dwm'>
                        <div className='dwm-flex'>
                            <input type='radio' style={{color:'rgba(0, 0, 0, 1)'}}/>
                            <span>Daily</span>
                        </div>
                        <div className='dwm-flex'>
                            <input type='radio'/>
                            <span>Weekly</span>
                        </div>
                        <div className='dwm-flex'>
                            <input type='radio'/>
                            <span>Monthly</span>
                        </div>
                    </div>
                    <div className='saving-duration'>
                        <p>Savings duration:</p>
                        <div className='duration'>
                            <input placeholder='Enter start date'/>
                            <img src='/images/Rectangle 73.png'/>
                        </div>
                        <div className='duration'>
                            <input placeholder='Enter end date'/>
                            <img src='/images/Rectangle 73.png'/>
                        </div>
                    </div>
                </div>

                <div className='btn-plan'>
                    <Link to='/savingsprice'>Back</Link>
                    <Link to='/savingsimage'>Next</Link>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default SavingsPlan