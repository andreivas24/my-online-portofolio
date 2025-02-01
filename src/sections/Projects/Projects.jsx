import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/andreivas24/Energy-Management"
          h3="Energy System"
          p="Energy Management App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/andreivas24/Food-Delivery-Management-System"
          h3="Food Delivery System"
          p="Food Delivery Management App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/andreivas24/debugging-the-cake-portal"
          h3="Debugging the Cake Portal"
          p="Stack Overflow & WhatsApp Clone"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/andreivas24/ExpenseTracker"
          h3="Expense Tracker System"
          p="Monitoring Incomes and Expenses App"
        />
      </div>
    </section>
  );
}

export default Projects;
