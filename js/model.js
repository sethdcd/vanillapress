/**
 * Model file for working with data
 */

/**
 * Main Model Object
 *
 */

var model = {};

model.init = function() {
    model.getLocalStorage(jsonData);
}

/**
  * Gets posts from local store
  *
  * @return posts {array} An array of post objects
  */
model.updateLocalStorage = function() {
    var posts = model.getLocalStorage();
    return posts
}

/**
  * Gets content from local store
  *
  * @return store {object} Object or array of objects of site data
  */
model.getLocalStorage = function() {
    return JSON.parse( localStorage.getItem( 'postData' ) );
}


/**
  * Saves temporary store to local storage.
  *
  * @param store {string} JSON string of data to store
  */

model.getLocalStorage = function(store) {
    localStorage.setItem( 'postData', store);
}



/**
  * Deletes data from local storage
  *
  */

model.deleteLocalStorage = function() {
    localStorage.removeItem();
}