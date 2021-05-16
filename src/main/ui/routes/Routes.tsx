import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from '../../../features/profile/Profile';
import RecoveryPass from '../../../features/recoveryPass/RecoveryPass';
import Error404 from '../error-404/Error404';
import TestPage from '../../../components/TestPage';
import Login from '../../../features/login/Login';
import SignUp from "../../../features/signUp/SignUp";
import Header from '../header/Header';
import {Packs} from "../../../features/packs/packs";


export const PATH = {
    PROFILE: "/profile",
    LOGIN: '/login',
    RECOVERY: '/recovery',
    SIGNUP: "/signUp",
    TESTPAGE: '/testPage',
    SETNEWPASSWORD: '/SetNewPassword',
    PACKS: '/packs'
}

function Routes() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.PROFILE}/>}/>

                <Route path={PATH.PROFILE} render={() => <Profile />}/>
                <Route path={PATH.LOGIN} render={() => <Login />}/>
                <Route path={PATH.SIGNUP} render={() => <SignUp />}/>
                <Route path={PATH.RECOVERY} render={() => <RecoveryPass />}/>
                <Route path={PATH.TESTPAGE} render={() => <TestPage />}/>
                <Route path={PATH.PACKS} render={() => <Packs />}/>

                <Route render={() => <Error404 />}/>
            </Switch>
        </div>
    );
}

export default Routes;
