fetch("bio.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop through the data and create <p> tags
    data.forEach((item) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = item.nama;
      document.body.appendChild(paragraph);
    });
  })
  .catch((error) => console.error("Error:", error));
