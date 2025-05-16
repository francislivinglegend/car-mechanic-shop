/**
 * @file src/js/whyus.js
 * @description This file contains functions to for Setting up Counter Boxes.
 */

const counterBoxesData = [
  {
    id: "business-counter",
    number: 5,
    text: "Anos em Atividade",
  },
  {
    id: "tires-counter",
    number: 650,
    text: "Pneus Substituídos",
  },
  {
    id: "wheels-counter",
    number: 2250,
    text: "Rodas Alinhadas",
  },
  {
    id: "oil-counter",
    number: 5000,
    text: "Óleos Substituídos",
  },  
];
const counterBoxesHtml = counterBoxesData.map((cb) => {
  const id = cb.id ? cb.id : ``;
  const number = cb.number ? cb.number : ``;
  const text = cb.text ? cb.text : ``;
  const output =
    `<div id="${id}" class="counter-widget col-6 col-lg-3">
      <div class="shadow-sm rounded p-4 bg-secondary text-bg-secondary h-100 d-flex flex-column justify-content-center">
        <div class="counter-container">
          <div class="counter-head fs-3">
            <span class="counter-number">${number}</span>+
          </div>
        </div>
        <div>${text}</div>
      </div>
    </div>`;
  return output;
});
const counterBoxesElement = document.getElementById("counter-boxes");
if (counterBoxesElement) counterBoxesElement.innerHTML = counterBoxesHtml.join("");

// animate counters
const reasonCounter = document.querySelectorAll(`.counter-number`);
reasonCounter.forEach(reason => {
  if (reason) countWhenVisible(reason, reason.innerHTML, 1000);
})
function countWhenVisible(element, targetCount, speed) {
  let hasCounted = false;
  let startTime = null;
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      startTime = performance.now();
      let count = 0;
      let duration = speed;
      let interval = setInterval(() => {
        let elapsedTime = performance.now() - startTime;
        let progress = elapsedTime / duration;
        if (progress >= 1) {
          clearInterval(interval);
          element.innerHTML = targetCount;
        } else {
          count = Math.floor(progress * targetCount);
          element.innerHTML = count;
        }
      }, 20);
    }
  });
  if (element) observer.observe(element);
}




// Setup WhyUs Counter Boxes
const reasonBoxesData = [
  {
    title: `Expertise Inigualável`,
    body: `Na LR Garage, a nossa equipa de técnicos altamente qualificados e certificados traz anos de experiência e conhecimento especializado. Pode confiar em nós para tratar do seu veículo com precisão e cuidado, garantindo reparações e manutenção de excelência.`,
  },
  {
    title: `Abordagem Centrada no Cliente`,
    body: `Damos prioridade à sua satisfação e fazemos sempre um esforço extra para prestar uma atenção personalizada a cada cliente. A nossa equipa simpática e acessível está sempre disponível para ouvir as suas preocupações e oferecer soluções feitas à medida das suas necessidades específicas.`,
  },
  {
    title: `Ampla Gama de Serviços`,
    body: `Desde trabalhos e manutenção de pneus até reparações automóveis completas, oferecemos uma diversidade de serviços num só local. Quer seja manutenção rotineira ou reparações complexas, estamos aqui para si, poupando-lhe tempo e complicações.`,
  },
  {
    title: `Qualidade e Fiabilidade`,
    body: `Comprometemo-nos a usar peças e materiais da mais alta qualidade em todos os nossos serviços. A nossa ênfase na fiabilidade garante que o seu veículo receba os melhores cuidados possíveis, melhorando o seu desempenho e longevidade.`,
  },
  {
    title: `Preços Transparentes`,
    body: `Na LR Garage, acreditamos em preços justos e transparentes. Pode contar connosco para obter orçamentos honestos e sem custos ocultos, permitindo-lhe tomar decisões informadas sem surpresas.`,
  },
  {
    title: `Resposta Rápida`,
    body: `Sabemos que o seu tempo é valioso, por isso esforçamo-nos por prestar um serviço eficiente e atempado. A nossa equipa trabalha com dedicação para que volte à estrada o mais rapidamente possível, sem comprometer a qualidade.`,
  },  
];
const reasonBoxesHtml = reasonBoxesData.map((rs) => {
  const title = rs.title ? rs.title : ``;
  const body = rs.body ? rs.body : ``;
  const output =
    `<div class="col-lg-4 col-6 col-12">
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <div class="fs-5 text-primary fw-medium card-title">${title}</div>
          ${body}
        </div>
      </div>
    </div>`;
  return output;
});
const reasaonBoxesElement = document.getElementById("reason-boxes");
if (reasaonBoxesElement) reasaonBoxesElement.innerHTML = reasonBoxesHtml.join("");