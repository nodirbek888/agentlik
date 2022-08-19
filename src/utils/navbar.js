import Bizhaqimizda from '../pages/BizhaqimizdaPage'
import Xizmatlar from '../pages/XizmatlarPage'
import Narxlar from '../pages/NarxlarPage'
import Jamomiz from '../pages/JamomizPage'
import Mijozlar from '../pages/MijozlarPage'
export const navbar = [ 
    {
        id: 1,
        title: 'Biz haqimizda',
        path: '/biz-haqimizda',
        element:<Bizhaqimizda/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 2,
        title: 'Xizmatlar',
        path: '/xizmatlar',
        element:<Xizmatlar/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 3,
        title: 'Narxlar',
        path: '/narxlar',
        element:<Narxlar/>,
        search: '?',
        hidden: false,
        private: true
    },    {
        id: 4,
        title: 'Jamomiz',
        path: '/jamomiz',
        element:<Jamomiz/>,
        search: '?',
        hidden: false,
        private: true
    },    {
        id: 5,
        title: 'Mijozlar',
        path: '/mijozlar',
        element:<Mijozlar/>,
        search: '?',
        hidden: false,
        private: true
    }
]