import Home from '../pages/Home'
import CategoryDetails from '../pages/CategoryDetails'
import Details from '../components/Details'
import WatchMovie from '../components/WatchMovie'

export const routers = [
    {
        path: '/:category/search/:keyword',
        element: CategoryDetails,
    },
    {
        path: '/:category/:id',
        element: Details,
    },
    {
        path: '/:category',
        element: CategoryDetails,
    },
    {
        path: '/:category/watch/:id',
        element: WatchMovie,
    },
    {
        path: '/',
        element: Home,
    },
]
