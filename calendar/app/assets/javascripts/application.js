// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require bootstrap
//= require_tree .

$(function(){
  $(document).trigger('page:load');
});

Date.prototype.daysCount = function() {
  return new Date(this.getFullYear(), this.getMonth()+1, 0).getDate();
}

Date.prototype.monthStartsOn = function() {
  return new Date(this.getFullYear(), this.getMonth(), 1).getDay();
}

String.prototype.toDate = function() {
  return new Date(this);
}

Date.prototype.toDate = function() {
  return this;
}
