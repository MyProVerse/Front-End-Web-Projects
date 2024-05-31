// price-range-slide script
$(document).ready(function () {

    $('#priceRangeSlider').slider({
        min: 12,
        max: 15000,
        step: 14,
        value: [12, 15000], // Initial range values
    });

    // Event handler for slider value change
    $('#priceRangeSlider').on('slide', function (slideEvt) {
        // Update the displayed range values
        $('#priceRangeValues').text('$' + slideEvt.value[0] + ' - $' + slideEvt.value[1]);
    });
});



// view-types and buttons script
let grid_span_item = document.querySelectorAll('.grid-span-item');
let product_cards = document.querySelector('.product-cards');
let list_view = document.querySelector('.list-view');
let grid_view = document.querySelector('.grid-view');

grid_span_item[0].addEventListener('click', () => {
    grid_span_item[0].classList.add('active-bar');
    grid_span_item[2].classList.remove('active-bar');
    grid_span_item[1].classList.remove('active-bar');
    product_cards.classList.add('span-2');
    product_cards.classList.remove('span-3');
    product_cards.classList.remove('span-4');



});

grid_span_item[1].addEventListener('click', () => {
    grid_span_item[1].classList.add('active-bar');
    grid_span_item[2].classList.remove('active-bar');
    grid_span_item[0].classList.remove('active-bar');
    product_cards.classList.remove('span-2');
    product_cards.classList.add('span-3');
    product_cards.classList.remove('span-4');




});
grid_span_item[2].addEventListener('click', () => {
    grid_span_item[2].classList.add('active-bar');
    grid_span_item[1].classList.remove('active-bar');
    grid_span_item[0].classList.remove('active-bar');
    product_cards.classList.remove('span-2');
    product_cards.classList.remove('span-3');
    product_cards.classList.add('span-4');



});
grid_view.addEventListener('click', () => {
    grid_view.classList.add('current-view');
    list_view.classList.remove('current-view');
    product_cards.classList.add('grid-cards');
    product_cards.classList.remove('flex');

    grid_span_item.forEach((item, index) => {
        if (item.classList.contains('active-bar')) {
            if (index === 0) {
                product_cards.classList.add('span-2');
                product_cards.classList.remove('span-3');
                product_cards.classList.remove('span-4');
            } else if (index === 1) {
                product_cards.classList.remove('span-2');
                product_cards.classList.add('span-3');
                product_cards.classList.remove('span-4');
            } else if (index === 2) {
                product_cards.classList.remove('span-2');
                product_cards.classList.remove('span-3');
                product_cards.classList.add('span-4');
            }
        }
    });


});

list_view.addEventListener('click', () => {
    grid_view.classList.remove('current-view');
    list_view.classList.add('current-view');
    product_cards.classList.remove('grid-cards');
    product_cards.classList.remove('span-2');
    product_cards.classList.remove('span-3');
    product_cards.classList.remove('span-4');
    product_cards.classList.add('flex');
});

// category-filter script
const categoryFilters = document.querySelectorAll('.category-filter');

categoryFilters.forEach(categoryFilter => {
    categoryFilter.addEventListener('click', () => {
        event.preventDefault();

        categoryFilters.forEach(item => {
            item.classList.remove('active-link');
        });

        categoryFilter.classList.add('active-link');
    });
});


// items per page select-form script
const selectTrigger = document.getElementById('selectTrigger');
const selectOptions = document.getElementById('selectOptions');
const optionItems = selectOptions.querySelectorAll('li');

selectTrigger.addEventListener('click', () => {
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
    // Toggle the arrow icon when clicked
    const arrowIcon = selectTrigger.querySelector('.arrow-icon i');
    arrowIcon.classList.toggle('fa-angle-down');
    arrowIcon.classList.toggle('fa-angle-up');
});

selectOptions.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        // Reset styles for all options
        optionItems.forEach((item) => {
            item.classList.remove('selected');
        });

        // Set styles for the selected option
        const selectedOption = event.target;
        selectedOption.classList.add('selected');
        selectTrigger.querySelector('.d-block').textContent = selectedOption.textContent;
        selectOptions.style.display = 'none';

        // Reset arrow icon rotation
        const arrowIcon = selectTrigger.querySelector('.arrow-icon i');
        arrowIcon.classList.remove('fa-angle-up');
        arrowIcon.classList.add('fa-angle-down');
    }
});

// Listen for clicks outside the custom-select to close the options
document.addEventListener('click', (event) => {
    if (!selectTrigger.contains(event.target) && !selectOptions.contains(event.target)) {
        selectOptions.style.display = 'none';

        // Reset arrow icon rotation if something is selected
        const arrowIcon = selectTrigger.querySelector('.arrow-icon i');
        arrowIcon.classList.remove('fa-angle-up');
        arrowIcon.classList.add('fa-angle-down');
    }
});