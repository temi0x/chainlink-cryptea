import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { BsBoxArrowInDownLeft, BsArrowRight } from "react-icons/bs";
import {
  TextField,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
const DashHome = () => {
  const balance = [{ amt: 2400 }, { amt: 500 }, { amt: 1400 }, { amt: 3000 }];
  const received = [{ amt: 2400 }, { amt: 500 }, { amt: 1400 }, { amt: 3000 }];

  const [previous, current] = [
    balance[balance.length - 2].amt,
    balance[balance.length - 1].amt,
  ];
  const change = ((current - previous) / previous) * 100;

  const [rprevious, rcurrent] = [
    received[received.length - 2].amt,
    received[received.length - 1].amt,
  ];
  const rchange = ((rcurrent - rprevious) / rprevious) * 100;

  const columns = [
    { id: "name", label: "Token", minWidth: 170 },
    { id: "code", label: "Symbol", minWidth: 50 },
    {
      id: "price",
      label: "Label Price",
      minWidth: 150,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "change",
      label: "24H change",
      minWidth: 100,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 100,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const rows = [
    {
      name: "Binance",
      code: "BNB",
      price: "$1354",
      change: 263,
      amount: "$220",
    },
    {
      name: "Bitcoin",
      code: "BTC",
      price: "$140365",
      change: 9596961,
      amount: "$334",
    },
    {
      name: "Ethereum",
      code: "ETH",
      price: "$3973",
      change: 301340,
      amount: "$100",
    },
    {
      name: "Luna",
      code: "LUNA",
      price: "$0.001",
      change: 9833520,
      amount: "$100",
    },
    {
      name: "Cordano",
      code: "ADA",
      price: "$332",
      change: 9984670,
      amount: "$100",
    },
    {
      name: "NFT",
      code: "",
      price: "20 - 10,000",
      change: 7692024,
      amount: "$100",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="dashbody h-[calc(100%-75px)] flex px-5 pb-5">
      <div className="mr-[20px] h-full pb-1 pt-5 pr-2 w-full cusscroller overflow-y-scroll">
        <svg
          style={{
            width: 0,
            height: 0,
            position: "absolute",
          }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient id="green" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="30%" stopColor="rgba(83, 210, 87, 0.6)" />
            <stop offset="70%" stopColor="rgba(83, 210, 87, 0.3)" />
            <stop offset="100%" stopColor="rgba(83, 210, 87, 0.01)" />
          </linearGradient>
        </svg>

        <svg
          style={{
            width: 0,
            height: 0,
            position: "absolute",
          }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient id="red" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="30%" stopColor="rgba(124, 36, 36, 0.6)" />
            <stop offset="70%" stopColor="rgba(124, 36, 36, 0.3)" />
            <stop offset="100%" stopColor="rgba(124, 36, 36, 0.01)" />
          </linearGradient>
        </svg>
        <div className="w-full flex overflow-y-hidden overflow-x-scroll pb-[11px] cusscroller">
          <div className="w-[227px] mr-7 p-3 bg-[#F57059] rounded-[4px] flex justify-between flex-col h-[138px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white w-[32px] mr-3 h-[32px] rounded-[50%] flex items-center justify-center">
                  <FaWallet className="text-[#F57059]" size={15} />
                </div>
                <span className="text-white">Balance</span>
              </div>

              <div className="w-[40px] h-[40px]">
                <ResponsiveContainer height="100%" width="100%">
                  <AreaChart width={400} height={400} data={balance}>
                    <Area
                      type="monotone"
                      dataKey="amt"
                      strokeWidth={3}
                      fill={`url(#${change > 0 ? "green" : "red"}) transparent`}
                      stroke={change > 0 ? "#53D258" : "#7c2424"}
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="w-full">
              <span className="block text-white font-bold text-[15px]">
                ${balance.pop().amt}
              </span>
              <span
                style={{
                  color: change > 0 ? "#53D258" : "#7c2424",
                }}
                className={`block text-[13px]`}
              >
                {change > 0 ? "+" + change.toFixed(2) : change.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="w-[227px] p-3 bg-transparent border-solid border-[1px] rounded-[4px] flex justify-between flex-col h-[138px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-[#D0DBFF] w-[32px] mr-3 h-[32px] rounded-[50%] flex items-center justify-center">
                  <BsBoxArrowInDownLeft className="text-[#F57059]" size={15} />
                </div>
                <span className="text-black">Received</span>
              </div>

              <div className="w-[40px] h-[40px]">
                <ResponsiveContainer height="100%" width="100%">
                  <AreaChart width={400} height={400} data={received}>
                    <Area
                      type="monotone"
                      dataKey="amt"
                      strokeWidth={3}
                      fill={`url(#${
                        rchange > 0 ? "green" : "red"
                      }) transparent`}
                      stroke={change > 0 ? "#53D258" : "#7c2424"}
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="w-full">
              <span className="block text-black font-bold text-[15px]">
                ${received.pop().amt}
              </span>
              <span
                style={{
                  color: rchange > 0 ? "#53D258" : "#7c2424",
                }}
                className={`block text-[13px]`}
              >
                {rchange > 0 ? "+" + rchange.toFixed(2) : rchange.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 border-solid border-[1px] border-[#e3e3e3]">
          <div className="py-[10px]">
            <h2 className="text-[16px] font-bold text-bold">Portfolio</h2>
          </div>
          <TableContainer sx={{ maxHeight: "auto" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="border-b-solid"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              className="!border-[0px] !border-none"
                              key={column.id}
                              align={column.align}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>

      <div className="min-w-[337px] pt-5 h-full">
        <div className="px-4 pt-3 pb-5 mb-10 bg-white border-[1px] border-solid border-[#E3E3E3] rounded-[4px]">
          <h2 className="text-[18px] font-bold text-bold pb-[10px]">
            Quick Transfer
          </h2>
          <div className="py-2">
            <TextField
              label={"Amount"}
              fullWidth
              className="amount"
              id="Amount"
            />
          </div>
          <div className="py-2">
            <TextField
              label={"Account/Address"}
              fullWidth
              className="account"
              id="account"
            />
          </div>
          <div className="py-2 flex justify-center">
            <Button
              variant="contained"
              className="!bg-[#F57059] !py-[13px] !font-medium !capitalize"
              style={{
                fontFamily: "inherit",
              }}
              fullWidth
            >
              Transfer <BsArrowRight className="ml-3 font-medium" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
