import berlin from '../assets/image/berlin.png';
import arch from '../assets/image/arch.png';
import hongkong from '../assets/image/hongkong.png';
import buddha from '../assets/image/buddha.png';
import sanfrancisco from '../assets/image/sanfrancisco.png';
import golden from '../assets/image/golden.png';
import europe from '../assets/image/europe.png';
import thailandia from '../assets/image/thailan.png';
import italy from '../assets/image/italy.png';
import torii from '../assets/image/toriigate.png';
import netherlands from '../assets/image/nettherlands.png';
import pisa from '../assets/image/pisa.png';
import united from '../assets/image/united-states.png';
import london from '../assets/image/london.png';
import relax from '../assets/image/t-relax.png';
import cultural from '../assets/image/t-cultural.png';
import sport from '../assets/image/t-sport.png';
import history from '../assets/image/t-history.png';
import tuscany from '../assets/image/tuscany.png';
import amsterdam from '../assets/image/amsterdam.png';
import phuket from '../assets/image/phuket.png';
import Button from '../Components/Button/Button';

export const headerNavbarItems = [
    {
        name: 'home',
        options: null,
    },
    {
        name: 'packages',
        options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
    },
    {
        name: 'shop',
        options: ['arachive', 'single product', 'cart', 'check out'],
    },
    {
        name: 'about us',
        options:['about us 1', 'about us 2', 'about us 3', 'about us 4', 'about us 5'],
    },
    {
        name: 'pages',
        options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
    },
    {
        name: 'news',
        options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
    },
    {
        name: 'contract',
        options:['search 1', 'search 2', 'tour packages', 'destination', 'typology'],
    },
    {
        name: <Button name='book now'/>,
        options: null,
    },
]

// header menu
export const menutes = [
    {
        imgm: tuscany,
        placem: 'tuscay',
        locatm: 'italy',
        btnm: 'from 730 $'
    },
    {
        imgm: amsterdam,
        placem: 'amsterdam',
        locatm: 'netherlands',
        btnm: 'from 1500 $'
    },
    {
        imgm: phuket,
        placem: 'phuket',
        locatm: 'thailandia',
        btnm: 'from 1200 $'
    }
]

export const placeMenus = [
    {
        img: berlin,
        place: 'berlin',
        locat: 'europe',
        btn: 'FROM 700 $'
    },
    {
        img: hongkong,
        place: 'hong kong',
        locat: 'asia',
        btn: 'FROM 700 $'
    },
    {
        img: sanfrancisco,
        place: 'sanfrancisco',
        locat: 'united States',
        btn: 'FROM 700 $'
    }
]

//content
export const cleanders = [
    {
        number: 0,
        text: 'Days'
    },
    {
        number: 0,
        text: 'hours'
    },
    {
        number: 0,
        text: 'minutes'
    },
    {
        number: 0,
        text: 'seconds'
    }
]

//header slidebar
export const headerServices = [
    {
        icon: relax,
        name: 'relax',
    },
    {
        icon: cultural,
        name: 'cultural',
    },
    {
        icon: sport,
        name: 'sport',
    },
    {
        icon: history,
        name: 'history',
    },
]

//content PROMOTIONS
export const datapakages = [
    {
        image: berlin, 
        icon: arch, 
        name: 'berlin', 
        location: 'europe', 
        price: `700 $`, 
        desc: '',
    },
    {
        image: hongkong, 
        icon: buddha, 
        name: 'hong Kong', 
        location: 'asia', 
        price: `500 $`, 
        desc: '',
    },
    {
        image: sanfrancisco, 
        icon: golden, 
        name: 'san francisco', 
        location: 'united states', 
        price: `400 $`, 
        desc: '',
    }
]

//content mobile
const dataContentMobiles = [
    {
        image: europe,
        icon: arch,
        name: 'europe',
        package: '3 packages',
        destination: ['berlin', 'amsterdam', 'Tuscany']
    },
    {
        image: thailandia,
        icon: buddha,
        name: 'thailandia',
        package: '1 packages',
        destination: ['phuket']
    },
    {
        image: europe,
        icon: torii,
        name: 'europe',
        package: '2 packages',
        destination: ['hongkong', 'phuket']
    },
    {
        image: italy,
        icon: pisa,
        name: 'italy',
        package: '1 packages',
        destination: ['Tuscany']
    },
    {
        image: netherlands,
        icon: london,
        name: 'netherlands',
        package: '1 packages',
        destination: ['amsterdam']
    },
    {
        image: united,
        icon: golden,
        name: 'united States',
        package: '3 packages',
        destination: ['berlin', 'amsterdam', 'tuscany']
    }
]
export default dataContentMobiles

