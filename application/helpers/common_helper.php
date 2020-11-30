<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * get the current csrf token
*/

function csrf_token() {
	$ci =& get_instance();
	return $ci->security->get_csrf_hash();
}