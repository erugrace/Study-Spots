const path = window.location.pathname;

const slug = path.split("/").pop();

console.log(slug);

fetch(`/api/spots/${slug}`)
  .then(response => response.json())
  .then(data => {
    const path = window.location.pathname;

const slug = path.split("/").pop();

fetch(`/api/spots/${slug}`)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("spot-details");

    container.innerHTML = `
      <h1>${data.name}</h1>

      <p><strong>Location:</strong> ${data.location}</p>

      <p><strong>Noise Level:</strong> ${data.noiseLevel}</p>

      <p><strong>WiFi:</strong> ${data.wifi ? "Yes" : "No"}</p>

      <p><strong>Best For:</strong> ${data.bestFor}</p>

      <p><strong>Description:</strong> ${data.description}</p>

      <a href="/">Back to all study spots</a>
    `;
  });
  });