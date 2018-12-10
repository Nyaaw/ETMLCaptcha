<?php
    type = array(
        CALCULATIONS => "calculations",
        PICTURES => "pictures",
        TEXT => "text"
    );
    $type = $_GET['t'];
    $question = $_GET['q'];
    $answer = $_GET['a'];
    $ret = false;
    switch($type) {
        case type[CALCULATIONS]:
            str_replace("x", "*", $question);
            if(eval('return '.$question.';') === $answer){
                $ret = true;
            }
        break;

        case type[PICTURES]:
        break;

        case type[TEXT]:
        break;
    }

    echo json_encode($ret);

?>