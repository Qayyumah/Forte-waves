import React from 'react'
import '../styles/Newinvestment.css'
import { Link } from 'react-router-dom'

const Newinvestment = () => {
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
                <div className='leftnav-content'>
                    <img src='/images/fluent_savings-20-filled.png' style={{backgroundColor:'rgba(0, 0, 0, 1)'}}/>
                    <Link to='/'>Savings</Link>
                </div>
                <div className='leftnav-content' style={{backgroundColor: '#FFFFFF', borderRadius:'50px 0px 0px 50px', width: '368px', height: '55px', marginLeft:'76px',color: '#000000', marginRight:''}}>
                    <img src='/images/uil_arrow-growth (2).png' style={{paddingLeft:'15px', backgroundColor:'', filter:'opacity(0.9) dropShadow(0 0 0 black)'}}/>
                    <Link to='/investment' style={{color:"#000"}}>Investment</Link>
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

                <div className='section-body-new'>
                    <div className='new-investment'>
                        <h2 style={{fontSize:'20px', marginLeft:'23px'}}>Create new investment</h2>
                        <div className='investment-row'>
                            <div className='investment-column'>
                                <p style={{backgroundColor: "rgba(3, 3, 3, 1)", color: '#FFFFFF'}}>1</p><img src='/images/Line 12.png' style={{marginLeft:'165px', marginTop:'-30px'}}/>
                                <span>Amount</span>
                            </div>
                            <div className='investment-column'>
                                <p style={{marginLeft:'-132px'}}>2</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                                <span style={{marginLeft:'-132px'}}>calculate</span>
                            </div>
                            <div className='investment-column'>
                                <p style={{marginTop:'30px'}}>3</p>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div className='new-border-investment'>
                        <div className='new-type-investment'>
                            <h3>How much would you like to invest</h3>
                        </div>
                        
                        <div className='inv-amount'>
                            <p>Amount to invest</p>
                            <div className='inv-amount-input'>
                                <input placeholder='Please enter an amount'/>
                            </div>
                        </div>

                        <div className='btn-investment'>
                            <Link to='/investment'>Back</Link>
                            <Link to='/return'>Calculate return</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newinvestment