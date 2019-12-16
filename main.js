function onReady(callback) {
    var start = new Date();
    var intervalID = window.setInterval(checkReady, new Date() - start + 10);
    
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('card', true);
  });