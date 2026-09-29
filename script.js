const paths={mail:'M3 5h18v14H3z M3 5l9 7 9-7',pin:'M12 22s7-8 7-14a7 7 0 0 0-14 0c0 6 7 14 7 14z M9.5 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0',phone:'M5 3l4 4-2 3c2 3 4 5 7 6l3-2 4 4-2 3C10 21 3 14 3 5z',download:'M12 3v12m-5-5 5 5 5-5M4 15v6h16v-6',briefcase:'M3 7h18v14H3zM8 7V3h8v4M3 12h18M10 10v5h4v-5',database:'M21 5c0 2-4 4-9 4S3 7 3 5s4-4 9-4 9 2 9 4zM3 5v14c0 2 4 4 9 4s9-2 9-4V5M3 12c0 2 4 4 9 4s9-2 9-4',monitor:'M2 3h20v14H2zM12 17v5M7 22h10',server:'M3 2h18v8H3zM3 14h18v8H3zM6 6h1m3 0h1m-5 12h1m3 0h1',boxes:'M12 1l6 3v7l-6 3-6-3V4zM6 4l6 3 6-3M12 7v7M6 11l-5 3v7l6 3 5-3v-7M1 14l6 3 5-3M7 17v7M18 11l5 3v7l-6 3-5-3M12 14l5 3 6-3M17 17v7',graduation:'M1 8l11-6 11 6-11 6zM5 11v7c4 4 10 4 14 0v-7M23 8v12',globe:'M12 1a11 11 0 1 0 0 22 11 11 0 1 0 0-22M1 12h22M12 1c-7 7-7 15 0 22M12 1c7 7 7 15 0 22M3 6h18M3 18h18',code:'M8 5l-7 7 7 7m8-14 7 7-7 7M14 2l-4 20'};
function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.code}"/></svg>`}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
const technologies=[['Python','Py','#ffd343'],['Flask','Fl','#f5f5f5'],['Laravel','L','#ff2d20'],['PHP','php','#a497ef'],['CodeIgniter','CI','#ff493a'],['APIs REST','code','#eee'],['MySQL','My','#46a9d1'],['MariaDB','M','#eeb7a1'],['PostgreSQL','Pg','#6da9d7'],['SQL Server','SQL','#ff133b'],['ETL','database','#bdafe7','con SQL/Python'],['Linux','Lx','#ffdc52'],['Apache / Nginx','N','#29cd58'],['VPS','server','#599cfa'],['Dominios y DNS','globe','#599cfa']];
document.getElementById('tech-grid').innerHTML=technologies.map(([name,symbol,color,note])=>`<div class="tech"><span class="tech-symbol" style="--tech-color:${color}">${paths[symbol]?icon(symbol):symbol}</span><span>${name}${note?`<small>${note}</small>`:''}</span></div>`).join('');
const techIcons=['python','flask','laravel','php','codeigniter',null,'mysql','mariadb','postgresql','microsoftsqlserver',null,'linux','nginx'];
document.querySelectorAll('.tech-symbol').forEach((el,index)=>{if(techIcons[index])el.innerHTML=`<img src="assets/${techIcons[index]}.svg" alt="" width="40" height="40" loading="lazy">`});
const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('main-nav');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menú')}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const links=[...nav.querySelectorAll('a')];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){const link=links.find(a=>a.hash==='#'+entry.target.id);if(link){links.forEach(a=>{a.classList.remove('active');a.removeAttribute('aria-current')});link.classList.add('active');link.setAttribute('aria-current','location')}}}},{rootMargin:'-15% 0px -65% 0px',threshold:0});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
const tarccShowcaseData=[
  {title:'Catálogo de Cursos & Sedes',caption:'<strong>01. Catálogo Público:</strong> Oferta académica filtrable por sedes (Lima, Huaraz, Tacna) con detalle de inversión (S/ 100, S/ 120, S/ 150), modalidad virtual/presencial, duración, fechas y docentes asignados.',src:'assets/projects/tarcc-cursos-catalogo.png',alt:'Catálogo de cursos de formación continua de TARCC Perú con filtro por sedes y tarjetas de cursos'},
  {title:'Ficha Técnica y Plan de Estudios',caption:'<strong>02. Detalle y Temario:</strong> Ficha técnica del curso (Gestión Pública a S/ 120.00), desglose de horas académicas (120 hrs), frecuencia, horarios y plan de estudios estructurado con módulos y temarios desplegables.',src:'assets/projects/tarcc-curso-detalle.png',alt:'Ficha de detalle del curso Gestión Pública en TARCC con módulos y panel lateral de inscripción'},
  {title:'Formulario de Admisión y Pagos',caption:'<strong>03. Registro y Pasarela de Pago:</strong> Formulario por pasos con datos personales, ubicación en cascada (departamento, provincia, distrito), pasarela oficial con código QR Yape y cuenta corriente BCP, y zona drag & drop para adjuntar voucher.',src:'assets/projects/tarcc-modal-inscripcion.png',alt:'Modal de formulario de inscripción con datos personales, dirección, medios de pago Yape y BCP y subida de comprobante'},
  {title:'Confirmación de Inscripción',caption:'<strong>04. Registro Confirmado:</strong> Modal de confirmación inmediata con fecha y hora de registro, resumen de datos del curso y postulante, recepción auditada del voucher y generación con descarga de cargo oficial en formato PDF.',src:'assets/projects/tarcc-cargo-confirmacion.png',alt:'Modal de inscripción enviada correctamente con cargo de inscripción, resumen de datos y botón de descarga en PDF'},
  {title:'Cargo Oficial en PDF Generado',caption:'<strong>05. Cargo Digital Oficial:</strong> Documento formal emitido en formato PDF con membrete y RUC institucional de TARCC, timestamp exacto, datos del curso, postulante, ubicación y comprobante adjunto para trazabilidad formal.',src:'assets/projects/tarcc-cargo-pdf-oficial.png',alt:'Documento de cargo de inscripción oficial en PDF generado automáticamente por el sistema con RUC y datos del postulante'},
  {title:'Notificación y Correo Transaccional',caption:'<strong>06. Correo Transaccional con Cargo PDF:</strong> Envío automatizado de confirmación por correo institucional (arbitraje@tarccperu.com) con el cargo digital en PDF adjunto, fecha de recepción y enlace a los siguientes pasos de matrícula.',src:'assets/projects/tarcc-email-notificacion.png',alt:'Correo de confirmación de inscripción enviado al alumno con datos de envío y cargo adjunto en PDF'},
  {title:'Dashboard de Inteligencia Académica',caption:'<strong>07. Centro de Inteligencia Académica:</strong> Panorama ejecutivo en tiempo real con KPIs de cursos ofertados (3), ediciones (7), inscritos (22), docentes activos (2), tendencia mensual y gráfico de distribución de ediciones.',src:'assets/projects/tarcc-admin-dashboard.png',alt:'Dashboard administrativo Centro de Inteligencia Académica con métricas, KPIs y gráficos de admisiones'},
  {title:'Ediciones Académicas por Sede',caption:'<strong>08. Ediciones y Ranking de Demanda:</strong> Detalle operativo de convocatorias por sede (Huaraz, Lima, Tacna) con aranceles, estado publicado/finalizado, número de inscritos y ranking de demanda de los cursos.',src:'assets/projects/tarcc-admin-ediciones.png',alt:'Tabla de ediciones académicas por sede con estados de publicación, aranceles y ranking de cursos destacados'},
  {title:'Maestro de Cursos y Horas',caption:'<strong>09. Catálogo Administrativo de Cursos:</strong> Mantenimiento de programas académicos con slugs amigables, horas académicas certificadas (40 hrs, 120 hrs, 150 hrs), conteo de grupos activos y gestión de altas/bajas.',src:'assets/projects/tarcc-admin-cursos.png',alt:'Panel administrativo con listado de cursos, categorías, horas académicas y grupos asociados'},
  {title:'Grupos por Sede y Enlace Moodle',caption:'<strong>10. Aperturas Vinculadas a Moodle:</strong> Control de grupos por sede vinculados con su identificador interno de Moodle (ej. Grupo 2 · Moodle ID: 70 / Grupo 1 · Moodle ID: 64), fechas, turnos, precios y visibilidad web.',src:'assets/projects/tarcc-admin-grupos-moodle.png',alt:'Gestión de grupos del curso vinculados con Moodle ID, modalidad presencial/virtual y estado de publicación'},
  {title:'Apertura de Grupo y Curso Moodle',caption:'<strong>11. Formulario de Apertura de Grupo:</strong> Asignación de sede, generación automática del nombre público, asignación de docentes y vinculación directa seleccionando el curso de Moodle y su código corto correspondiente.',src:'assets/projects/tarcc-admin-crear-grupo.png',alt:'Formulario de creación de grupo con selector de curso Moodle y nombre corto en Moodle'},
  {title:'Bandeja de Admisiones y Vouchers',caption:'<strong>12. Bandeja de Solicitudes:</strong> Panel para el personal administrativo con filtros por estado (por revisar: 14, aprobadas: 7, incidencias: 1), búsqueda predictiva y acceso rápido a la cola de matrículas Moodle.',src:'assets/projects/tarcc-admin-bandeja.png',alt:'Bandeja de admisiones con solicitudes recibidas, estados de revisión y botón a cola de matrículas Moodle'},
  {title:'Auditoría y Resolución de Admisión',caption:'<strong>13. Aprobación y Preparación Moodle:</strong> Evaluación individual del postulante, verificación del voucher de pago y toma de decisión (\'Aprobar y preparar cuenta Moodle\', \'Observar\' o \'Rechazar\') para pasar a la cola de matrícula.',src:'assets/projects/tarcc-admin-resolver.png',alt:'Ficha de resolución de admisión con selector Aprobar y preparar cuenta Moodle y auditoría de comprobante'},
  {title:'Cola de Matrículas Moodle API',caption:'<strong>14. Sincronización REST con Moodle:</strong> Módulo de matriculación desatendida hacia el Web Service de Moodle. Verificación de cuentas (Usuario ID), matriculación en el curso (Curso ID: 63, 70), acciones masivas \'Matricular todos los pendientes\' y \'Verificar en Moodle\'.',src:'assets/projects/tarcc-admin-cola-moodle.png',alt:'Panel de cola de matrículas con estado de cuentas Moodle validadas y matriculadas en el curso vía API'},
  {title:'Login Aula Virtual Moodle',caption:'<strong>15. Acceso al Aula Virtual TARCC:</strong> Portal temático de autenticación Moodle personalizado con branding institucional de TARCC, ilustración corporativa y credenciales automáticas despachadas por correo.',src:'assets/projects/tarcc-moodle-aula-virtual.png',alt:'Pantalla de login personalizada del Aula Virtual Moodle de TARCC con ilustración corporativa y acceso'},
  {title:'Campus TARCC · Cursos Disponibles',caption:'<strong>16. Portal Principal Campus TARCC:</strong> Portada del aula virtual institucional con banner de bienvenida personalizado ("Bienvenidos! Aula Virtual TARCC - Perú"), navegación superior y catálogo de cursos activos (ej. Especialización en Contrataciones Públicas).',src:'assets/projects/tarcc-moodle-campus-inicio.png',alt:'Página principal de Campus TARCC con banner institucional de bienvenida y cursos disponibles'},
  {title:'Campus TARCC · Aula Virtual de Curso',caption:'<strong>17. Aula Virtual y Estructura por Temas:</strong> Vista interactiva del curso dentro de Moodle con pestañas modulares (General, Tema 1, Tema 2, Tema 3, Tema 4), banner de asignatura, foros de avisos, recursos digitales y sección de información.',src:'assets/projects/tarcc-moodle-curso-temas.png',alt:'Vista interna del curso en Campus TARCC con pestañas temáticas, foros y recursos pedagógicos'},
  {title:'Campus TARCC · Área Personal del Alumno',caption:'<strong>18. Área Personal y Seguimiento del Alumno:</strong> Dashboard del estudiante en Moodle con accesos directos a Mensajes, Perfil, Configuración y Calificaciones, cursos recientes y panel de actividades/tareas pendientes.',src:'assets/projects/tarcc-moodle-area-personal.png',alt:'Área personal del estudiante en Moodle con accesos a mensajería, calificaciones, configuración y cursos recientes'}
];

const concursosShowcaseData=[
  {title:'Dashboard de Concursos',caption:'<strong>01. Panel Administrativo:</strong> Gestión central de concursos (LatinFest, Sirenita), estados activo/inactivo, fechas de inicio y creación de certámenes.',src:'assets/projects/concursos-admin-dashboard.png',alt:'Panel administrativo de concursos: LatinFest, Level Upt Tacna, Sirenita 2026, con estados y fechas de inicio'},
  {title:'Catálogo de Concursos',caption:'<strong>02. Portal Público:</strong> Catálogo de certámenes con buscador en tiempo real, filtros por categoría y visualización de cupos disponibles.',src:'assets/projects/concursos-portal-catalogo.png',alt:'Portal público para participantes con buscador de concursos, filtros por categoría y resultados'},
  {title:'Detalle y Compra de Entrada',caption:'<strong>03. Detalle y Compra:</strong> Ficha técnica del evento, instructivos de compra y botón de adquisición mediante comprobante de pago/voucher.',src:'assets/projects/concursos-detalle-compra.png',alt:'Vista de detalle del concurso Sirenita 2026 con instrucciones y botón para adquirir entradas con comprobante'},
  {title:'Solicitudes de Entrada (Vouchers)',caption:'<strong>04. Vouchers de Entrada:</strong> Panel administrativo para revisar los comprobantes de pago de los usuarios y aprobar o rechazar el acceso al concurso.',src:'assets/projects/concursos-solicitudes-entradas.png',alt:'Panel de solicitudes de entrada con tabla de usuarios, visualizador de voucher y acciones de aprobación'},
  {title:'Configuración de Categoría',caption:'<strong>05. Edición de Categorías:</strong> Parametrización por modalidad, género musical, niveles (baby/amateur), jurados y carga de bases en PDF.',src:'assets/projects/concursos-admin-categoria.png',alt:'Configuración de categoría con precios, jueces asignados, criterios de evaluación y bases en PDF'},
  {title:'Inscripción a Competencias',caption:'<strong>06. Competencias:</strong> Lista de certámenes habilitados (solistas, parejas, grupal), visualización de estados y acceso a la inscripción.',src:'assets/projects/concursos-competencias-inscripcion.png',alt:'Gestión de competencias dentro del concurso e inscripción de solistas o equipos con estado aprobado'},
  {title:'Formulario de Inscripción',caption:'<strong>07. Formulario de Inscripción:</strong> Datos del capitán prellenados por login, carga de fotografía, comprobante y archivo de audio de la pista (MP3/WAV).',src:'assets/projects/concursos-modal-inscripcion.png',alt:'Modal de inscripción a competencia con teléfono, subida de foto, voucher, pista musical y datos del capitán prellenados'},
  {title:'Solicitudes de Competencia',caption:'<strong>08. Solicitudes de Competencia:</strong> Listado ordenado por categorías y grupos, con acceso directo a comprobantes, fotos, música y validación.',src:'assets/projects/concursos-solicitudes-competencias.png',alt:'Panel administrativo de solicitudes de competencia agrupadas con botones de archivos y aprobación'},
  {title:'Control de Integrantes (Capitán / Miembros)',caption:'<strong>09. Control de Integrantes:</strong> Desglose completo de participantes del equipo/dúo con nombres, documentos, género, edad y roles (capitán/miembro).',src:'assets/projects/concursos-modal-participantes.png',alt:'Modal de participantes del grupo con tabla de integrantes, documentos, género, edad y rol'},
  {title:'Reproductor de Audio Web con Waveform',caption:'<strong>10. Reproductor de Audio Web:</strong> Player integrado con onda de audio (waveform), controles de reproducción (+-15s, pause, stop) y descarga para auditar la pista.',src:'assets/projects/concursos-reproductor-musica.png',alt:'Modal reproductor de audio con onda de forma, controles de reproducción y descarga de pista musical'}
];
const showcaseData = concursosShowcaseData;

const levelupShowcaseData=[
  {title:'Dashboard de Secretaría',caption:'<strong>01. Panel de Secretaría:</strong> Tablero operativo con KPIs clave (alumnos registrados: 25, activos: 22, matrículas activas: 13, alertas a 7 días), tendencia mensual y ranking de cursos más demandados.',src:'assets/projects/levelup-dashboard-secretaria.png',alt:'Panel de secretaría de Level Up con KPIs de alumnos registrados, activos, matrículas del día y gráficos de cursos'},
  {title:'Directorio de Clientes',caption:'<strong>02. Directorio de Clientes:</strong> Búsqueda en tiempo real por DNI, nombres, teléfono o correo, filtros por estado (Activo/Inactivo) y rango de fechas con acciones directas de gestión.',src:'assets/projects/levelup-clientes-lista.png',alt:'Directorio de clientes con buscador por nombre, DNI o teléfono y filtros por estado y fecha'},
  {title:'Formulario Nuevo Cliente',caption:'<strong>03. Registro de Clientes:</strong> Formulario de alta con validación de tipo y número de documento (DNI/CE), nombres, apellidos, fecha de nacimiento para control de edad y contacto telefónico.',src:'assets/projects/levelup-cliente-formulario.png',alt:'Formulario para crear nuevo cliente con datos personales, contacto y switch de estado activo'},
  {title:'Catálogo de Cursos Vacacionales',caption:'<strong>04. Catálogo de Cursos:</strong> Listado de talleres vacacionales (Bachata, Baile Kids, Danza Urbana, Oratoria, Dibujo, Packs Esquina Amarilla/Anaranjada) con precios mensuales base y estados.',src:'assets/projects/levelup-cursos-catalogo.png',alt:'Catálogo de cursos vacacionales con precios base mensuales y estados'},
  {title:'Formulario Nuevo Curso',caption:'<strong>05. Parametrización de Cursos:</strong> Creación de talleres con descripción, precio mensual base (regla base para descuentos y promociones por plazos) y switch de activación inmediata.',src:'assets/projects/levelup-curso-formulario.png',alt:'Formulario de creación de curso con precio mensual base para cálculo de promociones y descuentos'},
  {title:'Matriz de Promociones y Descuentos',caption:'<strong>06. Promociones & Descuentos:</strong> Matriz comercial con dos motores: descuentos acumulados por plazo (ej. 4 meses de Bachata por S/. 150) y packs multi-curso combinados (2x1, combos familiares).',src:'assets/projects/levelup-promociones-lista.png',alt:'Panel de promociones y descuentos con tablas divididas de descuento por curso y packs de cursos'},
  {title:'Descuento por Plazo (1 Curso)',caption:'<strong>07. Descuento por Plazo:</strong> Parametrización de tarifas preferenciales por permanencia (3 o 4 meses continuos con total promocional y ahorro mensual calculado en tiempo real).',src:'assets/projects/levelup-promocion-plazo.png',alt:'Formulario de creación de descuento por plazo con buscador de curso, meses y resumen en tiempo real'},
  {title:'Packs y Promos Multi-Curso (2x1)',caption:'<strong>08. Packs y Promos Multi-Curso:</strong> Agrupación de talleres en modalidades flexibles ("N cursos cualquiera a elección del alumno") o packs fijos ("Esquina Amarilla", 2x1 en Oratoria/Baile Kids).',src:'assets/projects/levelup-promocion-pack.png',alt:'Configuración de packs multi-curso con opciones de pack específico o cursos libres a elección'},
  {title:'Control de Matrículas y Pagos',caption:'<strong>09. Registro de Matrículas:</strong> Maestro de inscripciones con códigos únicos (MAT-YYYYMMDD-XXXX), desglose de matrícula y cursos, y bloqueo automático de edición al registrar un pago.',src:'assets/projects/levelup-matriculas-lista.png',alt:'Listado de matrículas con códigos MAT, detalle de cursos, montos totales y estados'},
  {title:'Asistente de Matrícula y Cuotas',caption:'<strong>10. Asistente de Matrícula:</strong> Flujo guiado en 3 pasos (Datos generales → Cursos → Resumen y plan). Asignación multi-curso con liquidación automática de importes y promociones de grupo.',src:'assets/projects/levelup-matricula-nueva.png',alt:'Formulario de registro de nueva matrícula con selección de cursos, promociones y liquidación de importes'},
  {title:'Selección de Descuento por Plazo',caption:'<strong>11. Selección de Descuento por Plazo:</strong> Modal emergente para asociar una tarifa promocional al curso (ej. Bachata Básico 1 mes a S/. 40.00 en vez de S/. 70.00) con control de vigencia y opción sin descuento.',src:'assets/projects/levelup-modal-descuento-plazo.png',alt:'Modal de selección de descuento por plazo para Bachata Básico a S/ 40.00 con vigencia y opción sin descuento'},
  {title:'Liquidación y Ahorro Neto',caption:'<strong>12. Liquidación y Ahorro Neto:</strong> Desglose automático en tiempo real: curso base (S/. 70.00), matrícula (S/. 20.00), descuento aplicado con badge de ahorro (S/. 30.00) y total general (S/. 60.00).',src:'assets/projects/levelup-resumen-ahorro-descuento.png',alt:'Cálculo y liquidación con badge de descuento por plazo y ahorro de S/ 30.00 en tiempo real'},
  {title:'Resumen y Plan de Pago',caption:'<strong>13. Resumen y Plan de Pago:</strong> Paso 3 del asistente con verificación de datos del alumno, importes consolidados, tipo de plan (Contado / Cuotas) y resumen de cursos con la promoción vinculada (#8).',src:'assets/projects/levelup-resumen-plan-pago.png',alt:'Paso 3 del asistente de matrícula con resumen de datos generales, importes y selección de plan de pago al contado o cuotas'},
  {title:'Gestión de Cuotas y Pagos',caption:'<strong>14. Gestión de Cuotas y Pagos:</strong> Monitoreo de matrícula MAT-20260928-0001. Separación estricta de Cuota 0 (matrícula obligatoria al contado de S/. 20) y Cuota 1 (cursos) con saldos y botones de cobro/abono.',src:'assets/projects/levelup-pagos-cuotas-gestion.png',alt:'Panel de control de pagos de matrícula con desglose de cuota 0 de matrícula y cuotas de cursos con estados pendientes'},
  {title:'Pasarela y Cobro de Cuota',caption:'<strong>15. Pasarela y Cobro de Cuota:</strong> Modal de liquidación para Cuota 0 / cuotas ordinarias, con validación de importe exacto (S/. 20.00) y selección de método de pago (Efectivo, Plin o Yape).',src:'assets/projects/levelup-modal-pago-pasarela.png',alt:'Modal de pago de matrícula cuota 0 con selector de método de pago Efectivo, Plin y Yape'},
  {title:'Amortización y Abonos Parciales',caption:'<strong>16. Amortización y Abonos Parciales:</strong> Trazabilidad del plan de pagos con actualización dinámica de estados: Cuota 0 (matrícula) con estado <em>PAGADA</em> (saldo S/. 0.00) y Cuota 1 con abono de S/. 10.00, saldo de S/. 30.00 y estado <em>PARCIAL</em>.',src:'assets/projects/levelup-abono-parcial-cuotas.png',alt:'Plan de pago con cuota 0 pagada y cuota 1 en estado parcial con saldo de S/ 30.00'}
];

const datasets = {
  tarcc: tarccShowcaseData,
  concursos: concursosShowcaseData,
  levelup: levelupShowcaseData
};

const projects={
  tarcc:{
    category:'01 DESARROLLO WEB FULL STACK & INTEGRACIÓN MOODLE',
    title:'Sistema de Formación Continua, Admisión y Matrícula Moodle — TARCC Perú',
    html:`<div class="project-modal-content">
      <div class="modal-badge-row">
        <span class="modal-pill red">Full Stack & Moodle</span>
        <span class="modal-pill">PHP / Laravel</span>
        <span class="modal-pill">Moodle REST API</span>
        <span class="modal-pill">Generación Cargo PDF</span>
        <span class="modal-pill">Yape QR & BCP</span>
        <span class="modal-pill">Correos Transaccionales</span>
        <span class="modal-pill">Sedes & Ediciones</span>
      </div>
      <p class="modal-lead">
        Sistema integral de formación continua, venta de programas académicos y admisión en línea desarrollado para <strong>TARCC — Perú</strong>. Integra la experiencia del estudiante en un portal moderno (catálogo segmentado por sedes, detalle de programas y formulario de admisión con pasarela de pagos) junto al panel de control administrativo y la <strong>sincronización desatendida hacia el Aula Virtual Moodle vía REST API</strong>, automatizando la creación de cuentas de usuario, matriculación en cursos y despacho de accesos.
      </p>
      <div class="modal-grid">
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 1. Catálogo Público y Filtro por Sedes</h4>
          <p>Portal web con la oferta académica vigente (Programación Web, Gestión Pública, Arbitraje), buscador interactivo y filtro por sedes de interés (Lima, Huaraz, Tacna), indicando modalidad (Virtual/Presencial), inversión, duración y docentes.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 2. Gestión de Múltiples Ediciones y Grupos</h4>
          <p>Control granular de ediciones por región (ej. Edición Lima, Edición Huaraz) y grupos secuenciales por convocatoria (ej. Grupo 1 completado con 30 participantes y apertura de Grupo 2 con inicio programado).</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 3. Ficha Técnica y Plan de Estudios Modular</h4>
          <p>Vista informativa del curso con desglose de horas académicas certificadas (120 hrs), frecuencia, horarios, perfil del docente especialista y plan de estudios dinámico estructurado con módulos y temarios desplegables.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 4. Formulario de Admisión en Etapas</h4>
          <p>Asistente de registro en 4 etapas: captura de datos de identidad con validación, profesión, geolocalización en cascada (departamento, provincia, distrito) y dirección completa de contacto.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 5. Pasarela de Pagos Multicanal y Carga de Vouchers</h4>
          <p>Instrucciones de pago en línea con código QR oficial de Yape ("Yapear a Oscar Castro") y transferencia a cuenta corriente / CCI de Banco BCP (RUC 20602549071), integrando una zona drag & drop para adjuntar el comprobante en formatos JPG, PNG, WEBP o PDF hasta 5 MB.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 6. Generación Automática del Cargo Digital en PDF</h4>
          <p>Al remitir la postulación, el sistema genera de forma instantánea el Cargo Oficial de Inscripción con timestamp exacto (fecha y hora), consolidado de datos personales, detalles del curso y comprobante registrado, disponible para descarga directa en PDF.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 7. Notificaciones Transaccionales Automatizadas</h4>
          <p>Integración con servidor de correo institucional (arbitraje@tarccperu.com) que despacha automáticamente la confirmación formal al postulante con el cargo PDF adjunto, garantizando trazabilidad y respaldo documental.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 8. Bandeja de Admisiones y Auditoría</h4>
          <p>Bandeja operativa para el personal de admisión con métricas en tiempo real, filtros por estado (por revisar, aprobadas, observadas, resueltas), buscador de postulantes y auditoría visual del comprobante de pago adjunto con trazabilidad completa.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 9. Resolución y Cola de Matrículas Moodle API</h4>
          <p>Al seleccionar la decisión "Aprobar y preparar cuenta Moodle", la solicitud pasa a la Cola de Matrículas. El backend se conecta al Web Service REST de Moodle: valida o crea la cuenta (Usuario ID), matricula desatendidamente en el curso (Curso ID: 63, 70) y soporta sincronización masiva mediante "Matricular todos los pendientes" y "Verificar en Moodle".</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 10. Despacho de Credenciales y Campus Virtual Personalizado</h4>
          <p>Tras la confirmación en Moodle, el postulante recibe automáticamente por correo sus credenciales para ingresar a <strong>Campus TARCC</strong>. El entorno LMS cuenta con portada de bienvenida institucional, catálogo de asignaturas disponibles, aula virtual con pestañas modulares por temas (General, Temas 1 a 4, foros y recursos pedagógicos), y un <strong>Área Personal</strong> personalizada con accesos directos a mensajería, calificaciones, configuración y seguimiento del rendimiento académico.</p>
        </div>
      </div>
      <div class="modal-gallery-sec">
        <h4>Capturas reales del sistema (18 pantallas · Clic para ampliar en alta resolución)</h4>
        <div class="modal-gallery-grid">
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="0"><img src="assets/projects/tarcc-cursos-catalogo.png" alt="Catálogo de cursos"><span>01. Catálogo Cursos</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="1"><img src="assets/projects/tarcc-curso-detalle.png" alt="Ficha del curso"><span>02. Ficha y Temario</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="2"><img src="assets/projects/tarcc-modal-inscripcion.png" alt="Formulario de admisión"><span>03. Admisión & Pagos</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="3"><img src="assets/projects/tarcc-cargo-confirmacion.png" alt="Confirmación inscripción"><span>04. Confirmación</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="4"><img src="assets/projects/tarcc-cargo-pdf-oficial.png" alt="Cargo oficial PDF"><span>05. Cargo PDF Oficial</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="5"><img src="assets/projects/tarcc-email-notificacion.png" alt="Correo transaccional"><span>06. Correo con Cargo</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="6"><img src="assets/projects/tarcc-admin-dashboard.png" alt="Dashboard académico"><span>07. Dashboard Admin</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="7"><img src="assets/projects/tarcc-admin-ediciones.png" alt="Ediciones por sede"><span>08. Ediciones & Ranking</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="8"><img src="assets/projects/tarcc-admin-cursos.png" alt="Maestro de cursos"><span>09. Maestro Cursos</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="9"><img src="assets/projects/tarcc-admin-grupos-moodle.png" alt="Grupos Moodle ID"><span>10. Grupos Moodle ID</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="10"><img src="assets/projects/tarcc-admin-crear-grupo.png" alt="Crear grupo Moodle"><span>11. Apertura Grupo</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="11"><img src="assets/projects/tarcc-admin-bandeja.png" alt="Bandeja de admisiones"><span>12. Bandeja Admisión</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="12"><img src="assets/projects/tarcc-admin-resolver.png" alt="Auditar admisión"><span>13. Decisión & Moodle</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="13"><img src="assets/projects/tarcc-admin-cola-moodle.png" alt="Cola matrículas Moodle"><span>14. Cola Moodle API</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="14"><img src="assets/projects/tarcc-moodle-aula-virtual.png" alt="Aula Virtual Moodle"><span>15. Login Moodle</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="15"><img src="assets/projects/tarcc-moodle-campus-inicio.png" alt="Campus TARCC inicio"><span>16. Campus Inicio</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="16"><img src="assets/projects/tarcc-moodle-curso-temas.png" alt="Aula virtual curso"><span>17. Temario Moodle</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="tarcc" data-lightbox-idx="17"><img src="assets/projects/tarcc-moodle-area-personal.png" alt="Área personal alumno"><span>18. Área Personal</span></button>
        </div>
      </div>
    </div>`
  },
  web:{
    category:'02 DESARROLLO WEB FULL STACK & WEBSOCKETS',
    title:'Sistema de Gestión de Concursos de Baile',
    html:`<div class="project-modal-content">
      <div class="modal-badge-row">
        <span class="modal-pill red">Full Stack</span>
        <span class="modal-pill">Laravel / PHP</span>
        <span class="modal-pill">MySQL</span>
        <span class="modal-pill">Soketi WebSockets</span>
        <span class="modal-pill">Reproductor Audio Waveform</span>
        <span class="modal-pill">Fase de Admisión</span>
        <span class="modal-pill">Tiempo Real</span>
      </div>
      <p class="modal-lead">
        Plataforma web integral creada para la gestión, organización, admisión y participación en certámenes y festivales de danza competitivos (ej. <strong>Tacna Latin Fest</strong>, <strong>Sirenita 2026</strong>, <strong>Level Upt Tacna</strong>). El sistema digitaliza y automatiza toda la fase de admisión: desde la publicación del evento y la compra de entradas con comprobante bancario, hasta la postulación de solistas y agrupaciones con subida y auditoría de pistas musicales en la nube.
      </p>
      <div class="modal-grid">
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 1. Panel Administrativo y Eventos</h4>
          <p>Creación y calendarización de concursos con fechas de inicio, estados (Activo / Inactivo) y bases oficiales. Administración de parámetros globales del certamen.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 2. Categorías y Restricciones</h4>
          <p>Configuración granular por género musical (Salsa, Bachata, etc.), modalidades (solista femenino/masculino, parejas, dúos y grupos) y restricciones por edad (infantil de 4 a 6 años, juvenil, amateur) y sexo.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 3. Jurados y Criterios</h4>
          <p>Asignación de evaluadores/jueces por concurso, definición de criterios de calificación y ponderación de puntajes, además de publicación y descarga de bases oficiales en PDF.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 4. Catálogo Público y Vouchers de Entrada</h4>
          <p>Portal para participantes con catálogo de certámenes y buscador en tiempo real. Compra de entradas mediante carga de comprobante/voucher de pago para validación del administrador.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 5. Inscripción Inteligente a Competencias</h4>
          <p>Tras la admisión de la entrada, se habilita la inscripción. Formulario especializado con datos del capitán (Participante 1) prellenados desde su login (teléfono, nombre, DNI, fecha de nacimiento, género).</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 6. Gestión de Equipos, Dúos y Parejas</h4>
          <p>Si la modalidad es en pareja o grupal, el capitán registra a los demás integrantes con sus documentos, edades, géneros y nombres de agrupación, asignando roles de capitán e integrantes.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 7. Carga de Pistas Musicales y Requisitos</h4>
          <p>Subida obligatoria de fotografía del competidor, voucher de pago de la competencia y archivo de pista musical (MP3/WAV max 5MB) para la presentación en tarima.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 8. Reproductor de Audio Web con Waveform</h4>
          <p>Herramienta integrada en el panel administrativo con visualizador de onda (waveform), controles de reproducción (play/pause, saltos de +-15s, stop), control de volumen, velocidad y descarga para auditar la pista musical de cada competidor antes de aprobar su postulación.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 9. Notificaciones en Tiempo Real con Soketi</h4>
          <p>Servidor WebSockets autónomo de alto rendimiento (Soketi) para notificaciones instantáneas automáticas al administrador cuando un participante sube un comprobante o completa una inscripción, agilizando la validación sin recargar la página.</p>
        </div>
      </div>
      <div class="modal-gallery-sec">
        <h4>Capturas reales del sistema (10 pantallas · Clic para ampliar en alta resolución)</h4>
        <div class="modal-gallery-grid">
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="0"><img src="assets/projects/concursos-admin-dashboard.png" alt="Dashboard administrativo"><span>01. Dashboard Admin</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="1"><img src="assets/projects/concursos-portal-catalogo.png" alt="Catálogo público"><span>02. Catálogo Público</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="2"><img src="assets/projects/concursos-detalle-compra.png" alt="Detalle y compra"><span>03. Detalle y Compra</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="3"><img src="assets/projects/concursos-solicitudes-entradas.png" alt="Solicitudes de entrada"><span>04. Vouchers Entrada</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="4"><img src="assets/projects/concursos-admin-categoria.png" alt="Configuración de categorías"><span>05. Config. Categorías</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="5"><img src="assets/projects/concursos-competencias-inscripcion.png" alt="Competencias habilitadas"><span>06. Competencias</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="6"><img src="assets/projects/concursos-modal-inscripcion.png" alt="Formulario de inscripción"><span>07. Form. Inscripción</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="7"><img src="assets/projects/concursos-solicitudes-competencias.png" alt="Solicitudes de competencia"><span>08. Solicitudes Comp.</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="8"><img src="assets/projects/concursos-modal-participantes.png" alt="Integrantes de equipo"><span>09. Integrantes</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="concursos" data-lightbox-idx="9"><img src="assets/projects/concursos-reproductor-musica.png" alt="Reproductor de audio"><span>10. Reproductor Audio</span></button>
        </div>
      </div>
    </div>`
  },
  levelup:{
    category:'03 SISTEMA WEB & GESTIÓN EDUCATIVA',
    title:'Sistema de Gestión de Cursos Vacacionales — LEVEL UP',
    html:`<div class="project-modal-content">
      <div class="modal-badge-row">
        <span class="modal-pill red">Sistema Web</span>
        <span class="modal-pill">Gestión de Secretaría</span>
        <span class="modal-pill">Alumnos & Clientes</span>
        <span class="modal-pill">Catálogo de Cursos</span>
        <span class="modal-pill">Descuentos por Plazo</span>
        <span class="modal-pill">Packs Promocionales 2x1</span>
        <span class="modal-pill">Matrículas Multi-Curso</span>
        <span class="modal-pill">Seguimiento de Pagos</span>
      </div>
      <p class="modal-lead">
        Plataforma web integral diseñada para la administración académica, operativa y comercial de la academia y cursos vacacionales <strong>LEVEL UP</strong> (Oratoria, Danzas, Marinera, Bachata, Reforzamiento de Matemáticas, Dibujo y Pintura, Baile Kids). El sistema resuelve la gestión integral de secretaría: control de alumnos activos, catálogo de talleres, motor de promociones por plazos y packs combinados, inscripciones y cronograma de pagos.
      </p>
      <div class="modal-grid">
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 1. Panel de Secretaría y Control Operativo</h4>
          <p>Dashboard administrativo sin montos financieros para uso operativo de secretaría: métricas de alumnos registrados (25), activos (22), clientes únicos con matrícula activa (13), cursos activos disponibles (20), matrículas del día y alerta preventiva de cursos que vencen en los próximos 7 días para renovaciones oportunas.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 2. Gráficos de Demanda y Tendencias</h4>
          <p>Visualización del histórico de matrículas de los últimos 12 meses y ranking de los cursos más matriculados (Bachata Básico, Reggaeton, Marinera, Oratoria 5 a 8 años, Baile Kids), permitiendo proyectar aperturas de nuevos horarios y salones.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 3. Directorio Centralizado de Clientes</h4>
          <p>Búsqueda predictiva multi-criterio (por DNI, nombres, email o teléfono), filtros rápidos por estado (Activo/Inactivo) y filtros por rango de fechas (Desde / Hasta), con visualización en tabla paginada y avatares dinámicos de iniciales.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 4. Formulario de Alta y Validación de Clientes</h4>
          <p>Módulo de registro con validación rigurosa de documentos de identidad (DNI, Carné de Extranjería), nombres y apellidos completos, fecha de nacimiento para control y segmentación de edades de los talleres, y teléfono de contacto.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 5. Catálogo y Parametrización de Cursos</h4>
          <p>Inventario completo de cursos vacacionales con descripción didáctica (con identificadores visuales/emojis), precio mensual base (ej. S/. 70.00, S/. 150.00), estado de disponibilidad y herramientas de edición/bloqueo.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 6. Creación y Reglas de Cursos</h4>
          <p>Formulario de creación de talleres donde se estipula el precio mensual base, el cual funciona como parámetro base del sistema sobre el que se calculan las reglas automáticas de descuentos y promociones.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 7. Motor de Promociones y Descuentos por Plazos</h4>
          <p>Lógica comercial avanzada que permite configurar descuentos acumulados por plazos prolongados (por ejemplo: si un alumno toma 4 meses de curso, se aplica un descuento preferencial de S/. 150 en lugar de abonar la tarifa mensual ordinaria por separado), incentivando la retención del ciclo vacacional.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 8. Packs y Combos Promocionales 2x1</h4>
          <p>Capacidad para agrupar múltiples talleres en un solo paquete promocional (ej. promociones 2x1 o paquetes multidisciplinarios como "Esquina Amarilla" o "Esquina Anaranjada" para niños de 5 a 13 años), simplificando la inscripción simultánea de hermanos o múltiples disciplinas.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 9. Control Maestro de Matrículas</h4>
          <p>Gestión con códigos únicos MAT, detalle de cursos por cliente, rangos de vigencia y bloqueo automático de edición cuando se registran pagos en cuotas para garantizar trazabilidad contable.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 10. Asistente de Matrícula y Liquidación</h4>
          <p>Stepper en 3 fases (Datos generales → Cursos → Resumen y plan). Asignación multi-curso con detección automática de descuentos por plazo o promociones grupales, cálculo de matrícula y subtotales en tiempo real.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 11. Modal de Descuentos por Plazo</h4>
          <p>Ventana modal para vincular tarifas promocionales vigentes al taller seleccionado (ej. Bachata Básico a S/. 40.00 en vez de S/. 70.00) con control de fechas de validez o reversión a precio regular sin descuento.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 12. Liquidación en Vivo y Ahorro Neto</h4>
          <p>Cálculo automático de la liquidación con desglose de costo de curso base, matrícula obligatoria (S/. 20.00), badge dinámico con el ahorro obtenido (S/. 30.00) y total general resultante.</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 13. Resumen y Plan de Pago (Paso 3)</h4>
          <p>Paso final del asistente donde se consolidan datos generales del cliente, resumen de importes y selección del plan de pago (Contado o Cuotas con fecha de inicio y número de pagos).</p>
        </div>
        <div class="modal-card">
          <h4><span class="sec-dot"></span> 14. Monitoreo y Gestión de Cuotas</h4>
          <p>Panel de cobranza por matrícula (MAT-20260928-0001) con separación estricta de Cuota 0 (matrícula obligatoria al contado) y Cuota 1 (cursos), estados pendientes/pagados y progreso del cobro.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 15. Pasarela de Cobranza Multicanal</h4>
          <p>Modal de registro de pagos con validación de monto exacto para cuota 0 o cuotas ordinarias, admitiendo múltiples métodos de pago integrados: Efectivo, Plin y Yape.</p>
        </div>
        <div class="modal-card highlight">
          <h4><span class="sec-dot live"></span> 16. Control de Abonos y Amortizaciones</h4>
          <p>Soporte para pagos fragmentados y abonos parciales: registro automático de amortizaciones sobre cuotas pendientes, actualización de saldos al instante y transición de estados (Pendiente → Parcial → Pagada).</p>
        </div>
      </div>
      <div class="modal-gallery-sec">
        <h4>Capturas reales del sistema (16 pantallas · Clic para ampliar en alta resolución)</h4>
        <div class="modal-gallery-grid">
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="0"><img src="assets/projects/levelup-dashboard-secretaria.png" alt="Dashboard de secretaría"><span>01. Dashboard Secretaría</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="1"><img src="assets/projects/levelup-clientes-lista.png" alt="Directorio de clientes"><span>02. Directorio Clientes</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="2"><img src="assets/projects/levelup-cliente-formulario.png" alt="Formulario de cliente"><span>03. Registro Cliente</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="3"><img src="assets/projects/levelup-cursos-catalogo.png" alt="Catálogo de cursos"><span>04. Catálogo Cursos</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="4"><img src="assets/projects/levelup-curso-formulario.png" alt="Parámetros de curso"><span>05. Parámetros Curso</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="5"><img src="assets/projects/levelup-promociones-lista.png" alt="Matriz de promociones"><span>06. Matriz Promociones</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="6"><img src="assets/projects/levelup-promocion-plazo.png" alt="Descuento por plazo"><span>07. Descuento Plazo</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="7"><img src="assets/projects/levelup-promocion-pack.png" alt="Packs multi-curso"><span>08. Packs Multi-Curso</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="8"><img src="assets/projects/levelup-matriculas-lista.png" alt="Registro de matrículas"><span>09. Registro Matrículas</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="9"><img src="assets/projects/levelup-matricula-nueva.png" alt="Asistente de matrícula"><span>10. Asistente Matrícula</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="10"><img src="assets/projects/levelup-modal-descuento-plazo.png" alt="Descuento por plazo"><span>11. Aplicar Descuento</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="11"><img src="assets/projects/levelup-resumen-ahorro-descuento.png" alt="Resumen ahorro"><span>12. Resumen Ahorro</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="12"><img src="assets/projects/levelup-resumen-plan-pago.png" alt="Plan de pago"><span>13. Plan de Pago</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="13"><img src="assets/projects/levelup-pagos-cuotas-gestion.png" alt="Gestión de pagos"><span>14. Gestión Pagos</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="14"><img src="assets/projects/levelup-modal-pago-pasarela.png" alt="Pasarela cobranza"><span>15. Cobranza Cuota</span></button>
          <button type="button" class="modal-thumb-btn" data-lightbox-dataset="levelup" data-lightbox-idx="15"><img src="assets/projects/levelup-abono-parcial-cuotas.png" alt="Abonos parciales de cuotas"><span>16. Abonos Parciales</span></button>
        </div>
      </div>
    </div>`
  },
  automation:{title:'Formularios y seguimiento',category:'04 AUTOMATIZACIÓN',description:'En TARCC implementé formularios con validaciones, lógica condicional y controles de calidad de datos; automaticé procesos y diseñé tableros de seguimiento en hojas de cálculo. En UTP automaticé y sistematicé información con matrices de control, formularios y tableros para la gestión académica y operativa.'},
  data:{title:'Consolidación y tableros',category:'05 DATOS Y ANALÍTICA',description:'Trabajo con procesos ETL en SQL y Python para transformar y consolidar información, además de optimizar consultas mediante indexación y tuning. En TARCC elaboré reportes, matrices y consolidados para apoyar la toma de decisiones. En la Escuela de Formación Artística administré bases de datos en Excel y Google Sheets, con validación y respaldos periódicos.'}
};

function setupShowcase(config){
  const showcaseEl=document.getElementById(config.id);
  if(!showcaseEl)return null;

  let current=0;
  const data=config.data;
  const tabsContainer=document.getElementById(config.tabsId);
  const tabs=showcaseEl.querySelectorAll('.showcase-tab');
  const slides=showcaseEl.querySelectorAll('.showcase-slide');
  const dots=showcaseEl.querySelectorAll('.dot-btn');
  const titleText=document.getElementById(config.titleId);
  const counterNum=document.getElementById(config.counterId);
  const phaseTag=document.getElementById(config.phaseId);

  function scrollTabs(idx){
    if(!tabsContainer)return;
    const activeTab=tabs[idx];
    if(!activeTab)return;

    const containerWidth=tabsContainer.clientWidth;
    const maxScroll=tabsContainer.scrollWidth - containerWidth;
    if(maxScroll<=0)return;

    if(idx<=1){
      tabsContainer.scrollTo({left:0, behavior:'smooth'});
      return;
    }
    if(idx>=tabs.length-2){
      tabsContainer.scrollTo({left:maxScroll, behavior:'smooth'});
      return;
    }

    const targetOffsetInView = containerWidth * 0.16;
    const targetScroll = activeTab.offsetLeft - targetOffsetInView;
    tabsContainer.scrollTo({
      left: Math.max(0, Math.min(targetScroll, maxScroll)),
      behavior: 'smooth'
    });
  }

  function setSlide(idx){
    if(idx<0)idx=data.length-1;
    if(idx>=data.length)idx=0;
    current=idx;

    tabs.forEach((tab,i)=>{
      const active=i===idx;
      tab.classList.toggle('active',active);
      tab.setAttribute('aria-selected',String(active));
    });

    scrollTabs(idx);

    slides.forEach((slide,i)=>slide.classList.toggle('active',i===idx));
    dots.forEach((dot,i)=>dot.classList.toggle('active',i===idx));
    if(titleText&&data[idx])titleText.textContent=data[idx].title;
    if(counterNum)counterNum.textContent=String(idx+1);
    if(phaseTag&&config.phaseFn)phaseTag.textContent=config.phaseFn(idx);
  }

  if(tabsContainer){
    tabsContainer.addEventListener('wheel',e=>{
      if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){
        e.preventDefault();
        tabsContainer.scrollLeft+=e.deltaY;
      }
    },{passive:false});

    let isDown=false, startX=0, scrollStart=0;
    tabsContainer.addEventListener('mousedown',e=>{
      isDown=true;
      startX=e.pageX-tabsContainer.offsetLeft;
      scrollStart=tabsContainer.scrollLeft;
    });
    tabsContainer.addEventListener('mouseleave',()=>{isDown=false});
    tabsContainer.addEventListener('mouseup',()=>{isDown=false});
    tabsContainer.addEventListener('mousemove',e=>{
      if(!isDown)return;
      e.preventDefault();
      const x=e.pageX-tabsContainer.offsetLeft;
      const walk=(x-startX)*1.5;
      tabsContainer.scrollLeft=scrollStart-walk;
    });
  }

  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>setSlide(parseInt(tab.dataset.slide,10)));
  });
  dots.forEach(dot=>{
    dot.addEventListener('click',()=>setSlide(parseInt(dot.dataset.slide,10)));
  });

  const prevBtn=showcaseEl.querySelector('.showcase-arrow.prev');
  const nextBtn=showcaseEl.querySelector('.showcase-arrow.next');
  if(prevBtn)prevBtn.addEventListener('click',()=>setSlide(current-1));
  if(nextBtn)nextBtn.addEventListener('click',()=>setSlide(current+1));

  const zoomBtn=showcaseEl.querySelector('.showcase-zoom-btn');
  if(zoomBtn)zoomBtn.addEventListener('click',()=>openLightbox(config.datasetKey,current));

  showcaseEl.querySelectorAll('.showcase-img').forEach((img,i)=>{
    img.addEventListener('click',()=>openLightbox(config.datasetKey,i));
  });

  return {setSlide, getCurrent:()=>current};
}

const tarccShowcase = setupShowcase({
  id: 'tarcc-showcase',
  tabsId: 'tarcc-tabs',
  titleId: 'tarcc-title-text',
  counterId: 'tarcc-current-num',
  phaseId: 'tarcc-phase-tag',
  data: tarccShowcaseData,
  datasetKey: 'tarcc',
  phaseFn: idx => {
    if (idx < 6) return 'Fase 1 · Portal & Admisión';
    if (idx < 11) return 'Fase 2 · Gestión Académica & Sedes';
    if (idx < 14) return 'Fase 3 · Integración Moodle API';
    return 'Fase 4 · Campus & Aula Virtual';
  }
});

const concursosShowcase = setupShowcase({
  id: 'concursos-showcase',
  tabsId: 'showcase-tabs',
  titleId: 'showcase-title-text',
  counterId: 'showcase-current-num',
  phaseId: 'showcase-phase-tag',
  data: concursosShowcaseData,
  datasetKey: 'concursos',
  phaseFn: idx => idx < 4 ? 'Fase 1 · Eventos & Vouchers' : 'Fase 2 · Competencias & Audio'
});

const levelupShowcase = setupShowcase({
  id: 'levelup-showcase',
  tabsId: 'levelup-tabs',
  titleId: 'levelup-title-text',
  counterId: 'levelup-current-num',
  phaseId: 'levelup-phase-tag',
  data: levelupShowcaseData,
  datasetKey: 'levelup',
  phaseFn: idx => {
    if (idx < 3) return 'Módulo 1 · Secretaría & Clientes';
    if (idx < 5) return 'Módulo 2 · Cursos & Catálogo';
    if (idx < 8) return 'Módulo 3 · Promociones & Packs 2x1';
    if (idx < 13) return 'Módulo 4 · Asistente de Matrícula';
    return 'Módulo 5 · Cobranzas & Pasarela';
  }
});

const lightbox=document.getElementById('image-lightbox');
let currentLightboxDataset='concursos';
let lightboxIndex=0;

function updateLightbox(idx){
  if(!lightbox)return;
  const list = datasets[currentLightboxDataset] || datasets.concursos;
  if(idx<0)idx=list.length-1;
  if(idx>=list.length)idx=0;
  lightboxIndex=idx;

  const data=list[idx];
  const imgEl=document.getElementById('lightbox-img');
  const titleEl=document.getElementById('lightbox-title');
  const descEl=document.getElementById('lightbox-desc');
  const counterEl=document.getElementById('lightbox-counter');
  const badgeEl=lightbox.querySelector('.lightbox-badge');

  if(imgEl){imgEl.src=data.src;imgEl.alt=data.alt}
  if(titleEl)titleEl.textContent=data.title;
  if(descEl)descEl.innerHTML=data.caption;
  if(counterEl)counterEl.textContent=`${idx+1} / ${list.length}`;
  if(badgeEl){
    badgeEl.textContent = currentLightboxDataset === 'tarcc'
      ? 'Captura real · Sistema TARCC Perú'
      : currentLightboxDataset === 'levelup'
        ? 'Captura real · Sistema Level Up'
        : 'Captura real · Sistema de Concursos';
  }
}

function openLightbox(datasetKey,idx){
  if(!lightbox)return;
  currentLightboxDataset = (datasetKey && datasets[datasetKey]) ? datasetKey : 'concursos';
  updateLightbox(typeof idx === 'number' ? idx : 0);
  lightbox.showModal();
  document.body.classList.add('dialog-open');
}

if(lightbox){
  const closeBtn=lightbox.querySelector('.lightbox-close');
  if(closeBtn)closeBtn.addEventListener('click',()=>lightbox.close());
  const prevBtn=lightbox.querySelector('.lightbox-arrow.prev');
  const nextBtn=lightbox.querySelector('.lightbox-arrow.next');
  if(prevBtn)prevBtn.addEventListener('click',()=>updateLightbox(lightboxIndex-1));
  if(nextBtn)nextBtn.addEventListener('click',()=>updateLightbox(lightboxIndex+1));

  lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
  lightbox.addEventListener('close',()=>{
    if(!document.querySelector('dialog[open]')){
      document.body.classList.remove('dialog-open');
    }
  });

  document.addEventListener('keydown',e=>{
    if(lightbox.open){
      if(e.key==='ArrowLeft')updateLightbox(lightboxIndex-1);
      else if(e.key==='ArrowRight')updateLightbox(lightboxIndex+1);
      else if(e.key==='Escape')lightbox.close();
    }
  });
}

const dialog=document.getElementById('project-dialog');
dialog.setAttribute('aria-labelledby','dialog-title');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const p=projects[button.dataset.project];
  if(!p)return;
  const catEl=document.getElementById('dialog-category');
  if(catEl&&p.category)catEl.textContent=p.category;
  document.getElementById('dialog-title').textContent=p.title;
  const descEl=document.getElementById('dialog-description');
  if(p.html){
    descEl.innerHTML=p.html;
    descEl.querySelectorAll('[data-lightbox-idx]').forEach(tb=>{
      const dKey = tb.dataset.lightboxDataset || button.dataset.project || 'tarcc';
      tb.addEventListener('click',()=>openLightbox(dKey, parseInt(tb.dataset.lightboxIdx,10)));
    });
  }else{
    descEl.innerHTML=`<p>${p.description}</p>`;
  }
  dialog.showModal();
  document.body.classList.add('dialog-open');
}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{
  if(e.target===dialog){
    const r=dialog.getBoundingClientRect();
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();
  }
});
dialog.addEventListener('close',()=>{
  if(!document.querySelector('dialog[open]')){
    document.body.classList.remove('dialog-open');
  }
});
document.getElementById('year').textContent=new Date().getFullYear();

