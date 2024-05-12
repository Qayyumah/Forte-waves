import React from 'react'
import '../styles/SavingsImage.css'
import { Link } from 'react-router-dom'

const SavingsImage = () => {
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

                <div className='section-body-add-img'>
                    <div className='new-savings-add-img'>
                        <h2 style={{fontSize:'20px', marginLeft:'23px'}}>Create a new savings plan</h2>
                        <div className='plan-row-add-img'>
                            <div className='plan-column-add-img'>
                                <p>1</p><img src='/images/Line 12.png' style={{marginLeft:'165px', marginTop:'-30px'}}/>
                                <span>Type</span>
                            </div>
                            <div className='plan-column-add-img'>
                                <p style={{marginLeft:'-132px'}}>2</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                                <span style={{marginLeft:'-132px'}}>Title</span>
                            </div>
                        <div className='plan-column-add-img'>
                            <p style={{marginLeft:'-132px'}}>3</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                            <span style={{marginLeft:'-132px'}}>Amount</span>
                        </div>
                        <div className='plan-column-add-img'>
                            <p style={{marginLeft:'-132px'}}>4</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                            <span style={{marginLeft:'-132px'}}>How to save</span>
                        </div>
                        <div className='plan-column-add-img'>
                            <p style={{backgroundColor: "rgba(3, 3, 3, 1)", color: '#FFFFFF', marginLeft:'-132px'}}>5</p><img src='/images/Line 12.png' style={{marginLeft:'30px', marginTop:'-30px'}}/>
                            <span style={{marginLeft:'-132px'}}>Add image</span>
                        </div>
                        <div className='plan-column-add-img'>
                            <p style={{marginLeft:"-24px", marginBottom:'-20px'}}>6</p>
                            <span style={{marginLeft:'-49px', marginTop:'25px'}}>Confirm Details</span>
                        </div>
                    </div>
                </div>

                <div className='new-border-add-img'>
                    <div className='new-type-add-img'>
                        <h3>Add Image</h3>
                    </div>

                    <div className='add-img-box'>
                        <p>Identify your savings with a unique image</p>
                        <div className='image-border'>
                            <p>Drag files to upload or select upload</p>
                            <button>Upload</button>
                        </div>
                    </div>
                    
                    <div className='btn-add-img'>
                        <Link to='/savingsplan'>Back</Link>
                        <Link to='/savingsdone'>Next</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SavingsImage