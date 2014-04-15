$().ready(function() {
	$("#formatToggle").click(function() {
		$("#formats").slideToggle();
	});

	$("#scrollTo").click(function() {
		$('body').scrollTo("#summary");
	});
});