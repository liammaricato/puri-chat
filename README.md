# PuriChat
Projeto base criado com React+Vite, fazendo requests pra um LLM local criado a partir do llama3 pra ter a personalidade do Puri, mascote da PuriTea! A PuriTea é um grupo independente de Vtubers brasileiro que faz muito sucesso.

O modelo foi criado usando o `Modelfile` presente. Para reproduzir localmente, tenha o **ollama** instalado e rode `ollama create puri -f ./Modelfile`, ou pelo script `npm run model-setup`, esse é o comando usado pra criar ou atualizar o modelo do Puri.

Com o modelo de pé, podemos instalar as dependências do projeto e rodar a aplicação:
```
npm i
npm run dev
```

> É possível acessar a aplicação localmente em: [http://localhost:5174/]

### Screenshot
![image](https://github.com/liammaricato/puri-chat/assets/55520434/a407f0be-f875-4d55-ae13-de5e2a1e13bb)
