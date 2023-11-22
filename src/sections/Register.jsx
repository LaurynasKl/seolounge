import { useState } from 'react';
import style from './Auth.module.css';
import { Link } from 'react-router-dom';
import { isValidEmail, isValidPassword, isValidPhone, isValidUsername } from '../lib/IsValid';

export function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRePass] = useState('');
    const [tos, setTos] = useState(false);

    function handleChangeUsername(event){
            setUsername(event.target.value)
    }

    function handleChangeEmail(event){
            setEmail(event.target.value)
    }

    function handleChangePhone(event){
            setPhone(event.target.value)
    }

    function handleChangePass(event){
            setPass(event.target.value)
    }

    function handleChangeRePass(event){
        setRePass(event.target.value)
    }

    function handleChangeTos(){
        setTos(!tos)
    }

    function handleSubmit(event){
        event.preventDefault();
        

        console.log('Form submit');
        console.log({
            username,
            email,
            phone,
            pass,
            repass,
            tos,
        });
        
        let isAllInfoOK = true;

        if(!isValidUsername(username)){
            isAllInfoOK = false;
        }
        if(!isValidEmail(email)){
            isAllInfoOK = false;
        }
        if(!isValidPhone(phone)){
            isAllInfoOK = false;
        }
        if(!isValidPassword(pass)){
            isAllInfoOK = false;
        }
        if(!isValidPassword(repass)){
            isAllInfoOK = false;
        }
        if(tos !== true){
            isAllInfoOK = false;
        }
        console.log('ar viskas ok', isAllInfoOK);
    }

    return (
        <section className="container">
            <div className="row">
                <form onSubmit={handleSubmit} className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5 mb-5">
                  <h1 className={style.mainTitle + " h3 mb-3 fw-normal"}>Please sign in</h1>

                  <div className="form-floating">
                    <input onChange={handleChangeUsername} value={username}  type="username" className="form-control" id="username" placeholder="Username" />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating">
                    <input onChange={handleChangeEmail} value={email} type="email" className="form-control" id="email" placeholder="Email" />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input onChange={handleChangePhone} value={phone} type="tel" className="form-control" id="phone" placeholder="Phone number" />
                    <label htmlFor="phone">Phone number</label>
                  </div>
                  <div className="form-floating">
                    <input onChange={handleChangePass} value={pass} type="password" className="form-control" id="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="form-floating">
                    <input onChange={handleChangeRePass} value={repass} type="password" className="form-control" id="PasswordRepeat" placeholder="Repeat Password" />
                    <label htmlFor="PasswordRepeat">Repeat Password</label>
                  </div>

                  <div className="form-check text-start my-3">
                    <input onChange={handleChangeTos} value={tos} className="form-check-input" type="checkbox" id="tos" />
                    <label className="form-check-label" htmlFor="tos">
                        Agree to <Link to='/tosPage'>Terms of Service</Link>
                    </label>
                  </div>
                  <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                </form>
            </div>
        </section>
    )
};