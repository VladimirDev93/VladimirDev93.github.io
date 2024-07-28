const projets = [{
    title: 'node-changes',
    description: 'Prints the changelog for current or for the specific version of Node.js release to the terminal',
    url: 'https://github.com/unigazer/node-changes',
    label: 'JS'
  }, {
    title: 'instagram-dark-mode',
    description: 'A proper dark mode for Instagram web version',
    url: 'https://github.com/unigazer/instagram-dark-mode',
    label: 'CSS'
  }, {
    title: 'kupujemprodajem-theme',
    description: 'Night and light theme for the popular domestic e-commerce platform',
    url: 'https://github.com/unigazer/kupujemprodajem-theme',
    label: 'CSS'
  }, {
    title: 'n1-dark-mode',
    description: 'Dark mode for the news media portal',
    url: 'https://github.com/unigazer/n1-dark-mode',
    label: 'CSS'
}];

const nodes = projets.map(({ title, description, url, label }) => (
  `<a class="card" href="${url}" target="_blank" rel="norefferer">
    <p class="project-title">${title}</p>
    <p class="project-description">${description}</p>
    <div class="card--label" data-label="${label}">
      <p>${label}</p>
    </div>
  </a>`
)).join('');

addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('projects-list').innerHTML = nodes;
  }, 500);
});
