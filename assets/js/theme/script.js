(function ($) {

  'use strict';


  // PRELOADER
  $(window).on('load', function () {
    $('#preloader').fadeOut();
    $('html').addClass('site_loaded');
  });
  /* ------------------------------------------------- */


  // NAVBAR
  // toggle class (is_active) for (#theme_navbar)
  $('#navbar_toggler').on('click', function () {
    $('#theme_navbar').toggleClass('is_active');
  });

  // toggle class (dropdown_menu_is_active) for (#theme_navbar .has_dropdown_menu)
  $('#theme_navbar .has_dropdown_menu').on('click', function () {
    $(this).toggleClass('dropdown_menu_is_active');
  });

  // Scroll when click a link
  $('#theme_navbar .navbar_links .navbar_link a').on('click', function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 1000);
  });

  // check if element exists
  if ($('#home_page').length < 1) {
    $('body').css('padding-top', $('#theme_navbar').outerHeight() + 'px');
  }
  // add padding top to show content behind navbar
  $(window).on('resize', function() {
    // check if element exists
    if ($('#home_page').length < 1) {
      $('body').css('padding-top', $('#theme_navbar').outerHeight() + 'px');
    }
  });

  // check if element exists
  if ($('.smart_scroll').length > 0) {

    // default last offset top value
    var last_scroll_top = 0;

    $(window).on('scroll', function() {

      // get offset top value
      var scroll_top = $(this).scrollTop();

      // add & remove class (scrolled_up) & (scrolled_down)
      if(scroll_top < last_scroll_top) {
        $('.smart_scroll').removeClass('scrolled_down').addClass('scrolled_up');
      } else {
        $('.smart_scroll').removeClass('scrolled_up').addClass('scrolled_down');
      }

      // recored last offset top value
      last_scroll_top = scroll_top;

    });
  }

  // add class (tiny) to (#theme_navbar)
  $(window).on('scroll', function () {
    var win_offset_top = $(this).scrollTop();
    if (win_offset_top > 100) {
      $('#theme_navbar').addClass('tiny');
    } else {
      $('#theme_navbar').removeClass('tiny');
    }
  });
  /* ------------------------------------------------- */


  // CONTACT FORM
  var form_input = $('#contact_form .form_input');

  // check if inouts has value
  form_input.on('focusin', function() {
    $(this).parent('.form_label').addClass('focus_is_active');
  });
  form_input.on('focusout', function() {
    if($(this).val() == '') {
      $(this).parent('.form_label').removeClass('focus_is_active');
    } else {
      return false;
    }
  });
  /* ------------------------------------------------- */


  // REQUEST DEMO FORM
  var form_input = $('#req_demo_page #demo_form .form_input');

  // check if inouts has value
  form_input.on('focusin', function() {
    $(this).parent('.form_label').addClass('focus_is_active');
  });
  form_input.on('focusout', function() {
    if($(this).val() == '') {
      $(this).parent('.form_label').removeClass('focus_is_active');
    } else {
      return false;
    }
  });
  /* ------------------------------------------------- */


  // LIVE CHAT CONTAINER
  // add class (live_chat_max) to (#live_chat_container)
  $('#live_chat_btn').on('click', function() {
    $('#live_chat_container').addClass('live_chat_max');
  });
  // remove class (live_chat_max) from (#live_chat_container)
  $('#dismiss_btn').on('click', function() {
    $('#live_chat_container').removeClass('live_chat_max');
  });
  /* ------------------------------------------------- */


  // LIVE CHAT
  var messages = $('.messages_content'),
      d,h, m,
      i = 0;

  // custom scrollbar
  $(window).on('load', function() {
    messages.mCustomScrollbar();
    setTimeout(function() {
      fakeMessage();
    }, 100);
  });

  // custom scrollbar function
  function updateScrollbar() {
    messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
      scrollInertia: 10,
      timeout: 0
    });
  }

  // message sent time
  function setDate(){
    d = new Date()
    if (m != d.getMinutes()) {
      m = d.getMinutes();
      $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
  }

  // insert message function
  function insertMessage() {
    var msg = $('#message_input').val();
    console.log(msg);
    if ($.trim(msg) == '') {
      return false;
    }
    $('<div class="message message_personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message_input').val(null);
    updateScrollbar();
    setTimeout(function() {
      fakeMessage();
    }, 1000 + (Math.random() * 20) * 100);
  }

  // submit message
  $('.message_submit').on('click', function() {
    insertMessage();
  });

  $(window).on('keydown', function(e) {
    if (e.which == 13) {
      insertMessage();
      return false;
    }
  })

  // fake messages
  var Fake = [
    'Hi there, How are you?',
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'Codepen is a nice place to stay',
    'I think you\'re a nice person',
    'Why do you think that?',
    'Can you explain?',
    'Anyway I\'ve gotta go now',
    'It was a pleasure chat with you',
    'Time to make a new codepen',
    'Bye',
    ':)'
  ]
  function fakeMessage() {
    if ($('.message_input').val() != '') {
      return false;
    }
    $('<div class="message loading new"><figure class="avatar mt-0 mb-0"><img src="https://i.imgur.com/Iqq6SpE.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar mt-0 mb-0"><img src="https://i.imgur.com/Iqq6SpE.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      i++;
    }, 1000 + (Math.random() * 20) * 100);

  }
  /* ------------------------------------------------- */

}(jQuery));