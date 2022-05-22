import "../../assets/styles/auth.css";
import "../../assets/styles/sett.css";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import {
  Button,
  OutlinedInput,
  Avatar,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  LinearProgress,
  Box,
  Alert
} from "@mui/material";

const DashSettings = () => {

  const { isAuthenticated, Moralis, authenticate, user } = useMoralis();

  const [userLink, setUserLink] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userInfo, setuserInfo] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [isLoading, setLoading] = useState({
    account: false, security: false, link: false
  });
  const [error, setError] = useState({
    account: "", security: "", link: ""
  });



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


  return (
    <div className="2sm:pr-1 sett dashbody cusscroller overflow-y-scroll overflow-x-hidden px-5 pb-5 h-[calc(100%-75px)]">
      <div className="w-[80%] usm:w-[90%] sm:w-full">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            method="POST"
            action="#"
            entype="multipart/form-data"
          >
            <div className="w-full justify-center mt-4">
              <div className="flex flex-col mx-7 items-center justify-center">
                <div className="flex flex-row border-b mmd:flex-col justify-start w-full">
                  <div className="flex items-center justify-between font-semibold w-full">
                    <span className="text-[25px] font-[800] mb-2">Account</span>
                  </div>
                </div>
                {isLoading["account"] && (
                  <Box className="text-[#F57059]" sx={{ width: "100%" }}>
                    <LinearProgress color="inherit" />
                  </Box>
                )}

                {error["account"].length > 0 && (
                  <Alert severity="error">{error["account"]}</Alert>
                )}

                <div className="username w-full">
                  <div className="flex mmd:flex-col-reverse mmd:items-center justify-between items-start">
                    <div className="w-full">
                      <div className="font-semibold mt-5 mb-4 text-[#777]">
                        Change Username
                      </div>
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

                        <div className="font-semibold mt-5 mb-4 text-[#777]">
                          Change Email
                        </div>
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

                        <div className="flex flex-row justify-end w-full mt-8">
                          <Button
                            variant="contained"
                            type="submit"
                            className="!text-sm !rounded-lg !bg-[#F57059] !text-white !font-semibold !py-4 !px-10"
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-[300px] mmd:mb-3 flex items-center flex-col relative">
                      <div className="font-semibold mt-5 mb-4 text-[#777]">
                        Profile Picture
                      </div>
                      {user.get("img") === undefined ? (
                        <Avatar
                          sx={{
                            bgcolor: "#F57059",
                            width: 190,
                            height: 190,
                          }}
                          className="!font-bold imm !text-[35px]"
                          alt={user.get("username")}
                        >
                          {user.get("username").charAt(0).toUpperCase()}
                        </Avatar>
                      ) : (
                        <Avatar
                          src={user.get("img")}
                          sx={{ width: 190, height: 190 }}
                          alt={user.get("username")}
                        ></Avatar>
                      )}
                      <div className="mt-1">
                        <Button
                          onClick={() => {
                            console.log("hmm...");
                          }}
                          variant="contained"
                          className="!text-sm !rounded-lg !capitalize !bg-[#F57059] !text-white !font-semibold p-[10px]"
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            method="POST"
            action="#"
            entype="multipart/form-data"
          >
            <div className="w-full justify-center mt-4">
              <div className="flex flex-col mx-7 items-center justify-center">
                <div className="flex flex-row border-b justify-start w-full">
                  <div className="flex items-center justify-between font-semibold w-full">
                    <span className="text-[25px] font-[800] mb-2">
                      Your Link
                    </span>
                  </div>
                </div>
                {isLoading["link"] && (
                  <Box className="text-[#F57059]" sx={{ width: "100%" }}>
                    <LinearProgress color="inherit" />
                  </Box>
                )}

                {error["link"].length > 0 && (
                  <Alert severity="error">{error["link"]}</Alert>
                )}

                <div className="username w-full">
                  <div className="mt-2">
                    <div className="font-semibold mt-5 mb-4 text-[#777]">
                      Change Cryptea Link
                    </div>
                    <div className="flex mt-2">
                      <FormControl
                        sx={{
                          width: "100%",
                        }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="current-password">Link</InputLabel>
                        <OutlinedInput
                          className="bg-[white] !p-0"
                          placeholder="wagmi"
                          name="Link"
                          label="Link"
                          onChange={(e) => {
                            setError("");
                            setUserLink(e.target.value);
                          }}
                          startAdornment={
                            <InputAdornment position="start">
                              <div className="text-[#838383] rounded-l-md p-[15px] pr-0">
                                cryptea.com/
                              </div>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>

                    <div className="font-semibold mt-5 mb-4 text-[#777]">
                      Change Description
                    </div>
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

                    <div className="flex flex-row justify-end w-full mt-8">
                      <Button
                        variant="contained"
                        type="submit"
                        className="!text-sm !rounded-lg !bg-[#F57059] !text-white !font-semibold !py-4 !px-10"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            method="POST"
            action="#"
            entype="multipart/form-data"
          >
            <div className="w-full justify-center mt-4">
              <div className="flex flex-col mx-7 justify-center">
                <div className="flex flex-row border-b justify-start w-full">
                  <div className="flex items-center justify-between font-semibold w-full">
                    <span className="text-[25px] font-[800] mb-2">
                      Security
                    </span>
                  </div>
                </div>
                {isLoading["security"] && (
                  <Box className="text-[#F57059]" sx={{ width: "100%" }}>
                    <LinearProgress color="inherit" />
                  </Box>
                )}

                {error["security"].length > 0 && (
                  <Alert severity="error">{error["security"]}</Alert>
                )}

                <div className="font-semibold mt-5 mb-4 text-[#777]">
                  Change Password
                </div>
                <div className="rounded-md">
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
                </div>
                <div className="flex flex-row justify-end w-full mt-8">
                  <Button
                    variant="contained"
                    type="submit"
                    className="!text-sm !rounded-lg !bg-[#F57059] !text-white !font-semibold !py-4 !px-10"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashSettings;
