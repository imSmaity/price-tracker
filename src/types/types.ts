export interface CryptoData {
  id: number;
  market_cap: number;
  market_cap_diluted: number;
  liquidity: number;
  price: number;
  off_chain_volume: number;
  volume: number;
  volume_change_24h: number;
  volume_7d: number;
  is_listed: boolean;
  price_change_24h: number;
  price_change_1h: number;
  price_change_7d: number;
  price_change_1m: number;
  price_change_1y: number;
  ath: number;
  atl: number;
  name: string;
  symbol: string;
  logo: string;
  rank: number;
  contracts: Contract[];
  total_supply: string;
  circulating_supply: string;
  decimals: number;
  priceNative: number;
  native: NativeToken;
}

export interface Contract {
  address: string;
  blockchain: string;
  blockchainId: string;
  decimals: number;
}

export interface NativeToken {
  name: string;
  address: string;
  decimals: number;
  symbol: string;
  type: string;
  logo: string;
  id: number;
}

export type TRange = {
  from: string | number;
  to: string | number;
  label: string;
  dataLimit?: number;
};
