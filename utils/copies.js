export const home = {
  header: {
    preTitle: {
      open: `¡Edición 2022 en marcha 🚀!`,
      closed: "Preparando próxima edición... 👨‍🍳👩‍🍳",
    },
    title: (
      <h1>
        Aprende a{" "}
        <span className="no-wrap">
          <span className="color-emphasys"> {`{`} </span> programar{" "}
          <span className="color-emphasys"> {"}"} </span>
        </span>{" "}
        desde cero
      </h1>
    ),
    description: {
      open: `Descubre las bases de la programación con el curso de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
      closed: `Descubre las bases de la programación con el curso de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
    },
    cta: { open: `¡Quiero apuntarme!`, close: `¡Quiero informarme!` },
  },
  aboutUsSection: {
    title: "We are TeachTech!",
    description: (
      <p>
        Somos un grupo de{" "}
        <span className="bold">apasionados de la programación</span> que nos
        hemos unido para ayudar a gente como tú a{" "}
        <span className="bold">perderle el miedo a programar</span>. Queremos
        transmitirte la misma pasión que sentimos nosotros por nuestro trabajo y
        que veas que es posible conseguir eso que te ronda hace tiempo.
      </p>
    ),
    cta: "Conoce a los profes y mentores",
    link: "O descubre cómo surgió Teach[t3ch]",
  },
  courseSection:{
    title: 'Mismo curso, dos modalidades',
    description: "En cada edición buscamos tener un enfoque práctico que te ayude a aprender con las manos en la masa. Podrás completar el curso en dos modalidades, Full Power o A tu aire."
  }
}

export const testimonials = {
  title: "Lo que dicen de nosotros",
  description:
    "TeachT3ch es un curso de verano, pero también una experiencia de voluntariado para profes y mentores. Esto es lo que dicen de su experiencia",
  content: {
    students: [
      {
        testimonial:
          "Me ha ayudado a sentirme capaz de seguir ese camino. Al terminar me sentía hiper-motivada para seguir programando y estudiando.",
        author: "Bea",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2020",
      },
      {
        testimonial:
          "TeachTech es el paso más importante para mi cambio de carrera. El temario del curso esta muy bien pensado y la estructuracion ha sido muy bien ideada, yendo más allá de otros cursos. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },
      {
        testimonial:
          "TeachTech me hizo sentir que siempre era un buen momento para aprender programación y que siempre estaban ahí cerca como familia, de esas que te impulsan a ser mejor profesional y personalmente. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },
      {
        testimonial:
          "El equipo de  organizadores, profesores y mentores es el equilibrio perfecto entre conocimientos, experiencia en el campo y calidad humana. Siempre llevaré conmigo lo que me enseñaron. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },

      {
        testimonial:
          "Ha supuesto la oportunidad de conocer a personas que disfrutan con la programación, y que quieren que tod@s disfrutemos también. Es un gran proyecto del que formar parte.",
        author: "Mónica",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://lu6sx.csb.app/",
      },
      {
        testimonial:
          "Si empiezas de 0 es muy interesante, puedes aprender más o menos depende del tiempo que le dedique uno mismo, pero aprendes a nivel personal a no rendirte. A mí me sirvió mucho, y sobre todo... a conocer gente altruista que brilla por su ausencia en esta sociedad ¡Me alegro mucho de poder haber recibido la oportunidad de haberos conocido a todos!",
        author: "Diego",
        image: "default",
        role: "student",
        tag: "Alumno - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-5cgrw",
      },
      {
        testimonial:
          "Para mí ha supuesto abrirme un mundo completamente nuevo y distinto que me parece fascinante. En un verano he conocido a profesionales geniales que han convertido en fácil lo difícil. ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          "Mi cabeza ha hecho clic y ahora quiero seguir formándome. Antes de empezar dudaba que con 37 años fuese capaz de seguir el ritmo de aprendizaje, ahora mismo estoy súper orgullosa de lo que he conseguido y me veo capaz de cualquier cosa.  ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          " Voy a seguir trabajando duro y ojalá en unos años pueda volver, esta vez ayudando yo, como lo hicieron conmigo. El verano del 2021 lo recordaré siempre, como en el que TeachTech me dio fuerzas para ir a por todo. ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          " He aprendido mucho, l@s profesor@s y mi mentora siempre me han atendido y ayudado, ha sido una experiencia muy buena.",
        author: "Elsa",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "He aprendido mucho, l@s profesor@s y mi mentora siempre me han atendido y ayudado, ha sido una experiencia muy buena.",
        author: "Elsa",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "Lo recomendaría con los ojos cerrados. Para mí fue un sueño hecho realidad. La organización del curso, las clases, el material de apoyo, los profesores y mentores son maravillosos.",
        author: "Loana",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-m5b9j",
      },
      {
        testimonial:
          "Sin dudas los mentores son de gran ayuda y están para responder todas nuestras dudas. Una atención personalizada que ni siquiera he visto en cursos pagos. Gracias chicos, realmente me encantó esta experiencia.",
        author: "Loana",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-m5b9j",
      },
      {
        testimonial:
          "Es un gran curso, los profesores y los mentores son lo MÁS. He aprendido muchísimo más de lo que me imaginaba, y es que, con gente como ellos con tantas ganas de transmitir lo que hacen con esa ilusión es todo mucho más fácil. Sólo tengo palabras de agradecimiento para este proyecto, este gran equipo y sobretodo para mi mentor. ",
        author: "Maru",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "Sólo tengo palabras de agradecimiento para este proyecto, este gran equipo y sobretodo para mi mentor. ",
        author: "Maru",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
    ],
    collaborators: [
      {
        testimonial:
          "Nunca ha sido tan fácil ayudar a personas que están empezando en este maravilloso mundo de escribir código",
        author: "David",
        image: "david-torres.jpg",
        role: "teacher",
        tag: "Mentor y Profe",
        edition: "2021",
      },
      {
        testimonial:
          "Enseñamos y dedicamos tiempo, pero lo que recibimos a cambio es incluso más aprendizaje y satifacción de ayudar y ver crecer a otras personas.",
        author: "Nadine Thêry",
        image: "nadine-thery.jpg",
        role: "teacher",
        tag: "Mentora y Profe",
        edition: "2021",
      },
      {
        testimonial:
          "Acompañar a una persona en sus primeros pasos en el mundo de la programación es muy reconfortante y una hermosa manera de hacer crecer la comunidad hispana de programadores.",
        author: "Diego Domínguez",
        image: "diego-dom.jpg",
        role: "teacher",
        tag: "Mentor y Profe",
        edition: "2021",
      },
    ],
  },
}

export const courseInfo = {
  modA: {
    icon: '🔥',
    title: "Full Power",
    imgFileName: 'full-power.png',
    description: (
      <p>
        Ideal si puedes dedicarle al menos{" "}
        <span className="bold"> 10 horas</span> a la semana
      </p>
    ),
    summary: [
      { icon: "smile", text: "Una mentora o mentor asignado" },
      { icon: "chat", text: "Grupo privado con otros alumnos" },
      { icon: "code", text: "Clases en directo" },
      { icon: "people", text: "Mentorización del proyecto" },
      { icon: "medal", text: "Diploma tras presentar el proyecto" },
    ],
    requirements: [
      { icon: "check", text: "Implicación con las clases y ejercicios" },
      {
        icon: "check",
        text: "Edad mínima 15 años (menores require autorización)",
      },
      { icon: "check", text: "Ningún conocimiento de programación previo" },
    ],
    cta: {
      open: { icon: "check", text: "Quiero apuntarme", url: "#" },
      closed: {
        icon: "info",
        text: (
          <p>
            <span className="bold"> Inscripciones cerradas.</span> Pero puedes
            apuntante a la <a href="#newsletter">newsletter</a> para estar al
            tanto de las nuevas ediciones y eventos
          </p>
        ),
      },
    },
  },
  modB: {
    title: "A tu aire",
    icon: '🌊',
    description: "Por tu cuenta y a tu ritmo",
    imgFileName: 'a-tu-aire.png',
    summary: [
      { icon: "cup", text: "Gestionas tu ritmo" },
      { icon: "book", text: "Dispones de las clases, ejercicios y soluciones" },
      { icon: "cross", text: "No entregas ejercicios" },
      { icon: "cross", text: "No entregas proyecto" },
      { icon: "cross", text: "No dispones de mentor" },
    ],
    requirements: [
      { icon: "check", text: "Solo requieres de constancia" },
      { icon: "check", text: "Ningún conocimiento de programación previo" },
    ],
    cta: {
      open: { icon: "check", text: "Quiero apuntarme", url: "#" },
      closed: {
        icon: "info",
        text: (
          <p>
            <span className="bold"> Inscripciones cerradas.</span> Pero puedes
            apuntante a la <a href="#newsletter">newsletter</a> para estar al
            tanto de las nuevas ediciones y eventos
          </p>
        ),
      },
    },
  },
}
