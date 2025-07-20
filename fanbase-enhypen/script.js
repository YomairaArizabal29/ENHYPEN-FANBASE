function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
      seccion.classList.remove('activa');
    });
    document.getElementById(id).classList.add('activa');
  }
  
  // Mostrar por defecto "integrantes"
  mostrarSeccion('integrantes');
  function mostrarBiografia(miembro) {
    const biografias = {
      heeseung: `
        <div class="biografia-card">
        <img src="imagenes/heeseung-enhypen.jpg" alt="Heeseung" />
          <h3>Heeseung</h3>
          <p><strong>Nombre completo:</strong> Lee Hee Seung (이희승)</p>
          <p><strong>Fecha de nacimiento:</strong> 15 de octubre de 2001</p>
          <p><strong>Lugar de nacimiento:</strong> Namyangju, Gyeonggi-do, Corea del Sur</p>
          <p><strong>Edad:</strong> 23 años (en 2025)</p>
          <p><strong>Rol en el grupo:</strong> Vocalista principal, bailarín, centro y compositor</p>
          <p><strong>Datos curiosos:</strong> Le encantan los gatos, los videojuegos y es considerado el "ace" del grupo.</p>
          <p>🎤 Datos Profesionales
            Grupo: ENHYPEN
            Agencia: BELIFT LAB
            Rol en el grupo: Vocalista, visual y centro en algunos conceptos
            Debut: 30 de noviembre de 2020 con el álbum BORDER: DAY ONE
            </p>
            <p>🌱 Antes del debut
            Fue aprendiz durante 10 meses, uno de los más cortos del grupo.
            Participó en el reality I-LAND, donde destacó por su voz, expresividad y encanto natural.
            Fue elegido por los productores como miembro final del grupo (no por votación global, sino decisión directa).
            </p>
            <p>🧠 Educación y habilidades
            Asistió a Chilbo Middle School y Hanlim Multi Art School (Departamento de Música Aplicada).
            Tiene una voz suave pero poderosa, ideal para tonos emocionales.
            Sabe tocar el piano.
            Tiene talento para la fotografía y edición de video.
            Su especialidad es la expresión facial y carisma en cámara.
            </p>
            <p>❤️ Datos curiosos
            Tuvo problemas de salud en el pasado, pero se recuperó y se volvió más fuerte emocionalmente.
            Es muy querido por su personalidad dulce, educada y brillante.
            Apodos: "Sunshine", "Nunu", "Ddeonu"
            Le encanta el color menta, las cosas adorables y los perfumes.
            Su fruta favorita es el melón.
            Los fans lo aman por su mezcla de ternura, elegancia y confianza escénica.</p>

        </div>
      `,
      jay: `
        <div class="biografia-card">
        <img src="imagenes/jay-enhypen.jpg" alt="jay-enhypen.jpg" />
            <h3>Jay</h3>
            <p><strong>Nombre completo:</strong> Jay Park (박종성 / Park Jongseong)</p>
            <p><strong>Fecha de nacimiento:</strong> 20 de abril de 2002</p>
            <p><strong>Lugar de nacimiento:</strong> Seattle, Washington, Estados Unidos 🇺🇸</p>
            <p><strong>Edad:</strong> 23 años (en 2025)</p>
            <p><strong>Rol en el grupo:</strong> Rapero principal, bailarín, vocalista y visual</p>
            <p><strong>Datos curiosos:</strong> Es intenso, divertido y le dicen "Angry Bird" por sus expresiones explosivas (aunque adorables).</p>

            <p>🎤 <strong>Datos Profesionales</strong><br>
                Grupo: ENHYPEN<br>
                Agencia: BELIFT LAB<br>
                Debut: 30 de noviembre de 2020 con BORDER: DAY ONE
            </p>

            <p>🌱 <strong>Antes del debut</strong><br>
                Fue aprendiz en BigHit por 2 años y 11 meses.<br>
                Participó en el programa I-LAND, destacando por su liderazgo y energía.<br>
                Ocupó el 2.º lugar en la votación global del programa.
            </p>

            <p>🧠 <strong>Educación y habilidades</strong><br>
                Estudió en Hanlim Multi Art School (Danza práctica).<br>
                Habla coreano e inglés fluidamente.<br>
                Tiene habilidades en esgrima, cocina, historia coreana y composición.<br>
                Muy observador y con excelente memoria.
            </p>

            <p>❤️ <strong>Datos curiosos</strong><br>
                Nació en EE.UU. pero creció en Corea del Sur.<br>
                Es hijo único.<br>
                Le interesa la moda y la historia coreana.<br>
                Fue uno de los primeros miembros anunciados de ENHYPEN.
            </p>
            </div>

      `,

      sunoo: `
        <div class="biografia-card">
        <img src="imagenes/sunno.jpg" alt="sunno.jpg" />
            <h3>Sunoo</h3>
            <p><strong>Nombre completo:</strong> Kim Sunoo (김선우)</p>
            <p><strong>Fecha de nacimiento:</strong> 24 de junio de 2003</p>
            <p><strong>Lugar de nacimiento:</strong> Suwon, Gyeonggi-do, Corea del Sur</p>
            <p><strong>Edad:</strong> 22 años (en 2025)</p>
            <p><strong>Rol en el grupo:</strong> Vocalista, visual y centro en algunos conceptos</p>
            <p><strong>Datos curiosos:</strong> Le encanta el color menta, las cosas adorables y tiene apodos como “Sunshine” y “Nunu”.</p>

            <p>🎤 <strong>Datos Profesionales</strong><br>
            Grupo: ENHYPEN<br>
            Agencia: BELIFT LAB<br>
            Debut: 30 de noviembre de 2020 con el álbum BORDER: DAY ONE
            </p>

            <p>🌱 <strong>Antes del debut</strong><br>
            Fue aprendiz durante solo 10 meses.<br>
            Participó en I-LAND y destacó por su expresividad, encanto y voz dulce.<br>
            Fue seleccionado directamente por los productores como miembro final.
            </p>

            <p>🧠 <strong>Educación y habilidades</strong><br>
            Asistió a Chilbo Middle School y Hanlim Multi Art School (Música Aplicada).<br>
            Tiene una voz suave pero poderosa, ideal para tonos emocionales.<br>
            Sabe tocar el piano, y le gusta la fotografía y edición de video.<br>
            Su especialidad es la expresión facial y el carisma ante cámara.
            </p>

            <p>❤️ <strong>Datos curiosos</strong><br>
            Tuvo problemas de salud en el pasado, pero se fortaleció emocionalmente.<br>
            Es querido por su dulzura, educación y energía brillante.<br>
            Le encantan los perfumes y su fruta favorita es el melón.<br>
            Los fans lo adoran por su mezcla de ternura, elegancia y seguridad escénica.
            </p>
        </div>
        `,

        jake: `
        <div class="biografia-card">
        <img src="imagenes/jake-enhypen.jpg" alt="jake-enhypen.jpg" />
            <h3>Jake</h3>
            <p><strong>Nombre completo:</strong> Jake Sim (심재윤 / Sim Jaeyun)</p>
            <p><strong>Fecha de nacimiento:</strong> 15 de noviembre de 2002</p>
            <p><strong>Lugar de nacimiento:</strong> Brisbane, Australia 🇦🇺</p>
            <p><strong>Edad:</strong> 22 años (en 2025)</p>
            <p><strong>Rol en el grupo:</strong> Rapero, vocalista y bailarín</p>
            <p><strong>Datos curiosos:</strong> Tiene un perrito llamado Layla y es conocido por ser dulce, bromista y un poco torpe (¡lo hace aún más adorable!).</p>

            <p>🎤 <strong>Datos Profesionales</strong><br>
            Grupo: ENHYPEN<br>
            Agencia: BELIFT LAB<br>
            Debut: 30 de noviembre de 2020 con el álbum BORDER: DAY ONE
            </p>

            <p>🌱 <strong>Antes del debut</strong><br>
            Fue aprendiz durante solo 9 meses.<br>
            Participó en el programa I-LAND, donde destacó por su energía y crecimiento continuo.<br>
            Terminó en 3er lugar en la votación global final.
            </p>

            <p>🧠 <strong>Educación y habilidades</strong><br>
            Estudió en St. Peters Lutheran College (Australia).<br>
            Se mudó a Corea para perseguir su sueño de ser idol.<br>
            Habla inglés y coreano fluidamente.<br>
            Sabe tocar el violín.<br>
            Es muy disciplinado y trabajador.
            </p>

            <p>❤️ <strong>Datos curiosos</strong><br>
            Es hijo único.<br>
            Le gusta escuchar música, jugar fútbol y ver películas.<br>
            Tiene el apodo de “Jayla couple” por sus interacciones con Jay o por Jake + Layla.<br>
            Los fans aman su mezcla de ternura, constancia y encanto natural.
            </p>
        </div>
        `,

        jungwon: `
        <div class="biografia-card">
        <img src="imagenes/jugwon-enhypen.jpg" alt="jugwon-enhypen.jpg" />
            <h3>Jungwon</h3>
            <p><strong>Nombre completo:</strong> Yang Jungwon (양정원)</p>
            <p><strong>Fecha de nacimiento:</strong> 9 de febrero de 2004</p>
            <p><strong>Lugar de nacimiento:</strong> Corea del Sur</p>
            <p><strong>Edad:</strong> 21 años (en 2025)</p>
            <p><strong>Rol en el grupo:</strong> Líder, vocalista y bailarín principal</p>
            <p><strong>Datos curiosos:</strong> Su apodo es "Garden" porque “Jungwon” significa jardín. Es muy responsable y cuida a todos los miembros.</p>

            <p>🎤 <strong>Datos Profesionales</strong><br>
            Grupo: ENHYPEN<br>
            Agencia: BELIFT LAB<br>
            Debut: 30 de noviembre de 2020 con el álbum BORDER: DAY ONE
            </p>

            <p>🌱 <strong>Antes del debut</strong><br>
            Fue aprendiz en BigHit durante 1 año y 4 meses.<br>
            También entrenó danza tradicional coreana y estuvo en SM Entertainment por un tiempo.<br>
            Ganó el 1.º lugar en la votación global de I-LAND.
            </p>

            <p>🧠 <strong>Educación y habilidades</strong><br>
            Estudió en Namgang High School.<br>
            Tiene gran control corporal y técnica de baile.<br>
            Sabe tocar el piano.<br>
            Posee una fuerte capacidad de liderazgo y serenidad al comunicarse.
            </p>

            <p>❤️ <strong>Datos curiosos</strong><br>
            Es el líder más joven del grupo.<br>
            Es reservado, pero muy afectuoso con sus compañeros.<br>
            Le encanta dormir y los postres.<br>
            Es considerado un líder natural por su madurez y compromiso.
            </p>
        </div>
        `,

        sunghoon: `
        <div class="biografia-card">
        <img src="imagenes/sunghoon-enhypen.jpg" alt="sunghoon-enhypen.jpg" />
            <h3>Sunghoon</h3>
            <p><strong>Nombre completo:</strong> Park Sunghoon (박성훈)</p>
            <p><strong>Fecha de nacimiento:</strong> 8 de diciembre de 2002</p>
            <p><strong>Lugar de nacimiento:</strong> Suwon, Gyeonggi-do, Corea del Sur</p>
            <p><strong>Edad:</strong> 22 años (en 2025)</p>
            <p><strong>Rol en el grupo:</strong> Visual, vocalista y bailarín</p>
            <p><strong>Datos curiosos:</strong> Fue patinador artístico profesional y es apodado “Ice Prince” por su elegancia.</p>

            <p>🎤 <strong>Datos Profesionales</strong><br>
            Grupo: ENHYPEN<br>
            Agencia: BELIFT LAB<br>
            Debut: 30 de noviembre de 2020 con el álbum BORDER: DAY ONE
            </p>

            <p>🌱 <strong>Antes del debut</strong><br>
            Fue patinador artístico a nivel nacional e internacional.<br>
            Ganó varias medallas antes de dejar el deporte para ser idol.<br>
            Entrenó como idol durante 2 años y 1 mes.<br>
            Ocupó el 6.º lugar en la votación global de I-LAND.
            </p>

            <p>🧠 <strong>Educación y habilidades</strong><br>
            Estudió en Pangok High School y Hanlim Multi Art School (Danza práctica).<br>
            Tiene gran sentido del ritmo y postura escénica.<br>
            Es perfeccionista y disciplinado.<br>
            Habla coreano y entiende algo de inglés.
            </p>

            <p>❤️ <strong>Datos curiosos</strong><br>
            Tiene una hermana menor.<br>
            Le gusta ver películas y cuidar su piel.<br>
            Es cercano a Jake y Jungwon.<br>
            Fue MC de Music Bank junto a Wonyoung (IVE).<br>
            Tiene una personalidad reservada, pero muestra su lado divertido con los miembros.
            </p>
        </div>
        `,

        niki: `
        <div class="biografia-card">
        <img src="imagenes/ni-ki-enhypen.jpg" alt="ni-ki-enhypen.jpg" />
            <h3>Ni-ki</h3>
            <p><strong>Nombre completo:</strong> Nishimura Riki (西村 力)</p>
            <p><strong>Fecha de nacimiento:</strong> 9 de diciembre de 2005</p>
            <p><strong>Lugar de nacimiento:</strong> Okayama, Japón 🇯🇵</p>
            <p><strong>Edad:</strong> 19 años (en 2025)</p>
            <p><strong>Rol en el grupo:</strong> Bailarín principal, maknae, vocalista, rapero</p>
            <p><strong>Datos curiosos:</strong> Es el “Golden Maknae” por su talento. Fue bailarín de SHINee a los 11 años.</p>

            <p>🎤 <strong>Datos Profesionales</strong><br>
            Grupo: ENHYPEN<br>
            Agencia: BELIFT LAB<br>
            Debut: 30 de noviembre de 2020 con el álbum BORDER: DAY ONE
            </p>

            <p>🌱 <strong>Antes del debut</strong><br>
            Comenzó a bailar desde muy pequeño.<br>
            Fue backup dancer de SHINee a los 11 años.<br>
            Participó en I-LAND, donde impresionó por su potencia escénica y habilidades de baile.<br>
            Ocupó el 7.º lugar en la votación global, siendo el último en ser elegido.
            </p>

            <p>🧠 <strong>Educación y habilidades</strong><br>
            Habla japonés y está aprendiendo coreano e inglés.<br>
            Es experto en baile urbano y popping.<br>
            Aprende coreografías con mucha rapidez.<br>
            Toca el piano y le gusta editar videos.
            </p>

            <p>❤️ <strong>Datos curiosos</strong><br>
            Es el miembro más joven del grupo.<br>
            Sus apodos incluyen “Super Dancer”, “Golden Maknae” y “Little Michael Jackson”.<br>
            Es muy competitivo y perfeccionista.<br>
            Le encantan los deportes, especialmente el fútbol.<br>
            También disfruta ver anime y jugar videojuegos.<br>
            Tiene una hermana mayor y recibe mucho apoyo de sus padres.
            </p>
            </div>
            `,


      // Repite para los demás miembros
    };
  // Inserta contenido y muestra el modal
  document.getElementById("contenido-biografia").innerHTML = biografias[miembro];
  document.getElementById("modal").style.display = "block";
}

// Cierra el modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    cerrarModal();
  }
}