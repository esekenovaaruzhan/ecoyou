$(".category h1").css("color", "#3e5141");
$(".category h4").css("color", "#6d8e72");

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alerting(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>'

  alertPlaceholder.append(wrapper)
}

function caller() {
  alerting('Успейте до 27 мая!', 'danger')
}
if (alertTrigger) {
  alertTrigger.addEventListener('mouseenter', caller, {
    "once": true
  })
};
var audio = new Audio('video/notify.mp3');
var audio2 = new Audio('video/notify2.mp3');
function notify (){
  audio.play();
  let mail =
  prompt("Хотите подписаться на нашу рассылку?", "Введите свой email");
  if(mail != null){
    audio2.play();
    alert("Спасибо! Мы прислали вам письмо на" + mail)
}
}
document.getElementById('incentive').addEventListener('mouseenter', notify);
