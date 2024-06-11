import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/F-F-transfer.css'

const FFtransfer = () => {
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
              <Link to='/transfer' style={{color:'#000'}}>Transfers</Link>
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

          <div className='section-body-ff-transfer'>
            <div className='new-savings-ff-transfer'>
                <h2 style={{fontSize:'25px', marginLeft:'23px', marginBottom: '40px'}}>F-F Transfer</h2>
            </div>

            <div className='new-border-ff-transfer'>
              <div className='new-ff-transfer'>
                <div className='p-input'>
                  <p>Recepient's email*</p>
                  <input/>
                </div>
                <div className='p-input'>
                  <p>Account to transfer*</p>
                  <input/>
                </div>
                <div className='p-input'>
                  <p>Narration</p>
                  <input/>
                </div>
              </div>

              <div className='btn-transfer'>
                <Link to='/transfer'>Back</Link>
                <Link to='/transfer'>Next</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FFtransfer