gen:
	rm -f gen/*.py; cd proto; buf generate; cd ../

dev:
	poetry run uvicorn main:app --reload

env:
	poetry shell


.PHONY: gen, dev, env

