<nav class="pcoded-navbar">
  <div class="navbar-wrapper">
    <div class="navbar-brand header-logo">
      <a href="index.html" class="b-brand">
        <div class="b-bg">
          <i class="feather icon-trending-up"></i>
        </div>
        <span class="b-title">ACL</span>
      </a>
      <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
    </div>
    <div class="navbar-content scroll-div">
      <ul class="nav pcoded-inner-navbar">
        <li class="nav-item pcoded-menu-caption">
          <label>Dashboard</label>
        </li>

        <li data-username="dashboard" class="nav-item">
          <a href="<?= base_url(); ?>" class="nav-link "><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
        </li>

        <?php $group_menu = $this->db->order_by('id', 'ASC')->get('groups_menu'); ?>
        <?php foreach ($group_menu->result() as $gm) : ?>

        <li class="nav-item pcoded-menu-caption">
          <label><?= $gm->name; ?></label>
        </li>

        <?php $menu = $this->db->order_by('id', 'ASC')->get_where('groups_main_menu', array('is_parent' => 0, 'is_active' => 1, 'id_menu' => $gm->id)); ?>


        <?php foreach ($menu->result() as $m) : ?>

        <?php $submenu = $this->db->get_where('groups_main_menu', array('is_parent' => $m->id, 'is_active' => 1, 'id_menu' => $gm->id)); ?>

        <?php if ($submenu->num_rows() > 0) : ?>

        <li data-username="Shadows Embeds" class="nav-item pcoded-hasmenu">
          <a href="javascript:" class="nav-link "><span class="pcoded-micon"><i class='<?= $m->icon; ?>'></i></span><span class="pcoded-mtext"><?= ucfirst($m->name); ?></span></a>
          <ul class="pcoded-submenu">
            <?php foreach ($submenu->result() as $s) : ?>
            <li class=""><a href='<?= base_url() . $s->link; ?>' class=""><?= ucfirst($s->name) ?></a></li>
            <?php endforeach; ?>
          </ul>
        </li>


        <?php else : ?>
        <li data-username="dashboard" class="nav-item">
          <a href='<?= base_url() . $m->link ?>' class="nav-link "><span class="pcoded-micon"><i class='<?= $m->icon; ?>'></i></span><span class="pcoded-mtext"><?= ucfirst($m->name); ?></span></a>
        </li>



        <?php endif;
        endforeach; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</nav>