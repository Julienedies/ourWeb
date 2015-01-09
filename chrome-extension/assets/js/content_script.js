/**
 *
 * 注入当前页面的js脚本；
 *
 */


// 接收content script发过来的消息
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {

    console.log('收到background.js发来的消息', request, sender);

    request && command.call(request.action, request)

});



var command = {

    call: function (action, request) {
        this[action] && this[action](request);
    },

    get: function () {

        var url = location.href + '';
        url = url.replace(/[./]/img, '');

        console.log(url)

        $.ajax({
            type: 'get',
            cache: false,
            url: 'http://localhost:4000/get/?'.replace('?', encodeURIComponent(btoa(url)))
        }).done(function (data) {
            console.log(data)
            data.html && $('body').html(data.html);
            if (data && data.msg) alert(data.msg);
        });

    },


    edit: function () {

        $('body').attr('contenteditable', true);
        alert('已经可以编辑当前页面');

    },


    post: function () {

        var url = location.href + '';
        url = url.replace(/[./]/img, '');

        console.log(url)

        var html = $('body').html();
        var data = {html: html};
        $.ajax({
            type: 'post',
            url: 'http://localhost:4000/save/?'.replace('?', encodeURIComponent(btoa(url))),
            data: data
        }).done(function (data) {
            if (data && data.msg) alert(data.msg);
        });

    }
}














