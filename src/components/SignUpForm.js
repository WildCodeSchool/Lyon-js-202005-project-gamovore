import React from 'react';

const SignUpForm = () => {
    return (
        <form>
            <label for="pseudo">Pseudo:</label>
            <input type="text" id="pseudo" name="pseudo" required />
            <label for="mail">e-mail:</label>
            <input type="email" id="mail" name="e-mail" required />
            <label for="pass">Password (min 8 character):</label>
            <input type="password" id="pass" name="password" minLength="8" required />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm;