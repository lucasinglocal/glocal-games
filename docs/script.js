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
      'meta.description': 'Uma investigação sobre como os países do Sul Global incorporam identidade cultural em videogames, e os seus efeitos no desempenho internacional.',

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
      'hero.lede':   'Identidade cultural e performance no Sul global. Uma investigação sobre como os países do Sul global incorporam identidade cultural em videogames — e os efeitos disso no desempenho internacional.',
      'hero.cta1':   'Sobre o projeto',
      'hero.cta2':   'Metodologia',
      'hero.cta3':   'Ficha Técnica Interativa →',
      'hero.hud.region': 'Região',
      'hero.hud.sample': 'Amostra',
      'hero.hud.period': 'Período',
      'hero.hud.dims':   'Dimensões',
      'hero.scroll':     'role',

      'metrics.icg':  '% com maior ICG',
      'metrics.icgc': 'Identidade cultural',
      'metrics.igc':  '% com maior IDI',
      'metrics.igcc': 'Desempenho internacional',
      'metrics.idi':  'Glocalização Equilibrada',
      'metrics.idic': 'da amostra alcançada para o IGC',

      'ctx.tag':    'Contexto',
      'ctx.title':  'O mapa da indústria está desequilibrado.',
      'ctx.lede':   'A indústria de videogames é uma das mais lucrativas da economia criativa. Todavia, sua produção e reconhecimento se concentram majoritariamente no Norte Global: apenas <b>China (US$ 47 bi)</b> e <b>Estados Unidos (US$ 46,1 bi)</b> respondem por quase metade do faturamento global da indústria de games.',
      'ctx.source': 'Fonte',

      'about.tag':   'Sobre o projeto',
      'about.title': 'Uma interface estratégica de inteligência cultural.',
      'about.lede':  '<b>Glocal Games</b> é uma pesquisa aplicada que descreve os efeitos da identidade cultural e da glocalização na indústria global dos videogames. Investigamos os jogos produzidos por países do Sul Global como amostra empírica, construindo e analisando indicadores compostos em três dimensões: <em>identidade cultural</em>, <em>glocalização</em> e <em>desempenho internacional</em>.',
      'about.p1.h':  'Identidade Cultural',
      'about.p1.p':  'Narrativa, mitologia, ambientação visual, música, linguagem, práticas sociais e identidade contemporânea.',
      'about.p2.h':  'Glocalização Criativa',
      'about.p2.p':  'Localização, multiplataforma, distribuição internacional, engines e tecnologias globais.',
      'about.p3.h':  'Desempenho Internacional',
      'about.p3.p':  'Circulação, reconhecimento (premiações, reviews) e engajamento (base de jogadores).',

      'common.insight': 'Top Insight',

      'icg.tag':     'Identidade Cultural nos Games',
      'icg.title':   'Como os países incorporam sua cultura nos jogos?',
      'icg.lede':    'O <b>ICG</b> mede a presença e a centralidade de elementos culturais nos jogos, considerando: narrativa, mitologia e história, ambientação visual, música e linguagem, práticas sociais e identidade contemporânea. Explore os gráficos para entender como a cultura se distribui por país, gênero e período.',
      'icg.insight': 'Nem toda referência cultural tem o mesmo peso. Alguns jogos usam a cultura como estética superficial; outros estruturam toda sua experiência a partir dela.',

      'igc.tag':     'Glocalização Criativa',
      'igc.title':   'Os jogos conseguem traduzir o local para o global?',
      'igc.lede':    'Ter identidade cultural forte não é suficiente. É preciso torná-la inteligível e circulável internacionalmente. O <b>IGC</b> mede: estratégias de localização (idiomas e adaptação), presença multiplataforma, distribuição internacional, uso de engines e tecnologias globais.',
      'igc.insight': 'A cultura precisa dialogar com o mundo para circular.',

      'idi.tag':     'Desempenho Internacional',
      'idi.title':   'Qual é a performance desses jogos fora de seus países?',
      'idi.lede':    'O <b>IDI</b> é composto por três dimensões: <em>circulação</em> (plataformas, idiomas, mercados), <em>reconhecimento</em> (avaliações, premiações) e <em>engajamento</em> (reviews, base estimada de jogadores).',
      'idi.insight': 'Nem todo jogo culturalmente forte é internacionalmente forte. Mas alguns são.',

      'int.tag':   'Ficha Técnica Interativa',
      'int.title': 'Perfil de Casos e Indicadores Sintéticos',
      'int.lede':  'Ao cruzar as dimensões de Identidade Cultural ICG e de Desempenho Internacional - IDI, esta ferramenta permite mapear clinicamente como cada título articula sua herança local frente às pressões técnicas e de recepção do mercado hegemônico.',

      'cases.tag':   'Glocalização em prática',
      'cases.title': 'Casos exemplares.',
      'cases.lede':  'Nem tudo é número. Apresentamos aqui jogos que ilustram como a glocalização opera na prática.',
      'cases.c1':    'Sertão nordestino como experiência central — sobrevivência, memória e cultura.',
      'cases.c2':    'Mitologia chinesa como motor narrativo e estético global.',
      'cases.c3':    'Cultura Tarahumara (Rarámuri) traduzida para uma aventura 3D.',
      'cases.c4':    'Mitologia hindu e arte Pahari em um action-adventure premiado.',
      'cases.after': 'Esses exemplos demonstram que identidade cultural pode ser diferencial estratégico quando articulada com inteligência de mercado.',

      'impl.tag':    'O que isso significa?',
      'impl.title':  'Implicações.',
      'impl.c1.k':   'Para políticas públicas',
      'impl.c1.p':   'Indicadores culturais podem orientar editais e programas de internacionalização.',
      'impl.c2.k':   'Para desenvolvedores',
      'impl.c2.p':   'Cultura não é apenas estética: pode ser ativo competitivo.',
      'impl.c3.k':   'Para associações',
      'impl.c3.p':   'É possível mensurar identidade cultural de forma replicável e integrada a modelos econométricos.',
      'impl.key':    'Dados culturais podem dialogar com desempenho econômico.',

      'fy.tag':        'Para você',
      'fy.title':  'Diretrizes Estratégicas.',
      'fy.lede':   'Esta seção converte os resultados das análises em agendas operacionais para repensar a posição do Sul Global no mercado de jogos. Explore, a seguir, os insights e os direcionamentos práticos customizados para os três pilares de sustentação dessa indústria:',
      'partners.tag':   'Parceiros',
      'partners.title': 'Realização e apoio.',
      'fy.gov.h':      'Governo',
      'fy.gov.hint':   'Políticas públicas & fomento',
      'fy.gov.p':      'Use os indicadores para orientar editais, fomento à internacionalização, inteligência cultural e diplomacia criativa.',
      'fy.gov.cta':    'Brief para gestores públicos',
      'fy.assoc.h':    'Associações',
      'fy.assoc.hint': 'Benchmarks setoriais',
      'fy.assoc.p':    'Integre os índices a modelos econométricos e estudos de ecossistema para representar o setor junto a governos e investidores.',
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
      'footer.int':     'Integração',
      'footer.legal':   'Legal',
      'footer.privacy': 'Política de Privacidade',
      'footer.terms':   'Termos de Uso',
      'footer.cookies': 'Política de Cookies',
      'footer.copy':    '© 2026 GLOCAL GAMES · Todos os direitos reservados.'
    },

    en: {
      'meta.title':       'GLOCAL GAMES — Cultural Identity and Performance in the Global South',
      'meta.description': 'An investigation into how Global South countries embed cultural identity into video games, and its effects on international performance.',

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
      'hero.lede':   'Cultural identity and performance in the Global South. An investigation into how Global South countries incorporate cultural identity into video games — and its effects on international performance.',
      'hero.cta1':   'About the project',
      'hero.cta2':   'Methodology',
      'hero.cta3':   'Explore the dashboard →',
      'hero.hud.region': 'Region',
      'hero.hud.sample': 'Sample',
      'hero.hud.period': 'Period',
      'hero.hud.dims':   'Dimensions',
      'hero.scroll':     'scroll',

      'metrics.icg':  'Avg. ICG',
      'metrics.icgc': 'Cultural identity',
      'metrics.igc':  'Avg. IGC',
      'metrics.igcc': 'Creative glocalization',
      'metrics.idi':  'Avg. IDI',
      'metrics.idic': 'International performance',
      'metrics.ii':   'Integrated index',
      'metrics.iic':  'Synthesis of the 3 axes',

      'ctx.tag':    'Context',
      'ctx.title':  'The industry map is unbalanced.',
      'ctx.lede':   'The video game industry is one of the most profitable sectors of the creative economy; however, its production and recognition remain largely concentrated in the Global North: <b>China (US$ 47B)</b> and the <b>United States (US$ 46.1B)</b> alone account for nearly half of the global games industry revenue.',
      'ctx.source': 'Source',

      'about.tag':   'About the project',
      'about.title': 'A strategic interface for cultural intelligence.',
      'about.lede':  '<b>Glocal Games</b> is an applied research project that examines the effects of cultural identity and glocalization in the global video game industry. We investigate games produced in Global South countries as empirical sample, building and analyzing composite indicators across three dimensions: <em>cultural identity</em>, <em>glocalization</em> and <em>international performance</em>.',
      'about.p1.h':  'Cultural Identity',
      'about.p1.p':  'Narrative, mythology, visual setting, music, language, social practices, and contemporary identity.',
      'about.p2.h':  'Creative Glocalization',
      'about.p2.p':  'Localization, multi-platform presence, international distribution, global engines and technologies.',
      'about.p3.h':  'International Performance',
      'about.p3.p':  'Circulation, recognition (awards, ratings), and engagement (player base).',

      'common.insight': 'Top Insight',

      'icg.tag':     'Cultural Identity in Games',
      'icg.title':   'How do countries incorporate their culture into games?',
      'icg.lede':    'The <b>ICG</b> measures the presence and centrality of cultural elements in games, considering: narrative, mythology and history, visual setting, music and language, social practices, and contemporary identity. Explore the charts to see how culture is distributed across countries, genres, and periods.',
      'icg.insight': 'Not every cultural reference carries the same weight. Some games use culture as a superficial aesthetic layer; others structure their entire experience around it.',

      'igc.tag':     'Creative Glocalization',
      'igc.title':   'Can games translate the local into the global?',
      'igc.lede':    'A strong cultural identity is not enough. It must be made intelligible and internationally transferable. The <b>IGC</b> measures: localization strategies (languages and adaptation), multi-platform presence, international distribution, and the use of global engines and technologies.',
      'igc.insight': 'Culture must engage with the world in order to circulate.',

      'idi.tag':     'International Performance',
      'idi.title':   'How do these games perform outside their home countries?',
      'idi.lede':    'The <b>IDI</b> is composed of three dimensions: <em>circulation</em> (platforms, languages, markets), <em>recognition</em> (ratings, awards), and <em>engagement</em> (reviews, estimated player base).',
      'idi.insight': 'Not every culturally strong game is internationally strong. But some are.',

      'int.tag':   'Integration of Indices',
      'int.title': 'Does cultural presence generate economic return?',
      'int.lede':  'Here we cross the three indicators — <b>ICG</b>, <b>IGC</b> and <b>IDI</b>. The goal is to empirically test whether culturally dense games achieve better international performance.',

      'cases.tag':   'Glocalization in practice',
      'cases.title': 'Exemplary cases.',
      'cases.lede':  'Not everything is numbers. Here we present games that illustrate how glocalization operates in practice.',
      'cases.c1':    'Brazilian backlands as core experience — survival, memory, and culture.',
      'cases.c2':    'Chinese mythology as global narrative and aesthetic driver.',
      'cases.c3':    'Tarahumara (Rarámuri) culture translated into a 3D adventure.',
      'cases.c4':    'Hindu mythology and Pahari art in an award-winning action-adventure.',
      'cases.after': 'These examples show that cultural identity can be a strategic differentiator when articulated with market intelligence.',

      'impl.tag':    'What does this mean?',
      'impl.title':  'Implications.',
      'impl.c1.k':   'For public policy',
      'impl.c1.p':   'Cultural indicators can guide public calls and internationalization programs.',
      'impl.c2.k':   'For developers',
      'impl.c2.p':   'Culture is not merely aesthetic: it can be a competitive asset.',
      'impl.c3.k':   'For associations',
      'impl.c3.p':   'It is possible to measure cultural identity in a replicable way and integrate it into econometric models.',
      'impl.key':    'Cultural data can dialogue with economic performance.',

      'fy.tag':        'For you',
      'fy.title':      'Explore, connect.',
      'fy.lede':       'Glocal Games is an invitation to rethink the position of the Global South in the creative economy. The project is open and ongoing.',
      'fy.gov.h':      'Government',
      'fy.gov.hint':   'Public policy & funding',
      'fy.gov.p':      'Use the indicators to guide public calls, internationalization incentives, cultural intelligence and creative diplomacy.',
      'fy.gov.cta':    'Brief for public managers',
      'fy.assoc.h':    'Associations',
      'fy.assoc.hint': 'Industry benchmarks',
      'fy.assoc.p':    'Integrate the indices into econometric models and ecosystem studies to represent the sector before governments and investors.',
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
      'footer.int':     'Integration',
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
