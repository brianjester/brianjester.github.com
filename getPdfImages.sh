#!/bin/bash
# getImages.sh - script to get images from a PDF
PDF_URL=https://www.e-churchbulletins.com/bulletins/
PDF_NAME=977090
IMAGE_DIR=images
FB_POST=http://brianjester.github.io/index.html
#DATE=`date +%Y-%m-%d`
#mkdir ${DATE}
curl ${PDF_URL}${PDF_NAME}.pdf > ${PDF_NAME}.pdf
rm -rf ${IMAGE_DIR}/*
pdfimages -f 1 -l 2 -all ${PDF_NAME}.pdf ${IMAGE_DIR}/${PDF_NAME}
rm *.pdf
cd ${IMAGE_DIR}
rm *.params *.ccitt
for file in `find . -size -100k | grep -v "^\.$"`
do
  rm $file
done
ls
INDEX=1
for file in `find . | grep -v "^\.$"`
do
  mv $file image${INDEX}.jpg
  let INDEX+=1
done
ls
cd ..
git add -A
git commit -m "Updated images"
git push
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-gpu http://brianjester.github.io/index.html
