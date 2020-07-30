<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Admin_controller extends Admin_Core_Controller
{


  public function index()
  {
    $data['active'] = 'active';

    $this->template->load('template', 'index', $data);
  }
}
