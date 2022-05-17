import { useState } from "react";
import {useMoralis } from "react-moralis";
import { TextField, Box, LinearProgress, Button, Alert } from "@mui/material";
import Nav from "../../components/Nav";
const LoginForm = () => {

  const [ user, setUser] = useState('');
  const [pass, setPass] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { isAuthenticated, Moralis, user : usee } = useMoralis();

  const submitForm = async () => {
    let more = true;
    [user, pass].forEach((val) => {
      if (!val.length) {
        setError("Password or username incorrect");
        setLoading(false);
        more = false;
        return;
      }
    });

    if (more) {
      if (pass.length < 6) {
        setError("Password or username incorrect");
        setLoading(false);
      }
    }

    if (!error.length) {
      if (!isAuthenticated) {
        try{
         await Moralis.User.logIn(user, pass, {
           usePost: true,
         });
      } catch (err){
            setError(err.message);
            setLoading(false);
      }

      }

      window.location.href = '/dashboard';              

    }
    window.scrollTo(0, 0);
    setLoading(true);
  };


  return (
    <div>
      <Nav />
      <form
        action=""
        method="POST"
        enctype="multipart/form-data"
        onSubmit={(c) => {
          c.preventDefault();
          submitForm();
        }}
      >
        <div className="w-full flex justify-center mt-8">
          <div className="flex flex-col w-[900px] mx-7 items-center justify-center">
            <div className="flex flex-row border-b border-[#1B1C31] justify-start w-full">
              <div className="text-[#1B1C31] font-semibold text-xl py-4">
                Login
              </div>
            </div>
            {isLoading && (
              <Box className="text-[#1B1C31]" sx={{ width: "100%" }}>
                <LinearProgress color="inherit" />
              </Box>
            )}

            {error.length > 0 && <Alert severity="error">{error}</Alert>}
            <div className="username w-full">
              <div className="mt-8">
                <div name="inputName" className="rounded-md">
                  <div className="flex">
                    <TextField
                      label={"Username"}
                      value={user}
                      fullWidth
                      placeholder="wagmi.eth"
                      name="username"
                      onChange={(e) => {
                        setError("");
                        setUser(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div name="inputDescription" className="rounded-md mt-8">
                  <div className="flex">
                    <TextField
                      label={"Password"}
                      value={pass}
                      fullWidth
                      placeholder="******"
                      name="password"
                      onChange={(e) => {
                        setError("");
                        setPass(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center w-full mt-8">
              <Button
                variant="contained"
                className="!text-sm !rounded-lg !bg-[#1B1C31] !text-white !font-semibold !py-4 !px-10"
              >
                {isAuthenticated ? "Save" : "Connect Wallet"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
