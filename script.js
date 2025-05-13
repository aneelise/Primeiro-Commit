// Função para alternar o tema
function alternarTema() {
  const body = document.body;

  // Verifica se o tema escuro já está ativado
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("tema", "claro"); // Armazena a preferência
  } else {
    body.classList.add("dark");
    localStorage.setItem("tema", "escuro"); // Armazena a preferência
  }
}

// Ao carregar a página, aplica o tema armazenado
window.onload = () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

  
  //Funçāo que sera chamada para validar o login ao clicar no botao "Login"
  function validarLogin() { 
    const usuario = document.getElementById("usuario").value; //pega o id do usuario e cria uma variavel
    const senha = document.getElementById("senha").value;
    const mensagemLogin = document.getElementById("mensagemLogin");
  
    if (usuario === "" || senha === "") { 
      mensagemLogin.innerText = "Preencha todos os campos.";
      return;
    }
  
    if (usuario === "admin" && senha === "1234") { //valida se o login for admin e senha1234 ele mostra "Login bem-sucedido!"
      mensagemLogin.innerText = "Login bem-sucedido!"; //valida a variavel mensagemlogin e troca a mnsagem para "login bem-sucedido"
      mensagemLogin.style.color = "#00cc66";

    } else {
      mensagemLogin.innerText = "Usuário ou senha incorretos."; //valida a variavel e troca a mensagem por "usuario ou senha incorretos"
      mensagemLogin.style.color = "#ff5050";
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

    function mostrarSenha() { //validacao para mostrar e ocultar a senha ao clicar no icone
    const inputSenha = document.getElementById("senha");
    const icone = document.getElementById("toggleSenha")

      if (inputSenha.type === "password") {
        inputSenha.type = "text" //está mudando o tipo do campo dinamicamente pra ele mostrar o que foi digitado.
        icone.classList.remove("bx-show");
        icone.classList.add("bx-hide");
     } else {
        inputSenha.type = "password";
        icone.classList.remove("bx-hide");
        icone.classList.add("bx-show");
  }
}




  