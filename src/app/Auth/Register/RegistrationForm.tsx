import React from 'react';
import styles from './RegistrationForm.module.css';

interface RegistrationFormProps {
    onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({onClose}) => {

    return (
        <div className={styles['background']}>
            <div className={styles['registration-form']}>
                <button className={styles['close-button']} onClick={onClose}>X</button>
                <h2>Registration Form</h2>
                <form>
                    <div>
                        <div>Username</div>
                        <input
                            type="text"
                            id="username"
                            name="username"
                        />
                    </div>

                    <div>
                        <div>Email</div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                        />
                    </div>

                    <div>
                        <div>Password</div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                        />
                    </div>

                    <div>
                        <div>Confirm Password</div>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                        />
                        <button type="submit" className={styles['submitbutton']}>Sign Up</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
