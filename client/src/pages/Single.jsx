import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className='single'>
        <div className="content">
            <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
        <div className="user">
            <img src={Logo} alt="" />
            <div className="info">
                <span>John</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
                </Link>
                <img src={Delete} alt="" />
            </div>
        </div>
        <h1>WphdIOPWHOUIDHSdddwacdawdcawdawdcacw</h1>
        <p>wodhwaiuodhiauwdhwad
            <br />
            idowhaiushiodhwoihdaidasdw
            <br />
            wiahuduioashiudhiuwpadhuaw
            <br />
            ;oihawioudhasuidhpwaddasda
            <br />
            oiawhdoihaoisdwasdwdadwadw
        </p>
        </div>
        <Menu/>
    </div>
  )
}

export default Single