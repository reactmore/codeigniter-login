<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
<script src="<?= base_url('assets/admin/modules/'); ?>sweetalert/sweetalert.min.js"></script>

<script type="text/javascript">
    <?php if ($this->session->flashdata('message')) { ?>
        swal('Cool', '<?php echo $message_success; ?>', 'success');
    <?php } else if ($this->session->flashdata('errors')) {  ?>
        swal('Sorry', '<?php echo $message_errors; ?>', 'error');
    <?php } else if ($this->session->flashdata('warning')) {  ?>
        toastr.warning("<?php echo $this->session->flashdata('warning'); ?>");
    <?php } else if ($this->session->flashdata('info')) {  ?>
        toastr.info("<?php echo $this->session->flashdata('info'); ?>");
    <?php } ?>
</script>