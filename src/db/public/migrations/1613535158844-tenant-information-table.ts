import {MigrationInterface, QueryRunner} from "typeorm";

export class tenantInformationTable1613535158844 implements MigrationInterface {
    name = 'tenantInformationTable1613535158844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tenant_information" ("id" SERIAL NOT NULL, "publicId" uuid NOT NULL, "tenantName" character varying NOT NULL, "schema" character varying NOT NULL, CONSTRAINT "PK_eacfd8ff6f0f3741be43862d484" PRIMARY KEY ("id", "publicId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tenant_information"`);
    }

}
