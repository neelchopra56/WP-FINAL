create database tunetown;
use tunetown;

create table users(username varchar(20) primary key, email varchar(100), password varchar(20));

alter user 'root'@'localhost' identified WITH mysql_native_password by 'root';