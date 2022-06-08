let main_navbar = document.querySelector("#navbarBasicExample")
let nabar_burger = document.querySelector("#nabar_burger")
 document.querySelector("#Features_navbar_link")

let Features_navbar_triger = document.querySelector("#Features_navbar_link")
let Company_navbar_triger = document.querySelector("#Company_navbar_link")
let Features_navbar_dropdown = document.querySelector("#Features_navbar_dropdown")
let Company_navbar_dropdown = document.querySelector("#Company_navbar_dropdown")
nabar_burger.addEventListener('click', () => {
   main_navbar.classList.toggle('is_active') 
})

const toggleDropdown = (triger, dropdown) => {
    triger.addEventListener('click', () => {
        dropdown.classList.toggle('is_dropdown_active');
    })
}
const closeDropdown = ( dropdown) => {   
    window.addEventListener('click', (e) => {        
    if (e.taget.closest(dropdown)) {
            dropdown.classList.remove('is_dropdown_active');;
        } 
    })
}


closeDropdown(Features_navbar_dropdown)
closeDropdown(Company_navbar_dropdown)

toggleDropdown(Features_navbar_triger, Features_navbar_dropdown)
toggleDropdown(Company_navbar_triger, Company_navbar_dropdown)