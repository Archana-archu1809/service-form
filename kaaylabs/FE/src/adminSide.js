import { Card, Row,Col,Button } from "antd";
import  Axios  from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"


function AdminSide(){
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        Axios.get("http://localhost:8000/data",).then((response)=>{
            setData(response.data);
        })
    },[])
    const logout=()=>{
        navigate("/")

    }

    return(
        <>
        <Row className="logout">
            <Col sm={24} md={{span:2, offset:22}}><Button type="primary" danger onClick={logout}>Logout</Button>
            
            </Col>
        </Row>
        
          
        <Row className="row">
           
{data.map((data)=><Card key={data.id}>
   
    <Col sm={24} md={12}><p>{data.email}</p></Col></Card>)}
   
        </Row>
        </>
      

    )
}
export default AdminSide