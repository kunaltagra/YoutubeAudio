function downloadaudio()
{
  var utubelink=document.getElementById("utubelink").value;
  var p= /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
  if(utubelink.match(p))
  {
    var partoflink=utubelink.substr(utubelink.indexOf("=")+1);
    window.location="https://y2mate.com/youtube/"+partoflink;
    document.getElementById("utubelink").value=""
  }
  else
  window.alert("Invalid Link");
}
