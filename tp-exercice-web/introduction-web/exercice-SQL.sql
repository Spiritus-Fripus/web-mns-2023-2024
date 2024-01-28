-- Exercice de la bdd villes de france

-- recherche de contz-les-bains a partir d'un morceau du nom
SELECT * 
FROM villes_france_free
WHERE ville_nom 
LIKE '%contz%'

-- afficher la population totale
SELECT SUM(ville_population_2012)
FROM villes_france_free

-- afficher la population des vosges
SELECT SUM(ville_population_2012) 
FROM villes_france_free
WHERE ville_departement = 88

-- afficher la population totale par departement
SELECT ville_departement , SUM(ville_population_2012) 
FROM villes_france_free
GROUP BY ville_departement

-- afficher la population par département trié par ordre croissant
SELECT ville_departement , SUM(ville_population_2012) 
FROM villes_france_free
GROUP BY ville_departement
ORDER BY SUM(ville_population_2012) ASC

-- afficher la population par department trié par ordre décroissant 
SELECT ville_departement , SUM(ville_population_2012) 
FROM villes_france_free
GROUP BY ville_departement
ORDER BY SUM(ville_population_2012) DESC

-- Moyenne d'habitant par villes et par departement par ordre décroissant

SELECT ville_departement , AVG(ville_population_2012) 
FROM villes_france_free
GROUP BY ville_departement
ORDER BY AVG(ville_population_2012) DESC

-- Moyenne d'habitant par villes et par departement par ordre décroissant avec une limite de 2 aprés la virgule
SELECT ville_departement , ROUND(AVG(ville_population_2012) ,2) 
FROM villes_france_free
GROUP BY ville_departement 
ORDER BY AVG(ville_population_2012) DESC

-- Moyenne d'habitant par villes et par departement avec la plus petite valeur et la plus grosse
 
SELECT ville_departement , AVG(ville_population_2012), MIN(ville_population_2012), MAX(ville_population_2012)
FROM villes_france_free
GROUP BY ville_departement;