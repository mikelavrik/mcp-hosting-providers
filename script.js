const searchInput = document.querySelector("#provider-search");
const filterButtons = document.querySelectorAll("[data-filter]");
const providers = [...document.querySelectorAll(".provider")];
const emptyState = document.querySelector("#empty-state");

let activeFilter = "all";

function matchesFilter(provider) {
  if (activeFilter === "all") return true;
  const tags = provider.dataset.tags || "";
  return tags.includes(activeFilter);
}

function matchesSearch(provider) {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return true;
  return provider.textContent.toLowerCase().includes(query);
}

function updateDirectory() {
  let visibleCount = 0;

  for (const provider of providers) {
    const isVisible = matchesFilter(provider) && matchesSearch(provider);
    provider.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", updateDirectory);

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    for (const current of filterButtons) {
      current.classList.toggle("active", current === button);
    }
    activeFilter = button.dataset.filter;
    updateDirectory();
  });
}
