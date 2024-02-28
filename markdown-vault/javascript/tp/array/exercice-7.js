// Exercice 7:
// Créez un tableau d'objets représentant des livres (avec des propriétés comme title, author, year). Filtrer le tableau pour obtenir une liste des livres publiés après 2000.

const book = [
    {title: "livre 1", author: "author 1", year: 1922},
    {title: "livre 2", author: "author 2", year: 2010},
    {title: "livre 3", author: "author 3", year: 1963},
    {title: "livre 4", author: "author 4", year: 2014},
    {title: "livre 5", author: "author 5", year: 2001},
    {title: "livre 6", author: "author 6", year: 1999},
    {title: "livre 7", author: "author 7", year: 2002},
]

function filter(object, filterYear) {
    const filterObject = object.filter((item) => item.year > filterYear);
    console.log(filterObject);
}

filter(book, 2000);

