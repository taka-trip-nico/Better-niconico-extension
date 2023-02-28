function tagSearchButtonClicked() {
    let text = document.querySelector(".sbubmit > input").value;
    console.log(text);
    location.href = "https://www.nicovideo.jp/tag/" + text;
}


let tagSearch = document.createElement("p");
tagSearch.className = "tagSearch"

let tagSearchButton = document.createElement("button");
tagSearchButton.textContent = "タグ検索";
tagSearchButton.onclick = tagSearchButtonClicked;
tagSearchButton.type = "button"
tagSearch.appendChild(tagSearchButton);
let bInput = document.querySelector(".bInput");
bInput.appendChild(tagSearch);

let searchSubmitInput = document.querySelector(".searchSubmit > input");
searchSubmitInput.src = chrome.runtime.getURL("resource/search_icon.png");