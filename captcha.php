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
		$hiddenSpan = "<span hidden>null</span>";
		while (strpos($question, '&lt') !== false) ){
            $question = str_replace("&lt", "<", $question);
        }
		while (strpos($question, '&gt') !== false) ){
            $question = str_replace("&gt", ">", $question);
        }
		//Supprimer les span null
		$question = str_replace("(".$hiddenSpan, "(", $question;
		$final = str_replace(")".$hiddenSpan, "(", $question;
		//Remplacement des éventuels x par des *
        while (strpos($final, 'x') !== false) ){
            $final = str_replace("x", "*", $final);
        }
            if(eval('return '.$final.';') === $answer){
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