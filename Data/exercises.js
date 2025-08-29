// data/exercises.js
window.DATA = [
  {
    "id": "ej-001",
    "title": "Ejercicio 1: Hola mundo personalizado",
    "slug": "hola-mundo-personalizado",
    "summary": "Crea un programa que muestre por pantalla el mensaje “¡Hola, [tu nombre]!” sustituyendo [tu nombre] por el que introduzca el usuario por teclado.",
    "learn": "Entrada y salida básica de datos, guardar información en variables y personalizar mensajes.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["entrada-salida", "strings", "variables"],
    "pdf": "/pdfs/ej-001.pdf",
    "steps": [
      "Pide al usuario que introduzca su nombre.",
      "Guarda el nombre en una variable.",
      "Muestra por pantalla: “¡Hola, [nombre]!” usando la variable."
    ],
    
  },
  {
    "id": "ej-002",
    "title": "Ejercicio 2: Suma de dos números",
    "slug": "suma-dos-numeros",
    "summary": "Pide al usuario dos números enteros y muestra su suma. Imagina que estás creando una calculadora muy simple y personalizada.",
    "learn": "Entrada múltiple, operaciones aritméticas básicas, uso de variables y mostrar resultados.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["aritmética", "entrada-salida", "tipos"],
    "pdf": "/pdfs/ej-002.pdf",
    "steps": [
      "Pide al usuario el primer número y guárdalo en una variable.",
      "Pide el segundo número y guárdalo en otra variable",
      "Suma ambos números y guarda el resultado.",
      "Muestra el resultado al usuario."
    ],
  },
  {
    "id": "ej-003",
    "title": "Ejercicio 3: Área y perímetro de un círculo",
    "slug": "area-y-perimetro-circulo",
    "summary": "Solicita el radio de un círculo y muestra su área y perímetro por pantalla.",
    "learn": "Entrada de datos decimales, uso de fórmulas matemáticas, variables tipo decimal y salida formateada.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["aritmética", "entrada-salida", "formatos"],
    "pdf": "/pdfs/ej-003.pdf",
    "steps": [
      "Pide al usuario el radio y guárdalo como decimal.",
      "Calcula el área usando la fórmula: área = π × radio × radio.",
      "Calcula el perímetro: perímetro = 2 × π × radio.",
      "Muestra ambos resultados al usuario."
    ],
  },
  {
    "id": "ej-004",
    "title": "Ejercicio 4: Conversor de temperaturas (Celsius a Fahrenheit)",
    "slug": "conversor-de-temperaturas",
    "summary": "Solicita una temperatura en grados Celsius y muestra el resultado en Fahrenheit.",
    "learn": "Operaciones con números reales, uso de fórmulas, conversión de unidades y salida clara.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["aritmética", "entrada-salida", "formatos"],
    "pdf": "/pdfs/ej-004.pdf",
    "steps": [
      "Pide al usuario la temperatura en Celsius.",
      "Convierte la temperatura a Fahrenheit usando la fórmula: F = C × 9/5 + 32.",
      "Muestra el resultado al usuario."
    ],
  },
  {
    "id": "ej-005",
    "title": "Ejercicio 5: Comprobación de número par o impar",
    "slug": "par-o-impar",
    "summary": "Pide un número entero al usuario y dile si es par o impar.",
    "learn": "Condicionales simples (if-else), uso del operador módulo, mensajes condicionales.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["condicionales", "operadores", "entrada-salida"],
    "pdf": "/pdfs/ej-005.pdf",
    "steps": [
      "Pide al usuario un número entero.",
      "Comprueba si el número es divisible por 2.",
      "Muestra “par” si es divisible, “impar” si no lo es."
    ],
  },
  {
    "id": "ej-006",
    "title": "Ejercicio 6: Calculadora de edad",
    "slug": "calculadora-de-edad",
    "summary": "Solicita el año de nacimiento y calcula la edad actual del usuario.",
    "learn": "Operaciones con fechas, cálculo de diferencias, entrada y salida de datos.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["entrada-salida", "aritmética", "formatos"],
    "pdf": "/pdfs/ej-006.pdf",
    "steps": [
      "Pide al usuario el año de nacimiento.",
      "Obtén el año actual (puedes ponerlo fijo o buscarlo en el sistema).",
      "Calcula la edad restando el año de nacimiento al actual.",
      "Muestra la edad calculada al usuario."
    ],
  },
  {
    "id": "ej-007",
    "title": "Ejercicio 7: Tabla de multiplicar de un número",
    "slug": "tabla-de-multiplicar",
    "summary": "Pide un número y muestra su tabla de multiplicar del 1 al 10.",
    "learn": "Uso de bucles, operaciones repetitivas y formateo de la salida.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["bucles", "aritmética", "formatos"],
    "pdf": "/pdfs/ej-007.pdf",
    "steps": [
      "Pide al usuario un número.",
      "Usa un bucle del 1 al 10.",
      "En cada vuelta, multiplica el número por el valor del bucle y muestra el resultado."
    ],
  },
  {
    "id": "ej-008",
    "title": "Sumar todos los números hasta N",
    "slug": "sumar-todos-los-numeros-hasta-n",
    "summary": "Solicita un número N y calcula la suma de todos los números desde 1 hasta N.",
    "learn": "Bucles, acumuladores y lógica iterativa.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["bucles", "aritmética", "contadores"],
    "pdf": "/pdfs/ej-008.pdf",
    "steps": [
      "Pide al usuario un número N.",
      "Inicializa una variable acumuladora en 0.",
      "Usa un bucle para sumar todos los números del 1 a N en el acumulador.",
      "Muestra la suma total al usuario."
    ],
  },
  {
    "id": "ej-009",
    "title": "Ejercicio 9: Contar vocales en una frase",
    "slug": "contar-vocales",
    "summary": "Pide una frase y cuenta cuántas vocales contiene.",
    "learn": "Manejo de cadenas, bucles, condicionales y recuento de caracteres.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["strings", "bucles", "contadores"],
    "pdf": "/pdfs/ej-009.pdf",
    "steps": [
      "Pide al usuario una frase.",
      "Inicializa un contador de vocales en 0.",
      "Si la letra es vocal, suma 1 al contador.",
      "Muestra el número total de vocales al usuario."
    ],
  },
  {
    "id": "ej-010",
    "title": "Ejercicio 10: Invertir una cadena de texto",
    "slug": "invertir-cadena-de-texto",
    "summary": "Solicita una palabra o frase y muestra la cadena invertida.",
    "learn": "Manipulación de cadenas y salida formateada.",
    "level": "básico",
    "languages": ["python", "c", "java", "csharp"],
    "topics": ["strings", "entrada-salida"],
    "pdf": "/pdfs/ej-010.pdf",
    "steps": [
      "Pide al usuario una palabra o frase.",
      "Crea una versión invertida de la cadena.",
      "Muestra la cadena invertida al usuario."
    ],
  }
];

function card(e){
  const stepsHTML = (e.steps && e.steps.length)
      ? e.steps.map(s => `<li>${s}</li>`).join('')
      : `<li>Guía disponible próximamente.</li>`;

  const metaHTML = `
    <div class="meta">
      <span class="pill">${e.level}</span>
      ${ (e.languages||[]).map(l => `<span class="pill">${l}</span>`).join('') }
      ${ (e.topics||[]).map(t => `<span class="pill">${t}</span>`).join('') }
    </div>
  `;

  const article = document.createElement('article');
  article.className = 'exercise';

  article.innerHTML = `
    <h4>${e.title}</h4>

    ${metaHTML}

    <p>${e.summary}</p>

    <p><strong>¿Qué vas a aprender?</strong> ${e.learn || ''}</p>

    <details class="exercise-steps">
      <summary>Ver guía paso a paso</summary>
      <ol>${stepsHTML}</ol>
    </details>

    <div class="actions">
      <a class="btn btn-ghost" href="exercise.html?slug=${e.slug}">Ver ejercicio</a>
      <a class="btn-pdf" href="${e.pdf || '#'}">Descargar PDF</a>
    </div>

  `;

  return article;
}

function render(){
  const list = document.querySelector('#list'); list.innerHTML="";
  DATA.forEach(e=> list.appendChild(card(e)));
}

render();