CREATE TABLE `Sites` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `Volumes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `number` integer,
  `title` varchar(255),
  `published_at` timestamp,
  `active` boolean,
  `slug` varchar(255),
  `site_id` integer,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `VolumeReleases` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `published_at` timestamp,
  `summary` longtext,
  `title` varchar(255),
  `number` integer,
  `site_id` integer,
  `volume_id` integer
);

CREATE TABLE `VolumeSections` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `volume_id` integer,
  `title` varchar(255),
  `active` boolean,
  `slug` varchar(255),
  `varchar` text,
  `position` integer,
  `summary` text,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `Users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `role` varchar(255),
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Authors` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `fullname` varchar(255),
  `slug` varchar(255),
  `bio` text,
  `site_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `ArticleAuthors` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `article_id` integer,
  `author_id` integer,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `Articles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `section_id` integer,
  `title` varchar(500),
  `subtitle` varchar(1000),
  `summary_fr` text,
  `summary_de` text,
  `summary_en` text,
  `slug` varchar(255),
  `citation` text COMMENT 'text to quote the article',
  `type` ENUM ('recension', 'article'),
  `active` boolean,
  `position` integer,
  `state_id` integer,
  `author_id` integer,
  `site_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `ArticleFiles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `file_id` integer,
  `article_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `ArticleContents` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `content` longtext,
  `version` integer,
  `article_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Abstracts` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `language` varchar(255),
  `content` text,
  `article_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Themes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `slug` varchar(255),
  `site_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `ArticleThemes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `article_id` integer,
  `theme_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Footnotes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `article_id` integer,
  `uid` varchar(255),
  `content` text,
  `position` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `EvaluationReviewers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `evaulation_id` integer,
  `user_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Evaluations` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `article_id` integer,
  `favorable` boolean,
  `evaluation_date` timestamp,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `ReviewSyntheses` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `version` integer,
  `content` text,
  `editor_id` integer,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Reports` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `file_id` integer,
  `evaluation_id` integer,
  `criteria` integer,
  `comment` text,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Files` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `filename` varchar(255),
  `name` varchar(255),
  `type` ENUM ('AUDIO', 'VIDEO', 'IMAGE', 'DOCUMENT', 'AUTRE'),
  `active` boolean,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `States` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) COMMENT 'SUBMITTED, UNDER_REVIEW, EDITOR_SYNTHESIS, AUTHOR_REVISION, PUBLISHED, DECLINED',
  `updated_at` timestamp,
  `created_at` timestamp
);

ALTER TABLE `Volumes` ADD FOREIGN KEY (`site_id`) REFERENCES `Sites` (`id`);

ALTER TABLE `VolumeReleases` ADD FOREIGN KEY (`site_id`) REFERENCES `Sites` (`id`);

ALTER TABLE `VolumeReleases` ADD FOREIGN KEY (`volume_id`) REFERENCES `Volumes` (`id`);

ALTER TABLE `VolumeSections` ADD FOREIGN KEY (`volume_id`) REFERENCES `Volumes` (`id`);

ALTER TABLE `Authors` ADD FOREIGN KEY (`site_id`) REFERENCES `Sites` (`id`);

ALTER TABLE `ArticleAuthors` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ArticleAuthors` ADD FOREIGN KEY (`author_id`) REFERENCES `Authors` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`section_id`) REFERENCES `VolumeSections` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`state_id`) REFERENCES `States` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`author_id`) REFERENCES `Authors` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`site_id`) REFERENCES `Sites` (`id`);

ALTER TABLE `ArticleFiles` ADD FOREIGN KEY (`file_id`) REFERENCES `Files` (`id`);

ALTER TABLE `ArticleFiles` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ArticleContents` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `Abstracts` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `Themes` ADD FOREIGN KEY (`site_id`) REFERENCES `Sites` (`id`);

ALTER TABLE `ArticleThemes` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ArticleThemes` ADD FOREIGN KEY (`theme_id`) REFERENCES `Themes` (`id`);

ALTER TABLE `Footnotes` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `EvaluationReviewers` ADD FOREIGN KEY (`evaulation_id`) REFERENCES `Evaluations` (`id`);

ALTER TABLE `EvaluationReviewers` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Evaluations` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ReviewSyntheses` ADD FOREIGN KEY (`editor_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Reports` ADD FOREIGN KEY (`file_id`) REFERENCES `Files` (`id`);

ALTER TABLE `Reports` ADD FOREIGN KEY (`evaluation_id`) REFERENCES `Evaluations` (`id`);
