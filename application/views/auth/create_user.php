<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>Register &mdash; Stisla</title>

  <!-- General CSS Files -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

  <!-- CSS Libraries -->
  <link rel="stylesheet" href="<?= base_url('assets/admin/modules/'); ?>selectric/public/selectric.css">

  <!-- Template CSS -->
  <link rel="stylesheet" href="<?= base_url('assets/admin/'); ?>css/style.css">
  <link rel="stylesheet" href="<?= base_url('assets/admin/'); ?>css/components.css">
</head>

<body>
  <div id="app">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <div class="login-brand">
              <img src="<?= base_url('assets/admin/'); ?>img/stisla-fill.svg" alt="logo" width="100" class="shadow-light rounded-circle">
            </div>

            <div class="card card-primary">
              <div class="card-header">
                <h4><?php echo lang('create_user_heading'); ?></h4>
              </div>

              <!-- <div id="infoMessage"><?php echo $message; ?></div> -->
              <?php $this->load->view('include/message'); ?>

              <div class="card-body">
                <form method="POST" action="register" class="needs-validation" novalidate="">
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="first_name">First Name</label>
                      <input id="first_name" type="text" class="form-control" name="first_name" required autofocus>
                      <div class="invalid-feedback">
                        Please fill in your first name
                      </div>
                    </div>
                    <div class="form-group col-6">
                      <label for="last_name">Last Name</label>
                      <input id="last_name" type="text" class="form-control" name="last_name" required>
                      <div class="invalid-feedback">
                        Please fill in your last name
                      </div>
                    </div>
                  </div>
                  <?php
                  if ($identity_column !== 'email') {
                    echo '<p>';
                    echo lang('create_user_identity_label', 'identity');
                    echo '<br />';
                    echo form_error('identity');
                    echo form_input($identity);
                    echo '</p>';
                  }
                  ?>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="form-control" name="email" required>

                    <div class="invalid-feedback">
                      Please fill in your valid email
                    </div>

                  </div>

                  <div class="row">
                    <div class="form-group col-6">
                      <label for="company" class="d-block">Company</label>
                      <input id="company" type="text" class="form-control" name="company" required>
                      <div class="invalid-feedback">
                        Please fill in your company
                      </div>
                    </div>
                    <div class="form-group col-6">
                      <label for="phone" class="d-block">Phone</label>
                      <input id="phone" type="text" class="form-control" name="phone" required>
                      <div class="invalid-feedback">
                        Please fill in your phone
                      </div>
                    </div>

                  </div>

                  <div class="row">
                    <div class="form-group col-6">
                      <label for="password" class="d-block">Password</label>
                      <input id="password" type="password" class="form-control pwstrength" data-indicator="pwindicator" name="password" required>
                      <div class="invalid-feedback">
                        Please fill in your password
                      </div>
                      <div id="pwindicator" class="pwindicator">
                        <div class="bar"></div>
                        <div class="label"></div>
                      </div>
                    </div>
                    <div class="form-group col-6">
                      <label for="password2" class="d-block">Password Confirmation</label>
                      <input id="password2" type="password" class="form-control" name="password_confirm" required>
                      <div class="invalid-feedback">
                        Your password not same
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" name="agree" class="custom-control-input" id="agree" required>
                      <label class="custom-control-label" for="agree">I agree with the terms and conditions</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="simple-footer">
              Copyright &copy; Reactmomre 2020
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- General JS Scripts -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  <script src="<?= base_url('assets/admin/'); ?>js/stisla.js"></script>

  <!-- JS Libraies -->
  <script src="<?= base_url('assets/admin/modules/'); ?>jquery-pwstrength/jquery.pwstrength.min.js"></script>
  <script src="<?= base_url('assets/admin/modules/'); ?>selectric/public/jquery.selectric.min.js"></script>

  <!-- Template JS File -->
  <script src="<?= base_url('assets/admin/'); ?>js/scripts.js"></script>
  <script src="<?= base_url('assets/admin/'); ?>js/custom.js"></script>

  <!-- Page Specific JS File -->
  <script src="<?= base_url('assets/admin/'); ?>js/page/auth-register.js"></script>
</body>

</html>