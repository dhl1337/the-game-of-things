INSERT INTO person (email, password)
VALUES ($1, $2)
RETURNING id;
