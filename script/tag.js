let videoSearch = document.querySelector(".videoSearch");
document.querySelector(".tagCaption > .inner > .contentHeader").before(videoSearch);

let buttonSearch = document.querySelector(".videoSearchInput .search");
buttonSearch.style = "background-image: url(" + chrome.runtime.getURL("resource/search_icon.png") + ")";