COUNT=0
INPUT_DIR=./src/images-uncompressed
OUTPUT_DIR=./public/assets/img
OUTPUT_OPTIMISED_DIR=./public/assets/img/opImg

for originalImg in $INPUT_DIR/*/*.*g
do
	W=`identify $originalImg | cut -f 3 -d " " | sed s/x.*//` #width'
	
	DIR_NAME=`basename $(dirname $originalImg)`
	IMG_NAME=`basename  $originalImg`
	OUTPUT_PATH=$OUTPUT_DIR/$DIR_NAME/$IMG_NAME
	OUTPUT_OPTIMISED_PATH=$OUTPUT_OPTIMISED_DIR/$DIR_NAME/$IMG_NAME

	if [ $W -gt 300 ]
	then
		((COUNT++))
		convert $originalImg -resize 300 $OUTPUT_PATH
		convert $originalImg -quality 50 $OUTPUT_PATH

		convert $originalImg -resize 300 $OUTPUT_OPTIMISED_PATH
		convert $originalImg -quality 1 $OUTPUT_OPTIMISED_PATH
	fi
done

echo "Total changes: $COUNT"