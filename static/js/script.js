document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('dwarf').addEventListener('click', logger);
  document.getElementById('elf').addEventListener('click', logger);
  document.getElementById('halfling').addEventListener('click', logger);
  document.getElementById('human').addEventListener('click', logger);

  function logger(){
    console.log(this.id);
  }
});
