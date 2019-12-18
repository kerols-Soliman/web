-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2019 at 09:25 PM
-- Server version: 5.6.24-log
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `dat`
--

CREATE TABLE `dat` (
  `action` text NOT NULL,
  `value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dat`
--

INSERT INTO `dat` (`action`, `value`) VALUES
('2.[object HTMLDocument]', 'load 10:22:29 PM'),
('1.[object HTMLDocument]', 'unload 10:22:09 PM'),
('3.Generate', 'click 10:22:34 PM'),
('3.L', 'click 10:22:38 PM'),
('1.Q', 'click 10:22:36 PM'),
('4.U', 'click 10:22:39 PM'),
('2.E', 'click 10:22:37 PM'),
('2.Q', 'click 10:22:43 PM'),
('4.L', 'click 10:22:46 PM'),
('1.I', 'click 10:22:42 PM'),
('3.E', 'click 10:22:44 PM'),
('1.E', 'click 10:24:58 PM');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
