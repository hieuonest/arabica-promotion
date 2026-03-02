import React from 'react';
import AppHeader from "../../components/AppHeader";
import logo from "../../assets/images/logo-white.png";
import iconOutlined from "../../assets/images/icon-menu-outlined.png";

export default function Login() {
  return (
    <div className='bg-wepsite'>
      <AppHeader logo = {logo} iconOutlined = {iconOutlined}/>
    </div>
  )
}
