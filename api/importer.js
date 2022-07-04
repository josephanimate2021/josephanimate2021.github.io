const fu = document.getElementById('fileupload'), sub = document.getElementById('submit');
function showImporter() {
  fu.click()
};
function importComplete(obj) {
  const file = obj.files[0];
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
        break;
      }
      case 'jpg':
      case 'png': {
        var c;
        while (c !='bg' && c != 'prop') {
          c = prompt('Would you like to upload this as a background ("bg") or as a prop ("prop")?').toLowerCase()
        }
        params += c
        break;
      }
      case 'mp4': {
        var c;
        while (c != 'video') {
          c = prompt('Would you like to upload this as a video ("video")?').toLowerCase()
        }
        params += c
        break;
      }
    }
    obj.parentElement.firstChild.value = params+'.'+ext;
    sub.click();
    return true
  }
}
