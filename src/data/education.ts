interface Education {
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
  }
  
  const education: Education[] = [
    {
      school: "Professional Certificate in Cybersecurity (IFCT0109)",
      location: "Centro de Formación en Ciberseguridad · Spain",
      description:
        "420h + 80h internship. Network & system security, Linux hardening, incident response, forensics and SOC fundamentals.",
      currentUni: false,
    },
    {
      school: "Specialisation in AI & Automation for Security",
      location: "Menarguez-IA Solutions / Self-study · Spain",
      description:
        "Automation of reports and AML workflows using Make, Python and cloud tools. Focus on dashboards, KPIs and risk analysis.",
      currentUni: true,
    },
  ];
  
  export default education;
  