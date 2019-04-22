-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 22-Abr-2019 às 04:22
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loja`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `descricao` text NOT NULL,
  `tipoItem` varchar(50) NOT NULL,
  `url` varchar(50) NOT NULL,
  `id` int(11) NOT NULL,
  `nomeItem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`descricao`, `tipoItem`, `url`, `id`, `nomeItem`) VALUES
('Abridor de Garrafa', 'Outros', 'Abridor1.png', 1, 'Abridor de Garrafa'),
('Camiseta 2017', 'Camiseta', 'Camiseta1.png', 2, 'Camiseta 2017'),
('Camiseta 2018', 'Camiseta', 'Camiseta2.png', 3, 'Camiseta 2018'),
('Camiseta 2019', 'Camiseta', 'Camiseta3.png', 4, 'Camiseta 2019'),
('Caneca 2017', 'Caneca', 'Caneca1.png', 5, 'Caneca 2017'),
('Caneca 2018', 'Caneca', 'Caneca2.png', 6, 'Caneca 2018'),
('Caneca 2019', 'Caneca', 'Caneca3.png', 7, 'Caneca 2019'),
('Moletom 2017', 'Moletom', 'Moletom1.png', 8, 'Moletom 2017'),
('Moletom 2018', 'Moletom ', 'Moletom2.png', 9, 'Moletom 2018'),
('Moletom 2019 ', 'Moletom', 'Moletom3.png', 10, 'Moletom 2019'),
('Adesivo ', 'Outros', 'Adesivo1.png', 11, 'Adesivo'),
('Chaveiro ', 'Outros', 'Chaveiro1.png', 12, 'Chaveiro');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
