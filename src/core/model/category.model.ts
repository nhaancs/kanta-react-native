export class CateLv1Model {
  id_lv1: number
  name: string
  categories_lv2: CateLv2Model[]
}

export class CateLv2Model {
  id_lv2: number
  id_lv1: number
  name: string
  categories_lv3: CateLv3Model[]
}

export class CateLv3Model {
  id_lv3: number
  id_lv2: number
  name: string
}
