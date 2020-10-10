import Home from './pages/home'
import Room from './pages/room'
import Friends from './pages/friends'
import RandomRoom from './pages/random_room'
import RandomRoomSetup from './pages/random_room/random_roomSetup'
import InstantRoom from './pages/instant_room'
import InstantRoomSetup from './pages/instant_room/roomSetup'
import Apps from './pages/apps'
import Games from './pages/games'
import Shop from './pages/shop' 

const routes = [
    { path: '/dashboard/home', name: 'Home', component: Home },
    { path: '/dashboard/room', name: 'Room', component: Room },
    { path: '/dashboard/friends', name: 'Friends', component: Friends },
    { path: '/dashboard/random-room', name:"RandomRoom", component: RandomRoom },
    { path: '/dashboard/randomRoom-setup', name:"RandomRoomSetup", component: RandomRoomSetup },
    { path: '/dashboard/instant-room', name: 'InstantRoom', component: InstantRoom },
    { path: '/dashboard/room-setup', name: 'InstantRoomSetup', component: InstantRoomSetup },
    { path: '/dashboard/apps', name: 'Apps', component: Apps },
    { path: '/dashboard/games', name: 'Home', component: Games },
    { path: '/dashboard/shop', name: 'Shop', component: Shop },
    
];

export default routes;