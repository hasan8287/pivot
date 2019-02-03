-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 03 Feb 2019 pada 15.02
-- Versi server: 10.1.37-MariaDB
-- Versi PHP: 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pivot`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `order`
--

CREATE TABLE `order` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `order`
--

INSERT INTO `order` (`id`, `first_name`, `last_name`, `email`, `item`, `quantity`, `price`) VALUES
(1, 'fuad', 'hasan', 'hasan@gmail.com', 'Barang1', 2, '10000.00'),
(2, 'ahmad', 'hadi', 'ahmad@gmail.com', 'Barang2', 1, '4000.00'),
(3, 'irman', 'nur', 'nur@gmail.com', 'Barang1', 4, '10000.00'),
(4, 'mail', 'simail', 'simail@gmail.com', 'Barang3', 1, '70000.00'),
(5, 'lisa', 'lis', 'lisa@gmail.com', 'Barang1', 2, '9000.00'),
(6, 'amdre', 'amd', 'amdre@gmail.com', 'Barang4', 6, '8000.00'),
(7, 'mahmud', 'mud', 'mahmud@gmail.com', 'Barang1', 3, '60000.00'),
(8, 'mimin', 'min', 'mimin@gmail.com', 'Barang1', 1, '10000.00'),
(9, 'sukma', 'ma', 'sukma@gmail.com', 'Barang5', 2, '12000.00'),
(10, 'faizal', 'zal', 'faizal@gmail.com', 'Barang1', 1, '10000.00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `order`
--
ALTER TABLE `order`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
