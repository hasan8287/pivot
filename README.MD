PIVOT
- REQUIRED
	- node 10
	- mariadb/mysql

- RUN
	- Set config ON .env
	- npm install
	- Migrate DB
		- create db manual
		- ./node_modules/.bin/knex migrate:latest
		- ./node_modules/.bin/knex seed:run
	- npm run dev
  - go to host:port/order
- TEST
	- setup like RUN
	- npm run test
