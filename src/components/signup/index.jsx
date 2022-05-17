import info from '../../assets/img/info.svg';
import '../../assets/styles/auth.css';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';

import {
  Button,
  Link,
  TextField,
  LinearProgress,
  Box,
  Alert,
} from "@mui/material";

const SignupForm = () => {
  const { isAuthenticated, user, authenticate, Moralis } = useMoralis();

 useEffect(() => {
   if (isAuthenticated) {
     console.log("Logged in user:", user.get("ethAddress"));
   } else {
     console.log("Not logged in");
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [isAuthenticated]);
  
  const [userLink, setUserLink ] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userInfo, setuserInfo] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const submitForm = async () => {
      let more = true;
      [userDescription, userEmail, userInfo, pass, repass].forEach((val) => {
        if (!val.length) {
          setError('Data Incomplete, Please required fields should be field');
          setLoading(false);
          more = false;
          return;
        }
      })

      if(more){
          if (pass.length < 6) {
            setError("Minimum of 6 characters required for password");
            setLoading(false);
          }else if(pass !== repass){
            setError("Please Reenter the correct password");
            setLoading(false);
          }    
      }

      if (!error.length) {

  if (!isAuthenticated) {
    await authenticate({ signingMessage: "Welcome to Cryptea" })
      .then(function (user) {
          if(user.get('email').length){
              window.location.href = '/dashboard';
          }
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });  
          }


          user.set('username', userInfo);
          user.setPassword(pass);
          user.set('email', userEmail);
          user.set('emailVerified', false);
        
          const Links = Moralis.Object.extend('link');
          const link = new Links();
          link.set('link', (userLink.length ? userLink : userInfo));
          link.set('amount', 'variable');           
          link.set('user', user);

          try {
            await user.save();
            await link.save();
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
        window.location.href = '/dashboard';
      }
        window.scrollTo(0,0)
        setLoading(true);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col w-[900px] mx-7 items-center justify-center">
          <div className="flex flex-row border-b border-[#1B1C31] justify-start w-full">
            <div className="text-[#1B1C31] flex items-center justify-between font-semibold py-4 w-full">
              <span className="text-xl">Signup</span>
              <Link href="\login" className="ml-2">
                I have an account
              </Link>
            </div>
          </div>
          {isLoading && (
            <Box className="text-[#1B1C31]" sx={{ width: "100%" }}>
              <LinearProgress color="inherit" />
            </Box>
          )}

          {
            error.length > 0 && <Alert severity="error">{error}</Alert>
          }

          <div className="username w-full">
            <div className="mt-8">
              <div name="inputName" className="rounded-md">
                <div className="flex">
                  <TextField
                    label={"Username"}
                    value={userInfo}
                    fullWidth
                    placeholder="wagmi.eth"
                    name="username"
                    onChange={(e) => {
                      setError("");
                      setuserInfo(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div name="inputDescription" className="rounded-md mt-8">
                <div className="flex">
                  <TextField
                    label={"Description"}
                    placeholder="I created Ethereum"
                    value={userDescription}
                    onChange={(e) => {
                      setUserDescription(e.target.value)
                      setError("");
                    }}
                    name="desc"
                    fullWidth
                    multiline
                  />
                </div>
              </div>
              <div name="inputEmail" className="rounded-md mt-8">
                <div className="flex">
                  <TextField
                    label={"Email"}
                    placeholder="wagmi@ngmi.eth"
                    value={userEmail}
                    onChange={(e) => {setUserEmail(e.target.value)
                      setError('');
                    }}
                    name="email"
                    fullWidth
                  />
                </div>
              </div>

              <div className="rounded-md mt-8">
                <div className="flex">
                  <TextField
                    label={"Password"}
                    placeholder="******"
                    value={pass}
                    onChange={(e) => {setPass(e.target.value)
                      setError("");
                    }}
                    name="pass"
                    fullWidth
                  />
                </div>
              </div>

              <div className="rounded-md mt-8">
                <div className="flex">
                  <TextField
                    label={"Reenter Password"}
                    placeholder="******"
                    value={repass}
                    onChange={(e) => {setRepass(e.target.value)
                      setError("");
                    }}
                    name="repass"
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[5px] border-[#C2C7D6] mt-8 w-full border-2 border-solid overflow-hidden">
            <div className="flex flex-wrap items-center px-7 justify-between py-4 bg-[#1B1C31] text-white">
              <span className="uppercase font-semibold mr-3">Cryptea Link</span>
              <div className="flex items-center">
                <span className="mr-2 text-sm">
                  This is the link which enables other crypto enthusiasts tip
                  you. E.g cryptea.com/wagmi <br />
                  If left empty your username is used as default link
                </span>
                <img src={info} alt="info" />
              </div>
            </div>

            <div className="w-full p-10">
              <div className="flex items-center ssm:flex-wrap">
                <TextField
                  label={"Enter Link Slug"}
                  placeholder="wagmi"
                  value={userLink}
                  onChange={(e) => {setUserLink(e.target.value)
                    setError("");
                  }}
                  name="link"
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full mt-8">
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
  );
};

export default SignupForm;
