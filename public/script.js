fetch("/api/spots")
  .then(response => response.json())
  .then(data => {
    fetch("/api/spots")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("spots-container");

    data.forEach(spot => {
      const card = document.createElement("article");

      card.innerHTML = `
  <h2>${spot.name}</h2>
  <p><strong>Location:</strong> ${spot.location}</p>
  <p><strong>Noise Level:</strong> ${spot.noiseLevel}</p>
  <p><strong>Best For:</strong> ${spot.bestFor}</p>

  <a href="/spots/${spot.slug}">View Details</a>
`;

      container.appendChild(card);
    });
  });
  });