.PHONY: build

# git clean -dfX --dry-run is useful to know how to maintain this
clean: 
	rm -rf node_modules .eslintcache

install:
	yarn install

run:
	yarn start

test: 
	yarn test

build:
	yarn build