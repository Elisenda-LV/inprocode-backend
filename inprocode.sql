-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-02-2024 a las 19:16:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inprocode`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendars`
--

CREATE TABLE `calendars` (
  `id` int(6) NOT NULL,
  `title` varchar(30) NOT NULL,
  `start` datetime NOT NULL,
  `location` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calendars`
--

INSERT INTO `calendars` (`id`, `title`, `start`, `location`) VALUES
(11, 'Canet FC - Mataró CE', '2024-02-03 10:00:00', 'Canet Stadium'),
(13, 'UE Alella - Can Llong', '2024-02-04 12:00:00', 'Alella Stadium'),
(17, 'Vacarisses FC - UE Alella', '2024-02-10 18:00:00', 'Vacarisses Stadium'),
(20, 'Can Llong - Synera', '2024-02-02 16:00:00', 'Badia Stadium'),
(23, 'At.Terrassa - Calella CE', '2024-02-04 11:30:00', 'Terrassa Stadium');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `graphics`
--

CREATE TABLE `graphics` (
  `id` int(6) NOT NULL,
  `club` varchar(15) NOT NULL,
  `goals` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `graphics`
--

INSERT INTO `graphics` (`id`, `club`, `goals`) VALUES
(22, 'Basic Team', 23),
(23, 'Canet FC', 42),
(24, 'Mataró CE', 51),
(25, 'Can Llong', 12),
(26, 'CE Vacarisses', 37),
(27, 'At.Masnou', 34),
(28, 'FB Montcada B', 22),
(29, 'Aristoi FA', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leagues`
--

CREATE TABLE `leagues` (
  `id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `sport` varchar(20) NOT NULL,
  `category` varchar(10) NOT NULL,
  `location` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `leagues`
--

INSERT INTO `leagues` (`id`, `name`, `sport`, `category`, `location`) VALUES
(6, 'Lliga +30 ', 'F7', 'Women', 'El Maresme'),
(15, 'LFFV', 'Basket', 'Mixed', 'Manresa'),
(17, 'Padel Caldetes', 'Padel', 'Women', 'Caldes d\'Estrac'),
(20, ' Torneig Padel ', 'Padel', 'Mixed', 'Alella');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maps`
--

CREATE TABLE `maps` (
  `id` int(6) NOT NULL,
  `club` varchar(20) NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL,
  `stadium` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maps`
--

INSERT INTO `maps` (`id`, `club`, `longitude`, `latitude`, `stadium`) VALUES
(1, 'Llàntia FC', 2.4275573, 41.5489239, 'Football'),
(2, 'Mataró CE', 2.4406557, 41.5460416, 'Football'),
(3, 'Argentona', 2.3983779, 41.5497252, 'Basketball'),
(4, 'UE Cabrera', 2.3338444, 41.5246199, 'Football'),
(6, 'Molinos FC', 2.4140703, 41.5341753, 'Basketball'),
(7, 'Padel Indoor Mataró', 2.3472333, 41.5289653, 'Padel'),
(8, 'Beach Padel Club', 2.4683238, 41.5462887, 'Padel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teams`
--

CREATE TABLE `teams` (
  `id` int(6) NOT NULL,
  `league` int(6) NOT NULL,
  `club` varchar(30) NOT NULL,
  `sport` varchar(10) NOT NULL,
  `location` varchar(30) NOT NULL,
  `category` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calendars`
--
ALTER TABLE `calendars`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `graphics`
--
ALTER TABLE `graphics`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `leagues`
--
ALTER TABLE `leagues`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maps`
--
ALTER TABLE `maps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `league_id` (`league`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calendars`
--
ALTER TABLE `calendars`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `graphics`
--
ALTER TABLE `graphics`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `leagues`
--
ALTER TABLE `leagues`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `maps`
--
ALTER TABLE `maps`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`league`) REFERENCES `leagues` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
