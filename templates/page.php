<?php

$page_tpl = functions::load("{c2r-page-name}.tpl");

include "pages-e/header.php";
include "pages-e/footer.php";

/* last thing */
$tpl = functions::c2r(
	[
		"header" => $header,
		"footer" => $footer
	],
	$page_tpl
);
