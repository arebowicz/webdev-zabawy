<?php get_header(); ?>
<div class="page">
  <?php
    if (have_posts()) {
      while (have_posts()) {
        the_post();
        ?>
        <div class="post-header">
          <?php 
            the_title('<h2>', '</h2>');
          ?>
          <div class="date">
            <?php
              echo get_the_date('d.m.Y');
            ?>
          </div>
        </div>
        <div class="post-content">
          <?php the_content(); ?>
        </div>
        <?php
        // the_excerpt();
      }
    }    
  ?>
</div>
<?php get_footer(); ?>