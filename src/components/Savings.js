import React from 'react'
import '../styles/Savings.css'
import { Link } from 'react-router-dom'

const Savings = () => {
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
                    <p>Wallets</p>
                </div>
                <div className='leftnav-content' style={{backgroundColor: '#FFFFFF', borderRadius:'50px 0px 0px 50px', width: '368px', height: '55px', marginLeft:'76px',color: '#000000', marginRight:''}}>
                    <img src='/images/fluent_savings-20-filled.png' style={{paddingLeft:'15px'}}/>
                    <p>Savings</p>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/uil_arrow-growth.png'/>
                    <p>Investment</p>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/vaadin_money-exchange.png'/>
                    <p>Transfers</p>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/uil_money-withdrawal.png'/>
                    <p>Withdrawal</p>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/fa-solid_people-arrows.png'/>
                    <p>Referrals</p>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/bi_phone-fill.png'/>
                    <p>Mobile top-up</p>
                </div>
                <div className='leftnav-content'>
                    <img src='/images/si-glyph_customer-support.png'/>
                    <p>Customer support</p>
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

                <div className='section-body'>
                    <div className='section-nav'>
                        <p>Savings</p>
                        <Link to="/savingsnew">Create new savings</Link>    
                    </div>
                    <div className='section-border'>
                        <div className='section-border-nav'>
                            <div className='flexible'>
                                <a>Flexible</a>
                                <img src='/images/Line 12.png'/>
                            </div>
                            <a style={{marginBottom: '10px'}}>Fixed</a>
                        </div>
                        <div className='section-border-body'>
                            <div className='border-flex'>
                                <div className='image-text'>
                                    <img src='/images/young-man-head-avatar-cartoon-face-character-vector-21757743 1.png'/>
                                    <p>my goal</p>
                                </div>
                                <p>35.3%</p>
                            </div>
                            <div className='border-flex'>
                                <div className='image-text'>
                                    <img src='/images/young-man-head-avatar-cartoon-face-character-vector-21757743 1.png'/>
                                    <p>my goal</p>
                                </div>
                                <p>35.3%</p>
                            </div>
                            <div className='border-flex'>
                                <div className='image-text'>
                                    <img src='/images/young-man-head-avatar-cartoon-face-character-vector-21757743 1.png'/>
                                    <p>my goal</p>
                                </div>
                                <p>35.3%</p>
                            </div>
                            <div className='border-flex'>
                                <div className='image-text'>
                                    <img src='/images/young-man-head-avatar-cartoon-face-character-vector-21757743 1.png'/>
                                    <p>my goal</p>
                                </div>
                                <p>35.3%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Savings