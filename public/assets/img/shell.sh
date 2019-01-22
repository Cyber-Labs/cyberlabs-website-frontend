for i in ./public/assets/img/alumni/*.jpg
do
	W=`identify $i | cut -f 3 -d " " | sed s/x.*//` #width'
	echo $W
	if test $W -ge 300; then
	convert $i -resize 300 ./public/assets/img/alumni/$i
	fi
	convert $i -quality 70 ./public/assets/img/alumni/$i
done

for i in ./public/assets/img/alumni/*.png
do
	W=`identify $i | cut -f 3 -d " " | sed s/x.*//` #width'
	echo $W
	if test $W -ge 300; then
	convert $i -resize 300 ./public/assets/img/alumni/$i
	fi
	convert $i -quality 70 ./public/assets/img/alumni/$i
done
