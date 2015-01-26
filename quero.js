
document.addEventListener('DOMNodeInserted', function() {
  likeSpans = document.querySelectorAll('.UFILikeLink span');
  commentLikeLinks = document.querySelectorAll('.UFILikeLink[title="Curtir este comentário"]');

  for (var i=0; i<likeSpans.length; i++) {
    likeSpans[i].textContent = "Quero";
  }

  for (var i=0; i<commentLikeLinks.length; i++) {
    commentLikeLinks[i].textContent = "Quero"
  }
});

