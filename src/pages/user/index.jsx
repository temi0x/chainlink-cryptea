import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Loader from "../../components/loader";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useMoralis, useMoralisQuery } from "react-moralis";

import img from "../../assets/img/art.png";

import { useState, useEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Polygon", "Avalanche", "Ethereum", "Binance Smart Chain"];

function getStyles(name, blockchainName, theme) {
  return {
    fontWeight:
      blockchainName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function UserPage() {
  const { user, Moralis } = useMoralis();

  const { username } = useParams();
  const { description } = useParams();

  const { fetch } = useMoralisQuery(
    "_User",
    (query) => query.equalTo("username", username),
    [],
    { autoFetch: false },
    "Description",
    (query) => query.equalTo("description", description),
    [],
    { autoFetch: false }
  );

  const [userD, setUserD] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch().then((er) => {
      setUserD(er[0]);
      setIsLoading(false);
    });
  }, []);

  // let userDescription;

  // if (!isLoading) {
  //   userDescription = userD.attributes.description;
  // }
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setBlockchainName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const theme = useTheme();
  const [blockchainName, setBlockchainName] = useState([]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-full bg-white">
          <div className="mx-[calc(100%/12)] rounded-lg bg-gray-100 h-full flex flex-col">
            <div className="img h-20 overflow-hidden rounded-t-lg">
              <img src={img} className="h-auto w-auto " alt="Pay user" />
            </div>
            <div className="flex flex-row">
              <div className=" w-3/5 px-8">
                <div className="title text-2xl font-semibold mt-8">
                  Send some Tea money to {username}
                </div>
                <div className="text-xl font-medium mt-5">
                  {description}
                </div>
              </div>
              <div className="w-2/5 px-6 my-8 justify-items-center">
                <div className="border rounded-lg border-[#F57059] bg-white shadow-sm shadow-[#F57059]">
                  <div className="border-b pl-4 pt-4 text-lg font-semibold">
                    Pay Now
                  </div>
                  <div className="form pt-4">
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                        }}
                      >
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          fullWidth
                          aria-label="basic tabs example"
                        >
                          <Tab label="One Time" {...a11yProps(0)} />
                          <Tab label="Monthly" {...a11yProps(1)} />
                          <Tab label="Annually" {...a11yProps(2)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value} index={0}>
                        <FormControl>
                          <Select
                            displayEmpty
                            fullWidth
                            value={blockchainName}
                            onChange={handleSelectChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return <em>Select Blockchain</em>;
                              }

                              return selected.join(", ");
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem disabled value="">
                              <em>Select Blockchain</em>
                            </MenuItem>
                            {names.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, blockchainName, theme)}
                              >
                                {name}
                              </MenuItem>
                            ))}
                          </Select>

                          <FormLabel
                            sx={{ mt: 3 }}
                            id="demo-row-radio-buttons-group-label"
                          >
                            Amount
                          </FormLabel>
                          <RadioGroup
                            fullWidth
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="0.1"
                              control={<Radio />}
                              label="0.1"
                            />
                            <FormControlLabel
                              value="1"
                              control={<Radio />}
                              label="1"
                            />
                            <FormControlLabel
                              value="10"
                              control={<Radio />}
                              label="10"
                            />
                            <FormControlLabel
                              value="100"
                              control={<Radio />}
                              label="100"
                            />
                          </RadioGroup>
                          <div className="py-3">Or input Price manually</div>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Input Price"
                            variant="outlined"
                            // value={price}
                          />
                          <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                            Pay
                          </Button>
                        </FormControl>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        Item Two
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        Item Three
                      </TabPanel>
                    </Box>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;
