import React from 'react';

const SignInForm = () => {
    return (
        <form>
            <label for="pseudo">Pseudo:</label>
            <input type="text" id="pseudo" name="pseudo" required />
            <label for="pass">Password(min 8 character):</label>
            <input type="password" id="pass" name="password" minLength="8" required />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignInForm;