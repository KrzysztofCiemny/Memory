const imagesArray = [
    {
        name: 'pig',
        img: 'img/pig.svg'
    },
    {
        name: 'penguin',
        img: 'img/penguin.svg'
    },
    {
        name: 'horse',
        img: 'img/horse.svg'
    },
    {
        name: 'seal',
        img: 'img/seal.svg'
    },
    {
        name: 'dog',
        img: 'img/dog.svg'
    },
    {
        name: 'chicken',
        img: 'img/chicken.svg'
    },
    {
        name: 'frog',
        img: 'img/frog.svg'
    },
    {
        name: 'bear',
        img: 'img/bear.svg'
    },
    {
        name: 'monkey',
        img: 'img/monkey.svg'
    }
];
const copyOfImagesArray = [...imagesArray];
const cardsImagesArray = [].concat(imagesArray, copyOfImagesArray);
export default cardsImagesArray;
