const paths = ['landing.html', 'projects.html', 'testimonials.html', 'contact.html'];

paths.forEach((file) => {
  const id = file.split('.')[0];

  fetch(`./sections/${id}/${file}`)
    .then((data) => data.text())
    .then((html) => (document.getElementById(id).innerHTML = html));
});
