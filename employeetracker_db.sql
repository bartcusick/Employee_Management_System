DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    salary INT DEFAULT 0 NOT NULL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
        REFERENCES department (id)
);

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- ///////////////////////////
--       INSERT INTO employee
--         (first_name, last_name, title, dept_id, salary, manager_id)
--       VALUES
--         ("J Jonah", "Jamason", "Manager", "news", "350,000", "Null"),
--         ("Peter", "Parker", "Photographer", "FreeLance", "Var", "Jonah Jameson"),
--         ("Edward", "Brock", "Photographer", "FreeLance", "Var", "Jonah Jameson"),
--         ("Mary", "Watson", "Model", "Fashion", "150,000", "Jonah Jameson"),
--         ("Ned", "Leeds", "Software Engineer", "Engeneering", "120000", "Jonah Jameson"),
--         ("Elizabeth", "Brant", "Account Manager", "Finance", "16000", "Jonah Jameson"),
--         ("Fredrick", "Foswell", "Accountant", "Finance", "125000", "Jonah Jameson"),
--         ("Gloria", "Grant", "Legal Team Lead", "Legal", "250000", "Jonah Jameson"),
--         ("Janet", "Van Dyne", "Lawyer", "Legal", "190000", "Jonah Jameson")

--       SELECT * FROM employee;
--       SELECT * FROM role;
--       SELECT * FROM department;