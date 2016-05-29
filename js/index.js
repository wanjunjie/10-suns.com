/**
 * Created by 872458899@qq.com on 16/5/1.
 */
;$(function () {
    //解决方案的tip
    var solutionsBox = $('#solution_list');
    var solutions = $('.solution-item');
    solutions.on('click',function(){
        if(!$(this).hasClass('show-tip')){
            $('.show-tip',solutionsBox).removeClass('show-tip');
            $(this).addClass('show-tip');
        }
    });
    $('.close-tip',solutionsBox).on('click',function (e) {
        e.stopPropagation();
        var curSolution = $(this).parents('.solution-item');
        curSolution.removeClass('show-tip');
    });
    //轮播图
    $('.projects').unslider({
        animation: 'fade',
        autoplay: true,
        arrows: false
    });
    //
    $(window).bind("resize load",function(){
        $("#screen-one").css("height",function(){
            return $(window).height();
        });
    });
    
});