import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Aheader from "./Aheader";
import Footer from "./Footer";
import QueryTable from "./QueryTable";
import EnquiryTable from "./EnquiryTable";

function Dashboard(){
    const styles = `body {
        background-color: #170a83;
      }`
      const navigate = useNavigate();
      useEffect(() => {
        // Check the user's authentication status when the component mounts
        const authToken = localStorage.getItem('authToken');
    
        // If the user is not authenticated, redirect them to the login page
        if (!authToken) {
            navigate('/login');
        }
    }, [navigate]);
    return(
        
        <div>
            <style>{styles}</style>
            <Aheader />
            
            <QueryTable />
            <EnquiryTable />
            <Footer />
        </div>
    )
}

export default Dashboard