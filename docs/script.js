/* =====================================================
   GLOCAL GAMES — script.js
   - i18n (PT default / EN)
   - Lenis smooth scroll
   - GSAP ScrollTrigger reveals + text staggers
   - Three.js 3D hero (abstract wireframe globe + particles)
   - Number counters & context bar reveals
   ===================================================== */

(() => {
  'use strict';

  /* -------------------------------------------------
     1. i18n — translations dictionary
  ------------------------------------------------- */
  const I18N = {
    pt: {
      'meta.title':       'GLOCAL GAMES — Identidade Cultural e Performance no Sul Global',
      'meta.description': 'Uma investigação sobre como os países do Sul Global incorporam identidade cultural em videogames, e os seus efeitos no desempenho internacional simbólico.',

      'nav.about':   'Sobre',
      'nav.icg':     'Identidade',
      'nav.igc':     'Glocalização',
      'nav.idi':     'Desempenho',
      'nav.foryou':  'Para você',
      'nav.cta':     'Explorar o Painel',

      'hero.tag':    'Intro',
      'hero.status': 'Dataset v1.0 · ao vivo',
      'hero.title1': 'GLOCAL',
      'hero.title2': 'GAMES',
      'hero.lede':   'Identidade cultural e performance no Sul global. Uma análise exploratória sobre como os países do Sul global incorporam identidade cultural em videogames, e os seus efeitos no desempenho internacional simbólico.',
      'hero.cta1':   'Sobre o projeto',
      'hero.cta2':   'Metodologia',
      'hero.cta3':   'Ficha Técnica Interativa →',
      'hero.hud.region': 'Região',
      'hero.hud.sample': 'Amostra',
      'hero.hud.period': 'Período',
      'hero.hud.dims':   'Dimensões',
      'hero.scroll':     'role',

      'metrics.icg':  '% da amostra com maior ICG',
      'metrics.icgc': 'Identidade Cultural',
      'metrics.igc':  '% da amostra com maior IDI',
      'metrics.igcc': 'Desempenho Internacional',
      'metrics.idi':  'Glocalização Equilibrada',
      'metrics.idic': 'da amostra alcançada para o IGC',

      'ctx.tag':    'Contexto',
      'ctx.title':  'O mapa da indústria está desequilibrado.',
      'ctx.lede':   'A indústria de videogames é uma das mais lucrativas da economia criativa. Todavia, sua produção e reconhecimento se concentram majoritariamente no Norte Global: apenas <b>China (US$ 47 bi)</b> e <b>Estados Unidos (US$ 46,1 bi)</b> respondem por quase metade do faturamento global da indústria de games.',
      'ctx.source': 'Fonte',
      'ctx.lede2': 'As assimetrias do mercado global impulsionam o fenômeno da glocalização — a fusão estratégica entre dinâmicas globais e especificidades locais. No desenvolvimento de jogos, essa tensão se traduz em duas frentes complementares: a <b>generalização<b> de mecânicas e padrões consagrados para mitigar riscos financeiros, e a <b>autenticidade cultural<b> para construir valor e diferenciação competitiva no cenário internacional.'
      'icg.insight0': 'Glocal Games',
   
      'about.tag':   'Sobre o projeto',
      'about.title': 'Uma interface estratégica de inteligência cultural.',
      'about.lede':  '<b>Glocal Games</b> é uma pesquisa aplicada que descreve os efeitos da glocalização na indústria global de videogames por meio de um estudo transversal que abrange o període de 2011 a fevereiro de 2026. Utilizando como amostra empírica jogos produzidos no Sul Global, a pesquisa desenvolve e aplica o Índice de Glocalização Criativa, instrumento estruturado a partir das dimenções: <em>identidade cultural</em>, e <em>desempenho internacional</em>.',
      'about.p1.h':  'Identidade Cultural',
      'about.p1.p':  'Variáveis qualitativas distribuídas entre: Narrativa, Idioma, Música, Cenários, e Gameplay',
      'about.p2.h':  'Glocalização Criativa',
      'about.p2.p':  'Média aritimética ponderada dos dois sub indicadores: identidade cultural e desempenho internacional',
      'about.p3.h':  'Desempenho Internacional',
      'about.p3.p':  'Dados empíricos agrupados em: Circulação, Reconhecimento, Engajamento, e Padrão Técnico.',

      'common.insight': 'Top Insight',

      'icg.tag':     'Identidade Cultural nos Games',
      'icg.title':   'A ativação estratégica da identidade cultural nos games',
      'icg.lede':    'O <b>ICG</b> mede a presença e a centralidade de elementos culturais nos jogos, na sua composição estética, narrativa e estrutural. Explore o gráfico para entender como a cultura é codificada nos jogos da amostra.',
      'icg.insight': 'A cultura nos games não é um reflexo geográfico automático, mas uma escolha estratégica de posicionamento entre a neutralidade estética e a diferenciação cultural',

      'igc.tag':     'Glocalização Criativa',
      'igc.title':   'O efeito Glocal e a natureza estrutural da cultura nos jogos',
      'igc.lede':    'O <b>IGC</b> mensura o equilíbrio e as assimetrias ente a preservação da identidade cultural e a eficácia das estratégias de desempenho internacional dos games produzidos fora dos eixos hegemônicos',
      'igc.insight': 'Jogos com maior densidade cultural estão associados a maiores níveis médios de desempenho',

      'idi.tag':     'Desempenho Internacional',
      'idi.title':   'A assimetria estrutural do desempenho internacional simbólico',
      'idi.lede':    'O <b>IDI</b> mensura a eficácia na transposição de fronteiras culturais e geográficas, através da circulação em plataformas, reconhecimento institucional, engajamento de comunidade, e padrão técnico e estético.',
      'idi.insight': 'O efeito de rede entre premiações, vendas, e presença multiplataforma é o divisor de águas para alcançar picos expressivos de desempenho',

      'int.tag':   'Ficha Técnica Interativa',
      'int.title': 'Perfil de Casos do ICG',
      'int.lede':  'Examine como cada jogo negocia sua herança local frente ao mercado hegemônico. Essa ferramenta ilustra como a densidade identitária pode atuar como um divisor de regimes competitivos',

      'cases.tag':   'Glocalização em prática',
      'cases.title': 'Casos exemplares.',
      'cases.lede':  'Aqui apresentamos os jogos integrados ao agrupamento de maior densidade cultural que associam-se a patamares médios superiores de desempenho',
      'cases.c1':    'Um jogo de sobrevivência, memória e cultura, focado no sertão brasileiro.',
      'cases.c2':    'Mitologia chinesa como motor narrativo e estético global.',
      'cases.c3':    'Cultura Tarahumara (Rarámuri) traduzida para uma aventura 3D.',
      'cases.c4':    'Mitologia hindu e arte Pahari em um action-adventure premiado.',
      'cases.after': 'Esses exemplos demonstram que os Glocal Games operam como lentes de difração cultural: aqui, perspectivas locais, são fundamentalmente, perspectivas situadas que redefinem as próprias regras de engajamento do ecossistema global',

      'impl.tag':    'O que isso significa?',
      'impl.title':  'Implicações.',
      'impl.c1.k':   'Para políticas públicas',
      'impl.c1.p':   'Discussão de filtros técnicos de qualificação industrial, e cultura como estratégia de internacionalização',
      'impl.c2.k':   'Para desenvolvedores',
      'impl.c2.p':   'Cultura não é apenas estética: pode ser ativo competitivo.',
      'impl.c3.k':   'Para associações',
      'impl.c3.p':   'É possível mapear assimetrias locais e sinalizar janelas de oportunidade',
      'impl.key':    'Mensurar a cultura é transformar o patrimônio identitário em vetor de autonomia criativa',

      'fy.tag':        'Para você',
      'fy.title':  'Diretrizes Estratégicas.',
      'fy.lede':   'Esta seção converte os resultados das análises em agendas operacionais para repensar a posição do Sul Global no mercado de jogos. Explore, a seguir, os insights e os direcionamentos práticos customizados para os três pilares de sustentação dessa indústria:',
      'partners.tag':   'Parceiros',
      'partners.title': 'Realização e apoio.',
      'fy.gov.h':      'Governo',
      'fy.gov.hint':   'Políticas públicas & fomento',
      'fy.gov.p':      'Use os indicadores para orientar editais, fomento à internacionalização, cultura e autonomia criativa.',
      'fy.gov.cta':    'Brief para gestores públicos',
      'fy.assoc.h':    'Associações',
      'fy.assoc.hint': 'Benchmarks setoriais',
      'fy.assoc.p':    'Converta os indicadores em argumentos estratégicos para atrair capital, orientar estúdios e fortalecer o ecossistema local',
      'fy.assoc.cta':  'Brief para associações',
      'fy.studios.h':    'Estúdios',
      'fy.studios.hint': 'Tendências e diferencial estratégico',
      'fy.studios.p':    'Use o painel como referência competitiva: onde sua identidade cultural se posiciona, onde há espaço para glocalizar e como isso se correlaciona com performance.',
      'fy.studios.cta':  'Brief para estúdios',
      'fy.dl':       'Baixar o dataset',
      'fy.paper':    'Ler o artigo',
      'fy.meth':     'Metodologia',
      'fy.contact':  'Entrar em contato →',
      
      
      

      'footer.tag':     'Identidade cultural e performance no Sul global.',

      'footer.project': 'Projeto',
      'footer.axes':    'Eixos',
      'footer.icg':     'Identidade Cultural · ICG',
      'footer.igc':     'Glocalização Criativa · IGC',
      'footer.idi':     'Desempenho Internacional · IDI',
      'footer.int':     'Perfil de Casos',
      'footer.legal':   'Legal',
      'footer.privacy': 'Política de Privacidade',
      'footer.terms':   'Termos de Uso',
      'footer.cookies': 'Política de Cookies',
      'footer.copy':    '© 2026 GLOCAL GAMES · Todos os direitos reservados.'
    },

    en: {
      'meta.title':       'GLOCAL GAMES — Cultural Identity and Performance in the Global South',
      'meta.description': 'An exploratory analysis of how Global South countries incorporate cultural identity into video games and its effects on symbolic international performance.',

      'nav.about':   'About',
      'nav.icg':     'Identity',
      'nav.igc':     'Glocalization',
      'nav.idi':     'Performance',
      'nav.foryou':  'For you',
      'nav.cta':     'Explore the dashboard',

      'hero.tag':    'Intro',
      'hero.status': 'Dataset v1.0 · live',
      'hero.title1': 'GLOCAL',
      'hero.title2': 'GAMES',
      'hero.lede': 'Cultural identity and performance in the Global South. An exploratory analysis of how Global South countries incorporate cultural identity into video games and the effects on their symbolic international performance.',
      'hero.cta1':   'About the project',
      'hero.cta2':   'Methodology',
      'hero.cta3':   'Explore the dashboard →',
      'hero.hud.region': 'Region',
      'hero.hud.sample': 'Sample',
      'hero.hud.period': 'Period',
      'hero.hud.dims':   'Dimensions',
      'hero.scroll':     'scroll',

      'metrics.icg': '% of the sample with higher ICG',
      'metrics.icgc': 'Cultural Identity',

      'metrics.igc': '% of the sample with higher IDI',
      'metrics.igcc': 'International Performance',

      'metrics.idi': 'Balanced Glocalization',
      'metrics.idic': 'of the sample reaching higher IGC',

      'ctx.tag':    'Context',
      'ctx.title':  'The industry map is unbalanced.',
      'ctx.lede':   'The video game industry is one of the most profitable sectors of the creative economy; however, its production and recognition remain largely concentrated in the Global North: <b>China (US$ 47B)</b> and the <b>United States (US$ 46.1B)</b> alone account for nearly half of the global games industry revenue.',
      'ctx.source': 'Source',

      'about.tag':   'About the project',
      'about.title': 'A strategic interface for cultural intelligence.',
      'about.lede': '<b>Glocal Games</b> is an applied research project that describes the effects of glocalization in the global video game industry through a cross-sectional study covering the period from 2011 to February 2026. Using games produced in the Global South as its empirical sample, the study develops and applies the Creative Glocalization Index, a composite indicator structured around the dimensions of <em>cultural identity</em> and <em>international performance</em>.',
      'about.p1.h': 'Cultural Identity',
      'about.p1.p': 'Qualitative variables distributed across Narrative, Language, Music, Setting, and Gameplay.',
      'about.p2.h':  'Creative Glocalization',
      'about.p2.p':'Weighted arithmetic mean of the two sub-indicators: cultural identity and international performance.',
      'about.p3.h':  'International Performance',
      'about.p3.p':'Empirical data grouped into Circulation, Recognition, Engagement, and Technical Standard.',

      'common.insight': 'Top Insight',

      'icg.tag':     'Cultural Identity in Games',
      'icg.title':'The strategic activation of cultural identity in games',
      'icg.lede': 'The <b>ICG</b> measures the presence and centrality of cultural elements in games through their aesthetic, narrative, and structural composition. Explore the chart to understand how culture is encoded across the sampled games.',
      'icg.insight':'Culture in games is not an automatic geographical reflection, but a strategic choice between aesthetic neutrality and cultural differentiation.',

      'igc.tag':     'Creative Glocalization',
      'igc.title':'The glocal effect and the structural role of culture in games',
      'igc.lede':'The <b>IGC</b> measures the balance and asymmetries between preserving cultural identity and the effectiveness of international performance strategies adopted by games produced outside hegemonic markets.',
      'igc.insight':'Games with greater cultural density are associated with higher average levels of international performance.',

      'idi.tag':     'International Performance',
      'idi.title':'The structural asymmetry of symbolic international performance',
      'idi.lede':'The <b>IDI</b> measures the effectiveness of crossing cultural and geographical boundaries through platform circulation, institutional recognition, community engagement, and technical and aesthetic standards.',
      'idi.insight':'The network effect created by awards, sales, and multiplatform presence is the key driver behind exceptional performance.',

      'int.tag':'Interactive Technical Profile',
      'int.title':'ICG Case Profiles',
      'int.lede':'Examine how each game negotiates its local heritage in relation to the hegemonic market. This tool illustrates how cultural density can operate as a dividing line between competitive regimes.',
      'cases.tag':   'Glocalization in practice',
      'cases.title': 'Exemplary cases.',
      'cases.lede':'Here we present games belonging to the cluster with the highest cultural density, which are associated with higher average levels of international performance.',
      'cases.c1':    'Brazilian backlands as core experience — survival, memory, and culture.',
      'cases.c2':    'Chinese mythology as global narrative and aesthetic driver.',
      'cases.c3':    'Tarahumara (Rarámuri) culture translated into a 3D adventure.',
      'cases.c4':    'Hindu mythology and Pahari art in an award-winning action-adventure.',
      'cases.after':'These examples demonstrate that Glocal Games operate as lenses of cultural diffraction: local perspectives are fundamentally situated perspectives that redefine the very rules of engagement within the global ecosystem.',
      'impl.tag':    'What does this mean?',
      'impl.title':  'Implications.',
      'impl.c1.k':   'For public policy',
      'impl.c1.p':   'Discussion of technical qualification criteria for the industry and culture as an internationalization strategy.',
      'impl.c2.k':   'For developers',
      'impl.c2.p':   'Culture is not merely aesthetic: it can be a competitive asset.',
      'impl.c3.k':   'For associations',
      'impl.c3.p':   'It is possible to map local asymmetries and identify windows of opportunity.',
      'impl.key':    'Measuring culture means transforming identity heritage into a driver of creative autonomy.',
       
      'fy.tag':        'For you',
      'fy.title':      'Strategic Guidelines.',
      'fy.lede':       'Glocal Games is an invitation to rethink the position of the Global South in the creative economy. The project is open and ongoing.',
      'fy.gov.h':      'Government',
      'fy.gov.hint':   'Public policy & funding',
      'fy.gov.p':      'Use the indicators to guide public funding calls, internationalization policies, cultural strategies, and creative autonomy.',
      'fy.gov.cta':    'Brief for public managers',
      'fy.assoc.h':    'Associations',
      'fy.assoc.hint': 'Industry benchmarks',
      'fy.assoc.p':    'Transform the indicators into strategic arguments to attract investment, support studios, and strengthen the local ecosystem.',
      'fy.assoc.cta':  'Brief for associations',
      'fy.studios.h':    'Studios',
      'fy.studios.hint': 'Trends and strategic edge',
      'fy.studios.p':    'Use the dashboard as competitive reference: where your cultural identity sits, where there is room to glocalize, and how it correlates with performance.',
      'fy.studios.cta':  'Brief for studios',
      'fy.dl':       'Download the dataset',
      'fy.paper':    'Read the paper',
      'fy.meth':     'Methodology',
      'fy.contact':  'Get in touch →',

      'partners.tag':   'Partners',
      'partners.title': 'Supported by.',

      'footer.tag':     'Cultural identity and performance in the Global South.',
      'footer.project': 'Project',
      'footer.axes':    'Axes',
      'footer.icg':     'Cultural Identity · ICG',
      'footer.igc':     'Creative Glocalization · IGC',
      'footer.idi':     'International Performance · IDI',
      'footer.int':     'Interactive Technical Profile',
      'footer.legal':   'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.terms':   'Terms of Use',
      'footer.cookies': 'Cookie Policy',
      'footer.copy':    '© 2026 GLOCAL GAMES · All rights reserved.'
    }
  };

  const LANG_KEY = 'glocal.lang';

  const getInitialLang = () => {
    // Portuguese (Brazil) is ALWAYS the default.
    // Only switch to EN if explicitly requested via URL or previously saved by the user.
    const url = new URLSearchParams(location.search).get('lang');
    if (url === 'en' || url === 'pt') return url;
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'pt') return stored;
    return 'pt';
  };

  const applyLang = (lang) => {
    const dict = I18N[lang] || I18N.pt;
    document.documentElement.lang     = lang === 'en' ? 'en' : 'pt-BR';
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val == null) return;
      if (el.tagName === 'META')  el.setAttribute('content', val);
      else if (el.tagName === 'TITLE') el.textContent = val;
      else if (/<[a-z]/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    });

    const toggle = document.getElementById('lang-toggle');
    if (toggle){
      toggle.classList.toggle('is-pt', lang === 'pt');
      toggle.classList.toggle('is-en', lang === 'en');
    }

    localStorage.setItem(LANG_KEY, lang);
  };

  // Init language as early as possible (before paint)
  applyLang(getInitialLang());

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#lang-toggle');
    if (!btn) return;
    const current = document.documentElement.dataset.lang || 'pt';
    applyLang(current === 'pt' ? 'en' : 'pt');
  });


  /* -------------------------------------------------
     3. GSAP reveals & text staggers
  ------------------------------------------------- */
  function initGSAP(){
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined'){
      // Fallback: if GSAP fails to load, make sure split-line headings are still visible
      // (they are hidden by default via transform: translateY(110%) in CSS).
      document.querySelectorAll('[data-split] .line > span').forEach(s => {
        s.style.transform = 'translateY(0)';
      });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // Nav scrolled state
    ScrollTrigger.create({
      start: 'top -10',
      onUpdate: self => {
        document.getElementById('nav').classList.toggle('is-scrolled', self.scroll() > 10);
      }
    });

    // Split any heading with [data-split] into lines and animate
    document.querySelectorAll('[data-split]').forEach(el => {
      const lines = el.querySelectorAll('.line > span');
      if (lines.length){
        // Hero title is already in viewport on load → animate immediately,
        // without ScrollTrigger (which can fail to fire for above-the-fold content).
        // Also: animate opacity + small offset only (hero title baseline is visible in CSS),
        // so a failed animation never leaves the headline blank.
        const isHero = el.classList.contains('hero__title') || el.closest('.hero');
        if (isHero){
          gsap.from(lines, {
            yPercent: 40, opacity: 0,
            duration: 1.1, ease: 'expo.out', stagger: 0.12, delay: 0.1,
            clearProps: 'transform,opacity'
          });
        } else {
          gsap.fromTo(lines,
            { yPercent: 110 },
            {
              yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08,
              scrollTrigger: { trigger: el, start: 'top 85%' }
            });
        }
        return;
      }
      // Auto split (word-level) if no .line markup present
      // Use opacity+y fade to avoid descender clipping from overflow:hidden
      const text = el.innerText.trim();
      const words = text.split(/\s+/);
      el.innerHTML = words.map(w =>
        `<span class="w" style="display:inline-block">${w}</span>`
      ).join(' ');
      gsap.fromTo(el.querySelectorAll('.w'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.05,
          scrollTrigger: { trigger: el, start: 'top 85%' } });
    });

    // Generic fade-in for primary content blocks
    // Exclude children of stagger-grid parents to avoid double-animation
    const blocks = document.querySelectorAll('.lede, .hud__item, .metric, .top-insight, .flourish-slot, .acc, .fy-actions, .context-bars, .impl-card');
    blocks.forEach(b => {
      gsap.fromTo(b,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: b, start: 'top 90%' }
        });
    });

    // Stagger groups inside grids (handles .pillar and .case — not double-animated above)
    gsap.utils.toArray('.pillars').forEach(grid => {
      gsap.fromTo(grid.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: .9, ease: 'power3.out', stagger: .12,
          scrollTrigger: { trigger: grid, start: 'top 85%' } });
    });
    gsap.utils.toArray('.cases-grid').forEach(grid => {
      gsap.fromTo(grid.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: .1,
          scrollTrigger: { trigger: grid, start: 'top 85%' } });
    });

    // Context bars animate widths on enter
    gsap.utils.toArray('.context-bars .cb').forEach((bar, i) => {
      ScrollTrigger.create({
        trigger: bar, start: 'top 90%',
        onEnter: () => setTimeout(() => bar.classList.add('is-in'), i * 80)
      });
    });
  }

  /* -------------------------------------------------
     4. Number counters
  ------------------------------------------------- */
  function initCounters(){
    document.querySelectorAll('.count').forEach(el => {
      const to = parseFloat(el.dataset.to || '0');
      if (typeof ScrollTrigger !== 'undefined'){
        ScrollTrigger.create({
          trigger: el, start: 'top 90%', once: true,
          onEnter: () => animateNumber(el, 0, to, 1400)
        });
      } else {
        // IntersectionObserver fallback — only fires when element enters viewport
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            animateNumber(el, 0, to, 1400);
            io.disconnect();
          });
        }, { threshold: 0.1 });
        io.observe(el);
      }
    });
  }
  function animateNumber(el, from, to, dur){
    const start = performance.now();
    function step(t){
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* -------------------------------------------------
     5. Three.js hero — abstract wireframe globe + particles
        (placeholder — easy to swap with a real asset later)
  ------------------------------------------------- */
  function initHero3D(){
    if (typeof THREE === 'undefined') return;
    const canvas = document.getElementById('hero-3d');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    // wireframe globe (icosahedron)
    const globeGeo  = new THREE.IcosahedronGeometry(1.4, 2);
    const globeMat  = new THREE.MeshBasicMaterial({ color: 0x00e5c7, wireframe: true, transparent: true, opacity: 0.35 });
    const globe     = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // inner solid — very dim
    const innerMat  = new THREE.MeshBasicMaterial({ color: 0x0a1a1a, transparent: true, opacity: 0.6 });
    const inner     = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 2), innerMat);
    scene.add(inner);

    // particle field
    const pCount = 900;
    const positions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++){
      const r = 2 + Math.random() * 2.4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      positions[i*3]     = r * Math.sin(p) * Math.cos(t);
      positions[i*3 + 1] = r * Math.sin(p) * Math.sin(t);
      positions[i*3 + 2] = r * Math.cos(p);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x00e5c7, size: 0.012, transparent: true, opacity: 0.55 });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // second, smaller, magenta particle ring
    const qCount = 260;
    const qPos = new Float32Array(qCount * 3);
    for (let i = 0; i < qCount; i++){
      const r = 1.8 + Math.random() * 0.25;
      const t = Math.random() * Math.PI * 2;
      const p = (Math.random() - 0.5) * 0.35;
      qPos[i*3]     = r * Math.cos(t);
      qPos[i*3 + 1] = r * Math.sin(t) * 0.6 + p;
      qPos[i*3 + 2] = r * Math.sin(t);
    }
    const qGeo = new THREE.BufferGeometry();
    qGeo.setAttribute('position', new THREE.BufferAttribute(qPos, 3));
    const qMat = new THREE.PointsMaterial({ color: 0xff4d7e, size: 0.02, transparent: true, opacity: 0.8 });
    const ring = new THREE.Points(qGeo, qMat);
    ring.rotation.x = Math.PI * 0.2;
    scene.add(ring);

    // Lighting for matte-plastic controller
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);
    const rimLight = new THREE.DirectionalLight(0xff4d7e, 0.4);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Controller — built from primitives
    const cMat = new THREE.MeshPhongMaterial({
      color: 0xff4d7e,
      shininess: 12,
      specular: new THREE.Color(0x1a0008),
    });
    const cMatDark = new THREE.MeshPhongMaterial({
      color: 0xcc1a4a,
      shininess: 8,
      specular: new THREE.Color(0x0a0005),
    });

    // Controller pivot — mirrors ring's tilt exactly.
    // We sync rotation.y to ring.rotation.y each tick so the
    // controller stays locked on the same orbital path.
    const ctrlPivot = new THREE.Group();
    ctrlPivot.rotation.x = ring.rotation.x; // same tilt as ring
    ctrlPivot.rotation.y = Math.PI * 0.25;  // start offset so it's visible
    scene.add(ctrlPivot);

    let ctrlWrapper = null;
    if (typeof THREE.OBJLoader !== 'undefined') {
      const loader = new THREE.OBJLoader();
      loader.load('assets/controller.obj', (obj) => {
        obj.traverse(child => {
          if (child.isMesh) child.material = cMat;
        });

        const box = new THREE.Box3().setFromObject(obj);
        const centre = new THREE.Vector3();
        box.getCenter(centre);
        obj.position.sub(centre);

        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        obj.scale.setScalar(0.57 / maxDim);

        const wrapper = new THREE.Group();
        wrapper.add(obj);
        // Place at the ring's orbital radius along the pivot's X axis
        wrapper.position.set(1.9, 0, 0);
        ctrlPivot.add(wrapper);
        ctrlWrapper = wrapper;
      });
    }

    function resize(){
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    requestAnimationFrame(resize);
    window.addEventListener('resize', resize);

    // parallax with pointer
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    window.addEventListener('mousemove', e => {
      mouse.tx = (e.clientX / window.innerWidth  - 0.5) * 0.6;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 0.4;
    });

    function tick(){
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      globe.rotation.y  += 0.0025;
      globe.rotation.x   = mouse.y;
      inner.rotation.y   = globe.rotation.y * 0.8;
      points.rotation.y += 0.0007;
      ring.rotation.y    += 0.003;
      ctrlPivot.rotation.y = ring.rotation.y + Math.PI * 0.25;
      if (ctrlWrapper){
        ctrlWrapper.rotation.x += 0.004;   // slow forward tumble
        ctrlWrapper.rotation.y += 0.0025;  // gentle yaw
        ctrlWrapper.rotation.z += 0.003;   // lazy roll
      }
      scene.rotation.y   = mouse.x * 0.6;
      scene.rotation.x   = mouse.y * 0.3;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    tick();
  }

  /* -------------------------------------------------
     6. Boot
  ------------------------------------------------- */
  function initMobileNav(){
    const burger = document.getElementById('nav-burger');
    const drawer = document.getElementById('nav-drawer');
    if (!burger || !drawer) return;

    burger.addEventListener('click', () => {
      const open = drawer.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close drawer when any link inside it is clicked
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  function initAnchorScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length <= 1) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initGSAP();
    initAnchorScroll();
    initCounters();
    initHero3D();
    initMobileNav();

    const bd = document.getElementById('buildDate');
    if (bd){
      const d = new Date();
      bd.textContent = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0');
    }
  });

})();
