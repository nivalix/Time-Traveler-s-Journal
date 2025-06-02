document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "/Assets/Images/ticket1.png",
      "Assets/images/ticket2.png",
      "Assets/images/ticket2.png",
      "Assets/images/ticket2.png",
      "Assets/images/ticket2.png",
      "Assets/images/ticket2.png",
      "Assets/images/ticket2.png",
    ];

    function createRow(id, speedClass = "") {
      const row = document.getElementById(id);
      if (!row) {
        console.warn(`Element with id "${id}" not found.`);
        return;
      }
      const scrollDiv = document.createElement('div');
      scrollDiv.className = `scroll ${speedClass}`;

      // Add two copies of the images for seamless looping
      for (let i = 0; i < 2; i++) {
        images.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = "Panel";
          img.className = "panel";
          scrollDiv.appendChild(img);
        });
      }

      row.appendChild(scrollDiv);
    }

    createRow("row1", "fast");
    createRow("row2");
    createRow("row3", "slow");
  });