$(document).ready(function(){
	var input = document.getElementById("myInput");
	input.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			newElement();
		}
	});

	$("#deselectAll").hide();
});


// My functions

function newElement(){
	var count = $('#myTable tr').length;
	var myInput = $("#myInput").val().trim();

	if (myInput == "") {
		alert("You must write something.");
		return false;
	}

	var text = '<tr id = "'+count+'"><td><input type="checkBox" id = "'+count+'_checkbox" name = "'+count+'_checkbox"  onclick = "onChangeCheckbox(this)"></td><td id = "'+count+'_text">'+myInput+'</td><td id = "'+count+'_remove" class = "removeBtn" onclick="removeElement(this)">×</td></tr>';
	$('#myTable > tbody:last-child').append(text);
	$("#myInput").val("");
	itemsLeft();
}

function removeElement(item){
	var deleteID = $(item).attr("id");
	$("#"+deleteID).parent().find(':checkbox').attr('type','redio');
	$("#"+deleteID).parent().hide();
	itemsLeft();

	if($(":checkbox:checked").length == 0){
		deselectAll();
	}
}

function removeCompleted() {
	$(":checkbox:checked").parent().parent().hide();
	$(":checkbox:checked").attr('type','redio');
	deselectAll();
}

function onChangeCheckbox(item){
	var checkBoxID = $(item).attr("id");
	var textId = checkBoxID.replace("checkbox","text");

	if($("#"+checkBoxID).prop("checked") == true) {
		$("#"+textId).addClass("completed");
	}
	else{
		$("#"+textId).removeClass("completed");
	}
	itemsLeft();
	
	if($(":checkbox:checked").length == 0){
		deselectAll();
	}
}

function active(){
	$(":checkbox:checked").parent().parent().hide();
	$(":checkbox:not(:checked)").parent().parent().show();
}

function completed(){
	$(":checkbox:checked").parent().parent().show();
	$(":checkbox:not(:checked)").parent().parent().hide();
}

function allList(){
	$(":checkbox").parent().parent().show();
}   

function itemsLeft(){
	var count = $(':checkbox:not(:checked)').length;
	$("#itemLeft").html(count);
}

function selectAll(){
	$(":checkbox").prop('checked', true);
	$(":checkbox:checked").parent().next().addClass("completed");
	$("#selectAll").hide();
	$("#deselectAll").show();
}

function deselectAll(){
	$(":checkbox").prop('checked', false);
	$(":checkbox:not(:checked)").parent().next().removeClass("completed");
	$("#selectAll").show();
	$("#deselectAll").hide();
}

