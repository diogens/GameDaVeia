-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           5.1.72-community - MySQL Community Server (GPL)
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para veia
CREATE DATABASE IF NOT EXISTS `veia` /*!40100 DEFAULT CHARACTER SET latin2 */;
USE `veia`;

-- Copiando estrutura para tabela veia.velha
CREATE TABLE IF NOT EXISTS `velha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jogadorX` varchar(30) DEFAULT NULL,
  `jogadorO` varchar(30) DEFAULT NULL,
  `jogadas` varchar(30) DEFAULT NULL,
  `img` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin2;

-- Exportação de dados foi desmarcado.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
