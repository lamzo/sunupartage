-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Creato il: Mar 19, 2017 alle 21:55
-- Versione del server: 10.1.19-MariaDB
-- Versione PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sunupartage`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `classe`
--

CREATE TABLE `classe` (
  `nomClasse` varchar(20) NOT NULL,
  `serie` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `eleve`
--

CREATE TABLE `eleve` (
  `loginEleve` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nomEleve` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nomClasse` varchar(50) NOT NULL,
  `validation` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `fichier`
--

CREATE TABLE `fichier` (
  `nomFichier` varchar(50) NOT NULL,
  `dateInit` date NOT NULL,
  `dateModif` date NOT NULL,
  `nomClasse` varchar(20) NOT NULL,
  `loginEleve` varchar(50) NOT NULL,
  `nomMatiere` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `matiere`
--

CREATE TABLE `matiere` (
  `nomMatiere` varchar(50) NOT NULL,
  `nomClasse` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`nomClasse`);

--
-- Indici per le tabelle `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`loginEleve`);

--
-- Indici per le tabelle `fichier`
--
ALTER TABLE `fichier`
  ADD PRIMARY KEY (`nomFichier`,`loginEleve`),
  ADD KEY `nomMatiere` (`nomMatiere`),
  ADD KEY `loginEleve` (`loginEleve`),
  ADD KEY `nomClasse` (`nomClasse`);

--
-- Indici per le tabelle `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`nomMatiere`),
  ADD KEY `nomClasse` (`nomClasse`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `classe_ibfk_1` FOREIGN KEY (`nomClasse`) REFERENCES `eleve` (`loginEleve`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limiti per la tabella `fichier`
--
ALTER TABLE `fichier`
  ADD CONSTRAINT `fichier_ibfk_1` FOREIGN KEY (`loginEleve`) REFERENCES `eleve` (`loginEleve`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fichier_ibfk_2` FOREIGN KEY (`nomMatiere`) REFERENCES `matiere` (`nomMatiere`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fichier_ibfk_3` FOREIGN KEY (`nomClasse`) REFERENCES `classe` (`nomClasse`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `matiere_ibfk_2` FOREIGN KEY (`nomClasse`) REFERENCES `classe` (`nomClasse`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
