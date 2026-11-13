/* Ajustes de UX solicitados en la revisión con Berta — 13 nov 2026 */
(function(){
  const sections=[
    {id:'introduccion',number:'01',icon:'😊',title:'¿Qué es la educación socioemocional?',description:'Conoce qué significa y por qué es importante en la escuela.',color:'#fff0ae'},
    {id:'ejes',number:'02',icon:'✳️',title:'Los cinco ejes',description:'Descubre los ejes construidos a partir de la investigación.',color:'#e7dbff'},
    {id:'explorar',number:'03',icon:'📚',title:'Explora por grado y área',description:'Selecciona tu grado y materia para consultar los aprendizajes.',color:'#d8ebff'},
    {id:'ejemplos',number:'04',icon:'💡',title:'Así se conecta en el aula',description:'Conoce ejemplos que puedes adaptar a tus clases.',color:'#ffe1da'},
    {id:'ruta',number:'05',icon:'🧭',title:'Cinco pasos para llevarlo al aula',description:'Sigue la ruta pedagógica para integrar los aprendizajes.',color:'#d7f3e3'}
  ];
  const hero=document.querySelector('#inicio');
  const lead=hero?.querySelector('.lead');
  if(lead)lead.textContent='Esta propuesta de diseño curricular fortalece la educación socioemocional mediante la integración de cinco ejes en las diferentes áreas del conocimiento. Descubre cómo llevarlos a tus clases de manera transversal.';
  const actions=hero?.querySelector('.hero-actions');
  if(actions){
    const first=actions.querySelector('a');
    if(first){first.href='#como';first.textContent='Comenzar recorrido →';first.setAttribute('aria-label','Comenzar el recorrido por el recurso');}
    [...actions.querySelectorAll('a')].slice(1).forEach(a=>a.remove());
  }
  const skip=document.querySelector('.skip-link');if(skip){skip.href='#como';skip.textContent='Saltar al recorrido de la herramienta';}
  const nav=document.querySelector('#navlinks');
  if(nav){
    const items=[['Inicio','#inicio'],['Sobre la investigación','#proyecto'],['Documentos de apoyo','#recursos']];
    nav.replaceChildren();
    items.forEach(([label,href])=>{
      const link=document.createElement('a');link.href=href;link.textContent=label;
      link.addEventListener('click',()=>{
        nav.classList.remove('open');
        const menu=document.querySelector('#menu');
        if(menu){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú de navegación');menu.textContent='☰';}
      });
      nav.append(link);
    });
    nav.setAttribute('aria-label','Información general');
    document.querySelector('.header .nav > a.button')?.remove();
  }
  const overview=document.querySelector('#como');
  if(overview){
    overview.setAttribute('aria-labelledby','recorrido-title');
    const title=overview.querySelector('.section-head h2');
    if(title)title.id='recorrido-title';
    const desc=overview.querySelector('.section-head p');
    if(desc)desc.textContent='Elige el tema que quieres consultar. Cada tarjeta te lleva directamente a esa sección y podrás regresar aquí cuando lo necesites.';
    const kicker=overview.querySelector('.section-head .kicker');
    if(kicker)kicker.textContent='MENÚ DE RECORRIDO · CINCO SECCIONES';
    const grid=overview.querySelector('.feature-grid');
    if(grid){
      grid.replaceChildren();
      sections.forEach(item=>{
        const card=document.createElement('a');
        card.className='feature learning-step';
        card.href='#'+item.id;
        card.setAttribute('aria-label',item.number+'. '+item.title);
        card.innerHTML='<span class="learning-number">'+item.number+'</span><span class="learning-icon" aria-hidden="true">'+item.icon+'</span><h3>'+item.title+'</h3><p>'+item.description+'</p><span class="learning-action">Ir a esta sección →</span>';
        card.querySelector('.learning-icon').style.background=item.color;
        grid.append(card);
      });
    }
  }
  for(const item of sections){
    const sec=document.getElementById(item.id);
    if(!sec)continue;
    const heading=sec.querySelector('.section-head h2')||
      (item.id==='introduccion'?sec.querySelector('.intro-grid h2'):null);
    if(heading){heading.textContent=item.title;heading.id='titulo-'+item.id;}
    sec.setAttribute('aria-labelledby','titulo-'+item.id);
  }
  const journey=[
    {id:'introduccion',next:sections[1]},
    {id:'ejes',next:sections[2]},
    {id:'explorar',next:sections[3]},
    {id:'ejemplos',next:sections[4]},
    {id:'ruta',next:{id:'recursos',title:'Documentos de apoyo'}},
    {id:'recursos',next:{id:'proyecto',title:'Sobre la investigación'}},
    {id:'proyecto',next:null}
  ];
  journey.forEach(({id,next})=>{
    const sec=document.getElementById(id);
    const inner=sec?.querySelector('.container');
    if(!inner||inner.querySelector('.section-navigation'))return;
    const row=document.createElement('nav');
    row.className='section-navigation';row.setAttribute('aria-label','Navegar desde esta sección');
    const back=document.createElement('a');back.className='journey-link journey-back';back.href='#como';back.textContent='↑ Volver al menú';
    row.append(back);
    const go=document.createElement('a');go.className='journey-link journey-next';
    if(next){go.href='#'+next.id;go.textContent='Siguiente: '+next.title+' →';}
    else{go.href='#inicio';go.textContent='Volver al inicio ↑';}
    row.append(go);
    inner.append(row);
  });
  // Captura el botón y la posición ORIGINAL antes de abrir cualquier diálogo.
  // El botón "Entendido" regresará exactamente al mismo resultado.
  window.lastModalScrollY=window.scrollY;
  window.lastModalTrigger=null;
  document.addEventListener('click',event=>{
    const trigger=event.target.closest?.('#results .linkmore,#examples .linkmore');
    if(trigger){
      window.lastModalTrigger=trigger;
      window.lastModalScrollY=window.scrollY;
    }
  },true);
})();