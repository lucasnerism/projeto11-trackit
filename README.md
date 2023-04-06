# **[TrackIt](https://github.com/lucasnerism/track-it/)**

Essa é uma aplicação completa de acompanhamento de hábitos! Com cadastro e login.

Cada passo do desenvolvimento do projeto foi _versionada_ no`GitHub`. Vocês podem acompanhar o processo nos`commits`no [repositório do projeto](https://github.com/lucasnerism/track-it).

[> O projeto pode ser acessado online aqui <](https://projeto11-trackit-lucasnerism.vercel.app/)

Esse projeto foi feito utilizando **React** e algumas bibliotecas.
Para executar esse projeto localmente você precisa ter o [NPM](https://www.npmjs.com/) instalado, então em um terminal na pasta do projeto digite `"npm install"`

## Este projeto é sobre

- `Componentização`
- `Utilização de estados`
- `Utilização de contexto`
- `Styled-components`

## ✅ Requisitos Obrigatórios

<details open>
<summary>Versionamento do código</summary>

+ Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub.
+ Faça _commits_ a cada funcionalidade implementada.
</details>

<details open>
<summary> Tela Login (rota `/`)</summary>

+ O email e senha são enviados para a API conforme documentação.
+ Enquanto estiver carregando, os campos e o botão são desabilitados.
+ Em caso de sucesso, o usuário é redirecionado para a rota `/hoje`.
+ Em caso de falha, é exibido um `alert` informando o erro para o usuário e os campos/botão são reabilitados novamente.
+ Ao clicar no link para se cadastrar, o usuário é redirecionado para a rota `/cadastro`.
</details>

<details open>
<summary>Tela Cadastro (rota `/cadastro`)</summary>

+ Enquanto estiver carregando, os campos e o botão são desabilitados.
+ Em caso de sucesso, o usuário é redirecionado para a rota `/` (rota de login).
+ Em caso de falha, é exibido um `alert` informando o erro para o usuário e os campos/botão são reabilitados novamente.
+ Ao clicar no link para logar, o usuário é redirecionado para a rota `/` (rota de login).
</details>

<details open>
 <summary>Topo e Menu</summary>

 + Topo e menu tem posicionamento fixo.
 + No menu, os 3 botões de Hábitos, Hoje e Histórico redirecionam o usuário para as rotas `/habitos`, `/hoje` e `/historico` respectivamente
 + O botão de Hoje exibe uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário. 
 </details>

<details open>
<summary>Tela Hábitos (rota `/habitos`)</summary>

+ Ao clicar para deletar um hábito, é exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o hábito. Se sim, é enviado um request pra API conforme documentação e os hábitos são recarregados logo em seguida.
+ Caso o usuário não tenha nenhum hábito cadastrado, é exibido um texto com essa informação.
+ Ao clicar no botão de "+", é exibido um formulário de cadastro de hábito logo abaixo do título.
+ O usuário insere o nome do hábito em um campo de texto e seleciona os dias da semana que deseja realizar o hábito.
+ Ao salvar, os dados são enviados para API conforme documentação
+ Enquanto estiver carregando, o campo de texto e o botão são desabilitados.
+ Em caso de sucesso, os campos são limpos e reabilitados, o formulário é escondido novamente e a lista de hábitos abaixo recarregada.
+ Em caso de erro, os campos são reabilitados e um alerta deve indicar o problema para o usuário.
+ Ao Cancelar, o formulário é escondido. Caso tenha dados já preenchidos, os mesmos são mantidos caso o usuário reabra o formulário de criação.
</details>

<details open>
<summary>Tela Hábitos (rota `/habitos`)</summary>

+ Ao clicar para deletar um hábito, é exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o hábito. Se sim, é enviado um request pra API conforme documentação e os hábitos são recarregados logo em seguida.
+ Caso o usuário não tenha nenhum hábito cadastrado, é exibido um texto com essa informação.
+ Ao clicar no botão de "+", é exibido um formulário de cadastro de hábito logo abaixo do título.
+ O usuário insere o nome do hábito em um campo de texto e seleciona os dias da semana que deseja realizar o hábito.
+ Ao salvar, os dados são enviados para API conforme documentação
+ Enquanto estiver carregando, o campo de texto e o botão são desabilitados.
+ Em caso de sucesso, os campos são limpos e reabilitados, o formulário é escondido novamente e a lista de hábitos abaixo recarregada.
+ Em caso de erro, os campos são reabilitados e um alerta deve indicar o problema para o usuário.
+ Ao Cancelar, o formulário é escondido. Caso tenha dados já preenchidos, os mesmos são mantidos caso o usuário reabra o formulário de criação.
</details>

<details open>
<summary>Tela Hoje (rota `/hoje`)</summary>

+ Carrega os hábitos de hoje do usuário.
+ O título da tela exibe o dia de hoje.    
+ No subtítulo é exibida a frase "Nenhum hábito concluído ainda" ou "x% dos hábitos concluídos", dependendo do progresso do usuário.
+ Ao marcar ou desmarcar um hábito como concluído, é enviado um request pra API conforme documentação.
+ Ao marcar um hábito como concluído, é colocada em verde a contagem da **sequência atual**.
+ Caso a sequência atual seja **igual ao recorde do usuário e maior que zero**, este também é exibido em verde.
</details>

## ✅ Requisitos Bônus
<details open>
<summary>Persistência de Login</summary>

+ Após o login, o objeto do usuário é salvo na máquina utilizando **Local Storage**.
+ Ao abrir o app, se há um usuário armazenado no Local Storage redirecione o usuário direto para a tela inicial do app, evitando que ele faça login novamente.
</details>

<details open>
<summary>Tela Histórico `/historico`</summary>

+ Nesta tela deve é exibido um calendário.    
+ No calendário, é exibido em verde os dias em que o usuário completou todos os hábitos que deveria ter completado.    
+ Já os dias que o usuário tinha hábitos para completar, porém não completou todos, são destacados em vermelho.
</details>

<details open>
<summary>Clique no dia</summary>

+ No calendário da tela de Histórico, quando o usuário clicar em um dia em destaque (verde ou vermelho), é exibida a lista de hábitos do dia clicado, indicando quais hábitos ele concluiu ou não.
</details>

