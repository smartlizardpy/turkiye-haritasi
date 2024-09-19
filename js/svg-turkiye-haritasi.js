function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const nameDiv = document.querySelector('#name');

  // Initially display the name of the selected region (you can choose any province)
  const provinces = element.querySelectorAll('g');
  provinces.forEach(province => {
    const provinceName = province.getAttribute('data-iladi');
    if (provinceName) {
      nameDiv.innerHTML += `<div>${provinceName}</div>`;
    }
  });
}
