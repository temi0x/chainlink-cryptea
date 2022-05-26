import Alert from "@mui/material/Alert";
import { useMoralis, useWeb3Transfer, Moralis } from "react-moralis";

const TransferEth = () => {
  const { Moralis, enableWeb3 } = useMoralis();
  function enable() {
    Moralis.enableWeb3();
  }
    
  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "native",
    amount: Moralis.Units.ETH(0.001),
    receiver: "0x1De0d1DA1531C741bB2bc8dFe6dfCbFaB530A20A",
  });

  console.log(error)

  return (
    // Use your custom error component to show errors
    <div>
      {/* {error && (
        // <Alert severity="error" error={error}>
        //   {error}
        // </Alert>
        <div>{error}</div>
      )} */}
      <button onClick={enable}>Auth</button>
      <button onClick={() => fetch()} disabled={isFetching}>
        Transfer
      </button>
    </div>
  );
};

export default TransferEth;
