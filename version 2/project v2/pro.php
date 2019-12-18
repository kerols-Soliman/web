<?php
    if(isset($_POST['object'])){
        $actio=json_decode($_POST['object'],true);

        $key=$actio['key'];
        $value=$actio['value'];
        $conn=new mysqli('localhost','root','root','project');
        if($conn->connect_error){
            die ($conn->connect_error);
        }
        $sql="Insert into dat values('$key','$value')";
        $conn->query($sql);
        if($conn->affected_rows >0){ 
            echo "  inserted";
        }else{
            echo "  not inserted";
        }
    }

    //show from database
    if(isset($_GET['object'])){
        $conn=new mysqli('localhost','root','root','project');
        if($conn->connect_error){
            die($conn->connect_error);
        }
        
        $sql="select * from dat";
        $dataresult=$conn->query($sql);
        echo "<tr>.
            <th>action</th>.
            <th>value</th>.
            </tr>";
        if($dataresult->num_rows >0){
            while($row=$dataresult->fetch_assoc()){
                echo "<tr>";
                echo "<td>" . $row['action'] . "</td>";
                echo "<td>" . $row['value'] . "</td>";
                echo "</tr>";
            }
        }else{
            echo "<tr colspan='2'>no data</tr>";
        }
        
    }
?>