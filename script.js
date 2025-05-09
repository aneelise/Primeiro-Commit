function alternarTema() {
    const body = document.body;
    const titulo = document.getElementById("titulo");
    const botao = document.querySelector(".modo");
  
    body.classList.toggle("dark");
  
    if (body.classList.contains("dark")) {
      titulo.innerText = "Modo Escuro";
      botao.innerText = "Alternar para Claro";
    } else {
      titulo.innerText = "Modo Claro";
      botao.innerText = "Alternar Tema";
    }
  }
  
  function validarLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    if (usuario === "" || senha === "") {
      alert("Preencha todos os campos.");
      return;
    }
  
    if (usuario === "admin" && senha === "1234") {
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha incorretos.");
    }
  }
  
  
  const inputNome = document.getElementById("nomeInput");
  const mensagem = document.getElementById("mensagem");
  
  function exibirMensagem() {
    const nome = inputNome.value;
    mensagem.innerText = nome === "" ? "" : `Olá, ${nome}!`;
  }
  
  inputNome.addEventListener("input", exibirMensagem);
  