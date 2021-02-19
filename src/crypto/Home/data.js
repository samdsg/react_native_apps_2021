
import { Bitcoin, Eth, Dash, Lite, Tether } from "../../../assets/images";

export const coinData = [
  {
    id: 1,
    portfolio: true,
    name: {
      coinName: "Bitcoin",
      shortname: "BTC",
    },
    price: {
      currentPrice: "$5,000",
      percentage: 20,
    },
    holding: {
      price: "$50, 000",
      total: 10,
    },
    image: Bitcoin,
  },
  {
    id: 2,
    portfolio: true,
    name: {
      coinName: "Ethereum",
      shortname: "ETH",
    },
    price: {
      currentPrice: "$2,000",
      percentage: 2.9,
    },
    holding: {
      price: "$1,000",
      total: 5,
    },
    image: Eth,
  },
  {
    id: 3,
    portfolio: false,
    name: {
      coinName: "Litecoin",
      shortname: "LTC",
    },
    price: {
      currentPrice: "$71.88",
      percentage: 0.20123493,
    },
    holding: {
      price: "0",
      total: 0,
    },
    image: Lite,
  },
  {
    id: 4,
    portfolio: true,
    name: {
      coinName: "Dash",
      shortname: "DASH",
    },
    price: {
      currentPrice: "$200.1",
      percentage: 2.33,
    },
    holding: {
      price: "$400",
      total: 2,
    },
    image: Dash,
  },
  {
    id: 4,
    portfolio: true,
    name: {
      coinName: "Tether",
      shortname: "USDT",
    },
    price: {
      currentPrice: "$5",
      percentage: 0.3242345,
    },
    holding: {
      price: "$5",
      total: 5,
    },
    image: Tether,
  },
];
