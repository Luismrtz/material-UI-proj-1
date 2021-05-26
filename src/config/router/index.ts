import HomePage from '../../pages/home'
import DetailsPage from '../../pages/details';
import AboutPage from '../../pages/about';
import InfoPage from '../../pages/info';

export interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}


export const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: DetailsPage,
        exact: false
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
        exact: false
    },
    {
        path: '/info/:id',
        name: 'Info',
        component: InfoPage,
        exact: false
    },
]


