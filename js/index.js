

// Adding in search form 
let signUp = document.createElement('input');
let signUpBtn = document.createElement('button');
signUpBtn.textContent = "Search Here!";

let signUpArea = document.querySelector('.content-destination');
signUpArea.append(signUp);
signUpArea.append(signUpBtn);



// Keydown 
signUp.addEventListener('keydown', e => {
     signUp.style.backgroundColor = "lightgreen";
})

// Focus
signUpBtn.addEventListener('focus', e => {
     signUp.focus();
})

// mouse enter + mouse leave
let navAnchors = document.querySelectorAll('.nav-link');
navAnchors.forEach(item => {
     item.addEventListener('mouseenter', e => {
          item.style.color = "lightblue";
          item.style.transform = 'scale(1.2)';
          item.style.transition = 'transform 0.5s';
     })
     item.addEventListener('mouseleave', e => {
          item.style.color = 'black';
          item.style.transform = 'scale(1.0)';
          item.style.transition = '0';
     })
})

// click
let keydownHeader = document.querySelector('.text-content h2');
keydownHeader.style.border = "1px dashed green";
const cityArray = ['Lets go to New York', 'Lets go to Los Angeles', 'Lets go to Seattle', 'Lets go to San Francisco', 'Lets go where you want to go']

keydownHeader.textContent = "Lets go to ..."
keydownHeader.addEventListener('click', e => {
     keydownHeader.textContent = cityArray.length > 1 ? cityArray.shift() : cityArray[0];
     e.stopPropagation();
})

// wheel
let headerPic = document.querySelector('.intro img');
headerPic.addEventListener('wheel', e => {
     headerPic.style.transform = 'scale(1.1)';
     headerPic.style.overflow = "hidden";
})

//double click
let doubleBtn = document.querySelectorAll('.btn');
doubleBtn.forEach(item =>
     item.addEventListener('dblclick', e => {
          item.textContent = 'Lets Travel!';
          e.stopPropagation();
     })
)

// select
let copyright = document.querySelector('.footer');
copyright.addEventListener('mousedown', e => {
     alert('Copyright Fun Bus 2018 \n \n Lorem ipsum dolor sit amet, nobis audiam iisque in qui, mel illud discere theophrastus id. Putant menandri perpetua an pri, atqui quodsi constituto ei vim. Ei illud assum vim. In ferri fierent duo, aliquando mnesarchum inciderint ex eam, cu unum eruditi sadipscing quo. Id mel adhuc viderer maiestatis, case doming propriae pri id. Nec ut invenire posidonium.');
})


// mouseover + mouseout
let boat = document.querySelector('.img-fluid')
boat.addEventListener('mouseover', e => {
     boat.src = "https://images.unsplash.com/photo-1516495312540-a148643b22d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80";
})
boat.addEventListener('mouseout', e => {
     boat.src = "img/fun.jpg";
})

let map = document.querySelector('.img-content img');
map.addEventListener('mouseover', e => {
     map.src = "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
})
map.addEventListener('mouseout', e => {
     map.src = "img/adventure.jpg";
})



// Stop navigation items from refreshing the page using prevent Default()
navAnchors.forEach(item => {
     item.addEventListener('click', e => {
          e.preventDefault();
     })
})


// stop propagation
// prevents all text from turning red when clicking title
let redBg = document.querySelectorAll('.text-content')
redBg.forEach(item => {
     item.addEventListener('click', e => {
          item.style.color = 'red';
     })
})

// prevents the background from becoming yellow when clicking button 
let destinationBg = document.querySelectorAll('.destination')
destinationBg.forEach(item => {
     item.addEventListener('dblclick', e => {
          item.style.backgroundColor = "yellow";
     })
})
