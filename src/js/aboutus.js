/**
 * @file aboutus.js
 * @description This file sets up the service slides for the "About Us" section of the page,
 *  generating HTML content dynamically based on predefined service data.
 */

/**
 * @constant {Array<Object>} serviceSlidesData
 * @description An array of objects representing the data for each service slide.
 * @property {string} icon - The HTML string for the service icon.
 * @property {string} title - The title of the service.
 * @property {string} body - The description of the service.
 */
const serviceSlidesData = [
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Serviços de Pneus`,
    body: `Quer precise de reparação ou substituição de pneus, os nossos técnicos qualificados garantem que as suas rodas rodam de forma segura e suave.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Pneus Novos e Usados`,
    body: `Oferecemos uma seleção de pneus novos e usados de alta qualidade, que proporcionam excelente desempenho e valor para o seu veículo.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Eliminação de Pneus`,
    body: `Como parte do nosso compromisso ambiental, fazemos a eliminação responsável dos seus pneus inutilizáveis mediante uma taxa simbólica.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Reparação e Tampões`,
    body: `O nosso serviço profissional de reparação de pneus restaura pneus danificados a condições seguras, poupando-lhe o custo de uma substituição.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `TPMS e Instalação`,
    body: `Os nossos técnicos podem instalar e fazer manutenção dos sensores do Sistema de Monitorização da Pressão dos Pneus (TPMS), mantendo-o informado sobre a pressão dos seus pneus.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Alinhamento de Rodas`,
    body: `Melhore a condução e a durabilidade dos pneus com um alinhamento de rodas preciso, garantindo que todas estão corretamente orientadas.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Recarregamento e Detecção de Fugas do Ar Condicionado`,
    body: `Mantenha-se fresco nos dias quentes com o nosso serviço de recarga do ar condicionado, utilizando os melhores refrigerantes e corantes para deteção de fugas.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Mudança de Óleo e Filtro`,
    body: `Mantenha o motor a funcionar de forma suave e eficiente com a nossa mudança de óleo, incluindo a instalação de um novo filtro.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Pastilhas de Travão Dianteiras e Traseiras`,
    body: `Assegure uma travagem confiável com a substituição das pastilhas de travão dianteiras e traseiras, usando pastilhas de alta qualidade para segurança e desempenho.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Bateria Nova`,
    body: `Se está na altura de trocar a bateria, confie nos nossos especialistas para instalar uma substituição fiável e duradoura para o seu veículo.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Palhetas de Limpa-vidros`,
    body: `Melhore a visibilidade durante chuva ou neve com palhetas novas que se adaptam perfeitamente ao seu veículo.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Filtros de Ar da Cabine`,
    body: `Respire ar puro dentro do seu carro com o nosso serviço de substituição do filtro de ar da cabine.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Suspensão e Direção`,
    body: `Desfrute de viagens mais suaves e melhor manobrabilidade com os nossos serviços especializados de suspensão e direção. Conduza com confiança.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Reparação do Sistema de Escape`,
    body: `Experimente viagens mais confortáveis e melhor desempenho com a reparação especializada do sistema de escape. Visite-nos hoje mesmo!`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Reparações no Sistema Elétrico do Carro`,
    body: `Para reparações fiáveis do sistema elétrico do seu carro, confie nos nossos técnicos experientes. Conduza sem preocupações com o nosso serviço de excelência.`,
  },
  {
    icon: `<i class="bx bxs-car-mechanic"></i>`,
    title: `Diagnóstico da Luz de Motor`,
    body: `A luz do motor está acesa? Não se preocupe! Os nossos técnicos especializados são peritos em diagnóstico da luz de motor.`,
  },  
];

/**
 * @function generateSlideBoxesHtml
 * @description Generates HTML for each service slide based on the serviceSlidesData array.
 * @param {Array<Object>} slidesData - The array of service slide data.
 * @returns {Array<string>} An array of HTML strings for each service slide.
 */
const generateSlideBoxesHtml = (slidesData) => {
  return slidesData.map((sl) => {
    const body = sl.body ? sl.body : ``;
    const icon = sl.icon ? sl.icon : ``;
    const title = sl.title ? sl.title : ``;
    const output =
      `<li class="glide__slide h-auto">`+
        `<div class="card h-100">`+
          `<div class="card-body">`+
            `<div class="card-title text-primary fw-medium fs-5">${icon} ${title}</div>`+
            `${body}`+
          `</div>`+
        `</div>`+
      `</li>`;
    return output;
  });
};

/**
 * @constant {HTMLElement} slideBoxesElement
 * @description The DOM element where the service slides will be inserted.
 */
const slideBoxesElement = document.getElementById("service-slides");

/**
 * @description If the slideBoxesElement exists, set its innerHTML to the generated slide boxes HTML.
 */
if (slideBoxesElement) slideBoxesElement.innerHTML = generateSlideBoxesHtml(serviceSlidesData).join("");