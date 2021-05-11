import React from 'react';
import Input from '../../components/input/Input';
import './RecoveryPass.scss'
import Button from '../../components/button/Button';

const RecoveryPass = () => {
    return (
        <div className='RecoveryPassBlock'>
            <h2>Recovery password</h2>
            <div className='RecoveryPassBlock__form'>
                <label htmlFor='recov'>Enter your email:</label>
                <Input id='recov'/>
                <Button type='submit'>Send</Button>
                <p className='RecoveryPassBlock__text'>* We will send you an email with further instructions on password recovery</p>
            </div>
        </div>
    );
};

export default RecoveryPass;