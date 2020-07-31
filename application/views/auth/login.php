<!DOCTYPE html>
<html lang="en">

<head>
  <title>Datta Able Free Bootstrap 4 Admin Template</title>
  <!-- HTML5 Shim and Respond.js IE10 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 10]>
                                                                                                            		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                                                                                                            		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
                                                                                                            		<![endif]-->
  <!-- Meta -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="Datta Able Bootstrap admin template made using Bootstrap 4 and it has huge amount of ready made feature, UI components, pages which completely fulfills any dashboard needs." />
  <meta name="keywords" content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template" />
  <meta name="author" content="CodedThemes" />

  <!-- Favicon icon -->
  <link rel="icon" href="<?= base_url('assets/admin/'); ?>/images/favicon.ico" type="image/x-icon">
  <!-- fontawesome icon -->
  <link rel="stylesheet" href="<?= base_url('assets/admin/'); ?>/fonts/fontawesome/css/fontawesome-all.min.css">
  <!-- animation css -->
  <link rel="stylesheet" href="<?= base_url('assets/admin/'); ?>/plugins/animation/css/animate.min.css">
  <!-- vendor css -->
  <link rel="stylesheet" href="<?= base_url('assets/admin/'); ?>/css/style.css">

</head>

<body>
  <div class="auth-wrapper">
    <div class="auth-content">
      <div class="auth-bg">
        <span class="r"></span>
        <span class="r s"></span>
        <span class="r s"></span>
        <span class="r"></span>
      </div>
      <?php $this->load->view('include/message'); ?>
      <div class="card">
        <div class="card-body text-center">
          <div class="mb-4">
            <i class="feather icon-unlock auth-icon"></i>
          </div>

          <h3 class="mb-4"><?php echo lang('login_heading'); ?></h3>

          <form method="POST" action="login" class="needs-validation" novalidate="">


            <div class="form-group">

              <input type="email" name="identity" class="form-control" value="<?php echo set_value('identity'); ?>" placeholder="Email" required>

              <div class="invalid small" style="text-align: left; color: red;">
                <small><?php echo form_error('identity'); ?></small>
              </div>

            </div>

            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="password">
              <div class="invalid small" style="text-align: left; color: red;">
                <?php echo form_error('password'); ?>
              </div>
            </div>

            <div class="form-group text-left">
              <div class="checkbox checkbox-fill d-inline">
                <!--<input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked="">-->
                <?php echo form_checkbox('remember', '1', FALSE, 'id="remember"'); ?>
                <label for="checkbox-fill-a1" class="cr"> Save Details</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary shadow-2 mb-4">Login</button>
          </form>
          <p class="mb-2 text-muted">
            Forgot password? <a href="forgot-password">Reset</a>
          </p>
          <p class="mb-0 text-muted">
            Don’t have an account? <a href="auth-signup.html">Signup</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Required Js -->
  <script src="<?= base_url('assets/admin/'); ?>/js/vendor-all.min.js"></script>
  <script src="<?= base_url('assets/admin/'); ?>/plugins/bootstrap/js/bootstrap.min.js"></script>

</body>
</html>