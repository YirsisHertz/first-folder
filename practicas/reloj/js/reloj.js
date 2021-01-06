//funcion de impresion de tiempo
function printTime() {
    //defines variables
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  //aqui defines AM para las primeras 12 hrs
  var en = 'AM';

  //creas posibilidades
  if(hrs > 12){
  //aqui defines el pm de las ultimas 12 hrs
    var en = 'PM';
  }
  if (hrs > 12){
        hrs = hrs-12;
    }
  if (hrs == 0){
        hrs = 12;
    }
  if(hrs < 10)
    {
        hrs = '0' + hrs;
    }
  if(min < 10)
    {
        min = '0' + min;
    }
  if(sec < 10)
    {
        sec = '0' + sec;
    }

    //colocamos el id del div en html y
    //ordenamos el orden de impresion de las variables

    document.getElementById('hora').innerHTML = hrs + ':' + min + ':' + sec + ' ' + en;
}

//aqui defino 250ms
//aunque lo correcto es hacerlo cada 1000ms
//lo pongo asi por cualquier delay de carga
//recuerda que cada 1000ms = 1s
//250ms = 0.25s
setInterval(printTime, 250);