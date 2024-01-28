SELECT ville_departement , departement_nom
FROM villes_france_free
LEFT JOIN departement ON villes_france_free.ville_departement = departement.departement_code
GROUP BY ville_departement;