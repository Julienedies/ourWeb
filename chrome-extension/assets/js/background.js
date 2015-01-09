/**
 * 创建右键菜单
 *
 */

var utils = [


    {
        'title': '获取衍生版本',
        "onclick": function (info, tab) {

            //发消息给content_script.js
            chrome.tabs.getSelected(null, function (tab) {
                chrome.tabs.sendRequest(tab.id, {action:'get'}, function (response) {

                });
            });

        }
    },

    {
        'title': '创建衍生版本',
        "onclick": function (info, tab) {

            //发消息给content_script.js
            chrome.tabs.getSelected(null, function (tab) {
                chrome.tabs.sendRequest(tab.id, {action:'edit'}, function (response) {

                });
            });

        }
    },

    {
        'title': '保存衍生版本',
        "onclick": function (info, tab) {

            //发消息给content_script.js
            chrome.tabs.getSelected(null, function (tab) {
                chrome.tabs.sendRequest(tab.id, {action:'post'}, function (response) {

                });
            });

        }
    }

];


for (var i in utils) {

    var item = utils[i];

    var id = chrome.contextMenus.create({
        "title": item.title,
        "onclick": item.onclick
    });

}


