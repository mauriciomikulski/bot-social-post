import fs from 'fs/promises';
import * as path from 'path';
import axios from 'axios';
import { gptConfig } from '../../config/config';
import { Api } from '../../config/api';
import { IImageConstructor } from './types';

export class ImageConstructor {
  private api: Api;
  private dir: string;
  private config: IImageConstructor;

  constructor(
    
  ) {
    this.api = Api.getInstance();
    this.dir = path.join(__dirname, 'images');
    this.config = {
      prompt: '',
      size: '1024x1024',
      response_format: 'url',
    };
  }

  public async generateImage(prompt: string): Promise<string> {
    console.log('Generating image...');
    this.config.prompt = prompt;
    const { data } = await this.api.post(gptConfig.imgApiUrl, this.config);
    const image = await axios.get(data.data[0].url, { responseType: 'arraybuffer' });
    await this.saveImage(image.data);
    const base64Image  = Buffer.from(image.data).toString('base64');
    return base64Image;
  }

  private async saveImage(image: Buffer): Promise<void> {
    const imagePath = path.join(this.dir, "..", "..", "..", "images", 'image.jpg');
    await fs.writeFile(imagePath, image);
    console.log('Image successfully generated!');
  }
  
}