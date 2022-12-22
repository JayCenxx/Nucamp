import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";

const PartnersList=()=>{
const partners=selectAllPartners()
return(
    <Col className="mt-4">{partners.map(
        i=>(
        <div className='d-flex mb-5' key={i.id}>
            <Partner partner={i}/>
        </div>
        
        ))}
    </Col>
)

}
export default PartnersList