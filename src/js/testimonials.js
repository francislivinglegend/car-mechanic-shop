/**
 * @file src/js/testimonials.js
 * @description This file contains functions to for Setting up Alerts.
 */

// Array of testimonial objects
const alertBoxesData = [
  {
    url: `https://g.co/kgs/soTXosC`,
    img: `pedro_martins.png`,
    name: `Pedro Martins`,
    body: `O Pedro e o Luís foram impecáveis. Eficazes a resolver o meu problema, fiquei esclarecido e satisfeito. Recomendo`,
  },
  {
    url: `https://g.co/kgs/CuhB3Lw`,
    img: `nuno_godinho.png`,
    name: `Nuno Godinho`,
    body: `O Luís e o Pedro são pessoas de confiança, explicam ao detalhe os problemas que o carro tem e o que é preciso para reparar. Recomendo a 100%!`,
  },
  {
    url: `https://g.co/kgs/c4WxtQT`,
    img: false,
    name: `Sofia de Palma Condeca`,
    body: `Oficina de confiança, qualidade de serviço e de materiais excelente!`,
  },
  {
    url: `https://g.co/kgs/dL35Vcu`,
    img: `carla_gomes.png`,
    name: `Carla Gomes`,
    body: `Serviço de primeira e de confiança. Recomendo totalmente.`,
  },
  {
    url: `https://maps.app.goo.gl/Kh5UKYhqnJr9vhy59`,
    img: `ana_senica.png`,
    name: `Ana Senica`,
    body: `Uma oficina com óptimos profissionais e rápidos na resposta ao cliente….faco as revisões ao meu carro todos os anos e o serviço é sempre excepcional`,
  },
]

const reviewerPics = import.meta.glob('../assets/media/reviewers/**/*', { eager: true });
import fallBackImg from '../assets/media/cc-logo.svg';

const aletBoxHtml = alertBoxesData.map((rv) => {
  const {
    url = '',
    img = '',
    name = '',
    body = ''
  } = rv;
  const coverImage = reviewerPics[`../assets/media/reviewers/${img}`]?.default || fallBackImg;
  const avatar = img
    ? `<img decoding="async" loading="lazy" width="26" height="26" src="${coverImage}" alt="Google Reviewer's Photo">`
    : `<i class='bx bx-user p-1 border rounded-circle'></i>`

  const output =
  `<li class="glide__slide h-auto">`+
      `<figure class="h-100">`+
        `<figcaption class="text-center text-md-start mb-2 fw-medium">`+
          `<a href="${url}" title="5 star Google Review" target="_blank" rel="nofollow">`+
            `${avatar} ${name} &#8212; <i class="bx bxl-google"></i> <i class="bx bx-map-alt"></i>`+
          `</a>`+
        `</figcaption>`+
        `<div class="star-ratings mb-2 text-center text-md-start">`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
        `</div>`+
        `<blockquote class="blockquote">"${body}"</blockquote>`+
      `</figure>`+
    `</li>`

  return output;
});

const aletBoxesElement = document.getElementById(`review-slides`)
if (aletBoxesElement) aletBoxesElement.innerHTML = aletBoxHtml.join(``)
