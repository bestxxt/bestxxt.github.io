import { useRef } from 'react';
import './Projects.css';

type Project = {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  image?: string;
  video?: string;
  videos?: string[];
  demoLink?: string;
  objectFit?: 'cover' | 'contain';
};

const uoftProjects: Project[] = [
  {
    title: "AI Recipe Generation Agent (MIE1517)",
    description: "End-to-end MLOps pipeline and web application. Fine-tuned a Qwen-VL vision-language model to recognize food ingredients, chaining the output directly into LLM APIs with strict schema validation to generate personalized recipes.",
    tags: ["VLM", "Python", "MLOps"],
    video: "/img/projects/recipe_app/recipe_app_demo.mp4"
  },
  {
    title: "Sleep Monitoring System (ECE1513)",
    description: "Developed a comprehensive sleep monitoring system using both Convolutional Neural Networks (CNN) and Support Vector Machines (SVM) to accurately classify sleep stages from biological signals.",
    tags: ["CNN", "SVM", "Machine Learning"],
    images: ["/img/projects/ece1513/ece1513_sleep_arch.png", "/img/projects/ece1513/ece1513_sleep_svm.png"],
    objectFit: "contain"
  },
  {
    title: "Web3 Pet Adoption DApp (APS1050)",
    description: "A decentralized application built on blockchain technology facilitating transparent and secure online pet adoption processes. Implemented smart contracts and an intuitive frontend.",
    tags: ["Web3", "Blockchain", "DApp"],
    images: ["/img/projects/aps1050_pet_adoption/pet_adoption_ui.png", "/img/projects/aps1050_pet_adoption/pet_adoption_ui_2.png"],
    objectFit: "contain"
  },
  {
    title: "Purchasing Intent Predictor (MIE1628)",
    description: "Built an e-commerce purchasing intent classifier using XGBoost and SVM. Addressed severe class imbalance with SMOTE and applied PCA for robust feature selection on session data.",
    tags: ["XGBoost", "SVM", "E-Commerce"],
    images: ["/img/projects/mie1628/mie1628_3.png", "/img/projects/mie1628/mie1628_4.png"],
    objectFit: "cover"
  },
  {
    title: "Smart Grid Stability (APS1070)",
    description: "Designed a mathematical regression model to predict decentralized power grid stability based on 10,000 simulated instances with 12 node features.",
    tags: ["Linear Regression", "Smart Grid", "Predictive Modeling"],
    images: ["/img/projects/aps1070/aps1070_3.png"],
    objectFit: "cover"
  },
  {
    title: "Algorithmic Trading ML Pipeline (APS1052)",
    description: "Built an automated ML pipeline predicting cryptocurrency (BTCUSDT) price movements. Applied rigorous financial testing including White's Reality Check, Monte Carlo simulations, and Alpha-Lens evaluation to prevent data snooping.",
    tags: ["Algorithmic Trading", "Deep Learning", "Pipeline"],
    images: ["/img/projects/aps1052/aps1052_200.png", "/img/projects/aps1052/aps1052_1.png"],
    objectFit: "cover"
  },
  {
    title: "Reinforcement Learning Control (APS1080)",
    description: "Designed and implemented fundamental Reinforcement Learning algorithms (SARSA, Expected SARSA, Q-Learning) from scratch to solve the CartPole balancing problem and gridworld mazes in OpenAI Gym.",
    tags: ["Reinforcement Learning", "Q-Learning", "OpenAI Gym"],
    images: ["/img/projects/aps1080/cart_pole.gif", "/img/projects/aps1080/lunar_lander.gif"],
    objectFit: "cover"
  },
  {
    title: "Large-Scale Data Mining (MIE524)",
    description: "Processed massive datasets using Apache Spark and MapReduce. Implemented Locality Sensitive Hashing (LSH) and Vector Databases for approximate nearest neighbor search in high-dimensional spaces.",
    tags: ["Apache Spark", "Vector DB", "LSH"],
    images: ["/img/projects/mie524/mie524_2.png", "/img/projects/mie524/mie524_10.png"],
    objectFit: "cover"
  },
  {
    title: "Robot State Estimation (AER1513)",
    description: "Implemented an Extended Kalman Filter (EKF) to continuously estimate and predict the dynamic position of a robot relying on landmark observation data in a simulated environment.",
    tags: ["Kalman Filter", "Python", "Robotics"],
    videos: ["/img/projects/aer1513/aer1513_kalman_filter_synced_cropped.mp4", "/img/projects/aer1513/dataset2_4x.mp4"],
    objectFit: "contain"
  }
];

const scauProjects: Project[] = [
  {
    title: "Remote IoT Controller & Data Portal",
    description: "An elegant technique for controlling tiny droplets. Embedded web server hosting scalable REST APIs for remote commands and telemetry via JSON payloads, complete with an interactive dashboard.",
    tags: ["ESP32", "Rust API", "IoT"],
    video: "/img/projects/microfluidics/microfluidics.mp4"
  },
  {
    title: "5G + VR Robot Solution",
    description: "Robot chassis motion control and VR streaming. Built a video streaming platform based on Raspberry Pi reducing latency to 0.6s, integrating RGB-D cameras and Tensorflow algorithms.",
    tags: ["ROS", "Tensorflow", "WebRTC"],
    image: "/img/projects/5g_vr_robot/5G车1.jpg"
  },
  {
    title: "Plant Protection Flying Machine",
    description: "Built a GPS-free quadcopter from scratch during an intensive 4-day, 3-night hackathon. Designed the flight control architecture and data communication framework using STM32, achieving stable indoor flight via custom PID optimization.",
    tags: ["STM32", "RTOS", "OpenCV", "Hackathon"],
    images: ["/img/projects/drone/植保无人机1.jpg", "/img/projects/drone/hackathon_award.jpg"]
  },
  {
    title: "3D Hand Pose Estimation (SPIE Paper)",
    description: "Co-authored an academic paper published in SPIE (AIBDF 2022). Proposed a 3D hand pose estimation architecture leveraging depth cameras. Designed a novel standardizer that optimized detection efficiency and reduced inference time by 35%.",
    tags: ["Computer Vision", "SPIE Paper", "Depth Camera"],
    images: ["/img/projects/scau_paper/paper_cover.png", "/img/projects/scau_paper/paper_diagram.png"],
    objectFit: "contain"
  }
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
  <div className={`project-card fade-in-up stagger-${(index % 4) + 1}`}>
    <div className={`project-image-wrapper ${project.objectFit === 'contain' ? 'bg-contain-wrapper' : ''}`}>
      {project.videos ? (
        <div className="multi-image-container">
          {project.videos.map((vid, i) => (
            <video key={i} src={vid} autoPlay loop muted playsInline className="project-image split-image" style={{ objectFit: project.objectFit || 'cover' }} />
          ))}
        </div>
      ) : project.video ? (
        <video src={project.video} autoPlay loop muted playsInline className="project-image" style={{ objectFit: project.objectFit || 'cover' }} />
      ) : project.images ? (
        <div className="multi-image-container">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="project-image split-image" style={{ objectFit: project.objectFit || 'cover' }} />
          ))}
        </div>
      ) : (
        <img src={project.image} alt={project.title} className="project-image" style={{ objectFit: project.objectFit || 'cover' }} />
      )}
    </div>
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      {project.demoLink && (
        <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link">
          View Project &rarr;
        </a>
      )}
    </div>
  </div>
);

const ScrollableGrid = ({ projects }: { projects: Project[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 432; // 400px card + 32px gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="projects-grid-wrapper">
      <button className="scroll-btn scroll-btn-left" onClick={() => scroll('left')} aria-label="Scroll left">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div className="projects-grid" ref={scrollRef}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <button className="scroll-btn scroll-btn-right" onClick={() => scroll('right')} aria-label="Scroll right">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section projects-section bg-light-gray">
      <div className="projects-container">
        
        {/* Category 1: UofT */}
        <div className="project-category fade-in-up">
          <div className="category-header">
            <h2 className="section-title" style={{ marginBottom: '1rem', textAlign: 'left' }}>University of Toronto</h2>
            <p className="category-subtitle">
              Here, I deeply pursue the frontiers of <strong>Data Science & Artificial Intelligence</strong>. Translating algorithms into intelligent, real-world systems.
            </p>
          </div>
          <ScrollableGrid projects={uoftProjects} />
        </div>

        {/* Category 2: SCAU */}
        <div className="project-category fade-in-up" style={{ marginTop: '3rem' }}>
          <div className="category-header">
            <h2 className="section-title" style={{ marginBottom: '1rem', textAlign: 'left' }}>South China Agricultural University</h2>
            <p className="category-subtitle">
              Where I built my passion for <strong>Hardware & Robotics</strong>. Designing physical systems from the ground up to solve mechanical challenges.
            </p>
          </div>
          <ScrollableGrid projects={scauProjects} />
        </div>

      </div>
    </section>
  );
};

export default Projects;
