-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dic 04, 2016 alle 22:14
-- Versione del server: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sunupartage`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `classe`
--

CREATE TABLE IF NOT EXISTS `classe` (
  `nomClasse` varchar(20) NOT NULL,
  `serie` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `eleve`
--

CREATE TABLE IF NOT EXISTS `eleve` (
  `login` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nomEleve` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `validation` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `fichier`
--

CREATE TABLE IF NOT EXISTS `fichier` (
  `nomFichier` varchar(50) NOT NULL,
  `dateInit` date NOT NULL,
  `dateModif` date NOT NULL,
  `nomClasse` varchar(20) NOT NULL,
  `Login_Eleve` varchar(50) NOT NULL,
  `nomMatiere` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `matiere`
--

CREATE TABLE IF NOT EXISTS `matiere` (
  `nomMatiere` varchar(50) NOT NULL,
  `Login_Eleve` varchar(50) NOT NULL,
  `nomClasse` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`nomClasse`);

--
-- Indexes for table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`login`);

--
-- Indexes for table `fichier`
--
ALTER TABLE `fichier`
  ADD PRIMARY KEY (`nomFichier`,`Login_Eleve`), ADD KEY `nomMatiere` (`nomMatiere`), ADD KEY `Login_Eleve` (`Login_Eleve`), ADD KEY `nomClasse` (`nomClasse`);

--
-- Indexes for table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`nomMatiere`), ADD KEY `Login_Eleve` (`Login_Eleve`), ADD KEY `nomClasse` (`nomClasse`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `classe`
--
ALTER TABLE `classe`
ADD CONSTRAINT `classe_ibfk_1` FOREIGN KEY (`nomClasse`) REFERENCES `eleve` (`login`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limiti per la tabella `fichier`
--
ALTER TABLE `fichier`
ADD CONSTRAINT `fichier_ibfk_1` FOREIGN KEY (`Login_Eleve`) REFERENCES `eleve` (`login`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fichier_ibfk_2` FOREIGN KEY (`nomMatiere`) REFERENCES `matiere` (`nomMatiere`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fichier_ibfk_3` FOREIGN KEY (`nomClasse`) REFERENCES `classe` (`nomClasse`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `matiere`
--
ALTER TABLE `matiere`
ADD CONSTRAINT `matiere_ibfk_1` FOREIGN KEY (`Login_Eleve`) REFERENCES `eleve` (`login`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `matiere_ibfk_2` FOREIGN KEY (`nomClasse`) REFERENCES `classe` (`nomClasse`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
