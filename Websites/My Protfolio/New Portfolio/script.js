// script.js

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }, { passive: false });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px 50px 0px'
  });

  document.querySelectorAll('.info-section, .service-item').forEach(el => {
    observer.observe(el);
  });
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
  requestAnimationFrame(() => {
    if (navLinks.classList.contains('show')) {
      document.addEventListener('click', outsideClickListener);
    } else {
      document.removeEventListener('click', outsideClickListener);
    }
  });
}

function outsideClickListener(e) {
  const navLinks = document.getElementById('navLinks');
  const burger = document.querySelector('.burger');
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove('show');
    document.removeEventListener('click', outsideClickListener);
  }
}

function showAlert(serviceName) {
  const emailAddress = 'pratikkumardewan@gmail.com';
  const subject = serviceName === 'Hiring Opportunity'
    ? 'I wanna hire you'
    : `I want to avail services regarding ${serviceName}`;
  
  // First try to use mailto (for devices with email clients)
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  
  // Create a fallback for devices without email clients
  const fallbackUrl = getEmailWebClientUrl(emailAddress, subject);
  
  // Try to open mailto first
  const mailtoWindow = window.open(mailtoUrl);
  
  // Check if the window was blocked or closed immediately
  setTimeout(() => {
    if (!mailtoWindow || mailtoWindow.closed || mailtoWindow.closed === undefined) {
      // If mailto failed, open the fallback URL
      window.open(fallbackUrl, '_blank');
    }
  }, 500);
}

function getEmailWebClientUrl(email, subject) {
  // Determine which web-based email client to use as fallback
  // Gmail is a common choice
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
  
  // You could also add other email clients as options:
  // const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}`;
  // const yahooUrl = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}`;
  
  // Return Gmail as the default fallback
  return gmailUrl;
}