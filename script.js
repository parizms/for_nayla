function showLoveMessage() {
   const message = document.getElementById("loveMessage");
   message.classList.remove("hidden");

   const button = document.getElementById("showMessage");
   button.style.display = "none";

   const music = document.getElementById("backgroundMusic");
   music.play();
}
function showLoveMessage() {
   const message = document.getElementById("loveMessage");
   message.classList.remove("hidden"); // Menampilkan elemen

   const paragraphs = message.querySelectorAll("p");
   paragraphs.forEach((paragraph, index) => {
       paragraph.style.animationDelay = `${index * 0.5}s`; // Tambahkan jeda antar paragraf
   });

   const button = document.getElementById("showMessage");
   button.style.display = "none";

   // Memutar musik
   const music = document.getElementById("backgroundMusic");
   music.play().catch(error => {
       console.error("Failed to play music:", error);
   });
}

function createHeart() {
   const heartContainer = document.querySelector('.heart-container');
   const heart = document.createElement('div');
   heart.classList.add('heart');

   // Set posisi horizontal acak
   heart.style.left = `${Math.random() * 100}%`;

   // Set ukuran hati acak
   const size = Math.random() * 10 + 10; // Antara 10px dan 20px
   heart.style.width = `${size}px`;
   heart.style.height = `${size}px`;

   // Tambahkan hati ke container
   heartContainer.appendChild(heart);

   // Hapus hati setelah animasi selesai
   setTimeout(() => {
       heart.remove();
   }, 5000);
}


function createHeart() {
   const heartContainer = document.querySelector('.heart-container');
   const heart = document.createElement('div');
   heart.classList.add('heart');

   // Set posisi horizontal acak
   heart.style.left = `${Math.random() * 100}%`;

   // Set ukuran hati acak
   const size = Math.random() * 10 + 10; // Antara 10px dan 20px
   heart.style.width = `${size}px`;
   heart.style.height = `${size}px`;

   // Tambahkan hati ke container
   heartContainer.appendChild(heart);

   // Hapus hati setelah animasi selesai
   setTimeout(() => {
       heart.remove();
   }, 5000);
}

let heartAnimationInterval;

function startHeartAnimation() {
   heartAnimationInterval = setInterval(createHeart, 500); // Setiap 0.5 detik
}

function stopHeartAnimation() {
   clearInterval(heartAnimationInterval);
}

function showLoveMessage() {
   const message = document.getElementById("loveMessage");
   message.classList.remove("hidden"); // Menampilkan elemen

   const paragraphs = message.querySelectorAll("p");
   paragraphs.forEach((paragraph, index) => {
       paragraph.style.animationDelay = `${index * 0.5}s`; // Tambahkan jeda antar paragraf
   });

   const button = document.getElementById("showMessage");
   button.style.display = "none";

   // Memutar musik
   const music = document.getElementById("backgroundMusic");
   music.play().catch(error => {
       console.error("Failed to play music:", error);
   });

   // Mulai animasi hati
   startHeartAnimation();
}

function createSparkle() {
   const sparkleContainer = document.querySelector('.heart-container');
   const sparkle = document.createElement('div');
   sparkle.classList.add('sparkle');

   // Posisi acak di sekitar teks
   sparkle.style.top = `${Math.random() * 100}%`;
   sparkle.style.left = `${Math.random() * 100}%`;

   // Ukuran acak
   const size = Math.random() * 5 + 5; // Antara 5px dan 10px
   sparkle.style.width = `${size}px`;
   sparkle.style.height = `${size}px`;

   sparkleContainer.appendChild(sparkle);

   // Hapus sparkle setelah beberapa saat
   setTimeout(() => {
       sparkle.remove();
   }, 1500);
}

setInterval(createSparkle, 300); // Tambahkan sparkle setiap 0.3 detik

function createClickEffect(event) {
   const particleContainer = document.createElement('div');
   particleContainer.className = 'particle-container';
   document.body.appendChild(particleContainer);

   for (let i = 0; i < 10; i++) {
       const particle = document.createElement('div');
       particle.className = 'particle';
       particle.style.left = `${event.clientX}px`;
       particle.style.top = `${event.clientY}px`;

       particleContainer.appendChild(particle);

       const angle = Math.random() * 2 * Math.PI;
       const distance = Math.random() * 100;

       const x = Math.cos(angle) * distance;
       const y = Math.sin(angle) * distance;

       particle.style.transform = `translate(${x}px, ${y}px)`;
       particle.style.opacity = '0';

       setTimeout(() => particle.remove(), 1000);
   }
}

document.getElementById('showMessage').addEventListener('click', createClickEffect);
message.style.display = "block";


