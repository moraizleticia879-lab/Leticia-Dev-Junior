// COLOQUE AQUI O WHATSAPP DA ALICERCE BROWNIES
// Exemplo: 5582999999999 (55 + DDD + número, sem espaços)
const WHATSAPP = "5582999999999";

const button = document.getElementById("whatsapp");
if (WHATSAPP && WHATSAPP !== "5582999999999") {
  const text = encodeURIComponent(
    "Olá! Vim pelo cardápio digital da Alicerce Brownies e gostaria de fazer um pedido. 🍫"
  );
  button.href = `https://wa.me/${WHATSAPP}?text=${text}`;
} else {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Abra o arquivo script.js e coloque o número do WhatsApp da Alicerce Brownies.");
  });
}
