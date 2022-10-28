<html>
    <body>
        <h1>
            TEAM:
            <ul>
                <?php 
                    $json = file_get_contents("http://players/");
                    $players = json_decode($json)->players;
                    foreach ($players as $player)
                        echo "<li>$player</li>";
                
                    echo "Test"
                ?>
            </ul>
        </h1>
    </body>
</html>
