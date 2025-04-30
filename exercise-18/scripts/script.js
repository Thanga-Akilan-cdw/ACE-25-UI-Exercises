
// Execute when doc is ready

$(document).ready(function() {
    // Get JSON Data for Video
    $.getJSON('../public/video.json', function(data) {
        $('#videoComponent').attr("src",data.videoUrl)
        $('#videoTitle').text(data.title)
        $('#videoDescription').text(data.description);

        // Create Fragment for cards
        const cardsFragment = $(document.createDocumentFragment());

        //Load the Comments
      $.each(data.comments, function(index, comment) {
        console.log(index, comment)
        // Comment Component 
        const commentUI = `
        <div class="comment-component">
                <div class="comment-img-wrapper">
                    <img src=${'../public/'+comment.image}>
                </div>
                <div class="comment-content">
                    <p id="commentor-name" class="commentor-name">${comment.name}</p>
                    <p class="comment-description">${comment.comment}</p>
                </div>
            </div>
        `;

        // Append to Fragment
        $(cardsFragment).append(commentUI);
      });
      // Append the fragment to container
      $('#commentsContainer').append(cardsFragment);
    });

    // Get JSON Data for Posters
    $.getJSON('../public/posters.json',function(posters){

        // Create fragment for posters
        const postersFragment = $(document.createDocumentFragment());

        $.each(posters, function(index,poster){
            // Poster Component
            const posterUI = `
            <div class="poster-wrapper">
                <img src=${poster.imageUrl} alt=${poster.title}/>
            </div>`

            // Append to Fragment
            $(postersFragment).append(posterUI);
        })
        // APpend the fragment to container
        $("#posterSection").append(postersFragment);
    })
  });



