<?php

function is_login()
{
  $ci = get_instance();
  if (!$ci->ion_auth->logged_in()) {
    // redirect them to the login page
    redirect('admin/login', 'refresh');
  }

  //admin url
  if (!function_exists('admin_url')) {
    function admin_url()
    {
      $ci = &get_instance();
      return base_url() . 'admin/';
    }
  }

  if (!function_exists('get_users')) {
    function get_users()
    {

      $ci = &get_instance();
      return $ci->ion_auth->user()->row();
    }
  }
}
