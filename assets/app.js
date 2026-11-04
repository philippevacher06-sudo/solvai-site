(()=>{
  const isFr=location.pathname.startsWith('/fr/');
  const pagePath=(location.pathname.replace(/^\/fr(?=\/)/,'').replace(/index\.html$/,'').replace(/\/$/,'/')||'/');
  const localized=(path,fr=isFr)=>fr?'/fr'+(path==='/'?'/':path):path;
  const strings={
    en:{
      notice:'DEMO-ONLY RESEARCH LAB · GENERAL INFORMATION, NOT INVESTMENT ADVICE',telegram:'Join our Telegram community →',
      home:'Home',macro:'Macro & Fed',companies:'Companies',lab:'Research Lab',journal:'Journal',sources:'Sources ↗',
      menu:'Menu',navigation:'Main navigation',welcome:'SOLVAI home',lang:'Language',
      description:'Independent perspectives on the US500, its economic drivers and collaborative AI research.',
      explore:'Explore',markets:'US500 Observatory',calendar:'Economic Calendar',heatmap:'S&P 500 Heatmap',method:'Our Methodology',
      transparency:'Transparency',info:'Information',official:'Official Sources',github:'Website source code ↗',
      legal:'Legal Notice',privacy:'Privacy',copyright:'AI Research & Development',
      risk:'Financial markets involve substantial risks. No solicitation, personalized advice or publication of trading bot results.',
      communityHeading:'Better research, together.',communityText:'SOLVAI brings together people curious about the US500, macroeconomics and artificial intelligence. Explore our public research notes and join the conversation on our Telegram channel.',communityJoin:'🌍 Join the community',
      communityQuote:'Observe. Verify. Discuss.',communityNote:'Public posts and discussions · English &amp; français · Independent research · No personalized advice.',
      loading:'Loading…',retry:'Try loading again',
      openCalendar:'Open the interactive economic calendar',openHeatmap:'View the S&P 500 sector heatmap'
    },
    fr:{
      notice:'LABORATOIRE DE RECHERCHE EN ENVIRONNEMENT DÉMONSTRATION · INFORMATION GÉNÉRALE, PAS DE CONSEIL EN INVESTISSEMENT',telegram:'Notre communauté Telegram →',
      home:'Accueil',macro:'Macro & Fed',companies:'Entreprises',lab:'Laboratoire',journal:'Journal',sources:'Sources ↗',
      menu:'Menu',navigation:'Navigation principale',welcome:'Solvai, accueil',lang:'Langue',
      description:'Un regard documenté sur l’US500, ses moteurs économiques et un laboratoire indépendant de recherche en intelligence artificielle.',
      explore:'Explorer',markets:'Observatoire US500',calendar:'Calendrier économique',heatmap:'Heatmap S&amp;P 500',method:'Notre méthode',
      transparency:'Transparence',info:'Informations',official:'Sources officielles',github:'Code du site ↗',
      legal:'Mentions légales',privacy:'Confidentialité',copyright:'Recherche & développement IA',
      risk:'Marchés et instruments financiers : risques élevés. Aucune sollicitation, recommandation personnalisée ni diffusion de résultats du bot.',
      communityHeading:'L’analyse se construit ensemble.',communityText:'Au-delà des graphiques, SOLVAI réunit les passionnés d’US500, de macroéconomie et d’intelligence artificielle. Retrouvez nos publications et prenez part aux discussions sur notre canal Telegram public.',communityJoin:'🌍 Rejoindre la communauté',
      communityQuote:'Observer. Vérifier. Échanger.',communityNote:'Publications et commentaires ouverts · Français &amp; English · Recherche indépendante · Aucun conseil personnalisé.',
      loading:'Chargement en cours…',retry:'Réessayer le chargement',
      openCalendar:'Ouvrir le calendrier économique interactif',openHeatmap:'Voir la carte de chaleur du S&P 500'
    }
  };
  const t=strings[isFr?'fr':'en'];
  const links=[['/',t.home],['/marche/','US500'],['/macro/',t.macro],['/entreprises/',t.companies],['/laboratoire/',t.lab],['/journal/',t.journal]];
  const logo=`<span class="brand-symbol" aria-hidden="true"><i></i><i></i><i></i></span><span><span class="brand-label">SOL<b>VAI</b></span><span class="brand-sub">US500 Intelligence Lab</span></span>`;
  const header=document.querySelector('[data-header]');
  if(header){
    header.innerHTML=`<div class="notice">${t.notice} · <a href="https://t.me/SOLVAI_Research" target="_blank" rel="noopener noreferrer" style="color:#bcf47b;font-weight:700">${t.telegram}</a></div><header class="header"><div class="wrap header-inner"><a class="brand" href="${localized('/')}" aria-label="${t.welcome}">${logo}</a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="main-navigation">☰ ${t.menu}</button><nav id="main-navigation" class="nav" aria-label="${t.navigation}">${links.map(([url,label])=>`<a href="${localized(url)}" ${url===pagePath?'aria-current="page"':''}>${label}</a>`).join('')}<a class="nav-cta" href="${localized('/sources/')}">${t.sources}</a></nav><div class="lang-switch" role="group" aria-label="${t.lang}"><a href="${localized(pagePath,false)}" lang="en" ${!isFr?'aria-current="true"':''}>EN</a><span aria-hidden="true">/</span><a href="${localized(pagePath,true)}" lang="fr" ${isFr?'aria-current="true"':''}>FR</a></div></div></header>`;
    const toggle=header.querySelector('.menu-toggle'),nav=header.querySelector('.nav');
    toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
  }
  const footer=document.querySelector('[data-footer]');
  if(footer)footer.innerHTML=`<footer class="footer"><div class="wrap"><div class="footer-grid"><div><a class="brand" href="${localized('/')}">${logo}</a><p class="description">${t.description}</p></div><div><h4>${t.explore}</h4><a href="${localized('/marche/')}">${t.markets}</a><a href="${localized('/macro/')}">${t.macro}</a><a href="${localized('/calendrier/')}">${t.calendar}</a><a href="${localized('/entreprises/')}">${t.companies}</a><a href="${localized('/heatmap/')}">${t.heatmap}</a></div><div><h4>${t.lab}</h4><a href="${localized('/laboratoire/')}">${t.method}</a><a href="${localized('/journal/')}">${isFr?'Journal public':'Public journal'}</a><a href="${localized('/statistiques/')}">${t.transparency}</a></div><div><h4>${t.info}</h4><a href="${localized('/sources/')}">${t.official}</a><a href="https://t.me/SOLVAI_Research" target="_blank" rel="noopener noreferrer">${t.telegram}</a><a href="https://github.com/philippevacher06-sudo/solvai-site" target="_blank" rel="noopener noreferrer">${t.github}</a><a href="${localized('/contact/')}">Contact</a><a href="${localized('/mentions-legales/')}">${t.legal}</a><a href="${localized('/confidentialite/')}">${t.privacy}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} SOLVAI · ${t.copyright}</span><p>${t.risk}</p></div></div></footer>`;
  document.querySelectorAll('[data-today]').forEach(el=>el.textContent=new Intl.DateTimeFormat(isFr?'fr-FR':'en-GB',{day:'2-digit',month:'long',year:'numeric',timeZone:'Europe/Paris'}).format(new Date()));
  if(pagePath==='/') {
    const tape=document.querySelector('.tape');
    tape?.insertAdjacentHTML('afterend',`<section class="section tight section-dark" aria-labelledby="community-heading"><div class="wrap split"><div><span class="eyebrow">SOLVAI / Community</span><h2 id="community-heading">${t.communityHeading}</h2><p>${t.communityText}</p><div class="actions"><a class="btn lime" href="https://t.me/SOLVAI_Research" target="_blank" rel="noopener noreferrer">${t.communityJoin} <span class="arrow">→</span></a></div></div><div class="quote-panel"><span class="kicker">SOLVAI | US500 Research</span><blockquote>${t.communityQuote}</blockquote><p>${t.communityNote}</p></div></div></section>`);
  }
  // TradingView widgets stay disabled until the visitor explicitly clicks.
  // Consent choice is not retained across visits.
  document.querySelectorAll('.tradingview-widget-container[data-tv-src]').forEach(box=>{
    const button=box.querySelector('[data-tv-load]');
    const options=box.querySelector('.tv-widget-options');
    const overlay=box.querySelector('.tv-consent');
    button?.addEventListener('click',()=>{
      if(box.dataset.tvLoaded==='true'||!options)return;
      const src=box.dataset.tvSrc||'';
      if(!src.startsWith('https://s3.tradingview.com/external-embedding/'))return;
      button.disabled=true;
      button.textContent=t.loading;
      const script=document.createElement('script');
      script.type='text/javascript';
      script.src=src;
      script.async=true;
      script.textContent=options.textContent;
      script.onload=()=>overlay?.remove();
      script.onerror=()=>{
        script.remove();
        box.dataset.tvLoaded='false';
        button.disabled=false;
        button.textContent=t.retry;
        const hint=overlay?.querySelector('.tv-error');
        if(hint)hint.hidden=false;
      };
      box.dataset.tvLoaded='true';
      box.appendChild(script);
    });
  });
  const hero=document.querySelector('.page-hero');
  if(hero && (pagePath==='/macro/' || pagePath==='/entreprises/')){
    const target=pagePath==='/macro/' ? ['/calendrier/',t.openCalendar] : ['/heatmap/',t.openHeatmap];
    hero.insertAdjacentHTML('afterend',`<div class="wrap" style="padding-top:22px"><a class="btn lime" href="${localized(target[0])}">${target[1]} <span class="arrow">↗</span></a></div>`);
  }
})();