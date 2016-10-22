(function () {
    'use strict';

    var win = window; // eslint-disable-line no-undef
    var jq = win.jQuery;
    var appendContent = true;
    var vrlist = [ '','라운지', '멀티미디어 강의실','202호','406호','C-Cafe'];
    
    function generateContent() {
        jq('.scrollpanel').each(function (idx, el) {
            for (var i = 1; i < vrlist.length; i += 1) {
                jq(el).append('<div class="item">'
                                +'<a target="demo" href="vr5_'
                                +i+'.html">'
                                +vrlist[i]
                                +'</a>'
                                +'</div>');
                                if(i == vrlist.length-1)
                                    jq(el).append('<div class="item">'+'<a href=\'map.html\' return false;\'>지도로 돌아가기</a>'+'</div>')
            }
        });
        
    }

    function init() {
        generateContent();
        jq('.scrollpanel').scrollpanel();
    }
    jq(init);
}());
