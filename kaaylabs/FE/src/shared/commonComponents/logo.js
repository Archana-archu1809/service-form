import { Image} from "antd";
import { Link } from "react-router-dom";



function Logo() {
  return (
    <div
      style={{
        display: "flex",
       justifyContent:"space-between",
       
        height: "60px",
        border: "1px solid white",
        padding:"20px"
      }}
    >
      <Image
        width={100}
        height={40}
       src="https://www.thehansindia.com/content/servlet/RDESController?command=rdm.Picture&sessionId=RDWEB1AIKXTDV89KYQWWHPZVMVAGIZLKGW0FO&app=rdes&partner=hansindia&type=7&uid=21128i9RcmDvHhHLlDf4jMGf1kNpKCJuv7z5o0440943"
       preview={false}
       style={{marginLeft:"90px"}}
     
      />
      <h4 style={{color:"gray",marginRight:"90px"}}>Already Registered? <Link to="/">Login </Link>here </h4>
    </div>
  );
}
export default Logo;
