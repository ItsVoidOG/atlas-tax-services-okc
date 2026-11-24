const menuButton=document.querySelector('.menu-button');
const mobileMenu=document.querySelector('.mobile-menu');
if(menuButton&&mobileMenu){menuButton.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -25px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Small stagger keeps section entrances polished without slowing navigation.
document.querySelectorAll('.cap-list, .process-steps, .trust-cards, .service-grid').forEach(group=>{[...group.querySelectorAll('.reveal, .service-card')].forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i,5)*55}ms`;});});


document.querySelectorAll('img[data-fallback]').forEach(img=>{const fallback=()=>{if(img.dataset.fallback){const url=img.dataset.fallback;delete img.dataset.fallback;img.src=url;}};img.addEventListener('error',fallback);if(img.complete&&!img.naturalWidth)fallback();});
(() => {
const dictionary = {
  "Tax Form": {
    "es": "Formulario fiscal"
  },
  "Complete Tax Form ↗": {
    "es": "Completar formulario fiscal ↗"
  },
  "About": {
    "es": "Nosotros"
  },
  "Services": {
    "es": "Servicios"
  },
  "Contact": {
    "es": "Contacto"
  },
  "Call 405.339.6336": {
    "es": "Llamar al 405.339.6336"
  },
  "Oklahoma City": {
    "es": "Oklahoma City"
  },
  "Get Started": {
    "es": "Comenzar"
  },
  "Explore Services ↗": {
    "es": "Explorar servicios ↗"
  },
  "Scroll to explore ↓": {
    "es": "Deslice para explorar ↓"
  },
  "Personal Tax Preparation": {
    "es": "Preparación de impuestos personales"
  },
  "Business Tax Services": {
    "es": "Servicios de impuestos empresariales"
  },
  "LOCAL": {
    "es": "LOCAL"
  },
  "SCOPE": {
    "es": "SERVICIOS"
  },
  "CONTACT": {
    "es": "CONTACTO"
  },
  "Process": {
    "es": "Proceso"
  },
  "Not sure which service fits your situation?": {
    "es": "¿No sabe qué servicio necesita?"
  },
  "Start a conversation ↗": {
    "es": "Hablemos ↗"
  },
  "Contact Atlas Tax Services": {
    "es": "Contactar a Atlas Tax Services"
  },
  "Explore services ↗": {
    "es": "Explorar servicios ↗"
  },
  "01 / Local": {
    "es": "01 / Local"
  },
  "02 / Support": {
    "es": "02 / Apoyo"
  },
  "03 / Contact": {
    "es": "03 / Contacto"
  },
  "Questions?": {
    "es": "¿Tiene preguntas?"
  },
  "Not sure which service fits?": {
    "es": "¿No sabe qué servicio necesita?"
  },
  "Contact Us": {
    "es": "Contáctenos"
  },
  "Email": {
    "es": "Correo electrónico"
  },
  "Office": {
    "es": "Oficina"
  },
  "Get in touch": {
    "es": "Póngase en contacto"
  },
  "Send an Email ↗": {
    "es": "Enviar correo ↗"
  },
  "Office details": {
    "es": "Datos de la oficina"
  },
  "Office hours and appointment details available by phone or email.": {
    "es": "Consulte los horarios y las citas por teléfono o correo electrónico."
  },
  "Open menu": {
    "es": "Abrir menú"
  },
  "Atlas Tax Services on Facebook": {
    "es": "Atlas Tax Services en Facebook"
  },
  "Atlas Tax Services on Instagram": {
    "es": "Atlas Tax Services en Instagram"
  },
  "About | Atlas Tax Services": {
    "es": "Nosotros | Atlas Tax Services"
  },
  "Services | Atlas Tax Services": {
    "es": "Servicios | Atlas Tax Services"
  },
  "Contact | Atlas Tax Services": {
    "es": "Contacto | Atlas Tax Services"
  },
  "Contact Atlas Tax Services at 405-339-6336 or atlastaxservicesllcokc@gmail.com. Office: 700 Waterview Rd, Oklahoma City, OK 73170.": {
    "es": "Comuníquese con Atlas Tax Services al 405-339-6336 o atlastaxservicesllcokc@gmail.com. Oficina: 700 Waterview Rd, Oklahoma City, OK 73170."
  },
  "Atlas Tax Services LLC | Oklahoma City Tax Preparation": {
    "es": "Atlas Tax Services LLC | Preparación de impuestos en Oklahoma City"
  },
  "Plan • Prepare • Prosper": {
    "es": "Planifique • Prepare • Prospere"
  },
  "Plan with purpose.": {
    "es": "Planifique con propósito."
  },
  "File with confidence.": {
    "es": "Declare con confianza."
  },
  "Make tax season more manageable with personal attention, organized preparation and a clear path forward.": {
    "es": "Haga que la temporada de impuestos sea más sencilla con atención personal, preparación organizada y un rumbo claro."
  },
  "Tax Season Guidance": {
    "es": "Orientación para la temporada fiscal"
  },
  "The Atlas approach": {
    "es": "El enfoque de Atlas"
  },
  "A better season starts with a plan.": {
    "es": "Una mejor temporada comienza con un plan."
  },
  "Your goals.": {
    "es": "Sus metas."
  },
  "Your next": {
    "es": "Su próximo"
  },
  "chapter.": {
    "es": "capítulo."
  },
  "At Atlas Tax Services, we believe tax preparation starts with understanding your situation. We focus on the details so you can approach your next steps with clarity.": {
    "es": "En Atlas Tax Services, creemos que la preparación de impuestos comienza por comprender su situación. Nos enfocamos en los detalles para que pueda avanzar con claridad."
  },
  "Prepared for today. Focused on tomorrow.": {
    "es": "Preparados para hoy. Enfocados en el mañana."
  },
  "Make tax season": {
    "es": "Haga que la temporada fiscal"
  },
  "work for you.": {
    "es": "funcione para usted."
  },
  "Whether you are filing for yourself or have questions about your business, start by talking with Atlas about your needs.": {
    "es": "Ya sea que presente su propia declaración o tenga preguntas sobre su negocio, comience hablando con Atlas sobre sus necesidades."
  },
  "Prepare for your individual return with an organized review of your tax information.": {
    "es": "Prepárese para su declaración individual con una revisión organizada de su información fiscal."
  },
  "Discuss your business tax needs and the records you should have ready.": {
    "es": "Converse sobre las necesidades fiscales de su negocio y los registros que debe preparar."
  },
  "Ask questions about the filing process and what to gather before your appointment.": {
    "es": "Pregunte sobre el proceso de declaración y qué reunir antes de su cita."
  },
  "Explore tax services ↗": {
    "es": "Explore los servicios fiscales ↗"
  },
  "Oklahoma City / Atlas": {
    "es": "Oklahoma City / Atlas"
  },
  "Close to home.": {
    "es": "Cerca de casa."
  },
  "Focused on you.": {
    "es": "Enfocados en usted."
  },
  "Connect with Atlas in Oklahoma City to discuss your filing needs and how to get ready for your appointment.": {
    "es": "Comuníquese con Atlas en Oklahoma City para conversar sobre sus necesidades fiscales y cómo prepararse para su cita."
  },
  "Tax preparation inquiries": {
    "es": "Consultas de preparación de impuestos"
  },
  "Phone or email": {
    "es": "Teléfono o correo electrónico"
  },
  "Three steps to": {
    "es": "Tres pasos para"
  },
  "get prepared.": {
    "es": "prepararse."
  },
  "A little preparation goes a long way. Here is how to begin.": {
    "es": "Un poco de preparación ayuda mucho. Así puede comenzar."
  },
  "Connect with Atlas.": {
    "es": "Comuníquese con Atlas."
  },
  "Tell us about your tax needs and ask what documents to gather.": {
    "es": "Cuéntenos sobre sus necesidades fiscales y pregunte qué documentos reunir."
  },
  "Gather your records.": {
    "es": "Reúna sus documentos."
  },
  "Organize your income records and relevant financial information before your appointment.": {
    "es": "Organice sus registros de ingresos e información financiera relevante antes de su cita."
  },
  "Take the next step.": {
    "es": "Dé el siguiente paso."
  },
  "Discuss your return and any remaining questions before moving forward.": {
    "es": "Converse sobre su declaración y las preguntas pendientes antes de avanzar."
  },
  "Your next step": {
    "es": "Su próximo paso"
  },
  "starts here.": {
    "es": "comienza aquí."
  },
  "Reach out to Atlas Tax Services to talk about your next tax return.": {
    "es": "Comuníquese con Atlas Tax Services para hablar sobre su próxima declaración."
  },
  "Contact Atlas Tax Services LLC in Oklahoma City for tax preparation inquiries and appointment information.": {
    "es": "Contacte a Atlas Tax Services LLC en Oklahoma City para consultas de preparación fiscal e información sobre citas."
  },
  "Built around you.": {
    "es": "Pensado para usted."
  },
  "A plan for what’s next.": {
    "es": "Un plan para lo que sigue."
  },
  "A local starting point for tax preparation in Oklahoma City.": {
    "es": "Un punto de partida local para la preparación de impuestos en Oklahoma City."
  },
  "Plan. Prepare.": {
    "es": "Planifique. Prepare."
  },
  "Prosper.": {
    "es": "Prospere."
  },
  "Atlas Tax Services is based in Oklahoma City. Our approach starts with a conversation about your tax needs and the information that matters to your return.": {
    "es": "Atlas Tax Services tiene su sede en Oklahoma City. Nuestro enfoque comienza con una conversación sobre sus necesidades fiscales y la información importante para su declaración."
  },
  "From getting organized to preparing for filing, we want you to know what comes next.": {
    "es": "Desde organizar sus documentos hasta prepararse para declarar, queremos que sepa cuál es el siguiente paso."
  },
  "Tax preparation": {
    "es": "Preparación de impuestos"
  },
  "Our approach": {
    "es": "Nuestro enfoque"
  },
  "Less uncertainty.": {
    "es": "Menos incertidumbre."
  },
  "More direction.": {
    "es": "Más claridad."
  },
  "Tax season brings questions, deadlines and paperwork. Start with a conversation to understand what applies to your situation and what information you need to collect.": {
    "es": "La temporada fiscal trae preguntas, plazos y documentos. Comience con una conversación para entender qué corresponde a su situación y qué información necesita reunir."
  },
  "Good preparation begins before the return itself. We aim to make that first step easier.": {
    "es": "Una buena preparación comienza antes de la declaración. Nuestro objetivo es facilitar ese primer paso."
  },
  "Learn about the Atlas Tax Services approach to tax preparation in Oklahoma City.": {
    "es": "Conozca el enfoque de Atlas Tax Services para la preparación fiscal en Oklahoma City."
  },
  "Ask what to bring, how to prepare and what your next step should be.": {
    "es": "Pregunte qué traer, cómo prepararse y cuál debe ser su próximo paso."
  },
  "A clearer path.": {
    "es": "Un rumbo más claro."
  },
  "Explore common tax preparation needs and contact Atlas to confirm the right service for you.": {
    "es": "Explore las necesidades comunes de preparación fiscal y contacte a Atlas para confirmar el servicio adecuado."
  },
  "Discuss your individual filing needs, income records and supporting documents.": {
    "es": "Converse sobre su declaración individual, registros de ingresos y documentos de respaldo."
  },
  "Explore common tax preparation needs and contact Atlas Tax Services LLC to confirm available services.": {
    "es": "Explore necesidades comunes de preparación fiscal y contacte a Atlas Tax Services LLC para confirmar los servicios disponibles."
  },
  "DEMO ONLY — Do not enter real personal or financial information.": {
    "es": "SOLO DEMOSTRACIÓN — No introduzca información personal o financiera real."
  },
  "This form is a preview. Contact Atlas before sharing any tax documents.": {
    "es": "Este formulario es una vista previa. Contacte a Atlas antes de compartir documentos fiscales."
  },
  "Contact person": {
    "es": "Persona de contacto"
  },
  "Let’s make a": {
    "es": "Hagamos un"
  },
  "plan.": {
    "es": "plan."
  },
  "Contact Mandy Cook at Atlas Tax Services in Oklahoma City to discuss your tax preparation needs.": {
    "es": "Comuníquese con Mandy Cook de Atlas Tax Services en Oklahoma City para hablar sobre sus necesidades fiscales."
  },
  "Phone": {
    "es": "Teléfono"
  },
  "Start with a conversation.": {
    "es": "Comience con una conversación."
  },
  "Call or email with a brief description of your tax needs. Please do not include sensitive personal or financial information in an initial email.": {
    "es": "Llame o envíe un correo con una breve descripción de sus necesidades fiscales. No incluya información personal o financiera confidencial en el primer correo."
  },
  "A local connection for your next tax season.": {
    "es": "Un contacto local para su próxima temporada fiscal."
  },
  "Financial documents being reviewed": {
    "es": "Revisión de documentos financieros"
  },
  "People discussing financial documents": {
    "es": "Personas conversando sobre documentos financieros"
  },
  "Calculator and organized financial records": {
    "es": "Calculadora y registros financieros organizados"
  },
  "A professional consultation": {
    "es": "Una consulta profesional"
  },
  "Reviewing financial records": {
    "es": "Revisión de registros financieros"
  },
  "Organized financial records": {
    "es": "Registros financieros organizados"
  },
  "© 2026 Atlas Tax Services LLC": {
    "es": "© 2026 Atlas Tax Services LLC"
  },
  "Individual Tax Intake | Atlas Tax Services": {
    "es": "Formulario fiscal individual | Atlas Tax Services"
  },
  "Complete your individual tax form and create an encrypted PDF to send to Atlas Tax Services. Form information is processed locally in your browser.": {
    "es": "Complete su formulario fiscal individual y cree un PDF cifrado para enviar a Atlas Tax Services. La información se procesa localmente en su navegador."
  },
  "Your life changes.": {
    "es": "Su vida cambia."
  },
  "Your taxes do, too.": {
    "es": "Sus impuestos también."
  },
  "A new job, a growing family or a business of your own can change what goes into your return. Start with Atlas Tax Services in Oklahoma City.": {
    "es": "Un nuevo empleo, una familia que crece o un negocio propio pueden cambiar lo que incluye su declaración. Empiece con Atlas Tax Services en Oklahoma City."
  },
  "Request an Appointment": {
    "es": "Solicite una cita"
  },
  "Find Your Filing Needs ↗": {
    "es": "Conozca sus opciones ↗"
  },
  "Beyond the paperwork": {
    "es": "Más allá de los documentos"
  },
  "Every return tells a different story.": {
    "es": "Cada declaración cuenta una historia distinta."
  },
  "More than": {
    "es": "Más que"
  },
  "a set of": {
    "es": "un conjunto de"
  },
  "numbers.": {
    "es": "cifras."
  },
  "Your return reflects a year of real decisions: how you earned, what changed and where you are headed. Bring those details to the conversation, not just a stack of forms.": {
    "es": "Su declaración refleja un año de decisiones reales: cómo obtuvo sus ingresos, qué cambió y hacia dónde se dirige. Comparta esos detalles, no solo una pila de formularios."
  },
  "Make room for the things that matter outside of tax season.": {
    "es": "Dedique tiempo a lo que importa fuera de la temporada fiscal."
  },
  "for real life.": {
    "es": "para la vida real."
  },
  "No two filing situations are identical. Find the starting point that sounds like yours.": {
    "es": "No hay dos situaciones fiscales idénticas. Encuentre el punto de partida que se ajuste a la suya."
  },
  "Individuals & Families": {
    "es": "Personas y familias"
  },
  "Business Owners": {
    "es": "Dueños de negocios"
  },
  "Getting Ready to File": {
    "es": "Prepararse para declarar"
  },
  "Wages, household changes and the documents that help tell the story of your year.": {
    "es": "Salarios, cambios en el hogar y documentos que ayudan a contar la historia de su año."
  },
  "Self-employment, business income and the records behind your work.": {
    "es": "Trabajo por cuenta propia, ingresos del negocio y los registros de su actividad."
  },
  "Find out which documents to bring and how to prepare for your appointment.": {
    "es": "Averigüe qué documentos llevar y cómo prepararse para su cita."
  },
  "See Filing Options ↗": {
    "es": "Ver opciones de declaración ↗"
  },
  "Your local tax connection": {
    "es": "Su contacto fiscal local"
  },
  "Right here": {
    "es": "Aquí mismo,"
  },
  "in Oklahoma City.": {
    "es": "en Oklahoma City."
  },
  "Have a question about filing? Get in touch with Mandy Cook to discuss your situation and arrange a time to talk.": {
    "es": "¿Tiene preguntas sobre su declaración? Comuníquese con Mandy Cook para hablar de su situación y acordar una cita."
  },
  "FIND US": {
    "es": "UBICACIÓN"
  },
  "ASK ABOUT": {
    "es": "CONSULTE"
  },
  "Your upcoming return": {
    "es": "Su próxima declaración"
  },
  "REACH US": {
    "es": "CONTACTO"
  },
  "By phone or email": {
    "es": "Por teléfono o correo electrónico"
  },
  "The Atlas motto": {
    "es": "El lema de Atlas"
  },
  "Three words, one philosophy: look ahead, get organized and make space for what comes after filing.": {
    "es": "Tres palabras, una filosofía: mire hacia adelante, organícese y haga espacio para lo que viene después de declarar."
  },
  "Plan.": {
    "es": "Planifique."
  },
  "Think about what changed this year and make a list of your questions.": {
    "es": "Piense en lo que cambió este año y haga una lista de sus preguntas."
  },
  "Prepare.": {
    "es": "Prepare."
  },
  "Gather your income statements, relevant receipts and other records for your appointment.": {
    "es": "Reúna sus comprobantes de ingresos, recibos pertinentes y otros registros para su cita."
  },
  "Review your filing questions and look ahead to the year to come.": {
    "es": "Revise sus preguntas sobre la declaración y mire hacia el próximo año."
  },
  "Have a question before you book?": {
    "es": "¿Tiene preguntas antes de reservar?"
  },
  "Ask Atlas ↗": {
    "es": "Pregunte a Atlas ↗"
  },
  "One less thing": {
    "es": "Una preocupación"
  },
  "on your list.": {
    "es": "menos."
  },
  "Take the first item off your tax-season checklist. Contact us for appointment information.": {
    "es": "Tache el primer pendiente de su lista fiscal. Contáctenos para conocer las opciones de cita."
  },
  "starts with your story.": {
    "es": "empieza con su historia."
  },
  "Every year brings a different mix of income, expenses and life events. Ask Atlas which filing options fit your circumstances.": {
    "es": "Cada año trae una combinación distinta de ingresos, gastos y cambios personales. Consulte a Atlas qué opciones se ajustan a sus circunstancias."
  },
  "Bring your wage statements, other income records and details about changes in your household. Ask which records apply to your return.": {
    "es": "Traiga sus comprobantes de salario, otros registros de ingresos y detalles sobre cambios en su hogar. Consulte qué documentos corresponden a su declaración."
  },
  "First time filing with Atlas? Get a head start by asking which records to collect and how to arrange an appointment.": {
    "es": "¿Es su primera declaración con Atlas? Adelántese preguntando qué registros reunir y cómo concertar una cita."
  },
  "Let’s talk about your year.": {
    "es": "Hablemos de su año."
  },
  "A year of change.": {
    "es": "Un año de cambios."
  },
  "A return of your own.": {
    "es": "Una declaración propia."
  },
  "Meet Atlas Tax Services LLC, based in Oklahoma City.": {
    "es": "Conozca Atlas Tax Services LLC, con sede en Oklahoma City."
  },
  "The name Atlas represents a sense of direction. Our motto, Plan. Prepare. Prosper., is a reminder that filing is one part of a much bigger financial picture.": {
    "es": "El nombre Atlas representa un sentido de dirección. Nuestro lema, Planifique. Prepare. Prospere., nos recuerda que declarar es solo una parte de un panorama financiero más amplio."
  },
  "We invite you to bring your questions and the details of your year to an appointment with us.": {
    "es": "Le invitamos a traer sus preguntas y los detalles de su año a una cita con nosotros."
  },
  "What matters to us": {
    "es": "Lo que nos importa"
  },
  "Real questions.": {
    "es": "Preguntas reales."
  },
  "Useful conversations.": {
    "es": "Conversaciones útiles."
  },
  "Maybe you started working for yourself, moved, welcomed a child or simply want to know what to bring. You do not need to have everything figured out before reaching out.": {
    "es": "Tal vez empezó a trabajar por cuenta propia, se mudó, tuvo un hijo o solo quiere saber qué llevar. No necesita tener todo resuelto antes de contactarnos."
  },
  "Tell us what is on your mind and ask how to prepare for your filing appointment.": {
    "es": "Cuéntenos sus inquietudes y pregunte cómo prepararse para su cita fiscal."
  },
  "Let’s talk": {
    "es": "Hablemos"
  },
  "taxes.": {
    "es": "de impuestos."
  },
  "Ready to make an appointment? Mandy Cook is your contact at Atlas Tax Services LLC.": {
    "es": "¿Listo para concertar una cita? Mandy Cook es su contacto en Atlas Tax Services LLC."
  },
  "Tell us what you need.": {
    "es": "Cuéntenos qué necesita."
  },
  "Call or email to ask about availability, filing services or what to bring. For your privacy, leave Social Security numbers, banking information and tax documents out of your initial message.": {
    "es": "Llame o escriba para consultar disponibilidad, servicios o qué llevar. Por su privacidad, no incluya números de Seguro Social, datos bancarios ni documentos fiscales en su mensaje inicial."
  },
  "Please contact Mandy to confirm office hours and appointment availability before visiting.": {
    "es": "Comuníquese con Mandy para confirmar el horario y la disponibilidad de citas antes de visitar la oficina."
  },
  "Find us in south Oklahoma City.": {
    "es": "Encuéntrenos en el sur de Oklahoma City."
  },
  "Pause motion": {
    "es": "Pausar movimiento"
  },
  "Play motion": {
    "es": "Reproducir movimiento"
  },
  "Your filing needs.": {
    "es": "Sus necesidades fiscales."
  },
  "Your starting point.": {
    "es": "Su punto de partida."
  },
  "Start Tax Form ↗": {
    "es": "Comenzar formulario fiscal ↗"
  },
  "Thoughtful tax preparation": {
    "es": "Preparación de impuestos pensada para usted"
  },
  "for where you are now.": {
    "es": "para donde se encuentra hoy."
  },
  "Atlas Tax Services provides professional tax preparation for individuals, families and small businesses in Oklahoma City, with guidance that helps you get organized before you file.": {
    "es": "Atlas Tax Services ofrece preparación profesional de impuestos para personas, familias y pequeños negocios en Oklahoma City, con orientación que le ayuda a organizarse antes de declarar."
  },
  "Schedule a Consultation": {
    "es": "Programar una consulta"
  },
  "View Tax Services ↗": {
    "es": "Ver servicios fiscales ↗"
  },
  "Explore Atlas ↓": {
    "es": "Explore Atlas ↓"
  },
  "Tax Preparation": {
    "es": "Preparación de impuestos"
  },
  "Year-Round Planning": {
    "es": "Planificación durante todo el año"
  },
  "Individuals • Families": {
    "es": "Personas • Familias"
  },
  "Self-Employed • Small Business": {
    "es": "Trabajo independiente • Pequeños negocios"
  },
  "A more organized approach": {
    "es": "Un enfoque más organizado"
  },
  "Preparation makes better conversations possible.": {
    "es": "La preparación permite conversaciones más útiles."
  },
  "a last-minute": {
    "es": "de última hora"
  },
  "filing.": {
    "es": "declaración."
  },
  "Good tax preparation starts before forms are signed. Atlas helps you think through the year behind you, the records you need and the questions worth asking before you file.": {
    "es": "Una buena preparación de impuestos comienza antes de firmar formularios. Atlas le ayuda a repasar el año, los registros que necesita y las preguntas que vale la pena hacer antes de declarar."
  },
  "Clear preparation today can lead to fewer surprises later.": {
    "es": "Una preparación clara hoy puede significar menos sorpresas después."
  },
  "Professional support": {
    "es": "Apoyo profesional"
  },
  "for common tax needs.": {
    "es": "para necesidades fiscales comunes."
  },
  "Whether you are filing a personal return or preparing business records, Atlas gives you a clearer starting point.": {
    "es": "Ya sea que presente una declaración personal o prepare registros de negocio, Atlas le ofrece un punto de partida más claro."
  },
  "Personal & Families": {
    "es": "Personas y familias"
  },
  "Personal & Family Returns": {
    "es": "Declaraciones personales y familiares"
  },
  "Support for wage earners, households and clients navigating changes that can affect a personal tax return.": {
    "es": "Apoyo para asalariados, hogares y clientes que atraviesan cambios que pueden afectar una declaración personal."
  },
  "Small Business & Self-Employed": {
    "es": "Pequeños negocios y trabajo independiente"
  },
  "Guidance for contractors, sole proprietors and business owners who need a more organized filing process.": {
    "es": "Orientación para contratistas, propietarios únicos y dueños de negocios que necesitan un proceso de declaración más organizado."
  },
  "Document Preparation": {
    "es": "Preparación de documentos"
  },
  "Know what to gather, what questions to ask and how to prepare before your appointment.": {
    "es": "Sepa qué reunir, qué preguntas hacer y cómo prepararse antes de su cita."
  },
  "See Service Details ↗": {
    "es": "Ver detalles del servicio ↗"
  },
  "Local service, practical guidance": {
    "es": "Servicio local, orientación práctica"
  },
  "Serving clients": {
    "es": "Atendiendo a clientes"
  },
  "in Oklahoma City.": {
    "es": "en Oklahoma City."
  },
  "Have questions about filing, planning or getting your records in order? Connect with Mandy Cook to discuss your next steps.": {
    "es": "¿Tiene preguntas sobre la declaración, la planificación o cómo organizar sus registros? Comuníquese con Mandy Cook para hablar sobre sus próximos pasos."
  },
  "Tax preparation services": {
    "es": "Servicios de preparación de impuestos"
  },
  "Phone or email": {
    "es": "Teléfono o correo electrónico"
  },
  "The Atlas process": {
    "es": "El proceso de Atlas"
  },
  "Atlas approaches tax season with a simple process: understand the situation, prepare thoroughly and move forward with confidence.": {
    "es": "Atlas aborda la temporada fiscal con un proceso sencillo: entender la situación, prepararse a fondo y avanzar con confianza."
  },
  "Start with a conversation about your return, your records and any changes that could affect filing.": {
    "es": "Comience con una conversación sobre su declaración, sus registros y cualquier cambio que pueda afectar su presentación."
  },
  "Organize the forms, statements and supporting documents needed for a productive appointment.": {
    "es": "Organice los formularios, estados de cuenta y documentos de respaldo necesarios para una cita productiva."
  },
  "Finish with a clearer understanding of your return and what to keep in mind moving forward.": {
    "es": "Termine con una comprensión más clara de su declaración y de lo que debe tener en cuenta en adelante."
  },
  "Need help deciding where to start?": {
    "es": "¿Necesita ayuda para decidir por dónde empezar?"
  },
  "Talk With Atlas ↗": {
    "es": "Hablar con Atlas ↗"
  },
  "A clearer tax season": {
    "es": "Una temporada fiscal más clara"
  },
  "starts here.": {
    "es": "comienza aquí."
  },
  "Reach out to Atlas Tax Services for appointment information, document guidance and help preparing for your next return.": {
    "es": "Comuníquese con Atlas Tax Services para obtener información sobre citas, orientación sobre documentos y ayuda para prepararse para su próxima declaración."
  },
  "A more prepared": {
    "es": "Una manera más preparada"
  },
  "way to file.": {
    "es": "de declarar."
  },
  "Atlas Tax Services LLC serves Oklahoma City clients who want a more organized approach to tax preparation.": {
    "es": "Atlas Tax Services LLC atiende a clientes de Oklahoma City que desean un enfoque más organizado para la preparación de impuestos."
  },
  "Professional guidance.": {
    "es": "Orientación profesional."
  },
  "Practical preparation.": {
    "es": "Preparación práctica."
  },
  "Atlas was built around the idea that tax preparation should feel structured, informative and manageable. Filing is not just about forms—it is about understanding what applies to your situation and showing up prepared.": {
    "es": "Atlas se construyó sobre la idea de que la preparación de impuestos debe sentirse estructurada, informativa y manejable. Declarar no se trata solo de formularios, sino de entender qué aplica a su situación y llegar preparado."
  },
  "Whether you are filing for yourself, your family or your business, our goal is to help you move through the process with more clarity and less guesswork.": {
    "es": "Ya sea que declare por usted, su familia o su negocio, nuestro objetivo es ayudarle a avanzar con más claridad y menos suposiciones."
  },
  "Review services ↗": {
    "es": "Revisar servicios ↗"
  },
  "Tax preparation guidance": {
    "es": "Orientación para la preparación de impuestos"
  },
  "Preparation first.": {
    "es": "Primero la preparación."
  },
  "Better decisions next.": {
    "es": "Después, mejores decisiones."
  },
  "Some clients are navigating a routine filing season. Others are dealing with new income, business activity or major life changes. Either way, it helps to have a place to ask questions and get organized.": {
    "es": "Algunos clientes atraviesan una temporada fiscal habitual. Otros están lidiando con nuevos ingresos, actividad comercial o cambios importantes de vida. En cualquier caso, ayuda contar con un lugar para hacer preguntas y organizarse."
  },
  "Atlas focuses on helpful conversations, practical preparation and the information you need before your appointment.": {
    "es": "Atlas se enfoca en conversaciones útiles, preparación práctica y la información que necesita antes de su cita."
  },
  "Tax preparation support": {
    "es": "Apoyo para la preparación de impuestos"
  },
  "for the return ahead.": {
    "es": "para la declaración que viene."
  },
  "Atlas works with Oklahoma City clients who need help preparing for personal, family and small business tax filings.": {
    "es": "Atlas trabaja con clientes de Oklahoma City que necesitan ayuda para prepararse para declaraciones personales, familiares y de pequeños negocios."
  },
  "Bring wage statements, income records and details about household changes so you can prepare for a complete personal return.": {
    "es": "Traiga comprobantes de salario, registros de ingresos y detalles sobre cambios en el hogar para prepararse para una declaración personal completa."
  },
  "Discuss self-employment income, business records and the documents that support your work throughout the year.": {
    "es": "Converse sobre ingresos por cuenta propia, registros del negocio y los documentos que respaldan su trabajo durante el año."
  },
  "Pre-Filing Preparation": {
    "es": "Preparación antes de declarar"
  },
  "Need a place to start? Ask which records to gather, how to prepare for your visit and what information may be helpful.": {
    "es": "¿Necesita un punto de partida? Pregunte qué registros reunir, cómo prepararse para su visita y qué información puede ser útil."
  },
  "Let’s discuss your filing needs.": {
    "es": "Hablemos de sus necesidades fiscales."
  },
  "Start with a conversation": {
    "es": "Comience con una conversación"
  },
  "about your return.": {
    "es": "sobre su declaración."
  },
  "Mandy Cook is your contact for appointments, questions about services and help getting ready to file.": {
    "es": "Mandy Cook es su contacto para citas, preguntas sobre servicios y ayuda para prepararse para declarar."
  },
  "Reach out with the basics.": {
    "es": "Comuníquese con lo esencial."
  },
  "Call or email to ask about appointment availability, tax preparation services or what documents to gather. For your privacy, please do not include Social Security numbers, banking information or tax documents in your first message.": {
    "es": "Llame o escriba para consultar disponibilidad de citas, servicios de preparación de impuestos o qué documentos reunir. Por su privacidad, no incluya números de Seguro Social, información bancaria ni documentos fiscales en su primer mensaje."
  },
  "Please contact Mandy before visiting to confirm office hours, availability and what to bring to your appointment.": {
    "es": "Comuníquese con Mandy antes de visitar la oficina para confirmar horarios, disponibilidad y qué llevar a su cita."
  },
  "Proudly serving clients in Oklahoma City.": {
    "es": "Atendemos con orgullo a clientes en Oklahoma City."
  },
  "Professional tax preparation for individuals, families and small businesses in Oklahoma City.": {
    "es": "Preparación profesional de impuestos para personas, familias y pequeños negocios en Oklahoma City."
  },
  "Explore personal, family and small business tax preparation support from Atlas Tax Services LLC in Oklahoma City.": {
    "es": "Explore el apoyo de Atlas Tax Services LLC en Oklahoma City para declaraciones personales, familiares y de pequeños negocios."
  },
  "Learn about Atlas Tax Services LLC and its organized approach to tax preparation in Oklahoma City.": {
    "es": "Conozca Atlas Tax Services LLC y su enfoque organizado para la preparación de impuestos en Oklahoma City."
  },
  "Contact Atlas Tax Services for appointments, questions and tax preparation information in Oklahoma City.": {
    "es": "Comuníquese con Atlas Tax Services para citas, preguntas e información sobre preparación de impuestos en Oklahoma City."
  },
  "Personal & business returns": {
    "es": "Declaraciones personales y de negocios"
  },
  "Consultations available": {
    "es": "Consultas disponibles"
  },
  "How we help": {
    "es": "Cómo ayudamos"
  },
  "Start the Conversation": {
    "es": "Comenzar la conversación"
  },
};
const supported = new Set(["en","es"]);
const labels = {en:"Language",es:"Idioma"};
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description?.getAttribute('content');

  let savedLanguage = 'en';
  try {
    const saved = localStorage.getItem('atlas-tax-language');
    if (supported.has(saved)) savedLanguage = saved;
  } catch (_) {
    // Private browsing or disabled storage: the control still works this visit.
  }

  const switcher = document.createElement('div');
  switcher.className = 'site-language-switcher';
  switcher.setAttribute('dir', 'ltr');
  switcher.innerHTML = '<span class="language-globe" aria-hidden="true">🌐</span>' +
    '<label class="visually-hidden" for="site-language-select">Language</label>' +
    '<select id="site-language-select" name="language">' +
    '<option value="en">English</option>' +
    '<option value="es">Español</option>' +
    '</select>';
  document.body.appendChild(switcher);

  const select = switcher.querySelector('select');
  const label = switcher.querySelector('label');

  function translateValue(source, language) {
    const key = source.trim();
    const translated = language === 'en' ? key : dictionary[key]?.[language];
    return translated ? source.replace(key, translated) : source;
  }

  function setLanguage(language) {
    if (!supported.has(language)) language = 'en';

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('.site-language-switcher, script, style, svg, noscript')) continue;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      node.nodeValue = translateValue(originalText.get(node), language);
    }

    document.querySelectorAll('[alt], [aria-label]').forEach(element => {
      if (element.closest('.site-language-switcher')) return;
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {
          alt: element.getAttribute('alt'),
          ariaLabel: element.getAttribute('aria-label')
        });
      }
      const original = originalAttributes.get(element);
      if (original.alt !== null) element.setAttribute('alt', translateValue(original.alt, language));
      if (original.ariaLabel !== null) element.setAttribute('aria-label', translateValue(original.ariaLabel, language));
    });

    
    document.title = language === 'en' ? originalTitle : dictionary[originalTitle]?.es || originalTitle;
    if (description && originalDescription) {
      const next = language === 'en' ? originalDescription : dictionary[originalDescription]?.es || originalDescription;
      description.setAttribute('content', next);
    }

    document.documentElement.setAttribute('lang', language);
    // Keep the established page/grid composition LTR in every language.
    document.documentElement.setAttribute('dir', 'ltr');
    label.textContent = labels[language];
    select.setAttribute('aria-label', labels[language]);
    select.value = language;
  }

  select.addEventListener('change', () => {
    const language = select.value;
    try {
      localStorage.setItem('atlas-tax-language', language);
    } catch (_) {}
    setLanguage(language);
  });

  setLanguage(savedLanguage);
})();

// Decorative motion: independent of scrolling and resilient to unavailable remote media.
(()=>{
 const videos=[...document.querySelectorAll('.atlas-loop')]; if(!videos.length)return;
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 const button=document.querySelector('.motion-toggle'); let paused=preference.matches;
 const visible=new Set();
 function sync(){document.body.classList.toggle('motion-paused',paused);if(button){button.setAttribute('aria-pressed',String(paused));button.textContent=document.documentElement.lang==='es'?(paused?'Reproducir movimiento':'Pausar movimiento'):(paused?'Play motion':'Pause motion');}
 videos.forEach(v=>{if(paused||!visible.has(v)){v.pause();return;}if(!v.getAttribute('src')){v.muted=true;v.defaultMuted=true;v.src=v.dataset.src;}v.play().catch(()=>{});});}
 videos.forEach(v=>{v.addEventListener('playing',()=>v.parentElement.classList.add('video-playing'));v.addEventListener('error',()=>v.parentElement.classList.remove('video-playing'));});
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?visible.add(e.target):visible.delete(e.target));sync();},{rootMargin:'100px'});videos.forEach(v=>observer.observe(v));
 button?.addEventListener('click',()=>{paused=!paused;sync();}); preference.addEventListener('change',e=>{paused=e.matches;sync();});document.querySelector('#site-language-select')?.addEventListener('change',sync);sync();
})();
