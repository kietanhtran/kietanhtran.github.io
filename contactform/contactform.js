jQuery(document).ready(function ($) {
  "use strict";
  //Contact
  function serializeObject(a) {
    var o = {};
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      }
      else {
        o[this.name] = this.value || '';
      }
    });

    return o;
  }
  $('form.contactForm').submit(function () {
    
    $("#sendmessage").removeClass("show");
    $("#errormessage").removeClass("show");
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;
    else var str = serializeObject($(this).serializeArray());
    var action = $(this).attr('action');
    if (!action) {
      action = 'contactform/contactform.php';
    }
    Email.send({
      Host: "smtp.gmail.com",
      Username: "anhkiet1997tn@gmail.com",
      Password: "kcfrsqdstaxjjypq",
      To: 'anhkiet1997tn@gmail.com',
      From: str.email,
      Subject: "!!! " +str.subject,
      Body: "Hello Kiet, I am " + str.name + ". " + str.message
    }).then(
      message => {
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        $('.contactForm').find("input, textarea").val("");
      },
      error => {        
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
      }
    );
    return false;
  });

});
