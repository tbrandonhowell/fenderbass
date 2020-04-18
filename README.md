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


Do I have a "nickname" field? (aka Boxer bass, duff mckagan ~ jazz bass special, boner bass)

This is the final query structure we're going to use for the API:
http://localhost:3000/api-logic?gen_brand=Fender&gen_country=Japan|USA&gen_model=Boxer%20Bass|Performer%20Bass|Precision%20Bass


test API calls:
http://localhost:3000/api/basses/gen_model=Precision Bass&gen_country=USA|Japan
http://localhost:3000/api/basses/gen_model=Precision Bass|Boxer Bass&gen_country=USA|Japan