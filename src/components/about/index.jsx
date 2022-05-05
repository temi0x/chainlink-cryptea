import one from '../../assets/img/one.svg'
import two from '../../assets/img/two.svg'
import three from '../../assets/img/three.svg'
import circle from '../../assets/img/circle.svg'
import Supported from './supported'

const About = () => {

    return (
        <div className="mx-[30px] mt-24 px-14" id="about">
            <div className="w-[320px]">
            <span className="uppercase text-[#F57059] font-semibold text-[14px]">receive tips daily</span>
            <h1 className="text-black w-fit font-bold text-[29px] my-1">We have an easy signup process</h1>
            <span className="text-[#64607D] font-normal block text-[17px] mt-[10px]">
                As we are based on Web3, we provide the simplest way to receive payments from your fans, without needing to compromise your data
            </span>

            <button className="text-sm hover:bg-[#ff320e] transition-all delay-500 rounded-[6rem] bg-[#F57059] mt-2 mx-auto justify-self-center place-self-center object-center text-white font-normal py-[14px] px-8">
              Connect Wallet
            </button>
        </div>

        <div className="w-[calc(100% - 6rem)] relative justify-around flex items-center mt-[19rem] ml-24">

            <div className="w-[232px] relative">
                <img src={one} alt="step one" className="absolute bottom-[48px] right-0"/>
                <h4 className="font-bold">Connect wallet</h4>
                <span className="text-[#64607D]">
                    Easily connect to your metamask wallet. You’d also need to sign a message, to show ownership.
                </span>
            </div>

            <div className="w-[240px] relative mt-[-24pc]">
                <img src={two} alt="step one" className="absolute bottom-[48px] right-0"/>
                <h4 className="font-bold">Setup payment link</h4>
                <span className="text-[#64607D]">
                    Once signed, you have the liberty to create a personalised link, and receive payments.
                </span>
            </div>

            <div className="w-[280px] relative mt-[-51pc]">
            <img src={three} alt="step one" className="absolute bottom-[48px] right-0"/>
                <h4 className="font-bold">Receive payments</h4>
                <span className="text-[#64607D]">
                    You’re good to go. Share your payment link, and receive crypto from your fans.
                </span>
            </div>
            <img src={circle}  alt="for you" className="absolute right-[-5.406rem] bottom-0 z-[-1] w-[290px]" />
        </div>

        
        <div className="rounded-[14px] mt-[6rem] bg-contain h-[386px] bg-no-repeat m-auto max-w-[800px] bg-donation bg-[rgba(0,0,0,0.5)] bg-blend-color flex flex-col justify-center items-center">

            <h1 className="text-white font-bold text-center mx-auto w-[85%] text-[44px] mb-0 mt-[8px]">Receive donations on another level</h1>

            <span className="text-white block text-[20px]">Secure Donations and payments in one platform.</span>

            <button className="text-sm hover:bg-[#ff320e] transition-all delay-500 rounded-[6rem] bg-[#F57059] mt-20 mx-auto justify-self-center place-self-center object-center text-white font-normal py-[14px] px-8">
              Connect Wallet
            </button>

        </div>

        <Supported />

        </div>
    )

}

export default About;