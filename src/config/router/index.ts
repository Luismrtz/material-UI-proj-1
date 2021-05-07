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


// <Switch>
//       <Redirect exact from="/home" to="/home/about" />
//       <Route exact path="/home/:page?" render={props => <Home {...props} />} />
// </Switch>

// <Switch>
//     <Route exact from="/" render={props => <Home {...props} />} />
//     <Route exact path="/contact" render={props => <Contact {...props} />} />
//     <Route exact path="/about" render={props => <About {...props} />} />
// </Switch>