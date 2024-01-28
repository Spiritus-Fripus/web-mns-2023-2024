-- Liste des clients ( numéro de client , nom et prenom ) . Le résultat sera trié par ordre alphabetique

SELECT clients.num_client, clients.nom_client, clients.prenom_client
FROM clients
ORDER BY clients.nom_client;

-- Liste des articles informatique

SELECT  article.num_famille , famille_article.nom_famille, article.description_article 
FROM article
INNER JOIN famille_article ON article.num_famille = famille_article.num_famille
WHERE article.num_famille = 01;

-- Liste des articles dont la quantité en stock est supérieurs à 100

SELECT article.num_article , article.description_article , article.quantite_stock
FROM article
WHERE article.quantite_stock > 100;

-- liste des commandes  ( numero de facture , date  , num_client ) passées en janvier 2023
-- Le résultat sera trié par numéro de commande

SELECT commandes.num_commande , commandes.date_commande , commandes.num_client
FROM commandes
WHERE YEAR(commandes.date_commande) = 2023 AND MONTH(commandes.date_commande) = 01
ORDER BY commandes.num_commande;

-- liste des commandes  ( numero de facture , date  , num_client, nom du client ) passées en janvier 2023. Le réultat sera trié par nom de client et par numéro de commande

SELECT commandes.num_commande , commandes.date_commande , commandes.num_client, clients.nom_client
FROM commandes
INNER JOIN clients ON commandes.num_client = clients.num_client
WHERE YEAR(commandes.date_commande) = 2023 AND MONTH(commandes.date_commande) = 01
ORDER BY commandes.num_commande AND clients.nom_client;

-- Nombre de commandes totale

SELECT COUNT(*) AS "total commandes"
FROM commandes;

-- Nombre de commandes en 2023

SELECT COUNT(*) AS "total commandes"
FROM commandes
WHERE YEAR(commandes.date_commande) = 2023;

-- Nombre de commandes par année

SELECT COUNT(commandes.num_commande) AS "total commandes", YEAR(commandes.date_commande) AS "année"
FROM commandes
GROUP BY YEAR(commandes.date_commande);

-- Combien d'exemplaires de l'article 1 avons nous vendus

SELECT ligne_commande.num_art , COUNT(ligne_commande.quantite_cde) AS "quantité"
FROM ligne_commande
INNER JOIN commandes ON ligne_commande.num_cde = commandes.num_commande
INNER JOIN article ON ligne_commande.num_art = article.num_article
WHERE ligne_commande.num_art = 101
GROUP BY ligne_commande.num_art;

-- Quel client ( numero , nom , prenom) à commandé l'article 27 en 2023
-- (là il faut travailler sur 3 tables )

SELECT clients.num_client, clients.nom_client, clients.prenom_client, commandes.num_commande , commandes.date_commande , article.num_article
FROM clients
INNER JOIN commandes ON clients.num_client = commandes.num_client  
INNER JOIN ligne_commande ON commandes.num_commande = ligne_commande.num_cde
INNER JOIN article ON ligne_commande.num_art = article.num_article  
WHERE article.num_article = 207 and YEAR(commandes.date_commande) = 2023
ORDER BY `clients`.`num_client` ASC;

-- Quel est le montant de la commande 1237

SELECT commandes.num_commande , sum(article.prix_ht) as "prix commande total"
FROM commandes
INNER JOIN ligne_commande ON commandes.num_commande = ligne_commande.num_cde
INNER JOIN article ON ligne_commande.num_art = article.num_article
WHERE commandes.num_commande = 1237;

-- Quel est le chiffre d'affaires en 2023

SELECT COUNT(commandes.num_commande) as "total commandes",  sum(article.prix_ht) as "prix commande total"
FROM commandes
INNER JOIN ligne_commande ON commandes.num_commande = ligne_commande.num_cde
INNER JOIN article ON ligne_commande.num_art = article.num_article;

-- quel et le chiffre d'affaire par année

SELECT COUNT(commandes.num_commande) as "total commandes",  sum(article.prix_ht) as "prix commande total", YEAR(commandes.date_commande)
FROM commandes
INNER JOIN ligne_commande ON commandes.num_commande = ligne_commande.num_cde
INNER JOIN article ON ligne_commande.num_art = article.num_article
GROUP BY YEAR(commandes.date_commande);

-- quel le chiffre  d'affaire par client

SELECT clients.num_client, clients.nom_client, clients.prenom_client, COUNT(commandes.num_commande) as "total commandes",  sum(article.prix_ht) as "prix commande total"
FROM commandes
INNER JOIN clients ON commandes.num_client = clients.num_client
INNER JOIN ligne_commande ON commandes.num_commande = ligne_commande.num_cde
INNER JOIN article ON ligne_commande.num_art = article.num_article
GROUP BY clients.num_client;

-- Quel sont les 3 meilleurs clients (LIMIT)

SELECT clients.num_client, clients.nom_client, clients.prenom_client , SUM(article.prix_ht) AS "total dépensé"
FROM clients
INNER JOIN commandes ON clients.num_client = commandes.num_commande
INNER JOIN ligne_commande ON commandes.num_commande = ligne_commande.num_cde
INNER JOIN article ON ligne_commande.num_art = article.num_article
GROUP BY clients.num_client 
ORDER BY `total dépensé` DESC LIMIT 3;

-- liste des articles ( nom de l'article et la quantité ) achetés par le client  Meyer Julien

SELECT clients.num_client, clients.nom_client, clients.prenom_client , article.description_article , article.num_article, ligne_commande.quantite_cde
FROM clients
INNER JOIN commandes ON clients.num_client = commandes.num_commande
INNER JOIN ligne_commande ON commandes.num_commande = ligne_commande.num_cde
INNER JOIN article ON ligne_commande.num_art = article.num_article
WHERE clients.nom_client = "meyer" AND clients.prenom_client = "julien";
