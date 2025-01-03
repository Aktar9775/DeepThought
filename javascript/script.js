const sideNavbar = document.getElementById('sideNavbar');
const toggleBtn = document.getElementById('toggleBtn');
const headerText = document.getElementById('headerText');
const menuText = document.getElementById('menuText');
toggleBtn.addEventListener('click', () => {
  sideNavbar.classList.toggle('open');
  const isOpen = sideNavbar.classList.contains('open');
  
  // Toggle the header text visibility
  headerText.style.display = isOpen ? 'inline' : 'none';
  menuText.style.display = isOpen ? 'inline' : 'none';
  // Update the toggle button icon
  toggleBtn.src = isOpen 
    ? './image/Screenshot from 2024-06-19 11-58-44 1 (1).svg' 
    : './image/Screenshot from 2024-06-19 11-58-44 1.svg';
});
