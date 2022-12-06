<?php
  function load_stylesheets() {
    wp_register_style('reset', get_template_directory_uri() . '/css/reset.css', array(), '1.0', 'all');
    wp_enqueue_style('reset');
    wp_register_style('style', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('style');
  }
  add_action('wp_enqueue_scripts', 'load_stylesheets');

  function loadjs() {
    wp_register_script('customjs', get_template_directory_uri() . '/js/scripts.js', array(), '1.0', true);
    wp_enqueue_script('customjs');
    if (is_page(array('rysowanie-bst'))) {
      wp_enqueue_script( 'drawbst', '/bst/js/bst.js', array(), '1.0', true);
    }
  }
  add_action('wp_enqueue_scripts', 'loadjs');

  function reg_menu() {
    register_nav_menu("header-menu",__("Menu główne"));
  }
  add_action("init", "reg_menu");
?>