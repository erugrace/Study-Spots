const path = window.location.pathname;
const slug = path.split("/").pop();

fetch(`/api/spots/${slug}`)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("spot-details");

    container.innerHTML = `
  <img src="${data.image}" alt="${data.name}">

  <h1>${data.name}</h1>

  <p><strong>Location:</strong> ${data.location}</p>

  <p><strong>Noise Level:</strong> ${data.noiselevel}</p>

  <p><strong>WiFi:</strong> ${data.wifi ? "Yes" : "No"}</p>

  <p><strong>Best For:</strong> ${data.bestfor}</p>

  <p><strong>Description:</strong> ${data.description}</p>

  <a href="/" role="button">Back to all study spots</a>
`;
  });
