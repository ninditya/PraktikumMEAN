/*
Write a function:
class Solution { public int solution(int[] A); }
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

<?php
$array[0] = array(1,3,6,4,1,2);
$array[1] = array(1,2,3);
$array[2] = array(-1,-3);

function solution($array){
	//jika didalam array tidak ada 1 dan max array < 1 return 1
	if(in_array(1, $array) == false || max($array) < 1){
		echo 1;
	}else{
		$i=3;
		do {
			//jika $i tidak ada didalam array dan odd integer return $i
			if (in_array($i, $array)==false && $i%2 != 0) {
				echo $i;
				break;
			}elseif ($i == max($array)) {
				//jika $i == max array tidak ada odd integer maka
				//jika max array bil. genap, maka max array + 1
				if(max($array)%2 == 0){
					echo (max($array))+1;
				}else{
				//jika max array bil. ganjil, maka max array + 1
					echo (max($array))+2;
				}
			}
			$i++;
		} while ($i <= max($array));
	}
	print_r("<br>");
}

foreach ($array as $key => $value) {
	print_r("Array ke-".$key." = ");
	$A = solution($array[$key]);
	print_r($A);
}
?>


// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const max = A.reduce(function(a, b) {
//       return Math.max(a, b);
//     });
//     if (max <= 0) {
//       return 1;
//     }
//     for (i = 1; i <= max; i++) {
//       if (!A.includes(i)) {
//         return i;
//       }
//     }
//     return max + 1;
//   }