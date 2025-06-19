import { Module } from '@nestjs/common';
import { ApiResponse } from './ApiResponse';

@Module({

    imports: [ApiResponse],
    controllers: [],
    providers: [],
    exports: [], // Export any services or modules if needed
})
export class ResponseModule {
  
    
}
