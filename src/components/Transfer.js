import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Transfer.css'

const Transfer = () => {
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
                        <img src='/images/fluent_savings-20-filled.png'/>
                        <Link  to='/'>Savings</Link>
                    </div>
                    <div className='leftnav-content'>
                        <img src='/images/uil_arrow-growth.png'/>
                        <Link to='/investment'>Investment</Link>
                    </div>
                    <div className='leftnav-content' style={{backgroundColor: '#FFFFFF', borderRadius:'50px 0px 0px 50px', width: '368px', height: '55px', marginLeft:'76px',color: 'red', marginRight:''}}>
                        <img src='/images/vaadin_money-exchange.png' style={{paddingLeft:'15px', backgroundColor:'', filter:'opacity(0.9) dropShadow(0 0 0 black)'}}/>
                        <Link to='/transfer'  style={{color:'#000'}}>Transfers</Link>
                    </div>
                    <div className='leftnav-content'>
                        <img src='/images/uil_money-withdrawal.png'/>
                        <Link to='/'>Withdrawal</Link>
                    </div>
                    <div className='leftnav-content'>
                        <img src='/images/fa-solid_people-arrows.png'/>
                        <Link to='/'>Referrals</Link>
                    </div>
                    <div className='leftnav-content'>
                        <img src='/images/bi_phone-fill.png'/>
                        <Link to='/'>Mobile top-up</Link>
                    </div>
                    <div className='leftnav-content'>
                        <img src='/images/si-glyph_customer-support.png'/>
                        <Link to='/'>Customer support</Link>
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

                <div className='section-body-transfer'>
                    <div className='new-savings-transfer'>
                        <h2 style={{fontSize:'25px', marginLeft:'23px', marginBottom: '40px'}}>Transfers</h2>
                    </div>

                    <div className='new-border-transfer'>
                        <div className='ff-transfer-grid'>
                            <div className='f-f-transfer'>
                                <img src='/images/Ellipse 42.png'/>
                                <h2>F-F Transfer</h2>
                                <p>Transfer money from your Fortewaves account to another fortewaves account</p>
                                <Link to='/FFtransfer'>Proceed</Link>
                            </div>
                            <div className='f-f-transfer'>
                                <img src='/images/Ellipse 42.png'/>
                                <h2>F-Other Transfer</h2>
                                <p>Transfer money from your Fortewaves account to a local bank account</p>
                                <Link to='/fothertransfer'>Proceed</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
</div>
  )
}

export default Transfer