import React from 'react'
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { LuFileBarChart } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbReport } from "react-icons/tb";


export const sidebar =[
    {
        title:'Welcome',
        path:'/',
        icon: <LiaSpaceShuttleSolid /> 
    },
    {
        title:'Dashboard',
        path:'/',
        icon: <LuLayoutDashboard />
    },
    {
        title:'Sales',
        path:'/',
        icon: <TfiWallet />
    },
    {
        title:'Purchases',
        path:'/',
        icon: <FiShoppingCart />
    },
    {
        title:'Accounting',
        path:'/',
        icon: <LuFileBarChart /> 
    },
    {
        title:'Banking',
        path:'/',
        icon: <BsBank />
    },
    {
        title:'Payroll',
        path:'/',
        icon: <LiaFileInvoiceSolid />
    },
    {
        title:'Reports',
        path:'/',
        icon: <TbReport /> 
    },
]



// import React from 'react'
// import {Layout} from 'antd';
// import bgimg from "../assets/image-2.jpg";


// const {Header, Sider} = Layout;
// function sidebar() {
//     return(
//       <>
//         <Layout>
//       <Sider className='sidebar'>
//       <img src={bgimg} alt="" />
//         HostBeak</Sider>
//      </Layout>
//       </>
//     )
// }


// export default sidebar