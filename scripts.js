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
 
    function showImage(treeKey) {
      // Look up the tree data
      const tree = trees[treeKey];
 
      // Put the picture into the info panel
      document.getElementById('summer-pic-container').innerHTML = '<img src=' + tree.summer_image +'/>' ;
 
      // Make the info panel visible
      document.getElementById('popup_id').style.display = 'block';
 

 
      // Remove the 'selected' class from all trees
      const allTrees = document.querySelectorAll('.tree');
      allTrees.forEach(function(el) {
        el.classList.remove('selected');
      });
 
      // Add 'selected' to the clicked tree
      event.currentTarget.classList.add('selected');
    }

