COUNT=0
INPUT_DIR=./src/images
OUTPUT_DIR=./public/assets/img
OUTPUT_OPTIMISED_DIR=./public/assets/img/opImg

for originalImg in $INPUT_DIR/*/*.*g
do
	W=`identify $originalImg | cut -f 3 -d " " | sed s/x.*//` #width'
	
	DIR_NAME=`basename $(dirname $originalImg)`
	IMG_NAME=`basename  $originalImg`
	OUTPUT_PATH=$OUTPUT_DIR/$DIR_NAME/$IMG_NAME
	OUTPUT_OPTIMISED_PATH=$OUTPUT_OPTIMISED_DIR/$DIR_NAME/$IMG_NAME
	FILESIZE=$(du -k $originalImg | cut -f 1)
	
	echo Current Image: $IMG_NAME
	echo Input Path: $originalImg
	echo Output Path: $OUTPUT_PATH
	# echo Optimised Image Path: $OUTPUT_OPTIMISED_PATH
	echo __________________________________________

	if [ $W -gt 300 ] || [ $FILESIZE -gt 50 ];
	then
		((COUNT++))
		convert $originalImg -resize 300 $OUTPUT_PATH
		convert $OUTPUT_PATH -quality 50 $OUTPUT_PATH
	fi
	# convert $originalImg -resize 300 $OUTPUT_OPTIMISED_PATH
done

echo "Total changes: $COUNT"