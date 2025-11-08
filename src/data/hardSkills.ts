interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Bash & Shell scripting",
    description:
      "Automatización de tareas en Linux/Kali: lanzadores, verificadores de rutas y orquestación de herramientas.",
    icon: "tools-fill",
  },
  {
    name: "Kali Linux & Blue Team",
    description:
      "Uso diario de Kali Linux para laboratorios, análisis de logs y simulaciones de incidentes de seguridad.",
    icon: "logo",
  },
  {
    name: "Python para Ciberseguridad",
    description:
      "Scripts para automatizar informes, análisis de datos y pequeños backends (FastAPI, Streamlit, etc.).",
    icon: "react",
  },
  {
    name: "SQL & Bases de datos",
    description:
      "Consultas e informes sobre datos de transacciones y eventos de seguridad para proyectos de AML.",
    icon: "mongodb",
  },
];

export default hardSkills;
