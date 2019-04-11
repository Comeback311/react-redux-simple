import React from 'react';
import Header from '../Header/container';

import { Link } from 'react-router-dom';

// import tools from '../../tools/index'

import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home'>
                <Header />
                <div className='page'>
                    <Link to='/users'>Все пользователи</Link>
                </div>
                <div className='footer'>
                    <div className='footer__copy'>Avdeev Denis &copy;</div>
                </div>
            </div>
		);
    }
};

// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className='home'>
//                 <Header />
//                 Users page
//             </div>
// 		);
//     }
// };

// const Routes = () => (  
//     <HashRouter basename={process.env.PUBLIC_URL}>
//         <Switch>
//             {/* <Route path='/tags/:tag/' component={Tags}/> */}
//             <Route exact path='/' component={Home}/>
//             <Route exact path='/users' component={Test}/>
//             {/* <Route path='/*' component={NoFoundPage}/> */}
//         </Switch>
//     </HashRouter>  
// )

// export default Routes;
