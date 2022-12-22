
// HomePage.js
import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import DisplayList from '../features/display/DisplayList';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='home'/>
            <DisplayList />
        </Container>
    );
};

export default HomePage;