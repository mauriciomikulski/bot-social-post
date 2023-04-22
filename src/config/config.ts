import dotenv from 'dotenv';
dotenv.config();

type TConfig = {
  imgApiUrl: string;
  msgApiUrl: string;
  apiKey: string;
};

type TTWConfig = {
  consumer_key: string;
  consumer_secret: string;
  access_token: string;
  access_token_secret: string;
};

const gptConfig: TConfig = {
  imgApiUrl: String(process.env.GPT_IMG_API_URL),
  msgApiUrl: String(process.env.GPT_MSG_API_URL),
  apiKey: String(process.env.GPT_API_KEY),
};

const twConfig: TTWConfig = {
  consumer_key: String(process.env.TWT_CONSUMER_KEY),
  consumer_secret: String(process.env.TWT_CONSUMER_SECRET),
  access_token: String(process.env.TWT_ACCESS_TOKEN),
  access_token_secret: String(process.env.TWT_ACCESS_TOKEN_SECRET),
};

export { gptConfig, twConfig };