<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Neha's Healthy Bowl</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
      background: #fffbe6;
    }
    header {
      background: #5c4033;
      color: white;
      padding: 20px;
      text-align: center;
    }
    section {
      padding: 20px;
    }
    h2 {
      color: #5c4033;
    }
    .menu {
      display: none;
      background: #fff;
      padding: 10px;
      border: 1px solid #ccc;
    }
    button {
      background: #5c4033;
      color: white;
      padding: 10px 20px;
      border: none;
      margin: 10px 0;
      cursor: pointer;
      border-radius: 8px;
    }
    .contact input, .contact textarea {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
    }
    footer {
      background: #5c4033;
      color: white;
      text-align: center;
      padding: 10px;
    }
  </style>
</head>
<body>

<header>
  <h1>Neha's Healthy Bowl</h1>
  <p>Eat clean. Stay lean. Love local.</p>
</header>

<section>
  <h2>Our Specialties</h2>
  <ul>
    <li>Infused Detox Water</li>
    <li>Colorful Salads</li>
    <li>Ragi / Red / Black Rice Dosa</li>
    <li>Natural Healthy Shots</li>
  </ul>
  <button onclick="toggleMenu()">See Full Menu</button>
  <div class="menu" id="fullMenu">
    <p><strong>Infused Waters:</strong> Mint-Cucumber, Lemon-Ginger</p>
    <p><strong>Salads:</strong> Sprout Mix, Chickpea Veggie, Quinoa Bowl</p>
    <p><strong>Dosas:</strong> Ragi Paneer, Red Rice Veggie, Black Rice Egg</p>
    <p><strong>Shots:</strong> Amla Juice, Turmeric Lemon, Beet Boost</p>
  </div>
</section>

<section class="contact">
  <h2>Contact Us</h2>
  <form>
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea rows="4" placeholder="Your Message"></textarea>
    <button type="submit">Send</button>
  </form>
</section>

<footer>
  <p>© 2025 Neha's Healthy Bowl | All rights reserved.</p>
</footer>

<script>
  function toggleMenu() {
    const menu = document.getElementById("fullMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }
</script>

</body>
</html>
