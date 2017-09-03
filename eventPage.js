var menuItem = {
    "id": "GitIt",
    "title": "Git It",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[]/g, function (c) {
        return '+' + c.charCodeAt(0).toString(16);
    });
}

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.selectionText && clickData.menuItemId == "GitIt") {
        var gitURL = "https://github.com/search?utf8=✓&q=" + fixedEncodeURIComponent(clickData.selectionText) + "&type=Code&utf8=✓";
        var createData = {
            "url": gitURL,
            "type": "popup",
            "width": parseInt(screen.availWidth),
            "height": parseInt(screen.availHeight)
        };

        chrome.windows.create(createData, function () {});
    }
});