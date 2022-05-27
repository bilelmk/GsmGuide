-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2022 at 07:19 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gsm-guide`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` bigint(20) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `firstname`, `lastname`, `password`, `username`) VALUES
(1, 'Bilel', 'Mekrazi', '$2a$10$MIug73l1HW8vFR66bI6ny.v.WT7NjgDze21ReD55mqRPCtayjr9KK', 'bilelmek');

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `model_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `name`, `model_id`) VALUES
(1, 'A52', 1),
(2, 'A01', 1),
(3, 'A02', 1),
(4, 'A02s', 1),
(5, 'S10', NULL),
(6, 'J2', 1),
(7, 'A01 core', 1),
(8, 'A11', 1),
(9, 'A12', 1),
(10, 'A10', 1),
(11, 'A10s', 1),
(12, 'A20', 1),
(13, 'A20e', 1),
(14, 'A20s', 1),
(15, 'A21s', 1),
(16, 'IPHONE 11', 5),
(17, 'qsdqsd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` bigint(20) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_confirmed` bit(1) NOT NULL,
  `is_valid` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `firstname`, `lastname`, `password`, `phone`, `email`, `is_confirmed`, `is_valid`) VALUES
(1, 'Bilel', 'Mekrazi', '$2a$10$IB8jc69BENR6Eyy4bIUWJ.jYgySqhUgCDGSMgDDoN7NBKtOPpF..i', '26871743', 'bilelmek@gmail.com', b'1', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `address`, `latitude`, `longitude`) VALUES
(1, 'Varthage', 36.8355, 10.3271);

-- --------------------------------------------------------

--
-- Table structure for table `mark`
--

CREATE TABLE `mark` (
  `mark_id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mark`
--

INSERT INTO `mark` (`mark_id`, `name`) VALUES
(1, 'SAMSUNG'),
(2, 'APPLE'),
(3, 'HUAWEI'),
(4, 'OPPO'),
(5, 'NOKIA'),
(6, 'INFINIX'),
(7, 'TECHNO'),
(8, 'XIAOMI'),
(9, 'ITEL');

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

CREATE TABLE `model` (
  `model_id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mark_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `model`
--

INSERT INTO `model` (`model_id`, `name`, `mark_id`) VALUES
(1, 'SAMSUNG A', 1),
(4, 'SAMSUNG S/Note', 1),
(5, 'IPHONE', 2),
(6, 'NOKIA', 5),
(7, 'HUAWEI', 3),
(8, 'OPPO', 4),
(15, 'SAMSUNG J', 1),
(17, 'INFINIX', 6),
(18, 'TECHNO', 7),
(19, 'XIAOMI', 8),
(20, 'IPAD', 2),
(21, 'Mac', 2),
(22, 'ITEL', 9),
(26, 'qsdqsd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `part`
--

CREATE TABLE `part` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `part`
--

INSERT INTO `part` (`id`, `name`, `description`) VALUES
(1, 'AFFICHEUR', 'aaaaaaaaa'),
(2, 'VITRE', NULL),
(3, 'CAMERA', NULL),
(4, 'BATTERIE', NULL),
(6, 'MICRO', 'test test');

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `id` bigint(20) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  `quality` varchar(255) DEFAULT NULL,
  `article_id` bigint(20) DEFAULT NULL,
  `part_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`id`, `price`, `quality`, `article_id`, `part_id`) VALUES
(1, '100', 'AA', 2, 1),
(2, '140', 'OR', 2, 1),
(3, '80', '--', 2, 2),
(10, '20', 'AAAAAA', 2, 2),
(11, '50', 'S', 2, 3),
(12, '50', '', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `description` varchar(3000) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `visible` bit(1) NOT NULL,
  `client_id` bigint(20) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `description`, `image`, `name`, `price`, `quantity`, `visible`, `client_id`, `creation_date`) VALUES
(1, 'Wdff', 'images/blob.jpeg', 'Smartphone Sumsung a52s', 88, 555, b'1', 1, NULL),
(2, 'Fff', 'images/10c65797-6b70-4333-acb0-35bca27a9ebe.jpeg', 'Smartphone Sumsung a21', 88, 88, b'1', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` bigint(20) NOT NULL,
  `article` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `mark` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `part` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `client_id` bigint(20) DEFAULT NULL,
  `repairer_id` bigint(20) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `article`, `date`, `mark`, `model`, `part`, `price`, `state`, `client_id`, `repairer_id`, `creation_date`) VALUES
(1, 'A01', '2022-04-26T12:55:12.286-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', 0, 1, 3, '2022-04-27 10:51:40'),
(2, 'qsdqsd', 'qsdqsd', 'qsdqsdqsd', 'qsdqsd', 'qsdqsd', 'qsdqsdqsd', 0, 2, 2, '2022-04-27 12:14:56'),
(6, 'A01', '2022-04-27T16:26:49.535-00:00', 'aaaaaaaaaaaa', 'SAMSUNG A', 'AFFICHEUR', '140', 1, 1, 2, '2022-04-27 16:27:46'),
(7, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 3, '2022-04-28 08:10:33'),
(8, 'A01', '2022-04-28T08:10:15.994-00:00', 'bbbbbbbbbbb', 'SAMSUNG A', 'AFFICHEUR', '100', 4, 1, 2, '2022-04-28 08:14:52'),
(9, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 3, '2022-04-28 08:14:55'),
(10, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', 0, 1, 2, '2022-04-28 08:14:56'),
(11, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 3, '2022-04-28 08:14:57'),
(12, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 3, '2022-04-28 08:14:59'),
(13, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 3, '2022-04-28 08:15:08'),
(14, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSCCCCC', 'SAMSUNG A', 'AFFICHEUR', '100', 3, 1, 2, '2022-04-28 08:15:09'),
(15, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 2, '2022-04-28 08:15:09'),
(16, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 2, '2022-04-28 08:15:09'),
(17, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, 2, '2022-04-28 08:15:10'),
(18, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:10'),
(19, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:11'),
(20, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:11'),
(21, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:11'),
(22, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:12'),
(23, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:12'),
(24, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:12'),
(25, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:13'),
(26, 'A01', '2022-04-28T08:10:15.994-00:00', 'SAMSUNG', 'SAMSUNG A', 'AFFICHEUR', '100', NULL, 1, NULL, '2022-04-28 08:15:13');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `is_confirmed` bit(1) NOT NULL,
  `is_valid` bit(1) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `is_confirmed`, `is_valid`, `lastname`, `password`, `phone`, `role`, `username`) VALUES
(1, 'Bilel', b'0', b'1', 'Mekrazi', '$2a$10$H4skAGVTFjnlyiU46g4o1OpMtUgzYt4vqwERTA2sOsD0/c6/QujCO', '26871743', 0, 'bilelmek'),
(2, 'khaled', b'0', b'1', 'adwani', '$2a$10$jbcMELG7dzw/2v.oCyz8kuE23KMoSlP40D4sBcUXFngxeGD909SS6', '25369874', 1, 'jamra'),
(3, 'BAROUDI', b'0', b'1', 'Mohamed', '$2a$10$NGsxTQxIG1w8nA3L.D41Q.rN4yHb7tIp8FqLKQmyMHywEOZbv6jFa', '23232323', 1, 'moha');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKlkodx8ftp0x69tqtakuhxfxak` (`model_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mark`
--
ALTER TABLE `mark`
  ADD PRIMARY KEY (`mark_id`);

--
-- Indexes for table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`model_id`),
  ADD KEY `FKtj5rabfi6sypr43683jbhs78g` (`mark_id`);

--
-- Indexes for table `part`
--
ALTER TABLE `part`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKn5ppe7xxepiptwfyrab9nmtak` (`article_id`),
  ADD KEY `FKqbtr6fd3x8bwe3r2021gw4ctu` (`part_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7gifru1bjwvsy194dmglslic0` (`client_id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKex2mlbjmdxtuwbu7tacnehsq0` (`client_id`),
  ADD KEY `FKmktnqwmexj98ivlyvhics6bsr` (`repairer_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `mark`
--
ALTER TABLE `mark`
  MODIFY `mark_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `model`
--
ALTER TABLE `model`
  MODIFY `model_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `part`
--
ALTER TABLE `part`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FKlkodx8ftp0x69tqtakuhxfxak` FOREIGN KEY (`model_id`) REFERENCES `model` (`model_id`);

--
-- Constraints for table `model`
--
ALTER TABLE `model`
  ADD CONSTRAINT `FKtj5rabfi6sypr43683jbhs78g` FOREIGN KEY (`mark_id`) REFERENCES `mark` (`mark_id`);

--
-- Constraints for table `price`
--
ALTER TABLE `price`
  ADD CONSTRAINT `FKn5ppe7xxepiptwfyrab9nmtak` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `FKqbtr6fd3x8bwe3r2021gw4ctu` FOREIGN KEY (`part_id`) REFERENCES `part` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK7gifru1bjwvsy194dmglslic0` FOREIGN KEY (`client_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `FKex2mlbjmdxtuwbu7tacnehsq0` FOREIGN KEY (`client_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKmktnqwmexj98ivlyvhics6bsr` FOREIGN KEY (`repairer_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
