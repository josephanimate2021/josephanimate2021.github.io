const fu = document.getElementById('fileupload'), sub = document.getElementById('submit');
function showImporter() {
  fu.click()
};
function importComplete(obj) {
  const file = obj.files[0];
  const studio = obj;
  if (file != undefined) {
    const ext = file.name.substring(file.name.lastIndexOf('.')+1);
    var params = flashvars.presaveId+'.';
    switch (ext) {
      case 'mp3':
      case 'wav': {
        var c;
        while (c != 'vo' && c != 'se' && c != 'mu') {
          c = prompt('Would you like to upload this as a voiceover ("vo"), sound effect ("se"), or as music ("mu")?').toLowerCase()
        } 
        params += c
        studio[0].importerStatus("processing");
        break;
      }
      case 'jpg':
      case 'png': {
        var c;
        while (c !='bg' && c != 'prop') {
          c = prompt('Would you like to upload this as a background ("bg") or as a prop ("prop")?').toLowerCase()
        }
        params += c
        studio[0].importerStatus("processing");
        break;
      }
      case 'mp4': {
        var c;
        while (c != 'vid') {
          c = alert('Your video is sucessfully uploaded.').toLowerCase()
        }
        params += c
        studio[0].importerStatus("processing");
        break;
      }
    }
    obj.parentElement.firstChild.value = params+'.'+ext;
    sub.click();
    studio[0].importerStatus("done");
    return true
  }
}
