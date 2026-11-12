export interface Achievement {
  id: number;
  title: string;
  year: string;
  position: string;
  category: "National Level" | "Ideathon" | "Robotics & AI" | "FinTech" | "Startup Pitch";
  description: string;
  pageNumber: number;
  highlight?: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Smart India Hackathon (SIH) Grand Finalist",
    year: "2025",
    position: "Grand Finalist",
    category: "National Level",
    description:
      'Recognized as one of the top teams at the national level in the Smart India Hackathon 2025 (SIH). Problem Statement ID: 25214 – "Development of Radar-Based Living Person Detection System for Use Under the Rubble". Exhibited exceptional problem-solving abilities, teamwork, and technical execution skills.',
    pageNumber: 1,
    highlight: true,
  },
  {
    id: 2,
    title: "Urvion Ideathon Winner",
    year: "2026",
    position: "1st Position",
    category: "Ideathon",
    description:
      "Secured 1st position in a competitive Ideathon organized by Silicon University. We developed a sustainable system for monitoring microplastic pollution. Recognized for innovation, feasibility, and impactful presentation.",
    pageNumber: 2,
    highlight: true,
  },
  {
    id: 3,
    title: "Perception Hackyard Winner",
    year: "2026",
    position: "1st Place",
    category: "National Level",
    description:
      'Secured 1st place at the Hackyard event hosted by Odisha University of Technology and Research (OUTR). Problem Statement: "Hyper-Local Urban Flood Detection & Dynamic Commuter Routing". Demonstrated excellence in pitching ideas and executing plans.',
    pageNumber: 3,
    highlight: true,
  },
  {
    id: 4,
    title: "Suravi Hackfest Winner",
    year: "2026",
    position: "Winner",
    category: "FinTech",
    description:
      "Winner of our problem statement at Suravi 2K26 conducted by Gandhi Institute of Engineering and Technology. We designed a website to simplify how people access RBI and banking-related information. Collaborated in a team to develop an innovative and practical solution.",
    pageNumber: 4,
  },
  {
    id: 5,
    title: "E-Summit Think-A-Thon Winner",
    year: "2026",
    position: "1st Position",
    category: "Robotics & AI",
    description:
      'Secured 1st position in Think-A-Thon at E-Summit hosted by OUTR. Delivered a compelling business + technical pitch and won top honors. We pitched and showcased a prototype described as "OMNIARM - A Versatile Multimode Robotic Arm System".',
    pageNumber: 5,
    highlight: true,
  },
  {
    id: 6,
    title: "Ignitia Insight Dive Winner",
    year: "2026",
    position: "1st Position",
    category: "Robotics & AI",
    description:
      "Secured 1st position in the Ignitia event organised by the IEEE Club. Integrated real-time potentiometer inputs with inverse kinematics-based 3D simulation. Developed a digital twin framework to simulate and map cockroach locomotion, eliminating blind experimentation.",
    pageNumber: 6,
  },
  {
    id: 7,
    title: "Techtronics Prototype Exhibition",
    year: "2026",
    position: "1st Runner-Up",
    category: "Robotics & AI",
    description:
      "Awarded 1st Runner-Up at the prototype exhibition organised by the Silicon Innovation and Promotion Club. Built a system that captured live cockroach motion and translated it to control a 6-DOF robotic arm and a 4-limb robot (2-DOF each). Another prototype integrated sensors like ECG (attached to a plant), temperature sensor, etc., to control a 4-DOF robotic arm.",
    pageNumber: 7,
  },
  {
    id: 8,
    title: "SparkUp Startup Pitch",
    year: "2026",
    position: "1st Runner-Up",
    category: "Startup Pitch",
    description:
      "Awarded 1st Runner-Up at the prototype exhibition organised by the ED Cell. We upgraded the satellite model by adding a box containing a sensor array. Our idea and prototype were appreciated by guest investors.",
    pageNumber: 8,
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  stats: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "radar-sih",
    title: "Radar Living Person Detection Under Rubble",
    subtitle: "Smart India Hackathon 2025 National Finalist (PS ID: 25214)",
    tags: ["Radar RF", "DSP", "Disaster Tech", "Embedded IoT"],
    description:
      "Ultra-wideband radar system designed to penetrate concrete rubble to isolate micro-Doppler signatures caused by human respiration and cardiac activity during search and rescue operations.",
    stats: "Sub-surface penetration up to 3.5m",
  },
  {
    id: "omniarm",
    title: "OMNIARM - Multimode Robotic Arm",
    subtitle: "E-Summit Think-A-Thon 1st Prize Winner",
    tags: ["Inverse Kinematics", "6-DOF", "Embedded C++", "Hardware"],
    description:
      "A versatile robotic arm system engineered for modular industrial automation, precision pick-and-place, and real-time teleoperation with adaptive grip torque feedback.",
    stats: "6 Degrees of Freedom, High Precision",
  },
  {
    id: "cockroach-digital-twin",
    title: "Insect Bio-Kinematics & Digital Twin",
    subtitle: "Ignitia Winner & Techtronics 1st Runner-Up",
    tags: ["Digital Twin", "Inverse Kinematics", "Bio-mimicry", "Robotics"],
    description:
      "Hardware-software suite capturing insect locomotion through precision sensor arrays, mapping gait metrics into a realtime physics digital twin to orchestrate quadruped robot mechanics.",
    stats: "Zero-latency simulation mapping",
  },
  {
    id: "microplastic-monitor",
    title: "Autonomous Microplastic Pollution Monitor",
    subtitle: "Urvion Ideathon 1st Position Winner",
    tags: ["Spectroscopy", "Sustainability", "IoT", "CleanTech"],
    description:
      "Sustainable waterborne autonomous sensor node detecting microplastic concentration gradients in freshwater reservoirs using optical scattering and machine-assisted categorization.",
    stats: "Realtime water quality indexing",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  specialty: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Team NAVAMESH Core",
    role: "Engineering & Innovation Syndicate",
    bio: "A cohort of multidisciplinary engineers, embedded systems architects, and software craftsmen pushing frontiers at national hackathons and prototype exhibitions.",
    specialty: "Full-Stack Hardware + Software, AI, Robotics",
  },
];
