# fenderbass

scenario 1: single match for each column

/api?column1=value%20with%20spaces&column5=Another%20Value

/api?:querystring
^^ would that work?

then explode the querystring on the "&" and you end up with an array
explode further to have each key/value exploded on the "="
then should have an array with key/value pairs
then could build the SQL query dynamically based on looping through the array

scenario 2: multiple matches for each column

/api?column1=value|value2|value3|value4&column17=value%with%space


SELECT * FROM fender_basses_db.basses WHERE gen_type IN ("Jazz", "Performer");
^^ how to chain "OR" statements