import { PasswordRecovery, SignIn, SignUp } from "@/components/Sign";
import { AsideContainer, FormSignContainer, LoginContainer } from "@/styles/pages/login";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import HeroImage1 from '../assets/heroImage1.svg';
import HeroImage2 from '../assets/heroImage2.svg';

export default function Login() {
    const [currentForm, setCurrentForm] = useState('signIn');

    function changeCurrentForm(form: string) {
        currentForm === 'signIn' && setCurrentForm(form)
        currentForm === 'signUp' && setCurrentForm(form);
        currentForm === 'passwordRecovery' && setCurrentForm(form);
    }

    return (
        <LoginContainer>
            <FormSignContainer>
                <div>
                    {currentForm === 'signIn' && (
                        <>
                            <header>
                                <h1>Welcome</h1>
                                <p>
                                    Is it your first time? <Link href={"/login"} onClick={() => changeCurrentForm('signUp')}>Create account</Link>.
                                </p>
                            </header>

                            <SignIn changeForm={() => changeCurrentForm('passwordRecovery')} />
                        </>
                    )}

                    {currentForm === 'signUp' && (
                        <>
                            <header>
                                <h1>Sign Up</h1>
                                <p>
                                    Already have an account? <Link href={"/login"} onClick={() => changeCurrentForm('signIn')}>Sign in</Link>.
                                </p>
                            </header>

                            <SignUp />
                        </>
                    )}

                    {currentForm === 'passwordRecovery' && (
                        <>
                            <header>
                                <h1>Change password</h1>
                                <p>
                                    Already have an account? <Link href={"/login"} onClick={() => changeCurrentForm('signIn')}>Sign in</Link>.
                                </p>
                            </header>

                            <PasswordRecovery />
                        </>
                    )}
                </div>
            </FormSignContainer>
            <AsideContainer>
                <Image src={HeroImage1} alt="" width={250} height={250} />
                <Image src={HeroImage2} alt="" />
            </AsideContainer>
        </LoginContainer>
    )
}