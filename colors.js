var Links = {
  setColor:function(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while( i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body')
  if(self.value === 'night'){
    Body.setBackgroundColor('black'); //메소드의 이름은 대소문자를 혼용할 수 있지만 반드시 동사를 사용하며 소문자로 시작한다. 일종의 약속입니다.
    Body.setColor('white');
    self.value = 'day'
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night'
    Links.setColor('blue');
  }
}
