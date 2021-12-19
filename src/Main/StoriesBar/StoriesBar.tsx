import { Card, ListGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export const StoriesBar = () => (
    <ListGroup horizontal={true}>
        <ListGroup.Item>
            <Image
                className="w-96"
                src="https://picsum.photos/id/237/96/96"
                roundedCircle={true}
                thumbnail={true}
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Image
                className="w-96"
                src="https://picsum.photos/id/1003/96/96"
                roundedCircle={true}
                thumbnail={true}
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Image
                className="w-96"
                src="https://picsum.photos/id/1005/96/96"
                roundedCircle={true}
                thumbnail={true}
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Image
                className="w-96"
                src="https://picsum.photos/id/101/96/96"
                roundedCircle={true}
                thumbnail={true}
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Image
                className="w-96"
                src="https://picsum.photos/id/1013/96/96"
                roundedCircle={true}
                thumbnail={true}
            />
        </ListGroup.Item>
        <ListGroup.Item>
            <Image
                className="w-96"
                src="https://picsum.photos/id/1015/96/96"
                roundedCircle={true}
                thumbnail={true}
            />
        </ListGroup.Item>
    </ListGroup>
);
