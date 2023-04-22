type ITextGenerator = {
  model: string;
  max_tokens: number;
  messages: [{
    role: string;
    content: string;
  }]
};

export { ITextGenerator }