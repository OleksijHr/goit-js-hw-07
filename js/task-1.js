const categories = document.getElementById("categories").children.length;
console.log(`Nomber of categories:`, categories);

const arrTitles = document.querySelectorAll("h2");
arrTitles.forEach(title => {
    console.log(`Category:`, title.textContent);
    console.log(`Elements:`, title.nextElementSibling.children.length);
});