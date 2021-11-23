var pageTitleElement = document.getElementById("page-title")
var pageBoxElement = document.getElementsByClassName("page-box")
var pageHeadings = document.getElementsByTagName("h1")

var pageTitleElementsContent = pageTitleElement.innerHTML
console.log('isi <div id="page-title"> :' + pageTitleElementsContent)

//var pageBoxElementsContent = pageBoxElement.innerHTML
//console.log('isi <div class="page-box"> :' + pageBoxElementsContent)

for (var i = 0; i < pageBoxElement.length; i++) {
    var currentPageBoxElement = pageBoxElement[i]
    var currentPageBoxElementContent = currentPageBoxElement.innerHTML
}