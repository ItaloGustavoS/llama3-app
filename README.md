This is a [LlamaIndex](https://www.llamaindex.ai/) project using [Next.js](https://nextjs.org/) bootstrapped with [`create-llama`](https://github.com/run-llama/LlamaIndexTS/tree/main/packages/create-llama), using NextJs + NodeJs + Folder for Files to add context to the LLM.

Version 1.0 - All Working - 21/06/2024
Version 1.1 - Changed the context PDF to a Psicology Dictionary, updated the embedding model, updated the avatar of the bot, and added Telemetry, but is probably not working yet. Psicology Assistant Persona - 27/06/2024
Version 1.2 - Added new PDFs to context, Psicology Dictionary, ICD 10 and ICD 11, changed bot avatar, updated and improved the prompt instructions - 28/06/2024

## Getting Started

First, install the dependencies:

```
npm install
```

Second, generate the embeddings of the documents in the `./data` directory (if this folder exists - otherwise, skip this step):

```
npm run generate
```

Third, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about LlamaIndex, take a look at the following resources:

- [LlamaIndexTS Documentation](https://ts.llamaindex.ai) - learn about LlamaIndex (Typescript features).

You can check out [the LlamaIndexTS GitHub repository](https://github.com/run-llama/LlamaIndexTS) - your feedback and contributions are welcome!
