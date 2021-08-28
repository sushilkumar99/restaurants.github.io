$(document).ready(function() {

	$(".form").submit(function() {
		
		event.preventDefault();

		$.ajax({
			url: $(this).attr('action'),
			type: $(this).attr('method'),
			dataType: "JSON",
			data: $(this).serialize()
		})
		.done(function(response) {
			if (response.success) 
			{
				if (response.target="") 
				{
					$(".form").append(`<div class="alert alert-success">${response.message}</div>`);
				}
				else{
					alert(response.message);
					document.location.href = response.target;
				}
			}
			else{
				$(".form").prepend().append(`<div class="alert alert-danger mt-2">${response.message}</div>`);
			}
		})
		.fail(function() {
			$(".form").prepend().append(`<div class="alert alert-warning mt-2" role="alert">
				<b><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Error in sending request.</b></div>`);
		})
		
	});





	// sign up page ka password and confirm_password open
		$(".alert").hide();
		$('#frm').submit(function(event) {
	
			let password1 = $("#password").val();
			let confirm_password1 = $("#confirm_password").val();

			if (password1!=confirm_password1) {
				$(".alert").show();
				$("#incorrect_password").html("<b>**incorect password</b>");
				$("#incorrect_password").toggleClass('text-warning');
				event.preventDefault();
			}
			else{
				event.preventDefault();

				$("#incorrect_password").html("");

				$("#frm").submit(function(event) 
				{
					$.ajax({
						url: $(this).attr('action'),
						type: $(this).attr('method'),
						dataType: "JSON",
						data: $(this).serialize()
					})
					.done(function(response) {
						if (response.success) 
						{
							if (response.target="") 
							{
								$("#frm").append(`<div class="alert alert-success">${response.message}</div>`);
							}
							else{
								alert(response.message);
								document.location.href = response.target;
							}
						}
						else{
							$("#frm").prepend().append(`<div class="alert alert-warning mt-2">${response.message}</div>`);
						}
					})
					.fail(function() {
						$("#frm").prepend().append(`<div class="alert alert-warning mt-2" role="alert">
							<b><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Error in sending request.</b></div>`);
					})
				});
			}
		});
	// sign up page ka password and confirm_password close



	// scroll bottom to top
		$('#btntop').click(function(event) {
			$('html,body').animate({scrollTop: 0}, 600);
		});

		$(window).scroll(function(event) {
			if ($(this).scrollTop() > 250) {
				$('#btntop').fadeIn('fast');
			}
			else{
				$('#btntop').fadeOut('fast');
			}
		});


	// Reservation Form tooltip.
		$(function () {
	  		$('[data-toggle="tooltip"]').tooltip()
		})

	// navbar-toggler close sign making.
		$('.navbar-toggler').click(function(event) {
			$('.navbar-toggler-icon').toggle();

			$('.navbar-toggler').toggleClass('fa fa-times')
								.css({ outline: 'none',border:'none'});
		});

	// Password show and hide sign-in page.

		$('#password-icon').click(function(event) 
		{

			event.preventDefault();
			
			$('#icon').toggleClass('fa-eye-slash');

			if ($('#password').attr("type") === "password") {

				$('#password').attr("type","text");
			}
			else{
				$('#password').attr("type","password");
			}
		});

	// Password show and hide sign-up page.

		// confirm_password show and hide
		$('#confirm_password-icon').click(function(event) 
		{

			event.preventDefault();
			
			$('.icon').toggleClass('fa-eye-slash');

			if ($('#confirm_password').attr("type") === "password") {

				$('#confirm_password').attr("type","text");
			}
			else{
				$('#confirm_password').attr("type","password");
			}
		});
	

});