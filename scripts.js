const output = document.getElementById("output");

// Initial text to simulate typing
const initialText = `Hi, I’m Amir, welcome to my portfolio!

I'm a passionate backend developer with 5 years of experience in building scalable, efficient systems. My expertise includes working with Golang, Docker, Microservices, and a wide range of backend technologies. Feel free to explore my work, learn about my skills, and check out the projects I’ve been involved in.

Let’s build something amazing together!`;

// New text when "S" is pressed
const skillText = `Highly skilled and driven backend developer with 5 years of experience in designing, developing, and maintaining robust backend systems. Proficient in Golang, Docker, and database technologies such as MySQL, PostgreSQL, and MongoDB. Strong expertise in Microservices architecture and distributed systems, using tools like RabbitMQ, Redis, gRPC, and RESTful APIs to build scalable applications.

Familiar with Clean Architecture, TDD, and applying Design Patterns for maintainable and efficient code. Experienced in agile methodologies using Jira and Scrum. Proficient in monitoring and observability tools such as ELK, Prometheus, Grafana, OpenTelemetry, and Jaeger for ensuring system reliability. Well-versed in NATS messaging systems and utilizing Git for version control.

Adept at collaborating in dynamic, fast-paced environments, contributing to high-performance teams with a focus on delivering clean, maintainable, and efficient solutions.`;

const experienceText = `Backend Developer with 5 Years of Experience`;

const contactText = `You can contact me via:`;

const images = [
  "https://go.dev/images/go-logo-white.svg",
  "https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg",
  "https://grpc.io/img/logos/grpc-logo.png",
  "https://www.svgrepo.com/show/342053/mysql.svg",
  "https://www.svgrepo.com/show/303231/docker-logo.svg",
  "https://djeqr6to3dedg.cloudfront.net/repo-logos/library/postgres/live/logo-1720462257907.png",
  "https://djeqr6to3dedg.cloudfront.net/repo-logos/library/rabbitmq/live/logo-1720462261491.png",
  "https://djeqr6to3dedg.cloudfront.net/repo-logos/library/redis/live/logo-1720462263103.png",
  "https://git-scm.com/images/logo@2x.png",
];

const contacts = [
  "09105599950",
  "https://github.com/AmirMirzayi",
  "https://www.linkedin.com/in/amir-mirzaei",
  "mailto:mirzayi994@gmail.com",
];

let index = 0;

function clearScreen() {
  output.textContent = ""; // Clear the output
  index = 0;
}

function type(text) {
  return new Promise((resolve) => {
    function typeCharacter() {
      if (index < text.length) {
        output.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeCharacter, 30); // Adjust typing speed (30ms per character)
      } else {
        resolve(); // Resolve the promise when done typing
      }
    }
    typeCharacter();
  });
}

// Function to preview initialText (H key)
function previewinitialText() {
  clearScreen();
  type(initialText);
}

// Function to preview resume text (S key)
async function reloadWithSkills() {
  clearScreen();
  await type(skillText); // Type the new text
  await displayImages();
}

// Function to preview experiences (E key)
function reloadWithExperience() {
  clearScreen();
  type(experienceText);
}

// Function to preview contact text (C key)
async function reloadWithContacts() {
  clearScreen();
  await type(contactText);
  await displayContacts();
}

async function displayImages() {
  output.appendChild(document.createElement("br"));
  for (const imageUrl of images) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Image"; // Provide an alt text for accessibility
    img.style.maxWidth = "70px"; // Make sure images don't exceed container width
    img.style.margin = "20px";
    output.appendChild(img); // Append the image to the output
    await new Promise((resolve) => setTimeout(resolve, 100)); // Delay between images if needed
  }
}

async function displayContacts() {
  for (const contact of contacts) {
    const anchor = document.createElement("a");
    anchor.href = contact;
    anchor.innerText = contact;
    anchor.style.color = "greenyellow";
    anchor.style.display = "block";
    anchor.style.textDecoration = "none";
    output.appendChild(anchor);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

// Function to "exit" the terminal (X key)
function exitTerminal() {
  clearScreen();
  type("Goodbye! Exiting...");
  setTimeout(function () {
    window.close();
  }, 1000);
}

// Event listener for key presses
document.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "h":
      previewinitialText(); // Preview current text
      break;
    case "e":
      reloadWithExperience();
      break;
    case "s":
      reloadWithSkills(); // Clear and show new text
      break;
    case "c":
      reloadWithContacts();
      break;
    case "x":
      exitTerminal(); // Exit the terminal
      break;
    default:
      // Optional: Handle other keys if necessary
      break;
  }
});

// Start typing the initial text on page load
type(initialText);

const glowCursor = document.getElementById("glowCursor");

document.addEventListener("mousemove", (e) => {
  // Update the position of the glowing cursor
  glowCursor.style.left = `${e.pageX}px`;
  glowCursor.style.top = `${e.pageY}px`;
});

// Optional: Change color on hover (example)
document.addEventListener("mouseenter", () => {
  glowCursor.style.backgroundColor = "rgba(0, 255, 255, 0.7)"; // Change to cyan
});

document.addEventListener("mouseleave", () => {
  glowCursor.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // Change back to white
});
