define(['jquery', 'handlebars'], function($, h) {

    function init(name, datas, prents) {
        var jd = name.html();
        var compile = h.compile(jd);
        var html = compile(datas);
        prents.html(html);
    }

    $.ajax({
        url: '/liu',
        dataType: 'json',
        success: function(data) {
            var datas;
            init($('.first'), data, $('.box1'));
            init($('.third'), "", $('.box3'));
            init($('.fourth'), "", $('.box4'));
            $('.one li').on('click', function() {
                $(this).addClass("active").siblings().removeClass("active");
                var id = $(this).attr('add');
                $.each(data, function(i, v) {
                    if (v.kpId == id) {
                        datas = v.kpListVOs;
                    }
                });
                init($('.second'), datas, $('.box2'));
                init($('.fourth'), "", $('.box4'));
                $('.two li').on('click', function() {
                    $(this).addClass("active").siblings().removeClass("active");
                    var id = $(this).attr('add');
                    var datass;
                    $.each(datas, function(i, v) {
                        if (v.kpId == id) {
                            datass = v.kpListVOs;
                        }
                    });
                    init($('.third'), datass, $('.box3'));
                    $('.three li').on('click', function() {
                        $(this).addClass("active").siblings().removeClass("active");
                        var id = $(this).attr('add');
                        var datasss;
                        $.each(datass, function(i, v) {
                            if (v.kpId == id) {
                                datasss = v.kpListVOs;
                            }
                        });
                        init($('.fourth'), datasss, $('.box4'));
                    });
                });
            });
        }
    });
});