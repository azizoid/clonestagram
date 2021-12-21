import React, { useEffect, useState, ReactNode } from 'react';
import { Carousel, ListGroup, Spinner } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export const StoriesBar = (): JSX.Element => {
    const [randomStories, setRandomStories] = useState<ReactNode[]>();

    useEffect(() => {
        const randomStoreisTemp = Array.from(
            { length: 12 },
            () => Math.floor(Math.random() * 12 * 18), // create some random numbers for images
        ).map((randomNumber, index) => (
            <ListGroup.Item key={index}>
                <Image
                    className="w-80"
                    src={`https://picsum.photos/id/${randomNumber}/80`}
                    roundedCircle={true}
                    thumbnail={true}
                />
            </ListGroup.Item>
        ));

        setRandomStories(randomStoreisTemp);
    }, []);

    if (!randomStories)
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );

    return (
        <Carousel>
            <Carousel.Item>
                <ListGroup horizontal={true}>
                    {randomStories.slice(0, 6)}
                </ListGroup>
            </Carousel.Item>
            <Carousel.Item>
                <ListGroup horizontal={true}>
                    {randomStories.slice(6, 12)}
                </ListGroup>
            </Carousel.Item>
        </Carousel>
    );
};
