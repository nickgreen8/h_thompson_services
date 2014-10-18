//Define class
Slider = function() { this.create(); };
Slider.prototype = function() {
	var	_container,		// Image slider holder element
		_slider,		// Instance of itself
		_images = [],	// Array of images

	//Constructor
	create = function() {
		console.log("Creating an instance of the slider class");

		//Create HTML
		_container = document.createElement("div");
		_container.innerHTML = '<div class="control"><p>&lt;</p></div><div class="control"><p>&gt;</p></div><figure></figure>';

		_slider = this;

		//Delay until the page is fully loaded
		window.onload = function() {
			_slider.buildSlider();
			_slider.addSliderToPage();
		};
	},

	//Build the silder HTML
	buildSlider = function() {
		console.log("Building image slider");

		//Put each image data into class array
		var imgs = document.getElementById('image_slider').getElementsByTagName('li');
		for(var i = 0; i < imgs.length; i++) {
			var img = [imgs[i].getElementsByTagName('img')[0].src, imgs[i].getElementsByTagName('img')[0].alt, imgs[i].getElementsByTagName('img')[0].title];
			_images.push(img);
		}
		_images.push(_images[0]);

		//Add images to slider container
		for(var i = 0; i < _images.length; i++) {
			//Create image
			var img = document.createElement('img');
			img.setAttribute('src', _images[i][0]);
			img.setAttribute('alt', _images[i][1]);
			img.setAttribute('title', _images[i][2]);

			//Add element to container
			_container.getElementsByTagName('figure')[0].appendChild(img);
		}
	},

	//Add slider to DOM page element
	addSliderToPage = function() {
		console.log("Adding slider to page");

		//Replace elements with slider HTML
		document.getElementById('image_slider').innerHTML = _container.innerHTML;

		//Add animation class to figure
		document.getElementById('image_slider').getElementsByTagName('figure')[0].className = "images_" + (document.getElementById('image_slider').getElementsByTagName('figure')[0].getElementsByTagName('img').length - 1);
	},

	//To string function
	toString = function() {
		_container.innerHTML;
	};

	return { create: create, buildSlider: buildSlider, addSliderToPage: addSliderToPage, toString: toString };
}();