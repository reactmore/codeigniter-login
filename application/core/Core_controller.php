<?php defined('BASEPATH') or exit('No direct script access allowed');

class Core_Controller extends CI_Controller
{
  public function __construct() {
    parent::__construct();
  }

}

class Admin_Core_Controller extends Core_Controller
{

  public function __construct() {
    parent::__construct();
    // Check Session if not login redirect to login
    is_login();




  }


}