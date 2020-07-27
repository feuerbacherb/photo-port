import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({category}) => {
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: "Eu nostrud commodo quis voluptate ut culpa nulla laborum occaecat."
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Cillum eiusmod incididunt occaecat irure et nostrud adipisicing Lorem.'
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Velit excepteur aliquip eu reprehenderit fugiat duis sit quis ipsum.'
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Sit proident enim fugiat qui voluptate.'
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Enim incididunt eu quis do do occaecat do ipsum ipsum consequat commodo.'
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Magna mollit adipisicing aliqua officia dolor veniam.'
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Enim aliqua fugiat non laborum minim commodo voluptate et.'
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Officia aute Lorem mollit aute ad irure amet est laborum sit dolore elit veniam.'
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
        ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image, i) => {
      // current photo
      setCurrentPhoto({...image, index: i});
      console.log(...image.description + ", " + i);
      setIsModalOpen(true);
    }

    return (
        <div>
            {isModalOpen && <Modal currentPhoto={currentPhoto} />}
            <div className="flex-row">
                {
                    currentPhotos.map((image, i) => (
                        <img
                            src={require(`../../assets/small/${category}/${i}.jpg`)}
                            alt={image.name}
                            className="img-thumbnail mx-1"
                            onClick={() => toggleModal(image, i)}
                            key={image.name}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default PhotoList;