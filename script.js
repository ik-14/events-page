const eventObjects = [
  {ID: 'event1', title:'Ismails 18th', description: 'This event is Ismails 18th birthday party!', eventImg:'https://i.pinimg.com/564x/65/b4/d5/65b4d58582ce42553d83ac81ed069f73.jpg', eventDate: new Date(2023,0,14) },
  {ID: 'event2', title:'Ismails 19th', description: 'This event is Ismails 19th birthday party!', eventImg:'https://i.pinimg.com/564x/8d/10/3b/8d103b8db53459a5b753ccba5d973cc8.jpg', eventDate: new Date(2024,0,14) },
  {ID: 'event3', title:'Ismails 20th', description: 'This event is Ismails 20th birthday party!', eventImg:'https://i.pinimg.com/564x/9e/4c/f5/9e4cf58ce6d48a27feddddf8122b0b15.jpg', eventDate: new Date(2025,0,14) },
  {ID: 'event4', title:'Ismails 21st', description: 'This event is Ismails 21st birthday party!', eventImg:'https://i.pinimg.com/564x/dd/c9/61/ddc9618aa3409707c5f5d903ff8c5af4.jpg', eventDate: new Date(2026,0,14) },
  {ID: 'event5', title:'Ismails 22nd', description: 'This event is Ismails 22nd birthday party!', eventImg:'https://i.pinimg.com/564x/7a/cf/88/7acf88e8a71cebd3d14636a9bfa3364a.jpg', eventDate: new Date(2027,0,14) },
  {ID: 'event6', title:'Ismails 23rd', description: 'This event is Ismails 23rd birthday party!', eventImg:'https://i.pinimg.com/564x/c3/5d/28/c35d2879b58b114e99d2c8a4d5998603.jpg', eventDate: new Date(2028,0,14) },
  {ID: 'event7', title:'Ismails 24th', description: 'This event is Ismails 24th birthday party!', eventImg:'https://i.pinimg.com/564x/0f/9c/53/0f9c53fd81c756042050fe054172a2dd.jpg', eventDate: new Date(2029,0,14) },
  {ID: 'event8', title:'Ismails 25th', description: 'This event is Ismails 25th birthday party!', eventImg:'https://i.pinimg.com/564x/93/96/a2/9396a27314f597ec84452d4094a4822d.jpg', eventDate: new Date(2030,0,14) },
  {ID: 'event9', title:'Ismails 26th', description: 'This event is Ismails 26th birthday party!', eventImg:'https://i.pinimg.com/564x/a7/10/35/a710358a9a2f28487399533169ee5c59.jpg', eventDate: new Date(2031,0,14) },
  {ID: 'event10', title:'Ismails 27th', description: 'This event is Ismails 27th birthday party!!', eventImg:'https://i.pinimg.com/564x/69/14/51/6914519b740eea6651b8f32c61be7004.jpg' , eventDate: new Date(2032,0,14)},
  {ID: 'event11', title:'Ismails 28th', description: 'This event is Ismails 28th birthday party!!', eventImg:'https://i.pinimg.com/564x/36/58/b4/3658b4fe74c4cfe740ec25b708343fb0.jpg' , eventDate: new Date(2033,0,14)},
  {ID: 'event12', title:'Ismails 29th', description: 'This event is Ismails 29th birthday party!!', eventImg:'https://i.pinimg.com/564x/77/ed/00/77ed00aaba7d206c865bf418f4435305.jpg' , eventDate: new Date(2034,0,14)},
]

const eventsSection = document.querySelector('.events-cont')

function addEvent(ID, title, description, eventImg, eventDate) {
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', ID)

  const newTitle = document.createElement('h2')
  newTitle.innerHTML = title

  const newP = document.createElement('p')
  newP.innerHTML =  description
  const newP2 = document.createElement('p')
  newP2.innerText =  'Click here to show date'

  const newDate = document.createElement('h3')
  newDate.innerHTML = eventDate
  newDate.classList.add('date')

  const newImg = document.createElement('img')
  newImg.setAttribute('src', eventImg)

  newImg.classList.add('images')
  newDiv.classList.add('event-card-light')
  newP2.classList.add('bold-text')
  
    newP2.addEventListener('click', () => {
      newDiv.append(newDate)
    })


    newDiv.append(newTitle, newP, newP2, newImg)
    eventsSection.appendChild(newDiv)
}


function dark() {
  const header = document.querySelector('header')
  header.classList.toggle('header-dark')

  const filterTitle = document.querySelector('.filter-title')
  filterTitle.classList.toggle('filter-title-dark')

  const button = document.querySelector('button')
  button.classList.toggle('button-dark')

  const cont = document.querySelector('.events-cont')
  cont.classList.toggle('events-cont-dark')

  const body = document.querySelector('body')
  body.classList.toggle('body-dark')
}



for (let index of eventObjects) {
  addEvent(index.ID, index.title, index.description, index.eventImg, index.eventDate)
}