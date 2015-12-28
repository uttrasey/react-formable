import React from 'react';
import { Form, Input, Errors } from 'react-formable';
import JSONViewer from '../../../components/JSONViewer';

export default class BasicExample extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange(form) {
        this.setState({
            data: form
        })
    }

    onSubmit(form) {
        if (form.valid)
            alert('Tada!');
    }

    //TODO: replace this with a stock validator once it's written
    requiredValidator(message) {
        return (value) => {
            if (!value)
                return message || 'Required field missing!';
        }
    }

    render() {
        const inputStyles = {
            marginLeft: '10'
        }

        return <div>
            <h3>The Form</h3>
            <Form ref="form" onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}>
                <Errors />
                <div>
                    <label>First name *</label>
                    <Input name="firstname" type="text"
                        validators={[this.requiredValidator('First name is required')]}
                        style={inputStyles} />
                </div>
                <div>
                    <label>Last name *</label>
                    <Input name="lastname" type="text"
                        validators={[this.requiredValidator('Last name is required')]}
                        style={inputStyles} />
                </div>
                <div>
                    <label>Phone number</label>
                    <Input name="phone" type="text"
                        style={inputStyles} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </Form>
            <br />
            <h3>The Form Model</h3>
            <JSONViewer {...this.state} />
        </div>;
    }

}