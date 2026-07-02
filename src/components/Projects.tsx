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
    title: "Robot State Estimation (AER1513)",
    description: "Implemented an Extended Kalman Filter (EKF) to continuously estimate and predict the dynamic position of a robot relying on landmark observation data in a simulated environment.",
    tags: ["Kalman Filter", "Python", "Robotics"],
    videos: ["/img/projects/aer1513/aer1513_kalman_filter_synced_cropped.mp4", "/img/projects/aer1513/dataset2_4x.mp4"],
    objectFit: "contain"
  },
  {
    title: "Web3 Pet Adoption DApp (APS1050)",
    description: "A decentralized application built on blockchain technology facilitating transparent and secure online pet adoption processes. Implemented smart contracts and an intuitive frontend.",
    tags: ["Web3", "Blockchain", "DApp"],
    images: ["/img/projects/aps1050_pet_adoption/pet_adoption_ui.png", "/img/projects/aps1050_pet_adoption/pet_adoption_ui_2.png"],
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
          <div className="projects-grid">
            {uoftProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Category 2: SCAU */}
        <div className="project-category fade-in-up" style={{ marginTop: '3rem' }}>
          <div className="category-header">
            <h2 className="section-title" style={{ marginBottom: '1rem', textAlign: 'left' }}>South China Agricultural University</h2>
            <p className="category-subtitle">
              Where I built my passion for <strong>Hardware & Robotics</strong>. Designing physical systems from the ground up to solve mechanical challenges.
            </p>
          </div>
          <div className="projects-grid">
            {scauProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
