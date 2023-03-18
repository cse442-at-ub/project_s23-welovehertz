<?php
    class DbConn{
        private $server = 'oceanus.cse.buffalo.edu';
        private $database = 'cse442_2023_spring_team_h_db';
        private $user = 'alin82';
        private $password = '50345282';
        
        public function connect() {
            try {
                $conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->database, $this->user, $this->password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            } catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
        }

    }





?>
