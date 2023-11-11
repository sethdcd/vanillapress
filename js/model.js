/**
 * Model file for working with data
 */

var model = {};

model.init = function() {
    model.updateLocalStore( jsonData );
}

 /**
   * Gets posts from local store
   *
   * @return posts {array} An array of post objects
   */

model.getPosts = function() {
    var posts = model.getLocalStore();

    return posts;
}

 /**
   * Gets a signle post based on a URL string
   *
   * @param slug {string} The slug for the post
   * @return post {object} Single post
   *
   */

model.getSinglePost = function( slug ) {
    var post = model.getLocalStore();

    for( var i = 0; i < post.length; i++ ) {
        if( slug === post[i].slug ) {
            return post[i];
        }
    }

    return null;
}


 /**
   * Gets content from local store
   *
   * @return store {object} Object or array of objects of site data
   */

model.getLocalStore = function() {

    return JSON.parse( localStorage.getItem( 'postData' ) );
}

 /**
   * Saves temporary store to local storage.
   *
   * @param store {string} JSON string of data to store
   */

model.updateLocalStore = function( store ) {

    localStorage.setItem( 'postData', store);

}

 /**
   * Deletes data from local storage
   *
   */

model.removeLocalStore = function() {
    localStorage.removeItem( 'postData' );
}