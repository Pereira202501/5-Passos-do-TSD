document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const mensagem = document.getElementById("loginMessage");

  if (email.trim() === "" || senha.trim() === "") {
    mensagem.textContent = "Preencha todos os campos.";
    mensagem.style.color = "red";
    return;
  }

  mensagem.textContent = "Login realizado com sucesso!";
  mensagem.style.color = "green";
  localStorage.setItem("usuarioLogado", "true");
  localStorage.setItem("emailUsuario", email);

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});
