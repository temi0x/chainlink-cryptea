import React from "react";
import { useMoralis,useWeb3Transfer } from "react-moralis";


const Test =  () => {
  const { Moralis, isWeb3Enabled, enableWeb3 } = useMoralis();

  if(!isWeb3Enabled){
    enableWeb3()
  }

  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "native",
    amount: Moralis.Units.ETH(0.5),
    receiver: "0xe99356bde974bbe08721d77712168fa070aa8da4",
  });

  console.log(isFetching, error)
  return (
    // Use your custom error component to show errors
    <div>
      {error && <div error={error} ></div>}
      <button onClick={() => fetch()} disabled={isFetching}>
        Transfer
      </button>
    </div>
  );
};

export default Test;