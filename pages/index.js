import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [{
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://commons.wikimedia.org/wiki/File:Panoramica_Firenze.jpg#/media/File:Panoramica_Firenze.jpg',
    address: 'Some Adress 5, 1234 Some City',
    description: 'This is a first meetup!'
},
{
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://commons.wikimedia.org/wiki/File:Panoramica_Firenze.jpg#/media/File:Panoramica_Firenze.jpg',    
    address: 'Some Adress 55, 1234 Some City',
    description: 'This is a Second meetup!'
}]

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUP} />;
}

export default HomePage;
