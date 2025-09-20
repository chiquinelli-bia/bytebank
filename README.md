![Thumbnail do projeto. O título é "ByteBank: trabalhando com threads para requisições simultâneas" e o subtítulo é "adaptado por Bianca Chiquinelli".](Front-end-ByteBank_%20trabalhando%20com%20threads%20para%20requisições%20simultâneas.png)

# ByteBank

**Descrição:**

Projeto realizado durante o curso "JavaScript: trabalhando com threads para requisições simultâneas" ministrado por Mônica Mazzochi Hillman. Este repositório apresenta **minhas contribuições específicas** para o projeto.

**ByteBank** página de cotações de moedas em tempo real.
A aplicação exibe variações do dólar, iene e euro de forma dinâmica, com gráficos interativos e listas que mostram oscilações e diferentes valores de referência (1, 10 e 100 unidades).

Com integração de Axios e Chart.js, o projeto reforça boas práticas de visualização de dados e manipulação de APIs. Também aplica conceitos de assincronicidade, paralelismo e threads, resultando em uma aplicação responsiva, escalável e de alto desempenho.

## Minhas Contribuições

- **Visualização de Dados:** Estruturei o front-end com _Chart.js,_ exibindo cotações em gráficos claros e dinâmicos
- **Atualizações em tempo real:** Desenvolvi funções como horario() e atualizaGrafico(), mantendo os gráficos sempre atualizados.
- **Exibição de Moedas:** Criei imprimeCotacao() e a versão escalável cotacao(), organizando diferentes moedas em listas com tratamento correto de plurais.
- **Assincronicidade:** Apliquei conceitos de _call stack, task queue_ e _event loop_ para controlar o processamento e garantir responsividade.
- **Paralelismo e Performance:** Implementei _multithreads_ com _Workers,_ para consultas simultâneas à API via _Axios_ para melhor desempenho.
- **Estrutura e Escalabilidade:** Usei _Vite_ para inicialização rápida, suporte a módulos ES e build otimizado, além de refatorar caminhos de arquivos e imagens para manutenção e escalabilidade.

![Demonstração do ByteBank: Tela de painel financeiro exibindo gráficos de variação de cotações de moedas e horário da variação, atualizando a cada 5 segundos. À direita uma lista de conversão da moeda para real. A barra lateral esquerda apresenta opções de navegação e um avatar. O tom é informativo.](https://i.imgur.com/1AWAZmD.png)

## Tecnologias Utilizadas

- HTML5
- JavaScript (ES6+)
- Web Workers
- Vite
- Axios
- Chart.js

⚙️ Técnicas:

- `Visualização de Dados:` integração com Chart.js para gráficos confiáveis e dinâmicos.
- `Requisições Assíncronas:` Uso do Axios para consumir dados de API em tempo real, garantindo atualização rápida e sem travamentos.
- `Controle de Assincronicidade:` Aplicação prática de async/await, setInterval() e Date().
- `Paralelismo com Workers:` Implementação de Web Workers para executar multithreads, para consultas concorrentes sem perda de performance.
- `Organização de Código:` Criação de funções auxiliares (horario(), atualizaGrafico(), cotacao()) para reuso e manutenção.
- `Escalabilidade:` Configuração com Vite, aproveitando inicialização rápida, suporte nativo a módulos ES e estrutura otimizada para evolução do projeto.

## Como Ter Acesso ao Projeto

- **Versão online**: [Clique aqui](https://bytebank-flax.vercel.app/)
- **Rodar localmente**:

1. Clone este repositório:

   ```bash
   git clone https://github.com/chiquinelli-bia/bytebank.git

   ```

2. Acesse a pasta do projeto:

   ```bash
   cd bytebank

   ```

3. Instale as dependências:

   ```bash
   npm install

   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev

   ```

5. Abra no navegador o endereço exibido no terminal e Navegue pelas funcionalidades implementadas.
## Créditos

- Projeto original: ![Acesse aqui.](https://github.com/alura-cursos/bytebank-javascript/tree/main)
- Instrutor(es) e curso: Mônica Mazzochi Hillman, ![JavaScript: threads e requisições simultâneas](https://cursos.alura.com.br/course/javascript-threads-requisicoes-simultaneas)
- Este repositório destaca **apenas minhas contribuições** ao projeto.
