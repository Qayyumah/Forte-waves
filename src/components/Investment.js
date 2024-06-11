import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Investment.css'

const Investment = () => {
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
                    <Link to='/transfer'>Transfers</Link>
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

                <div className='investment-body'>
                    <div className='investment-nav'>
                        <p>My investments</p>
                        <Link to="/newinvestment">Create new investment</Link>    
                    </div>
                    <div className='investment-border'>
                        <div className='investment-content'>
                            <div className='investment-content-1'>
                                <img src='/images/Ellipse 44.png'/><img src='/images/uil_arrow-growth (3).png' style={{marginLeft:'-22px'}}/>
                                <div className='investment-text'>
                                    <p>Real estate</p>
                                    <span>sat 25 jan 2022</span>
                                </div>
                                <div className='investment-date'>
                                    <p>1 year</p>
                                    <p>25%</p>
                                </div>
                            </div>
                            <div className='investment-content-2'>
                                <p style={{width:'49px', backgroundColor:'#F0594F', borderRadius:'3px', padding:'3px 8px', marginRight:'60px', color:'#fff', textAlign:'center'}}>Unique</p>
                                <div className='investment-text-2'>
                                    <p>NGN20,000</p>
                                    <span style={{color:'#464646'}}>One year investment</span>
                                </div>
                            </div>
                        </div>
                        <div className='img' style={{marginLeft:'0.5px', marginTop:'-11px'}}>
                            <img src='/images/Line 19.png'/>
                        </div>

                        <div className='investment-content'>
                            <div className='investment-content-1'>
                                <img src='/images/Ellipse 44.png'/><img src='/images/uil_arrow-growth (3).png' style={{marginLeft:'-22px'}}/>
                                <div className='investment-text'>
                                    <p>Real estate</p>
                                    <span>sat 25 jan 2022</span>
                                </div>
                                <div className='investment-date'>
                                    <p>1 year</p>
                                    <p>25%</p>
                                </div>
                            </div>
                            <div className='investment-content-2'>
                                <p style={{width:'49px', backgroundColor:'#F0594F', borderRadius:'3px', padding:'3px 8px', marginRight:'60px', color:'#fff', textAlign:'center'}}>Unique</p>
                                <div className='investment-text-2'>
                                    <p>NGN20,000</p>
                                    <span style={{color:'#464646'}}>One year investment</span>
                                </div>
                            </div>
                        </div>
                        <div className='img' style={{marginLeft:'0.5px', marginTop:'-11px'}}>
                            <img src='/images/Line 19.png'/>
                        </div>

                        <div className='investment-content'>
                            <div className='investment-content-1'>
                                <img src='/images/Ellipse 44.png'/><img src='/images/uil_arrow-growth (3).png' style={{marginLeft:'-22px'}}/>
                                <div className='investment-text'>
                                    <p>Real estate</p>
                                    <span>sat 25 jan 2022</span>
                                </div>
                                <div className='investment-date'>
                                    <p>1 year</p>
                                    <p>25%</p>
                                </div>
                            </div>
                            <div className='investment-content-2'>
                                <p style={{width:'49px', backgroundColor:'#F0594F', borderRadius:'3px', padding:'3px 8px', marginRight:'60px', color:'#fff', textAlign:'center'}}>Unique</p>
                                <div className='investment-text-2'>
                                    <p>NGN20,000</p>
                                    <span style={{color:'#464646'}}>One year investment</span>
                                </div>
                            </div>
                        </div>
                        <div className='img' style={{marginLeft:'0.5px', marginTop:'-11px'}}>
                            <img src='/images/Line 19.png'/>
                        </div>

                        <div className='investment-content'>
                            <div className='investment-content-1'>
                                <img src='/images/Ellipse 44.png'/><img src='/images/uil_arrow-growth (3).png' style={{marginLeft:'-22px'}}/>
                                <div className='investment-text'>
                                    <p>Real estate</p>
                                    <span>sat 25 jan 2022</span>
                                </div>
                                <div className='investment-date'>
                                    <p>1 year</p>
                                    <p>25%</p>
                                </div>
                            </div>
                            <div className='investment-content-2'>
                                <p style={{width:'49px', backgroundColor:'#F0594F', borderRadius:'3px', padding:'3px 8px', marginRight:'60px', color:'#fff', textAlign:'center'}}>Unique</p>
                                <div className='investment-text-2'>
                                    <p>NGN20,000</p>
                                    <span style={{color:'#464646'}}>One year investment</span>
                                </div>
                            </div>
                        </div>
                        <div className='img' style={{marginLeft:'0.5px', marginTop:'-11px'}}>
                            <img src='/images/Line 19.png'/>
                        </div>

                        <div className='investment-content'>
                            <div className='investment-content-1'>
                                <img src='/images/Ellipse 44.png'/><img src='/images/uil_arrow-growth (3).png' style={{marginLeft:'-22px'}}/>
                                <div className='investment-text'>
                                    <p>Real estate</p>
                                    <span>sat 25 jan 2022</span>
                                </div>
                                <div className='investment-date'>
                                    <p>1 year</p>
                                    <p>25%</p>
                                </div>
                            </div>
                            <div className='investment-content-2'>
                                <p style={{width:'49px', backgroundColor:'#F0594F', borderRadius:'3px', padding:'3px 8px', marginRight:'60px', color:'#fff', textAlign:'center'}}>Unique</p>
                                <div className='investment-text-2'>
                                    <p>NGN20,000</p>
                                    <span style={{color:'#464646'}}>One year investment</span>
                                </div>
                            </div>
                        </div>
                        <div className='img' style={{marginLeft:'0.5px', marginTop:'-11px'}}>
                            <img src='/images/Line 19.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investment