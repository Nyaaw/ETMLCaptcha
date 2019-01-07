<?php
    $type = array(
        CALCULATIONS => "calculations",
        PICTURES => "pictures",
        TEXT => "text"
    );
    $type = $_POST['t'];
    $question = $_POST['q'];
    $answer = $_POST['a'];
    $ret = false;
    switch($type) {
        case $type[CALCULATIONS]:
        while (strpos($question, 'x') !== false) ){
            str_replace("x", "*", $question);
        }
            if(eval('return '.$question.';') === $answer){
                $ret = true;
            }
        break;

        case $type[PICTURES]:
        break;

        case $type[TEXT]:
        break;
    }

    echo json_encode($ret);

?>