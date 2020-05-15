import Api from './Api';


function send_sms(phone){
    return Api().post('/send_sms',{ phone });
}

function verify_sms(phone,code,user_type){
    return Api().post('/verify_sms',{ phone,code,user_type });
}

export default {
    send_sms,
    verify_sms,
}