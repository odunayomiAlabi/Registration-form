import React from 'react'
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { LuFileBarChart } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbReport } from "react-icons/tb";


export const Sidebar =[
    {
        title:'Welcome',
        path:'/',
        key:1,
        icon: <LiaSpaceShuttleSolid /> 
    },
    {
        title:'Dashboard',
        path:'/',
        key:2,
        icon: <LuLayoutDashboard />
    },
    {
        title:'Sales',
        path:'/',
        key:3,
        icon: <TfiWallet />
    },
    {
        title:'Purchases',
        path:'/',
        key:4,
        icon: <FiShoppingCart />
    },
    {
        title:'Accounting',
        path:'/',
        key:5,
        icon: <LuFileBarChart /> 
    },
    {
        title:'Banking',
        path:'/',
        key:6,
        icon: <BsBank />
    },
    {
        title:'Payroll',
        path:'/',
        key:7,
        icon: <LiaFileInvoiceSolid />
    },
    {
        title:'Reports',
        path:'/',
        key:8,
        icon: <TbReport /> 
    },
]
