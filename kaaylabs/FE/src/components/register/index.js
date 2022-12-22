import { Card, Form, Input, Layout,Upload,Button,Checkbox,Radio,message, Col,Row,Divider, Image } from "antd";
import  Axios  from "axios";
import Logo from "../../shared/commonComponents/logo";
import { CheckOutlined } from "@ant-design/icons";
import Footer from "../../shared/commonComponents/footer";
import {useNavigate} from "react-router-dom";

const { Content } = Layout;
const { Meta } = Card;

function Index() {
  const prefixSelector = (
    <span>+91</span>
  );
  
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  const navigate=useNavigate();

  const onFinish=(values)=>{
    console.log(values);
    Axios.post('http://localhost:8000/register',{
      name:values.name,
      email:values.email,
      password:values.password,
      phonenumber:values.phone,
      workstatus:values.workStatus,
      resume:values.Resume,
      checkbox:values.checkbox,

    }).then((response)=>{
      console.log(response);
      if(response.data.message=== "thanks for registering"){
    navigate("/datas")
      }
    })
    

  }
  
  return (
    <div >
      <Logo />
      <Content>
        <div
          style={{

            display: "flex",
            justifyContent:"space-evenly",
           
            alignItems: "center",
            backgroundColor:"lightgray",
           paddingTop:"40px",
           
           paddingBottom:"40px",
     
          }}

        >
          <Row>
            {/* <Col sm={24}>
            <Image src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"preview={false} style={{borderRadius:"50px"}}/>
     
            
            </Col> */}
            
            <Col sm={24}>
            <Card style={{borderRadius:"10px",border:"1px dashed gray", width:"250px"}} >
          

          <h3> On registering, you can</h3> 
              
             <h4> <CheckOutlined style={{backgroundColor:"lightblue", borderRadius:"50px",color:"white"}}/>Build yourprofile and let recruiters you can</h4> 
               
           
             <h4> <CheckOutlined style={{backgroundColor:"lightblue", borderRadius:"50px",color:"white"}}/>Get job postings delivered right to your email</h4>
            <h4> <CheckOutlined style={{backgroundColor:"lightblue", borderRadius:"50px",color:"white"}} />Find a job and grow your career</h4> 
           </Card> 
            
            </Col>
          </Row>
              

             

           
         
          <div>
            <Card style={{borderRadius:"10px"}}>
              <h1><b>Find a job & grow your career</b></h1>
              <Form layout="vertical" onFinish={onFinish} style={{paddingLeft:"10px",paddingRight:"50px"}} >
                <Row><Col sm={17}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name",
                    },
                  ]}
                  label="Full Name"
                  name="name"
                >
                  <Input  
                    size="large"
                    
                    placeholder="What is your name?" />
                   
                </Form.Item> 
                </Col>
                <Col sm={1}>
                <Divider type="vertical" style={{color:"black",height:"90px"}} />
                </Col>
            

               
                <Col sm={17}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Email is required",
                      type: "email",
                    },
                  ]}
                  label="Email Id"
                  name="email"
                >
                  <Input size="large"   placeholder="Tell us your Email ID" />
                </Form.Item>
              
             
                
                </Col>
                
                <Col sm={1}>
                <Divider type="vertical" style={{color:"black",height:"90px"}} />
                
                </Col>
                {/* <Col sm={6}>
<h3>Continue with</h3>
</Col> */}
                </Row>
               
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Password is required",
                    },
                  ]}
                  label="Password"
                  name="password"
                >
                  <Input.Password size="large" placeholder="Create a password for your account"  style={{
                      width: "70%",
                    }}/>
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Mobile Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phonenumber",
                    },

                  ]}
                >   
                  <Input
                  size="large"
                  
               
                    addonBefore={prefixSelector}
                    style={{
                      width: "70%",
                    }}
                    placeholder="Mobile number"
                  
                  />
                </Form.Item>
                <Form.Item
                  name="workStatus"
                  label="Work Status"


                  rules={[
                    {
                      required: true,
                      message: "Please choose your workstatus",
                    },
                  ]}
                >
                <Radio.Group >
      <Radio.Button value="a">I am experienced I have work experience (excluding internships) </Radio.Button>
      <Radio.Button value="b">I am fresher I am a student/Haven't worked after graduation</Radio.Button>
    </Radio.Group>
    
                 
                </Form.Item>
      <Form.Item name="Resume"label="Resume">
      <Upload {...props}>
    <Button type="danger" style={{borderRadius:"50px"}}>Upload Resume</Button>
    DOC, DOCx, PDF, RTF | Max: 2 MB
          <h5>Recruiters give first preference to candidates who have a resume</h5>
  </Upload>
      </Form.Item>

    
      <Form.Item name="checkbox" valuePropName="checked">
      <Checkbox defaultChecked>Send me important updates on whatsApp</Checkbox>
      </Form.Item>
      
      <h5>By clicking Register, you agree to the Terms and Conditions & Privacy Policy of Naukri.com</h5>
      <Form.Item>
            <Button style={{width:"200px",borderRadius:"50px"}} type="primary" htmlType="submit" className="button">
            Register
            </Button>
          </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  );
}
export default Index;
