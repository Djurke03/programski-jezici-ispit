-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for pc_shop
DROP DATABASE IF EXISTS `pc_shop`;
CREATE DATABASE IF NOT EXISTS `pc_shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `pc_shop`;

-- Dumping structure for table pc_shop.customer
DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_id`) USING BTREE,
  UNIQUE KEY `uq_customer_email` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table pc_shop.customer: ~3 rows (approximately)
INSERT INTO `customer` (`customer_id`, `name`, `email`, `phone`, `address`, `updated_at`, `deleted_at`) VALUES
	(1, 'John Doe', 'john.doe@example.com', '123-456-7890', '123 Elm St, Springfield, IL', NULL, NULL),
	(2, 'Jane Smith', 'jane.smith@example.com', '987-654-3210', '456 Oak St, Springfield, IL', NULL, NULL),
	(3, 'Alice Johnson', 'alice.johnson@example.com', '555-123-4567', '789 Pine St, Springfield, IL', NULL, NULL);

-- Dumping structure for table pc_shop.product
DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `price` double unsigned NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table pc_shop.product: ~5 rows (approximately)
INSERT INTO `product` (`product_id`, `name`, `description`, `price`, `updated_at`, `deleted_at`) VALUES
	(1, 'CPU', 'Ryzen 7 7700x', 329.99, NULL, NULL),
	(2, 'GPU', 'NVIDIA GeForce RTX 3080', 699.99, NULL, NULL),
	(3, 'RAM', 'Corsair Vengeance 16GB DDR4', 89.99, NULL, NULL),
	(4, 'SSD', 'Samsung 970 EVO 1TB', 129.99, NULL, NULL),
	(5, 'PSU', 'Corsair RM750x 750W', 119.99, NULL, NULL);

-- Dumping structure for table pc_shop.sale
DROP TABLE IF EXISTS `sale`;
CREATE TABLE IF NOT EXISTS `sale` (
  `sale_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `customer_id` int(10) unsigned NOT NULL,
  `quantity` int(2) unsigned NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`sale_id`),
  KEY `fk_sale_product_id` (`product_id`),
  KEY `fk_sale_customer_id` (`customer_id`),
  CONSTRAINT `fk_sale_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_sale_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table pc_shop.sale: ~5 rows (approximately)
INSERT INTO `sale` (`sale_id`, `product_id`, `customer_id`, `quantity`, `deleted_at`) VALUES
	(1, 1, 1, 1, NULL),
	(2, 2, 2, 1, NULL),
	(3, 3, 3, 2, NULL),
	(4, 4, 1, 1, NULL),
	(5, 5, 2, 1, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
