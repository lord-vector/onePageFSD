async function fetchHeaderData() {
  try {
    const fetchedRawData = await fetch("http://localhost:5000/home");
    const getJsonData = await fetchedRawData.json();
    console.log(getJsonData);
    populateHeader(getJsonData);
  } catch (err) {
    console.log(err);
  }
}

fetchHeaderData();

const populateHeader = (data) => {
  const headerTitle = document.getElementById("homeHeader");
  const headerButton = document.getElementById("homeHeaderButton");
  const x = `<h1>${data.header}<h1><h2>${data.subHeader}</h2>`;
  const y = `<a href="${data.button.link}" class="btn-get-started scrollto">${data.button.text}</a>`;
  const fragmentHead = document.createRange().createContextualFragment(x);
  const fragmentButton = document.createRange().createContextualFragment(y);
  headerTitle.appendChild(fragmentHead);
  headerButton.appendChild(fragmentButton);
};
