import React from 'react';
import './SetNewPossword.scss'
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const SetNewPassword = () => {
    return (
        <div className='setNewPasswordBlock'>
            <h2>Set new password</h2>
            <div className='setNewPasswordBlock__form'>
                <label htmlFor='pass'>Enter password</label>
                <Input id='pass'/>
                <label htmlFor='confirm'>Confirm password</label>
                <Input id='confirm'/>
                <Button>Submit</Button>
            </div>
        </div>
    );
};

export default SetNewPassword;