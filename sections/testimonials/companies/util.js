const testimonials = [{
    title: 'Fort Health',
    description: 'Fort Health: Virtual Mental Health For Children And Adolescents',
    img: '/assets/companies/fort_health.jpg',
    url: 'https://www.forthealth.com',
    width: 160
  }, {
    title: 'Bottomline',
    description: 'Bottomline: Business Payment Transformation',
    img: '/assets/companies/bottomline.png',
    url: 'https://www.bottomline.com',
    width: 339
  }, {
    title: 'DISA',
    description: 'DISA: Screening, drug and alcohol testing, and compliance solutions',
    img: '/assets/companies/disa.svg',
    url: 'https://disa.com/',
    width: 339
  }, {
    title: 'All of Us Research Program',
    description: 'All of Us Research Program: National Institutes of Health (NIH)',
    img: '/assets/companies/all_of_us.png',
    url: 'https://allofus.nih.gov',
    width: 287
  }, {
    title: 'Emerson Collective',
    description: 'Emerson Collective: Investment company',
    img: '/assets/companies/emerson_collective.png',
    url: 'https://www.emersoncollective.com/',
    width: 339
  }, {
    title: 'WaterBit',
    description: 'WaterBit: Farm equipment supplier ',
    img: '/assets/companies/waterbit.png',
    url: 'https://www.linkedin.com/company/waterbit-inc',
    width: 300
}];

const tesimonialNodes = testimonials.map(({ title, description, url, img, width }) => (
  `<a class="card" href="${url}" target="_blank" rel="norefferer">
    <img src="${img}" alt="${title} logo" title="${title}" width=${width} height="85" />
    <p class="project-description">${description}</p>
  </a>`
)).join('');

addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('testimonials-list').innerHTML = tesimonialNodes;
  }, 500);
});
