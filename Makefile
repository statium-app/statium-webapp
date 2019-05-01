.PHONY: build

clean: 
	git clean -dfX

install:
	yarn install

run:
	yarn start

test: 
	yarn test

build:
	yarn build