// CampsitesDirtoryPage.js
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById} from "../features/campsites/campsitesSlice";

const CampsitesDirectoryPage = () => {
  
    //campsiteId is use to track element by ID,
    //(0) means it is the id of first element/object of the array
    const[campsiteId,setCampsiteId]=useState(0)
    
    //selectCampsiteById(campsiteId) ll fetch you the updated object
    const selectedCampsite=selectCampsiteById(campsiteId)
    return (
        <Container>
         
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId}/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;
