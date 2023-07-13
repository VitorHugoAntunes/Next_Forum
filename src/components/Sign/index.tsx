import Image from "next/image"
import Link from "next/link"

import GoogleIcon from '../../assets/googleLogo.png';

interface FormProps {
    changeForm: (form: string) => void;
}

export function SignIn({ changeForm }: FormProps) {
    return (
        <form action="">
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
            </div>

            <Link href={"/login"} onClick={() => changeForm('passwordRecovery')}>Forgot password?</Link>

            <button className="signButton">Sign in</button>

            <button className="signInGoogle">
                <Image src={GoogleIcon} alt="" width={24} height={24} />
                Sign in with Google
            </button>
        </form>
    )
}

export function SignUp() {
    return (
        <form action="">
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
            </div>

            <div>
                <label htmlFor="">Confirm password</label>
                <input type="password" name="" id="" />
            </div>

            <button className="signButton">Sign up</button>
        </form>
    )
}


export function PasswordRecovery() {
    return (
        <form action="">
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
            </div>

            <div>
                <label htmlFor="">New password</label>
                <input type="password" name="" id="" />
            </div>

            <div>
                <label htmlFor="">Confirm new password</label>
                <input type="password" name="" id="" />
            </div>

            <button className="signButton">Change password</button>
        </form>
    )
}