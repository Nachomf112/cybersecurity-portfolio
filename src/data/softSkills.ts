interface SoftSkill {
    name: string;
    description: string;
    icon: string;
  }
  
  const softSkills: SoftSkill[] = [
    {
      name: "Problem Solving",
      description:
        "Me gusta descomponer problemas complejos en pasos pequeños y repetibles, sobre todo en automatización y Blue Team.",
      icon: "arrow-right-up-line",
    },
    {
      name: "Teamwork",
      description:
        "Acostumbrado a colaborar con compañeros de SOC, desarrollo y negocio para alinear prioridades y tiempos.",
      icon: "group-fill",
    },
    {
      name: "Communication",
      description:
        "Capaz de explicar incidencias técnicas y flujos de automatización en lenguaje claro para perfiles no técnicos.",
      icon: "message-2-fill",
    },
    {
      name: "Time Management",
      description:
        "Organizo mi trabajo por tareas y prioridades, combinando formación, laboratorio y proyectos personales.",
      icon: "time-fill",
    },
    {
        name: "Continuous Learning",
        description:
          "Siempre estoy haciendo cursos, laboratorios y proyectos personales para mejorar en Blue Team, IA y automatización.",
        icon: "tools-fill",
      },      
  ];
  
  export default softSkills;
  