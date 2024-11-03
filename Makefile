FILES = manifest.json src/* content/*

build.zip: $(FILES)
	zip -r build.zip $(FILES)

clean: build.zip
	rm build.zip

.PHONY: clean
