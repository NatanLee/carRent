-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 13 2022 г., 21:34
-- Версия сервера: 8.0.19
-- Версия PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cars`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cars`
--

CREATE TABLE `cars` (
  `id` int NOT NULL,
  `name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `year` int NOT NULL,
  `air_conditioner` tinyint(1) NOT NULL DEFAULT '0',
  `engine_power` int DEFAULT NULL,
  `transmission` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `drive` varchar(20) DEFAULT NULL,
  `doors` int DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `rent_class` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cars`
--

INSERT INTO `cars` (`id`, `name`, `year`, `air_conditioner`, `engine_power`, `transmission`, `drive`, `doors`, `status`, `rent_class`) VALUES
(1, 'Daewoo Matiz', 2009, 0, 58, 'MT', 'Передний', 5, 'free', 1),
(2, 'Chevrolet Lanos', 2008, 1, 78, 'MT', 'передний', 5, 'buzy', 1),
(3, 'Chevrolet Spark', 2008, 1, 50, 'AT', 'передний', 5, 'free', 1),
(4, 'Daewoo Matiz', 2010, 0, 58, 'AT', 'передний', 5, 'free', 1),
(5, 'Chevrolet Lanos', 2008, 1, 78, 'MT', 'передний', 5, 'buzy', 1),
(6, 'Chevrolet Daewoo Nexia', 2011, 0, 90, 'MT', 'передний', 5, 'reserve', 1),
(7, 'Chevrolet Lanos', 2008, 0, 78, 'MT', 'передний', 5, 'free', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `questions`
--

CREATE TABLE `questions` (
  `ind` int NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `questions`
--

INSERT INTO `questions` (`ind`, `phone`, `email`, `question`) VALUES
(1, '45555', 'qw@ere.er', 'sadasd');

-- --------------------------------------------------------

--
-- Структура таблицы `rent_price`
--

CREATE TABLE `rent_price` (
  `car_class` int NOT NULL,
  `days1_3` int DEFAULT NULL,
  `days4_6` int DEFAULT NULL,
  `days7_14` int DEFAULT NULL,
  `days15_` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rent_price`
--

INSERT INTO `rent_price` (`car_class`, `days1_3`, `days4_6`, `days7_14`, `days15_`) VALUES
(1, 600, 550, 500, 450);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`ind`);

--
-- Индексы таблицы `rent_price`
--
ALTER TABLE `rent_price`
  ADD PRIMARY KEY (`car_class`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `questions`
--
ALTER TABLE `questions`
  MODIFY `ind` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `rent_price`
--
ALTER TABLE `rent_price`
  MODIFY `car_class` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
