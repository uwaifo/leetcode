<?php
/*
 * Complete the 'test' function below.
 *
 * The function accepts following parameters:
 *  1. STRING firstDate
 *  2. STRING secondDate
 *  3. STRING dayOfWeek
 */

function test($firstDate, $secondDate, $dayOfWeek) {
    //
    file_get_contents('https://jsonmock.hackerrank.com/api/stocks');
    $theResponse = file_get_contents('https://jsonmock.hackerrank.com/api/stocks');  


    //if $dayOfWeek is not contained in defWeekdayArray exit with -1
    $defWeekdayArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if(in_array($dayOfWeek,$defWeekdayArray)) {
        //echo 'its here'. "\n";

      // echo $firstDate. "\n";
       echo $firstDate = date('d-m-Y',strtotime($firstDate));
       echo " to ";
       echo $secondDate = date('d-m-Y',strtotime($secondDate))."\n";

       /////////////////////////////
       $begin = new DateTime($firstDate);
       $end = new DateTime($secondDate);
       $end = $end->modify( '+1 day' ); 
       
       $interval = new DateInterval('P1D');
       $daterange = new DatePeriod($begin, $interval ,$end);
       
       foreach($daterange as $date){
           if ($date->format("l") == $dayOfWeek){
           // echo "" . $date->format("l j-F-Y") . "\n";
            $base_url = 'https://jsonmock.hackerrank.com/api/stocks/?date=';
            //$base_url = $theResponse.'/?date=';
            $query_url = $base_url.$date->format("j-F-Y");
           // echo $query_url. "\n";

            $response_json = file_get_contents($query_url);
            $response_json = json_decode($response_json,true);
            //echo $response_json;
            //var_dump($response_json);
            
            if(isset($response_json['data'])){
               // var_dump($response_json['data']);
                foreach ($response_json['data'] as $stock) {
                    extract($stock);
                    //var_dump([$open, $low]);
                    echo $date.' '.$open.' '.$close. "\n";
                }
            };
            
           }
           //echo $date->format("d-m-y") . "<br>";
           //echo "" . $date->format("l") . "\n";
       }
       ///////////////////////
       

        
    } else {
        return $dayOfWeek .' is not a defined working day.';
    }
    //file_get_contents('https://jsonmock.hackerrank.com/api/stocks');

    //$theResponse = file_get_contents('https://jsonmock.hackerrank.com/api/stocks');  
    //var_dump($theResponse);

    //print_r($firstDate);
}


$start_date = '1-January-2000';
$end_date = '22-February-2000';
$week_day = 'Monday';

echo test($start_date,$end_date,$week_day);

?>