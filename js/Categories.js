fetch("https://aestheticfashion.herokuapp.com/data/")
  .then((response) => response.json())
  .then((json) => {
    var categories = document.getElementById("categories-container");
      	json.Categories.forEach((element) => {
			var cat = document.createElement("div");
        	var cat_class = document.createAttribute("class");
        	cat_class.value = "col-lg-3 col-md-4 col-sm-6 pb-1";
        	cat.innerHTML =
        	`<a id="`+ element.A +`" class="text-decoration-none">
            	<div class="cat-item d-flex align-items-center mb-4">
                	<div class="overflow-hidden" style="width: 100px; height: 100px;">
                    	<img class="img-fluid" src="` +
        	element.C +
                    	`" alt="">
                	</div>
                	<div class="flex-fill pl-3">
                    	<h6>` +
        	element.A +
                    	`</h6>
                    	<small class="text-body">` +
        	element.B +
                    	`</small>
                	</div>
            	</div>
        	</a>`;
			cat.setAttributeNode(cat_class);
      		categories.appendChild(cat);
    	});
	});