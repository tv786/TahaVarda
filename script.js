// Projects data structure
const projects = [
  {
      id: 1,
      title: "Siberia Snus",
      description: "Website for Siberia Snus brand with responsive design.",
      image: "./images/23.jpeg",
      categories: ["ecommerce"],
      technologies: ["WooCommerce", "Payment", "CSS", "JS"],
      liveLink: "https://www.siberia-snus.de/"
  },
  {
      id: 2,
      title: "Kinews 24",
      description: "News portal website with dynamic content features.",
      image: "./images/29.jpeg",
      categories: ["news", "mulitlang"],
      technologies: ["WordPress", "Multilanguage", "CSS", "JS"],
      liveLink: "https://kinews24.de/"
  },
  {
      id: 3,
      title: "ConnectMore",
      description: "Networking application platform for professionals.",
      image: "./images/30.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["WordPress", "Multilanguage", "GeoRedirect", "CSS"],
      liveLink: "https://theconnectmore.com/"
  },
  {
      id: 4,
      title: "Doinsight",
      description: "Data analytics and insights platform with visualization tools.",
      image: "./images/31.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["Multilanguage", "API", "PHP","CSS", "JS"],
      liveLink: "https://doinsights.in/"
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
      liveLink: "https://customgptaiq.com/"
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
      liveLink: "https://goyahills.com/"
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
      id: 34,
      title: "Go Legal Consultancy",
      description: "Legal consultancy website with services ",
      image: "./images/36.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript", "Elementor"],
      liveLink: "https://golegalconsultancy.com/",    
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
      title: "Knappmeier Elektrotechnik",
      description: "Sustainable energy solutions & electrical engineering services website.",
      image: "./images/35.jpeg",
      categories: ["bussiness"],
      technologies: ["WordPress" , "Elementor", "CSS"],
      liveLink: "https://knappmeier-elektrotechnik.de/"
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
      id: 36,
      title: "Active Bio Pharma",
      description: "Biopharmaceutical company website with product showcases and research highlights.",
      image: "./images/38.jpeg",
      categories: ["bussiness", "mulitlang"],
      technologies: ["HTML", "CSS", "JavaScript", "Elementor"],
      liveLink: "https://activebiop.com/"
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
  },
  {
      id: 35,
      title: "Alfanzyme",
      description: "Biotech and pharmaceutical company website with product showcases.",
      image: "./images/37.jpeg",
      categories: ["bussiness"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#" 
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
const words = ["websites", "design", "bussiness", "experiences"];
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

// WordPress Plugins Data Structure
const wordpressPlugins = [
    {
        id: 1,
        name: "FormSync",
        logo: "<i class='fas fa-sync-alt'></i>", // FontAwesome icon as placeholder
        tagline: "Seamless form data synchronization",
        description: "FormSync allows WordPress site owners to easily synchronize form submissions across multiple platforms and services, ensuring data consistency and improved workflow automation.",
        screenshots: [
            "./images/plugins/formsync-1.png",
            "./images/plugins/formsync-2.png",
            "./images/plugins/formsync-3.png",
            "./images/plugins/formsync-4.png"
        ],
        features: [
            "Real-time form data synchronization",
            "Multiple integration options (CRM, email marketing platforms, etc.)",
            "Custom field mapping",
            "Conditional logic support",
            "Detailed sync logs and error reporting"
        ],
        demoLink: "#",
        docLink: "#",
        badge: "Featured"
    },
    {
        id: 2,
        name: "SEO Metadata Export & Import",
        logo: "<i class='fas fa-exchange-alt'></i>", // FontAwesome icon as placeholder
        tagline: "Effortless SEO data migration",
        description: "This plugin simplifies the process of migrating SEO metadata between WordPress sites, allowing you to export and import crucial SEO information without losing your valuable optimization work.",
        screenshots: [
            "./images/plugins/seo-metadata-1.png",
            "./images/plugins/seo-metadata-2.png",
            "./images/plugins/seo-metadata-3.png",
            "./images/plugins/seo-metadata-4.png"
        ],
        features: [
            "One-click export/import functionality",
            "Support for major SEO plugins (Yoast, Rank Math, etc.)",
            "Selective data migration options",
            "CSV/JSON format support",
            "Automatic mapping of content relationships"
        ],
        demoLink: "#",
        docLink: "#",
        badge: "New"
    },
    {
        id: 3,
        name: "Restricted Words Check & Replace",
        logo: "<i class='fas fa-ban'></i>", // FontAwesome icon as placeholder
        tagline: "Secure content protection",
        description: "This plugin provides a flexible solution for checking and replacing restricted words in your WordPress content, ensuring a secure and compliant environment for your audience. Compatible with popular page builders and supports multilingual content.",
        screenshots: [
            "./images/plugins/restricted-words-1.jpeg",
            "./images/plugins/restricted-words-2.jpeg",
            "./images/plugins/restricted-words-3.jpeg",
            "./images/plugins/restricted-words-4.jpeg",
            "./images/plugins/restricted-words-5.jpeg"
        ],
        features: [
            "Customizable restricted words list",
            "Support for multilingual content",
            "Integration with popular page builders",
            "User-friendly interface for easy configuration",
            "Detailed logging and error reporting"
        ],
        demoLink: "#",
        docLink: "#",
        badge: "New"
    }
];

// Function to initialize plugins section
function initPluginsSection() {
    const pluginsContainer = document.querySelector('.plugins-container');
    if (!pluginsContainer) return;
    
    // Clear existing content
    pluginsContainer.innerHTML = '';
    
    // Generate HTML for each plugin
    wordpressPlugins.forEach(plugin => {
        pluginsContainer.innerHTML += createPluginCard(plugin);
    });
    
    // Initialize screenshot sliders after cards are added
    initScreenshotSliders();
    
    // Observe plugin cards for animation
    observePluginCards();
}

// Plugin Documentation Data
const pluginDocs = {
    1: { // FormSync
        title: "FormSync Documentation",
        content: `
            <h1>FormSync - User Guide</h1>
            
            <h2>Introduction</h2>
            <p>FormSync is a powerful WordPress plugin that enables seamless synchronization of form submissions across multiple platforms and services. This guide will help you set up and make the most of FormSync's features.</p>
            
            <h2>Installation</h2>
            <ol>
                <li>Download the FormSync plugin ZIP file</li>
                <li>Go to your WordPress admin panel, navigate to <code>Plugins > Add New</code></li>
                <li>Click "Upload Plugin" and select the FormSync ZIP file</li>
                <li>Click "Install Now" and then "Activate Plugin"</li>
            </ol>
            
            <h2>Setting Up Your First Sync</h2>
            <p>After activating FormSync, you'll find a new menu item in your WordPress admin panel. Follow these steps to set up your first sync:</p>
            
            <ol>
                <li>Go to <code>FormSync > New Connection</code></li>
                <li>Select the form plugin you're using (Contact Form 7, Gravity Forms, etc.)</li>
                <li>Choose the specific form you want to sync</li>
                <li>Select the destination service (CRM, email marketing platform, etc.)</li>
                <li>Map the form fields to corresponding fields in your destination service</li>
                <li>Set up any conditional logic if needed</li>
                <li>Save your configuration</li>
            </ol>
            
            <h2>Field Mapping</h2>
            <p>Field mapping is a crucial part of setting up FormSync. This determines how data from your form corresponds to fields in your destination service.</p>
            
            <h3>Basic Mapping</h3>
            <p>For basic mapping, simply select the form field from the dropdown and choose the corresponding destination field.</p>
            
            <h3>Advanced Mapping</h3>
            <p>Advanced mapping allows you to:</p>
            <ul>
                <li>Combine multiple form fields into one destination field</li>
                <li>Split a form field into multiple destination fields</li>
                <li>Apply transformations to field data (uppercase, lowercase, etc.)</li>
                <li>Set default values for empty fields</li>
            </ul>
            
            <h2>Conditional Logic</h2>
            <p>With conditional logic, you can determine when data should be synced based on specific conditions. For example:</p>
            <ul>
                <li>Only sync if a specific field contains a certain value</li>
                <li>Skip synchronization if a field is empty</li>
                <li>Route different submissions to different destinations based on form values</li>
            </ul>
            
            <h2>Troubleshooting</h2>
            <p>If you encounter issues with FormSync, check the following:</p>
            <ul>
                <li>Verify your API credentials for the destination service</li>
                <li>Check the Sync Logs to see if there are any error messages</li>
                <li>Ensure that the field mapping is correct</li>
                <li>Test your form to ensure it's working properly</li>
            </ul>
         
        `
    },
    2: { // SEO Metadata Export & Import
        title: "SEO Metadata Export & Import Documentation",
        content: `
            <h1>SEO Metadata Export & Import - User Guide</h1>
            
            <h2>Introduction</h2>
            <p>SEO Metadata Export & Import is a specialized WordPress plugin designed to simplify the process of migrating SEO metadata between WordPress sites. This guide will help you understand how to use this plugin effectively.</p>
            
            <h2>Installation</h2>
            <ol>
                <li>Download the SEO Metadata Export & Import plugin ZIP file</li>
                <li>Go to your WordPress admin panel, navigate to <code>Plugins > Add New</code></li>
                <li>Click "Upload Plugin" and select the plugin ZIP file</li>
                <li>Click "Install Now" and then "Activate Plugin"</li>
            </ol>
            
            <h2>Exporting SEO Metadata</h2>
            <p>To export SEO metadata from your WordPress site:</p>
            <ol>
                <li>Go to <code>Tools > SEO Metadata Export</code> in your WordPress admin panel</li>
                <li>Select which SEO plugin data you want to export (Yoast SEO, Rank Math, All in One SEO, etc.)</li>
                <li>Choose the content types to include (posts, pages, custom post types, etc.)</li>
                <li>Select specific metadata elements to export (titles, descriptions, focus keywords, etc.)</li>
                <li>Choose the export format (JSON or CSV)</li>
                <li>Click "Generate Export" to create your export file</li>
                <li>Download the file to your computer</li>
            </ol>
            
            <h2>Importing SEO Metadata</h2>
            <p>To import SEO metadata to your WordPress site:</p>
            <ol>
                <li>Go to <code>Tools > SEO Metadata Import</code> in your WordPress admin panel</li>
                <li>Select the destination SEO plugin (where you want to import the data)</li>
                <li>Upload the export file you previously created</li>
                <li>Map the content IDs or use the automatic matching feature</li>
                <li>Preview the changes before applying</li>
                <li>Click "Import Metadata" to complete the process</li>
            </ol>
            
            <h2>Content Matching</h2>
            <p>When importing SEO metadata, you need to match the content from your export file with the content on your destination site. The plugin offers several matching methods:</p>
            <ul>
                <li><strong>ID Matching:</strong> Match content based on post/page IDs (only works well when migrating between similar sites)</li>
                <li><strong>Slug Matching:</strong> Match content based on URL slugs (recommended for most cases)</li>
                <li><strong>Title Matching:</strong> Match content based on post/page titles</li>
                <li><strong>Manual Matching:</strong> Manually select matches for each item</li>
            </ul>
            
            <h2>Supported SEO Plugins</h2>
            <p>The SEO Metadata Export & Import plugin supports the following SEO plugins:</p>
            <ul>
                <li>Yoast SEO</li>
                <li>Rank Math</li>
                <li>All in One SEO</li>
                <li>SEOPress</li>
                <li>The SEO Framework</li>
            </ul>
            
            <h2>Advanced Features</h2>
            <h3>Selective Imports</h3>
            <p>You can choose to import only specific types of metadata, such as:</p>
            <ul>
                <li>SEO titles</li>
                <li>Meta descriptions</li>
                <li>Focus keywords</li>
                <li>Social media metadata</li>
                <li>Schema markup settings</li>
                <li>Advanced robots meta settings</li>
            </ul>
            
            <h3>Batch Processing</h3>
            <p>For large sites, the plugin offers batch processing to handle imports in chunks, preventing timeouts and memory issues.</p>
            
            <h2>Troubleshooting</h2>
            <p>Common issues and solutions:</p>
            <ul>
                <li><strong>Import fails:</strong> Try reducing the batch size in the plugin settings</li>
                <li><strong>Content not matching:</strong> Use a different matching method or try manual matching</li>
                <li><strong>Missing metadata:</strong> Ensure that your export included all necessary data fields</li>
                <li><strong>Plugin conflicts:</strong> Temporarily disable other SEO plugins during import</li>
            </ul>
      
        `
    },
    3: { // Restricted Words Check & Replace
        title: "Restricted Words Check & Replace Documentation",
        content: `
            <h1>Restricted Words Check & Replace - User Guide</h1>
            
            <h2>Introduction</h2>
            <p>Restricted Words Check & Replace is a WordPress plugin that helps you manage restricted words in your site. This guide will help you understand how to use this plugin effectively.</p>
            
            <h2>Installation</h2>
            <ol>
                <li>Download the Restricted Words Check & Replace plugin ZIP file</li>
                <li>Go to your WordPress admin panel, navigate to <code>Plugins > Add New</code></li>
                <li>Click "Upload Plugin" and select the plugin ZIP file</li>
                <li>Click "Install Now" and then "Activate Plugin"</li>
            </ol>
            
            <h2>Using the Plugin</h2>
            <p>Once the plugin is activated, you can use it to manage restricted words in your site. Here's how:</p>
            <ul>
                <li>Go to <code>Restricted Words Check & Replace</code> in your WordPress admin panel</li>
                <li>Enter the list of restricted words you want to check and replace</li>
                <li>Click "Save Changes"</li>
                <li>Then go to <strong>Site Scan</strong> in the plugin menu, click the Site Scan option to check for restricted words in your site</li>
                <li>Review the scan results and choose to replace or remove restricted words as needed</li>
                <li>For Bulk Edits Go to <strong>Bulk Replace</strong> option, Select the words you want to replace and the words you want to replace them with, then click "Preview" to see the changes, then click "Save Changes".</li>
            </ul>
         
        `
    }
};

// Update the createPluginCard function to add the onclick handler for "View Demo"
function createPluginCard(plugin) {
    // Generate screenshot elements
    const screenshotsHTML = plugin.screenshots.map((screenshot) => 
        `<img src="${screenshot}" class="screenshot" alt="${plugin.name} screenshot">`
    ).join('');
    
    // Generate screenshot navigation dots
    const dotsHTML = plugin.screenshots.map((_, index) => 
        `<div class="screenshot-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
    ).join('');
    
    // Generate features list
    const featuresHTML = plugin.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    return `
        <div class="plugin-card" data-plugin-id="${plugin.id}">
            <div class="plugin-header">
                <div class="plugin-logo">
                    ${plugin.logo}
                </div>
                <div class="plugin-title">
                    <h3>${plugin.name}</h3>
                    <p>${plugin.tagline}</p>
                </div>
                ${plugin.badge ? `<span class="plugin-badge">${plugin.badge}</span>` : ''}
            </div>
            
            <div class="plugin-content">
                <div class="plugin-screenshots">
                    <div class="screenshots-container" data-current="0">
                        ${screenshotsHTML}   
                    </div>
                    <div class="screenshot-nav">
                        ${dotsHTML}
                    </div>
                    <div class="screenshot-arrows">
                        <div class="arrow arrow-left"><i class="fas fa-chevron-left"></i></div>
                        <div class="arrow arrow-right"><i class="fas fa-chevron-right"></i></div>
                    </div>
                </div>
                
                <div class="plugin-description">
                    ${plugin.description}
                </div>
                
                <div class="plugin-features">
                    <h4>Key Features</h4>
                    <ul class="feature-list">
                        ${featuresHTML}
                    </ul>
                </div>
            </div>
            
            <div class="plugin-actions">
                <a href="javascript:void(0)" class="plugin-link" onclick="openScreenshotModal(${plugin.id})">
                    <i class="fas fa-play-circle"></i> View Demo
                </a>
                <a href="javascript:void(0)" class="plugin-link" onclick="openDocsModal(${plugin.id})">
                    <i class="fas fa-book"></i> Documentation
                </a>
            </div>
        </div>
    `;
}

// Function to open the documentation modal
function openDocsModal(pluginId) {
    const modal = document.getElementById('docs-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalContent = modal.querySelector('.docs-content');
    const modalLogo = modal.querySelector('.modal-plugin-logo');
    
    // Find the plugin data
    const plugin = wordpressPlugins.find(p => p.id === pluginId);
    if (!plugin) return;
    
    // Find the plugin documentation
    const pluginDoc = pluginDocs[pluginId];
    if (!pluginDoc) {
        modalContent.innerHTML = '<p>Documentation is currently being updated. Please check back later.</p>';
    } else {
        modalContent.innerHTML = pluginDoc.content;
    }
    
    // Set the modal title and logo
    modalTitle.textContent = plugin.name;
    modalLogo.innerHTML = plugin.logo;
    
    // Show the modal
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

// Function to close modals
function closeModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    
    // Re-enable body scroll
    document.body.style.overflow = '';
}

// Add event listeners for modal close buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add modal close buttons functionality
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModals);
    });
    
    // Close modals when clicking outside of modal content
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModals();
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModals();
        }
    });
    
    // Add keyboard navigation for screenshot modal
    document.addEventListener('keydown', function(event) {
        const modal = document.getElementById('screenshot-modal');
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                modal.querySelector('.modal-prev').click();
            } else if (event.key === 'ArrowRight') {
                modal.querySelector('.modal-next').click();
            }
        }
    });
});

// Initialize screenshot sliders
function initScreenshotSliders() {
    // Get all plugin cards
    const pluginCards = document.querySelectorAll('.plugin-card');
    
    pluginCards.forEach(card => {
        const container = card.querySelector('.screenshots-container');
        const dots = card.querySelectorAll('.screenshot-dot');
        const leftArrow = card.querySelector('.arrow-left');
        const rightArrow = card.querySelector('.arrow-right');
        
        // Set up dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                navigateToSlide(container, dots, index);
            });
        });
        
        // Set up arrow navigation
        if (leftArrow && rightArrow) {
            leftArrow.addEventListener('click', () => {
                const currentIndex = parseInt(container.dataset.current || 0);
                const newIndex = (currentIndex - 1 + dots.length) % dots.length;
                navigateToSlide(container, dots, newIndex);
            });
            
            rightArrow.addEventListener('click', () => {
                const currentIndex = parseInt(container.dataset.current || 0);
                const newIndex = (currentIndex + 1) % dots.length;
                navigateToSlide(container, dots, newIndex);
            });
        }
        
        // Auto-advance slides every 5 seconds
        let slideInterval = setInterval(() => {
            const currentIndex = parseInt(container.dataset.current || 0);
            const newIndex = (currentIndex + 1) % dots.length;
            navigateToSlide(container, dots, newIndex);
        }, 5000);
        
        // Pause auto-advance on hover
        card.querySelector('.plugin-screenshots').addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        // Resume auto-advance when mouse leaves
        card.querySelector('.plugin-screenshots').addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                const currentIndex = parseInt(container.dataset.current || 0);
                const newIndex = (currentIndex + 1) % dots.length;
                navigateToSlide(container, dots, newIndex);
            }, 5000);
        });
    });
}

// Navigate to a specific slide
function navigateToSlide(container, dots, index) {
    // Update container position
    container.style.transform = `translateX(-${index * 100}%)`;
    container.dataset.current = index;
    
    // Update active dot
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Observe plugin cards for animation
function observePluginCards() {
    const pluginCards = document.querySelectorAll('.plugin-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 150);
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    pluginCards.forEach(card => {
        cardObserver.observe(card);
    });
}

// Add plugin section initialization to the existing DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Initialize plugins section
    initPluginsSection();
    
    // Add plugins to the nav links if needed
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && !document.querySelector('.nav-links a[href="#plugins"]')) {
        const contactLink = document.querySelector('.nav-links a[href="#contact"]');
        if (contactLink) {
            const pluginsLink = document.createElement('li');
            pluginsLink.innerHTML = '<a href="#plugins">Plugins</a>';
            navLinks.insertBefore(pluginsLink, contactLink.parentElement);
        }
    }
});

// Function to add a new plugin (can be called from the console or other scripts)
function addNewPlugin(pluginData) {
    // Add to the plugins array
    wordpressPlugins.push({
        id: wordpressPlugins.length + 1,
        ...pluginData
    });
    
    // Reinitialize the plugins section
    initPluginsSection();
}

// Function to create and open the screenshot modal
function openScreenshotModal(pluginId) {
    // Find the plugin data
    const plugin = wordpressPlugins.find(p => p.id === pluginId);
    if (!plugin) return;
    
    // Get or create the screenshot modal
    let modal = document.getElementById('screenshot-modal');
    
    // If modal doesn't exist, create it
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'screenshot-modal';
        modal.className = 'modal screenshot-modal';
        document.body.appendChild(modal);
    }
    
    // Generate screenshot slides HTML
    const screenshotsHTML = plugin.screenshots.map((screenshot) => 
        `<div class="modal-slide">
            <img src="${screenshot}" alt="${plugin.name} screenshot">
        </div>`
    ).join('');
    
    // Generate screenshot navigation dots
    const dotsHTML = plugin.screenshots.map((_, index) => 
        `<div class="modal-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
    ).join('');
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${plugin.name} - Screenshots</h3>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-slider" data-current="0">
                    ${screenshotsHTML}
                </div>
                <div class="modal-nav">
                    <button class="modal-arrow modal-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="modal-dots">
                        ${dotsHTML}
                    </div>
                    <button class="modal-arrow modal-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Show the modal
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Add event listeners for navigation
    const slider = modal.querySelector('.modal-slider');
    const dots = modal.querySelectorAll('.modal-dot');
    const prevBtn = modal.querySelector('.modal-prev');
    const nextBtn = modal.querySelector('.modal-next');
    const closeBtn = modal.querySelector('.modal-close');
    
    // Close button functionality
    closeBtn.addEventListener('click', closeModals);
    
    // Navigation dot functionality
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            navigateModalSlide(slider, dots, index);
        });
    });
    
    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        const currentIndex = parseInt(slider.dataset.current || 0);
        const newIndex = (currentIndex - 1 + dots.length) % dots.length;
        navigateModalSlide(slider, dots, newIndex);
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', () => {
        const currentIndex = parseInt(slider.dataset.current || 0);
        const newIndex = (currentIndex + 1) % dots.length;
        navigateModalSlide(slider, dots, newIndex);
    });
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

// Function to navigate modal slides
function navigateModalSlide(slider, dots, index) {
    // Update slider position
    slider.style.transform = `translateX(-${index * 100}%)`;
    slider.dataset.current = index;
    
    // Update active dot
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// animation
