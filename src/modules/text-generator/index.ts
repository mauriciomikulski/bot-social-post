import { gptConfig } from "../../config/config";
import { Api } from "../../config/api";
import { ITextGenerator } from "./types";

export class TextGenerator {
  private api: Api;
  private config: ITextGenerator;

  constructor() {
    this.api = Api.getInstance();
    this.config = {
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      messages: [
        {
          role: "user",
          content: "",
        }
      ],
    };
  }

  public async generateText(prompt: string): Promise<string> {
    console.log('Generating text...');
    try {
      this.config.messages[0].content = prompt;
      const { data } = await this.api.post(gptConfig.msgApiUrl, this.config);
      console.log('Text generated!');
      return data.choices[0].message.content;
    } catch (error) {
     console.log('Error:', error);
      throw error;
    }
  }
}