// Bottom.jsx
import React from 'react';

import Image from 'next/image';

const Bottom = () => {
    const [message, setMessage] = React.useState('');
    const [Name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [ErrorName, setErrorName] = React.useState(false);
    const [ErrorMail, setErrorMail] = React.useState(false);
    const [ErrorMessage, setErrorMessage] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full bg-gray-900 relative">
                <Image width={100}  height={100}  className="PatternRings" src={"/assets/images/pattern-rings.svg"} alt="background-pattern" />
                <div className="flex flex-col items-center w-80">
                    <div className="flex flex-col items-start w-full">
                        <div className="text-white text-6xl font-bold">
                            Contact
                        </div>
                        <div className="text-white text-lg font-normal mt-2 w-3/5">
                            I would love to hear about your project and how I could help.
                            Please fill the form and I'll get back to you as soon as possible.
                        </div>
                    </div>
                    <div className="flex flex-col items-end w-full mt-8">
                        <form action="" 
                        // onSubmit={handleSubmit}
                         className="flex flex-col items-end w-full">
                            <input type="text" onChange={e => setName(e.target.value)} placeholder='NAME' className="w-80 h-12 bg-transparent outline-none border-b border-white text-white" />
                            {ErrorName && <div className="text-red-500 text-sm font-normal">Please enter your name</div>}
                            <input type="text" onChange={e => setEmail(e.target.value)} placeholder='EMAIL' className="w-80 h-12 bg-transparent outline-none border-b border-white text-white mt-4" />
                            {ErrorMail && <div className="text-red-500 text-sm font-normal">Please enter your email</div>}
                            <textarea  onChange={e => setMessage(e.target.value)} placeholder='MESSAGE' className="w-80 h-32 bg-transparent outline-none border-b border-white text-white mt-4" />
                            {ErrorMessage && <div className="text-red-500 text-sm font-normal">Please enter your message</div>}
                            <button className="text-white text-xl font-bold mt-8 underline" >SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-between w-80 absolute bottom-4">
                    <div className="text-white text-2xl font-bold">
                        lucaszebre
                    </div>
                    <div className="flex">
                        <a href="https://github.com/lucaszebre" target="_blank"><img src={'./assets/images/icon-github.svg'} alt="github-logo" className='w-8 h-8 mr-4' /></a>
                        <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><img src={'./assets/images/icon-frontend-mentor.svg'} alt="frontend-logo" className='w-8 h-8 mr-4' /></a>
                        <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><img src={'./assets/images/icon-linkedin.svg'} alt="linkedin" className='w-8 h-8 mr-4' /></a>
                        <a href="https://twitter.com/ZebreLucas" target="_blank"><img src={'./assets/images/icon-twitter.svg'} alt="twitter-logo" className='w-8 h-8 mr-4' /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bottom;
