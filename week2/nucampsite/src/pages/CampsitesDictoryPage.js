// CampsitesDictoryPage.js
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import CampsitesList from "../features/campsites/CampsitesList";

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      {/* updated */}
      <SubHeader current='Directory'/>
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
