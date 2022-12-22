// DisplayCard.js
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap"

const DisplayCard=({item})=>{
const {image,name,description}=item;

return (
    <Card>
        <CardImg src={image} alt={name}/>
        <CardBody>
            <CardTitle>{image}</CardTitle>
            <CardText>{description}</CardText>
        </CardBody>
    </Card>
)
}

export default DisplayCard