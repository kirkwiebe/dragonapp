document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('1').addEventListener('click', getData);
  document.getElementById('2').addEventListener('click', getData);
  document.getElementById('3').addEventListener('click', getData);
  document.getElementById('4').addEventListener('click', getData);

  function getData() {
      // Instantiate XHR
      var url = 'http://www.dnd5eapi.co/api/races/' + this.id;
      var xhr;
      if (window.XMLHttpRequest)
          xhr = new XMLHttpRequest();
      else if (window.ActiveXObject)
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
      else
          throw new Error("Ajax is not supported by your browser");

      // server response handler
      xhr.onreadystatechange = function () {
          if (xhr.readyState < 4)
              document.getElementById('metadata').innerHTML = "Loading...";
          else if (xhr.readyState === 4) {
              if (xhr.status == 200 && xhr.status < 300)
              {
                  var json = JSON.parse(xhr.responseText);
                  console.log(json)
                  document.getElementById('metadata').innerHTML = json.age;
              }
          }
      }
      // query server
      xhr.open('GET', url);
      xhr.send(null);
  }
});
