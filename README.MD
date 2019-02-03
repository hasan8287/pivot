PIVOT
- REQUIRED
	- node 10
	- mariadb/mysql

- RUN
	- SET CONFIG ON .env
	- npm install
	- SETUP DB
		- create db
		- ./node_modules/.bin/knex migrate:latest
		- ./node_modules/.bin/knex seed:run
	- npm run dev
- TEST
	- setup like RUN
	- npm run test