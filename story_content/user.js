function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rRxbjlu8OB":
        Script1();
        break;
      case "6VvrmzvNqJ1":
        Script2();
        break;
      case "6CCN0fyAXRL":
        Script3();
        break;
      case "5Uus7BW8oup":
        Script4();
        break;
      case "6XMbupfIXhp":
        Script5();
        break;
      case "626akpQUeqD":
        Script6();
        break;
      case "5ZKJmMNUoa0":
        Script7();
        break;
      case "6Mk7Ctzdd4I":
        Script8();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.3;

}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.6;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.10;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.0;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.6;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.10;
}

function Script8()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

