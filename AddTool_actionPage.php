<!DOCTYPE html>
<html>

<head>
	<title>forDB</title>
</head>

    <body>
	<?php

		// servername => localhost
		// username => root
		// password => empty
		// database name => HUA_store
		// table name => AddTools
		$conn = mysqli_connect("localhost", "root", "", "HUA_store");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 5 values from the form data(input)
		$Tool_name = $_REQUEST['Tname'];
		$Tool_status = $_REQUEST['Tstatus'];
		$Tool_price = $_REQUEST['Tprice'];
        $Tool_city = $_REQUEST['Tcity'];
		$Tool_contact = $_REQUEST['Tcontact'];

		$Tool_section = $_REQUEST['Tsection'];
        $Tool_type = $_REQUEST['Ttype'];


        $Tool_moreinfo = $_REQUEST['Tminfo'];
        $Tool_pic = $_REQUEST['Tpics'];
        $Tool_vid = $_REQUEST['Tvid'];
        
		// Performing insert query execution
		// here our table name is AddTools
		$sql = "INSERT INTO AddTools VALUES (
            '$Tool_name',
            '$Tool_status',
            '$Tool_price',
            '$Tool_city',

            '$Tool_section',
            '$Tool_type',

            '$Tool_moreinfo',
            '$Tool_pic',
            '$Tool_vid')";
		
		if(mysqli_query($conn, $sql)){
			echo "<h3>data stored in a database successfully."
				. " Please browse your localhost php my admin"
				. " to view the updated data</h3>";
		} else{
			echo "ERROR: $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
	?>
</body>

</html>
