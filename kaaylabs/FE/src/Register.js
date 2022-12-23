import {Form,Input, Button,Row,Col,InputNumber, Card,Modal,notification, Layout} from 'antd'
import Axios from "axios";
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Collapse } from 'antd';
const { Panel } = Collapse;
const CreateForm=({open, onCreate, onCancel})=>{
  const [form] = Form.useForm();
  return(
    <Modal
      open={open}
      title="Personal Dettails"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    ><Form form={form}>
       <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
           
            name="name"
          >
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your email",
                type: "email",
              },
            ]}
            
            name="email"
          >
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
         
            name="password"
          >
            <Input.Password placeholder='Password'/>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
         
            name="address"
          >
            <Input.TextArea placeholder='Address'/>
          </Form.Item>


      
      </Form></Modal> 

  )
}
const CreateForm1=({open, onCreate, onCancel})=>{
  const [form] = Form.useForm();
  return(
    <Modal
    open={open}
    title="Educational Details"
    okText="Create"
    cancelText="Cancel"
    onCancel={onCancel}
    onOk={() => {
      form
        .validateFields()
        .then((values) => {
          form.resetFields();
          onCreate(values);
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
    }}
  ><Form form={form}>
      <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your SSLC Schoolname!",
              },
            ]}
         
            name="sslcSchoolName"
          >
            <Input.TextArea placeholder='SSLC Schoolname'/>
          </Form.Item>
          <Form.Item
       name="sslcPercentage"
        rules={[
          {
            type: 'number',
            min: 50,
            max: 99,
            required: true,
            message: "Please input your SSLC percentage!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your HSC Schoolname!",
              },
            ]}
         
            name="hscSchoolName"
          >
            <Input.TextArea placeholder='HSC Schoolname'/>
          </Form.Item>
          <Form.Item
       name="hscPercentage"
        rules={[
          {
            type: 'number',
            min: 50,
            max: 99,
            required: true,
            message: "Please input your HSC percentage!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your UG name!",
              },
            ]}
         
            name="ugName"
          >
            <Input.TextArea placeholder='UG name'/>
          </Form.Item>
          <Form.Item
       name="ugPercentage"
        rules={[
          {
            type: 'number',
            min: 50,
            max: 99,
            required: true,
            message: "Please input your UG percentage!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your PG name!",
              },
            ]}
         
            name="pgName"
          >
            <Input.TextArea placeholder='PG name'/>
          </Form.Item>
          
          <Form.Item
       name="pgPercentage"
        rules={[
          {
            type: 'number',
            required: true,
            message: "Please input your PG percentage!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
    </Form></Modal>

  )
}
const CreateForm2=({open, onCreate, onCancel})=>{
  const [form] = Form.useForm();
  return(
<Modal open={open}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}>

        <Form form={form}>
        <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your Experience!",
              },
            ]}
         
            name="experience"
          >
            <Input.TextArea placeholder='Experience'/>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your Skills!",
              },
            ]}
         
            name="skills"
          >
            <Input.TextArea placeholder='Skills'/>
          </Form.Item>

        </Form>

</Modal>
  )
}
function Register(){

const [registerStatus,setRegisterStatus]=useState("");
const navigate=useNavigate();

const [open, setOpen] = useState(false);
const [open1, setOpen1] = useState(false);
const [open2, setOpen2] = useState(false);
const [result,setResult]=useState({})
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
    result.name=values.name;
    result.password=values.password;
    result.address=values.address;
    result.email=values.email;
    setResult(result);
    console.log(result.name)
  };
  const onCreate1 = (values) => {
    console.log('Received values of form: ', values);
    setOpen1(false);
  setResult((prevState)=>({
    ...prevState,
    ...values
  }))
  console.log(result)
  };
  const onCreate2 = (values) => {
    console.log('Received values of form: ', values);
    setOpen2(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }))
    console.log(result)
  };

  useEffect( () => {
    let result1= Object.keys (result).length;
    console.log(result1)

    if(result1 === 14){
      Axios.post('http://localhost:8000/register',{
        name:result.name,
        password: result.password,
        address:result.address,
        email:result.email,
        sslc:result.sslcSchoolName,
        sslcpercentage:result.sslcPercentage,
        hsc:result.hscSchoolName,
        hscpercentage:result.hscPercentage,
        ug:result.ugName,
        ugpercentage:result.ugPercentage,
        pg:result.pgName,
        pgpercentage:result.pgPercentage,
        skills:result.skills,
        experience:result.experience,


      }
      
      ).then((response)=>{
        console.log(response)
        if(response.data.message){
          setRegisterStatus(response.data.message)
                }
      })
     
    }
  }, [result])
  if(registerStatus === "thanks for registering"){
        navigate("/");
        notification.open({
          message: 'user is created welcome back',
        });
      }

    return(
     
          <Row className='row'>
      <Col md={21}>
        
         
          <h1 className='h1'>Register Form</h1>
          
        
      
       
      <Card>
        <Row>
          <Col md={12} sm={24}>
          <h1>Personal Details</h1>
          </Col>
          <Col md={{offset:8,span:3}} sm={24}>

       
          <Button
        type="link"
        onClick={() => {
          setOpen(true);
        }}
      >
      Add personal details
      </Button>
      <CreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
          </Col>
        </Row>
       
       

      </Card>
      <Card>
      <Row>
          <Col md={12} sm={24}>
          <h1>Educational Details</h1>
          </Col>
          <Col md={{offset:8,span:3}} sm={24}>
       <Button
        type="link"
        onClick={() => {
          setOpen1(true);
        }}
      >
       Add educational Details
      </Button>
      <CreateForm1
        open={open1}
        onCreate={onCreate1}
        onCancel={() => {
          setOpen1(false);
        }}
      />
      </Col>
      </Row>
      </Card>
      <Card>
      <Row>
          <Col md={12} sm={24}>
          <h1>Skills</h1>
          </Col>
          <Col md={{offset:8,span:3}} sm={24}>
          <Button
        type="link"
        onClick={() => {
          setOpen2(true);
        }}
      >
       Add skills
      </Button>
      <CreateForm2
        open={open2}
        onCreate={onCreate2}
        onCancel={() => {
          setOpen2(false);
        }}
      />
          </Col>
        </Row>
      </Card>
      
      </Col>
     </Row>
    )
}
export default Register


