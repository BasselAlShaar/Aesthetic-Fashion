fetch("https://aestheticfashion.herokuapp.com/data/")
    .then((response) => response.json())
    .then((json) => {
        var nav_cat = document.getElementById("nav-cat");
      	json.Categories.forEach((element) => {
                var cat = document.createElement("a");
                var cat_class = document.createAttribute("class"); 
                var cat_href = document.createAttribute("href");
                cat_href.value = "#";
        	cat_class.value = "nav-item nav-link";
                cat.innerHTML = element.A; 
                cat.setAttributeNode(cat_class);
                cat.setAttributeNode(cat_href);
      		nav_cat.appendChild(cat);
        });
    });

