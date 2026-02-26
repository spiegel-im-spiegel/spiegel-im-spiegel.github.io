let mstdn_popup = {
    meta : {version:'1.3' , last_mod :'2024-11-24' },
    cookie_name : 'mstdn_instance',
    cookie_value : '',
    text_id : "text",
    instance_id : "instance",
    submit_id : "submit_btn",
    text : "",
    jumpto : 'https://',

    init : function(){
        const m = mstdn_popup;
        document.getElementById(m.instance_id).addEventListener('change' , m.change_instance);
        document.getElementById(m.submit_id).addEventListener('click' , m.post);
        let mstdn_instance = m.get_cookie(m.cookie_name);
        if( mstdn_instance === null){
            mstdn_instance = '';
        }
        m.text = document.getElementById(m.text_id).value;
        m.jumpto += mstdn_instance + '/share?text=';
        document.getElementById(m.instance_id).value = mstdn_instance;

        const url_param = new URLSearchParams(window.location.search);
        m.text = url_param.get('text');
        document.getElementById(m.text_id).value = m.text;
        document.getElementById(m.text_id).addEventListener('change' , m.change_text);
    },

    set_cookie : function(name,value,days){
        const date = new Date();
        value = encodeURIComponent(value);
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // daysをミリ秒に変換
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;        
    },
    get_cookie : function(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
            }
        }
        return null;
    },

    change_text : function(evt){
        mstdn_popup.text = evt.target.value;
    },
    
    change_instance : function(evt){
        const m = mstdn_popup;
        let ins = evt.target ;
        m.jumpto = 'https://' + ins.value + '/share?text=';
        if( !m.url_check() ){
            alert('インスタンスが正しくないようです');
            m.jumpto = '';
            ins.value = '';
        }else{
            m.set_cookie(m.cookie_name , ins.value , 3650);
        }
    },
    url_check : function(){
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' +                      // プロトコル
            '([\\w-]+\\.)+[\\w-]{2,4}' +              // ドメイン名
            '(\\/[\\w\\-.~:@!$&\'()*+,;=]*)*' +       // パス
            '(\\?[\\w\\-.~:@!$&\'()*+,;=/?]*)?' ,    // クエリ
            'i'
          );
          return pattern.test(mstdn_popup.jumpto);
    },

    post : function(){
        const m = mstdn_popup;
        const text = encodeURIComponent(m.text);
        if( !m.url_check() ){
            alert('インスタンスが正しくないようです');
            return false;
        }
        window.open( m.jumpto + text,'_blank' );

        window.parent.mstdn_share.close_dialog();
    }
};


document.addEventListener('DOMContentLoaded' , mstdn_popup.init );
