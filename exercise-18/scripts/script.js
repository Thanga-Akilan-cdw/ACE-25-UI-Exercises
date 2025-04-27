
$(document).ready(function() {
    $.getJSON('../public/video.json', function(data) {
        console.log(data);
        $('#videoComponent').attr("src",data.videoUrl)
        $('#videoTitle').text(data.title)
        $('#videoDescription').text(data.description);
      $.each(data.comments, function(index, comment) {
        console.log(index, comment)
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

        $('#commentsContainer').append(commentUI);
      });
    });

    $.getJSON('../public/posters.json',function(posters){
        $.each(posters, function(index,poster){
            console.log(poster)
            const posterUI = `
            <div class="poster-wrapper">
                <img src=${poster.imageUrl} alt=${poster.title}/>
            </div>`
            $("#posterSection").append(posterUI);
        })
    })
  });



