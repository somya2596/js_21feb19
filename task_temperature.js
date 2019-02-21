<script>
var array = [
    { day: "monday", temperature: 50 },
    {
        day: "tuesday", temperature: 100
    },

    {
        day: "wednesday", temperature: 150
    },
];
function getMax() {
    let max=0;
  
    for (let i = 0;i < array.length; i++) {
    max=max+array[i].temperature;
    }
  
    return max;
  }
  
var max_temp=getMax();
</script>

















/*console.log(findMinMax(array));
function mean(array1) {
    var total = 0;
    var i;
    for (i = 0; i < array1.length; i += 1) {
        total += array1[i];
    
    var mean=total / array1.length;
}
return mean;
}
console.log(mean(array));
function Mode(arr) {
    var mode = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[j] === arr[i]) {
                mode = arr[j];
                count++;
                console.log(count);

            }
        }
    }
    return mode;
}
console.log(Mode(array));*/