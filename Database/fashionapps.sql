-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2021 at 01:50 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fashionapps`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(100) UNSIGNED NOT NULL,
  `nama_produk` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `kode_produk` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `merek` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `ukuran/size` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `warna` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `bahan_produk` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `asal_produk` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `dikirim_dari` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `deskripsi_produk` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `harga_produk` varchar(255) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `nama_produk`, `kode_produk`, `merek`, `ukuran/size`, `warna`, `bahan_produk`, `asal_produk`, `dikirim_dari`, `deskripsi_produk`, `harga_produk`) VALUES
(1, 'T-Shirt Daisy Black', 'T-01', 'Erigo', 'All Size', 'Black and White', 'Katun', 'Lokal (Indonesia)', 'Kab.Tangerang - Legok, Banten', 'T-Shirt', 'RP 135000'),
(2, 'Women\'s Easy Wrap Hooded Dress ', 'H-01', 'Nasty Gal', 'XXS - XXL', 'Black', 'Medium Fleece', 'Luar Negeri (France)', 'Senayan City - Jakarta', 'Hooded Dress', 'Rp 500000'),
(4, 'Atasan Kemeja Sophie Mucia Stripe Shirt', 'K-01', 'Berrybenka', 'Xs - Xl', 'White, Dusty Pink, Blue ', 'Rayon', 'Lokal (Indonesia)', 'Kota Tangerang Selatan, Setu, Kab.Banten, IND', 'Striple Shirt', 'RP 270000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kode_produk` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
