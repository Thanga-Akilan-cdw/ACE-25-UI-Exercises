
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
        // Comment Component 
        const {name, image, comment : commentMessage} = comment;
        const commentUI = `
        <div class="comment-component">
                <div class="comment-img-wrapper">
                    <img src="../public/${image}">
                </div>
                <div class="comment-content">
                    <p id="commentor-name" class="commentor-name">${name}</p>
                    <p class="comment-description">${commentMessage}</p>
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
            const { imageUrl, title: posterTitle} = poster;
            // Poster Component
            const posterUI = `
            <div class="poster-wrapper">
                <img src=${imageUrl} alt=${posterTitle}/>
            </div>`

            // Append to Fragment
            $(postersFragment).append(posterUI);
        })
        // APpend the fragment to container
        $("#posterSection").append(postersFragment);
    })

    // Copyright section
    const copyrightElement = $("#copyright")
    copyrightElement.html(`© Copyrights ${new Date().getFullYear()}`);
  });




