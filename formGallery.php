<!DOCTYPE html>
<html>
	<title>Admin</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="styles/w3.css">
<body>
	<hr>
	<div class="w3-content w3-card-4" style="max-width: 500px">
  		<header class="w3-container w3-center w3-blue-grey">
  			<h2>Success</h2>
		</header>
		<div class="w3-container w3-padding-top">
			<?php
				$s = "[{\"url\": \"".$_GET["vdo1"]."\"},";
				$s = $s."{\"url\": \"".$_GET["vdo2"]."\"},";
				$s = $s."{\"url\": \"".$_GET["vdo3"]."\"},";
				$s = $s."{\"url\": \"".$_GET["vdo4"]."\"},";
				$s = $s."{\"url\": \"".$_GET["vdo5"]."\"},";
				$s = $s."{\"url\": \"".$_GET["vdo6"]."\"},";
				$s = $s."{\"url\": \"".$_GET["vdo7"]."\"}]";
				$myfile = fopen("scripts/gallery_json.txt", "w") or die("Unable to open file!");
				echo $s;
				fwrite($myfile, $s);
				fclose($myfile);
			?>
		</div>
		<hr>
		<div class="w3-container w3-center">
			<a href="admin.html" class="w3-btn">Back</a>
			<br>
			<br>
		</div>
	</div>
</body>
</html>