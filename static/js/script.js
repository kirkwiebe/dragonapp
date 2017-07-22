document.addEventListener('DOMContentLoaded', function () {
  // add event listeners to race buttons
  for (i = 1; i < 5; i++)
  {
    document.getElementById(i).addEventListener('click', getData);
  }
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
              document.getElementById('agedata').innerHTML = "Loading...";
          else if (xhr.readyState === 4) {
              if (xhr.status == 200 && xhr.status < 300)
              {
                  var json = JSON.parse(xhr.responseText);
                  console.log(json)
                  var bonuses = json.ability_bonuses;
                  document.getElementById('agedata').innerHTML = json.age;
                  document.getElementById('alignmentdata').innerHTML = json.alignment;
                  document.getElementById('sizetitle').innerHTML = 'Size: ' + json.size;
                  document.getElementById('sizedata').innerHTML = json.size_description;
                  for (i = 0; i < bonuses.length; i++)
                  {
                    document.getElementById('data.' + i).innerHTML = '+' + bonuses[i];
                  }
              }
          }
      }
      // query server
      xhr.open('GET', url);
      xhr.send(null);
  }
});
