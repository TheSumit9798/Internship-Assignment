// Sidebar toggle functionality
const arrow = document.getElementById("arrow");
const arrowBack = document.getElementById("arrowback");
const side = document.getElementById("side");

// Show sidebar when arrow is clicked
arrow.addEventListener("click", () => {
  side.style.left = "0px";
});

// Hide sidebar when arrowBack is clicked
arrowBack.addEventListener("click", () => {
  side.style.left = "-600px";
});

// Sample JSON data
const projectData = {
  title: "Technical Project Management",
  commitment: "4 hours",
  description: "Have you ever thought, Pareto's Law can be applied to cooking? ...",
  learning_outcomes: [
    "Bare minimum knowledge of project management",
    "4SA Concept",
    "Would be able to handle any project efficiently"
  ],
  tasks: [
    {
      taskTitle: "Explore the world of management",
      taskDescription: "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling, and completion. How? Do you want to manage each and every step of your life?",
      assets: [
        {
          title: "Technical Project Management",
          description: "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
          link: "https://www.youtube.com/embed/TiMRwri1xJ8"
        },
        {
          title: "Threadbuild",
          description: "Watch the video and threadbuild, and jot out key threads while watching that video."
        },
        {
          title: "Structure your pointers",
          description: "Write a 300-400 word article from your thread. Publish your understanding and showcase your learning."
        },
        {
          title: "4SA Method",
          description: "To explore more, read more",
          link: "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878"
        }
      ]
    }
  ]
};

// Populate HTML with JSON data once the DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  
  // Populate main title
  document.querySelector("h1").textContent = projectData.title;
  
  // Populate task title and description in intro section
  const taskTitleElement = document.querySelector(".intro2 p");
  const taskDescriptionElement = document.querySelector(".intro2 p.subtitle");
  taskTitleElement.textContent = projectData.tasks[0].taskTitle;
  taskDescriptionElement.textContent = projectData.tasks[0].taskDescription;

  // Populate Technical Project Management section
  const projectTitleElement = document.querySelector(".project-management h2");
  const projectDescriptionElement = document.querySelector(".project-management p");
  const projectIframe = document.querySelector(".video-placeholder iframe");

  projectTitleElement.textContent = projectData.tasks[0].assets[0].title;
  projectDescriptionElement.innerHTML = `<strong>Description:</strong> ${projectData.tasks[0].assets[0].description}`;
  projectIframe.src = projectData.tasks[0].assets[0].link;

  // Populate Threadbuild section
  const threadbuildTitleElement = document.querySelector(".threadbuild h2");
  const threadbuildDescriptionElement = document.querySelector(".threadbuild p");
  threadbuildTitleElement.textContent = projectData.tasks[0].assets[1].title;
  threadbuildDescriptionElement.innerHTML = `<strong>Description:</strong> ${projectData.tasks[0].assets[1].description}`;

  // Populate Structure Your Pointers card
  const structureCardHeader = document.querySelector(".card:nth-of-type(1) .card-header");
  const structureDescription = document.querySelector(".card:nth-of-type(1) .description");
  structureCardHeader.textContent = projectData.tasks[0].assets[2].title;
  structureDescription.innerHTML = `<strong>Description:</strong> ${projectData.tasks[0].assets[2].description}`;

  // Populate 4SA Method card with link
  const fourSACardHeader = document.querySelector(".card:nth-of-type(2) .card-header");
  const fourSADescription = document.querySelector(".card:nth-of-type(2) .description");
  const fourSALink = document.createElement("a");

  fourSACardHeader.textContent = projectData.tasks[0].assets[3].title;
  fourSADescription.innerHTML = `<strong>Description:</strong> ${projectData.tasks[0].assets[3].description}`;
  
  // Append link to 4SA Method card
  fourSALink.href = projectData.tasks[0].assets[3].link;
  fourSALink.textContent = "Read more here";
  fourSALink.target = "_blank"; // Opens link in a new tab
  fourSADescription.appendChild(fourSALink);
});
