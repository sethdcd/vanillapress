var vanillaPress = {

  init: function() {

    // Add any functions here you want
	// to run to start the application
	model.init();
	router.init();
  }

};

vanillaPress.init();

// Add your custom code starting here:
// var parsedPostData = JSON.parse(localStorage.getItem( 'postData' )),
//     masterDiv = document.querySelector('.primary'),
//     siteTitle = document.getElementById('siteName'),
//     postTitles = document.getElementsByTagName('a'),
//     articleEl,
//     titleLinkEl,
//     titleEl,
// 	featurePost,
// 	postTitleEl,
// 	postTitleTxt,
// 	postContentEl,
// 	lineBreak;



// function displayAllPosts() {
// 	masterDiv.innerHTML = '';

// 	for ( var i = 0; i < parsedPostData.length; i++ ) {
// 		// Create the new article element
// 		articleEl = document.createElement( 'article' );
// 		// Set article ID
// 		articleEl.setAttribute('id', parsedPostData[i].id );

// 		// Create h2 and a elements, set href value and link text value
// 		titleEl = document.createElement( 'h2' );
// 		titleLinkEl = document.createElement( 'a' );
// 		// Set href value
// 		titleLinkEl.setAttribute( 'href', `#${parsedPostData[i].slug}` );
// 		// Set text value
// 		titleLinkEl.appendChild( document.createTextNode( parsedPostData[i].title ) );
// 		// Add a element into h2 element
// 		titleEl.appendChild( titleLinkEl );

// 		// Adding content to the article
// 		articleEl.innerHTML = parsedPostData[i].content;
// 		// Adding title to the article
// 		articleEl.appendChild( titleEl );
// 		// Position content below the title
// 		articleEl.insertBefore(titleEl, articleEl.firstChild);

// 		//Create Line Break
// 		lineBreak = document.createElement('hr');

// 		articleEl.appendChild(lineBreak);
// 		masterDiv.appendChild(articleEl);
// 	}
// 	return masterDiv;
// }
// displayAllPosts();


// function displayFeaturedPost(postId) {
// 	// Create the new article element
// 	articleEl = document.createElement('article');
// 	// Create new h2 element and populate with title
// 	postTitleEl = document.createElement('h2');
// 	postTitleEl.appendChild( document.createTextNode(parsedPostData[postId - 1].title) );
// 	articleEl.appendChild(postTitleEl);
// 	// Add content to articleEl then reposition
// 	articleEl.innerHTML = parsedPostData[postId - 1].content;
// 	articleEl.insertBefore( postTitleEl, articleEl.firstChild );

// 	masterDiv.appendChild( articleEl );

// 	return masterDiv;
// }



// function showClickedPost(post) {
// 	// Clear contents on the masterDiv and initPost array
// 	masterDiv.innerHTML = '';
// 	initPosts = [];

// 	displayFeaturedPost(post);
// }

// THIS IS WHAT MESSED ME UP FOR ABOUT 8 HOURS
// for (var i = 0; i < postTitles.length; i++) {
// 	postTitles[i].addEventListener('click', showClickedPost);
// }

// Here is the fix!
// masterDiv.addEventListener('click', function(event) {
// 	var post = event.target.parentElement.parentElement.id;
// 	console.log(post);
// 	if (event.target.tagName === 'A') {
// 	  showClickedPost(post);
// 	}
// });

// siteTitle.addEventListener('click', displayAllPosts );