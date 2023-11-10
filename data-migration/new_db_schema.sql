CREATE TABLE `Volumes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `number` integer,
  `title` varchar(255),
  `published_at` timestamp,
  `active` boolean,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `VolumeReleases` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `published_at` timestamp,
  `summary` longtext,
  `title` varchar(255),
  `number` integer
);

CREATE TABLE `VolumeSections` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `volume_id` integer,
  `title` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `Roles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `UserRoles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer,
  `role_id` integer,
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
  `bio` text,
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `Articles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `section_id` integer,
  `title` varchar(255),
  `summary` text,
  `slug` varchar(255),
  `citation` text COMMENT 'text to quote the article',
  `type` ENUM ('recension', 'article'),
  `active` boolean,
  `position` integer,
  `state_id` integer,
  `file_id` integer,
  `author_id` integer,
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
  `url` varchar(255),
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `States` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) COMMENT 'SUBMITTED, UNDER_REVIEW, EDITOR_SYNTHESIS, AUTHOR_REVISION, PUBLISHED, DECLINED',
  `updated_at` timestamp,
  `created_at` timestamp
);

ALTER TABLE `VolumeSections` ADD FOREIGN KEY (`volume_id`) REFERENCES `Volumes` (`id`);

ALTER TABLE `UserRoles` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `UserRoles` ADD FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`section_id`) REFERENCES `VolumeSections` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`state_id`) REFERENCES `States` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`file_id`) REFERENCES `Files` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`author_id`) REFERENCES `Authors` (`id`);

ALTER TABLE `ArticleContents` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `Abstracts` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ArticleThemes` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ArticleThemes` ADD FOREIGN KEY (`theme_id`) REFERENCES `Themes` (`id`);

ALTER TABLE `Footnotes` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `EvaluationReviewers` ADD FOREIGN KEY (`evaulation_id`) REFERENCES `Evaluations` (`id`);

ALTER TABLE `EvaluationReviewers` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Evaluations` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ReviewSyntheses` ADD FOREIGN KEY (`editor_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Reports` ADD FOREIGN KEY (`file_id`) REFERENCES `Files` (`id`);

ALTER TABLE `Reports` ADD FOREIGN KEY (`evaluation_id`) REFERENCES `Evaluations` (`id`);
