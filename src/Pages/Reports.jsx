import React from 'react'
import Navbar from '../components/Navbar'
import sidebar from '../components/sidebar'
import {Layout} from 'antd';
import img from "../assets/host-icon.jpg";


function Reports() {
    return(
        <>
        <Layout>
      <Sider className='sidebar'>
      <img src={img} alt="" />
        HostBeak
        </Sider>
     </Layout>

     <div>
            <Navbar></Navbar>
            <div>Reports</div>
        </div>
      </>

        
    )
}

export default Reports 