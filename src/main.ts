import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = 3001;
  await app.listen(port);
  console.log('Serveur démarré : http://localhost:' + port);
}

bootstrap();
