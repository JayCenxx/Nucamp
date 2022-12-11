// DisplayList.js
import { Col, Row } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import DisplayCard from "./DisplayCard";

const DisplayList=()=>{
const items=[selectFeaturedCampsite(), selectFeaturedPromotion()]

return(
    <Row>
        {/* the 2nd param idx is the key */}
        {items.map((item,idx)=>     
            <Col md className='m-1' key={idx}>
                <DisplayCard item={item}/>
            </Col>
        )}
    </Row>
)
}

export default DisplayList