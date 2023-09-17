// This code is for v4 of the openai package: npmjs.com/package/
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: "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",
});

const response = openai.chat.completions.create({
  model: "gpt-3.5-turbo-16k",
  messages: [
    {
      "role": "system",
      "content": "create a sidebar for react using material ui v4 that should contains multiple menus including home, contacts, deleted contacts, last update and profile"
    },
    {
      "role": "user",
      "content": "create a sidebar for react using material ui v4 that should contains multiple menus including home, contacts, deleted contacts, last update and profile"
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
response.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err);
})