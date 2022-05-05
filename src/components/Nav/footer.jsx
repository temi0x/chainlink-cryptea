import linked from '../../assets/img/icon0.png'
import mess from '../../assets/img/icon1.png'
import twitt from '../../assets/img/icon2.png'
import hmm from '../../assets/img/icon4.png'

const Footer = () => {
    const date = new Date()
        return (
            <div>
            <div className="flex mx-[70px] border-solid border-b-[#E5E5EA] border-b-[1px] w-auto p-5 justify-between pb-12">

            <div className="w-[220px]">
                <h3 className="font-bold text-[18px] mb-2">Cryptea</h3>
                <span className="text-[#757095] ">Receive tips while you sip tea. Directly, and securely.</span>
                <div className="flex items-center justify-between mt-[3pc] w-[200px]">
                    <a className="mr-[5px]" href="linkedIn.com"> <img alt="linkedIn" src={linked} /> </a>
                    <a className="mr-[5px]" href="messenger.com"> <img alt="Messenger" src={mess} /> </a>
                    <a className="mr-[5px]" href="twitter.com"> <img alt="Twitter" src={twitt} /> </a>
                    <a className="mr-[5px]" href=""> <img alt="" src={hmm} /> </a>
                </div>
            </div>

            <div className="w-[220px]">
                <h3 className="font-bold text-[18px] mb-2">Company</h3>
                <div className="flex flex-col w-[200px]">
                    <a className="mr-[5px] mb-3" href=""> About Us </a>
                    <a className="mr-[5px] mb-3" href=""> Careers </a>
                    <a className="mr-[5px] mb-3" href=""> Blog </a>
                </div>
            </div>

            <div className="w-[220px]">
                <h3 className="font-bold text-[18px] mb-2">Join Us</h3>
                <div className="flex items-center justify-between w-[200px]">
                    <a className="mr-[5px]" href=""> <button className="text-sm hover:bg-[#ff320e] transition-all delay-500 rounded-[6rem] bg-[#F57059] mt-2 mx-auto justify-self-center place-self-center object-center text-white font-normal py-[14px] px-8">
              Connect Wallet
            </button> </a>
                
                </div>
            </div>

            </div>
            <div className="text-center font-semibold py-5">
                Copyright @ Cryptea { date.getFullYear() }. All Rights Reserved.
            </div>
        </div>
        )
    
}

export default Footer