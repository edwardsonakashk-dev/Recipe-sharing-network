function searchRecipe() {

    let ingredients =
        document.getElementById("ingredientInput").value;

    if(ingredients === "") {
        alert("Please enter ingredients");
    }
    else{
        alert(
            "Searching recipes with: " + ingredients
        );
    }
}