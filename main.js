const menuBtn = document.querySelector('.bar-toggle');
const menu = document.querySelector('.menu');
const closeBtn = document.getElementById('close-menu');
const navItems = document.querySelectorAll('.nav-item');
const modalBtn =document.querySelectorAll('[data-modal-target]')
const closeModalBtn =document.querySelectorAll('[data-close-btn]')
const overlay = document.getElementById('overlay')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
closeBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});

overlay.addEventListener('click', ()=>{
  const modals =document.querySelectorAll('.modal.active')
  modals.forEach(modal =>{
    closeModal(modal)
  })
})
modalBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})
closeModalBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    const modal = button.closest('.modal-pop')
   closeModal(modal)
  })
})
function openModal(modal){
  if(modal==null)return 
  modal.classList.add("active")
 overlay.classList.add("active")
}
function closeModal(modal){
  if(modal==null)return 
  modal.classList.remove("active")
 overlay.classList.remove("active")
}