
  let isIronMan = true;

  function toggleHero() {
    const hero = document.getElementById("heroSection");
    const h1 = document.getElementById('heroName');
    const p = document.getElementById('heroDescription');
    const button = document.getElementById('toggleBtn');

    // Change background image and text content
    if (isIronMan) {
      hero.style.backgroundImage = "url('first.png')"; // Doctor Doom
      h1.textContent = "Doctor Doom";
      p.textContent = "Doctor Doom is a supervillain appearing in American comic books published by Marvel Comics.";
    } else {
      hero.style.backgroundImage = "url('second.png')"; // Iron Man
      h1.textContent = "Iron Man";
      p.textContent = "Iron Man is a superhero appearing in American comic books published by Marvel Comics.";
    }

    // Apply styles (same for both heroes)
    h1.style.color = "crimson";
    h1.style.fontSize = "36px";
    h1.style.fontFamily = "'Truculenta', sans-serif";
    h1.style.textTransform = "uppercase";
    h1.style.textShadow = "2px 2px 4px black";

    p.style.color = "#f0f0f0";
    p.style.fontSize = "18px";
    p.style.fontFamily = "'Truculenta', sans-serif";
    p.style.lineHeight = "1.6";
    p.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    p.style.padding = "10px";
    p.style.borderRadius = "8px";

      // 🔘 Style for Button
  button.style.backgroundColor = "#e60000";
  button.style.color = "#fff";   
  button.style.fontWeight = "bold";
  button.style.padding = "10px 20px";
  button.style.border = "none";
  button.style.borderRadius = "8px";
  button.style.fontFamily = "'Truculenta', sans-serif";
  button.style.cursor = "pointer";
  button.style.marginTop = "20px";
  button.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.5)";
  button.style.transition = "all 0.3s ease";

    
    isIronMan = !isIronMan; // toggle
  }

