import Image from 'next/image'
import React from 'react'


const Top = (props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined }) => {
    return (
    <div className="flex flex-col items-center justify-center w-full">
        <Image width={100}  height={100} className="absolute top-0 left-0 z-10" src={'/assets/images/pattern-rings.svg'} alt="background-pattern" />
        <div className="flex flex-col items-center w-80 relative">
            <div className="flex flex-row items-center justify-between w-full py-4">
                <a href="" download>
                    <h1 className='text-white text-2xl font-bold'>lucaszebre</h1>
                </a>
                <div className="flex flex-row items-center">
                    <a href="https://github.com/lucaszebre" target="_blank"><img className='w-8 h-8 mr-4' src={'/assets/images/icon-github.svg'} alt="github-icon" /></a>
                    <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><img className='w-8 h-8 mr-4' src={'/assets/images/icon-frontend-mentor.svg'} alt="frontend-icon" /></a>
                    <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><img className='w-8 h-8 mr-4' src={'/assets/images/icon-linkedin.svg'} alt="linkedin-icon" /></a>
                    <a href="https://twitter.com/ZebreLucas" target="_blank"><img className='w-8 h-8 mr-4' src={'/assets/images/icon-twitter.svg'} alt="twitter-icon" /></a>
                </div>
            </div>
            <div className="flex flex-col items-center w-full text-start mt-12">
                <div className="text-white text-6xl font-bold w-3/4">
                    Nice to meet you!
                    I'm <span className='underline text-green-500'>Lucas Zebre.</span>
                </div>
                <div className="text-white text-lg font-normal w-2/5 mt-4">
                    Based in Paris , I'm a Frontend Developer.
                    passionate about building accessible web apps that user love.
                </div>
                <div onClick={props.onClick} className="cursor-pointer text-white text-2xl font-normal mt-8 underline">CONTACT ME</div>
            </div>
            <Image width={100}  height={100} className='hidden md:block w-96 h-auto absolute z-0 top-0 right-0' src={'/assets/images/PhotoDesktop.png'} alt="Photo de lucas zebre " />
        </div>
        <Image width={100}  height={100} className='hidden md:block w-96 h-auto absolute z-0 top-0 right-0' src={'/assets/images/PhotoTablet.png'} alt="Photo de lucas zebre " />
        <Image width={100}  height={100} className='md:hidden w-1/2 h-auto absolute z-0 top-0' src={'/assets/images/PhotoMobile.png'} alt="Photo de lucas zebre " />
    </div>
    )
}

export default Top
