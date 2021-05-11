import React, {useEffect} from 'react';
import './profile.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../main/bll/store";
import {setLogOut, setMeTC} from "../../main/bll/auth-actions";
import {Redirect} from "react-router-dom";
import {PATH} from "../../main/ui/routes/Routes";


const Profile = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<RootStoreType, boolean>((state) => state.user.isAuth)
    const error = useSelector<RootStoreType, string | null>((state) => state.user.error)
    const avatar = useSelector<RootStoreType, string | null>((state) => state.user.avatar)
    const name = useSelector<RootStoreType, string | null>((state) => state.user.name)

    useEffect(() => {
        if (!isAuth) {
            dispatch(setMeTC())
        }
    }, [])

    const isAuthLogUot = () => {
        dispatch(setLogOut())
    }

    if (error) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            <div className='description'>
                <div>
                    <img src={avatar ? avatar : ''} alt="userPhoto"/>
                </div>
                <div className='name'>{name}</div>
            </div>
            <button className="logOut"
                    onClick={isAuthLogUot}
            >LogOut
            </button>
        </div>
    );
};

export default Profile;