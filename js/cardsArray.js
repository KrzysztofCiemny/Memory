const imagesArray = [
    {
        name: 'image1',
        img: 'img/image1.jpeg'
    },
    {
        name: 'image2',
        img: 'img/image2.jpeg'
    },
    {
        name: 'image3',
        img: 'img/image3.jpeg'
    },
    {
        name: 'image4',
        img: 'img/image4.jpeg'
    }
];
const copyOfImagesArray = [...imagesArray];
const cardsImagesArray = [].concat(imagesArray, copyOfImagesArray);
export default cardsImagesArray;
