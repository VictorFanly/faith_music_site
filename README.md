# Faith Music — site institucional e landing page

Projeto estático, responsivo e sem dependência de framework. Inclui página inicial de conversão e páginas auxiliares.

## Estrutura

```text
faith_music_site/
├── index.html                 # Landing page principal
├── cursos.html                # Modalidades e descrições editáveis
├── sobre.html                 # Apresentação institucional
├── contato.html               # Contato + formulário que prepara WhatsApp
├── privacidade.html           # Modelo inicial de política de privacidade
├── css/
│   └── styles.css             # Estilos compartilhados e responsivos
├── js/
│   └── main.js                # Menu móvel, ano e formulário WhatsApp
└── assets/
    ├── faith-music-logo.png       # Logo original fornecida
    └── faith-music-logo-web.png   # Cópia otimizada usada no site
```

## Como visualizar

1. Extraia o ZIP mantendo a estrutura das pastas.
2. Abra `index.html` no navegador.
3. Para testar o formulário, abra `contato.html` e envie os campos; o navegador abrirá o WhatsApp com o texto preparado.
4. Para publicar, envie todos os arquivos mantendo a estrutura para uma hospedagem estática (GitHub Pages, Netlify, Vercel ou hospedagem tradicional).

Não há backend, banco de dados ou instalação de dependências. A fonte do Google Fonts requer conexão com a internet; o site usa fontes alternativas se elas não carregarem.

## WhatsApp configurado

Número internacional utilizado em todos os links: `5511956408774` (Brasil + DDD 11 + número). Os textos dos links estão codificados para URL.

## Onde editar

- **Textos e seções da página inicial:** `index.html`.
- **Modalidades, descrições, disponibilidade e âncoras:** `cursos.html`.
- **História real, equipe, missão e diferenciais:** `sobre.html`.
- **Endereço, horários, dados de contato e formulário:** `contato.html`.
- **Cores, tipografia, espaçamento e responsividade:** início de `css/styles.css`, na seção `:root`.
- **Comportamentos do menu e formulário:** `js/main.js`.
- **Logotipo:** substitua `assets/faith-music-logo-web.png` (e mantenha o nome) para trocar a imagem usada no site. O arquivo original foi mantido separadamente.

## Pontos a completar antes da publicação

- Endereço e cidade da escola, horários de funcionamento e redes sociais oficiais.
- Valores, planos, duração das aulas, formato (presencial/online), horários e disponibilidade real por modalidade.
- História, equipe, qualificação dos professores e depoimentos autorizados.
- Faixa etária da musicalização infantil e quais recursos de educação inclusiva a escola efetivamente consegue oferecer.
- Revisar a página de privacidade com os dados reais da escola e as ferramentas que forem adicionadas.
- Considerar adicionar imagens reais da escola, professores e aulas com autorização das pessoas retratadas.

## Observações técnicas

- HTML semântico, navegação por teclado, link para pular ao conteúdo e estados acessíveis no menu.
- Layout responsivo para desktop, tablet e celular.
- Formulário de contato sem armazenamento: monta a mensagem no navegador e abre `wa.me`.
- O site não contém integração de pagamento, área de aluno, cadastro, agendamento ou envio de e-mail. Esses recursos exigem serviços ou backend adicionais.
