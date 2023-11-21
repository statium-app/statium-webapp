.PHONY: build

# git clean -dfX --dry-run is useful to know how to maintain this
clean: 
	rm -rf node_modules/
	rm -f .eslintcache 
	rm -rf build/ 
	rm -f yarn-error.log

install:
	yarn install

run:
	yarn dev

test: 
	yarn test

build:
	yarn build
