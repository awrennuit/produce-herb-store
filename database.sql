DROP TABLE "herbs";

CREATE TABLE "herbs" (
	"id" serial primary key,
	"name" varchar(100) not null,
	"quantity" integer not null,
	"price" integer not null,
	"per" varchar(25) not null,
	"description" varchar(255),
	"image_path" varchar(255) not null
);

INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Elderberries', 14, 18, 'pound', 'Elderberry has been used in syrups, teas, and medicines for centuries as an immune-booster and cough suppressant.', 'elderberry.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Peppermint', 8, 17, 'pound', 'Peppermint aids digestion and is great for sore muscles, too.', 'peppermint.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Yarrow Leaf & Stem', 11, 14, 'pound', 'Yarrow has been used for clotting wounds, regulating menstrual flow, and healing skin irritations.', 'yarrow.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Goldenrod', 23, 10, 'pound', 'Goldenrod is said to be excellent for allergies and for toning the urinary system.', 'goldenrod.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Mugwort', 3, 19, 'pound', 'Mugwort is a well-known "magikal" herb. It has been used for astral travel, visions, and also for facilitating digestion.', 'mugwort.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('St John''s Wort', 9, 19, 'pound', 'St. John''s Wort is reported to alleviate the symptoms associated with depression and to heal sunburns and other skin irritations.', 'st-johns-wort.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Cherry Bark', 25, 21, 'pound', 'Cherry Bark is an anti-inflammatory often used in cough syrups.', 'cherry-bark.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Rosehips', 4, 12, 'pound', 'Rosehips have extraordinarily high levels of Vitamin C. They are antioxidant and may soothe a sore throat.', 'rosehips.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Slippery Elm Bark - Powdered', 19, 17, 'pound', 'Slippery Elm is reported to be excellent at coating a sore throat and helping upset stomachs.', 'slippery-elm.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Nettle', 13, 17, 'pound', 'Nettle makes a wonderful, albeit grassy-flavored, tonic. Nettle has high amounts of calcium, magnesium, Vitamin A, and even some protein.', 'nettle.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Lemon Balm', 22, 24, 'pound', 'Lemon Balm is very calming. It has been used for easing muscle tension, soothing irritated skin, and calming anxiety.', 'lemon-balm.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Calendula Flowers', 15, 12, 'pound', 'Calendula has been used primarily for skin irritations, cuts, and bruises.', 'calendula.jpg');
INSERT INTO "herbs"("name", "quantity", "price", "per", "description", "image_path") VALUES('Chamomile Flowers', 38, 11, 'pound', 'Chamomile is widely used as a relaxing tea. It may also aid intenstinal cramping.', 'chamomile.jpg');