const navbarLink = document.querySelector('.navbar-links');
const modalBtn = document.querySelector('.hamburger');
const body = document.querySelector('body');
const showBtn = document.querySelector('#showDetails');
const btnCollapse = document.querySelector('.closeBtn');
const head = document.querySelector('header');
let screenWidth = window.innerWidth;

const cardInfo = [
  {
    title: 'Tonic',
    details: [
      'CANOPY',
      'Back End Dev',
      '2015',
    ],
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: [
      './images/Tag.png',
      './images/Tag (1).png',
      './images/Tag(2).png',
    ],
    src: 'img1',
    url: [
      './images/SnapshootPortfolio.png',
      './imagefile/SnapshootPortfolio.png',
    ],
    buttons: [
      [
        ' https://michaelkith.github.io/portifolio1/',
        'https://github.com/MICHAELKITH/desktop-mobile-version',
      ],
      [
        './imagefile/Live_btn.png',
        './imagefile/Source_Btn.png',
      ],
    ],
  },
  {
    title: 'Multi Post Stories',
    details: [
      'Facebook',
      'Full Stack Dev',
      '2015',
    ],
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: [
      './images/Tag.png',
      './images/Tag (1).png',
      './images/Tag(2).png',
      './imagefile/Tag.png',
    ],
    src: 'img2',
    url: [
      './images/SnapshootPortfolio-2.png',
      './imagefile/SnapshootPortfolio-1.png',
    ],
    buttons: [
      [
        ' https://michaelkith.github.io/portifolio1/',
        'https://github.com/MICHAELKITH/desktop-mobile-version',
      ],
      [
        './imagefile/Live_btn.png',
        './imagefile/Source_Btn.png',
      ],
    ],
  },
  {
    title: 'Facebook 360',
    details:
      [
        'Facebook',
        'Full Stack Dev',
        '2015',
      ],
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: [
      './images/Tag.png',
      './images/Tag (1).png',
      './images/Tag(2).png',
      './imagefile/Tag.png',
    ],
    src: 'img3',
    url: [
      './images/SnapshootPortfolio-1.png',
      './imagefile/SnapshootPortfolio-2.png',
    ],
    buttons: [
      [
        ' https://michaelkith.github.io/portifolio1/',
        'https://github.com/MICHAELKITH/desktop-mobile-version',
      ],
      [
        './imagefile/Live_btn.png',
        './imagefile/Source_Btn.png',
      ],
    ],
  },
  {
    title: 'Uber Navigation',
    details: [
      'UBER',
      'Lead Developer',
      '2015',
    ],
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: [
      './images/Tag.png',
      './images/Tag (1).png',
      './images/Tag(2).png',
      './imagefile/Tag.png',
    ],
    src: 'img4',
    url: [
      './images/SnapshootPortfolio-3.png',
      './imagefile/SnapshootPortfolio-3.png',
    ],
    buttons: [
      [
        ' https://michaelkith.github.io/portifolio1/',
        'https://github.com/MICHAELKITH/desktop-mobile-version',
      ],
      [
        './imagefile/Live_btn.png',
        './imagefile/Source_Btn.png',
      ],
    ],
  },
];

// Hamburger

function remAttributes() {
  navbarLink.classList.remove('active');
  modalBtn.classList.remove('active');
  body.classList.remove('b_active');
}

// Change values when window is resized
window.onresize = () => {
  screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    remAttributes();
  }
};

const wrap = document.querySelector('.wrapper');
btnCollapse.addEventListener('click',
  () => {
    showBtn.classList.remove('activate');
    head.classList.remove('active');
    wrap.classList.remove('active');
  });

const dataName = [
  'Tonic',
  'Multi',
  'Facebook',
  'Uber',
];
let i = 0;

// Functions
const addname = (elem) => {
  elem.dataset.name = dataName[i];
  i += 1;
};

const createElem = (name, cName) => {
  const d = document.createElement(name);
  if (cName) {
    d.classList.add(cName);
  }
  return d;
};

const createParent = (name) => {
  const d = document.createElement('div');
  d.classList.add(name);
  addname(d);
  return d;
};

// Dynamic Data Addition to Grid
cardInfo.forEach((item) => {
  const section = document.getElementById('work');
  const d = createParent('work-item');
  section.appendChild(d);
  const thumb = createElem('div');
  thumb.classList.add('thumbnail');
  let a = thumb.appendChild(createElem('a'));
  a.href = '#';
  const img = a.appendChild(createElem('img',
    item.src));
  img.alt = 'Image-Missing';
  d.appendChild(thumb);
  const d1 = d.appendChild(createElem('div',
    'primary-text'));
  const title = d1.appendChild(createElem('h1',
    'title'));
  title.textContent = item.title;
  let ul = d1.appendChild(createElem('ul',
    'frame-2'));
  let li = createElem('li',
    'client');
  const [
    tit,
    det1,
    det2,
  ] = item.details;
  li.textContent = tit;
  ul.appendChild(li);
  const ul1 = createElem('ul',
    'inside');
  li = createElem('li',
    'details');
  li.textContent = det1;
  ul1.appendChild(li);
  li = createElem('li',
    'details');
  li.textContent = det2;
  ul1.appendChild(li);
  ul.appendChild(ul1);
  const p = d1.appendChild(createElem('p',
    'description'));
  p.textContent = item.info;
  ul = d1.appendChild(createElem('ul',
    'tags'));
  for (let ind = 0; ind < item.tech.length; ind += 1) {
    li = document.createElement('li');
    const img1 = li.appendChild(document.createElement('img'));
    img1.src = item.tech[ind];
    ul.appendChild(li);
  }
  a = d1.appendChild(createElem('a',
    'button-two'));
  a.href = '#showmenu';
  a.textContent = 'See Project';
});

// Dynamic Data Addition to Pop-up
const btnExpand = document.querySelectorAll('.button-two');
btnExpand.forEach((button) => {
  button.addEventListener('click',
    (e) => {
      const check = e.target.parentElement.parentElement.dataset.name;
      showBtn.classList.add('activate');
      head.classList.add('active');
      wrap.classList.add('active');
      const title = showBtn.getElementsByClassName('showtitle')[0];
      const thumb = showBtn.getElementsByClassName('showthumbnail')[0];
      const inp = showBtn.querySelector('.showoutside p');
      const inpDetail = showBtn.querySelectorAll('.showinside li');
      const p = showBtn.querySelector('.showtext p');
      const tech = showBtn.querySelectorAll('.showtech');
      const btn = showBtn.querySelectorAll('.showbuttons');
      for (let ind = 0; ind < cardInfo.length; ind += 1) {
        if (cardInfo[ind].title.includes(check)) {
          title.textContent = cardInfo[ind].title;
          const [, u2] = cardInfo[ind].url;
          thumb.children[0].src = u2;
          const tit = cardInfo[ind].details[0];
          inp.textContent = tit;
          for (let j = 0; j < cardInfo[ind].details.length - 1; j += 1) {
            inpDetail[j].textContent = cardInfo[ind].details[j + 1];
          }
          p.textContent = cardInfo[ind].info;
          for (let j = 0; j < cardInfo[ind].tech.length; j += 1) {
            tech[0].children[j].children[0].src = cardInfo[ind].tech[j];
          }
          for (let j = 0; j < cardInfo[ind].buttons.length; j += 1) {
            btn[0].children[1].children[j].children[0].href = cardInfo[ind].buttons[0][j];
            const a1 = cardInfo[ind].buttons[1][j];
            btn[0].children[1].children[j].children[0].children[0].src = a1;
          }
        }
      }
    });
});

const lin = document.querySelectorAll('.navbar-links > li');
function addAttributes() {
  modalBtn.addEventListener('click',
    () => {
      if (screenWidth < 768) {
        navbarLink.classList.toggle('active');
        modalBtn.classList.toggle('active');
        body.classList.toggle('b_active');
        lin.forEach((n) => {
          n.addEventListener('click',
            () => {
              remAttributes();
            });
        });
      } else {
        remAttributes();
      }
    });
}
addAttributes();

const sec = document.querySelectorAll('*');
sec.forEach((section) => {
  section.addEventListener('mouseenter',
    () => {
      const id = section.getAttribute('id');
      if (id === 'about-myself') {
        lin[0].classList.remove('active-page');
        lin[1].classList.add('active-page');
        lin[2].classList.remove('active-page');
      } else if (id === 'contact') {
        lin[0].classList.remove('active-page');
        lin[1].classList.remove('active-page');
        lin[2].classList.add('active-page');
      } else if (id != null) {
        lin[0].classList.add('active-page');
        lin[1].classList.remove('active-page');
        lin[2].classList.remove('active-page');
      }
    });
});
const errorMessage = document.querySelector('.message');
const form = document.querySelector('#myform');
const getEmail = document.querySelector('#email');
const formHtml = document.querySelector('html');

form.onsubmit = (event) => {
  event.preventDefault();
  const emailValue = getEmail.value.toLowerCase();
  if (getEmail.value !== emailValue) {
    errorMessage.classList.add('active');
  } else {
    form.submit();
  }
};

formHtml.onclick = () => {
  errorMessage.classList.remove('active');
};

// local storage

form.addEventListener('input', () => {
  const data = {
    name: document.getElementById('user').value,
    email: document.getElementById('email').value,
    text: document.getElementById('text').value,
  };

  const storeData = JSON.stringify(data);
  localStorage.setItem('mydata', storeData);
});

const getData = JSON.parse(localStorage.getItem('mydata'));
document.getElementById('user').value = getData.name;
document.getElementById('email').value = getData.email;
document.getElementById('text').value = getData.text;