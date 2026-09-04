//Top 5 movies
let topMovies = [{id: 0, title: "The Shawshank Redemption", year: 1994, price: "$9.9",
    image_url: "https://www.filmsite.org/posters/shawshankredemption.jpg"},
{id: 1, title: "The Godfather", year: 1992, price: "$19.9",
image_url: "https://media.timeout.com/images/105455970/750/562/image.jpg"},
{id: 2, title: "The Dark Knight", year: 2008, price: "$29.9",
image_url: "https://upload.wikimedia.org/wikipedia/sco/8/8a/Dark_Knight.jpg"},
{id: 3, title: "Star Wars", year: 1977, price: "$39.9",
image_url: "https://media.timeout.com/images/105456000/750/562/image.jpg"},
{id: 4, title: " Schindler\'s List", year: 1993, price: "$49.9",
image_url: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"},
{id: 5, title: "Talladega Nights: The Ballad of Ricky Bobby", year: 2006, price: "$59.9",
image_url: "https://image.tmdb.org/t/p/original/3iCiTqsmJz1mO85AHzTiHNkRmb6.jpg"},
{id: 5, title: "Super Troopers", year: 2002, price: "$69.9",
image_url: "https://image.tmdb.org/t/p/original/yJyxPItcLNVfYr7idOphQTmQ9hK.jpg"}
];

//----------------------------------------
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
const nextSlide = () => {
    //Change the slide_index
slideIndex < topMovies.length - 1 ? slideIndex++ : (slideIndex = 0);
    //Change the title, year, price and image source accordingly
    document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
document.getElementById("manual-slide-year").innerHTML = topMovies[slideIndex].year;
document.getElementById("manual-slide-price").innerHTML = topMovies[slideIndex].price;
    document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;	
}

const previousSlide = () => {
    //Change the slide_index
slideIndex > 0 ? slideIndex-- : (slideIndex = topMovies.length - 1);
    //Change the title, year, price and image source accordingly
    document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
    document.getElementById("manual-slide-year").innerHTML = topMovies[slideIndex].year;
    document.getElementById("manual-slide-price").innerHTML = topMovies[slideIndex].price;
    document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;		
}

//------------------------------------------------
//Slideshow: Automatic
let autoSlideIndex = 0;

let autoSlideShow = () => {
//Change the slide_index
    if (autoSlideIndex < topMovies.length - 1) {
        autoSlideIndex++;
    } else {
        autoSlideIndex = 0;
    }
    //Change the title, year, price and image source accordingly
    document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
document.getElementById("auto-slide-year").innerHTML = topMovies[autoSlideIndex].year;
document.getElementById("auto-slide-price").innerHTML = topMovies[autoSlideIndex].price;
    document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
    //Wait 2 seconds
    setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}
autoSlideShow();


// Load saved preferences
if (localStorage.getItem("color_preference") != null) {
    document.getElementById("customization-card").style.backgroundColor=localStorage.getItem("color_preference");
}    
//Change background color and save    
const changeColor = () => {
    //Get the selected color
    let selectedBGColor = document.getElementById("colorOption").value;
    //Change the background color accordingly
    document.getElementById("customization-card").style.backgroundColor = selectedBGColor;  
    //Store this selected color locally & permanently on client side            
    localStorage.setItem("color_preference", selectedBGColor);                             
}   

//------------------------------------------
// Load saved preferences
if (localStorage.getItem("size_preference") != null) {
    document.getElementById("customization-card").style.fontSize = localStorage.getItem("size_preference");
}       
//Change text size and save
const customizeText = () => {
    let selectedTextSize = document.getElementById("sizeOption").value;
    document.getElementById("customization-card").style.fontSize = selectedTextSize;
    localStorage.setItem("size_preference", selectedTextSize);  
}   

//------------------------------------------
//Dark mode / white mode
// Load saved preference
const themeToggle = document.getElementById('themeToggle');
const STORAGE_KEY = 'themePreference';
const loadTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
    if (savedTheme === 'dark') {
    document.getElementById("customization-card").classList.add('dark-mode');
    themeToggle.checked = true;
    }
}
loadTheme();
// Save and apply theme
const setTheme = (theme) => {
    theme === 'dark' ? document.getElementById("customization-card").classList.add('dark-mode') : document.getElementById("customization-card").classList.remove('dark-mode');
    localStorage.setItem(STORAGE_KEY, theme);
}
//Toggle event
themeToggle.addEventListener('change', () => {
    const theme = themeToggle.checked ? 'dark' : 'light';
    setTheme(theme);
});