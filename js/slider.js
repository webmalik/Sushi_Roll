const slider = new Siema({
	selector: '.slider',
	loop: true,
	onChange: updatePagination,
	duration: 1000,
	perPage: 1,
	easing: 'ease-out',
});

function updatePagination() {
	const paginationItems = Array.from(document.querySelectorAll('.slider-pagination li'));
	paginationItems.map((item, index) => {
		if (index === slider.currentSlide) {
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	});
}

const paginationContainer = document.querySelector('.slider-pagination');
for (let i = 0; i < slider.innerElements.length; i++) {
	const paginationItem = document.createElement('li');
	paginationItem.addEventListener('click', () => {
		slider.goTo(i);
	});
	paginationContainer.appendChild(paginationItem);
}

function startAutoPlay(intervalTime) {
	let autoPlayInterval = setInterval(function () {
		slider.next();
		updatePagination();
	}, intervalTime);
}
updatePagination();
startAutoPlay(5000);


