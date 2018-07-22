#!/bin/bash
# getImages.sh - script to get images from a PDF
PDF_URL=https://www.e-churchbulletins.com/bulletins/
PDF_NAME=977090
MY_HOME=/Users/brian/brianjester.github.com
IMAGE_DIR=images
FB_POST=https://brianjester.github.io/index.html
#DATE=`date +%Y-%m-%d`
#mkdir ${DATE}
rm ${MY_HOME}/${IMAGE_DIR}/*.jpg
curl ${PDF_URL}${PDF_NAME}.pdf > ${MY_HOME}/${PDF_NAME}.pdf
if [ ! -f /usr/local/bin/pdfimages ]; then
  echo "No poppler package (pdfimages) found."
  exit 1
fi
/usr/local/bin/pdfimages  -f 1 -l 1 -all ${MY_HOME}/${PDF_NAME}.pdf ${MY_HOME}/${IMAGE_DIR}/${PDF_NAME}
rm ${MY_HOME}/${PDF_NAME}.pdf
rm ${MY_HOME}/${IMAGE_DIR}/*.params 
rm ${MY_HOME}/${IMAGE_DIR}/*.ccitt
for file in `find ${MY_HOME}/${IMAGE_DIR} -size -100k | grep -v "^${MY_HOME}/${IMAGE_DIR}$"`
do
  rm $file
done
ls
INDEX=1
for file in `find ${MY_HOME}/${IMAGE_DIR} | grep -v "^${MY_HOME}/${IMAGE_DIR}$"`
do
  mv $file ${MY_HOME}/${IMAGE_DIR}/image${INDEX}.jpg
  let INDEX+=1
done
ls
cd ${MY_HOME}
git add ${MY_HOME}
git commit -m "Updated images" -- ${MY_HOME}
git push
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-gpu https://brianjester.github.io/index.html?p=REDACTED
