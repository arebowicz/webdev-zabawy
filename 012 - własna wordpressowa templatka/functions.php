<?php
  function load_stylesheets() {
    wp_register_style('reset', get_template_directory_uri() . '/css/reset.css', array(), '1.0', 'all');
    wp_enqueue_style('reset');
    wp_register_style('style', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('style');
  }
  add_action('wp_enqueue_scripts', 'load_stylesheets');

  function reg_menu() {
    register_nav_menu("header-menu",__("Menu główne"));
  }
  add_action("init", "reg_menu");
?>