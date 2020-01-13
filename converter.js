$(function() {
  var app = {
    parseTime: function(time) {
      return time.split(' ')[0];
    },
    checkHfrefStatus: function(el1, el2) {
      var text;
      var time;
      var a;

      if (el1.find('a').length === 0) {
        time = this.parseTime(el1.text());
        el1.text('');
        a = $('<a href="#" data-time="' + time + '">' + time + ' min' + '</a>');
        el1.append(a);
      }

      if (el2.find('a'.length === 0)) {
        if (time === undefined) {
          time = this.parseTime(el1.text());
        }

        text = el2.text();
        el2.text('');
        a = $('<a href="#" data-time="' + time + '">' + text + '</a>');
        el2.append(a);
      }
    },
    format: function(e) {
      e.preventDefault();

      var self = this;
      var value = $('textarea').val();
      var html = $(value);
      var trs = html.find('tr');

      $.each(trs, function() {
        var td1;
        var td2;
        var tds = $(this).find('td');

        if (tds.length > 0) {
          td1 = tds.first();
          td2 = $(tds.get(1));
          self.checkHfrefStatus(td1, td2);
        }
      });

      $('#result').val(html.prop('outerHTML'));
      $('#output').append(html);
      $('#output').show();
    },
    reset: function(e) {
      e.preventDefault();
      var textareas = $('textarea');

      textareas.first().val('');
      textareas.last().val('');
      $('#output').find('table').remove('');
      $('#output').hide();
    },
    bind: function() {
      $('form').on('submit', this.format.bind(this));
      $('[type="reset"]').on('click', this.reset.bind(this));
    },
    init: function() {
      this.bind();
    }
  };
  app.init();
});
