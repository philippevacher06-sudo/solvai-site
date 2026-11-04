(()=>{
  const links=[['/','Accueil'],['/marche/','US500'],['/macro/','Macro & Fed'],['/entreprises/','Entreprises'],['/laboratoire/','Laboratoire'],['/journal/','Journal']];
  const here=location.pathname.replace(/index\.html$/,'').replace(/\/$/,'/')||'/';
  const header=document.querySelector('[data-header]');
  if(header){
    header.innerHTML=`<div class="notice">LABORATOIRE DE RECHERCHE EN ENVIRONNEMENT DÉMONSTRATION · INFORMATION GÉNÉRALE, PAS DE CONSEIL EN INVESTISSEMENT · <a href="https://t.me/SOLVAI_Research" target="_blank" rel="noopener noreferrer" style="color:#bcf47b;font-weight:700">Notre communauté Telegram →</a></div><header class="header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Solvai, accueil"><span class="brand-symbol" aria-hidden="true"><i></i><i></i><i></i></span><span><span class="brand-label">SOL<b>VAI</b></span><span class="brand-sub">US500 Intelligence Lab</span></span></a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="main-navigation">☰ Menu</button><nav id="main-navigation" class="nav" aria-label="Navigation principale">${links.map(([url,label])=>`<a href="${url}" ${url===here?'aria-current="page"':''}>${label}</a>`).join('')}<a class="nav-cta" href="/sources/">Sources ↗</a></nav></div></header>`;
    const toggle=header.querySelector('.menu-toggle'),nav=header.querySelector('.nav');
    toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
  }
  const footer=document.querySelector('[data-footer]');
  if(footer)footer.innerHTML=`<footer class="footer"><div class="wrap"><div class="footer-grid"><div><a class="brand" href="/"><span class="brand-symbol" aria-hidden="true"><i></i><i></i><i></i></span><span><span class="brand-label">SOL<b>VAI</b></span><span class="brand-sub">US500 Intelligence Lab</span></span></a><p class="description">Un regard documenté sur l’US500, ses moteurs économiques et un laboratoire indépendant de recherche en intelligence artificielle.</p></div><div><h4>Explorer</h4><a href="/marche/">Observatoire US500</a><a href="/macro/">Macroéconomie</a><a href="/calendrier/">Calendrier économique</a><a href="/entreprises/">Entreprises</a><a href="/heatmap/">Heatmap S&amp;P 500</a></div><div><h4>Laboratoire</h4><a href="/laboratoire/">Notre méthode</a><a href="/journal/">Journal public</a><a href="/statistiques/">Transparence</a></div><div><h4>Informations</h4><a href="/sources/">Sources officielles</a><a href="https://t.me/SOLVAI_Research" target="_blank" rel="noopener noreferrer">Communauté Telegram →</a><a href="https://github.com/philippevacher06-sudo/solvai-site" target="_blank" rel="noopener noreferrer">Code du site ↗</a><a href="/contact/">Contact</a><a href="/mentions-legales/">Mentions légales</a><a href="/confidentialite/">Confidentialité</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} SOLVAI · Recherche & développement IA</span><p>Marchés et instruments financiers : risques élevés. Aucune sollicitation, recommandation personnalisée ni diffusion de résultats du bot.</p></div></div></footer>`;
  document.querySelectorAll('[data-today]').forEach(el=>el.textContent=new Intl.DateTimeFormat('fr-FR',{day:'2-digit',month:'long',year:'numeric',timeZone:'Europe/Paris'}).format(new Date()));
  if(here==='/') {
    const tape=document.querySelector('.tape');
    tape?.insertAdjacentHTML('afterend',`<section class="section tight section-dark" aria-labelledby="community-heading"><div class="wrap split"><div><span class="eyebrow">SOLVAI / Community</span><h2 id="community-heading">L’analyse se construit ensemble.</h2><p>Au-delà des graphiques, SOLVAI réunit les passionnés d’US500, de macroéconomie et d’intelligence artificielle. Retrouvez nos publications et prenez part aux discussions sur notre canal Telegram public.</p><div class="actions"><a class="btn lime" href="https://t.me/SOLVAI_Research" target="_blank" rel="noopener noreferrer">🌍 Rejoindre la communauté <span class="arrow">→</span></a></div></div><div class="quote-panel"><span class="kicker">SOLVAI | US500 Research</span><blockquote>Observer. Vérifier. Échanger.</blockquote><p>Publications et commentaires ouverts · Français &amp; English · Recherche indépendante · Aucun conseil personnalisé.</p></div></div></section>`);
  }
  // Les modules TradingView restent inactifs tant que le visiteur n'a pas cliqué.
  // Aucun choix n'est conservé : à la prochaine visite, le module sera à nouveau bloqué.
  document.querySelectorAll('.tradingview-widget-container[data-tv-src]').forEach(box=>{
    const button=box.querySelector('[data-tv-load]');
    const options=box.querySelector('.tv-widget-options');
    const overlay=box.querySelector('.tv-consent');
    button?.addEventListener('click',()=>{
      if(box.dataset.tvLoaded==='true'||!options)return;
      const src=box.dataset.tvSrc||'';
      if(!src.startsWith('https://s3.tradingview.com/external-embedding/'))return;
      button.disabled=true;
      button.textContent='Chargement en cours…';
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
        button.textContent='Réessayer le chargement';
        const hint=overlay?.querySelector('.tv-error');
        if(hint)hint.hidden=false;
      };
      box.dataset.tvLoaded='true';
      box.appendChild(script);
    });
  });
  const hero=document.querySelector('.page-hero');
  if(hero && (here==='/macro/' || here==='/entreprises/')){
    const target=here==='/macro/' ? ['/calendrier/','Ouvrir le calendrier économique interactif'] : ['/heatmap/','Voir la carte de chaleur du S&P 500'];
    hero.insertAdjacentHTML('afterend',`<div class="wrap" style="padding-top:22px"><a class="btn lime" href="${target[0]}">${target[1]} <span class="arrow">↗</span></a></div>`);
  }
})();
