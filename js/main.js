/* ==========================================================================
   FAITH MUSIC — interações globais
   Mantém o JavaScript pequeno: menu móvel, ano do rodapé e formulário WhatsApp.
   ========================================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano sem precisar editar manualmente o rodapé todo janeiro.
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Menu responsivo: abre/fecha no celular e sincroniza acessibilidade.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu após selecionar um destino.
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      });
    });

    // Se a tela voltar ao tamanho desktop, remove o estado de menu móvel.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      }
    });
  }

  // O formulário não armazena nem transmite dados para um servidor.
  // Ele prepara a mensagem e abre o WhatsApp para o usuário revisar e enviar.
  const contactForm = document.querySelector("#whatsapp-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get("nome") || "").trim();
      const interest = String(formData.get("interesse") || "").trim();
      const age = String(formData.get("idade") || "").trim();
      const message = String(formData.get("mensagem") || "").trim();

      if (!name || !interest) {
        window.alert("Preencha seu nome e selecione uma modalidade.");
        return;
      }

      const lines = [
        "Olá! Vim pelo site da Faith Music.",
        "",
        `Meu nome: ${name}`,
        `Tenho interesse em: ${interest}`,
      ];

      if (age) lines.push(`Idade do aluno: ${age}`);
      if (message) lines.push(`Mensagem: ${message}`);

      const whatsappNumber = "5511956408774";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }
});
