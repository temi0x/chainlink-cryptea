import ether from '../../assets/img/ethereum.png'
import avax from '../../assets/img/avax.png'
import matic from '../../assets/img/polygon.png'

const Supported = () => {
    return (
        <div className="mt-10 rounded-[10px] justify-between border-[1px] border-[#DEE1E6] border-solid items-center flex pl-[2pc] pr-[4pc] py-[1.5rem] supportedNetworks">

            <h1 className="text-black font-bold text-center w-[200px] text-[30px]">Supported Blockchains</h1>

            <div className="flex items-center justify-between w-[60%]">
                <div className="flex justify-between items-center">
                    <img 
                        src={ether}
                        alt="ethereum"
                        className="mr-[10px]"
                    />
                    <span className="text-[#64607D] font-bold">Ethereum</span>
                </div>

                <div className="flex justify-between items-center">
                    <img 
                        src={matic}
                        alt="polygon"
                        className="mr-[10px]"
                    />
                    <span className="text-[#64607D] font-bold">Polygon</span>
                </div>

                <div className="flex justify-between items-center">
                    <img 
                        src={avax}
                        alt="avalanche"
                        className="mr-[10px]"
                    />
                    <span className="text-[#64607D] font-bold">Avalanche</span>
                </div>


            </div>
        </div>
    )
}

export default Supported