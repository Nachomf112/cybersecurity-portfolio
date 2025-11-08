/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    {
        title: "Cybersecurity Consultant (Intern)",
        startDate: "2025-01-01",
        endDate: "2025-06-30",
        company: "Platformline.es",
        location: "Spain",
        description:
            "Supported the design of an Anti-Money Laundering (AML) MVP, focusing on risky transactions, alerts and KPIs.",
        goals: [
            "Helped define detection rules and AML risk indicators for suspicious behaviour.",
            "Prepared technical reports and dashboards using Python, SQL and Excel.",
            "Collaborated with the team to review use cases and improve the AML workflow."
        ],
        currentJob: false,
    },
    {
        title: "IT / Administrative Support",
        startDate: "2013-01-01",
        endDate: "2024-12-31",
        company: "Konecta BTO – Grupo Santander (Banesto)",
        location: "Spain",
        description:
            "Provided technical and administrative support for banking operations and internal users.",
        goals: [
            "Coordinated a remote support team for incidents and service requests.",
            "Managed data, reports and documentation for different business units.",
            "Improved daily workflows by standardising procedures and information."
        ],
        currentJob: false,
    },
];

export default workExperience;