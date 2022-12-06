<!DOCTYPE html>
<html>
  <head>
    <?php wp_head(); ?>
  </head>
  <body>
    <div class="row">
      <div class="column left">
        <?php wp_nav_menu(array("theme_location" => "header-menu", "menu_class" => "sidebar")); ?>
      </div>
      <div class="column right">