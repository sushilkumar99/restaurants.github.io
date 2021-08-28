<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Five Star Restaurant | Best Restaurant</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="font-awesom/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body class="m-0 p-0" style="background: rgba(0,0,0,0.1);
">
	<div class="container">
		<div class="row">
			<div class="offset-1 col-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8">
				<div class="admin-box">
					<div class="logo">
						<img src="image/team1.jpg" class="img-fluid ">
					</div><hr>
					<h4 class="text-center m-0 p-0">Admin Login</h4><hr>

					<form action="" method="" id="admin-frm">
						<div class="form-group">
							<label for="name">Admin Name <span class="text-danger">*</span></label>
							<input type="text" name="admin-name" class="form-control" required="" id="name">
						</div>
						<div class="form-group">
							<label for="password">Password <span class="text-danger">*</span></label>
							<input type="password" name="password" class="form-control" required="" id="password">
						</div>
						<div class="form-group">
							<label for="gmail">Gmail ID <span class="text-danger">*</span></label>
							<input type="gmail" name="gmail" class="form-control" required="" id="gmail" autocomplete="off">
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-lg btn-success rounded-0">Login</button>
						</div>
					</form>
					<p class="text-right mr-3 text-danger">@Only Admin Login Panel !!</p>
				</div>
			</div>
		</div>
	</div>
	
	




	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {

			$('input[type="text"]').focus(function(event) {
				$('label[for="name"]').css({
					color: 'blue'
				});
			});

			$('input[type="text"]').blur(function(event) {
				$('label[for="name"]').css({
					color: 'black'
				});
			});

			$('input[type="password"]').focus(function(event) {
				$('label[for="password"]').css({
					color: 'blue'
				});
			});

			$('input[type="password"]').blur(function(event) {
				$('label[for="password"]').css({
					color: 'black'
				});
			});

			$('input[type="gmail"]').focus(function(event) {
				$('label[for="gmail"]').css({
					color: 'blue'
				});
			});

			$('input[type="gmail"]').blur(function(event) {
				$('label[for="gmail"]').css({
					color: 'black'
				});
			});

		
		});
	</script>
</body>
</html>