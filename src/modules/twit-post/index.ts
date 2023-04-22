import twit from 'twit';
import { twConfig } from '../../config/config';
import { IUploadMediaResponse } from './types';

export class TwitPost {
  private twit: twit;
  constructor() {
    this.twit = new twit(twConfig);
  }

  private async uploadImage(b64content: string): Promise<string> {
    console.log('Uploading image...');
    return new Promise<string>((resolve, reject) => {
      this.twit.post('media/upload', { media_data: b64content }, (err, data, response) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const mediaId = data as IUploadMediaResponse;
          console.log('Image uploaded!');
          console.log(`Media ID: ${mediaId}`);
          resolve(mediaId.media_id_string);
        }
      });
    });
  }

  public async postTweet(caption: string): Promise<void> {
    console.log('Posting tweet...');
    this.twit.post('statuses/update', { status: caption }, (err, data, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Tweet posted!');
      }
    });
  }

  public async postTweetWithImage(b64content: string, caption: string): Promise<void> {
    console.log('Posting tweet...');
    const mediaId = await this.uploadImage(b64content);
    this.twit.post('statuses/update', { status: caption, media_ids: [mediaId] }, (err, data, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Tweet posted!');
      }
    });
  }
}


