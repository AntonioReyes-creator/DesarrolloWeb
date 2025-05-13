async function loadEmployees() {
  const response = await fetch("empleados.json");
  const data = await response.json();
  displayEmployees(data.empleados);
}

function displayEmployees(filteredEmployees) {
  const container = document.getElementById("employeeList");
  container.innerHTML = "";
filteredEmployees.forEach((emp) => {
  const card = document.createElement("div");
  const photo = document.createElement("div");
  const detail = document.createElement("div");

  card.classList.add("employee-card");
  photo.classList.add("photo-employee");
  detail.classList.add("detail-employee");

  photo.innerHTML = `
    <img src="${emp.img || 'default.jpg'}" alt="${emp.nombre}">
  `;

  detail.innerHTML = `
    <h3>${emp.name}</h3>
    <p><strong>Puesto:</strong> ${emp.area}</p>
    <p><strong>Anexo:</strong> ${emp.anexo}</p>
    <p><strong>Phone:</strong> ${emp.phone}</p>
  `;

  card.appendChild(photo);
  card.appendChild(detail);
  container.appendChild(card);
});


}

async function filterEmployees() {
  const selectedArea = document.getElementById("areaFilter").value;
  const response = await fetch("empleados.json");
  const data = await response.json();

  const filtered = selectedArea
    ? data.empleados.filter((emp) => emp.area === selectedArea)
    : data.empleados;

  displayEmployees(filtered);
}


window.onload = () => {
  loadEmployees();
};