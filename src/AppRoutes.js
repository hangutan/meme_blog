import React from 'react';
import { Switch , Route} from 'react-router-dom';
import Routers from './routers/index';

function AppRoutes(){
    return(
        <Switch>
            {
                Routers.map((router,index)=>{
                    return(
                        <Route
                            key={index}
                            exact={router.exact}
                            path={router.path}
                        >
                            <router.component/>
                        </Route>
                    )
                })
            }
        </Switch>

    )
}

export default AppRoutes;