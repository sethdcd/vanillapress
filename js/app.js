var vanillaPress = {

	init: function() {
  
	  // Add any functions here you want
	  // to run to start the application
	  model.init();
	}
  
  };
  
  vanillaPress.init();
  
  // Add your custom code starting here:
  var parsedJSON = model.getLocalStorage(),
	  masterDiv = document.querySelector('.primary'),
	  siteTitle = document.getElementById('siteName'),
	  postTitles = document.getElementsByTagName('a'),
	  articleEl,
	  titleLinkEl,
	  titleEl,
	  featurePost;
  
  function displayAllPosts() {
	for ( var i = 0; i < parsedJSON.length; i++ ) {
	  // Create the new article element
	  articleEl = document.createElement( 'article' );
	  // Set article ID
	  articleEl.setAttribute('id', parsedJSON[i].id );
  
	  // Create h2 and a elements, set href value and link text value
	  titleEl = document.createElement( 'h2' );
	  titleLinkEl = document.createElement( 'a' );
	  // Set href value
	  titleLinkEl.setAttribute( 'href', `#${parsedJSON[i].slug}` );
	  // Set text value
	  titleLinkEl.appendChild( document.createTextNode( parsedJSON[i].title ) );
	  // Add a element into h2 element
	  titleEl.appendChild( titleLinkEl );
  
	  // Adding content to the article
	  articleEl.innerHTML = parsedJSON[i].content;
	  // Adding title to the article
	  articleEl.appendChild( titleEl );
	  // Position content below the title
	  articleEl.insertBefore(titleEl, articleEl.firstChild);
  
	  masterDiv.appendChild(articleEl);
	}
	return masterDiv;
  }
  
  displayAllPosts();
  
  function showClickedPost(post) {
	masterDiv.innerHTML = '';
	initPosts = [];
  
  }
  
  // THIS IS WHAT MESSED ME UP FOR ABOUT 8 HOURS
  // for (var i = 0; i < postTitles.length; i++) {
  //   postTitles[i].addEventListener('click', showClickedPost);
  // }
  // Here is the fix!
  masterDiv.addEventListener('click', function(event) {
	if (event.target.tagName === 'A') {
	  showClickedPost(post);
	}
  });
  
  siteTitle.addEventListener('click', displayAllPosts );