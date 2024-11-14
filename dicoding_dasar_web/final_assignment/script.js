 // Toggle menu pada tampilan mobile
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');

 menuToggle.addEventListener('click', () => {
     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
 });

 // Menambahkan daftar layanan menggunakan JavaScript
 const services = [
     'Pengembangan Aplikasi',
     'Konsultasi IT',
     'Pelatihan Teknologi'
 ];

 const servicesList = document.getElementById('services-list');
 services.forEach(service => {
     const li = document.createElement('li');
     li.textContent = service;
     servicesList.appendChild(li);
 });

 // Animasi sederhana untuk CTA button
 const ctaButton = document.querySelector('.cta-button');
 ctaButton.addEventListener('mouseover', () => {
     ctaButton.style.transform = 'scale(1.05)';
 });
 ctaButton.addEventListener('mouseout', () => {
     ctaButton.style.transform = 'scale(1)';
 });

  // Toggle menu pada tampilan mobile
  const menuToggleContact = document.querySelector('.menu-toggle');
  const navLinksContact = document.querySelector('.nav-links');

  menuToggleContact.addEventListener('click', () => {
      navLinksContact.style.display = navLinksContact.style.display === 'flex' ? 'none' : 'flex';
  });

  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih! Pesan Anda telah terkirim.');
      contactForm.reset();
  });