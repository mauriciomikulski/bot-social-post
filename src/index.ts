import { PromptManager } from "./modules/prompt-manager";
import { ImageConstructor } from "./modules/img-constuctor";
import { TextGenerator } from "./modules/text-generator";
import { TwitPost } from "./modules/twit-post";

class App {
  private promptManager: PromptManager;
  private imageConstructor: ImageConstructor;
  private textGenerator: TextGenerator;
  private twitPost: TwitPost;

  constructor() {
    this.promptManager = new PromptManager();
    this.imageConstructor = new ImageConstructor();
    this.textGenerator = new TextGenerator();
    this.twitPost = new TwitPost();
  }

  public async run(): Promise<void> {
    const prompt = await this.promptManager.receivePrompt();
    const image = await this.imageConstructor.generateImage(prompt);
    const caption = await this.textGenerator.generateText(prompt);
    await this.twitPost.postTweetWithImage(image, caption);
  }
}

const app = new App();
app.run();