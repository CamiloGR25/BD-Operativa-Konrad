(() => {
  const root = document.getElementById("dbsim");
  if (!root) return;

  const modules = [
    {
      title: "Fundamentos de SQL",
      intro: "Comprende qué es SQL, por qué es un lenguaje declarativo y cómo una consulta pasa por análisis, optimización y ejecución antes de devolver un resultado.",
      difficulty: "Inicial",
      theory: [
        ["¿Qué es SQL?", "SQL es un lenguaje estandarizado y específico de dominio para interactuar con sistemas de gestión de bases de datos relacionales. Permite recuperar, insertar, actualizar, eliminar y administrar datos organizados en tablas relacionadas."],
        ["¿Por qué se considera declarativo?", "Porque el usuario describe qué resultado necesita y no programa todos los pasos internos para conseguirlo. El motor de base de datos decide cómo obtener el resultado solicitado."],
        ["¿Cómo funciona una consulta?", "Una sentencia pasa por un analizador que revisa sintaxis y significado. Después, el optimizador elige una estrategia de ejecución y finalmente el motor de almacenamiento accede o modifica los datos."],
        ["¿Por qué importa?", "El programador expresa la intención y el sistema se encarga de resolver el acceso físico a los datos, lo que facilita trabajar con conjuntos de información complejos."]
      ],
      example: "SELECT name, email\nFROM customers\nWHERE city = 'New York';",
      challenge: "Consulta los nombres y correos de todos los estudiantes que se encuentran en tercer semestre.",
      objective: "Usa SELECT, FROM y WHERE.",
      solution: "SELECT nombre, correo\nFROM estudiante\nWHERE semestre = 3;",
      hint: "SELECT define las columnas, FROM la tabla y WHERE la condición.",
      type: "select"
    },
    {
      title: "Componentes y familias de comandos",
      intro: "Reconoce los elementos de un sistema SQL y diferencia DDL, DML, DQL, DCL y TCL según el problema que resuelven.",
      difficulty: "Inicial",
      theory: [
        ["Componentes clave", "Un sistema SQL integra bases de datos, tablas, consultas, restricciones, transacciones, tipos de datos, índices, vistas, seguridad y permisos."],
        ["DDL", "Lenguaje de definición de datos. Define o modifica objetos como tablas, vistas e índices. CREATE TABLE, ALTER TABLE y DROP TABLE pertenecen a este grupo."],
        ["DML", "Lenguaje de manipulación de datos. Se usa para insertar, actualizar y eliminar datos."],
        ["DQL", "Lenguaje de consulta de datos. Su operación representativa es SELECT."],
        ["DCL", "Lenguaje de control de datos. Gestiona permisos y acceso mediante operaciones como GRANT y REVOKE."],
        ["TCL", "Lenguaje de control de transacciones. Agrupa cambios como una unidad de trabajo mediante COMMIT y ROLLBACK."]
      ],
      example: "INSERT INTO customers (name, email, city)\nVALUES ('Jane Doe', 'jane.doe@example.com', 'Los Angeles');",
      challenge: "Agrega un nuevo estudiante con id 4, nombre Laura, correo laura@uni.edu, semestre 2 y programa 101.",
      objective: "Practica una operación DML mediante INSERT.",
      solution: "INSERT INTO estudiante (id, nombre, correo, semestre, programa_id)\nVALUES (4, 'Laura', 'laura@uni.edu', 2, 101);",
      hint: "INSERT INTO indica la tabla y columnas; VALUES proporciona los valores en el mismo orden.",
      type: "insert"
    },
    {
      title: "SELECT, INSERT, UPDATE y DELETE",
      intro: "Opera datos existentes y observa cómo una condición WHERE cambia el alcance de una modificación o eliminación.",
      difficulty: "Básico",
      theory: [
        ["SELECT", "Recupera datos de una o varias tablas y puede combinarse con filtros."],
        ["INSERT", "Añade una nueva fila y debe respetar tipos, restricciones y relaciones."],
        ["UPDATE", "Modifica datos existentes. WHERE determina qué filas serán actualizadas."],
        ["DELETE", "Elimina filas. Sin WHERE, la operación puede afectar a todos los registros de la tabla."]
      ],
      example: "UPDATE clientes\nSET email = 'nuevo.correo@example.com'\nWHERE nombre = 'John Doe';",
      challenge: "Actualiza a cuarto semestre al estudiante cuyo id es 1.",
      objective: "Comprender el efecto de UPDATE y la importancia de WHERE.",
      solution: "UPDATE estudiante\nSET semestre = 4\nWHERE id = 1;",
      hint: "La condición debe identificar el registro que deseas modificar.",
      type: "update"
    },
    {
      title: "Estructura y normalización",
      intro: "Construye tablas y comprende cómo la normalización reduce grupos repetidos, redundancia y dependencias que no pertenecen a una entidad.",
      difficulty: "Intermedio",
      theory: [
        ["CREATE TABLE", "Define una tabla, sus columnas, tipos de datos y restricciones."],
        ["ALTER TABLE", "Modifica la estructura de una tabla existente, por ejemplo agregando una columna."],
        ["DROP TABLE", "Elimina una tabla y sus datos."],
        ["Primera forma normal", "Elimina grupos repetidos, separa conjuntos relacionados y utiliza claves principales."],
        ["Segunda forma normal", "Separa conjuntos de valores que se aplican a varios registros y los relaciona mediante claves externas."],
        ["Tercera forma normal", "Retira campos que no dependen de la clave de la tabla."]
      ],
      example: "CREATE TABLE products (\n  product_id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  price DECIMAL(10,2)\n);",
      challenge: "Crea una tabla llamada asignatura con id como clave primaria, nombre obligatorio y creditos enteros.",
      objective: "Usa CREATE TABLE con PRIMARY KEY y NOT NULL.",
      solution: "CREATE TABLE asignatura (\n  id INTEGER PRIMARY KEY,\n  nombre TEXT NOT NULL,\n  creditos INTEGER\n);",
      hint: "La sintaxis comienza con CREATE TABLE nombre_tabla y luego define columnas entre paréntesis.",
      type: "create"
    },
    {
      title: "JOIN y relaciones",
      intro: "Combina información distribuida en varias tablas mediante columnas relacionadas y comprende por qué un modelo relacional evita duplicar información.",
      difficulty: "Intermedio",
      theory: [
        ["JOIN", "Combina filas de dos o más tablas basándose en una columna relacionada."],
        ["Clave primaria", "Identifica de manera única un registro dentro de una tabla."],
        ["Clave foránea", "Referencia una clave de otra tabla y expresa relaciones entre entidades."],
        ["Uno a muchos", "Un registro de una tabla puede relacionarse con múltiples registros de otra."]
      ],
      example: "SELECT c.name, p.name AS product_name\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nJOIN products p ON o.product_id = p.product_id;",
      challenge: "Obtén el nombre de cada estudiante junto con el nombre de su programa.",
      objective: "Realiza un JOIN entre estudiante y programa.",
      solution: "SELECT e.nombre, p.nombre AS programa\nFROM estudiante e\nJOIN programa p ON e.programa_id = p.id;",
      hint: "La relación está entre estudiante.programa_id y programa.id.",
      type: "join"
    },
    {
      title: "Claves foráneas e índices",
      intro: "Explora integridad referencial, activación de claves foráneas en SQLite y el papel de los índices en búsquedas y comprobaciones de relaciones.",
      difficulty: "Intermedio",
      theory: [
        ["Tabla padre y tabla hija", "La tabla padre contiene la clave referenciada. La tabla hija contiene la FOREIGN KEY."],
        ["Integridad referencial", "Una fila hija no debería apuntar a una fila padre inexistente."],
        ["Activación en SQLite", "Las claves foráneas se habilitan para la conexión mediante PRAGMA foreign_keys = ON."],
        ["Índices", "La clave padre suele ser PRIMARY KEY o UNIQUE. Los índices sobre claves hijas suelen ser beneficiosos para evitar búsquedas lineales costosas."]
      ],
      example: "PRAGMA foreign_keys = ON;\n\nCREATE TABLE track (\n  trackid INTEGER PRIMARY KEY,\n  trackname TEXT,\n  trackartist INTEGER REFERENCES artist(artistid)\n);",
      challenge: "Activa las claves foráneas y después intenta insertar un estudiante cuyo programa_id sea 999.",
      objective: "Experimentar con PRAGMA foreign_keys y una violación de integridad.",
      solution: "PRAGMA foreign_keys = ON;\nINSERT INTO estudiante (id, nombre, correo, semestre, programa_id)\nVALUES (8, 'Camila', 'camila@uni.edu', 1, 999);",
      hint: "El programa 999 no existe. Con foreign_keys activado, la inserción debe ser rechazada.",
      type: "fk"
    },
    {
      title: "Claves compuestas y restricciones diferidas",
      intro: "Trabaja con relaciones que dependen de varias columnas y comprende la diferencia entre validar una restricción inmediatamente o al confirmar una transacción.",
      difficulty: "Avanzado",
      theory: [
        ["Clave foránea compuesta", "La clave hija y la clave padre pueden estar formadas por varias columnas y deben tener la misma cardinalidad."],
        ["Restricción inmediata", "Es el comportamiento predeterminado. Una violación al finalizar la sentencia genera un error."],
        ["Restricción diferida", "Puede declararse DEFERRABLE INITIALLY DEFERRED. La violación se tolera temporalmente dentro de una transacción, pero COMMIT falla si persiste."],
        ["Transacción", "BEGIN / COMMIT permite tratar varias operaciones como una unidad lógica."]
      ],
      example: "CREATE TABLE song (\n  songid INTEGER,\n  songartist TEXT,\n  songalbum TEXT,\n  FOREIGN KEY(songartist, songalbum)\n    REFERENCES album(albumartist, albumname)\n);",
      challenge: "Ejecuta BEGIN y COMMIT para observar cómo el simulador explica el momento de validación de una restricción diferida.",
      objective: "Comprender el momento de validación de una clave foránea diferida.",
      solution: "BEGIN;\nCOMMIT;",
      hint: "La palabra clave importante es COMMIT.",
      type: "deferred"
    },
    {
      title: "Acciones referenciales, SQL vs NoSQL y seguridad",
      intro: "Cierra el laboratorio analizando ON DELETE / ON UPDATE, diferencias entre SQL y NoSQL y el riesgo conceptual de la inyección SQL.",
      difficulty: "Avanzado",
      theory: [
        ["ON DELETE / ON UPDATE", "Configuran qué ocurre en filas hijas cuando una clave padre se elimina o modifica."],
        ["NO ACTION y RESTRICT", "NO ACTION no aplica una acción especial; RESTRICT impide modificar o eliminar una clave padre mientras existan dependencias."],
        ["SET NULL / SET DEFAULT", "Cambian la clave hija a NULL o a su valor predeterminado, si el esquema lo permite."],
        ["CASCADE", "Propaga la eliminación o actualización desde la fila padre hacia sus filas hijas."],
        ["SQL vs NoSQL", "SQL usa estructuras tabulares relacionadas y esquemas definidos; NoSQL ofrece modelos más flexibles para otros tipos de datos y escalamiento."],
        ["Inyección SQL", "Surge cuando una entrada manipulada altera una consulta construida de forma insegura."]
      ],
      example: "CREATE TABLE track (\n  trackid INTEGER PRIMARY KEY,\n  trackartist INTEGER REFERENCES artist(artistid)\n    ON UPDATE CASCADE\n);",
      challenge: "Elimina al estudiante 2 y observa cómo se eliminan también sus matrículas asociadas en este escenario.",
      objective: "Comprender el efecto de ON DELETE CASCADE.",
      solution: "DELETE FROM estudiante\nWHERE id = 2;",
      hint: "Las matrículas de ese estudiante se eliminarán en cascada.",
      type: "cascade"
    }
  ];

  const baseData = () => ({
    foreignKeys: false,
    tables: {
      programa: {
        columns: ["id", "nombre"],
        rows: [
          { id: 101, nombre: "Ingeniería de Sistemas" },
          { id: 102, nombre: "Ingeniería Industrial" }
        ]
      },
      estudiante: {
        columns: ["id", "nombre", "correo", "semestre", "programa_id"],
        rows: [
          { id: 1, nombre: "Ana Torres", correo: "ana@uni.edu", semestre: 3, programa_id: 101 },
          { id: 2, nombre: "Carlos Ruiz", correo: "carlos@uni.edu", semestre: 2, programa_id: 101 },
          { id: 3, nombre: "María López", correo: "maria@uni.edu", semestre: 3, programa_id: 102 }
        ]
      },
      matricula: {
        columns: ["id", "estudiante_id", "asignatura"],
        rows: [
          { id: 1, estudiante_id: 1, asignatura: "Bases de Datos" },
          { id: 2, estudiante_id: 2, asignatura: "Programación II" },
          { id: 3, estudiante_id: 2, asignatura: "Redes" }
        ]
      }
    }
  });

  let db = baseData();
  let current = 0;
  let mode = "theory";
  const completed = new Set();

  const $ = (selector) => root.querySelector(selector);
  const nav = $("#moduleNav");
  const theoryPanel = $("#theoryPanel");
  const practicePanel = $("#practicePanel");

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);

  function renderNav() {
    nav.innerHTML = "";
    modules.forEach((module, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `module-btn ${index === current ? "active" : ""}`;
      button.innerHTML = `
        <span class="module-number">${completed.has(index) ? "✓" : index + 1}</span>
        <span class="module-label">${escapeHtml(module.title)}</span>
      `;
      button.addEventListener("click", () => {
        current = index;
        renderAll();
      });
      nav.appendChild(button);
    });
  }

  function renderTheory() {
    const module = modules[current];
    theoryPanel.innerHTML = `
      <section class="card">
        <h3>Conceptos fundamentales</h3>
        <div class="concept-grid">
          ${module.theory.map(([title, text]) => `
            <article class="concept-card">
              <h4>${escapeHtml(title)}</h4>
              <p>${escapeHtml(text)}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="card">
        <h3>Ejemplo resuelto</h3>
        <pre class="codebox">${escapeHtml(module.example)}</pre>
        <p class="muted">
          Observa la estructura antes de pasar al laboratorio. El objetivo es comprender
          qué hace cada parte de la instrucción, no memorizarla.
        </p>
      </section>
    `;
  }

  function renderSchema() {
    const tree = $("#schemaTree");
    tree.innerHTML = "";

    Object.entries(db.tables).forEach(([name, table]) => {
      const item = document.createElement("div");
      item.className = "schema-item";
      item.innerHTML = `
        <strong>${escapeHtml(name)}</strong>
        <div class="schema-cols">${table.columns.map(escapeHtml).join(" · ")}</div>
        <div class="schema-count">${table.rows.length} filas</div>
      `;
      tree.appendChild(item);
    });

    const fk = document.createElement("div");
    fk.className = "schema-item";
    fk.innerHTML = `
      <strong>SQLite foreign_keys</strong>
      <div class="schema-count">${db.foreignKeys ? "ON ✓" : "OFF"}</div>
    `;
    tree.appendChild(fk);
  }

  function renderPractice() {
    const module = modules[current];
    $("#challengeText").textContent = module.challenge;
    $("#objectiveText").textContent = module.objective;
    $("#difficulty").textContent = module.difficulty;
    $("#sqlEditor").value = "";
    $("#sqlEditor").placeholder = "Escribe aquí tu solución SQL...";
    const helpPanel = $("#helpPanel");
    helpPanel.classList.add("hidden");
    $("#helpHint").textContent = module.hint;
    $("#helpSolution").textContent = module.solution;
    $("#feedback").className = "card";
    $("#feedback").innerHTML = `
      <h3>Resultado y retroalimentación</h3>
      <p class="muted">Ejecuta una instrucción para observar el resultado.</p>
    `;
    renderSchema();
  }

  function setMode(nextMode) {
    mode = nextMode;
    const theoryActive = mode === "theory";
    theoryPanel.classList.toggle("hidden", !theoryActive);
    practicePanel.classList.toggle("hidden", theoryActive);
    $("#theoryTab").classList.toggle("active", theoryActive);
    $("#practiceTab").classList.toggle("active", !theoryActive);
  }

  function updateProgress() {
    const pct = Math.round((completed.size / modules.length) * 100);
    $("#progressText").textContent = `${pct}%`;
    $("#progressBar").style.width = `${pct}%`;
    $("#completedText").textContent = completed.size;
  }

  function renderAll() {
    const module = modules[current];
    $("#moduleEyebrow").textContent = `Módulo ${current + 1} de ${modules.length}`;
    $("#moduleTitle").textContent = module.title;
    $("#moduleIntro").textContent = module.intro;
    renderNav();
    renderTheory();
    renderPractice();
    setMode(mode);
    updateProgress();
  }

  function tableHtml(columns, rows) {
    if (!rows.length) {
      return `<p class="muted">Consulta ejecutada correctamente. No se encontraron filas.</p>`;
    }

    return `
      <div class="result-table-wrap">
        <table>
          <thead>
            <tr>${columns.map((c) => `<th>${escapeHtml(c)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows.map((row) => `
              <tr>${columns.map((c) => `<td>${escapeHtml(row[c] ?? "NULL")}</td>`).join("")}</tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function feedback(ok, title, message, html = "") {
    const box = $("#feedback");
    box.className = `card ${ok ? "feedback-ok" : "feedback-error"}`;
    box.innerHTML = `
      <h3>${ok ? "✓" : "✕"} ${escapeHtml(title)}</h3>
      <p class="muted">${escapeHtml(message)}</p>
      ${html}
    `;

    if (ok) {
      completed.add(current);
      updateProgress();
      renderNav();
    }
  }

  function parseValues(raw) {
    const values = [];
    let currentValue = "";
    let quoted = false;

    for (let i = 0; i < raw.length; i += 1) {
      const ch = raw[i];

      if (ch === "'") {
        quoted = !quoted;
        continue;
      }

      if (ch === "," && !quoted) {
        values.push(currentValue.trim());
        currentValue = "";
      } else {
        currentValue += ch;
      }
    }

    values.push(currentValue.trim());

    return values.map((value) => {
      if (/^NULL$/i.test(value)) return null;
      if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
      return value;
    });
  }

  function executeSelect(sql) {
    const normalized = sql.replace(/\s+/g, " ").trim();

    if (/JOIN\s+programa/i.test(normalized)) {
      const rows = db.tables.estudiante.rows.map((student) => {
        const program = db.tables.programa.rows.find((p) => p.id === student.programa_id);
        return {
          nombre: student.nombre,
          programa: program ? program.nombre : "Sin programa"
        };
      });

      feedback(
        true,
        "JOIN ejecutado",
        "La consulta combinó estudiante con programa mediante la relación programa_id → id.",
        tableHtml(["nombre", "programa"], rows)
      );
      return;
    }

    const match = normalized.match(
      /SELECT\s+(.+?)\s+FROM\s+(\w+)(?:\s+WHERE\s+(\w+)\s*=\s*('?[^']+'?|-?\d+(?:\.\d+)?))?/i
    );

    if (!match) {
      feedback(false, "Consulta no reconocida", "Revisa la estructura SELECT columnas FROM tabla [WHERE condición].");
      return;
    }

    const tableName = match[2].toLowerCase();
    const table = db.tables[tableName];

    if (!table) {
      feedback(false, "Tabla inexistente", "La tabla indicada no existe en el esquema actual.");
      return;
    }

    let rows = [...table.rows];

    if (match[3]) {
      const key = match[3];
      const raw = match[4].replace(/^'|'$/g, "");
      const value = /^-?\d+(\.\d+)?$/.test(raw) ? Number(raw) : raw;
      rows = rows.filter((row) => row[key] === value);
    }

    let columns;
    if (match[1].trim() === "*") {
      columns = table.columns;
    } else {
      columns = match[1]
        .split(",")
        .map((part) => part.trim().split(/\s+AS\s+/i)[0].split(".").pop())
        .filter((column) => table.columns.includes(column));
    }

    feedback(
      true,
      "Consulta ejecutada",
      `SELECT recuperó ${rows.length} fila(s) sin modificar los datos.`,
      tableHtml(columns, rows)
    );
  }

  function executeInsert(sql) {
    const match = sql.replace(/\s+/g, " ").match(
      /INSERT\s+INTO\s+(\w+)\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i
    );

    if (!match) {
      feedback(false, "INSERT no reconocido", "Usa INSERT INTO tabla (columnas) VALUES (valores).");
      return;
    }

    const tableName = match[1].toLowerCase();
    const table = db.tables[tableName];

    if (!table) {
      feedback(false, "Tabla inexistente", `La tabla ${tableName} no existe.`);
      return;
    }

    const columns = match[2].split(",").map((x) => x.trim());
    const values = parseValues(match[3]);

    if (columns.length !== values.length) {
      feedback(false, "Cantidad incompatible", "El número de columnas y valores debe coincidir.");
      return;
    }

    const row = {};
    columns.forEach((column, index) => {
      row[column] = values[index];
    });

    if (
      tableName === "estudiante" &&
      db.foreignKeys &&
      !db.tables.programa.rows.some((p) => p.id === row.programa_id)
    ) {
      feedback(
        false,
        "FOREIGN KEY constraint failed",
        `El programa_id ${row.programa_id} no existe en la tabla padre programa. La integridad referencial impide crear un registro huérfano.`
      );
      return;
    }

    table.rows.push(row);
    renderSchema();

    feedback(
      true,
      "Fila insertada",
      `INSERT agregó correctamente un registro a ${tableName}.`,
      tableHtml(columns, [row])
    );
  }

  function executeUpdate(sql) {
    const match = sql.replace(/\s+/g, " ").match(
      /UPDATE\s+(\w+)\s+SET\s+(\w+)\s*=\s*('?[^']+'?|-?\d+(?:\.\d+)?)\s+WHERE\s+(\w+)\s*=\s*('?[^']+'?|-?\d+(?:\.\d+)?)/i
    );

    if (!match) {
      feedback(false, "UPDATE no reconocido", "Usa UPDATE tabla SET columna = valor WHERE columna = valor.");
      return;
    }

    const table = db.tables[match[1].toLowerCase()];
    if (!table) {
      feedback(false, "Tabla inexistente", "No se encontró la tabla indicada.");
      return;
    }

    const parseScalar = (value) => {
      const clean = value.replace(/^'|'$/g, "");
      return /^-?\d+(\.\d+)?$/.test(clean) ? Number(clean) : clean;
    };

    const newValue = parseScalar(match[3]);
    const whereValue = parseScalar(match[5]);
    let count = 0;

    table.rows.forEach((row) => {
      if (row[match[4]] === whereValue) {
        row[match[2]] = newValue;
        count += 1;
      }
    });

    feedback(
      true,
      "Actualización ejecutada",
      `UPDATE modificó ${count} fila(s). Una condición WHERE precisa reduce el riesgo de modificar registros no deseados.`
    );
  }

  function executeDelete(sql) {
    const match = sql.replace(/\s+/g, " ").match(
      /DELETE\s+FROM\s+(\w+)(?:\s+WHERE\s+(\w+)\s*=\s*('?[^']+'?|-?\d+(?:\.\d+)?))?/i
    );

    if (!match) {
      feedback(false, "DELETE no reconocido", "Usa DELETE FROM tabla WHERE condición.");
      return;
    }

    const tableName = match[1].toLowerCase();
    const table = db.tables[tableName];

    if (!table) {
      feedback(false, "Tabla inexistente", "No se encontró la tabla indicada.");
      return;
    }

    let removed = [];

    if (match[2]) {
      let value = match[3].replace(/^'|'$/g, "");
      value = /^-?\d+(\.\d+)?$/.test(value) ? Number(value) : value;
      removed = table.rows.filter((row) => row[match[2]] === value);
      table.rows = table.rows.filter((row) => row[match[2]] !== value);
    } else {
      removed = [...table.rows];
      table.rows = [];
    }

    if (tableName === "estudiante" && removed.length) {
      const removedIds = new Set(removed.map((row) => row.id));
      db.tables.matricula.rows = db.tables.matricula.rows.filter(
        (row) => !removedIds.has(row.estudiante_id)
      );
    }

    renderSchema();

    feedback(
      true,
      "Eliminación ejecutada",
      `DELETE eliminó ${removed.length} fila(s). En este escenario, las matrículas dependientes usan una acción CASCADE simulada.`
    );
  }

  function executeCreate(sql) {
    const match = sql.match(/CREATE\s+TABLE\s+(\w+)\s*\(([\s\S]+)\)/i);

    if (!match) {
      feedback(false, "CREATE TABLE no reconocido", "Revisa la estructura CREATE TABLE nombre (...).");
      return;
    }

    const tableName = match[1].toLowerCase();

    if (db.tables[tableName]) {
      feedback(false, "Tabla ya existente", "Ya existe una tabla con ese nombre.");
      return;
    }

    const defs = match[2]
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);

    const columns = defs
      .filter((def) => !/^FOREIGN\s+KEY|^PRIMARY\s+KEY|^UNIQUE|^CHECK/i.test(def))
      .map((def) => def.split(/\s+/)[0]);

    db.tables[tableName] = {
      columns,
      rows: []
    };

    renderSchema();
    feedback(true, "Tabla creada", `Se creó ${tableName} con las columnas: ${columns.join(", ")}.`);
  }

  function executeAlter(sql) {
    const addMatch = sql.match(/ALTER\s+TABLE\s+(\w+)\s+ADD\s+COLUMN\s+(\w+)/i);

    if (addMatch) {
      const table = db.tables[addMatch[1].toLowerCase()];
      if (!table) {
        feedback(false, "Tabla inexistente", "No se encontró la tabla indicada.");
        return;
      }

      const column = addMatch[2];
      if (!table.columns.includes(column)) {
        table.columns.push(column);
        table.rows.forEach((row) => {
          row[column] = null;
        });
      }

      renderSchema();
      feedback(true, "Estructura modificada", `ALTER TABLE agregó la columna ${column}.`);
      return;
    }

    feedback(
      false,
      "ALTER TABLE no reconocido",
      "En esta versión educativa se admite ALTER TABLE nombre ADD COLUMN nueva_columna tipo."
    );
  }

  function executeDrop(sql) {
    const match = sql.match(/DROP\s+TABLE\s+(\w+)/i);

    if (!match) {
      feedback(false, "DROP TABLE no reconocido", "Usa DROP TABLE nombre_tabla.");
      return;
    }

    const tableName = match[1].toLowerCase();
    if (!db.tables[tableName]) {
      feedback(false, "Tabla inexistente", "No existe una tabla con ese nombre.");
      return;
    }

    delete db.tables[tableName];
    renderSchema();
    feedback(true, "Tabla eliminada", `DROP TABLE eliminó la tabla ${tableName}.`);
  }

  function executeIndex(sql) {
    const match = sql.match(/CREATE\s+(?:UNIQUE\s+)?INDEX\s+(\w+)\s+ON\s+(\w+)\s*\(([^)]+)\)/i);

    if (!match) {
      feedback(false, "CREATE INDEX no reconocido", "Usa CREATE INDEX nombre ON tabla(columna).");
      return;
    }

    feedback(
      true,
      "Índice simulado",
      `Se creó conceptualmente el índice ${match[1]} sobre ${match[2]}(${match[3]}). En una base real, un índice puede reducir búsquedas lineales en consultas y verificaciones de claves foráneas.`
    );
  }

  function execute() {
    const sql = $("#sqlEditor").value.trim();

    if (!sql) {
      feedback(false, "Editor vacío", "Escribe una instrucción antes de ejecutar.");
      return;
    }

    const statements = sql
      .split(";")
      .map((statement) => statement.trim())
      .filter(Boolean);

    let handled = false;

    for (const statement of statements) {
      if (/^PRAGMA\s+foreign_keys\s*=\s*ON$/i.test(statement)) {
        db.foreignKeys = true;
        renderSchema();
        handled = true;
        continue;
      }

      if (/^PRAGMA\s+foreign_keys\s*=\s*OFF$/i.test(statement)) {
        db.foreignKeys = false;
        renderSchema();
        handled = true;
        continue;
      }

      if (/^PRAGMA\s+foreign_keys$/i.test(statement)) {
        feedback(
          true,
          "Estado de foreign_keys",
          `Valor actual: ${db.foreignKeys ? "1 (ON)" : "0 (OFF)"}`
        );
        handled = true;
        continue;
      }

      if (/^SELECT/i.test(statement)) {
        executeSelect(statement);
        handled = true;
        continue;
      }

      if (/^INSERT/i.test(statement)) {
        executeInsert(statement);
        handled = true;
        continue;
      }

      if (/^UPDATE/i.test(statement)) {
        executeUpdate(statement);
        handled = true;
        continue;
      }

      if (/^DELETE/i.test(statement)) {
        executeDelete(statement);
        handled = true;
        continue;
      }

      if (/^CREATE\s+TABLE/i.test(statement)) {
        executeCreate(statement);
        handled = true;
        continue;
      }

      if (/^ALTER\s+TABLE/i.test(statement)) {
        executeAlter(statement);
        handled = true;
        continue;
      }

      if (/^DROP\s+TABLE/i.test(statement)) {
        executeDrop(statement);
        handled = true;
        continue;
      }

      if (/^CREATE\s+(?:UNIQUE\s+)?INDEX/i.test(statement)) {
        executeIndex(statement);
        handled = true;
        continue;
      }

      if (/^BEGIN$/i.test(statement)) {
        feedback(
          true,
          "Transacción iniciada",
          "BEGIN abre conceptualmente una unidad de trabajo. En restricciones diferidas, ciertas comprobaciones pueden aplazarse hasta COMMIT."
        );
        handled = true;
        continue;
      }

      if (/^COMMIT$/i.test(statement)) {
        feedback(
          true,
          "Transacción confirmada",
          "COMMIT confirma conceptualmente los cambios y es el punto donde una restricción diferida debe quedar satisfecha."
        );
        handled = true;
        continue;
      }

      if (/^ROLLBACK$/i.test(statement)) {
        feedback(
          true,
          "ROLLBACK simulado",
          "ROLLBACK representa la reversión de los cambios de la transacción actual."
        );
        handled = true;
        continue;
      }
    }

    if (!handled) {
      feedback(
        false,
        "Sentencia no disponible",
        "Esta versión se centra en SELECT, INSERT, UPDATE, DELETE, CREATE/ALTER/DROP TABLE, JOIN, CREATE INDEX, PRAGMA foreign_keys y conceptos de transacciones."
      );
    }
  }

  $("#theoryTab").addEventListener("click", () => setMode("theory"));
  $("#practiceTab").addEventListener("click", () => setMode("practice"));
  $("#runBtn").addEventListener("click", execute);

  $("#hintBtn").addEventListener("click", () => {
    const helpPanel = $("#helpPanel");
    const isHidden = helpPanel.classList.contains("hidden");
    helpPanel.classList.toggle("hidden", !isHidden);
    $("#hintBtn").textContent = isHidden ? "Ocultar ayuda" : "Ayuda / ver solución";
  });

  $("#resetBtn").addEventListener("click", () => {
    db = baseData();
    renderPractice();
  });

  renderAll();
})();
