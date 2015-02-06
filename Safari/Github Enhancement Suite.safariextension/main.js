document.addEventListener("beforeload", addButton, true);
document.addEventListener("beforeload", hideDicussionElements, true);


function addButton(event) {
	var buttons = document.getElementsByClassName("toggle-details");
	if(buttons.length == 0) {
		var discussionElements = document.getElementsByClassName("timeline-comment-wrapper");
		var button = document.createElement("button");
		button.onclick = showDicussionElements;
		button.innerHTML = "Show details";
		button.className = "minibutton toggle-details";
		button.style.marginTop = "10px";
		discussionElements[0].appendChild(button);
	}
}

function hideDicussionElements(event) {
	
	var buttonElements = document.getElementsByClassName("toggle-details");
	var button = buttonElements[0];
	button.onclick = showDicussionElements;
	button.innerHTML = "Show details";
	
	var elements = githubElementClasses();
	elements.forEach(function(element) {
    	hideElementsByClass(element);
	});
}

function showDicussionElements(event) {
	var buttonElements = document.getElementsByClassName("toggle-details");
	var button = buttonElements[0];
	button.onclick = hideDicussionElements;
	button.innerHTML = "Hide details";
	
	var elements = githubElementClasses();
	elements.forEach(function(element) {
    	showElementsByClass(element);
	});
}

function githubElementClasses() {
	var elements = ['discussion-item-labeled','discussion-item-unlabeled','discussion-item-milestoned','discussion-item-unmilestoned','discussion-item-demilestoned','discussion-item-assigned','discussion-item-unassigned','discussion-item-renamed'];
	return elements
}

function hideElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    console.log(elements);
    
    var index = 0;
	var length = elements.length;
	
	for (index ; index < length; index++) { 
    	elements[index].style.display = "none";
    }
}

function showElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    var index = 0;
	var length = elements.length;
	
	for (index ; index < length; index++) { 
    	elements[index].style.display = "block";
    }
}

