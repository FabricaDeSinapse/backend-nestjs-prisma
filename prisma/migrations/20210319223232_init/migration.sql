-- CreateTable
CREATE TABLE `Pokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `height` INTEGER,
UNIQUE INDEX `Pokemon.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pokemonId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD FOREIGN KEY (`pokemonId`) REFERENCES `Pokemon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
