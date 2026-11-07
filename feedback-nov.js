(function(){
const guide='/orientaciones.html';
document.querySelector('.hero-guide-link')?.remove();
const overview=document.getElementById('como');
if(overview){
 const head=overview.querySelector('.section-head');
 if(head){head.querySelector('.kicker').textContent='TU RECORRIDO POR EL RECURSO';head.querySelector('h2').innerHTML='Pequeñas oportunidades.<br>Grandes aprendizajes.';head.querySelector('p').textContent='Esta herramienta está organizada para que puedas explorarla a tu ritmo. Empieza por comprender la educación socioemocional y avanza hasta llevar las orientaciones a tu clase.'}
 const steps=[
 {n:'01',icon:'😊',title:'Comprende las emociones',description:'Conoce qué es la educación socioemocional y por qué es importante en primaria.',to:'#introduccion',bg:'#fff0ae'},
 {n:'02',icon:'✳️',title:'Conoce los cinco ejes',description:'Descubre los aprendizajes de la propuesta y cómo se relacionan con la vida escolar.',to:'#ejes',bg:'#e7dbff'},
 {n:'03',icon:'📚',title:'Explora por grado y área',description:'Encuentra los ejes y aprendizajes sugeridos para la materia que enseñas.',to:'#explorar',bg:'#d8ebff'},
 {n:'04',icon:'💡',title:'Llévalo a tu clase',description:'Consulta la ruta y adapta las orientaciones a tus actividades cotidianas.',to:'#ruta',bg:'#d7f3e3'}
 ];
 const grid=overview.querySelector('.feature-grid');if(grid){grid.replaceChildren();steps.forEach(x=>{const a=document.createElement('a');a.className='feature learning-step';a.href=x.to;a.innerHTML='<span class="learning-number">'+x.n+'</span><span class="learning-icon" aria-hidden="true">'+x.icon+'</span><h3>'+x.title+'</h3><p>'+x.description+'</p><span class="learning-action">Explorar sección →</span>';a.querySelector('.learning-icon').style.background=x.bg;grid.append(a)})}
}
const axes=document.getElementById('ejes');
if(axes){
 const p=axes.querySelector('.section-head p');
 if(p)p.textContent='Los cinco ejes fueron construidos a partir de los hallazgos de la investigación en las instituciones educativas Carlos Holmes Trujillo y Ciudad Modelo, mediante entrevistas, grupos focales y otros instrumentos. Retoman referentes y lineamientos del Ministerio de Educación Nacional adaptados a los contextos estudiados. Por eso, su organización es propia de esta propuesta y no una copia literal de los lineamientos.';
 const head=axes.querySelector('.section-head');
 if(head&&!head.querySelector('.axis-instruction')){const how=document.createElement('p');how.className='axis-instruction';how.textContent='¿Cómo explorarlos? Selecciona cualquiera de las cinco tarjetas para leer su definición completa.';head.append(how)}
 const guideButton=axes.querySelector('.axis-guide-cta a');if(guideButton){guideButton.href=guide;guideButton.textContent='Consultar guía de orientaciones de la propuesta →'}
}
const examples=document.getElementById('ejemplos');
if(examples&&!examples.querySelector('.project-integration')){
 const box=document.createElement('div');box.className='project-integration';box.innerHTML='<div class="project-copy"><span class="project-eyebrow">OTRAS POSIBILIDADES DE INTEGRACIÓN</span><h3>Los aprendizajes socioemocionales pueden integrarse de muchas formas.</h3><p>La propuesta prioriza su articulación con las diferentes áreas del conocimiento, a través de los cinco ejes. Como posibilidad complementaria, la guía también presenta sugerencias para integrarlos mediante proyectos que ya se desarrollan en tu institución.</p></div><a class="button" href="'+guide+'">Consultar guía de orientaciones de la propuesta →</a>';
 examples.querySelector('.container')?.append(box);
}
const resources=document.getElementById('recursos');
if(resources){
 const sub=resources.querySelector('.section-head p');if(sub)sub.textContent='Encuentra los lineamientos del MEN, las leyes de soporte, la progresión de aprendizajes de primero a quinto y la guía de orientaciones pedagógicas.';
 const card=resources.querySelector('a[href="/matriz.html"]');
 if(card){card.href='/progresion.html';card.querySelector('.support-type').textContent='PROGRESIÓN POR GRADO · 1° A 5°';card.querySelector('h3').textContent='Matriz de progresión de aprendizajes';card.querySelector('p').textContent='Compara cómo aumenta la complejidad de cada uno de los cinco ejes entre primero y quinto.';card.querySelector('strong').textContent='Consultar progresión ↗'}
 const guideButton=resources.querySelector('.guide-band a');
 if(guideButton){guideButton.href=guide;guideButton.textContent='Consultar guía de orientaciones de la propuesta →'}
}
})();