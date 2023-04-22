import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';
import { gptConfig } from '../../config/config';

// class to create axios conections
export class Api {
  private static instance: Api;
  private axios: any;

  private constructor() {
    this.axios = axios.create({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${gptConfig.apiKey}`,
      },
    });
  }

  public static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  public get(url: string, headers?: AxiosRequestHeaders): Promise<AxiosResponse> {
    return this.axios.get(url, { headers });
  }

  public post(url: string, data: any, headers?: AxiosRequestHeaders): Promise<AxiosResponse> {
    return this.axios.post(url, data, { headers });
  }
}