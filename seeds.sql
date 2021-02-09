USE employeeTracker_db;

-- INSERT INTO employees (first_name, last_name, title, dept_id, salary, manager_id)
-- VALUES  ("J Jonah", "Jamason", "Manager", "news", "350,000", "Null"),
--         ("Peter", "Parker", "Photographer", "FreeLance", "Var", "Jonah Jameson"),
--         ("Edward", "Brock", "Photographer", "FreeLance", "Var", "Jonah Jameson"),
--         ("Mary", "Watson", "Model", "Fashion", "150,000", "Jonah Jameson"),
--         ("Ned", "Leeds", "Software Engineer", "Engineering", "120000", "Jonah Jameson"),
--         ("Elizabeth", "Brant", "Account Manager", "Finance", "16000", "Jonah Jameson"),
--         ("Fredrick", "Foswell", "Accountant", "Finance", "125000", "Jonah Jameson"),
--         ("Gloria", "Grant", "Legal Team Lead", "Legal", "250000", "Jonah Jameson"),
--         ("Janet", "Van Dyne", "Lawyer", "Legal", "190000", "Jonah Jameson")


-- // Departments
INSERT INTO department (department_name) VALUES ('Freelance');
INSERT INTO department (department_name) VALUES ('Fashion');
INSERT INTO department (department_name) VALUES ('Engineering');
INSERT INTO department (department_name) VALUES ('Finance');
INSERT INTO department (department_name) VALUES ('Legal');
INSERT INTO department (department_name) VALUES ('News');

-- // Roles 
INSERT INTO roles (title, salary, department_id) VALUES ('Manager', 350000, 5);
INSERT INTO roles (title, salary, department_id) VALUES ('Photographer', 0, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Fashion', 150000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 150000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Account Manager', 45000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 125000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 6);
INSERT INTO roles (title, salary, department_id) VALUES ('Lawyer', 190000, 6);

-- // Managers
INSERT INTO employees (first_name, last_name, role_id) VALUES ("J Jonah", "Jamason", 1);

-- //Employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Peter', 'Parker', 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Eddie', 'Brock', 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('J Jonah', 'Jamason', 1, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Mary', 'Watson', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Ned', 'Leeds', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Elizabeth', 'Brant', 2, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Fredrick', 'Foswell', 3, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Gloria', 'Grant', 3, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Janet', 'Van Dyne', 3, 1);
