// Projects data structure
const projects = [
  {
      id: 1,
      title: "Siberia Snus",
      description: "Website for Siberia Snus brand with responsive design.",
      image: "./images/23.jpeg",
      categories: ["ecommerce"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://www.siberia-snus.de/"
  },
  {
      id: 2,
      title: "Kinews 24",
      description: "News portal website with dynamic content features.",
      image: "./images/29.jpeg",
      categories: ["news"  ,"mulitlang"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://kinews24.de/"
  },
  {
      id: 3,
      title: "ConnectMore",
      description: "Networking application platform for professionals.",
      image: "./images/30.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["JavaScript", "PHP", "MySQL"],
      liveLink: "#portfolio"
  },
  {
      id: 4,
      title: "Doinsight",
      description: "Data analytics and insights platform with visualization tools.",
      image: "./images/31.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://do-insights.com/"
  },
  {
      id: 5,
      title: "Hidden Smiles",
      description: "Dental practice website with appointment booking.",
      image: "./images/3.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "http://hidden-smiles.com/"
  },
  {
      id: 6,
      title: "Em2 Consulting",
      description: "Business consulting service website with modern design.",
      image: "./images/22.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://em2-consulting.com/"
  },
  {
      id: 7,
      title: "Tech Now",
      description: "Technology news and reviews platform.",
      image: "./images/21.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["JavaScript", "PHP", "MySQL"],
      liveLink: "https://tech-now.io/"
  },
  {
      id: 8,
      title: "The Aiq",
      description: "Digital solutions platform with custom features.",
      image: "./images/25.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://theaiq.de/"
  },
  {
      id: 9,
      title: "BMR Digital",
      description: "Digital marketing agency website with portfolio showcase.",
      image: "./images/32.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://www.bmr.digital/"
  },
  {
      id: 10,
      title: "J&E Designer Windows",
      description: "Window design and sales company website with product catalog.",
      image: "./images/34.jpeg",
      categories: ["bussiness"],
      technologies: ["WordPress", "WooCommerce", "PHP"],
      liveLink: "https://jedesignerwindows.in/"
  },
  {
      id: 11,
      title: "Goya Hills",
      description: "Real estate and property development website.",
      image: "./images/26.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://goya-hills.com/"
  },
  {
      id: 12,
      title: "MCS Communications",
      description: "Communications agency website with service showcase.",
      image: "./images/33.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://mcscommunications.in/"
  },
  {
      id: 13,
      title: "Ayursudha Coaching",
      description: "Wellness coaching website with appointment scheduling.",
      image: "./images/27.jpeg",
      categories: ["teaching"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://ayursudhacoaching.com/"
  },
  {
      id: 14,
      title: "WIKI",
      description: "Information platform with searchable content database.",
      image: "./images/28.jpeg",
      categories: ["news"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://wiki.com.au/"
  },
  {
      id: 15,
      title: "Eurodoors",
      description: "Door manufacturing company website with product catalog.",
      image: "./images/15.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://eurodoors.org/"
  },
  {
      id: 16,
      title: "Angel Wealth Advisor",
      description: "Financial advisory service website with client portal.",
      image: "./images/8.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://angelwealthadvisors.com/"
  },
  {
      id: 17,
      title: "LEPI Venture",
      description: "Venture capital firm platform with portfolio management.",
      image: "./images/9.jpeg",
      categories: ["bussiness"],
      technologies: ["JavaScript", "PHP", "MySQL"],
      liveLink: "#portfolio"
  },
  {
      id: 18,
      title: "Gutachter24",
      description: "Assessment and appraisal service platform with booking system.",
      image: "./images/16.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://gutachter24.berlin/"
  },
  {
      id: 19,
      title: "Go-Finance",
      description: "Financial information and services website with interactive tools.",
      image: "./images/1.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://go-infofinance.com/"
  },
  {
      id: 20,
      title: "Go-tech Solutions",
      description: "Tech solutions and consulting service platform.",
      image: "./images/2.jpeg",
      categories: ["bussiness"],
      technologies: ["JavaScript", "PHP", "MySQL"],
      liveLink: "https://go-techsolution.org/"
  },
  {
      id: 21,
      title: "Jawahar Deep cleaning",
      description: "Cleaning service company website with service booking.",
      image: "./images/4.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://jawahardeepcleaning.com/"
  },
  {
      id: 22,
      title: "Travinix",
      description: "Travel and tourism website with booking capabilities.",
      image: "./images/5.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://visittravenex.com/"
  },
  {
      id: 23,
      title: "Turquoise",
      description: "Automotive marketplace with vehicle listings and search.",
      image: "./images/6.jpeg",
      categories: ["bussiness"],
      technologies: ["WordPress", "WooCommerce", "PHP"],
      liveLink: "https://trqauto.com/"
  },
  {
      id: 24,
      title: "Tiru Pooja Store",
      description: "Religious items e-commerce store with shopping cart functionality.",
      image: "./images/7.jpeg",
      categories: ["ecommerce"],
      technologies: ["WordPress", "WooCommerce", "PHP"],
      liveLink: "https://tirupoojastore.in/"
  },
  {
      id: 25,
      title: "Weddings For U",
      description: "Wedding planning service website with portfolio and booking.",
      image: "./images/11.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://weddingsforu.in/"
  },
  {
      id: 26,
      title: "Aryavart",
      description: "Transport and logistics service website with tracking features.",
      image: "./images/12.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://aryavarttls.org/"
  },
  {
      id: 27,
      title: "YK Infra Trading",
      description: "Infrastructure and trading company website with project showcases.",
      image: "./images/13.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://ykinfratrading.com/"
  },
  {
      id: 28,
      title: "Raj Astrologer",
      description: "Astrology service website with consultation booking system.",
      image: "./images/14.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rajastrologer.in/"
  },
  {
      id: 29,
      title: "PDS Clicks",
      description: "Photography service website with gallery and booking system.",
      image: "./images/17.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://pdsclicks.in/"
  },
  {
      id: 30,
      title: "Alaikha",
      description: "Fashion and clothing e-commerce store with shopping features.",
      image: "./images/18.jpeg",
      categories: ["ecommerce"],
      technologies: ["WordPress", "WooCommerce", "PHP"],
      liveLink: "https://alaikha.com/"
  },
  {
      id: 31,
      title: "4D",
      description: "Design and development agency website with portfolio showcase.",
      image: "./images/19.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://www.thefourd.com/"
  },
  {
      id: 32,
      title: "Swarit Studios",
      description: "Music production studio platform with audio samples and booking.",
      image: "./images/20.jpeg",
      categories: ["bussiness"],
      technologies: ["JavaScript", "PHP", "MySQL"],
      liveLink: "#portfolio"
  },
  {
      id: 33,
      title: "Shree Tours",
      description: "Tour and travel agency website with booking and itinerary features.",
      image: "./images/24.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://shreetoursudaipur.com/"
  }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
// Navbar elements
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');

// Projects elements
const projectsGrid = document.querySelector('.projects-grid');

// Form element
const contactForm = document.getElementById('contact-form');

// Initialize dynamic projects
initDynamicProjects();

// Projects filter elements - must come after initDynamicProjects to ensure elements exist
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// AOS initialization for scroll animations
initScrollAnimations();

// Cursor follow effect
initCursorEffect();

// Typing effect words
const words = ["websites", "web apps", "e-commerce", "experiences"];
let currentWordIndex = 0;

// Initialize word changing
initWordChanging();

// Event Listeners
hamburger.addEventListener('click', toggleMobileMenu);
window.addEventListener('scroll', scrollFunction);
window.addEventListener('resize', checkScreenSize);

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMenuAndSetActive(item);
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterProjects(btn);
    });
});

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Initialize section observers
initSectionObservers();

// Initial checks
checkScreenSize();
scrollFunction();

// Functions
function initDynamicProjects() {
    if (!projectsGrid) return;
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    // Generate HTML for each project
    projects.forEach(project => {
        projectsGrid.innerHTML += createProjectCard(project);
    });
}

function createProjectCard(project) {
    const techSpans = project.technologies.map(tech => `<span>${tech}</span>`).join('');
    const categories = project.categories.join(' ');
    
    return `
        <div class="project-card" data-category="${categories}">
            <div class="project-img">
                <img src="${project.image}" alt="${project.title} Project">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techSpans}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" class="project-link"><i class="fas fa-external-link-alt"></i> ${project.liveLink === "#portfolio" ? "Details" : "Live"}</a>
                </div>
            </div>
        </div>
    `;
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

function closeMenuAndSetActive(clickedItem) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
    
    navLinksItems.forEach(item => {
        item.classList.remove('active');
    });
    
    clickedItem.classList.add('active');
}

function scrollFunction() {
    // Navbar background change on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

function checkScreenSize() {
    // Disable cursor effect on mobile
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        if (window.innerWidth <= 768) {
            cursor.style.display = 'none';
        } else {
            cursor.style.display = '';
        }
    }
}

function initCursorEffect() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Special effect on buttons
    const buttons = document.querySelectorAll('button, .btn, .nav-links a, .social-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderWidth = '1px';
            cursor.style.opacity = '0.5';
        });
        
        button.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderWidth = '2px';
            cursor.style.opacity = '1';
        });
    });
}

function initWordChanging() {
    const changingText = document.getElementById('changing-text');
    if (!changingText) return;
    
    let intervalId;
    
    // Clear any existing interval
    clearInterval(intervalId);
    
    // Set up a new interval
    intervalId = setInterval(() => {
        changingText.style.opacity = 0;
        
        setTimeout(() => {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            changingText.textContent = words[currentWordIndex];
            changingText.style.opacity = 1;
        }, 500);
    }, 3000);
}

function filterProjects(clickedBtn) {
    const filter = clickedBtn.dataset.filter;
    
    // Update active button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    clickedBtn.classList.add('active');
    
    // Filter projects
    projectCards.forEach(card => {
        // Split the categories into an array
        const categories = card.dataset.category.split(' ');
        
        // Check if filter is 'all' or if the card's categories include the selected filter
        if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Form validation
  if (!name || !email || !subject || !message) {
      alert('Please fill out all fields');
      return;
  }
  
  // Display loading indicator
  document.getElementById('submit-button').disabled = true;
  document.getElementById('submit-button').textContent = 'Sending...';
  
  // Prepare template parameters for EmailJS
  const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
  };
  
  // Send email using EmailJS
  emailjs.send('service_ubwp00e', 'template_jvs0p2k', templateParams)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
          
          // Reset form
          document.getElementById('contactForm').reset();
      }, function(error) {
          console.log('FAILED...', error);
          alert('Sorry, there was an error sending your message. Please try again later.');
      })
      .finally(function() {
          // Reset button state
          document.getElementById('submit-button').disabled = false;
          document.getElementById('submit-button').textContent = 'Send Message';
      });
}

function initSectionObservers() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Update navigation active state
                navLinksItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').substring(1) === entry.target.id) {
                        item.classList.add('active');
                    }
                });
                
                // Add animation classes to section elements
                animateSectionElements(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

function animateSectionElements(section) {
    // Add specific animations based on section ID
    switch (section.id) {
        case 'services':
            const serviceCards = section.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 100);
            });
            break;
            
        case 'projects':
            const projectCards = section.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 100);
            });
            break;
            
        case 'contact':
            const contactElements = section.querySelectorAll('.contact-item, .contact-form-container');
            contactElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animated');
                }, index * 150);
            });
            break;
    }
}

function initScrollAnimations() {
    // Simple AOS (Animate On Scroll) implementation
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.aosDelay || 0;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
                
                elementObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        elementObserver.observe(element);
    });
}
});