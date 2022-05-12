import { useMoralis } from "react-moralis";

export default function Test() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Wallet Connect Authentication</h1>

        <button onClick={() => authenticate({ provider: "walletconnect" })}>
          Authenticate
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("address")}</h1>
      <button onClick={() => logout()}>Authenticate</button>{" "}
    </div>
  );
}
