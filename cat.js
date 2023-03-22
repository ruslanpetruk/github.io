let filterButton = document.querySelector('.filter-title');
let filter = document.querySelector('.filter-main')
let watchWrapper = document.querySelector('.watch-wrapper')
function filterShow(){
    if(!filter.classList.contains('activeFilter')){
        filter.classList.add('activeFilter');
        watchWrapper.classList.add('activeContent');
    }
    else{ 
        filter.classList.remove('activeFilter'); 
        watchWrapper.classList.remove('watch-wrapper-active');
    }
}
filterButton.addEventListener('click',filterShow);
