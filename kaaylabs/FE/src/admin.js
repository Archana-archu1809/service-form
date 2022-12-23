import  Axios  from "axios"
import {Form,Row,Col,Input,Button} from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Admin(){
  const [adminStatus,setAdminStatus]=useState("");
  const navigate=useNavigate();
  const onFinish =(values)=>{
Axios.post("http://localhost:8000/admin",{
  email:values.email,
  password:values.password
}).then((response)=>{
  setAdminStatus(response.data.message);
})
  }
  if(adminStatus === "welcome back"){
    navigate("/data")
  }
    return(
        <>
         <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Col>
        <h1>Login</h1>
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your email",
                type: "email",
              },
            ]}
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
             Login
            </Button>
          </Form.Item>
        </Form>
        <h1>{adminStatus}</h1>
        
     
      </Col>
    </Row>
        </>
    )
}
export default Admin;