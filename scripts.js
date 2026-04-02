// All tree data stored in one object
const trees = {
  dogwood: {
    summer_image:"https://www.vermontwildflowerfarm.com/cdn/shop/files/isdogwooda.jpg?v=1694890807"
  },
  cherry: {
    summer_image:"https://cdn.shopify.com/s/files/1/0062/8532/8445/products/Yoshino_Cherry_1_BB.jpg?v=1610505140"
  },
  poplar: {
    summer_image:"https://www.greenwoodnursery.com/cdn/shop/files/Lombardy_Poplar_Tree_gn_002.jpg?v=1770953525"
  }
};
 
// Function to display spring tree photo as a popup when user clicks a winter tree
function showImage(treeKey, event) {
  // Look up the tree data
  const tree = trees[treeKey];
 
    // Put the picture and overlay text into the popup
    document.getElementById('summer-pic-container').innerHTML =
      '<img src="' + tree.summer_image + '" alt="' + treeKey + ' in spring"/>' +
      '<span class="spring-label">Spring is coming!!</span>';
  
    // Show the overlay and popup
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
  
    // Remove 'selected' from all trees, then highlight the clicked one
    document.querySelectorAll('.tree').forEach(function(el) {
      el.classList.remove('selected');
  });
  
  event.currentTarget.classList.add('selected');
}
 
// Function to close the popup
function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
 
  // Deselect all trees
  document.querySelectorAll('.tree').forEach(function(el) {
    el.classList.remove('selected');
  });
}
 
// Close when clicking the overlay
document.getElementById('popup-overlay').addEventListener('click', closePopup);