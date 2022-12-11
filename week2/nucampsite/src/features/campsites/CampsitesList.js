// CampsitesList.js

import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";


const CampsitesList = ({ setCampsiteId }) => {
  const campsites = selectAllCampsites();

  return (
    <Row className="ms-auto">
      {campsites.map((campsitex) => {
        return (
          <Col md="5" className="m-4" key={campsitex.id} 
          onClick={()=>setCampsiteId(campsitex.id)}
          >
            <CampsiteCard campsite={campsitex} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
