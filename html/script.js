<script language="javascript">

var delay=1000 //set delay in miliseconds
var curindex=0

var randomimages=new Array()

randomimages[0]="images/NoahCameToVisit/DSC00179.JPG"
randomimages[1]="images/NoahCameToVisit/DSC00188.JPG"
randomimages[2]="images/NoahCameToVisit/DSC00193.JPG"
randomimages[3]="images/NoahCameToVisit/DSC00195.JPG"
randomimages[4]="images/NoahCameToVisit/DSC00198.JPG"
randomimages[5]="images/NoahCameToVisit/DSC00201.JPG"



var preload=new Array()

for (n=0;n<randomimages.length;n++)
{
preload[n]=new Image()
preload[n].src=randomimages[n]
}

document.write('<img name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

function rotateimage()
{

if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
curindex=curindex==0? 1 : curindex-1
}
else
curindex=tempindex

document.images.defaultimage.src=randomimages[curindex]
}

setInterval("rotateimage()",delay)

</script>