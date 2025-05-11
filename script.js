// Função que será chamada ao clicar no botão "Alterar tema"
function alternarTema() {
    const body = document.body; // Seleciona o <body> da página
    const titulo = document.getElementById("titulo");  //cria uma variavel para selecionar o <h1> com id=titulo
    const botao = document.querySelector(".modo"); //seleciona o <button>
  
    // Alterna a classe "dark" no body
    // Se já tiver, remove; se não tiver, adiciona
    body.classList.toggle("dark");
  
    if (body.classList.contains("dark")) { // Verifica se o body agora contém a classe "dark"
      titulo.innerText = "Modo Escuro"; //troca as frases e se estiver no modo escuro, atualiza os textos
      botao.innerText = "Alternar para Claro";
    } else {
      titulo.innerText = "Modo Claro"; // Se não estiver no modo escuro, volta pro padrão
      botao.innerText = "Alternar Tema";
    }
  }
  
  //Funçāo que sera chamada para validar o login ao clicar no botao "Login"
  function validarLogin() { 
    const usuario = document.getElementById("usuario").value; //pega o id do usuario e cria uma variavel
    const senha = document.getElementById("senha").value;
    const mensagemLogin = document.getElementById("mensagemLogin");
  
    if (usuario === "" || senha === "") { 
      mensagemLogin.innerText = "Preencha todos os campos.";

    }
  
    if (usuario === "admin" && senha === "1234") { //valida se o login for admin e senha1234 ele mostra "Login bem-sucedido!"
      mensagemLogin.innerText = "Login bem-sucedido!"; //valida a variavel mensagemlogin e troca a mnsagem para "login bem-sucedido"
      mensagemLogin.style.color = "#00cc66"; // verde
    } else {
      mensagemLogin.innerText = "Usuário ou senha incorretos."; //valida a variavel e troca a mensagem por "usuario ou senha incorretos"
      mensagemLogin.style.color = "#ff5050"; // vermelho
    }
  }
  

  const inputNome = document.getElementById("nomeInput"); // Aqui tá pegando o elemento do input (onde a pessoa digita o nome) usando o ID nomeInput.
  const mensagem = document.getElementById("mensagem"); //Pegou a tag <p> ou qualquer outro elemento onde vai exibir o texto “Olá, nome!”.
  
  function exibirMensagem() {
    const nome = inputNome.value; // Pega o valor digitado no input
    mensagem.innerText = nome === "" ? "" : `Olá, ${nome}!`; // Se o nome for vazio, limpa a mensagem; senão, exibe "Olá, [nome]!"
  }
  
  inputNome.addEventListener("input", exibirMensagem);
  // Adiciona um ouvinte de evento que chama exibirMensagem sempre que o input mudar
  //Esse addEventListener escuta o evento de digitação, não precisa clicar — ele já ouve tudo o que a pessoa digita em tempo real.

  