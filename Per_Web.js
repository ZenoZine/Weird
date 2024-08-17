let originalTitle = "Joshua Reed | Journey to Software Engineering";
let timeoutId;

document.addEventListener('visibilitychange' , function() {
    if (document.hidden) {
        timeoutId = setTimeout(function() {
            document.title = "Scanning...";
        } , 5000);
    } else {
        clearTimeout(timeoutId);
        document.title = originalTitle;
    }
});