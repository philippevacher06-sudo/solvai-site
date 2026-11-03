(()=>{
  const links=[['/','Accueil'],['/marche/','US500'],['/macro/','Macro & Fed'],['/entreprises/','Entreprises'],['/laboratoire/','Laboratoire'],['/journal/','Journal']];
  const here=location.pathname.replace(/index\.html$/,'').replace(/\/$/,'/')||'/';
  const header=document.querySelector('[data-header]');
  if(header){
    header.innerHTML=`<div class="notice">LABORATOIRE DE RECHERCHE EN ENVIRONNEMENT DÉMONSTRATION · INFORMATION GÉNÉRALE, PAS DE CONSEIL EN INVESTISSEMENT</div><header class="header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Solvai, accueil"><span class="brand-symbol" aria-hidden="true"><i></i><i></i><i></i></span><span><span class="brand-label">SOL<b>VAI</b></span><span class="brand-sub">US500 Intelligence Lab</span></span></a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="main-navigation">☰ Menu</button><nav id="main-navigation" class="nav" aria-label="Navigation principale">${links.map(([url,label])=>`<a href="${url}" ${url===here?'aria-current="page"':''}>${label}</a>`).join('')}<a class="nav-cta" href="/sources/">Sources ↗</a></nav></div></header>`;
    const toggle=header.querySelector('.menu-toggle'),nav=header.querySelector('.nav');
    toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
  }
  const footer=document.querySelector('[data-footer]');
  if(footer)footer.innerHTML=`<footer class="footer"><div class="wrap"><div class="footer-grid"><div><a class="brand" href="/"><span class="brand-symbol" aria-hidden="true"><i></i><i></i><i></i></span><span><span class="brand-label">SOL<b>VAI</b></span><span class="brand-sub">US500 Intelligence Lab</span></span></a><p class="description">Un regard documenté sur l’US500, ses moteurs économiques et un laboratoire indépendant de recherche en intelligence artificielle.</p></div><div><h4>Explorer</h4><a href="/marche/">Observatoire US500</a><a href="/macro/">Macroéconomie</a><a href="/calendrier/">Calendrier économique</a><a href="/entreprises/">Entreprises</a><a href="/heatmap/">Heatmap S&amp;P 500</a></div><div><h4>Laboratoire</h4><a href="/laboratoire/">Notre méthode</a><a href="/journal/">Journal public</a><a href="/statistiques/">Transparence</a></div><div><h4>Informations</h4><a href="/sources/">Sources officielles</a><a href="https://github.com/philippevacher06-sudo/solvai-site" target="_blank" rel="noopener noreferrer">Code du site ↗</a><a href="mailto:atelier@solvai.fr">Contact</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} SOLVAI · Recherche & développement IA</span><p>Marchés et instruments financiers : risques élevés. Aucune sollicitation, recommandation personnalisée ni diffusion de résultats du bot.</p></div></div></footer>`;
  document.querySelectorAll('[data-today]').forEach(el=>el.textContent=new Intl.DateTimeFormat('fr-FR',{day:'2-digit',month:'long',year:'numeric',timeZone:'Europe/Paris'}).format(new Date()));
  const hero=document.querySelector('.page-hero');
  if(hero && (here==='/macro/' || here==='/entreprises/')){
    const target=here==='/macro/' ? ['/calendrier/','Ouvrir le calendrier économique interactif'] : ['/heatmap/','Voir la carte de chaleur du S&P 500'];
    hero.insertAdjacentHTML('afterend',`<div class="wrap" style="padding-top:22px"><a class="btn lime" href="${target[0]}">${target[1]} <span class="arrow">↗</span></a></div>`);
  }
})();
