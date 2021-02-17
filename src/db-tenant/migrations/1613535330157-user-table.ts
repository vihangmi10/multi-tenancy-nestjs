import {MigrationInterface, QueryRunner} from "typeorm";

export class userTable1613535330157 implements MigrationInterface {
    name = 'userTable1613535330157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "publicId" uuid NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_db80c36b42e1818c6758f272f85" PRIMARY KEY ("id", "publicId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
