// Script untuk dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector('.dropbtn');
    dropdownBtn.addEventListener('click', function () {
       document.querySelector('.dropdown-content').classList.toggle('show');
    });
 
    window.onclick = function (event) {
       if (!event.target.matches('.dropbtn')) {
          const dropdowns = document.getElementsByClassName('dropdown-content');
          for (let i = 0; i < dropdowns.length; i++) {
             const openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
             }
          }
       }
    };
 });
 