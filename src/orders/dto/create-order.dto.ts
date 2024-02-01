import { CreateAssetDto } from '../../assets/dto/create-asset.dto';

export class CreateOrderDto {
  price: number;

  asset: CreateAssetDto;

  asset_id: number;
}
