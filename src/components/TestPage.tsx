import React from 'react';
import Button from './button/Button';
import Input from './input/Input';
import Checkbox from './checkbox/Checkbox';
import s from './TestPage.module.scss'

const TestPage = () => {
    return (
        <div className={s.testPageBlock}>
            <h1>Test component page</h1>
            <div>
                <h3>Button</h3>
                <Button>Click</Button>
            </div>
            <div>
                <h3>Input</h3>
                <Input />
            </div>
            <div>
                <h3>Checkbox</h3>
                <Checkbox />
            </div>



        </div>
    );
};

export default TestPage;