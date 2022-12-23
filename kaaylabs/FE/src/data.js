import { useState,useEffect } from "react";
import  Axios  from "axios"
import { Card, Col, Row,Button } from "antd";
import {useNavigate} from "react-router-dom"
function Data(){
    const [data,setData]=useState({});
    const navigate=useNavigate();
  
    useEffect(()=>{
        const id=localStorage.getItem('key')
        Axios.get(`http://localhost:8000/datas/${id}`,).then((response)=>{
            console.log(response.data.data)
            setData(response.data.data);
        })
        
    },[]);
    const logout=()=>{
        navigate("/")

    }

    return(
        <>
        <Row className="logout">
            <Col sm={24} md={{span:2, offset:22}}>
            <Button type="primary" danger onClick={logout}>Logout</Button>
            
            </Col>
        </Row>
        
        <Row className="row" >
           
           <Card className='card'>  <p>{data.name} </p>
           <p>{data.email}</p> 
           <p> {data.address}</p>
           <h2>Educational Qualifications</h2>
          
        <p>{data.sslc}</p>  <p>{data.sslcpercentage}</p> 
       
        <p>{data.hsc}</p>  <p>{data.hscpercentage}</p> 
       
        <p>{data.ug}</p>  <p>{data.ugpercentage}</p>
       
        <p>{data.pg}</p>  <p>{data.pgpercentage}</p>
        <h2>Experience</h2>
         <p>{data.experience}</p> 
         <h2>Skills</h2>
           <p>{data.skills}</p>     </Card>
       
       
             
            
       
           </Row>
   

      

      
        </>
        
    )
}
export default Data;