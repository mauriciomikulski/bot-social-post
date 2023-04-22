import readline from 'readline';

export class PromptManager {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async receivePrompt(): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question('Enter your prompt: ', (prompt: string) => {
        resolve(prompt);
      });
    });
  }
}