import './sass/styles.scss';
import $ from 'jquery';

$(function(){
  $(".menu-closed").click(function(){
    $(".menu-closed").hide;
    $(".menu-open").show;
    $(".menu-open").addClass("menu-current");
  });

});
