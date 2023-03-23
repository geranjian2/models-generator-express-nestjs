import { Module } from '@nestjs/common';
import { TypeDocumentController } from '../controllers/type-document.controller';
import { TypeDocumentService } from '../service/type-document.service';

@Module({
  controllers: [TypeDocumentController],
  providers: [TypeDocumentService],
  imports: [],
})
export class TypeDocumentModule {}