// Função para alternar o tema dark
function alternarTema() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.documentElement.classList.add("dark");
  }
});

// Funçāo para validar login e verificar se o usuario esta colocando um e-mail valido
function validarLogin() {
  const email = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagemLogin = document.getElementById("mensagemLogin");
  

  mensagemLogin.className = "mensagem-feedback"; // limpa estilos anteriores

  // 1. Verifica se os campos estão vazios
  if (email === "" || senha === "") {
    mensagemLogin.innerText = "Preencha todos os campos.";
    mensagemLogin.classList.add("ativa", "erro");
    return;
  }

  // 2. Verifica se o e-mail tem um formato válido
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    mensagemLogin.innerText = "Digite um e-mail válido.";
    mensagemLogin.classList.add("ativa", "erro");
    return;
  }

  // 3. Se chegou aqui, considera login bem-sucedido
  mensagemLogin.innerText = `Login bem-sucedido!`;
  mensagemLogin.classList.add("ativa", "sucesso");
}

// Funçāo para exibir senha quando clicado no icone do password
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

// Funçāo para quando clicar no botāo "Esqueci a senha" abrir um tela para add o e-mail
      function abrirRecuperar() {
        document.getElementById("recuperarSenha").style.display = "flex"; //pega o ID recuperarSenha e faz o elemento ficar visivel o "flex" ativa o elemento usado no display flex no css e quando ele entra na tela aparece como um container flexivel podendo centralizar o conteudo
      }

      function fecharRecuperar() {
        document.getElementById("recuperarSenha").style.display = "none"; //pega o mesmo ID e cria uma nome funcao para quando fechar remover o elemento da tela. "none" é literalmente “não mostrar nada”
      }

      function enviarLink() {
        const email = document.getElementById("emailRecuperar").value; //o value pega o valor digitado pelo usuario
        const mensagem = document.getElementById("mensagemRecuperar");

        if (email === "") {
          mensagem.innerText = "Digite seu e-mail!";
          mensagem.style.color = "#ff5050";
          return;
        }

        mensagem.innerText = "Link enviado com sucesso!";
        mensagem.style.color = "#00cc66";
      }

      


  