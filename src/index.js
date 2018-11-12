
let picLikeBtn

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 1465 //Enter the id from the fetched image here
let commentInnerHTML = ''
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let picContainer = document.querySelector(".container");
  picLikeBtn = document.getElementById("like_button")
  let picNumLikes = document.querySelector("#likes");


  fetch(imageURL)
  .then((response)=>response.json())
  .then((json)=>{
  appendPicToDom(json)
  console.log(picLikeBtn)

  })//end of intial fetch


  function appendPicToDom(json) {

    let randoPicLikes = json.like_count
    let randoPicName = json.name
    let randoPicUrl = json.url
    let randoPicID = json.id
    let randoPicComments = json.comments
    createHTMLforComments(randoPicComments)


    picContainer.innerHTML = `<div class="row" id="image_content">
    <div class="card col-md-4"></div>
    <div id="image_card" class="card col-md-4">
      <img src=${randoPicUrl} id="image" data-id="🤔"/>
      <h4 id="name">${randoPicName}</h4>
      <span>Likes:
        <span id="likes">${randoPicLikes}</span>
      </span>
      <button id="like_button">Like</button>
      <form id="comment_form">
        <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
        <input type="submit" value="Submit"/>
      </form>
      <ul id="comments">

        ${commentInnerHTML}
      </ul>
    </div>
    <div class="card col-md-4"></div>
  </div>`


} //end of appendPicToDom



addEventListener("click",(event)=> {console.log("hi")})

function createHTMLforComments(comments){
  comments.forEach((comment)=>{
    commentInnerHTML += `<li>${comment.content}</li>`
  })
}

// ///likebuton
// picLikeBtn.addEventListener("click", )
//   // let numLikes = picNumLikes.innerText
//   // numLikes++





})//end of DOMContentLoaded
