<?php
    require ("lang.php");
    require ("calendar.php");
?>

<!DOCTYPE html>
<html lang="<?=$lang?>">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calendar</title>
    </head>
    <body>
        <div class="calendar">
            <?php foreach($calendar2020 as $month) : ?>
                <div style="display: flex; flex-direction: row;">
                    <span style="color: cadetblue; font-size: 24px"> <?=Lang($month['tag'])?></span>
                    <?php for( $i = 1; $i < $month['days']; ++$i ) : ?>
                    <span class="<?php if( checkHoliday($month, $i) ) : ?> red <? endif; ?>" style="margin: 2px; padding: 2px; border: 1px solid #000"> <?=$i?> </span>
                    <?php endfor; ?>
                </div> 
            <?php endforeach; ?>
        </div>
    </body>

    <style>
        .red {
            background: red;
        }
    </style>
</html>