import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Button label="0" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="10" />
                <Button label="11" />
                <Button label="12" />
                <Button label="13" />
                <Button label="14" />
            </div>
        );
    }
}