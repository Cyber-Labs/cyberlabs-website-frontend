count=0
for i in ./public/assets/img/*/*.jpg
do
	count=`expr $count + 1`
	W=`identify $i | cut -f 3 -d " " | sed s/x.*//` #width'
	echo $i
	echo width= $W
	if test $W -ge 300; then
	convert $i -resize 300 $i
	convert $i -quality 70 $i
	fi
done
for i in ./public/assets/img/*/*.png
do
	count=`expr $count + 1`
	W=`identify $i | cut -f 3 -d " " | sed s/x.*//` #width'
	echo $i
	echo width= $W
	if test $W -ge 300; then
	convert $i -resize 300 $i
	convert $i -quality 70 $i
	fi
done
echo "Total images changes: $count"




