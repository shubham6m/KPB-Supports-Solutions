const courses = {
  'popular': [
      { imglink:'./logo/microsoft.webp', title: 'Machine Learning', rating: '4.5', learners: '35,631 learners', duration: '8 weeks' },
      { imglink:'./logo/ibm.webp', title: 'Advanced Excel', rating: '4.4', learners: '41,295 learners', duration: '4 weeks' },
      { imglink:'./logo/zomato.webp', title: 'AutoCAD', rating: '4.3', learners: '36,197 learners', duration: '6 weeks' },
  ],
  'programming': [
      { imglink:'./logo/facebook.webp', title: 'Programming with C and C++', rating: '4.6', learners: '30,231 learners', duration: '8 weeks' },
      { imglink:'./logo/amazon.webp', title: 'JavaScript Basics', rating: '4.7', learners: '50,321 learners', duration: '6 weeks' },
      { imglink:'./logo/netflix.webp', title: 'Python for Data Science', rating: '4.8', learners: '45,123 learners', duration: '10 weeks' },
  ],
  'business': [
      { imglink:'./logo/ibm.webp', title: 'Business Analytics', rating: '4.4', learners: '29,153 learners', duration: '5 weeks' },
      { imglink:'./logo/zomato.webp', title: 'Project Management', rating: '4.5', learners: '38,321 learners', duration: '7 weeks' },
      { imglink:'./logo/amazon.webp', title: 'Marketing Fundamentals', rating: '4.2', learners: '21,632 learners', duration: '6 weeks' },
  ],
  'engineering': [
      { imglink:'./logo/zomato.webp', title: 'mechanical engineering', rating: '4.9', learners: '29,143 learners', duration: '52 weeks' },
      { imglink:'./logo/ibm.webp', title: 'civil engineering', rating: '4.5', learners: '38,565 learners', duration: '56 weeks' },
      { imglink:'./logo/amazon.webp', title: 'computer science engineering', rating: '4.6', learners: '21,765 learners', duration: '120 weeks' },
  ],
  'data-science': [
      { imglink:'./logo/amazon.webp', title: 'Business Analytics', rating: '4.4', learners: '29,153 learners', duration: '5 weeks' },
      { imglink:'./logo/zomato.webp', title: 'Project Management', rating: '4.5', learners: '38,321 learners', duration: '7 weeks' },
      { imglink:'./logo/ibm.webp', title: 'Marketing Fundamentals', rating: '4.2', learners: '21,632 learners', duration: '6 weeks' },
  ],
  'design': [
      { title: 'Business Analytics', rating: '4.4', learners: '29,153 learners', duration: '5 weeks' },
      { title: 'Project Management', rating: '4.5', learners: '38,321 learners', duration: '7 weeks' },
      { title: 'Marketing Fundamentals', rating: '4.2', learners: '21,632 learners', duration: '6 weeks' },
  ],
  'ai': [
      { title: 'Business Analytics', rating: '4.4', learners: '29,153 learners', duration: '5 weeks' },
      { title: 'Project Management', rating: '4.5', learners: '38,321 learners', duration: '7 weeks' },
      { title: 'Marketing Fundamentals', rating: '4.2', learners: '21,632 learners', duration: '6 weeks' },
  ],
};


function changeContent(category) {
  const newcardContainer = document.getElementById('newcard-container');
  newcardContainer.innerHTML = ''; // Clear previous content

  courses[category].forEach(course => {
      const newcard = document.createElement('div');
      newcard.classList.add('newcard');
      newcard.innerHTML = `
          <img class="ok" src="${course.imglink}" alt="Image 1">
          <h3>${course.title}</h3>
          <p class="rating">Rating: ${course.rating}</p>
          <p>${course.learners}</p>
          <p>Duration: ${course.duration}</p>
      `;
      newcardContainer.appendChild(newcard);
  });

  // Remove 'active' class from all sidebar items
  const sidebarItems = document.querySelectorAll('.sidebar li');
  sidebarItems.forEach(item => item.classList.remove('active'));

  // Add 'active' class to the clicked item
  document.querySelector(`[onclick="changeContent('${category}')"]`).classList.add('active');
}

//cources

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect for course cards
    const cards = document.querySelectorAll('.course-card');
    
    cards.forEach(card => {
        // Random enrollment counter
        const counter = card.querySelector('.students');
        let count = parseInt(counter.textContent);
        
        setInterval(() => {
            count += Math.floor(Math.random() * 3);
            counter.textContent = count + '+ students';
        }, 5000);
        
        // Add click handler for enroll buttons
        const button = card.querySelector('.course-button');
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.add('highlight');
            this.textContent = 'Enrolling...';
            
            setTimeout(() => {
                this.classList.remove('highlight');
                this.textContent = 'Enroll Now';
            }, 2000);
        });
    });
    
    // Add rating hover effect
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating => {
        rating.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        rating.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

//footer


document.addEventListener('DOMContentLoaded', function() {
    // Add intersection observer for smooth appearance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observe all footer sections
    document.querySelectorAll('.footer-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Add hover effect for links
    document.querySelectorAll('.footer-section a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '10px';
        });
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '0';
        });
    });
});