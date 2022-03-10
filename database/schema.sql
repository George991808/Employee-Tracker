Drop SCHEMA IF EXISTS `employee_management` ;
CREATE SCHEMA `employee_management` ;
 -- create dept
CREATE TABLE `employee_management`.`departments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`));
 -- create roles
CREATE TABLE `employee_management`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(30) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_roles_dept_idx` (`department_id` ASC) VISIBLE,
  CONSTRAINT `fk_roles_dept`
    FOREIGN KEY (`department_id`)
    REFERENCES `employee_management`.`departments` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
 -- create employees
CREATE TABLE `employee_management`.`employees` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `role_id` INT UNSIGNED NULL,
  `manager_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_employees_role_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_employees_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `employee_management`.`roles` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- add manager 

ALTER TABLE `employee_management`.`employees` 
ADD INDEX `fk_employees_manager_idx` (`manager_id` ASC) VISIBLE;
;
ALTER TABLE `employee_management`.`employees` 
ADD CONSTRAINT `fk_employees_manager`
  FOREIGN KEY (`manager_id`)
  REFERENCES `employee_management`.`roles` (`id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION;
