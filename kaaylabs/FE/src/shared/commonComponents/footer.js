import { Divider } from "antd"
import { CopyrightOutlined } from "@ant-design/icons"
function Footer(){
    return(
        <>
           <div style={{display:"flex",justifyContent:"center", backgroundColor:"lightgray",padding:"10px"}}>
<h5>About us</h5><Divider type="vertical" style={{color:"black",height:"30px"}} />
<h5>Contact us</h5><Divider type="vertical" style={{color:"black",height:"30px"}} />
<h5>FAQs</h5><Divider type="vertical" style={{color:"black",height:"30px"}} />
<h5>Terms and conditions</h5><Divider type="vertical" style={{color:"black",height:"30px"}} />
<h5>Report a problem</h5><Divider type="vertical" style={{color:"black",height:"30px"}} />
<h5>Privacy problem</h5><Divider type="vertical" style={{color:"black",height:"30px"}} />

        
        </div>
        <div style={{display:"flex",justifyContent:"center", backgroundColor:"lightgray"}}>
            <h5> All rights reserved <CopyrightOutlined /> 2022 Info Edge India Ltd.</h5>

        </div>
        
        
        </>
     
    )
}
export default Footer