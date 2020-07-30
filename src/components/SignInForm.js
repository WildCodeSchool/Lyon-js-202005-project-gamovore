import React from 'react';


import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import SeparForm from "./SeparForm";

const SignInForm = () => {
    return (
        <Form>
            <h1>Hello</h1>
            <p>Sign into your account here</p>
            <label htmlFor="pseudo"></label>
            <Input type="text" id="pseudo" name="pseudo" placeholder="Your pseudo here" required />
            <label htmlFor="pass"></label>
            <Input type="password" id="pass" name="password" minLength="8" placeholder="Your password here" required />
            <Button type="submit">Sign In</Button>
            <SeparForm/>
            <p>Forgot password? Reset</p>
            <p>Don't have an account? Sign up</p>
        </Form>
    )
}

export default SignInForm;