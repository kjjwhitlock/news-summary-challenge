class News {
  constructor(){
    this.stories = []
  }
}
function getPostData() {
return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/environment/series/seascape-the-state-of-our-oceans&api-key=test$expand=items").then(response => {
return response.json();
})
}

function renderPost(postData) {
let postHeadingHTML1 = `<h1>${postData.response.leadContent[2].webTitle}</h1>`;
let postWithLinebreaksHTML1 = postData.response.leadContent[2].webUrl.replaceAll("\n", "<br>\n");
let postBodyHTML1 = `<p>${postWithLinebreaksHTML1}</p>`;
let postHeadingHTML2 = `<h1>${postData.response.leadContent[3].webTitle}</h1>`;
let postWithLinebreaksHTML2 = postData.response.leadContent[3].webUrl.replaceAll("\n", "<br>\n");
let postBodyHTML2 = `<p>${postWithLinebreaksHTML2}</p>`;
let postHeadingHTML3 = `<h1>${postData.response.leadContent[4].webTitle}</h1>`;
let postWithLinebreaksHTML3 = postData.response.leadContent[4].webUrl.replaceAll("\n", "<br>\n");
let postBodyHTML3 = `<p>${postWithLinebreaksHTML3}</p>`;
return `${postHeadingHTML1}${postBodyHTML1}${postHeadingHTML2}${postBodyHTML2}${postHeadingHTML3}${postBodyHTML3}`;
}

getPostData().then(post => {
let rendered = renderPost(post);
document.getElementById("main").innerHTML = rendered;
})
