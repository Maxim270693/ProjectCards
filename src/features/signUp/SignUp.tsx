import React, {ChangeEvent, useState} from 'react';
import './SignUp.scss';
import Input from "../../components/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {registerTC} from "../../main/bll/auth-actions";
import {RootStoreType} from "../../main/bll/store";
import Spinner from "../../components/spinner/Spinner";
import {Redirect} from "react-router-dom";
import {PATH} from "../../main/ui/routes/Routes";


const SignUp = () => {
    const isRegister = useSelector<RootStoreType, boolean>((state) => state.user.isRegister)
    const isLoading = useSelector<RootStoreType, boolean>((state) => state.user.isLoading)
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")

    const [errorsEmail, setErrorsEmail] = useState<string>('')
    const [errorsPassword, setErrorsPassword] = useState<string>('')
    const [errorsPasswordConfirmation, setErrorsPasswordConfirmation] = useState<string>('')


    const onChangeHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        setErrorsEmail('')
    }
    const onChangeHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        setErrorsPassword('')
    }
    const onChangeHandlerDoublePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(e.currentTarget.value)
        setErrorsPasswordConfirmation('')
    }


    const validateDate = () => {
        // валидация формы
        if (!email) {
            return setErrorsEmail("Поле email не может быть пустым")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return setErrorsEmail('Неправельный email адресс')
        }
        if (!password) {
            return setErrorsPassword("Поле пароль не может быть пустым")
        } else if (password.length < 8) {
            return setErrorsPassword('Пароль не может быть менее 8 сисмволов')
        }
        if (passwordConfirmation !== password) {
            return setErrorsPasswordConfirmation("Неправельный пароль")
        } else if (passwordConfirmation === password) {
            return
        }

    }

    const setIsValid = () => {
        if (email && password && passwordConfirmation) {
            dispatch(registerTC({email, password}))
        }
    }
    // если зарегистрирован Redirect на Profile
    if (isRegister) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <>
            {isLoading
                ? <div className='wrapper'><Spinner/></div>
                : <div className='wrapper'>
                    <h2 className='wrapper_title'>Register</h2>
                    <div className='from_text'>
                        <Input className='form_text_input input'
                               type="email"
                               onChange={onChangeHandlerEmail}
                               value={email}
                               onBlur={validateDate}
                               placeholder='email'
                        />
                    </div>
                    <div className='from_password'>
                        <Input className='from_password_input input'
                               type="password"
                               onChange={onChangeHandlerPassword}
                               value={password}
                               onBlur={validateDate}
                               placeholder='password'
                        />
                    </div>
                    <div className='from_password_double'>
                        <Input className='from_password_double_input input'
                               type="password"
                               onChange={onChangeHandlerDoublePassword}
                               value={passwordConfirmation}
                               onBlur={validateDate}
                               placeholder='passwordConfirmation'
                        />
                    </div>
                    <div className={errorsEmail ? 'errors' : ''}> {errorsEmail} </div>
                    <div className={errorsPassword ? 'errors' : ''}> {errorsPassword} </div>
                    <div className={errorsPasswordConfirmation ? 'errors' : ''}> {errorsPasswordConfirmation}</div>

                    <button className='wrapper_btn_register btn'
                            onClick={setIsValid}
                            onMouseDown={validateDate}
                    > register
                    </button>
                    <a href="http://localhost:3000/#/login" className='wrapper_btn_signIn btn'>Sign In</a>
                </div>}
        </>
    );
};

export default SignUp;


