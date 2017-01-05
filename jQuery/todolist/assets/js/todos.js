//Check off specific todos by clicking
$("ul").on("click", "li", function () {
	
	$(this).toggleClass('completed');

});

//Click on X to delete
$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+todoText+"</li>");

		$(this).val("");
	}
});
$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
});