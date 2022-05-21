import "../../../assets/styles/auth.css";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { MdVisibilityOff, MdVisibility, MdInfo } from "react-icons/md";
import {
  Button,
  Link,
  OutlinedInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  LinearProgress,
  Box,
  Alert,
} from "@mui/material";
import { AiOutlineNotification } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "../../../assets/styles/dash.css";
import { Navigate, NavLink, useLocation } from "react-router-dom";

const DashSettings = () => {
  const { isAuthenticated, user, authenticate, Moralis } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Logged in user:", user.get("ethAddress"));
    } else {
      console.log("Not logged in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const [userLink, setUserLink] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userInfo, setuserInfo] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentViewpass, setCurrentViewpass] = useState(false);
  const [viewpass, setViewpass] = useState(false);
  const [viewRepass, setViewRepass] = useState(false);

  const submitForm = async () => {
    window.scrollTo(0, 0);
    setLoading(true);
    let more = true;
    [userDescription, userEmail, userInfo, pass, repass].forEach((val) => {
      if (!val.length) {
        setError("Data Incomplete, Please required fields should be field");
        setLoading(false);
        more = false;
        return;
      }
    });

    if (more) {
      if (pass.length < 6) {
        setError("Minimum of 6 characters required for password");
        setLoading(false);
      } else if (pass !== repass) {
        setError("Please Reenter the correct password");
        setLoading(false);
      }
    }

    if (!error.length) {
      if (!isAuthenticated) {
        await authenticate({ signingMessage: "Welcome to Cryptea" })
          .then(function (user) {
            if (user.get("email").length) {
              window.location.href = "/#/dashboard";
            }
          })
          .catch(function (error) {
            setError(error);
            console.log(error);
            setLoading(false);
            return;
          });
      }

      if (!user.get("email").length) {
        user.set("username", userInfo);
        user.set("desc", userDescription);
        user.setPassword(pass);
        user.set("email", userEmail);

        const Links = Moralis.Object.extend("link");
        const link = new Links();
        link.set("link", userLink.length ? userLink : userInfo);
        link.set("amount", "variable");
        link.set("user", user);

        try {
          await user.save();
          await link.save();
        } catch (err) {
          console.log(err);
          setError(err.message);
          setLoading(false);
          return;
        }

        window.location.href = "/#/dashboard";
      } else {
        setError("Logout of your current wallet to sign up");
        setLoading(false);
      }
    }
  };

  const { pathname } = useLocation();

  const active = "border-l-[3px] border-l-[#F57059] text-[#F57059]";
  return (
    <div className="flex">
      <div
        className={`flex bg-[#FFFFFF] border-r-[#E3E3E3] border-r-[1px] transition-all delay-500 flex-col py-1 px-3`}
      >
        <div
          className={`rounded-[4px] overflow-hidden flex-nowrap my-1 ${
            pathname.indexOf("") !== -1 ? active : ""
          } border-solid hover:border-l-[3px] border-l-transparent text-[#A9A9A9] hover:border-l-[#F57059] hover:text-[#F57059] hover:bg-[#F5F8FE] py-[9px]`}
        >
          <NavLink
            to="/dashboard"
            className="text-inherit flex items-center text-[14px] mr-5"
          >
            <BsFillPersonLinesFill
              size={16.5}
              className={`text-inherit transition-all min-w-[20px] mx-[15px]`}
            />
            Account
          </NavLink>
        </div>

        <div
          className={`rounded-[4px] overflow-hidden flex-nowrap my-1 border-solid hover:border-l-[3px] hover:border-l-[#F57059] hover:text-[#F57059] border-l-transparent text-[#A9A9A9] hover:bg-[#F5F8FE] py-[9px] ${
            pathname.indexOf("") !== -1 ? active : ""
          }`}
        >
          <NavLink
            to="/dashboard"
            className="text-inherit flex items-center text-[14px] mr-5"
          >
            <AiOutlineNotification
              size={16.5}
              className={`text-inherit transition-all min-w-[20px] mx-[15px]`}
            />
            Notifications
          </NavLink>
        </div>
      </div>
      <div className="p-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
          method="POST"
          action="#"
          entype="multipart/form-data"
        >
          <div className="w-full flex justify-center mt-4">
            <div className="flex flex-col mx-7 items-center justify-center">
              <div className="flex flex-row border-b justify-start w-full">
                <div className="flex items-center justify-between font-semibold w-full">
                  <span className="text-xl mb-2">Account</span>
                </div>
              </div>
              {isLoading && (
                <Box className="text-[#F57059]" sx={{ width: "100%" }}>
                  <LinearProgress color="inherit" />
                </Box>
              )}

              {error.length > 0 && <Alert severity="error">{error}</Alert>}

              <div className="username w-full">
                <div className="font-semibold mt-5">Change Username</div>
                <div className="mt-2">
                  <div name="inputName" className="rounded-md">
                    <div className="flex">
                      <TextField
                        className="bg-[white]"
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
                  <div className="font-semibold mt-5">Change Cryptea Link</div>
                  <div className="flex">
                    <div className="mt-2 flex">
                      <div className="text-[#838383] border-l-[1px] border-y-[1px] border-[#A3A3A3] bg-[#E6E6E6] rounded-l-md p-4">
                        cryptea.com/
                      </div>
                      <div
                        name="inputName"
                        className="border-[1px] border-[#A3A3A3] rounded-r-md"
                      >
                        <div className="flex">
                          <TextField
                            className="bg-[white]"
                            label={"Link"}
                            value={userLink}
                            fullWidth
                            placeholder="wagmi"
                            name="Link"
                            onChange={(e) => {
                              setError("");
                              setUserLink(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div name="inputDescription" className="rounded-r-md mt-2">
                      <div className="form-floating mb-3 xl:w-96">
                        <input
                          className="form-control block w-full text-base m-0 bg-[white] text-[#838383] border-[1px] border-y-[1px] border-[#A3A3A3] bg-[#white] rounded-r-md p-4 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="wagmi"
                          value={userLink}
                          onChange={(e) => {
                            setUserLink(e.target.value);
                            setError("");
                          }}
                          id="link"
                        />
                        <label htmlFor="link" className="text-gray-700">
                          Link
                        </label>
                      </div>
                    </div> */}
                  </div>

                  <div className="font-semibold mt-5">Change Description</div>
                  <div name="inputDescription" className="rounded-md mt-2">
                    <div className="flex">
                      <TextField
                        type="textarea"
                        className="bg-[white]"
                        label={"Description"}
                        placeholder="I created Ethereum"
                        value={userDescription}
                        onChange={(e) => {
                          setUserDescription(e.target.value);
                          setError("");
                        }}
                        name="desc"
                        fullWidth
                        multiline
                        minRows={3}
                      />
                    </div>
                  </div>
                  <div className="font-semibold mt-5">Change Email</div>
                  <div name="inputEmail" className="rounded-md mt-2">
                    <div className="flex">
                      <TextField
                        className="bg-[white]"
                        label={"Email"}
                        placeholder="wagmi@ngmi.eth"
                        value={userEmail}
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                          setError("");
                        }}
                        name="email"
                        fullWidth
                      />
                    </div>
                  </div>

                  <div className="font-semibold mt-5">Change Password</div>
                  <div className="rounded-md mt-2">
                    <div className="flex">
                      <FormControl
                        sx={{
                          width: "100%",
                        }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="current-password">
                          Current Password
                        </InputLabel>
                        <OutlinedInput
                          className="bg-[white]"
                          id="current-password"
                          type={currentViewpass ? "text" : "password"}
                          value={currentPass}
                          onChange={(e) => {
                            setCurrentPass(e.target.value);
                            setError("");
                          }}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() =>
                                  setCurrentViewpass(!currentViewpass)
                                }
                                onMouseDown={(event) => {
                                  event.preventDefault();
                                }}
                                edge="end"
                              >
                                {currentViewpass ? (
                                  <MdVisibilityOff />
                                ) : (
                                  <MdVisibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Current Password"
                          placeholder="******"
                        />
                      </FormControl>
                    </div>
                  </div>

                  <div className="rounded-md mt-4">
                    <div className="flex">
                      <FormControl
                        sx={{
                          width: "100%",
                        }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="new-password">
                          New Password
                        </InputLabel>
                        <OutlinedInput
                          className="bg-[white]"
                          id="new-password"
                          type={viewpass ? "text" : "password"}
                          value={pass}
                          onChange={(e) => {
                            setPass(e.target.value);
                            setError("");
                          }}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setViewpass(!viewpass)}
                                onMouseDown={(event) => {
                                  event.preventDefault();
                                }}
                                edge="end"
                              >
                                {viewpass ? (
                                  <MdVisibilityOff />
                                ) : (
                                  <MdVisibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="New Password"
                          placeholder="******"
                        />
                      </FormControl>
                    </div>
                  </div>

                  <div className="rounded-md mt-4">
                    <div className="flex">
                      <FormControl
                        sx={{
                          width: "100%",
                        }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="Reenter-new-password">
                          Re-enter New Password
                        </InputLabel>
                        <OutlinedInput
                          className="bg-[white]"
                          id="Reenter-new-password"
                          type={viewRepass ? "text" : "password"}
                          value={repass}
                          onChange={(e) => {
                            setRepass(e.target.value);
                            setError("");
                          }}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle re-enter password visibility"
                                onClick={() => setViewRepass(!viewRepass)}
                                onMouseDown={(event) => {
                                  event.preventDefault();
                                }}
                                edge="end"
                              >
                                {viewRepass ? (
                                  <MdVisibilityOff />
                                ) : (
                                  <MdVisibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Re-enter New Password"
                          placeholder="******"
                        />
                      </FormControl>
                    </div>
                    <div className="flex flex-row justify-end w-full mt-8">
                      <Button
                        variant="contained"
                        type="submit"
                        className="!text-sm !rounded-lg !bg-[#F57059] !text-white !font-semibold !py-4 !px-10"
                      >
                        {isAuthenticated ? "Save" : "Connect Wallet"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashSettings;
