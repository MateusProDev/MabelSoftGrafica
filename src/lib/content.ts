/* Servicos rapidos do balcao */
export const SERVICOS_RAPIDOS = [
  {
    slug: "xerox",
    title: "Xerox",
    description:
      "Cópias em preto e branco e coloridas, em todos os tamanhos, feitas na hora.",
  },
  {
    slug: "impressoes",
    title: "Impressões",
    description:
      "Impressão de documentos, trabalhos e arquivos em alta qualidade, do A4 ao A3.",
  },
  {
    slug: "digitalizacao",
    title: "Digitalização",
    description:
      "Digitalizamos documentos, contratos e fotos em alta resolução para você guardar em PDF.",
  },
  {
    slug: "plastificacao",
    title: "Plastificação",
    description:
      "Proteja documentos importantes, certificados e crachás com acabamento durável.",
  },
  {
    slug: "encadernacao",
    title: "Encadernação",
    description:
      "Encadernação em espiral e capa transparente para apostilas, TCCs e relatórios.",
  },
  {
    slug: "boletos",
    title: "Boletos e Segunda Via",
    description:
      "Emitimos e imprimimos boletos e segunda via de contas com rapidez e segurança.",
  },
  {
    slug: "agendamentos",
    title: "Agendamentos",
    description:
      "Ajuda com agendamentos e serviços online, sem fila e sem complicação.",
  },
  {
    slug: "curriculos",
    title: "Currículos",
    description:
      "Montagem e impressão de currículos com apresentação profissional.",
  },
  {
    slug: "servicos-online",
    title: "Serviços Online",
    description:
      "Auxílio com serviços digitais, cadastros, inscrições e documentos pela internet.",
  },
] as const;

/* Materiais graficos personalizados */
export const PERSONALIZADOS = [
  {
    slug: "cartao-de-visita",
    title: "Cartão de Visita",
    description:
      "Cartões com acabamento profissional, em diferentes papéis e quantidades.",
  },
  {
    slug: "panfletos",
    title: "Panfletos e Flyers",
    description:
      "Divulgue seu negócio com panfletos e flyers impressos em alta qualidade.",
  },
  {
    slug: "adesivos",
    title: "Adesivos",
    description:
      "Adesivos recortados e personalizados para fachadas, produtos e brindes.",
  },
  {
    slug: "caixas-de-festa",
    title: "Caixas de Decoração de Festa",
    description:
      "Caixas personalizadas para decoração de festas e lembrancinhas.",
  },
  {
    slug: "apostilhas",
    title: "Apostilhas e Livretos",
    description:
      "Apostilas, livretos e materiais didáticos impressos e encadernados.",
  },
  {
    slug: "agendas",
    title: "Agendas e Personalizados",
    description:
      "Agendas, blocos e itens personalizados com a identidade da sua marca.",
  },
] as const;

/* Perguntas frequentes - tambem alimentam o FAQPage do schema */
export const FAQ = [
  {
    question: "Preciso levar meu arquivo pronto ou vocês montam?",
    answer:
      "Você pode trazer o arquivo pronto em PDF ou imagem. E se precisar de ajuda para montar, diagramar ou preparar o layout, a nossa equipe faz esse serviço no balcão mesmo.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "Serviços rápidos como Xerox, impressões, digitalização e plastificação saem na hora. Materiais personalizados, como cartões, adesivos e caixas de festa, têm prazo combinado no momento do pedido.",
  },
  {
    question: "Vocês atendem por WhatsApp?",
    answer:
      "Sim. Você pode mandar o arquivo pelo WhatsApp, confirmar o serviço e passar para retirar. Atendimento pelo número (85) 9834-1078.",
  },
  {
    question: "Fazem entrega ou o material precisa ser retirado?",
    answer:
      "O material fica disponível para retirada no balcão, na R. Terra das Flôres, 1249, no Sabiaguaba. Fale com a gente pelo WhatsApp para combinar detalhes de entregas na região.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos Pix, dinheiro e cartão. Para pedidos maiores, o valor é combinado antes de iniciar a produção.",
  },
  {
    question: "Vocês trabalham aos sábados?",
    answer:
      "Sim. A gráfica abre de segunda a sábado. Aos domingos não há atendimento.",
  },
] as const;

/* Numeros do negocio, exibidos como prova social */
export const NUMEROS = [
  { prefix: "+", value: 15, label: "Serviços no balcão" },
  { value: 100, suffix: "%", label: "Impressão na hora" },
  { value: 6, suffix: " dias", label: "Aberto por semana" },
] as const;
