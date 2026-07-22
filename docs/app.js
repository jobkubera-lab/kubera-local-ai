const routes = {
  newResident: {
    title: 'New resident pathway',
    text: 'A simple route for someone who has just arrived in Merton and does not yet understand the local system.',
    steps: [
      'Confirm right to work and keep your share code ready.',
      'Register with a GP and find the nearest pharmacy.',
      'Apply for National Insurance if needed.',
      'Join the local library for internet, printing and learning support.',
      'Contact Employ Merton for job search support.',
      'Use community organisations for language, digital and wellbeing support.'
    ],
    links: [
      ['Employ Merton', 'https://www.merton.gov.uk/employ-merton'],
      ['Merton libraries', 'https://www.merton.gov.uk/leisure-recreation-and-culture/libraries'],
      ['Merton Council', 'https://www.merton.gov.uk/']
    ]
  },
  work: {
    title: 'Employment pathway',
    text: 'For residents who need work, apprenticeship routes, volunteering or help with applications.',
    steps: [
      'Prepare a UK-style CV and short supporting statement.',
      'Use AI carefully to explain job descriptions and prepare interview answers.',
      'Check Work for Merton and Employ Merton.',
      'Ask about apprenticeships or part-time entry routes.',
      'Consider volunteering first to build UK references.',
      'Track applications in a simple spreadsheet.'
    ],
    links: [
      ['Work for Merton', 'https://www.merton.gov.uk/jobs'],
      ['Employ Merton', 'https://www.merton.gov.uk/employ-merton'],
      ['Merton Connected volunteering', 'https://www.mertonconnected.co.uk/']
    ]
  },
  vision: {
    title: 'Accessible employment support pathway',
    text: 'For blind or partially sighted people who need job-search, digital or accessibility support.',
    steps: [
      'Contact Merton Vision for local support and IT help.',
      'Contact TPT Works For Me for employment-focused guidance.',
      'Ask about reasonable adjustments and Access to Work.',
      'Use screen-reader-friendly CV templates and large-text checklists.',
      'Practise interviews with accessible AI prompts.',
      'Keep human support involved for sensitive decisions.'
    ],
    links: [
      ['Merton Vision', 'https://mertonvision.org.uk/'],
      ['TPT Works For Me', 'https://www.pocklington.org.uk/employment/works-for-me-employment-programme/'],
      ['Access to Work', 'https://www.gov.uk/access-to-work']
    ]
  },
  digital: {
    title: 'Digital and AI support pathway',
    text: 'A safe way to introduce AI tools for job search, forms and learning without replacing human advice.',
    steps: [
      'Teach basic AI use: CV, cover letter, interview practice and email drafting.',
      'Explain privacy: never paste passports, bank details or medical records into public AI tools.',
      'Create plain-English checklists for council and job websites.',
      'Test pages with keyboard navigation and screen readers.',
      'Use libraries or community centres for digital access.',
      'Escalate complex cases to official services.'
    ],
    links: [
      ['Merton libraries', 'https://www.merton.gov.uk/leisure-recreation-and-culture/libraries'],
      ['Merton Vision', 'https://mertonvision.org.uk/'],
      ['Thomas Pocklington Trust', 'https://www.pocklington.org.uk/']
    ]
  }
};

const output = document.querySelector('#assistant-output');
document.querySelectorAll('[data-path]').forEach((button) => {
  button.addEventListener('click', () => {
    const route = routes[button.dataset.path];
    output.innerHTML = `
      <h3>${route.title}</h3>
      <p>${route.text}</p>
      <ol>${route.steps.map((step) => `<li>${step}</li>`).join('')}</ol>
      <h4>Useful links</h4>
      <ul>${route.links.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noreferrer">${label}</a></li>`).join('')}</ul>
    `;
  });
});

const supportPoints = [
  {
    name: 'Merton Vision',
    category: 'accessibility',
    address: '67 Clarendon Road, Colliers Wood, SW19 2DX',
    lat: 51.4191,
    lng: -0.1788,
    url: 'https://mertonvision.org.uk/'
  },
  {
    name: 'Merton Civic Centre / Employ Merton signposting',
    category: 'council',
    address: 'London Road, Morden, SM4',
    lat: 51.4015,
    lng: -0.1948,
    url: 'https://www.merton.gov.uk/employ-merton'
  },
  {
    name: 'Mitcham Library',
    category: 'library',
    address: 'Mitcham, CR4',
    lat: 51.4027,
    lng: -0.1682,
    url: 'https://www.merton.gov.uk/leisure-recreation-and-culture/libraries'
  },
  {
    name: 'Colliers Wood Library',
    category: 'library',
    address: 'Colliers Wood, SW19',
    lat: 51.4180,
    lng: -0.1784,
    url: 'https://www.merton.gov.uk/leisure-recreation-and-culture/libraries'
  },
  {
    name: 'TPT Works For Me',
    category: 'employment',
    address: 'Online / national employment programme',
    lat: 51.505,
    lng: -0.09,
    url: 'https://www.pocklington.org.uk/employment/works-for-me-employment-programme/'
  },
  {
    name: 'Merton Connected',
    category: 'employment',
    address: 'Volunteering and community support in Merton',
    lat: 51.410,
    lng: -0.199,
    url: 'https://www.mertonconnected.co.uk/'
  }
];

const map = L.map('mapCanvas', { scrollWheelZoom: false }).setView([51.410, -0.183], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let markers = [];
function renderMarkers(filter = 'all') {
  markers.forEach((marker) => marker.remove());
  markers = [];
  supportPoints
    .filter((point) => filter === 'all' || point.category === filter)
    .forEach((point) => {
      const marker = L.marker([point.lat, point.lng]).addTo(map);
      marker.bindPopup(`
        <strong>${point.name}</strong><br>
        ${point.address}<br>
        <a href="${point.url}" target="_blank" rel="noreferrer">Official link</a>
      `);
      markers.push(marker);
    });
}
renderMarkers();

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderMarkers(button.dataset.filter);
  });
});