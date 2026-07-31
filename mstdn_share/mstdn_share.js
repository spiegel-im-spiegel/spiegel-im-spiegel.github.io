
var mstdn_share = {
    meta : {version:'1.3' , last_mod :'2024-11-24' },
    file_name : 'mstdn_share.js',    // このファイルの名前
    share_btn_class : 'mstdn_share',  // Mastodonの共有ボタンに指定するクラス名
    overlay_id : 'mstdn_overlay',           // オーバーレイのID
    popup_id : 'mstdn_popup',              // ポップアップiframeのID
    popup_file : 'mstdn_popup.html',      // ポップアップiframeのソースファイル名
    share_text : '',                       // Mastodonでシェアされる文章

    init : function(){
        const s = mstdn_share;
        // 共有ボタンのそれぞれに、イベントリスナを登録。
        const mstdn_links = document.getElementsByClassName(s.share_btn_class);
        for(let i = 0 ; i < mstdn_links.length ; i++ ){
            mstdn_links[i].addEventListener('click' , s.open_dialog , false );
        }
        // オーバーレイ要素を作成
        const ol = document.body.appendChild(document.createElement('div'));
        ol.id = s.overlay_id;
        ol.addEventListener('click' ,s.close_dialog );
        // iframeファイルの絶対パス https://〜/mstdn_popup.html を取得して保存
        s.popup_file = document.querySelector(`script[src$="${s.file_name}"]`).src.replace(`${s.file_name}` , `${s.popup_file}`);
    },

    // 共有（投稿）したい文章をセット
    set_share_text : function(text){
        mstdn_share.share_text = encodeURIComponent(text);
    },

    // iframeをポップアップのように開く
    open_dialog : function(){
        const s = mstdn_share;
        const overlay = document.getElementById(s.overlay_id);
        const iframe = overlay.appendChild(document.createElement('iframe'));
        iframe.id = s.popup_id;
        iframe.src = s.popup_file + '?text=' + s.share_text;   
        iframe.style.display = 'block';
        overlay.style.display = 'block';
        iframe.addEventListener('load' , s.resize_iframe);
    },

    // iframeを閉じる
    close_dialog : function(){
        const iframe = document.getElementById(mstdn_share.popup_id);
        iframe.parentNode.style.display = 'none';
        iframe.removeEventListener('load' , mstdn_share.resize_iframe);
        iframe.parentNode.removeChild(iframe);
    },

    // iframeのサイズ調整
    resize_iframe : function() {
        const iframe = document.getElementById(mstdn_share.popup_id);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument) {
          const contentHeight = iframeDocument.body.clientHeight;
          iframe.style.height = contentHeight +  "px";
        }
        iframe.style.visibility = 'visible';
    }
};

document.addEventListener('DOMContentLoaded',mstdn_share.init);

