$(document).ready(function() {
	// Slider
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200,
		responsive: true,
		pager: true
	});

	// Posts
	var posts = [
		{
			title: 'Prueba de titulo 1',
			date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur possimus quidem. Facere soluta commodi recusandae eligendi deleniti debitis cumque ullam, perferendis dolorum ducimus odio temporibus. Enim sequi libero excepturi.'
		},
		{
			title: 'Prueba de titulo 2',
			date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur possimus quidem. Facere soluta commodi recusandae eligendi deleniti debitis cumque ullam, perferendis dolorum ducimus odio temporibus. Enim sequi libero excepturi.'
		},
		{
			title: 'Prueba de titulo 3',
			date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur possimus quidem. Facere soluta commodi recusandae eligendi deleniti debitis cumque ullam, perferendis dolorum ducimus odio temporibus. Enim sequi libero excepturi.'
		},
		{
			title: 'Prueba de titulo 4',
			date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur possimus quidem. Facere soluta commodi recusandae eligendi deleniti debitis cumque ullam, perferendis dolorum ducimus odio temporibus. Enim sequi libero excepturi.'
		},
	];

	posts.forEach((item, index) => {
		var post = `
		<article class="post">
			<h2>${item.title}</h2>
			<span class="date">${item.date}</span>
			<p>${item.content}</p>
			<a href="#" class="button-more">Leer más</a>
		</article>
		`;

		$("#posts").append(post);
	});

	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function() {
		theme.attr("href", "css/green.css")
	});

	$("#to-red").click(function() {
		theme.attr("href", "css/red.css")
	});

	$("#to-blue").click(function() {
		theme.attr("href", "css/blue.css")
	});
});