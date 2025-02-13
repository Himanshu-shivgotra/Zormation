import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Analyze Project Requirements and Gather Data",
    desc1: `We collaborate closely with stakeholders to define and document both functional and non-functional requirements. This ensures a clear understanding of business goals, user needs, and project scope.`,
    desc2: `Based on the gathered requirements, we design the system architecture and create a detailed blueprint. This includes defining component interactions, workflows, and user interface designs to ensure a solid foundation for development.`,
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Develop, Implement, and Test the Solution",
    desc1: `Our developers write clean, efficient code while adhering to best practices. We integrate third-party tools and libraries as needed, ensuring seamless functionality and scalability.`,
    desc2: `The software undergoes rigorous testing, including unit, integration, and user acceptance testing. This ensures the solution is defect-free, meets all requirements, and delivers a flawless user experience.`,
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Deploy, Maintain, and Optimize",
    desc1: `We deploy the software to production environments, making it available for end-users. Our team ensures a smooth transition with minimal downtime and maximum performance.`,
    desc2: `Post-deployment, we provide ongoing maintenance, updates, and optimizations. We monitor performance, address user feedback, and implement enhancements to keep the software aligned with evolving needs.`,
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;