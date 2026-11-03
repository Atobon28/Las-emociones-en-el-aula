/* Mejora progresiva: orientación y estados accesibles */
(function(){
  const explorer=document.getElementById('explorar');
  if(!explorer)return;
  const results=document.getElementById('results');
  const subject=document.getElementById('area');
  const grade=document.getElementById('grado');
  const search=document.getElementById('consultar');
  const reset=document.getElementById('resetSearch');
  const resultTitle=document.getElementById('resultTitle');
  results.setAttribute('aria-live','polite');
  results.setAttribute('aria-relevant','additions text');
  search.setAttribute('aria-controls','results');
  const help=document.createElement('div');
  help.className='help-list';
  help.innerHTML='<strong>¿Es la primera vez que usas esta herramienta?</strong><p>Elige primero tu grado, luego tu materia y presiona el botón azul. Verás los aprendizajes sugeridos; abre cada orientación para conocer cómo llevarla a clase.</p>';
  const side=explorer.querySelector('.explorer-sidebar');
  side.appendChild(help);
  const status=document.createElement('p');
  status.className='explorer-progress';
  status.id='consultaEstado';
  status.setAttribute('role','status');
  status.setAttribute('aria-live','polite');
  search.insertAdjacentElement('beforebegin',status);
  function update(){
    status.textContent='Tu selección: '+grade.options[grade.selectedIndex].text+' · '+subject.value;
  }
  grade.addEventListener('change',update);
  subject.addEventListener('change',update);
  reset?.addEventListener('click',()=>setTimeout(update,0));
  update();
  // Permitir acceso rápido al buscador y reducir desplazamientos.
  const primary=document.querySelector('.hero-actions a[href="#explorar"]');
  if(primary) primary.textContent='Buscar orientación para mi clase →';
  const subtitle=document.querySelector('.hero .lead');
  if(subtitle) subtitle.textContent='Elige el grado y la materia que enseñas. Encuentra aprendizajes socioemocionales para integrar en tus clases, sin crear actividades adicionales.';
  // Lectura de resultados clara para quienes usan lectores de pantalla.
  resultTitle.setAttribute('tabindex','-1');
  // Etiqueta explícita de navegación en dispositivos pequeños.
  const menu=document.getElementById('menu');
  if(menu)menu.setAttribute('title','Abrir o cerrar menú');
})();
