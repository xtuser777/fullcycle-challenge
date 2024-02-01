import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset) private assetRepository: Repository<Asset>,
  ) {}

  create(createAssetDto: CreateAssetDto) {
    return this.assetRepository.save(createAssetDto);
  }

  findAll() {
    return this.assetRepository.find();
  }
}
